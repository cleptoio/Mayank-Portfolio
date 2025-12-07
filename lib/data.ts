import { Cpu, ShieldCheck, TrendingUp, Database, BarChart3, MessageSquare, Megaphone, Workflow, Cloud, Kanban, Gavel, Award, Brain, GraduationCap, Wrench, Bot, Users } from "lucide-react";

export const PERSONAL_INFO = {
    name: "Mayank Khanvilkar",
    role: "Senior Automation Analyst | AI-Powered Workflow Engineering",
    company: "Clepto.io",
    tagline: "Building Portals, Workflows & AI Agents Without Code",
    location: "Dublin, Ireland",
    coordinates: [-6.2603, 53.3498],
    bio: "I bridge business strategy and intelligent automation—without writing traditional code. With 7+ years in data-driven transformation, I help organisations turn scattered data and manual workflows into AI-powered systems that scale. Specializing in n8n orchestration, RAG pipelines, and EU AI Act frameworks.",
    image: "/images/Mayank Professional.jpg",
    social: {
        linkedin: "https://www.linkedin.com/in/mayankkhanvilkar",
        instagram: "https://www.instagram.com/mayank_khanvilkar/",
        email: "mailto:mayank.khanvilkar@clepto.io",
        clepto: "https://www.clepto.io"
    },
    stats: {
        experience: "7+",
        yearsLabel: "Years Experience",
        workflows: "100+",
        workflowsLabel: "AI Workflows",
        clients: "15+",
        clientsLabel: "Enterprise Clients"
    }
};

export const CASE_STUDIES = [
    {
        id: 1,
        title: "AI-Powered GTM Automation Framework",
        shortDesc: "End-to-end n8n workflows integrating OpenAI agents, MCP-enabled context retrieval, and vector search for automated lead qualification, enrichment, and routing.",
        fullDesc: "Designed end-to-end n8n workflows integrating OpenAI agents, MCP-enabled context retrieval, CRM data, and vector search to automate lead qualification, enrichment, and routing. Built analytics layer tracking automation performance metrics. Delivered ISO 42001-aligned governance documentation ensuring EU AI Act alignment.",
        tech: ["n8n", "OpenAI", "MCP", "Vector DB", "SQL", "ISO 42001"],
        metric: "50% Less Manual Work",
        metricSecondary: "35% Faster Pipeline",
        icon: "Bot",
        gradient: "from-cyan-500/20 via-purple-500/10 to-transparent",
        category: "AI Automation"
    },
    {
        id: 2,
        title: "Salesforce-to-Data Warehouse ETL Pipeline",
        shortDesc: "Architected automated data sync between Salesforce and PostgreSQL using n8n, Python transformations, and scheduled workflows with real-time executive reporting.",
        fullDesc: "Architected automated data sync between Salesforce and PostgreSQL using n8n, Python transformations, and scheduled workflows. Built Power BI dashboards visualizing sales trends, forecasting accuracy, and rep productivity. Real-time executive reporting replacing manual weekly extracts.",
        tech: ["n8n", "PostgreSQL", "Python", "Power BI", "SQL", "ETL"],
        metric: "10 hrs/week Saved",
        metricSecondary: "Real-time Reporting",
        icon: "Database",
        gradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
        category: "Data Engineering"
    },
    {
        id: 3,
        title: "RAG-Enabled Customer Support Agent",
        shortDesc: "AI agent using OpenAI API, Pinecone vector database, and n8n orchestration for intelligent customer query handling with Slack and email integration.",
        fullDesc: "Built AI agent using OpenAI API, Pinecone vector database, and n8n orchestration to answer customer queries by searching knowledge base, CRM history, and documentation. Integrated with Slack and email for seamless handoff.",
        tech: ["OpenAI API", "Pinecone", "n8n", "RAG", "Slack", "Email"],
        metric: "60% Ticket Reduction",
        metricSecondary: "80% User Satisfaction",
        icon: "MessageSquare",
        gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
        category: "AI Agents"
    },
    {
        id: 4,
        title: "Legacy CRM to Salesforce Migration",
        shortDesc: "Enterprise-scale data migration of 100,000+ records with comprehensive project documentation, validation plans, and zero downtime deployment.",
        fullDesc: "Ensured data integrity, accuracy, and minimal disruption to business operations during migration of 100,000+ records. Created comprehensive project documentation including project charter, requirement documents, data mapping, validation plans, ETL specifications, UAT plans, migration checklists, and post-migration support plans.",
        tech: ["Salesforce", "ETL", "SQL", "Data Mapping", "UAT", "Documentation"],
        metric: "98% Data Accuracy",
        metricSecondary: "Zero Downtime",
        icon: "TrendingUp",
        gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
        category: "Data Migration"
    },
    {
        id: 5,
        title: "Customer Order & Inventory Platform",
        shortDesc: "Streamlined order tracking and automated inventory management to improve customer experience with comprehensive documentation.",
        fullDesc: "Streamlined order tracking and automated inventory management to improve customer experience. Created comprehensive project documentation including project charter, requirement document, inventory management plan, order management plan, integration specifications, training plan, risk management plan, and post-implementation support plan.",
        tech: ["SQL", "n8n", "API Integration", "Automation", "Analytics"],
        metric: "30% Faster Processing",
        metricSecondary: "25% Better Accuracy",
        icon: "Workflow",
        gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
        category: "Process Automation"
    },
    {
        id: 6,
        title: "EU AI Act Compliance Framework",
        shortDesc: "Comprehensive AI governance initiatives mapping technical workflow designs to EU AI Act and ISO 42001 standards for enterprise clients.",
        fullDesc: "Conducted EU AI Act gap analyses and mapped ISO/IEC 42001 controls into workflow governance, building audit-ready compliance frameworks that reduced regulatory risk by 70% across 15+ enterprise clients.",
        tech: ["ISO 42001", "EU AI Act", "GDPR", "Risk Assessment", "Governance"],
        metric: "70% Risk Reduction",
        metricSecondary: "15+ Clients Compliant",
        icon: "ShieldCheck",
        gradient: "from-red-500/20 via-rose-500/10 to-transparent",
        category: "Compliance"
    }
];

