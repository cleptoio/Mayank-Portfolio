"use client";

import { useTheme } from "next-themes";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup,
} from "react-simple-maps";
import { PERSONAL_INFO } from "@/lib/data";

const geoUrl =
    "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// Location markers to show after zoom animation
const locations = [
    { name: "Dublin", coords: [-6.2603, 53.3498] as [number, number], primary: true },
    { name: "London", coords: [-0.1276, 51.5074] as [number, number], primary: false },
    { name: "Paris", coords: [2.3522, 48.8566] as [number, number], primary: false },
    { name: "Berlin", coords: [13.4050, 52.5200] as [number, number], primary: false },
];

export function WorldMap() {
    const { theme } = useTheme();
    const [zoom, setZoom] = useState(1);
    const [center, setCenter] = useState<[number, number]>([0, 20]);
    const [showLabels, setShowLabels] = useState(false);

    // Dublin coordinates - memoized to prevent re-renders
    const dublinCoords: [number, number] = useMemo(
        () => [PERSONAL_INFO.coordinates[0], PERSONAL_INFO.coordinates[1]],
        []
    );

    useEffect(() => {
        // Animate zoom on mount - like hirok.io
        const timer1 = setTimeout(() => {
            setZoom(3);
            setCenter(dublinCoords);
        }, 800);

        // Show location labels after zoom completes
        const timer2 = setTimeout(() => {
            setShowLabels(true);
        }, 2500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [dublinCoords]);

    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden bg-transparent">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 200,
                }}
                style={{ width: "100%", height: "100%" }}
            >
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <ZoomableGroup
                        center={center}
                        zoom={zoom}
                        filterZoomEvent={() => true}
                    >
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill="#1A2847"
                                        stroke="#2A3F5F"
                                        strokeWidth={0.5}
                                        style={{
                                            default: { outline: "none" },
                                            hover: { fill: "#243B5A", outline: "none" },
                                            pressed: { outline: "none" },
                                        }}
                                    />
                                ))
                            }
                        </Geographies>

                        {/* Location Markers */}
                        {locations.map((location, idx) => (
                            <Marker key={location.name} coordinates={location.coords}>
                                <motion.g
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 2 + idx * 0.1, duration: 0.5, type: "spring" }}
                                >
                                    {/* Marker Circle */}
                                    {location.primary ? (
                                        <>
                                            <circle r={8} fill="#0BD7D4" opacity={0.3} />
                                            <circle r={5} fill="#0BD7D4" />
                                            <circle r={15} fill="none" stroke="#0BD7D4" strokeWidth={2} className="animate-ping" />
                                        </>
                                    ) : (
                                        <>
                                            <circle r={4} fill="#6B7280" opacity={0.5} />
                                            <circle r={2.5} fill="#9CA3AF" />
                                        </>
                                    )}

                                    {/* Location Label - appears after animation */}
                                    {showLabels && (
                                        <motion.text
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                                            y={location.primary ? -15 : -10}
                                            textAnchor="middle"
                                            className={location.primary ? "fill-clepto-cyan text-xs font-semibold" : "fill-gray-400 text-[10px] font-medium"}
                                            style={{ pointerEvents: 'none' }}
                                        >
                                            {location.name}
                                        </motion.text>
                                    )}
                                </motion.g>
                            </Marker>
                        ))}
                    </ZoomableGroup>
                </motion.g>
            </ComposableMap>
        </div>
    );
}
