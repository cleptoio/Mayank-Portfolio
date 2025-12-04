import { Cpu, ShieldCheck, TrendingUp, Database, BarChart3, MessageSquare, Megaphone, Workflow, Cloud, Kanban, Gavel, Award, Brain, GraduationCap } from "lucide-react";

export const PERSONAL_INFO = {
    name: "Mayank Khanvilkar",
    role: "Senior Automation Analyst | AI-Powered Workflow Engineering",
    company: "Clepto.io",
    tagline: "Building Portals, Workflows & AI Agents Without Code",
    location: "Dublin 15, Ireland",
    coordinates: [-6.2603, 53.3498],
    bio: "I bridge business strategy and intelligent automation—without writing traditional code. With 8+ years in data-driven transformation, I help organisations turn scattered data and manual workflows into AI-powered systems that scale. Specializing in n8n orchestration, RAG pipelines, and EU AI Act frameworks.",
    image: "/images/Mayank Professional.webp",
    social: {
        linkedin: "https://www.linkedin.com/in/mayankkhanvilkar",
        instagram: "https://www.instagram.com/mayank_khanvilkar/",
        email: "mailto:mayank.khanvilkar6897@gmail.com",
        phone: "+353-899877801",
        clepto: "https://www.clepto.io"
    },
    stats: {
        experience: "8+",
        yearsLabel: "Years Experience",
        workflows: "100+",
        workflowsLabel: "n8n Workflows",
        compliance: "100%",
        complianceLabel: "Audit Ready"
    }
};

export const CASE_STUDIES = [
    {
        id: 1,
        title: "AI-Powered GTM Automation Framework",
        shortDesc: "End-to-end n8n workflows integrating OpenAI agents, MCP-enabled context retrieval, and vector search for automated lead qualification.",
        fullDesc: "Designed end-to-end n8n workflows integrating OpenAI agents, MCP-enabled context retrieval, CRM data, and vector search to automate lead qualification, enrichment, and routing. Built SQL analytics layer tracking automation performance (lead-to-opportunity conversion, time saved). Delivered ISO 42001-aligned governance documentation ensuring EU AI Act compliance.",
        tech: ["n8n", "OpenAI", "MCP", "Vector DB", "SQL", "ISO 42001"],
        metric: "50% Less Manual Work",
        icon: "Cpu",
        gradient: "from-cyan-500/10 to-transparent",
        category: "AI Automation"
    },
    {
        id: 2,
        title: "Salesforce-to-Data Warehouse ETL Pipeline",
        shortDesc: "Automated data sync between Salesforce and PostgreSQL using n8n, Python transformations, and scheduled SQL queries.",
        fullDesc: "Architected automated data sync between Salesforce and PostgreSQL using n8n, Python transformations, and scheduled SQL queries. Built Power BI dashboards visualizing sales trends, forecasting accuracy, and rep productivity. Real-time executive reporting replacing manual weekly extracts.",
        tech: ["n8n", "PostgreSQL", "Python", "Power BI", "SQL", "ETL"],
        metric: "10 hrs/week Saved",
        icon: "Database",
        gradient: "from-red-500/10 via-transparent to-cyan-500/10",
        category: "Data Engineering"
    },
    {
        id: 3,
        title: "RAG-Enabled Customer Support Agent",
        shortDesc: "AI agent using OpenAI API, Pinecone vector database, and n8n orchestration for intelligent customer query handling.",
        fullDesc: "Built AI agent using OpenAI API, Pinecone vector database, and n8n orchestration to answer customer queries by searching knowledge base, CRM history, and documentation. Integrated with Slack and email for seamless handoff.",
        tech: ["OpenAI API", "Pinecone", "n8n", "RAG", "Slack", "Email"],
        metric: "60% Ticket Reduction",
        icon: "MessageSquare",
        gradient: "from-cyan-500/10 to-transparent",
        category: "AI Automation"
    },
    {
        id: 4,
        title: "EU AI Act Compliance Framework",
        shortDesc: "Comprehensive compliance automation mapping ISO/IEC 42001 requirements into n8n workflows for audit readiness.",
        fullDesc: "Conducted EU AI Act gap analyses and mapped ISO/IEC 42001 controls into workflow governance, building audit-ready compliance frameworks that reduced regulatory risk by 70% across 10+ enterprise clients.",
        tech: ["ISO 42001", "EU AI Act", "n8n", "Power BI", "Governance"],
        metric: "70% Risk Reduction",
        icon: "ShieldCheck",
        gradient: "from-red-500/10 via-transparent to-cyan-500/10",
        category: "Compliance"
    },
    {
        id: 5,
        title: "Salesforce Automation Engineering",
        shortDesc: "30+ Salesforce Flow automations and Apex triggers for lead routing, opportunity management, and case escalation.",
        fullDesc: "Configured 30+ Salesforce Flow automations and Apex triggers to orchestrate lead routing, opportunity management, and case escalation workflows—eliminating 40% of manual tasks and accelerating deal closure by 25%.",
        tech: ["Salesforce", "Flow Builder", "Apex", "Lightning", "APIs"],
        metric: "25% Faster Deals",
        icon: "TrendingUp",
        gradient: "from-red-500/10 to-cyan-500/10",
        category: "CRM"
    },
    {
        id: 6,
        title: "Executive BI Dashboard Suite",
        shortDesc: "Real-time Power BI dashboards integrating Salesforce, ERP, and analytics for data-driven decisions.",
        fullDesc: "Developed Power BI and Google Data Studio dashboards integrating Salesforce data with external sources, delivering executive reporting on pipeline health, sales performance, and forecasting accuracy—enabling predictive GTM planning and reducing reporting time by 60%.",
        tech: ["Power BI", "SQL", "Salesforce", "Google Data Studio", "ETL"],
        metric: "60% Time Saved",
        icon: "BarChart3",
        gradient: "from-cyan-500/10 to-red-500/10",
        category: "Analytics"
    }
];

