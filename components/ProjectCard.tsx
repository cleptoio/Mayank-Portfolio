"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, ShieldCheck, TrendingUp, Database, Megaphone, BarChart3 } from 'lucide-react';

const IconMap = {
    Cpu,
    ShieldCheck,
    TrendingUp,
    Database,
    Megaphone,
    BarChart3
};

interface ProjectCardProps {
    project: {
        title: string;
        shortDesc: string;
        tech: string[];
        metric: string;
        icon: string;
        gradient: string;
        category: string;
    };
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    // @ts-ignore - Dynamic icon mapping
    const Icon = IconMap[project.icon] || Cpu;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ y: -4 }}
            className="group relative h-full"
        >
            {/* Card Background */}
            <div className="relative h-full bg-clepto-navy/50 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm hover:border-clepto-cyan/30 transition-all duration-300">

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                        <div className="p-2.5 bg-clepto-navy/70 rounded-lg border border-gray-800/50">
                            <Icon className="w-5 h-5 text-clepto-cyan" />
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-clepto-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>

                    {/* Category */}
                    <div>
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                            {project.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-clepto-cyan transition-colors">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                        {project.shortDesc}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 py-1 bg-clepto-navy/60 text-gray-400 text-xs font-mono rounded-md border border-gray-800/50"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 4 && (
                            <span className="px-2.5 py-1 text-gray-500 text-xs font-mono">
                                +{project.tech.length - 4}
                            </span>
                        )}
                    </div>

                    {/* Metric */}
                    <div className="pt-2 border-t border-gray-800/50">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Impact</span>
                            <span className="text-sm font-mono font-semibold text-clepto-cyan">
                                {project.metric}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-px bg-gradient-to-r from-clepto-cyan/20 to-clepto-red/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
        </motion.div>
    );
}
