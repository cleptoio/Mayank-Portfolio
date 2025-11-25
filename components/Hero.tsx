"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowDown } from "lucide-react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/lib/data";
import { SocialLinks } from "@/components/SocialLinks";
import { WorldMap } from "@/components/WorldMap";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden">
            {/* World Map Background */}
            <div className="absolute inset-0 z-0">
                <WorldMap />
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-clepto-navy/60 via-clepto-navy/80 to-clepto-navy z-0" />

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto pt-24 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-6"
                    >
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-clepto-navy/90 border border-clepto-cyan/30 backdrop-blur-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clepto-cyan opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-clepto-cyan" />
                            </span>
                            <span className="text-xs font-medium text-gray-300">Available for projects</span>
                        </motion.div>

                        {/* Name */}
                        <div className="space-y-2">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-sm text-gray-400 font-mono"
                            >
                                Hello,
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-4xl lg:text-6xl font-bold text-white tracking-tight"
                            >
                                I&apos;m {PERSONAL_INFO.name.split(' ')[0]}.
                            </motion.h1>
                        </div>

                        {/* Bio */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-gray-400 leading-relaxed max-w-lg"
                        >
                            {PERSONAL_INFO.bio}
                        </motion.p>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-2 text-sm text-gray-500"
                        >
                            <MapPin className="w-4 h-4 text-clepto-cyan" />
                            <span>{PERSONAL_INFO.location}</span>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="pt-4"
                        >
                            <SocialLinks />
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="hidden lg:flex items-center gap-2 pt-8 text-sm text-gray-500"
                        >
                            <Link
                                href="#projects"
                                className="flex items-center gap-2 hover:text-clepto-cyan transition-colors group"
                            >
                                <span>View my work</span>
                                <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-clepto-cyan" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="grid grid-cols-3 gap-6 lg:gap-8"
                    >
                        {Object.entries(PERSONAL_INFO.stats).map(([key, value], idx) => {
                            if (key.includes('Label')) return null;
                            const labelKey = `${key}Label` as keyof typeof PERSONAL_INFO.stats;

                            return (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + idx * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="p-6 rounded-2xl bg-clepto-navy/50 border border-gray-800/50 backdrop-blur-sm hover:border-clepto-cyan/30 transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-br from-clepto-cyan/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <p className="text-3xl lg:text-4xl font-bold text-white font-mono mb-2">
                                            {value}
                                        </p>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                                            {PERSONAL_INFO.stats[labelKey]}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
