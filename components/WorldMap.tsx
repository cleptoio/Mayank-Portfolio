"use client";

import { useTheme } from "next-themes";
import { useMemo } from "react";
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

    // Dublin coordinates
    const coordinates: [number, number] = [PERSONAL_INFO.coordinates[0], PERSONAL_INFO.coordinates[1]];

    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden bg-transparent">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 600, // Zoomed in more
                    center: [10, 50], // Keep center but scale handles zoom
                }}
                style={{ width: "100%", height: "100%" }}
            >
                <ZoomableGroup center={[0, 50]} zoom={1}> {/* Adjusted center to be closer to Dublin/Europe */}
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={theme === "dark" ? "#151f38" : "#E5E7EB"} // Darker fill
                                    stroke={theme === "dark" ? "#1c2745" : "#9CA3AF"} // Subtle stroke
                                    strokeWidth={0.5}
                                    style={{
                                        default: { outline: "none" },
                                        hover: { fill: theme === "dark" ? "#1c2745" : "#D1D5DB", outline: "none" },
                                        pressed: { outline: "none" },
                                    }}
                                />
                            ))
                        }
                    </Geographies>

                    {/* Pulsing Marker for Dublin */}
                    <Marker coordinates={coordinates}>
                        <circle r={4} fill="#00f2ea" />
                        <circle r={8} fill="none" stroke="#00f2ea" strokeWidth={1} className="animate-ping" />
                        <circle r={12} fill="none" stroke="#00f2ea" strokeWidth={0.5} className="animate-pulse" />
                    </Marker>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
}
