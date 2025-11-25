import { Cpu, ShieldCheck, TrendingUp, Database, BarChart3, MessageSquare, Megaphone, Workflow, Cloud, Kanban, Gavel, Award, Brain } from "lucide-react";

export const PERSONAL_INFO = {
    name: "Mayank Khanvilkar",
    role: "AI Automation Consultant",
    company: "Clepto.io",
    tagline: "Architecting Compliance-Ready AI Workflows for European SMEs",
    location: "Dublin, Ireland",
    coordinates: [-6.2603, 53.3498],
    bio: "I transform manual business processes into intelligent, scalable automation systems. Specializing in n8n orchestration, RAG pipelines, and EU AI Act compliance frameworks—helping SMEs unlock operational efficiency while maintaining regulatory confidence.",
    image: "/images/mayank-profile.jpg",
    social: {
        linkedin: "https://www.linkedin.com/in/mayank-khanvilkar",
        instagram: "https://www.instagram.com/mayank_khanvilkar/",
        email: "mailto:mayank.khanvilkar@clepto.io",
        phone: "+353-899877801",
        clepto: "https://www.clepto.io"
    },
    stats: {
        experience: "8+",
        yearsLabel: "Years Experience",
        workflows: "500+",
        workflowsLabel: "Workflows Deployed",
        compliance: "100%",
        complianceLabel: "Audit Readiness"
    }
};

export const CASE_STUDIES = [
    {
        id: 1,
        title: "AI-Powered Customer Support Automation",
        shortDesc: "Built intelligent chatbot reducing support ticket volume by 65% using n8n and RAG.",
        fullDesc: "Designed an AI-powered customer support system integrating n8n workflows with RAG-enabled semantic search. The system automatically categorizes, prioritizes, and responds to customer queries, reducing ticket volume by 65% and improving response time by 80%.",
        tech: ["n8n", "RAG", "Supabase", "OpenAI", "Webhook Integration"],
        metric: "65% Ticket Reduction",
        icon: "MessageSquare",
        gradient: "from-red-500/10 via-transparent to-cyan-500/10",
        category: "AI Automation"
    },
    {
        id: 2,
        title: "EU AI Act Compliance Audit System",
        shortDesc: "Automated compliance framework ensuring 100% audit readiness for SME clients.",
        fullDesc: "Conducted comprehensive EU AI Act gap analysis and mapped ISO/IEC 42001 requirements into automated n8n workflows. Built real-time compliance monitoring dashboards with automated documentation generation, reducing compliance overhead by 70%.",
        tech: ["ISO 42001", "EU AI Act", "n8n", "Power BI", "Governance"],
        metric: "100% Audit Ready",
        icon: "ShieldCheck",
        gradient: "from-cyan-500/10 via-transparent to-red-500/10",
        category: "Compliance"
    },
    {
        id: 3,
        title: "Intelligent Lead Qualification Pipeline",
        shortDesc: "Automated lead scoring and routing system increasing sales efficiency by 45%.",
        fullDesc: "Developed AI-driven lead qualification system using n8n, Salesforce, and custom ML models. The system automatically scores leads based on behavioral data, routes high-value prospects, and triggers personalized email sequences—increasing conversion rates by 45%.",
        tech: ["Salesforce", "n8n", "Python ML", "Google Sheets API"],
        metric: "45% Conversion Boost",
        icon: "TrendingUp",
        gradient: "from-red-500/10 to-cyan-500/10",
        category: "Sales Automation"
    },
    {
        id: 4,
        title: "Real-Time Inventory Management System",
        shortDesc: "Vector database solution cutting data retrieval time by 50% for e-commerce operations.",
        fullDesc: "Built RAG-enabled semantic search for inventory management using Pinecone vector database and custom embeddings. The system provides real-time inventory insights, predicts stockouts, and automates reordering—reducing retrieval time by 50% and preventing stockouts.",
        tech: ["Pinecone", "Vector DB", "Python", "n8n", "Shopify API"],
        metric: "50% Faster Retrieval",
        icon: "Database",
        gradient: "from-cyan-500/10 to-transparent",
        category: "Data Engineering"
    },
    {
        id: 5,
        title: "Multi-Channel Marketing Automation",
        shortDesc: "Unified campaign orchestration across email, SMS, and social media using n8n.",
        fullDesc: "Orchestrated multi-channel marketing campaigns using n8n workflows connecting HubSpot, Mailchimp, Twilio, and social media APIs. Automated audience segmentation, personalized messaging, and performance tracking—improving campaign ROI by 60%.",
        tech: ["n8n", "HubSpot", "Mailchimp", "Twilio", "Social APIs"],
        metric: "60% ROI Increase",
        icon: "Megaphone",
        gradient: "from-red-500/10 via-cyan-500/10 to-transparent",
        category: "Marketing"
    },
    {
        id: 6,
        title: "Financial Reporting Dashboard Suite",
        shortDesc: "Executive BI dashboards providing real-time financial insights across departments.",
        fullDesc: "Delivered executive-level Power BI dashboards with semantic-layer SQL models integrating Salesforce, ERP, and accounting systems. Automated monthly financial reporting, reduced manual reporting time by 75%, and provided real-time P&L visibility.",
        tech: ["Power BI", "SQL Server", "Salesforce", "DAX", "Python ETL"],
        metric: "75% Time Saved",
        icon: "BarChart3",
        gradient: "from-cyan-500/10 to-red-500/10",
        category: "Analytics"
    }
];

