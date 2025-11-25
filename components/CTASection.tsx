"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Linkedin, Instagram, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function CTASection() {
    const [showModal, setShowModal] = useState(false);

    const contactOptions = [
        {
            icon: Mail,
            label: "Email Me",
            value: "mayank.khanvilkar@clepto.io",
            href: "mailto:mayank.khanvilkar@clepto.io"
        },
        {
            icon: Linkedin,
            label: "Connect on LinkedIn",
            value: "@mayank-khanvilkar",
            href: "https://www.linkedin.com/in/mayank-khanvilkar"
        },
        {
            icon: Instagram,
            label: "Follow on Instagram",
            value: "@mayank_khanvilkar",
            href: "https://www.instagram.com/mayank_khanvilkar/"
        },
        {
            icon: ExternalLink,
            label: "Visit Clepto.io",
            value: "www.clepto.io",
            href: "https://www.clepto.io"
        }
    ];

    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-clepto-navy via-navy-darker to-clepto-navy" />
            <div className="absolute inset-0 bg-gradient-to-r from-clepto-red/5 to-clepto-cyan/5" />

            {/* Content */}
            <div className="relative max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold mb-6"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-clepto-red to-clepto-cyan">Ready to Automate?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
                >
                    Let&apos;s build compliance-ready AI workflows that scale with your business.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="lg" className="bg-gradient-to-r from-clepto-red to-clepto-cyan text-white px-8 py-6 text-lg font-semibold rounded-xl hover:shadow-2xl hover:shadow-clepto-cyan/20 transition-all duration-300 border-none">
                                Let&apos;s Book Together
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md bg-clepto-navy border-gray-800 text-white">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold text-center mb-2">Let&apos;s Connect</DialogTitle>
                                <DialogDescription className="text-center text-gray-400">
                                    Choose how you&apos;d like to get in touch.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                {contactOptions.map((option) => (
                                    <a
                                        key={option.label}
                                        href={option.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-xl bg-navy-light border border-gray-800 hover:border-clepto-cyan/50 hover:bg-clepto-cyan/5 transition-all group"
                                    >
                                        <div className="p-3 rounded-lg bg-clepto-navy group-hover:bg-clepto-cyan/10 transition-colors">
                                            <option.icon className="w-6 h-6 text-clepto-cyan" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white group-hover:text-clepto-cyan transition-colors">{option.label}</p>
                                            <p className="text-sm text-gray-400">{option.value}</p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-600 ml-auto group-hover:text-clepto-cyan group-hover:translate-x-1 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </DialogContent>
                    </Dialog>
                </motion.div>
            </div>
        </section>
    );
}
