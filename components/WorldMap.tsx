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
    navy: "#0E172F",
    navyDark: "#070B1A",
    navyLight: "#1A2847",
    cyan: "#0BD7D4",
    white: "#ffffff",
    gray: "#A7A9A9",
};

// Major European cities only
const cities: Array<{
    name: string;
    coordinates: [number, number];
    isPrimary: boolean;
    labelPos: { x: number; y: number; anchor: "start" | "middle" | "end" };
}> = [
    // Primary - Dublin
    { 
        name: "Dublin", 
        coordinates: [-6.2603, 53.3498], 
        isPrimary: true,
        labelPos: { x: 0, y: -7, anchor: "middle" }
    },
    // Ireland
    { 
        name: "Cork", 
        coordinates: [-8.4863, 51.8985], 
        isPrimary: false,
        labelPos: { x: -2, y: 1, anchor: "end" }
    },
    // UK
    { 
        name: "London", 
        coordinates: [-0.1276, 51.5074], 
        isPrimary: false,
        labelPos: { x: 2, y: 1, anchor: "start" }
    },
    { 
        name: "Birmingham", 
        coordinates: [-1.8904, 52.4862], 
        isPrimary: false,
        labelPos: { x: 2, y: 0, anchor: "start" }
    },
    { 
        name: "Leeds", 
        coordinates: [-1.5491, 53.8008], 
        isPrimary: false,
        labelPos: { x: 2, y: -1, anchor: "start" }
    },
    { 
        name: "Manchester", 
        coordinates: [-2.2426, 53.4808], 
        isPrimary: false,
        labelPos: { x: 2, y: 1, anchor: "start" }
    },
    { 
        name: "Edinburgh", 
        coordinates: [-3.1883, 55.9533], 
        isPrimary: false,
        labelPos: { x: 2, y: -1, anchor: "start" }
    },
    // Western Europe
    { 
        name: "Paris", 
        coordinates: [2.3522, 48.8566], 
        isPrimary: false,
        labelPos: { x: 2, y: 1, anchor: "start" }
    },
    { 
        name: "Amsterdam", 
        coordinates: [4.9041, 52.3676], 
        isPrimary: false,
        labelPos: { x: 2, y: -1, anchor: "start" }
    },
    { 
        name: "Brussels", 
        coordinates: [4.3517, 50.8503], 
        isPrimary: false,
        labelPos: { x: 2, y: 1, anchor: "start" }
    },
    // Central Europe
    { 
        name: "Berlin", 
        coordinates: [13.4050, 52.5200], 
        isPrimary: false,
        labelPos: { x: 2, y: 0, anchor: "start" }
    },
    { 
        name: "Munich", 
        coordinates: [11.5820, 48.1351], 
        isPrimary: false,
        labelPos: { x: 2, y: 1, anchor: "start" }
    },
    { 
        name: "Vienna", 
        coordinates: [16.3738, 48.2082], 
        isPrimary: false,
        labelPos: { x: 2, y: 0, anchor: "start" }
    },
    // Southern Europe
    { 
        name: "Milan", 
        coordinates: [9.1900, 45.4642], 
        isPrimary: false,
        labelPos: { x: 2, y: 0, anchor: "start" }
    },
    { 
        name: "Rome", 
        coordinates: [12.4964, 41.9028], 
        isPrimary: false,
        labelPos: { x: 2, y: 1, anchor: "start" }
    },
    { 
        name: "Madrid", 
        coordinates: [-3.7038, 40.4168], 
        isPrimary: false,
        labelPos: { x: -2, y: 0, anchor: "end" }
    },
    { 
        name: "Barcelona", 
        coordinates: [2.1734, 41.3851], 
        isPrimary: false,
        labelPos: { x: 2, y: 0, anchor: "start" }
    },
    // Northern Europe
    { 
        name: "Stockholm", 
        coordinates: [18.0686, 59.3293], 
        isPrimary: false,
        labelPos: { x: 2, y: 0, anchor: "start" }
    },
    { 
        name: "Copenhagen", 
        coordinates: [12.5683, 55.6761], 
        isPrimary: false,
        labelPos: { x: 2, y: -1, anchor: "start" }
    },
];

