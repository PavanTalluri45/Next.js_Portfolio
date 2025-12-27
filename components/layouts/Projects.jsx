"use client";
import ProjectCard from "@/components/cards/Project/ProjectCard";
import { motion } from "motion/react";
import { AuroraText } from "@/components/ui/aurora-text";

const projects = [
    {
        title: "Complete Authentication System",
        description: "A production-ready authentication platform implementing secure user registration, login, OTP-based email verification, password recovery, JWT and refresh token workflows, and Redis-powered rate limiting, built using a microservice-oriented backend architecture with Next.js and Node.js for scalability and security.",
        technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MySQL", "Redis", "JWT", "Microservices"],
        repoLink: "https://github.com/PavanTalluri45/complete-authentication-system",
    },
    {
        title: "Guest Identity Verification System for a Retirement Party",
        description: "A full-stack event management and guest verification platform built for a large-scale retirement party, featuring secure guest registration, QR-based identity verification, real-time attendance tracking, and live analytics powered by WebSockets for monitoring check-ins, meal preferences, and event statistics.",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "WebSockets", "jsQR"],
        repoLink: "https://github.com/PavanTalluri45/Invitation_application",
    },
    {
        title: "E-commerce Microservices Platform",
        description: "A full-stack MERN e-commerce platform featuring responsive product browsing, cart management, and secure checkout, built on a microservice-based backend architecture with separate Order, Cart, and Payment services exposed via RESTful APIs and integrated with Stripe for real-world payment processing.",
        technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Stripe", "Microservices", "REST APIs"],
        repoLink: "https://github.com/PavanTalluri45/E-commerceapplication-MERNStack",
    },
    {
        title: "Personal Portfolio",
        description: "A high-performance, fully responsive developer portfolio built with modern UI and animation frameworks, designed to showcase full-stack and data engineering projects with smooth transitions, interactive components, and optimized layout for both desktop and mobile users.",
        technologies: ["Next.js", "Tailwind CSS", "Docker", "Magic UI", "Framer Motion", "Shadcn UI"],
        repoLink: "https://github.com/PavanTalluri45",
    },
    {
        title: "Credit Card Financial Analysis Dashboard",
        description: "A comprehensive financial analytics solution analyzing credit card transactions and customer behavior through interactive Power BI dashboards, combining SQL-based data modeling, real-time data refresh, and custom measures to deliver actionable insights from both transaction and customer perspectives.",
        technologies: ["Power BI", "SQL", "Data Modeling", "Data Visualization", "Financial Analytics"],
        repoLink: "https://github.com/PavanTalluri45/CreditCard-Financial-Analysis-PowerBI",
    },
    {
        title: "Social Media Analytics Dashboard",
        description: "An interactive Twitter analytics and marketing intelligence dashboard built in Power BI, converting large-scale social media data into actionable insights using Power Query for data cleansing and DAX measures for real-time campaign performance tracking and KPI monitoring.",
        technologies: ["Power BI", "Power Query", "DAX", "Data Visualization", "Marketing Analytics"],
        repoLink: "https://github.com/PavanTalluri45/RealTimeTwitterAnalyticsDashboard-PowerBI",
    },
    {
        title: "Telco Customer Churn Analysis",
        description: "A comprehensive data analytics project performing exploratory data analysis and customer segmentation on telecom usage data, identifying a 26.54% churn rate and uncovering key drivers such as contract type and senior citizen status using Python-based data cleaning, statistical analysis, and visualization techniques.",
        technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook", "EDA"],
        repoLink: "https://github.com/PavanTalluri45/TelcoCustomerChurnAnalysis",
    },
    {
        title: "Supplement Sales Analysis & Forecasting",
        description: "A data science and machine learning project analyzing multi-year supplement sales data (2020–2025), generating revenue and platform performance insights, and forecasting future sales using advanced regression and ensemble models achieving up to 99.93% predictive accuracy.",
        technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "Machine Learning", "Jupyter Notebook"],
        repoLink: "https://github.com/PavanTalluri45/SupplementSalesAnalysis",
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
};

export default function Projects() {
    return (
        <section id="projects" className="container mx-auto py-20 px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                    Featured <AuroraText>Projects</AuroraText>
                </h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <ProjectCard
                            {...project}
                            delay={index * 2}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
