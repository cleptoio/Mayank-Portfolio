"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// Reduced locations to prevent overlap - only key cities with good spacing
const locations = [
    { name: "Dublin", coords: [-6.2603, 53.3498] as [number, number], primary: true, labelOffset: { x: 0, y: -12 } },
    { name: "London", coords: [-0.1276, 51.5074] as [number, number], primary: false, labelOffset: { x: 12, y: 0 } },
    { name: "Edinburgh", coords: [-3.1883, 55.9533] as [number, number], primary: false, labelOffset: { x: 0, y: -8 } },
    { name: "Paris", coords: [2.3522, 48.8566] as [number, number], primary: false, labelOffset: { x: 0, y: 10 } },
];

export function WorldMap() {
    const [animationStage, setAnimationStage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    // 0 = initial, 1 = zoomed, 2 = markers visible, 3 = labels visible

    useEffect(() => {
        // Check if mobile on mount and window resize
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const timers = [
            setTimeout(() => setAnimationStage(1), 400),   // Start zoom
            setTimeout(() => setAnimationStage(2), 1800),  // Show markers
            setTimeout(() => setAnimationStage(3), 2400),  // Show labels
        ];
        return () => {
            timers.forEach(clearTimeout);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const isZoomed = animationStage >= 1;
    const showMarkers = animationStage >= 2;
    const showLabels = animationStage >= 3;

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <motion.div
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/*
                    Transform strategy:
                    - Desktop: Higher zoom (6x) centered on Dublin with offset positioning
                    - Mobile: Lower zoom (3x) to show more context and prevent overlap
                    - Transform origin adjusted based on viewport
                */}
                <motion.div
                    className="w-full h-full"
                    style={{ transformOrigin: isMobile ? "50% 50%" : "60% 40%" }}
                    initial={{ scale: 1, x: 0, y: 0 }}
                    animate={isZoomed ? {
                        scale: isMobile ? 3 : 6,
                        x: isMobile ? 0 : "-10%",
                        y: isMobile ? 0 : "5%"
                    } : {
                        scale: 1,
                        x: 0,
                        y: 0
                    }}
                    transition={{
                        duration: 2,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    <ComposableMap
                        projection="geoMercator"
                        projectionConfig={{
                            scale: 150,
                            center: [5, 50], // Centered on Western Europe
                        }}
                        style={{ width: "100%", height: "100%" }}
                    >
                        <ZoomableGroup
                            center={[5, 50]}
                            zoom={1}
                            filterZoomEvent={() => false}
                        >
                            {/* Map Geography */}
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill="#3D5A80"
                                            stroke="#5B7AA0"
                                            strokeWidth={0.5}
                                            style={{
                                                default: { outline: "none", opacity: 0.7 },
                                                hover: { outline: "none", opacity: 0.7 },
                                                pressed: { outline: "none", opacity: 0.7 },
                                            }}
                                        />
                                    ))
                                }
                            </Geographies>

                            {/* City Markers and Labels */}
                            {locations.map((location, idx) => (
                                <Marker key={location.name} coordinates={location.coords}>
                                    {/* Marker Dot */}
                                    {showMarkers && (
                                        <motion.g
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ 
                                                delay: idx * 0.15, 
                                                duration: 0.5, 
                                                type: "spring",
                                                stiffness: 150,
                                                damping: 12
                                            }}
                                        >
                                            {location.primary ? (
                                                <>
                                                    {/* Animated pulse - larger on desktop */}
                                                    <circle r={isMobile ? 4 : 5} fill="#0BD7D4" opacity={0.3}>
                                                        <animate
                                                            attributeName="r"
                                                            from={isMobile ? "3" : "4"}
                                                            to={isMobile ? "8" : "10"}
                                                            dur="2s"
                                                            repeatCount="indefinite"
                                                        />
                                                        <animate
                                                            attributeName="opacity"
                                                            from="0.5"
                                                            to="0"
                                                            dur="2s"
                                                            repeatCount="indefinite"
                                                        />
                                                    </circle>
                                                    {/* Glow */}
                                                    <circle r={isMobile ? 3.5 : 4} fill="#0BD7D4" opacity={0.4} />
                                                    {/* Core */}
                                                    <circle r={isMobile ? 2 : 2.5} fill="#0BD7D4" />
                                                </>
                                            ) : (
                                                <>
                                                    <circle r={isMobile ? 1.5 : 2} fill="#64748B" opacity={0.6} />
                                                    <circle r={isMobile ? 0.8 : 1} fill="#94A3B8" />
                                                </>
                                            )}
                                        </motion.g>
                                    )}

                                    {/* City Label */}
                                    {showLabels && (
                                        <motion.g
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        >
                                            {/* Text shadow for readability - increased stroke width */}
                                            <text
                                                x={location.labelOffset.x}
                                                y={location.labelOffset.y}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                stroke="#0D1B2A"
                                                strokeWidth={location.primary ? (isMobile ? 3 : 4) : (isMobile ? 2.5 : 3)}
                                                fill="none"
                                                fontSize={location.primary ? (isMobile ? 8 : 12) : (isMobile ? 6 : 9)}
                                                fontWeight={location.primary ? 700 : 600}
                                                fontFamily="system-ui, -apple-system, sans-serif"
                                            >
                                                {location.name}
                                            </text>
                                            {/* Main text - much larger font sizes */}
                                            <text
                                                x={location.labelOffset.x}
                                                y={location.labelOffset.y}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                fill={location.primary ? "#0BD7D4" : "#94A3B8"}
                                                fontSize={location.primary ? (isMobile ? 8 : 12) : (isMobile ? 6 : 9)}
                                                fontWeight={location.primary ? 700 : 600}
                                                fontFamily="system-ui, -apple-system, sans-serif"
                                            >
                                                {location.name}
                                            </text>
                                        </motion.g>
                                    )}
                                </Marker>
                            ))}
                        </ZoomableGroup>
                    </ComposableMap>
                </motion.div>
            </motion.div>
        </div>
    );
}