export const EXPERIENCE = [
    {
        company: "Clepto.io",
        role: "AI Automation Consultant",
        period: "Sep 2024 - Present",
        location: "Dublin, Ireland",
        logo: "/logos/clepto.svg",
        desc: "Architecting scalable, end-to-end AI automation ecosystems for diverse SME clients using n8n and LLMs, driving holistic digital transformation and operational efficiency.",
        highlights: [
            "Enterprise Workflow Architecture: Architected scalable AI automation ecosystems using n8n and LLMs for diverse SME clients",
            "Designed 100+ production n8n workflows integrating LLMs, RAG architectures, MCP-enabled tools, and vector databases—reducing manual work by 50%",
            "Deployed complex, multi-agent AI systems and RAG architectures that autonomously handle decision-making and data retrieval",
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
            "Configured Salesforce Experience Cloud portals optimizing digital engagement across multi-client sites",
            "Designed, tested, and deployed scalable Salesforce solutions including custom objects, workflows, and Lightning components",
            "Developed data-driven dashboards using Looker Studio enabling stakeholders to gain actionable insights",
            "Implemented automation workflows reducing manual tasks by 40% and accelerating deployment cycles"
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
            "Coordinated ETL activities migrating 100,000+ records to Salesforce, validating data integrity at 98% accuracy",
            "Led as-is and to-be process mapping using Visio, identifying system gaps and improving operational efficiency by 20%",
            "Developed executive dashboards in Power BI and Google Data Studio delivering real-time insights"
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
    { name: "Google Cloud AI Prompt Engineering", issuer: "Google Cloud", icon: "Brain" }
];

export const SKILLS = {
    "AI & Automation": {
        items: ["n8n", "Zapier", "Make.com", "Workato", "OpenAI", "Claude", "Cursor", "Google AI Studio", "Vertex AI", "NotebookLM", "RAG", "API Integration", "Vector Databases", "MCP Integration"],
        icon: "Bot",
        color: "#FF3131"
    },
    "Data & Analytics": {
        items: ["Looker Studio", "Power BI", "Tableau", "Hex.tech", "SQL", "PostgreSQL", "Data Modeling", "KPI Reporting", "ETL Pipelines"],
        icon: "BarChart3",
        color: "#0BD7D4"
    },
    "Development & Tools": {
        items: ["JavaScript", "Python", "Github", "Supabase", "Pinecone", "Draw.io", "Eraser.io", "Notion AI"],
        icon: "Wrench",
        color: "#FF3131"
    },
    "Platforms": {
        items: ["Salesforce", "Clay.com", "Google Workspace", "JIRA", "Confluence", "Trello", "MS Office"],
        icon: "Cloud",
        color: "#0BD7D4"
    },
    "Compliance & Governance": {
        items: ["EU AI Act", "ISO 42001", "ISO 20000", "GDPR", "Risk Management", "Audit Frameworks"],
        icon: "ShieldCheck",
        color: "#FF3131"
    },
    "Core Competencies": {
        items: ["Requirements Analysis", "Stakeholder Management", "Process Improvement", "Agile/BPR", "Technical Documentation", "Change Management", "Backlog Management"],
        icon: "Users",
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
