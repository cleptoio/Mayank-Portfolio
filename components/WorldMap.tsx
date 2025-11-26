"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const INITIAL_DELAY = 500;
const ZOOM_DURATION = 1800;
const LABEL_DELAY = INITIAL_DELAY + ZOOM_DURATION + 200;

export function WorldMap() {
    const [isZoomed, setIsZoomed] = useState(false);
    const [showMarkers, setShowMarkers] = useState(false);
    const [showLabels, setShowLabels] = useState(false);

    useEffect(() => {
        const zoomTimer = setTimeout(() => setIsZoomed(true), INITIAL_DELAY);
        const markerTimer = setTimeout(() => setShowMarkers(true), INITIAL_DELAY + 600);
        const labelTimer = setTimeout(() => setShowLabels(true), LABEL_DELAY);

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
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div
                    className="w-full h-full origin-center"
                    initial={{ scale: 1, x: 0, y: 0 }}
                    animate={isZoomed ? { 
                        scale: 4.5,
                        x: "15%",
                        y: "-25%"
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

                            {locations.map((location, idx) => (
                                <Marker key={location.name} coordinates={location.coords}>
                                    {/* Markers */}
                                    <AnimatePresence>
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
                                                        {/* Pulse ring */}
                                                        <circle r={6} fill="#0BD7D4" opacity={0.2}>
                                                            <animate
                                                                attributeName="r"
                                                                from="3"
                                                                to="10"
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
                                                        {/* Glow */}
                                                        <circle r={4} fill="#0BD7D4" opacity={0.35} />
                                                        {/* Core */}
                                                        <circle r={2.5} fill="#0BD7D4" />
                                                    </>
                                                ) : (
                                                    <>
                                                        <circle r={1.8} fill="#4B5563" opacity={0.6} />
                                                        <circle r={1} fill="#9CA3AF" />
                                                    </>
                                                )}
                                            </motion.g>
                                        )}
                                    </AnimatePresence>

                                    {/* City Labels */}
                                    <AnimatePresence>
                                        {showLabels && (
                                            <motion.g
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ 
                                                    delay: idx * 0.06, 
                                                    duration: 0.4 
                                                }}
                                            >
                                                {/* Text stroke/outline for readability */}
                                                <text
                                                    y={location.primary ? -10 : -7}
                                                    textAnchor="middle"
                                                    fill="none"
                                                    stroke="#0D1B2A"
                                                    strokeWidth={location.primary ? 2.5 : 2}
                                                    style={{
                                                        fontSize: location.primary ? "6px" : "4.5px",
                                                        fontWeight: location.primary ? 700 : 500,
                                                        fontFamily: "system-ui, -apple-system, sans-serif",
                                                        letterSpacing: "0.5px",
                                                        paintOrder: "stroke fill",
                                                    }}
                                                >
                                                    {location.name}
                                                </text>
                                                {/* Main text */}
                                                <text
                                                    y={location.primary ? -10 : -7}
                                                    textAnchor="middle"
                                                    fill={location.primary ? "#0BD7D4" : "#94A3B8"}
                                                    style={{
                                                        fontSize: location.primary ? "6px" : "4.5px",
                                                        fontWeight: location.primary ? 700 : 500,
                                                        fontFamily: "system-ui, -apple-system, sans-serif",
                                                        letterSpacing: "0.5px",
                                                    }}
                                                >
                                                    {location.name}
                                                </text>
                                            </motion.g>
                                        )}
                                    </AnimatePresence>
                                </Marker>
                            ))}
                        </ZoomableGroup>
                    </ComposableMap>
                </motion.div>
            </motion.div>
        </div>
    );
}
