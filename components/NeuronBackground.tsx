"use client";

import { useEffect, useRef, useState } from "react";

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
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animationFrameRef = useRef<number>();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updateDimensions = () => {
            const rect = container.getBoundingClientRect();
            setDimensions({ width: rect.width, height: rect.height });
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container || dimensions.width === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const isMobile = dimensions.width < 768;

        // Set canvas size
        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        // Initialize nodes - fewer on mobile
        const nodeCount = isMobile ? 25 : 50;
        const nodes: Node[] = [];
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.35),
                vy: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.35),
            });
        }
        nodesRef.current = nodes;

        // Mouse movement (desktop)
        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        // Touch movement (mobile)
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const rect = container.getBoundingClientRect();
                mouseRef.current = {
                    x: e.touches[0].clientX - rect.left,
                    y: e.touches[0].clientY - rect.top,
                };
            }
        };

        const handleTouchEnd = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("touchmove", handleTouchMove, { passive: true });
        container.addEventListener("touchend", handleTouchEnd);

        const connectionDistance = isMobile ? 80 : 100;

        // Animation loop
        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            nodesRef.current.forEach((node, i) => {
                // Update position
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off edges
                if (node.x < 0) { node.x = 0; node.vx *= -1; }
                if (node.x > canvas.width) { node.x = canvas.width; node.vx *= -1; }
                if (node.y < 0) { node.y = 0; node.vy *= -1; }
                if (node.y > canvas.height) { node.y = canvas.height; node.vy *= -1; }

                // Mouse/touch interaction
                const dx = mouseRef.current.x - node.x;
                const dy = mouseRef.current.y - node.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100 && dist > 0) {
                    node.x -= (dx / dist) * 0.8;
                    node.y -= (dy / dist) * 0.8;
                }

                // Draw node
                ctx.beginPath();
                ctx.arc(node.x, node.y, isMobile ? 1.5 : 2, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(11, 215, 212, 0.5)";
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < nodesRef.current.length; j++) {
                    const otherNode = nodesRef.current[j];
                    const cdx = node.x - otherNode.x;
                    const cdy = node.y - otherNode.y;
                    const distance = Math.sqrt(cdx * cdx + cdy * cdy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(otherNode.x, otherNode.y);
                        const opacity = (1 - distance / connectionDistance) * 0.2;
                        ctx.strokeStyle = `rgba(11, 215, 212, ${opacity})`;
                        ctx.lineWidth = isMobile ? 0.5 : 0.8;
                        ctx.stroke();
                    }
                }
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("touchmove", handleTouchMove);
            container.removeEventListener("touchend", handleTouchEnd);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [dimensions]);

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