export const EXPERIENCE = [
    {
        company: "Clepto.io",
        role: "AI Automation Consultant",
        period: "Oct 2024 - Present",
        location: "Dublin, Ireland",
        logo: "/logos/clepto.svg",
        desc: "Architecting scalable, end-to-end AI automation ecosystems for diverse SME clients using n8n and LLMs, driving holistic digital transformation and operational efficiency.",
        highlights: [
            "Enterprise Workflow Architecture: Built React/Next.js client portals with Supabase, integrating Claude, GPT-4, Gemini APIs for real-time AI-powered dashboards",
            "Designed 100+ production n8n workflows integrating LLMs, RAG architectures, MCP-enabled tools, and vector databases—reducing manual work by 50%",
            "Deployed complex, multi-agent AI systems and RAG architectures that autonomously handle decision-making and data retrieval processes",
            "Led comprehensive AI governance initiatives mapping technical workflow designs to EU AI Act and ISO 42001 standards"
        ],
        color: "#0BD7D4"
    },
    {
        company: "Star Link GRP",
        role: "CRM Analyst",
        period: "Apr 2023 - Sep 2024",
        location: "Dublin, Ireland",
        desc: "Optimized Salesforce Experience Cloud deployments and delivered data-driven analytics solutions for digital transformation initiatives.",
        highlights: [
            "Configured 30+ Salesforce Flow automations and Apex triggers—eliminating 40% of manual tasks and accelerating deal closure by 25%",
            "Built webhook-triggered integrations between Salesforce, Slack, Google Workspace, and third-party enrichment tools with 99% accuracy",
            "Developed Power BI and Google Data Studio dashboards delivering executive reporting on pipeline health and sales performance",
            "Facilitated cross-functional workshops with Sales, RevOps, IT, and Security teams—delivering 15+ projects on time"
        ],
        color: "#FF3131"
    },
    {
        company: "Teleperformance",
        role: "Business Analyst",
        period: "Apr 2017 - Dec 2021",
        location: "Indore, India",
        desc: "Led CRM requirements gathering, data migration, and automated reporting workflows for global enterprise clients.",
        highlights: [
            "Led requirements gathering for 10+ Salesforce implementations, creating BRDs, FRDs, and process maps—ensuring 95% stakeholder satisfaction",
            "Managed migration of 100,000+ records from legacy systems to Salesforce, validating data integrity at 98% accuracy",
            "Built 20+ executive dashboards using Salesforce Reports, Power BI, and SQL Server—reducing reporting time by 60%",
            "Coordinated ETL workflows with minimal business disruption across multiple enterprise clients"
        ],
        color: "#0BD7D4"
    }
];

