"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
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
        base: "#0e172f", // Clepto Navy
        land: "#1a1a2e", // Darker Navy
        stroke: "#0bd7d4", // Cyan
        highlight: "#FFD700", // Gold/Yellow
    }
};

const markers = [
    { name: "Dublin", coordinates: [-6.2603, 53.3498], isPrimary: true },
    { name: "London", coordinates: [-0.1276, 51.5074], isPrimary: false },
    { name: "Paris", coordinates: [2.3522, 48.8566], isPrimary: false },
    { name: "Berlin", coordinates: [13.4050, 52.5200], isPrimary: false },
    { name: "Amsterdam", coordinates: [4.9041, 52.3676], isPrimary: false },
];

export function WorldMap() {
    // Memoize projection config to prevent re-renders
    const projectionConfig = useMemo(() => ({
        scale: 2000,
        center: [-4, 53] as [number, number], // Slightly offset to frame Europe/Dublin well
    }), []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0e172f]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full"
            >
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={projectionConfig}
                    style={{ width: "100%", height: "100%" }}
                >
                    <ZoomableGroup
                        center={[-4, 53]}
                        zoom={1}
                        filterZoomEvent={() => false} // Disable scroll zoom
                    >
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={theme.colors.land}
                                        stroke={theme.colors.stroke}
                                        strokeWidth={0.5}
                                        style={{
                                            default: { outline: "none", filter: "drop-shadow(0 0 4px rgba(11, 215, 212, 0.2))" },
                                            hover: { outline: "none", fill: "#232342", transition: "all 0.3s ease" },
                                            pressed: { outline: "none" },
                                        }}
                                    />
                                ))
                            }
                        </Geographies>

                        {/* Connection Lines (Simulated with SVG lines for "Cyber" feel) */}
                        <svg className="overflow-visible">
                            {markers.filter(m => !m.isPrimary).map((city, i) => (
                                <motion.line
                                    key={`line-${i}`}
                                    x1="-6.2603" // Dublin Long (approx mapped) - simpler to use Marker for lines but SVG line is easier for direct drawing if we had projected coords. 
                                // React-simple-maps makes drawing lines between coords tricky without a Line component.
                                // Let's skip complex lines for now to avoid breakage and focus on dots.
                                />
                            ))}
                        </svg>

                        {markers.map(({ name, coordinates, isPrimary }) => (
                            <Marker key={name} coordinates={coordinates as [number, number]}>
                                {isPrimary ? (
                                    <g>
                                        {/* Pulsing Outer Ring */}
                                        <motion.circle
                                            r={12}
                                            fill={theme.colors.highlight}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: [0, 0.3, 0], scale: [1, 2, 2.5] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                        />
                                        {/* Inner Glow */}
                                        <circle r={6} fill={theme.colors.highlight} opacity={0.6} filter="blur(2px)" />
                                        {/* Core Dot */}
                                        <circle r={4} fill={theme.colors.highlight} />

                                        {/* Label */}
                                        <text
                                            textAnchor="middle"
                                            y={-20}
                                            style={{
                                                fontFamily: "var(--font-geist-sans), sans-serif",
                                                fontSize: "24px",
                                                fontWeight: "bold",
                                                fill: theme.colors.highlight,
                                                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8))"
                                            }}
                                        >
                                            DUBLIN
                                        </text>
                                    </g>
                                ) : (
                                    <g>
                                        <motion.circle
                                            r={2}
                                            fill={theme.colors.stroke}
                                            initial={{ opacity: 0.4 }}
                                            animate={{ opacity: [0.4, 1, 0.4] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
                                        />
                                    </g>
                                )}
                            </Marker>
                        ))}
                    </ZoomableGroup>
                </ComposableMap>
            </motion.div>

            {/* Vignette Overlay for depth */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,#0e172f_100%)]" />
        </div>
    );
}
