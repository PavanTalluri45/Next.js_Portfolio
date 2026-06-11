"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Lens } from "@/components/ui/lens";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraText } from "@/components/ui/aurora-text";
import { ChevronRight, ChevronLeft } from "lucide-react";


const TECHNOLOGY_ICONS = [

    "python",
    "javascript",
    "typescript",
    "react",
    "nextdotjs",
    "tailwindcss",
    "nodedotjs",
    "express",

    "mongodb",

    "git",
    "github",
];

const SKILLS = [

    { name: "Python", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "TypeScript", category: "Language" },
    { name: "SQL", category: "Language" },

    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "UI Component Libraries", category: "Frontend" },
    { name: "Responsive UI", category: "Frontend" },

    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "WebSockets", category: "Backend" },
    { name: "LLM APIs", category: "Backend" },



    { name: "Supabase Database (PostgreSQL)", category: "Database" },
    { name: "MongoDB Atlas", category: "Database" },




    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
];


export default function About() {
    const [currentStep, setCurrentStep] = useState(1);


    const iconImages = TECHNOLOGY_ICONS.map(
        (slug) => `https://cdn.simpleicons.org/${slug}`
    );

    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = "https://via.placeholder.com/400x500/3B82F6/FFFFFF?text=Profile+Image";
    };


    const renderAboutContent = () => (
        <motion.div
            key="step1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="flex flex-col space-y-6 text-center lg:text-left h-full"
        >
            <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-2xl md:text-4xl font-bold tracking-tight"
            >
                <AuroraText colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]} speed={1}>
                    Engineering Intelligent Software
                </AuroraText>{" "}
                for Real-World Impact
            </motion.h3>

            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed flex-1">
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    I am an enthusiastic Full-Stack Developer passionate about building complete web
                    applications from the ground up. I enjoy turning ideas into real, working products
                    that are clean, functional, and built to perform well in production environments.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                >
                    Through internships and personal projects, I have gained hands-on experience working
                    across the full development lifecycle — crafting responsive user interfaces, building
                    secure backend APIs, managing databases, and integrating third-party services to
                    deliver seamless end-to-end experiences.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                >
                    I take pride in writing clean, maintainable code and continuously improving my skills
                    with every project I build. My goal is to grow as a developer by contributing to
                    meaningful products, collaborating with great teams, and solving real problems through
                    thoughtful engineering.
                </motion.p>
            </div>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="flex justify-end pt-4"
            >
                <Button
                    onClick={() => setCurrentStep(2)}
                    variant="default"
                    className="group"
                >
                    View Skills
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </motion.div>
        </motion.div>
    );


    const renderSkillsContent = () => (
        <motion.div
            key="step2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col h-full space-y-8"
        >
            <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-2xl md:text-4xl font-bold tracking-tight text-center lg:text-left"
            >
                Technical <AuroraText colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]} speed={1}>
                    Skills
                </AuroraText>
            </motion.h3>


            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {SKILLS.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            delay: 0.7 + index * 0.04,
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                    >
                        <Badge
                            variant="secondary"
                            className="px-3 py-1 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                            {skill.name}
                        </Badge>
                    </motion.div>
                ))}
            </div>


            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    delay: 0.9,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                }}
                className="flex-1 flex items-center justify-center min-h-[450px] w-full relative"
            >
                <div className="w-full h-full max-w-[550px]">
                    <IconCloud images={iconImages} />
                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="flex justify-start pt-4"
            >
                <Button
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                    className="group"
                >
                    <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to About
                </Button>
            </motion.div>
        </motion.div>
    );


    const renderProfileImage = () => (
        <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3
            }}
            className="relative group flex justify-center items-center h-full"
        >

            <div className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[500px] md:w-[400px] md:h-[550px] lg:w-[450px] lg:h-[600px]">

                <div className="hidden md:block w-full h-full">
                    <Lens zoomFactor={1.5} lensSize={200} className="w-full h-full">

                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-linear-to-br from-gray-900 to-black">
                            <Image
                                src="/My_image/image.jpeg"
                                alt="Pavan Kumar Talluri - Full Stack Developer"
                                fill
                                priority
                                sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={handleImageError}
                                quality={90}
                            />

                            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20" />
                        </div>
                    </Lens>
                </div>


                <div className="block md:hidden w-full h-full">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-linear-to-br from-gray-900 to-black">
                        <Image
                            src="/My_image/image.jpeg"
                            alt="Pavan Kumar Talluri - Full Stack Developer"
                            fill
                            priority
                            sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
                            className="object-cover"
                            onError={handleImageError}
                            quality={90}
                        />


                        <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20" />
                    </div>
                </div>
            </div>
        </motion.div>
    );


    return (
        <section
            id="about"
            className="container mx-auto py-20 px-4 md:px-6 min-h-screen flex flex-col justify-center"
        >

            <motion.div
                initial={{ opacity: 0, y: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.1
                }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                    <AuroraText colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]} speed={1}>
                        About Me
                    </AuroraText>
                </h2>
            </motion.div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1">

                {renderProfileImage()}


                <div className="relative h-full flex flex-col justify-center min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {currentStep === 1 && renderAboutContent()}
                        {currentStep === 2 && renderSkillsContent()}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}