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

const locations = [
    { name: "Dublin", coords: [-6.2603, 53.3498] as [number, number], primary: true },
    { name: "London", coords: [-0.1276, 51.5074] as [number, number], primary: false },
    { name: "Leeds", coords: [-1.5491, 53.8008] as [number, number], primary: false },
    { name: "Manchester", coords: [-2.2426, 53.4808] as [number, number], primary: false },
    { name: "Edinburgh", coords: [-3.1883, 55.9533] as [number, number], primary: false },
    { name: "Belfast", coords: [-5.9301, 54.5973] as [number, number], primary: false },
    { name: "Liverpool", coords: [-2.9916, 53.4084] as [number, number], primary: false },
];

export function WorldMap() {
    const [isZoomed, setIsZoomed] = useState(false);
    const [showMarkers, setShowMarkers] = useState(false);
    const [showLabels, setShowLabels] = useState(false);

    useEffect(() => {
        const zoomTimer = setTimeout(() => setIsZoomed(true), 500);
        const markerTimer = setTimeout(() => setShowMarkers(true), 1200);
        const labelTimer = setTimeout(() => setShowLabels(true), 2000);

        return () => {
            clearTimeout(zoomTimer);
            clearTimeout(markerTimer);
            clearTimeout(labelTimer);
        };
    }, []);

    return (
        <div className="w-full h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
            <motion.div
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="w-full h-full origin-center"
                    initial={{ scale: 1, x: 0, y: 0 }}
                    animate={isZoomed ? { 
                        scale: 5,
                        x: "5%",
                        y: "-30%"
                    } : { 
                        scale: 1, 
                        x: 0, 
                        y: 0 
                    }}
                    transition={{ 
                        duration: 1.8, 
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                >
                    <ComposableMap
                        projection="geoMercator"
                        projectionConfig={{
                            scale: 180,
                            center: [0, 45],
                        }}
                        style={{ width: "100%", height: "100%" }}
                    >
                        <ZoomableGroup
                            center={[0, 45]}
                            zoom={1}
                            filterZoomEvent={() => false}
                        >
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill="#2A4A6F"
                                            stroke="#3D5A80"
                                            strokeWidth={0.5}
                                            style={{
                                                default: { outline: "none" },
                                                hover: { outline: "none" },
                                                pressed: { outline: "none" },
                                            }}
                                        />
                                    ))
                                }
                            </Geographies>

                            {/* Markers */}
                            {locations.map((location, idx) => (
                                <Marker key={location.name} coordinates={location.coords}>
                                    {showMarkers && (
                                        <motion.g
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ 
                                                delay: idx * 0.08, 
                                                duration: 0.4, 
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 15
                                            }}
                                        >
                                            {location.primary ? (
                                                <>
                                                    <circle r={5} fill="#0BD7D4" opacity={0.2}>
                                                        <animate
                                                            attributeName="r"
                                                            from="3"
                                                            to="8"
                                                            dur="2s"
                                                            repeatCount="indefinite"
                                                        />
                                                        <animate
                                                            attributeName="opacity"
                                                            from="0.4"
                                                            to="0"
                                                            dur="2s"
                                                            repeatCount="indefinite"
                                                        />
                                                    </circle>
                                                    <circle r={3} fill="#0BD7D4" opacity={0.4} />
                                                    <circle r={1.8} fill="#0BD7D4" />
                                                </>
                                            ) : (
                                                <>
                                                    <circle r={1.2} fill="#4B5563" opacity={0.6} />
                                                    <circle r={0.7} fill="#9CA3AF" />
                                                </>
                                            )}
                                        </motion.g>
                                    )}

                                    {/* Labels - using regular SVG text with motion wrapper */}
                                    {showLabels && (
                                        <motion.g
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: idx * 0.05, duration: 0.5 }}
                                        >
                                            {/* Shadow/stroke for contrast */}
                                            <text
                                                y={location.primary ? -8 : -5}
                                                x={0}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                stroke="#0D1B2A"
                                                strokeWidth={location.primary ? 3 : 2}
                                                fill="none"
                                                fontSize={location.primary ? 5 : 3.5}
                                                fontWeight={location.primary ? 700 : 500}
                                                fontFamily="system-ui, sans-serif"
                                                letterSpacing="0.5"
                                            >
                                                {location.name}
                                            </text>
                                            {/* Main text */}
                                            <text
                                                y={location.primary ? -8 : -5}
                                                x={0}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                fill={location.primary ? "#0BD7D4" : "#94A3B8"}
                                                fontSize={location.primary ? 5 : 3.5}
                                                fontWeight={location.primary ? 700 : 500}
                                                fontFamily="system-ui, sans-serif"
                                                letterSpacing="0.5"
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
