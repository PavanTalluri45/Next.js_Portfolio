"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import { AuroraText } from "@/components/ui/aurora-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { Badge } from "@/components/ui/badge";
import { Github, Layers, Code2, Cpu } from "lucide-react";

// ==================== PROJECTS DATA ====================

const PROJECTS = [
    {
        title: "Complete Authentication System",
        tagline: "Enterprise-Grade Security Platform",
        description: "A production-ready authentication platform implementing secure user registration, login, OTP-based email verification, password recovery, JWT and refresh token workflows, and Redis-powered rate limiting.",
        problem: "Modern web applications require robust, scalable, and secure authentication to prevent unauthorized access and data breaches. Building this from scratch is complex and error-prone.",
        solution: "Designed a microservice-oriented architecture separating Auth and Email services, ensuring scalability. implemented rigorous security measures like rate limiting via Redis and secure token management.",
        architecture: [
            "Microservices Architecture (Auth Service + Email Service)",
            "Redis for Rate Limiting & Token Blacklisting",
            "MySQL with Sequelize ORM for Relational Data",
            "Secure HTTP-only Cookies for Tokens"
        ],
        features: [
            "Secure User Registration & Login",
            "OTP-based Email Verification",
            "Password Recovery Flow",
            "JWT Access & Refresh Token Rotation",
            "High Performance Rate Limiting"
        ],
        stack: ["Next.js", "TypeScript", "Node.js", "Express.js", "MySQL", "Redis", "JWT"],
        repoLink: "https://github.com/PavanTalluri45/complete-authentication-system",
        image: "/project_images/casestudy1.webp"
    },
    {
        title: "Guest Identity Verification System",
        tagline: "Real-time Event Management",
        description: "A full-stack event management and guest verification platform featuring secure guest registration, QR-based identity verification, real-time attendance tracking, and live analytics.",
        problem: "Managing large-scale events manually leads to long queues, verification errors, and lack of real-time data on guest attendance.",
        solution: "Built a QR-code based system allowing instant check-ins. Integrated WebSockets for a live dashboard that updates instantly as guests arrive.",
        architecture: [
            "Real-time WebSocket Communication",
            "QR Code Generation & Scanning Logic",
            "MongoDB Aggregations for Live Stats",
            "Responsive Admin Dashboard"
        ],
        features: [
            "Instant QR Check-in",
            "Real-time Attendance Dashboard",
            "Guest Analytics & Reporting",
            "Secure Admin Protocols"
        ],
        stack: ["React", "Node.js", "Express.js", "MongoDB", "WebSockets", "jsQR"],
        repoLink: "https://github.com/PavanTalluri45/Invitation_application",
        image: "/project_images/casestudy2.webp"
    },
    {
        title: "E-commerce Microservices Platform",
        tagline: "Scalable MERN Stack Architecture",
        description: "A full-stack MERN e-commerce platform featuring responsive product browsing, cart management, and secure checkout, built on a microservice-based backend architecture.",
        problem: "Monolithic e-commerce apps become hard to scale and maintain as features grow.",
        solution: "Decoupled services into Orders, Cart, and Payments. This ensures that a failure in one service (e.g., Cart) doesn't bring down the entire product catalog.",
        architecture: [
            "Decoupled Microservices",
            "RESTful API Gateway Pattern",
            "Stripe Payment Integration",
            "State Management with Redux Toolkit"
        ],
        features: [
            "Product Catalog & Search",
            "Cart & Wishlist Management",
            "Secure Stripe Checkout",
            "Order History & Tracking"
        ],
        stack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Stripe"],
        repoLink: "https://github.com/PavanTalluri45/E-commerceapplication-MERNStack",
        image: "/project_images/casestudy3.webp"
    },
    {
        title: "Next.js Portfolio",
        tagline: "High-Performance Digital Presence",
        description: "A high-performance, fully responsive developer portfolio built with modern UI and animation frameworks, designed to showcase full-stack and data engineering projects.",
        problem: "Static portfolios often lack engagement and fail to demonstrate modern frontend capabilities.",
        solution: "Leveraged Next.js for SSR/SSG, Framer Motion for complex animations, and Magic UI for a premium aesthetic.",
        architecture: [
            "Next.js App Router",
            "Framer Motion for Animations",
            "Tailwind CSS for Styling",
            "Component-Based Architecture"
        ],
        features: [
            "Interactive Hero Section",
            "Project Showcase with Animations",
            "Responsive Design",
            "Performance Optimized"
        ],
        stack: ["Next.js", "Tailwind CSS", "Docker", "Magic UI", "Framer Motion"],
        repoLink: "https://github.com/PavanTalluri45/Next.js_Portfolio",
        image: "/project_images/casestudy4.webp"
    },
    {
        title: "Credit Card Financial Dashboard",
        tagline: "Power BI Financial Analytics",
        description: "A comprehensive financial analytics solution analyzing credit card transactions and customer behavior through interactive Power BI dashboards.",
        problem: "Raw financial transaction data is difficult to interpret and identify trends in without visualization.",
        solution: "Created interactive dashboards with drill-down capabilities to analyze spending patterns by demographics and card type.",
        architecture: [
            "Power BI Dashboarding",
            "SQL Data Modeling",
            "DAX Measures",
            "Data Transformation Pipelines"
        ],
        features: [
            "Transaction Trend Analysis",
            "Customer Segmentation",
            "Revenue Breakdown",
            "Real-time Data Refresh"
        ],
        stack: ["Power BI", "SQL", "Data Modeling", "Data Visualization"],
        repoLink: "https://github.com/PavanTalluri45/CreditCard-Financial-Analysis-PowerBI",
        image: "/project_images/casestudy5.webp"
    },
    {
        title: "Social Media Analytics",
        tagline: "Marketing Intelligence Dashboard",
        description: "An interactive Twitter analytics dashboard converting large-scale social media data into actionable insights using Power Query and DAX.",
        problem: "Marketing teams struggle to gauge campaign effectiveness across millions of social interactions.",
        solution: "Automated data cleaning with Power Query and built KPIs to track engagement and sentiment.",
        architecture: [
            "Power BI",
            "Power Query ETL",
            "DAX for Logic",
            "Social Media Data APIs"
        ],
        features: [
            "Campaign Performance Tracking",
            "Sentiment Analysis Indicators",
            "User Engagement Metrics",
            "Viral Trend Identification"
        ],
        stack: ["Power BI", "Power Query", "DAX", "Data Visualization"],
        repoLink: "https://github.com/PavanTalluri45/RealTimeTwitterAnalyticsDashboard-PowerBI",
        image: "/project_images/casestudy6.webp"
    },
    {
        title: "Telco Customer Churn Analysis",
        tagline: "Predictive Customer Analytics",
        description: "Exploratory data analysis and customer segmentation on telecom usage data, identifying a 26.54% churn rate and key drivers.",
        problem: "Telecom companies lose revenue due to undetected customer churn factors.",
        solution: "Performed deep EDA to identify that contract type and senior citizen status are top predictors of churn.",
        architecture: [
            "Python Data Science Stack",
            "Pandas for Data Manipulation",
            "Seaborn/Matplotlib for Viz",
            "Jupyter Notebook Environment"
        ],
        features: [
            "Churn Rate Calculation",
            "Demographic Segmentation",
            "Correlation Analysis",
            "Actionable Business Insights"
        ],
        stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        repoLink: "https://github.com/PavanTalluri45/TelcoCustomerChurnAnalysis",
        image: "/project_images/casestudy7.webp"
    },
    {
        title: "Supplement Sales Forecasting",
        tagline: "ML-Based Sales Prediction",
        description: "Machine learning project analyzing sales data (2020–2025) and forecasting future revenue with up to 99.93% predictive accuracy.",
        problem: "Inventory mismanagement leads to stockouts or overstocking, hurting profitability.",
        solution: "Trained ensemble regression models to predict future sales demand with high precision.",
        architecture: [
            "Scikit-Learn Machine Learning",
            "Regression Models",
            "Time Series Analysis",
            "Model Evaluation Pipelines"
        ],
        features: [
            "Revenue Trend Analysis",
            "Future Sales Prediction",
            "Model Accuracy Validation",
            "Platform Performance Review"
        ],
        stack: ["Python", "Pandas", "Scikit-Learn", "Machine Learning"],
        repoLink: "https://github.com/PavanTalluri45/SupplementSalesAnalysis",
        image: "/project_images/casestudy8.webp"
    }
];

