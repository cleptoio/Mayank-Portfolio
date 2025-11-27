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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-clepto-navy">
            {/* World Map Background - Full coverage */}
            <div className="absolute inset-0 z-0">
                <WorldMap />
            </div>

            {/* Gradient Overlays - Minimal for maximum map visibility */}
            {/* Left side only - just enough for text readability */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-clepto-navy via-clepto-navy/40 to-transparent z-[1] lg:w-2/5" />

            {/* Bottom fade - only for stats section */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-clepto-navy/90 via-clepto-navy/20 to-transparent z-[1]" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16">
                {/* Changed items-center to items-start for top alignment */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">

                    {/* Left Content - Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-6 space-y-6 lg:space-y-8 lg:pt-8"
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
                        <div className="space-y-2">
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
                                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
                            >
                                I&apos;m {PERSONAL_INFO.name.split(' ')[0]}.
                            </motion.h1>
                        </div>

                        {/* Bio */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg"
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
                        >
                            <SocialLinks />
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="hidden lg:flex items-center gap-2 pt-4 text-sm text-gray-500"
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

                    {/* Center spacer - Map shows through here */}
                    <div className="hidden lg:block lg:col-span-2" />

                    {/* Right Content - Profile Photo - MOVED UP with negative margin */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="lg:col-span-4 flex justify-center lg:justify-end order-first lg:order-last perspective-1000 lg:-mt-8"
                    >
                        <motion.div
                            className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
                            whileHover={{ scale: 1.05, rotateY: 10, rotateX: -10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                            {/* Stronger Cyber Glow */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-clepto-cyan via-blue-500 to-purple-600 opacity-40 blur-3xl animate-pulse" />

                            {/* Rotating Rings */}
                            <div className="absolute -inset-4 rounded-full border border-clepto-cyan/30 border-dashed animate-spin-slow" style={{ animationDuration: '10s' }} />
                            <div className="absolute -inset-2 rounded-full border border-clepto-red/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

                            {/* Profile Image Container */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-clepto-cyan/50 ring-4 ring-black/50 shadow-[0_0_50px_rgba(11,215,212,0.4)] backdrop-blur-sm">
                                <Image
                                    src={PERSONAL_INFO.image}
                                    alt={PERSONAL_INFO.name}
                                    fill
                                    className="object-cover"
                                    priority
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 lg:mt-20"
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
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl" />
                            <div className="relative p-4 sm:p-6 rounded-2xl bg-clepto-navy/60 border border-gray-800/50 backdrop-blur-md hover:border-clepto-cyan/30 transition-all duration-300">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                                        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                                        <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                                        <div className="text-xs text-gray-500 hidden sm:block">{stat.subtext}</div>
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
