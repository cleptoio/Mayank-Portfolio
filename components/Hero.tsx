"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowDown, Sparkles, Zap, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PERSONAL_INFO } from "@/lib/data";
import { SocialLinks } from "@/components/SocialLinks";
import { WorldMap } from "@/components/WorldMap";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-clepto-navy">
            {/* World Map Background */}
            <div className="absolute inset-0 z-0">
                <WorldMap />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-clepto-navy via-clepto-navy/40 to-transparent z-[1] lg:w-2/5" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-clepto-navy/90 via-clepto-navy/20 to-transparent z-[1]" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16">
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
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-clepto-cyan/10 border border-clepto-cyan/30 backdrop-blur-md"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clepto-cyan opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-clepto-cyan" />
                            </span>
                            <span className="text-base font-medium text-clepto-cyan">Available for new projects</span>
                        </motion.div>

                        {/* Greeting */}
                        <div className="space-y-3">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-lg sm:text-xl text-gray-400 font-mono"
                            >
                                Hello,
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-tight"
                            >
                                I&apos;m {PERSONAL_INFO.name.split(' ')[0]}.
                            </motion.h1>
                        </div>

                        {/* Bio - larger font */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl sm:text-2xl lg:text-[1.75rem] text-gray-300 leading-relaxed max-w-xl"
                        >
                            {PERSONAL_INFO.bio}
                        </motion.p>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-3 text-base sm:text-lg text-gray-400"
                        >
                            <MapPin className="w-5 h-5 text-clepto-cyan" />
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
                            className="hidden lg:flex items-center gap-3 pt-6 text-base text-gray-500"
                        >
                            <Link
                                href="#projects"
                                className="flex items-center gap-2 hover:text-clepto-cyan transition-colors group"
                            >
                                <span>View my work</span>
                                <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-clepto-cyan" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Center spacer */}
                    <div className="hidden lg:block lg:col-span-2" />

                    {/* Right Content - Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="lg:col-span-4 flex justify-center lg:justify-end order-first lg:order-last perspective-1000 lg:-mt-8"
                    >
                        <motion.div
                            className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
                            whileHover={{ scale: 1.05, rotateY: 10, rotateX: -10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                            {/* Glow - cyan only */}
                            <div className="absolute inset-0 rounded-full bg-clepto-cyan/30 blur-3xl animate-pulse" />

                            {/* Rotating Rings - cyan only */}
                            <div className="absolute -inset-4 rounded-full border border-clepto-cyan/30 border-dashed animate-spin-slow" style={{ animationDuration: '10s' }} />
                            <div className="absolute -inset-2 rounded-full border border-clepto-cyan/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

                            {/* Profile Image */}
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
                    className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-20 lg:mt-24"
                >
                    {[
                        {
                            icon: Sparkles,
                            value: "7+",
                            label: "Years Experience",
                            subtext: "Business Transformation"
                        },
                        {
                            icon: Zap,
                            value: "100+",
                            label: "AI Workflows",
                            subtext: "Production Deployed"
                        },
                        {
                            icon: Users,
                            value: "15+",
                            label: "Enterprise Clients",
                            subtext: "EU AI Act Compliant"
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
                            <div className="relative p-4 sm:p-8 rounded-2xl bg-clepto-navy/60 border border-gray-800/50 backdrop-blur-md hover:border-clepto-cyan/30 transition-all duration-300">
                                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-5">
                                    <div className="p-3 sm:p-4 rounded-xl bg-clepto-cyan/10 border border-clepto-cyan/20">
                                        <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-clepto-cyan" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{stat.value}</div>
                                        <div className="text-sm sm:text-base lg:text-lg text-gray-400 mt-1">{stat.label}</div>
                                        <div className="text-xs sm:text-sm text-gray-500 hidden sm:block">{stat.subtext}</div>
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