export const EDUCATION = [
    {
        degree: "MSc in Business Analytics",
        institution: "Dublin Business School",
        location: "Dublin, Ireland",
        period: "Jan 2022 - Feb 2023",
        coursework: ["Business Intelligence & Visualization", "Applied Statistics & Machine Learning", "Programming for Analytics", "Databases & SQL", "Project Management", "Requirements Analysis"],
        icon: "GraduationCap"
    },
    {
        degree: "MBA in Operations and Marketing",
        institution: "Swami Vivekananda Institute of Management",
        location: "India",
        period: "Jul 2019 - Aug 2021",
        coursework: ["Operations Management", "Digital Marketing", "Forecasting & Modeling", "Marketing Strategy", "Consumer Analytics", "Statistics"],
        icon: "GraduationCap"
    }
];

export const CERTIFICATIONS = [
    { name: "ISO/IEC 42001 AI Management System", issuer: "ISO", icon: "ShieldCheck" },
    { name: "EU AI Act Compliance", issuer: "EU", icon: "Gavel" },
    { name: "ISO 20000 IT Service Management", issuer: "ISO", icon: "ShieldCheck" },
    { name: "Salesforce Certified Associate", issuer: "Salesforce", icon: "Cloud" },
    { name: "Salesforce Certified Administrator", issuer: "Salesforce", icon: "Cloud" },
    { name: "Salesforce Business Analyst", issuer: "Salesforce", icon: "Cloud" },
    { name: "Salesforce Platform App Builder", issuer: "Salesforce", icon: "Cloud" },
    { name: "Google Cloud AI Prompt Engineering", issuer: "Google Cloud", icon: "Brain" },
    { name: "Alteryx Designer Core", issuer: "Alteryx", icon: "Database" },
    { name: "Six Sigma Yellow Belt", issuer: "ASQ", icon: "Award" }
];

export const SKILLS = {
    "AI & Automation": {
        items: ["n8n", "Zapier", "Make.com", "OpenAI API", "Google AI Studio", "Vertex AI", "RAG", "Vector Databases", "MCP Integration"],
        icon: "Cpu",
        color: "#FF3131"
    },
    "Data & Analytics": {
        items: ["Power BI", "Tableau", "Google Data Studio", "SQL", "PostgreSQL", "ETL Pipelines", "DAX"],
        icon: "BarChart3",
        color: "#0BD7D4"
    },
    "CRM & Integration": {
        items: ["Salesforce", "Apex", "Flow Builder", "Lightning", "Experience Cloud", "API Integration"],
        icon: "Workflow",
        color: "#FF3131"
    },
    "Development Tools": {
        items: ["JavaScript", "Python", "Git", "Cursor", "Claude Code", "Supabase", "Pinecone"],
        icon: "Cpu",
        color: "#0BD7D4"
    },
    "Compliance & Governance": {
        items: ["EU AI Act", "ISO 42001", "ISO 20000", "GDPR", "Risk Management", "Audit Frameworks"],
        icon: "ShieldCheck",
        color: "#FF3131"
    },
    "Project Management": {
        items: ["Agile/Scrum", "JIRA", "Confluence", "BRD/FRD", "BPMN", "Stakeholder Management", "Google Workspace"],
        icon: "Kanban",
        color: "#0BD7D4"
    }
};

export const LANGUAGES = [
    { name: "English", level: "Full Professional" },
    { name: "Hindi", level: "Native or Bilingual" },
    { name: "Marathi", level: "Native or Bilingual" }
];

export const ACHIEVEMENTS = [
    "Promoted for outstanding leadership of 30+ member cross-functional teams",
    "Consistently exceeded strategic KPIs across all roles",
    "Awarded Best Employee and Best Performer for surpassing targets",
    "Employee of the Month recognition",
    "Star Leader for the Quarter",
    "Star Performer for the Quarter"
];
