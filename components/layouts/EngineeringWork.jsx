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
        title: "Employee Handbook RAG Chatbot",
        tagline: "AI-Powered Enterprise Knowledge Assistant",
        description: "A full-stack AI-powered RAG chatbot that enables employees to ask natural language questions about company policies and receive accurate, context-aware answers using Retrieval-Augmented Generation (RAG), Google Gemini AI, and semantic search.",

        problem: "Employees often spend significant time searching lengthy company handbooks for policies and procedures. Traditional keyword search struggles to understand natural language queries and frequently returns irrelevant information.",

        solution: "Built a Retrieval-Augmented Generation (RAG) chatbot that processes company handbook documents, generates vector embeddings, performs semantic search using Chroma Cloud, and uses Google Gemini AI to generate accurate, context-aware responses. Implemented secure authentication, conversation history, caching, and scalable backend APIs for a production-ready experience.",

        architecture: [
            "Next.js Frontend",
            "FastAPI Backend",
            "LangChain RAG Pipeline",
            "Google Gemini AI Integration",
            "Gemini Embeddings",
            "Chroma Cloud Vector Database",
            "Supabase Authentication & Database",
            "Upstash Redis Caching",
            "REST API Architecture"
        ],

        features: [
            "Retrieval-Augmented Generation (RAG)",
            "Semantic Vector Search",
            "Document Chunking & Embedding Pipeline",
            "Conversation History",
            "Secure User Authentication",
            "Redis Caching for Faster Responses",
            "Responsive Chat Interface",
            "Error Handling & Retry Mechanisms"
        ],

        stack: [
            "Next.js",
            "React",
            "JavaScript",
            "Python",
            "FastAPI",
            "LangChain",
            "Google Gemini AI (LLM)",
            "Gemini Embeddings",
            "Chroma Cloud (Vector Database)",
            "Supabase (PostgreSQL Database & Authentication)",
            "Upstash Redis (Caching)",
            "Tailwind CSS"
        ],

        repoLink: "https://github.com/PavanTalluri45/RAG_Chatbot",
        image: "/project_images/casestudy1.png"
    },
    {
        title: "FitGen – AI Powered Workout Plan Generator",
        tagline: "Personalized AI Fitness Planning Platform",
        description: "A full-stack AI-powered fitness platform that generates personalized workout plans based on user goals, fitness level, health conditions, and workout preferences using Google Gemini AI. The application provides secure user authentication, intelligent fitness assessments, and dynamic workout recommendations.",
        problem: "Creating personalized workout plans requires fitness expertise and significant time. Generic fitness programs often fail to address individual goals, physical limitations, and experience levels, resulting in poor engagement and ineffective outcomes.",
        solution: "Developed an AI-driven fitness planning platform that collects user fitness data through a structured assessment process and leverages Google Gemini AI to generate customized workout plans. Implemented secure authentication, data protection, and validation mechanisms to ensure a reliable and scalable user experience.",
        architecture: [
            "Next.js Full-Stack Architecture",
            "Supabase PostgreSQL Database",
            "Supabase Authentication & Authorization",
            "Google Gemini AI Integration for Workout Generation",
            "Row-Level Security (RLS) for User Data Protection",
            "Backend Rate Limiting & Business Rule Validation"
        ],
        features: [
            "AI-Powered Personalized Workout Plan Generation",
            "Multi-Step Fitness Assessment Questionnaire",
            "Secure User Registration & Login",
            "Email Verification & Session Management",
            "Protected Routes & Authorization",
            "Workout Plan History & User Data Management",
            "Rate Limiting to Prevent Abuse and Reduce AI Costs",
            "Responsive Mobile-First User Interface"
        ],
        stack: [
            "Next.js",
            "React",
            "JavaScript",
            "Supabase Database (PostgreSQL)",
            "Supabase Auth",
            "Google Gemini AI (LLM API)",
            "Tailwind CSS",
            "React Hook Form",
            "Zod"
        ],
        repoLink: "https://github.com/PavanTalluri45/fitgen_next.js",
        image: "/project_images/casestudy5.png"
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
        title: "E-commerce Platform",
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