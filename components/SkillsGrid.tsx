"use client";

import { motion } from "framer-motion";
import { SKILLS, CERTIFICATIONS } from "@/lib/data";
import { Award, Brain, Cloud, Database, Shield, Gavel, Cpu, BarChart3, Workflow, ShieldCheck, Kanban } from "lucide-react";
import {
    SiPython, SiSalesforce, SiGooglecloud, SiSupabase, SiPostgresql,
    SiJira, SiConfluence, SiTableau, SiOpenai, SiLangchain, SiN8N,
    SiZapier, SiMake
} from "react-icons/si";

const categoryIconMap: Record<string, any> = {
    Cloud, Shield, Gavel, Brain, Database, Award, Cpu, BarChart3, Workflow, ShieldCheck, Kanban
};

const techIconMap: Record<string, any> = {
    "n8n": SiN8N,
    "Python": SiPython,
    "Salesforce": SiSalesforce,
    "Google Cloud": SiGooglecloud,
    "Google Vertex AI": SiGooglecloud,
    "Google Data Studio": SiGooglecloud,
    "Supabase": SiSupabase,
    "SQL": Database,
    "SQL Server": Database,
    "PostgreSQL": SiPostgresql,
    "JIRA": SiJira,
    "Confluence": SiConfluence,
    "Tableau": SiTableau,
    "Power BI": BarChart3,
    "OpenAI": SiOpenai,
    "LangChain": SiLangchain,
    "Zapier": SiZapier,
    "Make.com": SiMake,
    "GDPR": Shield,
};

export function SkillsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(SKILLS).map(([category, data], index) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group"
                >
                    <div className="relative h-full bg-clepto-navy/40 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm hover:border-clepto-cyan/30 transition-all duration-300">
                        <div className="absolute inset-0 bg-clepto-cyan/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute -inset-px bg-clepto-cyan/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

                        <div className="relative space-y-4">
                            <div className="flex items-center gap-3">
                                {categoryIconMap[data.icon] && (
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="p-3 rounded-xl bg-clepto-cyan/10 border border-gray-800/50 group-hover:border-clepto-cyan/30 transition-all"
                                    >
                                        {(() => {
                                            const Icon = categoryIconMap[data.icon];
                                            return <Icon className="w-6 h-6 text-clepto-cyan" />;
                                        })()}
                                    </motion.div>
                                )}
                                <h3 className="text-xl font-bold text-white group-hover:text-clepto-cyan transition-colors">{category}</h3>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {data.items.map((skill, idx) => {
                                    const TechIcon = techIconMap[skill];
                                    return (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                                            whileHover={{ y: -4, scale: 1.03 }}
                                            className="relative group"
                                        >
                                            <div className="flex flex-col items-center gap-2.5 p-3 rounded-xl bg-clepto-navy/60 border border-gray-800/50 hover:border-clepto-cyan/30 transition-all duration-300 backdrop-blur-sm min-h-[100px] justify-center">
                                                {TechIcon ? (
                                                    <motion.div
                                                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                                        transition={{ duration: 0.5 }}
                                                        className="flex items-center justify-center"
                                                    >
                                                        <TechIcon className="w-10 h-10 text-clepto-cyan" />
                                                    </motion.div>
                                                ) : (
                                                    <div className="w-10 h-10 rounded-xl bg-clepto-cyan/10 flex items-center justify-center border border-clepto-cyan/20">
                                                        <span className="text-sm font-bold text-clepto-cyan">
                                                            {skill.substring(0, 2).toUpperCase()}
                                                        </span>
                                                    </div>
                                                )}
                                                <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors text-center leading-tight">
                                                    {skill}
                                                </span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}

            {/* Certifications */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-1 md:col-span-2 lg:col-span-3 mt-12"
            >
                <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">Certifications</h3>
                    <p className="text-gray-400">Professional credentials and qualifications</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {CERTIFICATIONS.map((cert, index) => {
                        const Icon = categoryIconMap[cert.icon] || Award;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileHover={{ y: -4, scale: 1.05 }}
                                className="flex items-center gap-3 px-5 py-3 rounded-full bg-clepto-navy/60 border border-gray-800/50 hover:border-clepto-cyan/30 backdrop-blur-sm transition-all"
                            >
                                <Icon className="w-5 h-5 text-clepto-cyan" />
                                <span className="text-sm font-medium text-gray-300">{cert.name}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}
