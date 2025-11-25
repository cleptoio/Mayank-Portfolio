"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SKILLS, CERTIFICATIONS } from "@/lib/data";
import { Award, Brain, Cloud, Database, Shield, Gavel, Cpu, BarChart3, Workflow, ShieldCheck, Kanban } from "lucide-react";

const iconMap: Record<string, any> = {
    Cloud,
    Shield,
    Gavel,
    Brain,
    Database,
    Award,
    Cpu,
    BarChart3,
    Workflow,
    ShieldCheck,
    Kanban
};

export function SkillsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skills Categories */}
            {Object.entries(SKILLS).map(([category, data], index) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group"
                >
                    <div className="relative h-full bg-clepto-navy/40 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm hover:border-clepto-cyan/30 transition-all duration-300">
                        {/* Gradient Background on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-clepto-cyan/5 to-clepto-red/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Glow Effect */}
                        <div className="absolute -inset-px bg-gradient-to-r from-clepto-cyan/20 to-clepto-red/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

                        {/* Content */}
                        <div className="relative space-y-4">
                            {/* Header */}
                            <div className="flex items-center gap-3">
                                {iconMap[data.icon] && (
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="p-3 rounded-xl bg-gradient-to-br from-clepto-cyan/10 to-clepto-red/10 border border-gray-800/50 group-hover:border-clepto-cyan/30 transition-all"
                                    >
                                        {(() => {
                                            const Icon = iconMap[data.icon];
                                            return <Icon className="w-6 h-6 text-clepto-cyan" />;
                                        })()}
                                    </motion.div>
                                )}
                                <h3 className="text-xl font-bold text-white group-hover:text-clepto-cyan transition-colors">{category}</h3>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {data.items.map((skill, idx) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                    >
                                        <Badge
                                            variant="secondary"
                                            className="bg-clepto-navy/60 text-gray-300 hover:bg-clepto-cyan/10 hover:text-clepto-cyan border border-gray-800/50 hover:border-clepto-cyan/30 transition-all cursor-default"
                                        >
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}

            {/* Certifications - Spanning full width on mobile, or fitting into grid */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-1 md:col-span-2 lg:col-span-3 mt-12"
            >
                <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">Certifications</h3>
                    <p className="text-gray-400">Professional credentials and qualifications</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {CERTIFICATIONS.map((cert, index) => {
                        const Icon = iconMap[cert.icon] || Award;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileHover={{ y: -4, scale: 1.05 }}
                                className="group"
                            >
                                <div className="relative flex items-center gap-3 px-5 py-4 rounded-xl bg-clepto-navy/40 border border-gray-800/50 hover:border-clepto-cyan/30 transition-all duration-300 backdrop-blur-sm">
                                    {/* Glow Effect */}
                                    <div className="absolute -inset-px bg-gradient-to-r from-clepto-cyan/20 to-clepto-red/20 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />

                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="p-2.5 rounded-lg bg-gradient-to-br from-clepto-cyan/10 to-clepto-red/10 border border-gray-800/50 group-hover:border-clepto-cyan/30 transition-all"
                                    >
                                        <Icon className="h-5 w-5 text-clepto-cyan" />
                                    </motion.div>
                                    <div>
                                        <p className="font-semibold text-sm text-white group-hover:text-clepto-cyan transition-colors">{cert.name}</p>
                                        <p className="text-xs text-gray-400">{cert.issuer}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}
