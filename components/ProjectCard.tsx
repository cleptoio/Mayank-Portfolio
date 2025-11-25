"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, ShieldCheck, TrendingUp, Database, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CASE_STUDIES } from "@/lib/data";

const iconMap: Record<string, any> = {
    Cpu,
    ShieldCheck,
    TrendingUp,
    Database,
    BarChart3,
};

interface ProjectCardProps {
    project: typeof CASE_STUDIES[0];
}

export function ProjectCard({ project }: ProjectCardProps) {
    const Icon = iconMap[project.icon] || Cpu;

    return (
        <motion.div
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="min-w-[350px] md:min-w-[450px] snap-center"
        >
            <Card className="h-full bg-surface border-border hover:border-accent/50 transition-colors overflow-hidden group relative">
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", project.gradient)} />

                <CardHeader className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 rounded-lg bg-background/50 border border-border">
                            <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <Badge variant="outline" className="font-mono text-xs">
                            {project.type}
                        </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-accent font-mono text-sm mt-1">{project.metric}</p>
                </CardHeader>

                <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed">
                        {project.desc}
                    </p>
                </CardContent>

                <CardFooter className="relative z-10 flex flex-col items-start gap-4 mt-auto">
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-background/50 hover:bg-background/80">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
