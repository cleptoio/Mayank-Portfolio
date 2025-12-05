"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowDown, Sparkles, Zap } from "lucide-react";
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
                                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[1.1]"
                            >
                                I&apos;m {PERSONAL_INFO.name.split(' ')[0]}.
                            </motion.h1>
                        </div>

                        {/* Bio */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl"
                        >
                            {PERSONAL_INFO.bio}
                        </motion.p>

                        {/* Stats - Simple inline */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap items-center gap-8 pt-2"
                        >
                            <div className="flex items-center gap-3">
                                <Sparkles className="w-6 h-6 text-clepto-cyan" />
                                <span className="text-3xl sm:text-4xl font-bold text-white">7+</span>
                                <span className="text-base text-gray-400">Years</span>
                            </div>
                            <div className="w-px h-8 bg-gray-700" />
                            <div className="flex items-center gap-3">
                                <Zap className="w-6 h-6 text-clepto-cyan" />
                                <span className="text-3xl sm:text-4xl font-bold text-white">100+</span>
                                <span className="text-base text-gray-400">AI Workflows</span>
                            </div>
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex items-center gap-3 text-base sm:text-lg text-gray-400"
                        >
                            <MapPin className="w-5 h-5 text-clepto-cyan" />
                            <span>{PERSONAL_INFO.location}</span>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <SocialLinks />
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="hidden lg:flex items-center gap-3 pt-4 text-base text-gray-500"
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
                    <div className="hidden lg:block lg:col-span-3" />

                    {/* Right Content - Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="lg:col-span-3 flex justify-center lg:justify-end order-first lg:order-last lg:-mr-8"
                    >
                        <motion.div
                            className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                            {/* Glow */}
                            <div className="absolute inset-0 rounded-full bg-clepto-cyan/25 blur-3xl" />

                            {/* Rotating Rings */}
                            <div className="absolute -inset-4 rounded-full border border-clepto-cyan/20 border-dashed animate-spin-slow" style={{ animationDuration: '20s' }} />

                            {/* Profile Image */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-clepto-cyan/40 shadow-[0_0_60px_rgba(11,215,212,0.3)]">
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
            </div>
        </section>
    );
}
