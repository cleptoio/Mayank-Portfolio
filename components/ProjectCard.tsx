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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative"
        >
            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl p-6 lg:p-8 hover:border-clepto-cyan/40 transition-all duration-300">

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-clepto-cyan/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                    {/* Top row - Icon, Category, Metrics */}
                    <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-clepto-cyan/10 rounded-xl border border-clepto-cyan/20 group-hover:bg-clepto-cyan/20 transition-colors">
                                <Icon className="w-6 h-6 text-clepto-cyan" />
                            </div>
                            <span className="text-sm font-semibold text-clepto-cyan uppercase tracking-wide">
                                {project.category}
                            </span>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-clepto-cyan transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-clepto-cyan transition-colors leading-tight">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-400 leading-relaxed mb-5">
                        {project.shortDesc}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.slice(0, 5).map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 bg-gray-800/60 text-gray-400 text-sm rounded-lg border border-gray-700/50 hover:border-clepto-cyan/30 hover:text-clepto-cyan transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Metrics */}
                    <div className="flex items-center gap-4 pt-5 border-t border-gray-800">
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-clepto-cyan">{project.metric}</span>
                        </div>
                        {project.metricSecondary && (
                            <>
                                <span className="text-gray-700">|</span>
                                <span className="text-base text-gray-400">{project.metricSecondary}</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
