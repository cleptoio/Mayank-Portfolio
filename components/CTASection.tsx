"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Linkedin, Instagram, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
    const [showModal, setShowModal] = useState(false);

    const ctaOptions = [
        {
            icon: Mail,
            title: "Email Me",
            subtitle: "mayank.khanvilkar@clepto.io",
            description: "For queries or collaboration",
            href: "mailto:mayank.khanvilkar@clepto.io",
            gradient: "from-clepto-red to-red-600"
        },
        {
            icon: Linkedin,
            title: "Connect on LinkedIn",
            subtitle: "@mayank-khanvilkar",
            description: "Let's network professionally",
            href: "https://www.linkedin.com/in/mayank-khanvilkar",
            gradient: "from-blue-500 to-blue-600"
        },
        {
            icon: Instagram,
            title: "Follow on Instagram",
            subtitle: "@mayank_khanvilkar",
            description: "Behind the scenes & insights",
            href: "https://www.instagram.com/mayank_khanvilkar/",
            gradient: "from-pink-500 to-purple-600"
        },
        {
            icon: ExternalLink,
            title: "Visit Clepto.io",
            subtitle: "www.clepto.io",
            description: "Explore AI automation services",
            href: "https://www.clepto.io",
            gradient: "from-clepto-cyan to-cyan-600"
        }
    ];

    return (
        <>
            {/* CTA Section */}
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
                        Let's build compliance-ready AI workflows that scale with your business.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Button
                            size="lg"
                            onClick={() => setShowModal(true)}
                            className="bg-gradient-to-r from-clepto-red to-clepto-cyan text-white px-8 py-6 text-lg font-semibold rounded-xl hover:shadow-2xl hover:shadow-clepto-cyan/20 transition-all duration-300 border-none"
                        >
                            Let's Book Together
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-navy-light border border-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-3xl font-bold text-white">Let's Connect</h3>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                                >
                                    <X className="w-6 h-6 text-gray-400" />
                                </button>
                            </div>

                            {/* CTA Options Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {ctaOptions.map((option) => {
                                    const Icon = option.icon;
                                    return (
                                        <motion.a
                                            key={option.title}
                                            href={option.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02, y: -4 }}
                                            className="group relative p-6 bg-clepto-navy/50 border border-gray-800 rounded-xl hover:border-clepto-cyan/50 transition-all duration-300"
                                        >
                                            {/* Gradient Background on Hover */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`} />

                                            <div className="relative flex items-start gap-4">
                                                <div className={`p-3 bg-gradient-to-br ${option.gradient} rounded-xl`}>
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>

                                                <div className="flex-1">
                                                    <h4 className="text-lg font-semibold text-white mb-1">
                                                        {option.title}
                                                    </h4>
                                                    <p className="text-sm text-clepto-cyan font-mono mb-2">
                                                        {option.subtitle}
                                                    </p>
                                                    <p className="text-sm text-gray-400">
                                                        {option.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Arrow Icon */}
                                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ExternalLink className="w-5 h-5 text-clepto-cyan" />
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
