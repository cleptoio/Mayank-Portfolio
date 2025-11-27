"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Building2 } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";

export function ExperienceTimeline() {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
            {/* Vertical Timeline Line - Desktop only - NO RED */}
            <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-clepto-cyan/50 via-blue-500/50 to-clepto-cyan/50 hidden md:block" />

            <div className="relative space-y-8 md:space-y-12">
                {EXPERIENCE.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        whileHover={{ x: 4 }}
                        className="relative group"
                    >
                        {/* Timeline Dot - Desktop only - NO RED */}
                        <div className="absolute -left-1.5 sm:left-6.5 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-clepto-cyan to-blue-400 border-4 border-clepto-navy group-hover:scale-125 transition-transform hidden md:block z-10" />

                        <div className="relative md:ml-16 p-5 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-clepto-navy/70 to-navy-darker/90 border border-gray-800/50 backdrop-blur-sm hover:border-clepto-cyan/30 transition-all duration-300 overflow-hidden">
                            {/* Tech Grid Background */}
                            <div className="absolute inset-0 opacity-[0.03]">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `
                                        linear-gradient(0deg, transparent 24%, rgba(11, 215, 212, 0.1) 25%, rgba(11, 215, 212, 0.1) 26%, transparent 27%, transparent 74%, rgba(11, 215, 212, 0.1) 75%, rgba(11, 215, 212, 0.1) 76%, transparent 77%, transparent),
                                        linear-gradient(90deg, transparent 24%, rgba(11, 215, 212, 0.1) 25%, rgba(11, 215, 212, 0.1) 26%, transparent 27%, transparent 74%, rgba(11, 215, 212, 0.1) 75%, rgba(11, 215, 212, 0.1) 76%, transparent 77%, transparent)
                                    `,
                                    backgroundSize: '40px 40px'
                                }} />
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-clepto-cyan/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Glow Effect - NO RED */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-clepto-cyan/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10" />

                            <div className="relative">
                                {/* Header */}
                                <div className="flex flex-col gap-4 mb-5">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div className="space-y-2 flex-1">
                                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-clepto-cyan transition-colors duration-300">
                                                {exp.role}
                                            </h3>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-2 text-gray-300">
                                                    <Building2 className="w-4 h-4 text-clepto-cyan shrink-0" />
                                                    <span className="font-semibold">{exp.company}</span>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400">
                                                    <div className="flex items-center gap-1.5">
                                                        <MapPin className="w-3.5 h-3.5 text-clepto-cyan shrink-0" />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                    <span className="hidden sm:inline text-gray-600">•</span>
                                                    <div className="flex items-center gap-1.5">
                                                        {/* Calendar icon - changed from red to cyan */}
                                                        <Calendar className="w-3.5 h-3.5 text-clepto-cyan shrink-0" />
                                                        <span className="font-mono">{exp.period}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 mb-5 leading-relaxed text-sm sm:text-base">
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
                                            transition={{ delay: index * 0.05 + i * 0.03 }}
                                            className="flex items-start gap-3 text-xs sm:text-sm text-gray-400"
                                        >
                                            {/* Bullet - NO RED */}
                                            <span className="mt-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-clepto-cyan to-blue-400 shrink-0 animate-glow" />
                                            <span className="leading-relaxed">{highlight}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
