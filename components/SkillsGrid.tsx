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
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                    <Card className="h-full bg-navy-light border-gray-800 hover:border-clepto-cyan/50 transition-colors">
                        <CardHeader className="flex flex-row items-center gap-3 pb-2">
                            {iconMap[data.icon] && (
                                <div className="p-2 rounded-lg bg-clepto-navy border border-gray-700">
                                    {(() => {
                                        const Icon = iconMap[data.icon];
                                        return <Icon className="w-5 h-5 text-clepto-cyan" />;
                                    })()}
                                </div>
                            )}
                            <CardTitle className="text-lg font-bold text-white">{category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {data.items.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="bg-clepto-navy text-gray-300 hover:bg-clepto-cyan/10 hover:text-clepto-cyan border border-gray-700 transition-colors">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}

            {/* Certifications - Spanning full width on mobile, or fitting into grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-1 md:col-span-2 lg:col-span-3 mt-8"
            >
                <h3 className="text-2xl font-bold mb-6 text-center text-white">Certifications</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {CERTIFICATIONS.map((cert, index) => {
                        const Icon = iconMap[cert.icon] || Award;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-navy-light border border-gray-800 hover:border-clepto-cyan transition-colors"
                            >
                                <div className="p-2 rounded-full bg-clepto-cyan/10 text-clepto-cyan">
                                    <Icon className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-white">{cert.name}</p>
                                    <p className="text-xs text-gray-400">{cert.issuer}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}
