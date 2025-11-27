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

// Clepto brand colors from tailwind config
const COLORS = {
    navy: "#0E172F",
    navyDark: "#070B1A",
    navyLight: "#1A2847",
    cyan: "#0BD7D4",
    cyanGlow: "rgba(11, 215, 212, 0.4)",
    white: "#ffffff",
    gray: "#A7A9A9",
};

// European cities - Dublin primary, others secondary
const cities: Array<{
    name: string;
    coordinates: [number, number];
    isPrimary: boolean;
    labelPos: { x: number; y: number; anchor: "start" | "middle" | "end" };
}> = [
    // Primary - Dublin (positioned for top-center focus)
    { 
        name: "Dublin", 
        coordinates: [-6.2603, 53.3498], 
        isPrimary: true,
        labelPos: { x: 0, y: -10, anchor: "middle" }
    },
    // UK & Ireland
    { 
        name: "Belfast", 
        coordinates: [-5.9301, 54.5973], 
        isPrimary: false,
        labelPos: { x: -3, y: 0, anchor: "end" }
    },
    { 
        name: "Glasgow", 
        coordinates: [-4.2518, 55.8642], 
        isPrimary: false,
        labelPos: { x: 3, y: -1, anchor: "start" }
    },
    { 
        name: "Manchester", 
        coordinates: [-2.2426, 53.4808], 
        isPrimary: false,
        labelPos: { x: 3, y: 0, anchor: "start" }
    },
    { 
        name: "Leeds", 
        coordinates: [-1.5491, 53.8008], 
        isPrimary: false,
        labelPos: { x: 3, y: -1, anchor: "start" }
    },
    { 
        name: "London", 
        coordinates: [-0.1276, 51.5074], 
        isPrimary: false,
        labelPos: { x: 3, y: 1, anchor: "start" }
    },
    // Europe
    { 
        name: "Amsterdam", 
        coordinates: [4.9041, 52.3676], 
        isPrimary: false,
        labelPos: { x: 0, y: -3, anchor: "middle" }
    },
    { 
        name: "Brussels", 
        coordinates: [4.3517, 50.8503], 
        isPrimary: false,
        labelPos: { x: 3, y: 0, anchor: "start" }
    },
    { 
        name: "Paris", 
        coordinates: [2.3522, 48.8566], 
        isPrimary: false,
        labelPos: { x: -3, y: 1, anchor: "end" }
    },
    { 
        name: "Berlin", 
        coordinates: [13.4050, 52.5200], 
        isPrimary: false,
        labelPos: { x: 3, y: 0, anchor: "start" }
    },
    { 
        name: "Frankfurt", 
        coordinates: [8.6821, 50.1109], 
        isPrimary: false,
        labelPos: { x: 3, y: 1, anchor: "start" }
    },
    { 
        name: "Munich", 
        coordinates: [11.5820, 48.1351], 
        isPrimary: false,
        labelPos: { x: 3, y: 0, anchor: "start" }
    },
    { 
        name: "Zurich", 
        coordinates: [8.5417, 47.3769], 
        isPrimary: false,
        labelPos: { x: -3, y: 0, anchor: "end" }
    },
    { 
        name: "Milan", 
        coordinates: [9.1900, 45.4642], 
        isPrimary: false,
        labelPos: { x: 3, y: 1, anchor: "start" }
    },
    { 
        name: "Copenhagen", 
        coordinates: [12.5683, 55.6761], 
        isPrimary: false,
        labelPos: { x: 3, y: -1, anchor: "start" }
    },
    { 
        name: "Stockholm", 
        coordinates: [18.0686, 59.3293], 
        isPrimary: false,
        labelPos: { x: 3, y: 0, anchor: "start" }
    },
];

