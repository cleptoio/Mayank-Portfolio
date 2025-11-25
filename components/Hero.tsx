"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WorldMap } from "@/components/WorldMap";
import { PERSONAL_INFO } from "@/lib/data";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-24 lg:px-12 overflow-hidden">
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 z-10 flex flex-col gap-6"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 w-fit">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    <span className="text-xs font-mono text-accent">Available for new projects</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                    <span className="block text-foreground">{PERSONAL_INFO.name}</span>
                    <span className="block text-muted-foreground text-2xl lg:text-4xl mt-2 font-normal">
                        {PERSONAL_INFO.role}
                    </span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                    {PERSONAL_INFO.bio}
                </p>

                <div className="flex flex-wrap gap-4 mt-4">
                    <Button asChild size="lg" className="group">
                        <Link href="#projects">
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>

                    <div className="flex items-center gap-4 ml-4">
                        <Link href={PERSONAL_INFO.social.linkedin} target="_blank" className="text-muted-foreground hover:text-accent transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </Link>
                        <Link href={PERSONAL_INFO.social.github} target="_blank" className="text-muted-foreground hover:text-accent transition-colors">
                            <Github className="h-6 w-6" />
                        </Link>
                        <Link href={PERSONAL_INFO.social.email} className="text-muted-foreground hover:text-accent transition-colors">
                            <Mail className="h-6 w-6" />
                        </Link>
                    </div>
                </div>

                <div className="flex gap-8 mt-8 border-t border-border pt-8">
                    {Object.entries(PERSONAL_INFO.stats).map(([key, value]) => (
                        <div key={key}>
                            <p className="text-3xl font-mono font-bold text-foreground">{value}</p>
                            <p className="text-sm text-muted-foreground capitalize">{key}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Right Map */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative mt-12 lg:mt-0"
            >
                <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent z-10 lg:hidden" />
                <WorldMap />
            </motion.div>
        </section>
    );
}
