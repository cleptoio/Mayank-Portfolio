"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Building2 } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";

export function ExperienceTimeline() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            {/* Timeline Line */}
            <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-clepto-cyan/60 via-clepto-cyan/30 to-clepto-cyan/60 hidden md:block" />

            <div className="relative space-y-10 md:space-y-16">
                {EXPERIENCE.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ x: 4 }}
                        className="relative group"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-1.5 sm:left-6.5 top-10 w-5 h-5 rounded-full bg-clepto-cyan border-4 border-clepto-navy group-hover:scale-125 transition-transform hidden md:block z-10" />

                        <div className="relative md:ml-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-clepto-navy/70 to-navy-darker/90 border border-gray-800/50 backdrop-blur-sm hover:border-clepto-cyan/30 transition-all duration-300 overflow-hidden">
                            {/* Grid Background */}
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
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-clepto-cyan/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Glow */}
                            <div className="absolute -inset-0.5 bg-clepto-cyan/5 rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10" />

                            <div className="relative">
                                <div className="flex flex-col gap-5 mb-6">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                        <div className="space-y-3 flex-1">
                                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-clepto-cyan transition-colors duration-300">
                                                {exp.role}
                                            </h3>
                                            <div className="flex flex-col gap-3">
                                                <div className="flex items-center gap-3 text-gray-300">
                                                    <Building2 className="w-5 h-5 text-clepto-cyan shrink-0" />
                                                    <span className="font-semibold text-lg">{exp.company}</span>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-gray-400">
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="w-4 h-4 text-clepto-cyan shrink-0" />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                    <span className="hidden sm:inline text-gray-600">|</span>
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="w-4 h-4 text-clepto-cyan shrink-0" />
                                                        <span className="font-mono text-clepto-cyan/80">{exp.period}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-6 leading-relaxed text-base sm:text-lg">
                                    {exp.desc}
                                </p>

                                <ul className="space-y-4">
                                    {exp.highlights.map((highlight, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 + i * 0.03 }}
                                            className="flex items-start gap-4 text-base sm:text-lg text-gray-400"
                                        >
                                            <span className="mt-2.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-clepto-cyan shrink-0 animate-glow" />
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
