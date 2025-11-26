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

export function WorldMap() {
    const { theme } = useTheme();
    const [zoom, setZoom] = useState(1);
    const [center, setCenter] = useState<[number, number]>([0, 20]);

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

        return () => {
            clearTimeout(timer1);
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

                        {/* Dublin Marker - Clean and visible */}
                        <Marker coordinates={dublinCoords}>
                            <motion.g
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 2, duration: 0.5, type: "spring" }}
                            >
                                <circle r={8} fill="#0BD7D4" opacity={0.3} />
                                <circle r={5} fill="#0BD7D4" />
                                <circle r={15} fill="none" stroke="#0BD7D4" strokeWidth={2} className="animate-ping" />
                            </motion.g>
                        </Marker>
                    </ZoomableGroup>
                </motion.g>
            </ComposableMap>
        </div>
    );
}
