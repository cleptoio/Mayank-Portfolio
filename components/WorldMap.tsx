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

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const timers = [
            setTimeout(() => setAnimationStage(1), 100),
            setTimeout(() => setAnimationStage(2), 1000),
            setTimeout(() => setAnimationStage(3), 1500),
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
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0e172f]">
            <motion.div
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    className="w-full h-full"
                    style={{ transformOrigin: "50% 50%" }}
                    initial={{ scale: 1.2 }}
                    animate={{
                        scale: isMobile ? 1.5 : 1, // Adjust initial scale if needed, but we rely on projectionConfig mostly
                    }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <ComposableMap
                        projection="geoMercator"
                        projectionConfig={{
                            scale: isMobile ? 1800 : 2800, // Much higher scale for zoom
                            center: [-6.2603, 53.3498], // Centered on Dublin
                        }}
                        style={{ width: "100%", height: "100%" }}
                    >
                        <ZoomableGroup
                            center={[-6.2603, 53.3498]}
                            zoom={1}
                            filterZoomEvent={() => false}
                        >
                            {/* Map Geography */}
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => {
                                        // Optional: Highlight Ireland slightly differently if desired, 
                                        // but for now keeping uniform dark cyber style
                                        return (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill="#1a1a2e" // Dark Navy
                                                stroke="#0bd7d4" // Cyan
                                                strokeWidth={0.5}
                                                style={{
                                                    default: { outline: "none", filter: "drop-shadow(0 0 2px rgba(11, 215, 212, 0.3))" },
                                                    hover: { outline: "none", fill: "#232342", transition: "all 0.3s" },
                                                    pressed: { outline: "none" },
                                                }}
                                            />
                                        );
                                    })
                                }
                            </Geographies>

                            {/* Dublin Marker */}
                            <Marker coordinates={[-6.2603, 53.3498]}>
                                {showMarkers && (
                                    <motion.g
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5, type: "spring" }}
                                    >
                                        {/* Pulsing rings */}
                                        <circle r={8} fill="#FFD700" opacity={0.2}>
                                            <animate attributeName="r" from="8" to="20" dur="1.5s" repeatCount="indefinite" />
                                            <animate attributeName="opacity" from="0.4" to="0" dur="1.5s" repeatCount="indefinite" />
                                        </circle>
                                        <circle r={4} fill="#FFD700" />
                                    </motion.g>
                                )}
                                
                                {showLabels && (
                                    <motion.text
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        x={0}
                                        y={25}
                                        textAnchor="middle"
                                        className="text-2xl font-bold fill-[#FFD700]"
                                        style={{ 
                                            fontSize: isMobile ? "24px" : "32px", 
                                            fontWeight: "bold",
                                            filter: "drop-shadow(0 0 4px rgba(255, 215, 0, 0.5))",
                                            fontFamily: "Orbitron, sans-serif" // Assuming Orbitron is available or fallback
                                        }}
                                    >
                                        DUBLIN
                                    </motion.text>
                                )}
                            </Marker>

                            {/* Decorative Particles/Dots around Europe */}
                            {/* Adding some random static or slowly moving dots for "cyber" feel */}
                            {[
                                [-0.1276, 51.5074], // London
                                [2.3522, 48.8566],  // Paris
                                [4.9041, 52.3676],  // Amsterdam
                                [-3.7038, 40.4168], // Madrid
                                [13.4050, 52.5200], // Berlin
                            ].map((coords, i) => (
                                <Marker key={i} coordinates={coords as [number, number]}>
                                    <circle r={1.5} fill="#0bd7d4" opacity={0.6} />
                                </Marker>
                            ))}

                        </ZoomableGroup>
                    </ComposableMap>
                </motion.div>
            </motion.div>
            
            {/* Vignette / Overlay for better text contrast if needed, 
                though Hero.tsx handles some of this. 
                Adding a subtle radial gradient here can help focus on the center. */}
            <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-[#0e172f]/50 to-[#0e172f]" />
        </div>
    );
}
