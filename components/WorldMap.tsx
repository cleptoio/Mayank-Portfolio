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
                    scale: 320,
                    center: [10, 50], // Center roughly around Europe/Dublin
                }}
                style={{ width: "100%", height: "100%" }}
            >
                <ZoomableGroup center={[10, 50]} zoom={1}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={theme === "dark" ? "#1F2426" : "#E5E7EB"}
                                    stroke={theme === "dark" ? "#32B8C6" : "#9CA3AF"}
                                    strokeWidth={0.5}
                                    style={{
                                        default: { outline: "none" },
                                        hover: { fill: theme === "dark" ? "#29A4B0" : "#D1D5DB", outline: "none" },
                                        pressed: { outline: "none" },
                                    }}
                                />
                            ))
                        }
                    </Geographies>

                    {/* Pulsing Marker for Dublin */}
                    <Marker coordinates={coordinates}>
                        <circle r={4} fill="#32B8C6" />
                        <circle r={8} fill="none" stroke="#32B8C6" strokeWidth={1} className="animate-ping" />
                        <circle r={12} fill="none" stroke="#32B8C6" strokeWidth={0.5} className="animate-pulse" />
                    </Marker>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
}
