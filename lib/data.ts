import { Cpu, ShieldCheck, TrendingUp, Database, BarChart3, MessageSquare, Megaphone, Workflow, Cloud, Kanban, Gavel, Award, Brain } from "lucide-react";

export const PERSONAL_INFO = {
    name: "Mayank Khanvilkar",
    role: "AI Automation Consultant",
    company: "Clepto.io",
    tagline: "Building Compliance-Ready AI Workflows for European SMEs",
    location: "Dublin, Ireland",
    coordinates: [-6.2603, 53.3498],
    bio: "I architect intelligent automation systems that transform manual business processes into scalable, compliance-ready workflows. Specializing in n8n orchestration, RAG pipelines, and EU AI Act frameworks for SMEs across Europe.",
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
        workflows: "50+",
        workflowsLabel: "n8n Workflows",
        compliance: "100%",
        complianceLabel: "Audit Ready"
    }
};

export const CASE_STUDIES = [
    {
        id: 1,
        title: "LLM Workflow Orchestration Platform",
        shortDesc: "Modular n8n workflows with RAG-enabled semantic search automating context-aware operations across SME departments.",
        fullDesc: "Designed intelligent workflow orchestration using n8n, integrating Google APIs, CRM platforms, and custom embeddings. Built RAG-enabled context retrieval reducing manual operations by 50% while maintaining audit trails for compliance.",
        tech: ["n8n", "RAG", "Google Vertex AI", "Vector DB", "APIs"],
        metric: "50% Faster",
        icon: "Cpu",
        gradient: "from-cyan-500/10 to-transparent",
        category: "AI Automation"
    },
    {
        id: 2,
        title: "EU AI Act Compliance Framework",
        shortDesc: "Comprehensive compliance automation mapping ISO/IEC 42001 requirements into n8n workflows for audit readiness.",
        fullDesc: "Conducted gap analysis across 15+ SME clients, designing automated compliance workflows with real-time monitoring dashboards. Reduced regulatory overhead by 70% while ensuring full EU AI Act and ISO 42001 alignment.",
        tech: ["ISO 42001", "EU AI Act", "n8n", "Power BI", "Governance"],
        metric: "100% Compliant",
        icon: "ShieldCheck",
        gradient: "from-red-500/10 via-transparent to-cyan-500/10",
        category: "Compliance"
    },
    {
        id: 3,
        title: "Salesforce Experience Cloud Deployment",
        shortDesc: "Multi-portal implementation optimizing digital engagement and workflow automation for 10+ clients.",
        fullDesc: "Led end-to-end deployment of Salesforce Experience Cloud portals with custom Lightning components, automated workflows using Flow Builder and Apex triggers, reducing manual tasks by 40% across client platforms.",
        tech: ["Salesforce", "Lightning", "Apex", "Flow Builder"],
        metric: "40% Efficiency",
        icon: "TrendingUp",
        gradient: "from-red-500/10 to-cyan-500/10",
        category: "CRM"
    },
    {
        id: 4,
        title: "Vector Database Semantic Search",
        shortDesc: "RAG-powered semantic search unifying customer insights with 50% faster data retrieval for SMEs.",
        fullDesc: "Built intelligent search infrastructure using Pinecone vector databases and custom embeddings, enabling natural language queries across CRM, ERP, and analytics platforms with 98% accuracy and minimal latency.",
        tech: ["Pinecone", "Vector DB", "Python", "RAG", "Embeddings"],
        metric: "50% Faster",
        icon: "Database",
        gradient: "from-cyan-500/10 to-transparent",
        category: "Data Engineering"
    },
    {
        id: 5,
        title: "AI Agent Orchestration Framework",
        shortDesc: "Automated data orchestration using AI agents, improving workflow resilience and operational continuity.",
        fullDesc: "Developed agentic AI infrastructure with n8n nodes monitoring KPIs and triggering automated remediation. Reduced decision latency by 40% while saving thousands monthly in operational costs for SME clients.",
        tech: ["n8n", "LangChain", "OpenAI", "APIs", "Automation"],
        metric: "35% Faster",
        icon: "Megaphone",
        gradient: "from-red-500/10 via-cyan-500/10 to-transparent",
        category: "AI Automation"
    },
    {
        id: 6,
        title: "Executive BI Dashboard Suite",
        shortDesc: "Real-time Power BI dashboards integrating Salesforce, ERP, and analytics for data-driven decisions.",
        fullDesc: "Delivered enterprise-grade dashboards with semantic SQL models, automated reporting pipelines, and real-time P&L visibility. Reduced manual reporting time by 75% while improving decision-making speed across departments.",
        tech: ["Power BI", "SQL", "Salesforce", "DAX", "ETL"],
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
        desc: "Leading AI automation solutions for European SMEs with focus on compliance-driven workflows and intelligent process automation.",
        highlights: [
            "Designed 50+ modular n8n workflows integrating RAG, CRM, and API platforms",
            "Conducted EU AI Act gap analysis and ISO/IEC 42001 compliance mapping for 15+ SME clients",
            "Built vector database solutions reducing data retrieval time by 50%",
            "Developed AI agent frameworks automating decision-making and reducing operational latency by 35%"
        ],
        color: "#0BD7D4"
    },
    {
        company: "Star Link GRP",
        role: "CRM Analyst (Business Transformation)",
        period: "Apr 2023 - Dec 2024",
        location: "Dublin, Ireland",
        desc: "Optimized Salesforce Experience Cloud deployments and delivered data-driven analytics solutions for digital transformation initiatives.",
        highlights: [
            "Configured and deployed Salesforce Experience Cloud portals for 10+ multi-client sites",
            "Implemented automation workflows (Flow, Apex) reducing manual tasks by 40%",
            "Developed Power BI and Tableau dashboards delivering real-time insights to stakeholders",
            "Led cross-functional workshops aligning business, ICT, and security teams on digital solutions"
        ],
        color: "#FF3131"
    },
    {
        company: "Teleperformance",
        role: "Senior Business Analyst",
        period: "Apr 2017 - Dec 2021",
        location: "Indore, India",
        desc: "Led CRM transformations, process optimization, and data migration initiatives for global enterprise clients.",
        highlights: [
            "Coordinated migration of 100,000+ records to Salesforce achieving 98% data integrity",
            "Led process mapping and gap analysis improving operational efficiency by 20%",
            "Developed executive dashboards integrating multiple CRM and ERP data sources",
            "Authored 50+ BRDs/FRDs for enterprise solution design and stakeholder alignment"
        ],
        color: "#0BD7D4"
    }
];

export const CERTIFICATIONS = [
    { name: "Salesforce Certified Administrator", issuer: "Salesforce", icon: "Cloud" },
    { name: "Salesforce Business Analyst", issuer: "Salesforce", icon: "Cloud" },
    { name: "Platform App Builder", issuer: "Salesforce", icon: "Cloud" },
    { name: "ISO 20000 ITSM", issuer: "ISO", icon: "ShieldCheck" },
    { name: "ISO/IEC 42001 AI Management", issuer: "ISO", icon: "ShieldCheck" },
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
