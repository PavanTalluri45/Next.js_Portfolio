"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { AuroraText } from "@/components/ui/aurora-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Badge } from "@/components/ui/badge";
import { Github, Layers, Code2, Cpu, Check } from "lucide-react";

// ==================== PROJECTS DATA ====================

const PROJECTS = [
  {
    title: "Insight Flow – AI-powered Business Intelligence platform",
    tagline: "AI-Powered Natural Language Business Intelligence Platform",

    description:
      "A full-stack AI-powered Business Intelligence platform that allows users to analyze PostgreSQL data using natural language instead of writing SQL queries. The system automatically converts English questions into optimized SQL, validates queries for security, executes them against PostgreSQL, explains results in business-friendly language, and recommends the most appropriate visualization.",

    problem:
      "Business users often rely on developers or data analysts to retrieve insights from relational databases because SQL knowledge is required. This slows decision-making and creates a technical barrier for exploring business data.",

    solution:
      "Built an AI-powered analytics platform that transforms natural language into secure PostgreSQL queries using Google Gemini and LangChain. The backend validates every generated query before execution, retrieves data from Supabase PostgreSQL, generates business-friendly explanations, determines the analytical goal, and recommends the best visualization, allowing users to interact with business data conversationally.",

    architecture: [
      "Next.js Frontend (App Router)",
      "Python FastAPI Backend",
      "REST API Architecture",
      "Google Gemini AI + LangChain",
      "Metadata & Database Profiling Layer",
      "AI SQL Generation Engine",
      "Secure SQL Validation Layer",
      "Supabase PostgreSQL Database",
      "AI Business Explanation Engine",
      "Visualization Planning Engine",
      "Standardized JSON API Responses",
      "Component-Based Frontend Architecture",
    ],

    features: [
      "Natural Language to SQL Conversion",
      "AI-Powered Business Insights",
      "Secure Read-Only SQL Validation",
      "Automatic SQL Execution",
      "Business-Friendly Result Explanation",
      "Intelligent Chart Recommendation",
      "Interactive Chat-Based Analytics",
      "Supabase Authentication",
      "Conversation History",
      "Responsive Dashboard",
      "Production Deployment on Vercel",
      "Scalable Modular AI Pipeline",
    ],

    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Python",
      "FastAPI",
      "LangChain",
      "Google Gemini AI",
      "Prompt Engineering",
      "Supabase PostgreSQL",
      "Supabase Authentication",
      "Tailwind CSS",
      "Recharts",
    ],

    repoLink:
      "https://github.com/PavanTalluri45/InsightFlow_AIPoweredSQLDataAssistant",
  },
  {
    title: "Employee Handbook RAG Chatbot",
    tagline: "AI-Powered Knowledge Assistant",
    description:
      "A full-stack AI-powered RAG chatbot that enables employees to ask natural language questions about company policies and receive accurate, context-aware answers using Retrieval-Augmented Generation (RAG), Google Gemini AI, and semantic search.",

    problem:
      "Employees often spend significant time searching lengthy company handbooks for policies and procedures. Traditional keyword search struggles to understand natural language queries and frequently returns irrelevant information.",

    solution:
      "Built a Retrieval-Augmented Generation (RAG) chatbot that processes company handbook documents, generates vector embeddings, performs semantic search using Chroma Cloud, and uses Google Gemini AI to generate accurate, context-aware responses. Implemented secure authentication, conversation history, caching, and scalable backend APIs for a production-ready experience.",

    architecture: [
      "Next.js Frontend",
      "FastAPI Backend",
      "LangChain RAG Pipeline",
      "Google Gemini AI Integration",
      "Gemini Embeddings",
      "Chroma Cloud Vector Database",
      "Supabase Authentication & Database",
      "Upstash Redis Caching",
      "REST API Architecture",
    ],

    features: [
      "Retrieval-Augmented Generation (RAG)",
      "Semantic Vector Search",
      "Document Chunking & Embedding Pipeline",
      "Conversation History",
      "Secure User Authentication",
      "Redis Caching for Faster Responses",
      "Responsive Chat Interface",
      "Error Handling & Retry Mechanisms",
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
      "Tailwind CSS",
    ],

    repoLink: "https://github.com/PavanTalluri45/RAG_Chatbot",
  },
  {
    title: "FitGen – AI Powered Workout Plan Generator",
    tagline: "Personalized AI Fitness Planning Platform",
    description:
      "A full-stack AI-powered fitness platform that generates personalized workout plans based on user goals, fitness level, health conditions, and workout preferences using Google Gemini AI. The application provides secure user authentication, intelligent fitness assessments, and dynamic workout recommendations.",
    problem:
      "Creating personalized workout plans requires fitness expertise and significant time. Generic fitness programs often fail to address individual goals, physical limitations, and experience levels, resulting in poor engagement and ineffective outcomes.",
    solution:
      "Developed an AI-driven fitness planning platform that collects user fitness data through a structured assessment process and leverages Google Gemini AI to generate customized workout plans. Implemented secure authentication, data protection, and validation mechanisms to ensure a reliable and scalable user experience.",
    architecture: [
      "Next.js Full-Stack Architecture",
      "Supabase PostgreSQL Database",
      "Supabase Authentication & Authorization",
      "Google Gemini AI Integration for Workout Generation",
      "Row-Level Security (RLS) for User Data Protection",
      "Backend Rate Limiting & Business Rule Validation",
    ],
    features: [
      "AI-Powered Personalized Workout Plan Generation",
      "Multi-Step Fitness Assessment Questionnaire",
      "Secure User Registration & Login",
      "Email Verification & Session Management",
      "Protected Routes & Authorization",
      "Workout Plan History & User Data Management",
      "Rate Limiting to Prevent Abuse and Reduce AI Costs",
      "Responsive Mobile-First User Interface",
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
      "Zod",
    ],
    repoLink: "https://github.com/PavanTalluri45/fitgen_next.js",
  },
  {
    title: "Guest Identity Verification System",
    tagline: "Real-time Event Management",
    description:
      "A full-stack event management and guest verification platform featuring secure guest registration, QR-based identity verification, real-time attendance tracking, and live analytics.",
    problem:
      "Managing large-scale events manually leads to long queues, verification errors, and lack of real-time data on guest attendance.",
    solution:
      "Built a QR-code based system allowing instant check-ins. Integrated WebSockets for a live dashboard that updates instantly as guests arrive.",
    architecture: [
      "Real-time WebSocket Communication",
      "QR Code Generation & Scanning Logic",
      "MongoDB Aggregations for Live Stats",
      "Responsive Admin Dashboard",
    ],
    features: [
      "Instant QR Check-in",
      "Real-time Attendance Dashboard",
      "Guest Analytics & Reporting",
      "Secure Admin Protocols",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "WebSockets", "jsQR"],
    repoLink: "https://github.com/PavanTalluri45/Invitation_application",
  },
  {
    title: "E-commerce Platform",
    tagline: "Scalable MERN Stack Architecture",
    description:
      "A full-stack MERN e-commerce platform featuring responsive product browsing, cart management, and secure checkout, built on a microservice-based backend architecture.",
    problem:
      "Monolithic e-commerce apps become hard to scale and maintain as features grow.",
    solution:
      "Decoupled services into Orders, Cart, and Payments. This ensures that a failure in one service (e.g., Cart) doesn't bring down the entire product catalog.",
    architecture: [
      "Decoupled Microservices",
      "RESTful API Gateway Pattern",
      "Stripe Payment Integration",
      "State Management with Redux Toolkit",
    ],
    features: [
      "Product Catalog & Search",
      "Cart & Wishlist Management",
      "Secure Stripe Checkout",
      "Order History & Tracking",
    ],
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    repoLink:
      "https://github.com/PavanTalluri45/E-commerceapplication-MERNStack",
  },
  {
    title: "Next.js Portfolio",
    tagline: "High-Performance Digital Presence",
    description:
      "A high-performance, fully responsive developer portfolio built with modern UI and animation frameworks, designed to showcase full-stack and data engineering projects.",
    problem:
      "Static portfolios often lack engagement and fail to demonstrate modern frontend capabilities.",
    solution:
      "Leveraged Next.js for SSR/SSG, Framer Motion for complex animations, and Magic UI for a premium aesthetic.",
    architecture: [
      "Next.js App Router",
      "Framer Motion for Animations",
      "Tailwind CSS for Styling",
      "Component-Based Architecture",
    ],
    features: [
      "Interactive Hero Section",
      "Project Showcase with Animations",
      "Responsive Design",
      "Performance Optimized",
    ],
    stack: ["Next.js", "Tailwind CSS", "Docker", "Magic UI", "Framer Motion"],
    repoLink: "https://github.com/PavanTalluri45/Next.js_Portfolio",
  },
];

