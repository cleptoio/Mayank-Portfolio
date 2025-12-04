"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, ShieldCheck, TrendingUp, Database, Megaphone, BarChart3, MessageSquare, Workflow, Bot } from 'lucide-react';

const IconMap = {
    Cpu,
    ShieldCheck,
    TrendingUp,
    Database,
    Megaphone,
    BarChart3,
    MessageSquare,
    Workflow,
    Bot
};

interface ProjectCardProps {
    project: {
        title: string;
        shortDesc: string;
        tech: string[];
        metric: string;
        metricSecondary?: string;
        icon: string;
        gradient: string;
        category: string;
    };
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    // @ts-ignore
    const Icon = IconMap[project.icon] || Bot;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative h-full"
        >
            <div className={`relative h-full bg-gradient-to-br ${project.gradient} border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm hover:border-clepto-cyan/40 transition-all duration-500 overflow-hidden`}>

                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-clepto-cyan/[0.03] via-transparent to-purple-500/[0.03] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-clepto-cyan/20 via-purple-500/10 to-clepto-cyan/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

                <div className="relative space-y-4">
                    {/* Header with icon and arrow */}
                    <div className="flex items-start justify-between">
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="p-3 bg-gradient-to-br from-clepto-cyan/20 to-clepto-cyan/5 rounded-xl border border-clepto-cyan/20 group-hover:border-clepto-cyan/40 group-hover:shadow-[0_0_20px_rgba(11,215,212,0.3)] transition-all duration-300"
                        >
                            <Icon className="w-6 h-6 text-clepto-cyan" />
                        </motion.div>
                        <motion.div
                            animate={{ rotate: 0 }}
                            whileHover={{ rotate: 45, scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                            className="p-2 rounded-lg bg-gray-800/30 group-hover:bg-clepto-cyan/10 transition-colors"
                        >
                            <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-clepto-cyan transition-colors duration-300" />
                        </motion.div>
                    </div>

                    {/* Category badge */}
                    <div>
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="inline-block text-xs text-clepto-cyan/80 uppercase tracking-wider font-semibold px-2 py-1 rounded-md bg-clepto-cyan/10 border border-clepto-cyan/20"
                        >
                            {project.category}
                        </motion.span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-clepto-cyan transition-colors duration-300">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                        {project.shortDesc}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.slice(0, 4).map((tech, idx) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + idx * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-3 py-1.5 bg-clepto-navy/80 text-gray-400 text-xs font-mono rounded-lg border border-gray-700/50 hover:border-clepto-cyan/40 hover:text-clepto-cyan hover:bg-clepto-cyan/5 transition-all cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                        {project.tech.length > 4 && (
                            <span className="px-3 py-1.5 text-gray-500 text-xs font-mono">
                                +{project.tech.length - 4}
                            </span>
                        )}
                    </div>

                    {/* Metrics section */}
                    <div className="pt-4 border-t border-gray-800/50 group-hover:border-clepto-cyan/20 transition-colors">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Impact</span>
                            <div className="flex items-center gap-3">
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    className="text-base font-mono font-bold text-clepto-cyan"
                                >
                                    {project.metric}
                                </motion.span>
                                {project.metricSecondary && (
                                    <>
                                        <span className="text-gray-600">|</span>
                                        <motion.span
                                            whileHover={{ scale: 1.1 }}
                                            className="text-sm font-mono text-gray-400"
                                        >
                                            {project.metricSecondary}
                                        </motion.span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
