"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
    return (
        <div className="relative container mx-auto px-6 lg:px-12">
            <div className="absolute left-6 lg:left-1/2 h-full w-px bg-border -translate-x-1/2" />

            <div className="space-y-12">
                {EXPERIENCE.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={cn(
                            "relative flex flex-col lg:flex-row gap-8 lg:gap-16",
                            index % 2 === 0 ? "lg:flex-row-reverse" : ""
                        )}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-6 lg:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_0_4px_rgba(var(--background),1)]" />

                        {/* Content */}
                        <div className="w-full lg:w-1/2 pl-12 lg:pl-0">
                            <div className={cn(
                                "p-6 rounded-lg border border-border bg-surface hover:border-accent/50 transition-colors",
                                index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                            )}>
                                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono mb-4">
                                    {exp.period}
                                </span>
                                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                <div className={cn(
                                    "flex items-center gap-2 mt-1 mb-4 text-muted-foreground",
                                    index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                                )}>
                                    <span className="font-medium">{exp.company}</span>
                                    <span>•</span>
                                    <span className="text-sm">{exp.location}</span>
                                </div>
                                <p className="text-muted-foreground mb-4">{exp.desc}</p>
                                <ul className={cn(
                                    "space-y-2",
                                    index % 2 === 0 ? "lg:items-end" : "lg:items-start"
                                )}>
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                                            <span className="text-accent mt-1.5">•</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Empty space for the other side */}
                        <div className="hidden lg:block w-1/2" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
