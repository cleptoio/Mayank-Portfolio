"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/lib/data";
import { SocialLinks } from "@/components/SocialLinks";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-24 lg:px-12 overflow-hidden bg-gradient-to-br from-clepto-navy via-navy-darker to-clepto-navy">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-clepto-cyan/10 via-transparent to-transparent" />

            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 z-10 flex flex-col gap-8"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clepto-navy/50 border border-clepto-cyan/20 w-fit backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clepto-cyan opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-clepto-cyan"></span>
                    </span>
                    <span className="text-xs font-mono text-clepto-cyan">Available for new projects</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white">
                    <span className="block">{PERSONAL_INFO.name}</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-clepto-red to-clepto-cyan text-2xl lg:text-4xl mt-4 font-normal">
                        {PERSONAL_INFO.role}
                    </span>
                </h1>

                <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                    {PERSONAL_INFO.bio}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mt-2">
                    <Button asChild size="lg" className="bg-gradient-to-r from-clepto-red to-clepto-cyan text-white border-none hover:shadow-lg hover:shadow-clepto-cyan/20 transition-all duration-300">
                        <Link href="#projects">
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>

                    <SocialLinks />
                </div>

                <div className="flex gap-12 mt-8 border-t border-gray-800 pt-8">
                    {Object.entries(PERSONAL_INFO.stats).map(([key, value]) => {
                        // Skip labels, only show main stats
                        if (key.includes('Label')) return null;
                        const labelKey = `${key}Label` as keyof typeof PERSONAL_INFO.stats;
                        return (
                            <div key={key}>
                                <p className="text-3xl font-mono font-bold text-white">{value}</p>
                                <p className="text-sm text-gray-500">{PERSONAL_INFO.stats[labelKey]}</p>
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full lg:w-1/2 relative mt-12 lg:mt-0 flex justify-center lg:justify-end"
            >
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-clepto-red to-clepto-cyan rounded-full opacity-20 blur-3xl animate-pulse" />

                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-800 bg-navy-light">
                        <Image
                            src={PERSONAL_INFO.image}
                            alt={PERSONAL_INFO.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-navy-light p-4 rounded-xl border border-gray-800 shadow-xl backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-clepto-cyan/10 rounded-lg">
                                <ArrowRight className="w-6 h-6 text-clepto-cyan" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Current Focus</p>
                                <p className="text-sm font-bold text-white">Agentic AI Workflows</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
