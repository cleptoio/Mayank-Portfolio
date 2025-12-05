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
        fullDesc?: string;
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
            whileHover={{ y: -8, scale: 1.01 }}
            className="group relative h-full"
        >
            <div className={`relative h-full bg-gradient-to-br ${project.gradient} border border-gray-800/50 rounded-3xl p-8 sm:p-10 backdrop-blur-sm hover:border-clepto-cyan/40 transition-all duration-500 overflow-hidden`}>

                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-clepto-cyan/[0.03] via-transparent to-purple-500/[0.03] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-clepto-cyan/20 via-purple-500/10 to-clepto-cyan/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

                <div className="relative space-y-6">
                    {/* Header with icon and arrow */}
                    <div className="flex items-start justify-between">
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="p-4 bg-gradient-to-br from-clepto-cyan/20 to-clepto-cyan/5 rounded-2xl border border-clepto-cyan/20 group-hover:border-clepto-cyan/40 group-hover:shadow-[0_0_30px_rgba(11,215,212,0.3)] transition-all duration-300"
                        >
                            <Icon className="w-8 h-8 text-clepto-cyan" />
                        </motion.div>
                        <motion.div
                            animate={{ rotate: 0 }}
                            whileHover={{ rotate: 45, scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                            className="p-3 rounded-xl bg-gray-800/30 group-hover:bg-clepto-cyan/10 transition-colors"
                        >
                            <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-clepto-cyan transition-colors duration-300" />
                        </motion.div>
                    </div>

                    {/* Category badge */}
                    <div>
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="inline-block text-sm text-clepto-cyan/90 uppercase tracking-wider font-semibold px-4 py-2 rounded-lg bg-clepto-cyan/10 border border-clepto-cyan/20"
                        >
                            {project.category}
                        </motion.span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight group-hover:text-clepto-cyan transition-colors duration-300">
                        {project.title}
                    </h3>

                    {/* Description - Full description now */}
                    <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                        {project.fullDesc || project.shortDesc}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-3 pt-2">
                        {project.tech.map((tech, idx) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + idx * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-4 py-2 bg-clepto-navy/80 text-gray-300 text-sm font-medium rounded-xl border border-gray-700/50 hover:border-clepto-cyan/40 hover:text-clepto-cyan hover:bg-clepto-cyan/5 transition-all cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>

                    {/* Metrics section */}
                    <div className="pt-6 border-t border-gray-800/50 group-hover:border-clepto-cyan/20 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Business Impact</span>
                            <div className="flex flex-wrap items-center gap-4">
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    className="text-xl sm:text-2xl font-bold text-clepto-cyan"
                                >
                                    {project.metric}
                                </motion.span>
                                {project.metricSecondary && (
                                    <>
                                        <span className="text-gray-600 text-xl">|</span>
                                        <motion.span
                                            whileHover={{ scale: 1.05 }}
                                            className="text-lg sm:text-xl font-semibold text-gray-300"
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
