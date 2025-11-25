"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SKILLS, CERTIFICATIONS } from "@/lib/data";
import { Award, Brain, Cloud, Database, Shield, Gavel } from "lucide-react";

const iconMap: Record<string, any> = {
    cloud: Cloud,
    shield: Shield,
    gavel: Gavel,
    brain: Brain,
    database: Database,
    award: Award,
};

export function SkillsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skills Categories */}
            {Object.entries(SKILLS).map(([category, skills], index) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                    <Card className="h-full bg-surface/50 border-border hover:border-accent/50 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-foreground">{category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="bg-background hover:bg-accent/20 hover:text-accent transition-colors">
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
                <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {CERTIFICATIONS.map((cert, index) => {
                        const Icon = iconMap[cert.icon] || Award;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface border border-border hover:border-accent transition-colors"
                            >
                                <div className="p-2 rounded-full bg-accent/10 text-accent">
                                    <Icon className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{cert.name}</p>
                                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}
