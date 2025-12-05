"use client";

import { motion } from "framer-motion";
import { SKILLS, CERTIFICATIONS } from "@/lib/data";
import { Award, Brain, Cloud, Database, Shield, Gavel, Cpu, BarChart3, Workflow, ShieldCheck, Kanban, Wrench, Bot, Users, ChevronRight } from "lucide-react";
import {
    SiPython, SiSalesforce, SiGooglecloud, SiSupabase, SiPostgresql,
    SiJira, SiConfluence, SiTableau, SiOpenai, SiN8N,
    SiZapier, SiMake, SiNotion, SiTrello, SiJavascript, SiGithub, SiLooker
} from "react-icons/si";

const categoryIconMap: Record<string, any> = {
    Cloud, Shield, Gavel, Brain, Database, Award, Cpu, BarChart3, Workflow, ShieldCheck, Kanban, Wrench, Bot, Users
};

const techIconMap: Record<string, any> = {
    "n8n": SiN8N,
    "Python": SiPython,
    "JavaScript": SiJavascript,
    "Github": SiGithub,
    "Salesforce": SiSalesforce,
    "Google Workspace": SiGooglecloud,
    "Google AI Studio": SiGooglecloud,
    "Vertex AI": SiGooglecloud,
    "Looker Studio": SiLooker,
    "Supabase": SiSupabase,
    "SQL": Database,
    "PostgreSQL": SiPostgresql,
    "JIRA": SiJira,
    "Confluence": SiConfluence,
    "Tableau": SiTableau,
    "Power BI": BarChart3,
    "Hex.tech": BarChart3,
    "OpenAI": SiOpenai,
    "Zapier": SiZapier,
    "Make.com": SiMake,
    "Workato": Workflow,
    "GDPR": Shield,
    "Notion AI": SiNotion,
    "Trello": SiTrello,
    "Claude": Bot,
    "Cursor": Cpu,
    "RAG": Database,
    "API Integration": Workflow,
    "Vector Databases": Database,
    "MCP Integration": Workflow,
    "ETL Pipelines": Workflow,
    "NotebookLM": Brain,
    "Pinecone": Database,
    "Draw.io": Workflow,
    "Eraser.io": Workflow,
    "Clay.com": Cloud,
    "MS Office": Cloud,
    "Data Modeling": Database,
    "KPI Reporting": BarChart3,
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
    "Backlog Management": Kanban,
};

export function SkillsGrid() {
    const skillEntries = Object.entries(SKILLS);

    return (
        <div className="space-y-16">
            {/* Skills in horizontal layout */}
            <div className="space-y-6">
                {skillEntries.map(([category, data], index) => {
                    const CategoryIcon = categoryIconMap[data.icon] || Cpu;
                    return (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 p-6 lg:p-8 rounded-2xl bg-gray-900/40 border border-gray-800/50 hover:border-clepto-cyan/30 transition-all">
                                {/* Category header */}
                                <div className="flex items-center gap-4 lg:min-w-[260px]">
                                    <div className="p-3 rounded-xl bg-clepto-cyan/10 border border-clepto-cyan/20">
                                        <CategoryIcon className="w-7 h-7 text-clepto-cyan" />
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-bold text-white">{category}</h3>
                                    <ChevronRight className="w-5 h-5 text-gray-600 hidden lg:block" />
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-3 flex-1">
                                    {data.items.map((skill) => {
                                        const TechIcon = techIconMap[skill];
                                        return (
                                            <motion.div
                                                key={skill}
                                                whileHover={{ scale: 1.05 }}
                                                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gray-800/60 border border-gray-700/50 hover:border-clepto-cyan/40 hover:bg-clepto-cyan/10 transition-all cursor-default"
                                            >
                                                {TechIcon && <TechIcon className="w-5 h-5 text-clepto-cyan" />}
                                                <span className="text-base font-medium text-gray-300 hover:text-white transition-colors">
                                                    {skill}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Certifications */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center mb-10">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">Certifications</h3>
                    <p className="text-lg text-gray-400">Professional credentials and qualifications</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {CERTIFICATIONS.map((cert, index) => {
                        const Icon = categoryIconMap[cert.icon] || Award;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -2 }}
                                className="flex items-center gap-4 p-5 rounded-xl bg-gray-900/40 border border-gray-800/50 hover:border-clepto-cyan/30 transition-all"
                            >
                                <Icon className="w-6 h-6 text-clepto-cyan shrink-0" />
                                <span className="text-base font-medium text-gray-300">{cert.name}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}
