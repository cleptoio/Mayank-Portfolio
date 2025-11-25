"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowDown, Sparkles, Zap, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PERSONAL_INFO } from "@/lib/data";
import { SocialLinks } from "@/components/SocialLinks";
import { WorldMap } from "@/components/WorldMap";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* World Map Background */}
            <div className="absolute inset-0 z-0 opacity-30">
                <WorldMap />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-clepto-navy/80 via-clepto-navy/90 to-clepto-navy z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-clepto-cyan/5 via-transparent to-transparent z-0" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 space-y-8"
                    >
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-clepto-cyan/10 to-clepto-red/10 border border-clepto-cyan/20 backdrop-blur-md"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clepto-cyan opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-clepto-cyan" />
                            </span>
                            <span className="text-sm font-medium text-clepto-cyan">Available for new projects</span>
                        </motion.div>

                        {/* Greeting */}
                        <div className="space-y-3">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-base text-gray-400 font-mono"
                            >
                                Hello,
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
                            >
                                I&apos;m {PERSONAL_INFO.name.split(' ')[0]}.
                            </motion.h1>
                        </div>

                        {/* Bio */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                        >
                            {PERSONAL_INFO.bio}
                        </motion.p>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-2.5 text-sm text-gray-400"
                        >
                            <MapPin className="w-4 h-4 text-clepto-cyan" />
                            <span>{PERSONAL_INFO.location}</span>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="pt-2"
                        >
                            <SocialLinks />
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="hidden lg:flex items-center gap-2 pt-6 text-sm text-gray-500"
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

                    {/* Right Content - Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="lg:col-span-5 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                            {/* Animated Background Rings */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-clepto-red/20 to-clepto-cyan/20 blur-3xl animate-pulse" />
                            <div className="absolute -inset-4 rounded-full border border-clepto-cyan/10 animate-spin-slow" />

                            {/* Profile Image */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-clepto-navy ring-2 ring-clepto-cyan/30 shadow-2xl shadow-clepto-cyan/20">
                                <Image
                                    src={PERSONAL_INFO.image}
                                    alt={PERSONAL_INFO.name}
                                    fill
                                    className="object-cover"
                                    priority
                                    onError={(e) => {
                                        // Fallback to gradient if image fails
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-clepto-navy to-navy-darker p-4 rounded-2xl border border-gray-800 shadow-xl backdrop-blur-md"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-gradient-to-br from-clepto-cyan/20 to-clepto-red/20 rounded-xl">
                                        <Zap className="w-5 h-5 text-clepto-cyan" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wider">Focus</p>
                                        <p className="text-sm font-semibold text-white">AI Workflows</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
                >
                    {[
                        {
                            icon: Sparkles,
                            value: "8+",
                            label: "Years Experience",
                            subtext: "Business Transformation",
                            color: "from-clepto-cyan to-blue-400"
                        },
                        {
                            icon: Zap,
                            value: "50+",
                            label: "n8n Workflows",
                            subtext: "Deployed Successfully",
                            color: "from-clepto-red to-orange-400"
                        },
                        {
                            icon: Shield,
                            value: "100%",
                            label: "Audit Ready",
                            subtext: "EU AI Act Compliant",
                            color: "from-clepto-cyan to-clepto-red"
                        }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + idx * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="group relative"
                        >
                            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-clepto-navy/50 to-navy-darker/50 border border-gray-800/50 backdrop-blur-sm hover:border-clepto-cyan/30 transition-all duration-300">
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                                <div className="relative space-y-3">
                                    {/* Icon */}
                                    <div className="inline-flex p-2.5 bg-gradient-to-br from-clepto-cyan/10 to-clepto-red/10 rounded-xl border border-gray-800/50">
                                        <stat.icon className="w-5 h-5 text-clepto-cyan" />
                                    </div>

                                    {/* Value */}
                                    <p className="text-4xl lg:text-5xl font-bold text-white font-mono">
                                        {stat.value}
                                    </p>

                                    {/* Label */}
                                    <div>
                                        <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                                            {stat.label}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {stat.subtext}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