export function WorldMap() {
    const [phase, setPhase] = useState<"init" | "zoom" | "done">("init");

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("zoom"), 500);
        const t2 = setTimeout(() => setPhase("done"), 2800);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    // Map positioning - Dublin appears in upper-center-right area
    const config = useMemo(() => ({
        init: { zoom: 1.2, center: [10, 50] as [number, number] },
        zoom: { zoom: 4, center: [3, 52] as [number, number] },
        done: { zoom: 4, center: [3, 52] as [number, number] },
    }), []);

    const current = config[phase];

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ background: COLORS.navy }}>
            {/* Smooth CSS transition for zoom */}
            <style jsx global>{`
                .rsm-zoomable-group {
                    transition: transform 2.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
            `}</style>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-full"
            >
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{ scale: 180 }}
                    style={{ width: "100%", height: "100%" }}
                >
                    <ZoomableGroup
                        center={current.center}
                        zoom={current.zoom}
                        filterZoomEvent={() => false}
                    >
                        {/* Map land masses */}
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={COLORS.navyLight}
                                        stroke={COLORS.cyan}
                                        strokeWidth={0.12}
                                        style={{
                                            default: { outline: "none" },
                                            hover: { outline: "none" },
                                            pressed: { outline: "none" },
                                        }}
                                    />
                                ))
                            }
                        </Geographies>

                        {/* Connection lines from Dublin to other cities */}
                        <AnimatePresence>
                            {phase === "done" && cities.filter(c => !c.isPrimary).map((city, i) => {
                                const dublin = cities[0].coordinates;
                                return (
                                    <motion.line
                                        key={`line-${city.name}`}
                                        x1={dublin[0]}
                                        y1={dublin[1]}
                                        x2={city.coordinates[0]}
                                        y2={city.coordinates[1]}
                                        stroke={COLORS.cyan}
                                        strokeWidth={0.08}
                                        strokeDasharray="0.5,0.5"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 0.25 }}
                                        transition={{ duration: 1.5, delay: i * 0.05 }}
                                    />
                                );
                            })}
                        </AnimatePresence>

                        {/* City markers */}
                        <AnimatePresence>
                            {phase === "done" && cities.map((city, idx) => (
                                <Marker key={city.name} coordinates={city.coordinates}>
                                    <motion.g
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: city.isPrimary ? 0 : 0.3 + idx * 0.08,
                                            duration: 0.4,
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                        }}
                                    >
                                        {city.isPrimary ? (
                                            <DublinMarker />
                                        ) : (
                                            <CityMarker 
                                                name={city.name} 
                                                labelPos={city.labelPos}
                                                delay={idx * 0.15}
                                            />
                                        )}
                                    </motion.g>
                                </Marker>
                            ))}
                        </AnimatePresence>
                    </ZoomableGroup>
                </ComposableMap>
            </motion.div>

            {/* Gradient overlays for depth */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Left fade for hero text readability */}
                <div 
                    className="absolute inset-y-0 left-0 w-[45%]"
                    style={{
                        background: `linear-gradient(to right, ${COLORS.navy} 0%, ${COLORS.navy}dd 50%, transparent 100%)`
                    }}
                />
                {/* Subtle vignette */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(ellipse 70% 70% at 65% 45%, transparent 0%, ${COLORS.navy}60 60%, ${COLORS.navy} 100%)`
                    }}
                />
                {/* Top fade */}
                <div 
                    className="absolute inset-x-0 top-0 h-24"
                    style={{
                        background: `linear-gradient(to bottom, ${COLORS.navy} 0%, transparent 100%)`
                    }}
                />
            </div>
        </div>
    );
}

// Dublin marker - CYAN colored with animated pulse rings
function DublinMarker() {
    return (
        <g>
            {/* Outer pulse ring 1 */}
            <motion.circle
                r={3}
                fill="none"
                stroke={COLORS.cyan}
                strokeWidth={1}
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            />
            {/* Outer pulse ring 2 (delayed) */}
            <motion.circle
                r={3}
                fill="none"
                stroke={COLORS.cyan}
                strokeWidth={0.8}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 3.5, opacity: 0 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
            />
            {/* Glow */}
            <circle r={2.5} fill={COLORS.cyan} opacity={0.3} />
            {/* Core dot */}
            <circle r={1.8} fill={COLORS.cyan} />
            
            {/* DUBLIN label */}
            <text
                y={-8}
                textAnchor="middle"
                fill={COLORS.cyan}
                style={{
                    fontSize: "4px",
                    fontWeight: 700,
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    letterSpacing: "0.8px",
                }}
            >
                DUBLIN
            </text>
        </g>
    );
}

// Secondary city markers - smaller, white/gray text
function CityMarker({ 
    name, 
    labelPos,
    delay 
}: { 
    name: string; 
    labelPos: { x: number; y: number; anchor: "start" | "middle" | "end" };
    delay: number;
}) {
    return (
        <g>
            {/* Subtle breathing animation */}
            <motion.circle
                r={0.8}
                fill={COLORS.cyan}
                animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay }}
            />
            {/* Core dot */}
            <circle r={0.5} fill={COLORS.cyan} />
            
            {/* City name - small text */}
            <text
                x={labelPos.x}
                y={labelPos.y}
                textAnchor={labelPos.anchor}
                dominantBaseline="middle"
                fill={COLORS.gray}
                style={{
                    fontSize: "2px",
                    fontWeight: 500,
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    opacity: 0.8,
                }}
            >
                {name}
            </text>
        </g>
    );
}
