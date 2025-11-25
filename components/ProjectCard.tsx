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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative h-full"
        >
            {/* Card Background */}
            <div className="relative h-full bg-clepto-navy/50 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm hover:border-clepto-cyan/30 transition-all duration-500 overflow-hidden">

                {/* Animated Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />

                {/* Content */}
                <div className="relative space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="p-3 bg-gradient-to-br from-clepto-cyan/10 to-clepto-red/10 rounded-xl border border-gray-800/50 group-hover:border-clepto-cyan/30 transition-all"
                        >
                            <Icon className="w-6 h-6 text-clepto-cyan" />
                        </motion.div>
                        <motion.div
                            animate={{ rotate: 0 }}
                            whileHover={{ rotate: 45 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-clepto-cyan transition-colors duration-300" />
                        </motion.div>
                    </div>

                    {/* Category */}
                    <div>
                        <span className="text-xs text-clepto-cyan/70 uppercase tracking-wider font-semibold">
                            {project.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-clepto-cyan transition-colors duration-300">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                        {project.shortDesc}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.slice(0, 4).map((tech, idx) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + idx * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-3 py-1.5 bg-clepto-navy/60 text-gray-400 text-xs font-mono rounded-lg border border-gray-800/50 hover:border-clepto-cyan/30 hover:text-clepto-cyan transition-all cursor-default"
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

                    {/* Metric */}
                    <div className="pt-3 border-t border-gray-800/50 group-hover:border-clepto-cyan/20 transition-colors">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Impact</span>
                            <motion.span
                                whileHover={{ scale: 1.1 }}
                                className="text-base font-mono font-bold bg-gradient-to-r from-clepto-cyan to-clepto-red bg-clip-text text-transparent"
                            >
                                {project.metric}
                            </motion.span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-clepto-cyan/20 via-clepto-red/20 to-clepto-cyan/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
        </motion.div>
    );
}