function ProjectTabs({ project }) {
  const [activeTab, setActiveTab] = useState("features");

  const TABS = [
    { id: "features", label: "Features", icon: Layers },
    { id: "architecture", label: "Architecture", icon: Cpu },
    { id: "stack", label: "Stack", icon: Code2 },
  ];

  return (
    <div className="relative z-10 w-full">
      {/* Tab Navigation */}
      <div className="flex items-center gap-6">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center gap-2 pb-3 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground/70"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId={`tab-underline-${project.title}`}
                className="absolute left-0 right-0 -bottom-px h-[2px] bg-primary"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[150px] border-t border-white/10 pt-6 mt-0 relative">
        <AnimatePresence mode="wait">
          {activeTab === "features" && (
            <motion.ul
              key="features"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid sm:grid-cols-2 gap-x-8 gap-y-3"
            >
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-foreground/80"
                >
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </motion.ul>
          )}
          {activeTab === "architecture" && (
            <motion.ul
              key="architecture"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid sm:grid-cols-2 gap-x-8 gap-y-3"
            >
              {project.architecture.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-foreground/80"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>
          )}
          {activeTab === "stack" && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {project.stack.map((tech, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className=" text-xs font-normal bg-secondary/40 hover:bg-secondary/60 transition-colors"
                >
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
          A look at the projects I've built while learning to write clean code,
          explore different architectures, and understand how real applications
          come together.
        </p>
      </motion.div>

      <div className="space-y-8 max-w-5xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.2) }}
            className="group relative rounded-2xl border border-white/10 bg-muted/20 hover:border-primary/25 transition-colors overflow-hidden p-6 md:p-10"
          >
            {/* Signature element: large faint case-file numeral, blueprint-style */}
            <span
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-4 right-2 md:top-0 md:right-6 text-[110px] md:text-[150px]  font-black leading-none text-white/[0.035] z-0"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Header */}
            <div className="relative z-10 mb-5">
              <div className="flex items-center gap-2 mb-2  text-xs uppercase tracking-widest">
                <span className="text-primary/80">Case Study 0{index + 1}</span>
                <span className="text-muted-foreground/30">/</span>
                <span className="text-muted-foreground normal-case tracking-normal">
                  {project.tagline}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="relative z-10 text-muted-foreground leading-relaxed max-w-3xl mb-8">
              {project.description}
            </p>

            {/* Problem / Approach */}
            <div className="relative z-10 grid sm:grid-cols-2 gap-6 mb-8 pb-8 border-b border-white/10">
              <div>
                <span className=" text-xs uppercase tracking-widest text-muted-foreground/60">
                  The Problem
                </span>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <span className=" text-xs uppercase tracking-widest text-primary/70">
                  The Approach
                </span>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Features / Architecture / Stack */}
            <ProjectTabs project={project} />

            {/* CTA */}
            <div className="relative z-10 pt-8 flex items-center gap-4">
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RainbowButton className="h-10 px-6">
                  View Source Code <Github className="ml-2 w-4 h-4" />
                </RainbowButton>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
