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

// European cities - comprehensive list
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
    // UK & Ireland
    { 
        name: "Belfast", 
        coordinates: [-5.9301, 54.5973], 
        isPrimary: false,
        labelPos: { x: -2, y: -1, anchor: "end" }
    },
    { 
        name: "Edinburgh", 
        coordinates: [-3.1883, 55.9533], 
        isPrimary: false,
        labelPos: { x: 2, y: -1, anchor: "start" }
    },
    { 
        name: "Glasgow", 
        coordinates: [-4.2518, 55.8642], 
        isPrimary: false,
        labelPos: { x: -2, y: 0, anchor: "end" }
    },
    { 
        name: "Newcastle", 
        coordinates: [-1.6178, 54.9783], 
        isPrimary: false,
        labelPos: { x: 2, y: 0, anchor: "start" }
    },
    { 
        name: "Liverpool", 
        coordinates: [-2.9916, 53.4084], 
        isPrimary: false,
        labelPos: { x: -2, y: 1, anchor: "end" }
    },
    { 
        name: "Manchester", 
        coordinates: [-2.2426, 53.4808], 
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
        name: "Birmingham", 
        coordinates: [-1.8904, 52.4862], 
        isPrimary: false,
        labelPos: { x: -2, y: 0, anchor: "end" }
    },
    { 
        name: "London", 
        coordinates: [-0.1276, 51.5074], 
        isPrimary: false,
        labelPos: { x: 2, y: 1, anchor: "start" }
    },
    { 
        name: "Bristol", 
        coordinates: [-2.5879, 51.4545], 
        isPrimary: false,
        labelPos: { x: -2, y: 1, anchor: "end" }
    },
    { 
        name: "Cardiff", 
        coordinates: [-3.1791, 51.4816], 
        isPrimary: false,
        labelPos: { x: -2, y: 0, anchor: "end" }
    },
    // Western Europe
    { 
        name: "Amsterdam", 
        coordinates: [4.9041, 52.3676], 
        isPrimary: false,
        labelPos: { x: 0, y: -2, anchor: "middle" }
    },
    { 
        name: "Rotterdam", 
        coordinates: [4.4777, 51.9244], 
        isPrimary: false,
        labelPos: { x: 2, y: 1, anchor: "start" }
    },
    { 
        name: "Brussels", 
        coordinates: [4.3517, 50.8503], 
        isPrimary: false,
        labelPos: { x: 2, y: 0, anchor: "start" }
    },
    { 
        name: "Paris", 
        coordinates: [2.3522, 48.8566], 
        isPrimary: false,
        labelPos: { x: -2, y: 1, anchor: "end" }
    },
    { 
        name: "Lyon", 
        coordinates: [4.8357, 45.7640], 
        isPrimary: false,
        labelPos: { x: 2, y: 0, anchor: "start" }
    },
    // Central Europe
    { 
        name: "Berlin", 
        coordinates: [13.4050, 52.5200], 
        isPrimary: false,
        labelPos: { x: 2, y: -1, anchor: "start" }
    },
    { 
        name: "Hamburg", 
        coordinates: [9.9937, 53.5511], 
        isPrimary: false,
        labelPos: { x: 2, y: 0, anchor: "start" }
    },
    { 
        name: "Frankfurt", 
        coordinates: [8.6821, 50.1109], 
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
        name: "Zurich", 
        coordinates: [8.5417, 47.3769], 
        isPrimary: false,
        labelPos: { x: -2, y: 0, anchor: "end" }
    },
    { 
        name: "Vienna", 
        coordinates: [16.3738, 48.2082], 
        isPrimary: false,
        labelPos: { x: 2, y: 0, anchor: "start" }
    },
    { 
        name: "Prague", 
        coordinates: [14.4378, 50.0755], 
        isPrimary: false,
        labelPos: { x: 2, y: -1, anchor: "start" }
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
        name: "Barcelona", 
        coordinates: [2.1734, 41.3851], 
        isPrimary: false,
        labelPos: { x: -2, y: 1, anchor: "end" }
    },
    { 
        name: "Madrid", 
        coordinates: [-3.7038, 40.4168], 
        isPrimary: false,
        labelPos: { x: -2, y: 0, anchor: "end" }
    },
    { 
        name: "Lisbon", 
        coordinates: [-9.1393, 38.7223], 
        isPrimary: false,
        labelPos: { x: -2, y: 1, anchor: "end" }
    },
    // Northern Europe
    { 
        name: "Copenhagen", 
        coordinates: [12.5683, 55.6761], 
        isPrimary: false,
        labelPos: { x: 2, y: -1, anchor: "start" }
    },
    { 
        name: "Stockholm", 
        coordinates: [18.0686, 59.3293], 
        isPrimary: false,
        labelPos: { x: 2, y: 0, anchor: "start" }
    },
    { 
        name: "Oslo", 
        coordinates: [10.7522, 59.9139], 
        isPrimary: false,
        labelPos: { x: -2, y: 0, anchor: "end" }
    },
    { 
        name: "Helsinki", 
        coordinates: [24.9384, 60.1699], 
        isPrimary: false,
        labelPos: { x: 2, y: 0, anchor: "start" }
    },
    // Eastern Europe
    { 
        name: "Warsaw", 
        coordinates: [21.0122, 52.2297], 
        isPrimary: false,
        labelPos: { x: 2, y: 0, anchor: "start" }
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

    // Map config - Dublin positioned in center-left of viewport
    const config = useMemo(() => {
        const mobileConfig = {
            init: { zoom: 1, center: [5, 50] as [number, number] },
            zoom: { zoom: 3, center: [-6, 53] as [number, number] },
            done: { zoom: 3, center: [-6, 53] as [number, number] },
        };
        const desktopConfig = {
            init: { zoom: 1.2, center: [10, 50] as [number, number] },
            // Shift center RIGHT (higher longitude) so Dublin appears more LEFT in viewport
            zoom: { zoom: 3.5, center: [8, 52] as [number, number] },
            done: { zoom: 3.5, center: [8, 52] as [number, number] },
        };
        return isMobile ? mobileConfig : desktopConfig;
    }, [isMobile]);

    const current = config[phase];

    // Filter cities for mobile (show fewer)
    const visibleCities = useMemo(() => {
        if (isMobile) {
            const mobileCities = [
                "Dublin", "London", "Paris", "Berlin", "Amsterdam", 
                "Brussels", "Madrid", "Rome", "Stockholm", "Copenhagen"
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
                {/* Left fade for hero text - stronger on mobile */}
                <div 
                    className="absolute inset-y-0 left-0 w-[50%] md:w-[40%]"
                    style={{
                        background: `linear-gradient(to right, ${COLORS.navy} 0%, ${COLORS.navy}ee 40%, ${COLORS.navy}88 70%, transparent 100%)`
                    }}
                />
                {/* Right fade for profile area */}
                <div 
                    className="absolute inset-y-0 right-0 w-[30%] hidden lg:block"
                    style={{
                        background: `linear-gradient(to left, ${COLORS.navy}40 0%, transparent 100%)`
                    }}
                />
                {/* Subtle vignette */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(ellipse 80% 80% at 50% 50%, transparent 0%, ${COLORS.navy}50 70%, ${COLORS.navy} 100%)`
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

// Dublin marker - prominent cyan with pulse
function DublinMarker({ isMobile }: { isMobile: boolean }) {
    const size = isMobile ? 0.8 : 1;
    
    return (
        <g>
            {/* Outer pulse ring 1 */}
            <motion.circle
                r={2.5 * size}
                fill="none"
                stroke={COLORS.cyan}
                strokeWidth={0.8 * size}
                initial={{ scale: 1, opacity: 0.9 }}
                animate={{ scale: 5, opacity: 0 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            />
            {/* Outer pulse ring 2 */}
            <motion.circle
                r={2.5 * size}
                fill="none"
                stroke={COLORS.cyan}
                strokeWidth={0.6 * size}
                initial={{ scale: 1, opacity: 0.7 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
            />
            {/* Glow */}
            <circle r={2 * size} fill={COLORS.cyan} opacity={0.35} />
            {/* Core */}
            <circle r={1.4 * size} fill={COLORS.cyan} />
            
            {/* DUBLIN label - positioned above */}
            <text
                y={-6 * size}
                textAnchor="middle"
                fill={COLORS.cyan}
                style={{
                    fontSize: `${isMobile ? 3.5 : 4}px`,
                    fontWeight: 700,
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    letterSpacing: "1px",
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