export const EXPERIENCE = [
    {
        company: "Clepto.io",
        role: "AI Automation Consultant",
        period: "Jan 2025 - Present",
        location: "Dublin, Ireland",
        logo: "/logos/clepto.svg",
        desc: "Leading AI automation solutions for European SMEs with focus on compliance-driven workflows.",
        highlights: [
            "Architected 50+ n8n workflows reducing operational costs by 40% on average",
            "Conducted EU AI Act compliance audits for 15+ SME clients",
            "Built RAG-enabled systems cutting data retrieval time by 50%",
            "Developed agentic AI frameworks improving decision-making speed by 35%"
        ],
        color: "#0BD7D4"
    },
    {
        company: "Star Link GRP",
        role: "CRM Analyst (Business Transformation)",
        period: "Mar 2023 - Dec 2024",
        location: "Dublin, Ireland",
        desc: "Optimized Salesforce deployments and built data-driven analytics solutions.",
        highlights: [
            "Deployed Salesforce Experience Cloud for 10+ client portals",
            "Automated workflows reducing manual tasks by 40%",
            "Created Power BI dashboards for real-time executive insights",
            "Led cross-functional workshops aligning business and IT teams"
        ],
        color: "#FF3131"
    },
    {
        company: "Teleperformance",
        role: "Senior Business Analyst",
        period: "Apr 2017 - Dec 2021",
        location: "Indore, India",
        desc: "Led CRM transformations and process optimization for global clients.",
        highlights: [
            "Migrated 100,000+ records with 98% data integrity",
            "Improved operational efficiency by 20% through process mapping",
            "Built executive dashboards integrating multiple CRM systems",
            "Authored 50+ BRDs/FRDs for enterprise solution design"
        ],
        color: "#0BD7D4"
    }
];

export const CERTIFICATIONS = [
    { name: "Salesforce Certified Admin", issuer: "Salesforce", icon: "Cloud" },
    { name: "Salesforce Business Analyst", issuer: "Salesforce", icon: "Cloud" },
    { name: "Platform App Builder", issuer: "Salesforce", icon: "Cloud" },
    { name: "ISO 20000 ITSM", issuer: "ISO", icon: "Shield" },
    { name: "ISO/IEC 42001 AI Management", issuer: "ISO", icon: "Shield" },
    { name: "EU AI Act Compliance Specialist", issuer: "EU", icon: "Gavel" },
    { name: "Google Cloud AI Prompt Engineering", issuer: "Google Cloud", icon: "Brain" },
    { name: "Alteryx Designer Core", issuer: "Alteryx", icon: "Database" },
    { name: "Six Sigma Yellow Belt", issuer: "ASQ", icon: "Award" }
];

export const SKILLS = {
    "AI & Automation": {
        items: ["n8n", "RAG", "LangChain", "OpenAI", "Google Vertex AI", "Vector Databases", "Agentic AI"],
        icon: "Cpu",
        color: "#FF3131"
    },
    "Data & Analytics": {
        items: ["Power BI", "Tableau", "SQL", "Python", "Google Data Studio", "DAX"],
        icon: "BarChart3",
        color: "#0BD7D4"
    },
    "CRM & Integration": {
        items: ["Salesforce", "Apex", "Flow Builder", "Lightning", "Zapier", "Make.com"],
        icon: "Workflow",
        color: "#FF3131"
    },
    "Compliance & Governance": {
        items: ["EU AI Act", "ISO 42001", "ISO 20000", "GDPR", "Risk Management"],
        icon: "ShieldCheck",
        color: "#0BD7D4"
    },
    "Cloud & Databases": {
        items: ["Google Cloud", "Supabase", "Pinecone", "SQL Server", "PostgreSQL"],
        icon: "Cloud",
        color: "#FF3131"
    },
    "Project Management": {
        items: ["Agile/Scrum", "JIRA", "Confluence", "BRD/FRD", "BPMN", "Stakeholder Management"],
        icon: "Kanban",
        color: "#0BD7D4"
    }
};
