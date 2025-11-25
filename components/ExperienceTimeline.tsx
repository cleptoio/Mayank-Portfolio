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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="relative group"
                    >
                        <div className="p-6 rounded-2xl bg-clepto-navy/30 border border-gray-800/50 backdrop-blur-sm hover:border-clepto-cyan/30 transition-all duration-300">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <span className="font-medium">{exp.company}</span>
                                        <span className="text-gray-600">•</span>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            <span className="text-sm">{exp.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-mono text-gray-500 whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                {exp.desc}
                            </p>

                            {/* Highlights */}
                            <ul className="space-y-2.5">
                                {exp.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-clepto-cyan shrink-0" />
                                        <span className="leading-relaxed">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
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
