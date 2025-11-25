"use client";

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, ShieldCheck, TrendingUp, Database, Megaphone, BarChart3 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const IconMap = {
    MessageSquare, ShieldCheck, TrendingUp, Database, Megaphone, BarChart3
};

interface ProjectCardProps {
    project: {
        title: string;
        shortDesc: string;
        tech: string[];
        metric: string;
        icon: string; // Changed to string to match data.ts
        gradient: string;
        category: string;
    };
}

export function ProjectCard({ project }: ProjectCardProps) {
    // @ts-ignore - Dynamic icon mapping
    const Icon = IconMap[project.icon] || MessageSquare;

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative h-full"
        >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            {/* Card Content */}
            <div className="relative h-full bg-navy-light border border-gray-800 rounded-2xl p-6 hover:border-clepto-cyan/50 transition-all duration-300">

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-clepto-navy/50 rounded-xl border border-clepto-cyan/20">
                        <Icon className="w-6 h-6 text-clepto-cyan" />
                    </div>

                    {/* Metric Badge */}
                    <Badge className="bg-gradient-to-r from-clepto-red to-clepto-cyan text-white text-xs font-semibold px-3 py-1 border-none">
                        {project.metric}
                    </Badge>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-clepto-red group-hover:to-clepto-cyan transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.shortDesc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-clepto-navy/80 text-clepto-cyan text-xs font-mono rounded-full border border-clepto-cyan/20"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-clepto-navy/80 text-gray-400 text-xs font-mono rounded-full border border-gray-700">
                            +{project.tech.length - 3}
                        </span>
                    )}
                </div>

                {/* Category Tag */}
                <div className="absolute bottom-6 right-6">
                    <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">
                        {project.category}
                    </span>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-clepto-red" />
                </div>
            </div>

            {/* Glow Effect on Hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-clepto-red to-clepto-cyan rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10" />
        </motion.div>
    );
}
