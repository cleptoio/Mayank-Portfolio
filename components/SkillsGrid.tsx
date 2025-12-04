"use client";

import { motion } from "framer-motion";
import { SKILLS, CERTIFICATIONS } from "@/lib/data";
import { Award, Brain, Cloud, Database, Shield, Gavel, Cpu, BarChart3, Workflow, ShieldCheck, Kanban, Wrench, Bot, Users } from "lucide-react";
import {
    SiPython, SiSalesforce, SiGooglecloud, SiSupabase, SiPostgresql,
    SiJira, SiConfluence, SiTableau, SiOpenai, SiN8N,
    SiZapier, SiMake, SiNotion, SiTrello, SiJavascript, SiGit
} from "react-icons/si";

const categoryIconMap: Record<string, any> = {
    Cloud, Shield, Gavel, Brain, Database, Award, Cpu, BarChart3, Workflow, ShieldCheck, Kanban, Wrench, Bot, Users
};

const techIconMap: Record<string, any> = {
    "n8n": SiN8N,
    "Python": SiPython,
    "JavaScript": SiJavascript,
    "Git": SiGit,
    "Salesforce": SiSalesforce,
    "Google Workspace": SiGooglecloud,
    "Google AI Studio": SiGooglecloud,
    "Vertex AI": SiGooglecloud,
    "Google Data Studio": SiGooglecloud,
    "Supabase": SiSupabase,
    "SQL": Database,
    "PostgreSQL": SiPostgresql,
    "JIRA": SiJira,
    "Confluence": SiConfluence,
    "Tableau": SiTableau,
    "Power BI": BarChart3,
    "OpenAI": SiOpenai,
    "Zapier": SiZapier,
    "Make.com": SiMake,
    "GDPR": Shield,
    "Notion AI": SiNotion,
    "Trello": SiTrello,
    "Claude": Bot,
    "Cursor": Cpu,
    "Mistral": Bot,
    "Heygen": Bot,
    "RAG": Database,
    "API Integration": Workflow,
    "Vector Databases": Database,
    "MCP Integration": Workflow,
    "ETL Pipelines": Workflow,
    "NotebookLM": Brain,
    "Pinecone": Database,
    "Draw.io": Workflow,
    "MS Office": Cloud,
    "EU AI Act": Gavel,
    "ISO 42001": ShieldCheck,
    "ISO 20000": ShieldCheck,
    "Risk Management": Shield,
    "Audit Frameworks": ShieldCheck,
    "Requirements Analysis": Users,
    "Stakeholder Management": Users,
    "Process Improvement": Workflow,
    "Agile/BPR": Kanban,
    "Technical Documentation": Brain,
    "Change Management": Users,
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

                            <div className="flex flex-wrap gap-2">
                                {data.items.map((skill, idx) => {
                                    const TechIcon = techIconMap[skill];
                                    return (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 + idx * 0.02 }}
                                            whileHover={{ y: -2, scale: 1.05 }}
                                            className="relative"
                                        >
                                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-clepto-navy/60 border border-gray-800/50 hover:border-clepto-cyan/30 transition-all duration-300 backdrop-blur-sm">
                                                {TechIcon && (
                                                    <TechIcon className="w-4 h-4 text-clepto-cyan" />
                                                )}
                                                <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
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
