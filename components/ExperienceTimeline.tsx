"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
    return (
        <div className="max-w-3xl mx-auto px-6">
            <div className="relative border-l border-border/50 ml-3 md:ml-6 space-y-12 pb-12">
                {EXPERIENCE.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                            <span className="text-sm font-mono text-accent/80">{exp.period}</span>
                        </div>

                        <div className="mb-4">
                            <span className="text-base font-medium text-muted-foreground">{exp.company}</span>
                            <span className="mx-2 text-border">•</span>
                            <span className="text-sm text-muted-foreground/60">{exp.location}</span>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                            {exp.desc}
                        </p>

                        <ul className="space-y-2">
                            {exp.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground/80">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
