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

// Location markers - strategically positioned to avoid text overlap
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
        // Animate zoom from world view to UK/Ireland focus like hirok.io
        const zoomTimer = setTimeout(() => {
            setZoom(5.5); // Strong zoom on UK/Ireland region
            setCenter([-4, 54]); // Center between Ireland and UK
        }, 800);

        // Show location labels after zoom animation completes
        const labelTimer = setTimeout(() => {
            setShowLabels(true);
        }, 2300);

        return () => {
            clearTimeout(zoomTimer);
            clearTimeout(labelTimer);
        };
    }, []);

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
                    <motion.g
                        animate={{
                            scale: zoom,
                            x: -(center[0] * zoom * 2),
                            y: -(center[1] * zoom * 2),
                        }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                    <ZoomableGroup
                        center={[0, 20]}
                        zoom={1}
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
                                    {/* Marker Circle - smaller and more subtle */}
                                    {location.primary ? (
                                        <>
                                            <circle r={4} fill="#0BD7D4" opacity={0.25} />
                                            <circle r={2} fill="#0BD7D4" />
                                            <circle r={8} fill="none" stroke="#0BD7D4" strokeWidth={1} className="animate-ping" />
                                        </>
                                    ) : (
                                        <>
                                            <circle r={1.5} fill="#6B7280" opacity={0.3} />
                                            <circle r={0.8} fill="#9CA3AF" />
                                        </>
                                    )}

                                    {/* Location Label - tiny, subtle, positioned to avoid overlap */}
                                    {showLabels && (
                                        <motion.text
                                            initial={{ opacity: 0, y: -2 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + idx * 0.08, duration: 0.3 }}
                                            y={-6}
                                            textAnchor="middle"
                                            className={location.primary ? "fill-clepto-cyan font-semibold" : "fill-gray-400 font-normal"}
                                            style={{
                                                pointerEvents: 'none',
                                                fontSize: location.primary ? '5px' : '4px',
                                                letterSpacing: '0.2px',
                                                opacity: location.primary ? 0.9 : 0.6
                                            }}
                                        >
                                            {location.name}
                                        </motion.text>
                                    )}
                                </motion.g>
                            </Marker>
                        ))}
                    </ZoomableGroup>
                    </motion.g>
                </motion.g>
            </ComposableMap>
        </div>
    );
}
