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
    // 0 = initial, 1 = zoomed, 2 = markers visible, 3 = labels visible

    useEffect(() => {
        const timers = [
            setTimeout(() => setAnimationStage(1), 400),   // Start zoom
            setTimeout(() => setAnimationStage(2), 1800),  // Show markers
            setTimeout(() => setAnimationStage(3), 2400),  // Show labels
        ];
        return () => timers.forEach(clearTimeout);
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
                    - origin-[60%_40%] = zoom origin at center-right, slightly above center
                    - This keeps Ireland/UK visible after zoom
                    - x translate shifts map left so Dublin appears more centered
                */}
                <motion.div
                    className="w-full h-full"
                    style={{ transformOrigin: "60% 40%" }}
                    initial={{ scale: 1, x: 0, y: 0 }}
                    animate={isZoomed ? { 
                        scale: 6,
                        x: "-10%",
                        y: "5%"
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
                                            fill="#2A4A6F"
                                            stroke="#3D5A80"
                                            strokeWidth={0.4}
                                            style={{
                                                default: { outline: "none" },
                                                hover: { outline: "none" },
                                                pressed: { outline: "none" },
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
                                                    {/* Animated pulse */}
                                                    <circle r={3} fill="#0BD7D4" opacity={0.3}>
                                                        <animate
                                                            attributeName="r"
                                                            from="2"
                                                            to="6"
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
                                                    <circle r={2.5} fill="#0BD7D4" opacity={0.4} />
                                                    {/* Core */}
                                                    <circle r={1.5} fill="#0BD7D4" />
                                                </>
                                            ) : (
                                                <>
                                                    <circle r={1} fill="#64748B" opacity={0.6} />
                                                    <circle r={0.5} fill="#94A3B8" />
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
                                            {/* Text shadow for readability */}
                                            <text
                                                x={location.labelOffset.x}
                                                y={location.labelOffset.y}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                stroke="#0D1B2A"
                                                strokeWidth={location.primary ? 2.5 : 2}
                                                fill="none"
                                                fontSize={location.primary ? 4 : 3}
                                                fontWeight={location.primary ? 700 : 500}
                                                fontFamily="system-ui, -apple-system, sans-serif"
                                            >
                                                {location.name}
                                            </text>
                                            {/* Main text */}
                                            <text
                                                x={location.labelOffset.x}
                                                y={location.labelOffset.y}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                fill={location.primary ? "#0BD7D4" : "#94A3B8"}
                                                fontSize={location.primary ? 4 : 3}
                                                fontWeight={location.primary ? 700 : 500}
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
