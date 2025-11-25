import { Cpu, ShieldCheck, TrendingUp, Database, BarChart3 } from "lucide-react";

export const PERSONAL_INFO = {
    name: "Mayank Khanvilkar",
    role: "Founder & AI Automation Consultant",
    company: "Clepto.io",
    tagline: "Bridging Business Strategy & Intelligent Automation",
    location: "Dublin, Ireland",
    coordinates: [-6.2603, 53.3498], // For map marker
    bio: "I architect AI-native workflows that turn manual processes into compliance-ready, scalable systems. Specializing in n8n orchestration, RAG pipelines, and EU AI Act compliance frameworks for SMEs across Europe.",
    social: {
        linkedin: "https://www.linkedin.com/in/mayank-khanvilkar",
        email: "mailto:khanvilkarmayank@gmail.com",
        phone: "+353-899877801",
        github: "https://github.com/your-username" // Add when repo is ready
    },
    stats: {
        experience: "8+",
        workflows: "500+",
        compliance: "100%"
    }
};

export const CASE_STUDIES = [
    {
        id: 1,
        title: "LLM Workflow Orchestration Platform",
        metric: "50% Faster Retrieval",
        tech: ["n8n", "Google Vertex AI", "RAG", "Supabase"],
        desc: "Designed modular n8n workflows with RAG-enabled semantic search, automating context-aware operations across SME departments with AI agent frameworks.",
        type: "AI Automation",
        icon: "Cpu",
        gradient: "from-cyan-500/10 to-blue-500/10"
    },
    {
        id: 2,
        title: "EU AI Act Compliance Framework",
        metric: "100% Audit Readiness",
        tech: ["ISO 42001", "EU AI Act", "n8n", "Governance"],
        desc: "Conducted comprehensive gap analysis and embedded audit-ready controls into automated workflows, reducing regulatory risk for SME clients.",
        type: "Compliance",
        icon: "ShieldCheck",
        gradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
        id: 3,
        title: "Salesforce Experience Cloud Deployment",
        metric: "40% Efficiency Gain",
        tech: ["Salesforce", "Lightning", "Apex", "Flow"],
        desc: "Led multi-portal deployment optimizing digital touchpoints and automating workflows with Flow Builder and Apex triggers across client sites.",
        type: "CRM",
        icon: "TrendingUp",
        gradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
        id: 4,
        title: "Vector Database Semantic Search",
        metric: "35% Ops Boost",
        tech: ["Pinecone", "Python", "Custom Embeddings"],
        desc: "Built RAG-enabled semantic search unifying customer insights and reducing data retrieval time by 50% for SME operations with minimal errors.",
        type: "Data Engineering",
        icon: "Database",
        gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
        id: 5,
        title: "Agentic AI Infrastructure",
        metric: "40% Latency Reduction",
        tech: ["LangChain", "OpenAI", "n8n", "APIs"],
        desc: "Developed AI agents that monitor KPIs and trigger automated remediation, cutting decision latency and saving SMEs thousands monthly.",
        type: "AI Automation",
        icon: "Cpu",
        gradient: "from-orange-500/10 to-red-500/10"
    },
    {
        id: 6,
        title: "Enterprise BI Dashboard Suite",
        metric: "Real-Time Insights",
        tech: ["Power BI", "Tableau", "SQL", "Salesforce"],
        desc: "Delivered executive dashboards with semantic-layer SQL models illuminating cost, capacity, and performance metrics across departments.",
        type: "Data Engineering",
        icon: "BarChart3",
        gradient: "from-yellow-500/10 to-amber-500/10"
    }
];

export const EXPERIENCE = [
    {
        company: "Clepto.io",
        role: "Founder & AI Automation Consultant",
        period: "Jan 2025 - Present",
        location: "Dublin, Ireland",
        logo: "/logos/clepto.svg", // Add logo if available
        desc: "Leading AI automation agency focused on compliance-driven workflow solutions for European SMEs.",
        highlights: [
            "Architected n8n workflows reducing data retrieval time by 50%",
            "Conducted EU AI Act gap analysis for ISO 42001 compliance",
            "Built AI agent frameworks cutting decision latency by 40%",
            "Developed vector database solutions boosting ops by 35%"
        ],
        color: "teal" // For timeline dot color
    },
    {
        company: "Star Link GRP",
        role: "CRM Analyst (Business Transformation)",
        period: "Mar 2023 - Dec 2024",
        location: "Dublin, Ireland",
        desc: "Optimized Salesforce Experience Cloud and delivered data-driven dashboards.",
        highlights: [
            "Deployed multi-client Salesforce portals",
            "Automated workflows reducing manual tasks by 40%",
            "Created Power BI dashboards for real-time insights",
            "Facilitated cross-functional workshops"
        ],
        color: "blue"
    },
    {
        company: "Teleperformance",
        role: "Senior Business Analyst",
        period: "Apr 2017 - Dec 2021",
        location: "Indore, India",
        desc: "Led CRM transformations and process optimization initiatives.",
        highlights: [
            "Migrated 100,000+ records with 98% data integrity",
            "Improved operational efficiency by 20%",
            "Built executive dashboards integrating CRM data",
            "Authored BRDs/FRDs for solution design"
        ],
        color: "indigo"
    }
];

export const CERTIFICATIONS = [
    { name: "Salesforce Admin", issuer: "Salesforce", icon: "cloud" },
    { name: "Salesforce Business Analyst", issuer: "Salesforce", icon: "cloud" },
    { name: "Platform App Builder", issuer: "Salesforce", icon: "cloud" },
    { name: "ISO 20000 ITSM", issuer: "ISO", icon: "shield" },
    { name: "ISO/IEC 42001", issuer: "ISO", icon: "shield" },
    { name: "EU AI Act Specialist", issuer: "EU", icon: "gavel" },
    { name: "Google Cloud AI", issuer: "Google", icon: "brain" },
    { name: "Alteryx Designer", issuer: "Alteryx", icon: "database" },
    { name: "Six Sigma Yellow Belt", issuer: "ASQ", icon: "award" }
];

export const SKILLS = {
    "AI & Automation": ["n8n", "RAG", "LangChain", "OpenAI", "Vertex AI", "Vector DBs"],
    "Data & Analytics": ["Power BI", "Tableau", "SQL", "Python", "Google Data Studio"],
    "CRM & Integration": ["Salesforce", "Apex", "Flow", "Lightning", "Zapier"],
    "Compliance": ["EU AI Act", "ISO 42001", "ISO 20000", "GDPR", "Risk Mgmt"],
    "Cloud & Databases": ["Google Cloud", "Supabase", "Pinecone", "SQL Server"],
    "Project Management": ["Agile", "JIRA", "Confluence", "BRD/FRD", "BPMN"]
};