// Helper Component for Tabs with Slide Effect
function ProjectTabs({ project, index }) {
    const [activeTab, setActiveTab] = useState("features");

    const TABS = [
        { id: "features", label: "Features", icon: Layers },
        { id: "architecture", label: "Architecture", icon: Cpu },
        { id: "stack", label: "Tech Stack", icon: Code2 },
    ];

    return (
        <div className="w-full">
            {/* Custom Tab Navigation */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-2 overflow-x-auto scrollbar-hide">
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab.id ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/10"
                            }`}
                    >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId={`activeTab-${index}`}
                                className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[160px] relative">
                <AnimatePresence mode="wait">
                    {activeTab === "features" && (
                        <motion.ul
                            key="features"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-3"
                        >
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                    {activeTab === "architecture" && (
                        <motion.ul
                            key="architecture"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-3"
                        >
                            {project.architecture.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                    {activeTab === "stack" && (
                        <motion.div
                            key="stack"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-wrap gap-2"
                        >
                            {project.stack.map((tech, i) => (
                                <Badge key={i} variant="secondary" className="bg-secondary/50 hover:bg-secondary transition-colors">
                                    {tech}
                                </Badge>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function EngineeringWork() {
    return (
        <section id="engineering" className="container mx-auto py-24 px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Engineering <AuroraText>Work</AuroraText>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A deep dive into complex systems, scalable architectures, and production-ready codebases.
                </p>
            </motion.div>

            <div className="space-y-32">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="group relative">
                        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Left: Project Image with 4:3 aspect ratio (taller) */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="w-full lg:w-3/5 relative aspect-4/3 rounded-xl bg-muted/50 border border-white/10 overflow-hidden shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent z-10" />

                                {/* Project Image */}
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority={index < 2}
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-mono text-xl">
                                        [Image Not Available]
                                    </div>
                                )}

                                <BorderBeam size={250} duration={12} delay={9} />
                            </motion.div>

                            {/* Right: Narrative Content */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="w-full lg:w-2/5 space-y-8"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Badge variant="outline" className="text-primary border-primary/30 px-3 py-1 text-xs uppercase tracking-wider">
                                            Case Study 0{index + 1}
                                        </Badge>
                                        <span className="text-muted-foreground text-sm font-medium">{project.tagline}</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-foreground mb-4">{project.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <ProjectTabs project={project} index={index} />

                                <div className="pt-4 flex items-center gap-4">
                                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                                        <RainbowButton className="h-10 px-6">
                                            View Source Code <Github className="ml-2 w-4 h-4" />
                                        </RainbowButton>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}