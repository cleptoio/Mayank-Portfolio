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

const theme = {
    colors: {
        base: "#0e172f",
        land: "#1a1a2e",
        stroke: "#0bd7d4",
        highlight: "#FFD700",
    }
};

// UK & Ireland cities with label positions to avoid overlap
const cities = [
    { 
        name: "DUBLIN", 
        coordinates: [-6.2603, 53.3498], 
        isPrimary: true,
        labelOffset: { x: 0, y: -28 }
    },
    { 
        name: "London", 
        coordinates: [-0.1276, 51.5074], 
        isPrimary: false,
        labelOffset: { x: 18, y: 4 }
    },
    { 
        name: "Manchester", 
        coordinates: [-2.2426, 53.4808], 
        isPrimary: false,
        labelOffset: { x: 22, y: 0 }
    },
    { 
        name: "Leeds", 
        coordinates: [-1.5491, 53.8008], 
        isPrimary: false,
        labelOffset: { x: 16, y: -8 }
    },
    { 
        name: "Glasgow", 
        coordinates: [-4.2518, 55.8642], 
        isPrimary: false,
        labelOffset: { x: -20, y: -10 }
    },
    { 
        name: "Belfast", 
        coordinates: [-5.9301, 54.5973], 
        isPrimary: false,
        labelOffset: { x: -18, y: 5 }
    },
];

export function WorldMap() {
    const [zoom, setZoom] = useState(0.8);
    const [center, setCenter] = useState<[number, number]>([0, 40]);
    const [showMarkers, setShowMarkers] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        // Start zoom animation after short delay
        const zoomTimer = setTimeout(() => {
            setZoom(4.5);
            setCenter([-4, 54]); // Center on Ireland/UK
        }, 800);

        // Show markers after zoom completes
        const markerTimer = setTimeout(() => {
            setShowMarkers(true);
        }, 2500);

        // Mark animation complete
        const completeTimer = setTimeout(() => {
            setAnimationComplete(true);
        }, 3500);

        return () => {
            clearTimeout(zoomTimer);
            clearTimeout(markerTimer);
            clearTimeout(completeTimer);
        };
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0e172f]">
            {/* CSS for smooth zoom transition */}
            <style jsx global>{`
                .world-map-container g[class*="rsm-zoomable-group"] {
                    transition: transform 2s cubic-bezier(0.4, 0, 0.2, 1);
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
                    projectionConfig={{
                        scale: 200,
                    }}
                    style={{ width: "100%", height: "100%" }}
                    className="world-map-container"
                >
                    <ZoomableGroup 
                        center={center} 
                        zoom={zoom}
                        minZoom={0.8}
                        maxZoom={6}
                        filterZoomEvent={() => false}
                        translateExtent={[[-Infinity, -Infinity], [Infinity, Infinity]]}
                    >
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={theme.colors.land}
                                        stroke={theme.colors.stroke}
                                        strokeWidth={0.3}
                                        style={{
                                            default: { 
                                                outline: "none",
                                            },
                                            hover: { outline: "none" },
                                            pressed: { outline: "none" },
                                        }}
                                    />
                                ))
                            }
                        </Geographies>

                        {/* City markers - appear after zoom */}
                        <AnimatePresence>
                            {showMarkers && cities.map(({ name, coordinates, isPrimary, labelOffset }, index) => (
                                <Marker key={name} coordinates={coordinates as [number, number]}>
                                    <motion.g
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ 
                                            delay: index * 0.15,
                                            duration: 0.5,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                    >
                                        {isPrimary ? (
                                            <>
                                                {/* Pulsing ring for Dublin */}
                                                <motion.circle
                                                    r={8}
                                                    fill="none"
                                                    stroke={theme.colors.highlight}
                                                    strokeWidth={2}
                                                    initial={{ scale: 0.5, opacity: 1 }}
                                                    animate={{ scale: 2.5, opacity: 0 }}
                                                    transition={{ 
                                                        duration: 2, 
                                                        repeat: Infinity,
                                                        ease: "easeOut"
                                                    }}
                                                />
                                                {/* Inner glow */}
                                                <circle 
                                                    r={4} 
                                                    fill={theme.colors.highlight} 
                                                    opacity={0.5}
                                                    filter="url(#glow)"
                                                />
                                                {/* Core dot */}
                                                <circle r={3} fill={theme.colors.highlight} />
                                                
                                                {/* DUBLIN label */}
                                                <text
                                                    x={labelOffset.x}
                                                    y={labelOffset.y}
                                                    textAnchor="middle"
                                                    style={{
                                                        fontFamily: "system-ui, -apple-system, sans-serif",
                                                        fontSize: "14px",
                                                        fontWeight: 800,
                                                        fill: theme.colors.highlight,
                                                        letterSpacing: "1px",
                                                    }}
                                                >
                                                    {name}
                                                </text>
                                            </>
                                        ) : (
                                            <>
                                                {/* Small dot for other cities */}
                                                <motion.circle
                                                    r={2}
                                                    fill={theme.colors.stroke}
                                                    animate={animationComplete ? { 
                                                        opacity: [0.5, 1, 0.5]
                                                    } : {}}
                                                    transition={{ 
                                                        duration: 3, 
                                                        repeat: Infinity,
                                                        delay: Math.random() * 2
                                                    }}
                                                />
                                                
                                                {/* City label */}
                                                <text
                                                    x={labelOffset.x}
                                                    y={labelOffset.y}
                                                    textAnchor={labelOffset.x < 0 ? "end" : "start"}
                                                    dominantBaseline="middle"
                                                    style={{
                                                        fontFamily: "system-ui, -apple-system, sans-serif",
                                                        fontSize: "8px",
                                                        fontWeight: 600,
                                                        fill: "#ffffff",
                                                        opacity: 0.75,
                                                    }}
                                                >
                                                    {name}
                                                </text>
                                            </>
                                        )}
                                    </motion.g>
                                </Marker>
                            ))}
                        </AnimatePresence>

                        {/* SVG filter for glow effect */}
                        <defs>
                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                    </ZoomableGroup>
                </ComposableMap>
            </motion.div>

            {/* Vignette overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_40%,#0e172f_100%)]" />
        </div>
    );
}
