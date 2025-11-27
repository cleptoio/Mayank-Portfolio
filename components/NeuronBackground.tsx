"use client";

import { useEffect, useRef, useCallback } from "react";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
}

export function NeuronBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const nodesRef = useRef<Node[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000, active: false });
    const animationRef = useRef<number>();
    const dimensionsRef = useRef({ width: 0, height: 0 });

    const initNodes = useCallback((width: number, height: number, isMobile: boolean) => {
        const nodeCount = isMobile ? 20 : 45;
        const speed = isMobile ? 0.2 : 0.3;
        const nodes: Node[] = [];
        
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * speed,
                vy: (Math.random() - 0.5) * speed,
            });
        }
        nodesRef.current = nodes;
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let isMobile = window.innerWidth < 768;

        const resize = () => {
            const rect = container.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            ctx.scale(dpr, dpr);
            
            dimensionsRef.current = { width: rect.width, height: rect.height };
            isMobile = window.innerWidth < 768;
            initNodes(rect.width, rect.height, isMobile);
        };

        resize();
        window.addEventListener("resize", resize);

        // Mouse events
        const onMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouseRef.current = { 
                x: e.clientX - rect.left, 
                y: e.clientY - rect.top,
                active: true
            };
        };

        const onMouseLeave = () => {
            mouseRef.current.active = false;
        };

        // Touch events for mobile
        const onTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const rect = container.getBoundingClientRect();
                mouseRef.current = {
                    x: e.touches[0].clientX - rect.left,
                    y: e.touches[0].clientY - rect.top,
                    active: true
                };
            }
        };

        const onTouchEnd = () => {
            mouseRef.current.active = false;
        };

        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseleave", onMouseLeave);
        container.addEventListener("touchmove", onTouchMove, { passive: true });
        container.addEventListener("touchend", onTouchEnd);

        // Animation
        const animate = () => {
            const { width, height } = dimensionsRef.current;
            if (!ctx || width === 0) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            ctx.clearRect(0, 0, width, height);
            
            const connectionDist = isMobile ? 70 : 90;
            const mouseInfluence = isMobile ? 60 : 80;

            nodesRef.current.forEach((node, i) => {
                // Move
                node.x += node.vx;
                node.y += node.vy;

                // Bounce
                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;
                node.x = Math.max(0, Math.min(width, node.x));
                node.y = Math.max(0, Math.min(height, node.y));

                // Mouse interaction
                if (mouseRef.current.active) {
                    const dx = mouseRef.current.x - node.x;
                    const dy = mouseRef.current.y - node.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouseInfluence && dist > 0) {
                        node.x -= (dx / dist) * 0.5;
                        node.y -= (dy / dist) * 0.5;
                    }
                }

                // Draw node
                ctx.beginPath();
                ctx.arc(node.x, node.y, isMobile ? 1.5 : 2, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(11, 215, 212, 0.5)";
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < nodesRef.current.length; j++) {
                    const other = nodesRef.current[j];
                    const dx = node.x - other.x;
                    const dy = node.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDist) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.strokeStyle = `rgba(11, 215, 212, ${(1 - dist / connectionDist) * 0.2})`;
                        ctx.lineWidth = isMobile ? 0.5 : 0.8;
                        ctx.stroke();
                    }
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            container.removeEventListener("mousemove", onMouseMove);
            container.removeEventListener("mouseleave", onMouseLeave);
            container.removeEventListener("touchmove", onTouchMove);
            container.removeEventListener("touchend", onTouchEnd);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [initNodes]);

    return (
        <div 
            ref={containerRef} 
            className="absolute inset-0 overflow-hidden z-0"
            style={{ touchAction: "pan-y" }}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ opacity: 0.6 }}
            />
        </div>
    );
}
