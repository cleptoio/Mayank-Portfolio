"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// Clepto brand colors
const COLORS = {
    navy: "#0e172f",
    navyLight: "#151f38",
    cyan: "#0bd7d4",
    gold: "#FFD700",
    white: "#ffffff",
};

// UK & Ireland cities - positioned to avoid text overlap on left side
const cities = [
    { 
        name: "Dublin", 
        coordinates: [-6.2603, 53.3498], 
        isPrimary: true,
    },
    { 
        name: "London", 
        coordinates: [-0.1276, 51.5074], 
        isPrimary: false,
    },
    { 
        name: "Manchester", 
        coordinates: [-2.2426, 53.4808], 
        isPrimary: false,
    },
    { 
        name: "Leeds", 
        coordinates: [-1.5491, 53.8008], 
        isPrimary: false,
    },
    { 
        name: "Glasgow", 
        coordinates: [-4.2518, 55.8642], 
        isPrimary: false,
    },
    { 
        name: "Belfast", 
        coordinates: [-5.9301, 54.5973], 
        isPrimary: false,
    },
];

export function WorldMap() {
    const [animationPhase, setAnimationPhase] = useState<"initial" | "zooming" | "complete">("initial");

    // Animation timeline
    useEffect(() => {
        const zoomTimer = setTimeout(() => setAnimationPhase("zooming"), 600);
        const completeTimer = setTimeout(() => setAnimationPhase("complete"), 2800);

        return () => {
            clearTimeout(zoomTimer);
            clearTimeout(completeTimer);
        };
    }, []);

    // Map configuration - shifted RIGHT so Ireland/UK appears in center-right of viewport
    const mapConfig = useMemo(() => ({
        initial: { zoom: 1, center: [10, 45] as [number, number] },
        zooming: { zoom: 5, center: [-3, 54] as [number, number] },
        complete: { zoom: 5, center: [-3, 54] as [number, number] },
    }), []);

    const currentConfig = mapConfig[animationPhase];

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ backgroundColor: COLORS.navy }}>
            {/* Smooth zoom transition */}
            <style jsx global>{`
                .rsm-zoomable-group {
                    transition: transform 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
            `}</style>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full"
            >
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{ scale: 180 }}
                    style={{ width: "100%", height: "100%" }}
                >
                    <ZoomableGroup
                        center={currentConfig.center}
                        zoom={currentConfig.zoom}
                        filterZoomEvent={() => false}
                    >
                        {/* Map geography */}
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={COLORS.navyLight}
                                        stroke={COLORS.cyan}
                                        strokeWidth={0.15}
                                        style={{
                                            default: { outline: "none" },
                                            hover: { outline: "none" },
                                            pressed: { outline: "none" },
                                        }}
                                    />
                                ))
                            }
                        </Geographies>

                        {/* City markers */}
                        <AnimatePresence>
                            {animationPhase === "complete" && cities.map((city, index) => (
                                <Marker key={city.name} coordinates={city.coordinates as [number, number]}>
                                    <motion.g
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: index * 0.12,
                                            duration: 0.4,
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                    >
                                        {city.isPrimary ? (
                                            <PrimaryMarker />
                                        ) : (
                                            <SecondaryMarker name={city.name} index={index} />
                                        )}
                                    </motion.g>
                                </Marker>
                            ))}
                        </AnimatePresence>
                    </ZoomableGroup>
                </ComposableMap>
            </motion.div>

            {/* Gradient overlays for depth and text readability */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Left fade for text area */}
                <div 
                    className="absolute inset-y-0 left-0 w-1/2"
                    style={{
                        background: `linear-gradient(to right, ${COLORS.navy} 0%, ${COLORS.navy}ee 30%, transparent 100%)`
                    }}
                />
                {/* Vignette */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(ellipse 80% 80% at 70% 50%, transparent 0%, ${COLORS.navy}40 50%, ${COLORS.navy} 100%)`
                    }}
                />
            </div>
        </div>
    );
}

// Dublin marker with golden pulse
function PrimaryMarker() {
    return (
        <g>
            {/* Outer pulse ring */}
            <motion.circle
                r={4}
                fill="none"
                stroke={COLORS.gold}
                strokeWidth={1.5}
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            {/* Second pulse ring (delayed) */}
            <motion.circle
                r={4}
                fill="none"
                stroke={COLORS.gold}
                strokeWidth={1}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            />
            {/* Glow */}
            <circle r={3} fill={COLORS.gold} opacity={0.4} />
            {/* Core */}
            <circle r={2} fill={COLORS.gold} />
            
            {/* Label */}
            <text
                y={-12}
                textAnchor="middle"
                fill={COLORS.gold}
                style={{
                    fontSize: "5px",
                    fontWeight: 700,
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    letterSpacing: "0.5px",
                    textShadow: `0 0 8px ${COLORS.gold}80`,
                }}
            >
                DUBLIN
            </text>
        </g>
    );
}

// Other city markers with cyan dots
function SecondaryMarker({ name, index }: { name: string; index: number }) {
    // Calculate label position based on city to avoid overlaps
    type TextAnchor = "start" | "middle" | "end";
    const labelPositions: Record<string, { x: number; y: number; anchor: TextAnchor }> = {
        London: { x: 4, y: 1, anchor: "start" },
        Manchester: { x: 4, y: 0, anchor: "start" },
        Leeds: { x: 4, y: -1, anchor: "start" },
        Glasgow: { x: -4, y: -2, anchor: "end" },
        Belfast: { x: -4, y: 1, anchor: "end" },
    };

    const pos = labelPositions[name] || { x: 4, y: 0, anchor: "start" as TextAnchor };

    return (
        <g>
            {/* Subtle pulse */}
            <motion.circle
                r={1.5}
                fill={COLORS.cyan}
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
            />
            {/* Core dot */}
            <circle r={1} fill={COLORS.cyan} />
            
            {/* Label */}
            <text
                x={pos.x}
                y={pos.y}
                textAnchor={pos.anchor}
                dominantBaseline="middle"
                fill={COLORS.white}
                style={{
                    fontSize: "3px",
                    fontWeight: 500,
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    opacity: 0.7,
                }}
            >
                {name}
            </text>
        </g>
    );
}