export function WorldMap() {
    const [phase, setPhase] = useState<"init" | "zoom" | "done">("init");
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Animation timeline
    useEffect(() => {
        const t1 = setTimeout(() => setPhase("zoom"), 500);
        const t2 = setTimeout(() => setPhase("done"), 2800);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    // Map config - Dublin in the CLEAR area (right of text, left of photo)
    const config = useMemo(() => {
        const mobileConfig = {
            init: { zoom: 1, center: [5, 50] as [number, number] },
            zoom: { zoom: 3, center: [-6, 53] as [number, number] },
            done: { zoom: 3, center: [-6, 53] as [number, number] },
        };
        const desktopConfig = {
            init: { zoom: 1.2, center: [10, 50] as [number, number] },
            // Center at [-12, 52] shifts map so Dublin (-6.26) appears RIGHT of center
            zoom: { zoom: 3.2, center: [-12, 52] as [number, number] },
            done: { zoom: 3.2, center: [-12, 52] as [number, number] },
        };
        return isMobile ? mobileConfig : desktopConfig;
    }, [isMobile]);

    const current = config[phase];

    // Filter cities for mobile (show fewer)
    const visibleCities = useMemo(() => {
        if (isMobile) {
            const mobileCities = [
                "Dublin", "London", "Paris", "Berlin", "Amsterdam", "Madrid", "Rome"
            ];
            return cities.filter(c => c.isPrimary || mobileCities.includes(c.name));
        }
        return cities;
    }, [isMobile]);

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
                    projectionConfig={{ scale: isMobile ? 150 : 180 }}
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
                                        strokeWidth={0.1}
                                        style={{
                                            default: { outline: "none" },
                                            hover: { outline: "none" },
                                            pressed: { outline: "none" },
                                        }}
                                    />
                                ))
                            }
                        </Geographies>

                        {/* Connection lines from Dublin */}
                        <AnimatePresence>
                            {phase === "done" && visibleCities.filter(c => !c.isPrimary).map((city, i) => {
                                const dublin = cities[0].coordinates;
                                return (
                                    <motion.line
                                        key={`line-${city.name}`}
                                        x1={dublin[0]}
                                        y1={dublin[1]}
                                        x2={city.coordinates[0]}
                                        y2={city.coordinates[1]}
                                        stroke={COLORS.cyan}
                                        strokeWidth={0.06}
                                        strokeDasharray="0.4,0.4"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 0.2 }}
                                        transition={{ duration: 1.2, delay: i * 0.03 }}
                                    />
                                );
                            })}
                        </AnimatePresence>

                        {/* City markers */}
                        <AnimatePresence>
                            {phase === "done" && visibleCities.map((city, idx) => (
                                <Marker key={city.name} coordinates={city.coordinates}>
                                    <motion.g
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: city.isPrimary ? 0 : 0.2 + idx * 0.04,
                                            duration: 0.35,
                                            type: "spring",
                                            stiffness: 280,
                                            damping: 22,
                                        }}
                                    >
                                        {city.isPrimary ? (
                                            <DublinMarker isMobile={isMobile} />
                                        ) : (
                                            <CityMarker 
                                                name={city.name} 
                                                labelPos={city.labelPos}
                                                delay={idx * 0.1}
                                                isMobile={isMobile}
                                            />
                                        )}
                                    </motion.g>
                                </Marker>
                            ))}
                        </AnimatePresence>
                    </ZoomableGroup>
                </ComposableMap>
            </motion.div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Left fade - very narrow, just for text readability */}
                <div 
                    className="absolute inset-y-0 left-0 w-[28%]"
                    style={{
                        background: `linear-gradient(to right, ${COLORS.navy} 0%, ${COLORS.navy}cc 70%, transparent 100%)`
                    }}
                />
                {/* Right fade for profile area */}
                <div 
                    className="absolute inset-y-0 right-0 w-[20%] hidden lg:block"
                    style={{
                        background: `linear-gradient(to left, ${COLORS.navy}60 0%, transparent 100%)`
                    }}
                />
                {/* Very subtle vignette - centered more to the right */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(ellipse 90% 90% at 55% 50%, transparent 0%, ${COLORS.navy}30 70%, ${COLORS.navy}90 100%)`
                    }}
                />
                {/* Top fade */}
                <div 
                    className="absolute inset-x-0 top-0 h-20"
                    style={{
                        background: `linear-gradient(to bottom, ${COLORS.navy} 0%, transparent 100%)`
                    }}
                />
                {/* Bottom fade */}
                <div 
                    className="absolute inset-x-0 bottom-0 h-20"
                    style={{
                        background: `linear-gradient(to top, ${COLORS.navy} 0%, transparent 100%)`
                    }}
                />
            </div>
        </div>
    );
}

// Dublin marker - LARGE and prominent with clear label
function DublinMarker({ isMobile }: { isMobile: boolean }) {
    const size = isMobile ? 1 : 1.4;
    
    return (
        <g>
            {/* Outer pulse ring 1 */}
            <motion.circle
                r={3.5 * size}
                fill="none"
                stroke={COLORS.cyan}
                strokeWidth={1.2 * size}
                initial={{ scale: 1, opacity: 0.9 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            />
            {/* Outer pulse ring 2 */}
            <motion.circle
                r={3.5 * size}
                fill="none"
                stroke={COLORS.cyan}
                strokeWidth={0.8 * size}
                initial={{ scale: 1, opacity: 0.7 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
            />
            {/* Glow */}
            <circle r={3 * size} fill={COLORS.cyan} opacity={0.35} />
            {/* Core */}
            <circle r={2 * size} fill={COLORS.cyan} />
            
            {/* Label background for readability */}
            <rect
                x={-12 * size}
                y={-12 * size}
                width={24 * size}
                height={6 * size}
                rx={1}
                fill={COLORS.navy}
                opacity={0.8}
            />
            
            {/* DUBLIN label */}
            <text
                y={-8 * size}
                textAnchor="middle"
                fill={COLORS.cyan}
                style={{
                    fontSize: `${isMobile ? 4.5 : 5.5}px`,
                    fontWeight: 700,
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    letterSpacing: "1.5px",
                }}
            >
                DUBLIN
            </text>
        </g>
    );
}

// Secondary city markers
function CityMarker({ 
    name, 
    labelPos,
    delay,
    isMobile
}: { 
    name: string; 
    labelPos: { x: number; y: number; anchor: "start" | "middle" | "end" };
    delay: number;
    isMobile: boolean;
}) {
    const size = isMobile ? 0.7 : 1;
    
    return (
        <g>
            {/* Breathing dot */}
            <motion.circle
                r={0.6 * size}
                fill={COLORS.cyan}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay }}
            />
            {/* Core */}
            <circle r={0.4 * size} fill={COLORS.cyan} />
            
            {/* City name */}
            <text
                x={labelPos.x * size}
                y={labelPos.y * size}
                textAnchor={labelPos.anchor}
                dominantBaseline="middle"
                fill={COLORS.white}
                style={{
                    fontSize: `${isMobile ? 1.6 : 1.8}px`,
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
