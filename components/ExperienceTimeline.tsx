"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";

export function ExperienceTimeline() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="relative space-y-12">
                {EXPERIENCE.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        whileHover={{ y: -6, scale: 1.01 }}
                        className="relative group"
                    >
                        <div className="relative p-8 rounded-2xl bg-clepto-navy/40 border border-gray-800/50 backdrop-blur-sm hover:border-clepto-cyan/30 transition-all duration-500 overflow-hidden">
                            {/* Gradient Background on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-clepto-cyan/5 to-clepto-red/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Glow Effect */}
                            <div className="absolute -inset-px bg-gradient-to-r from-clepto-cyan/20 to-clepto-red/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

                            <div className="relative">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-clepto-cyan transition-colors duration-300">
                                        {exp.role}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                                        <span className="font-semibold text-gray-300">{exp.company}</span>
                                        <span className="hidden sm:inline text-gray-600">•</span>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4 text-clepto-cyan" />
                                            <span className="text-sm">{exp.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-mono text-gray-500 whitespace-nowrap px-3 py-1.5 bg-clepto-navy/60 rounded-lg border border-gray-800/50">
                                        {exp.period}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 mb-5 leading-relaxed text-base">
                                {exp.desc}
                            </p>

                            {/* Highlights */}
                            <ul className="space-y-3">
                                {exp.highlights.map((highlight, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + i * 0.05 }}
                                        className="flex items-start gap-3 text-sm text-gray-400"
                                    >
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-clepto-cyan to-clepto-red shrink-0 animate-glow" />
                                        <span className="leading-relaxed">{highlight}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            </div>
                        </div>

                        {/* Connecting Line (except for last item) */}
                        {index < EXPERIENCE.length - 1 && (
                            <div className="absolute left-8 top-full h-12 w-px bg-gradient-to-b from-gray-800 to-transparent" />
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
