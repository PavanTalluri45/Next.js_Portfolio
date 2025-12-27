"use client";

// React imports
import { useState } from "react";

// Next.js imports
import Image from "next/image";

// Third-party libraries
import { motion, AnimatePresence } from "motion/react";

// Local components
import { Lens } from "@/components/ui/lens";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraText } from "@/components/ui/aurora-text";

// Icons
import { ChevronRight, ChevronLeft } from "lucide-react";

// ==================== CONSTANTS ====================

/**
 * Technology icons for 3D cloud visualization
 */
const TECHNOLOGY_ICONS = [
    // Programming & Query Languages
    "python",
    "javascript",
    "typescript",
    "mysql",

    // Frontend Engineering
    "react",
    "nextdotjs",
    "tailwindcss",
    "html5",
    "css",

    // Backend & APIs
    "nodedotjs",
    "express",
    "graphql",

    // Databases & Data Infrastructure
    "mysql",
    "postgresql",
    "mongodb",
    "redis",

    // Data Science & Machine Learning
    "pandas",
    "numpy",
    "scikitlearn",
    "microsoftpowerbi",

    // Cloud, DevOps & Deployment
    "amazonwebservices",
    "docker",

    // Version Control & Developer Tools
    "git",
    "github",
];

/**
 * Technical skills organized by category
 */
const SKILLS = [
    // Programming & Query Languages
    { name: "Python", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "TypeScript", category: "Language" },
    { name: "SQL", category: "Language" },

    // Frontend Engineering
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "UI Component Libraries", category: "Frontend" },
    { name: "Responsive UI", category: "Frontend" },

    // Backend & API Engineering
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "GraphQL", category: "Backend" },
    { name: "Microservices Architecture", category: "Backend" },
    { name: "WebSockets", category: "Backend" },

    // Databases & Data Infrastructure
    { name: "MySQL", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Redis", category: "Database" },
    { name: "Firebase", category: "Database" },

    // Data Science & Analytics
    { name: "Pandas", category: "Data Science" },
    { name: "NumPy", category: "Data Science" },
    { name: "Matplotlib", category: "Data Science" },
    { name: "Seaborn", category: "Data Science" },
    { name: "Scikit-learn", category: "Data Science" },
    { name: "Statistical Analysis", category: "Data Science" },
    { name: "Machine Learning", category: "Data Science" },
    { name: "Power BI", category: "Data Science" },

    // Cloud, DevOps & Deployment
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "Cloud" },
    { name: "CI/CD", category: "Cloud" },

    // Engineering & Product Tools
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
];

// ==================== COMPONENT ====================

/**
 * About Section - Two-step interactive section with profile and skills
 * Step 1: About me content with profile image
 * Step 2: Technical skills with interactive badge cloud
 */
export default function About() {
    const [currentStep, setCurrentStep] = useState(1);

    // Generate icon URLs for IconCloud component
    const iconImages = TECHNOLOGY_ICONS.map(
        (slug) => `https://cdn.simpleicons.org/${slug}`
    );

    /**
     * Handle profile image loading errors gracefully
     */
    const handleImageError = (e) => {
        e.target.onerror = null; // Prevent infinite loop
        e.target.src = "https://via.placeholder.com/400x500/3B82F6/FFFFFF?text=Profile+Image";
    };

    // ==================== STEP 1: ABOUT ME CONTENT ====================
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
                    I am a Full Stack Software Engineer and Data Science graduate with hands-on experience
                    building scalable web platforms and machine-learning-enabled applications. My work
                    bridges software engineering and data science, allowing me to create systems that are
                    both technically robust and insight-driven.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                >
                    Across internships and real-world projects, I have worked end-to-end — from crafting
                    responsive user interfaces and secure backend APIs to designing authentication
                    systems, microservice architectures, and real-time data workflows. I focus on writing
                    clean, maintainable code that supports performance, reliability, and long-term growth.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                >
                    With a strong foundation in machine learning, statistical modeling, and data-driven
                    experimentation, I use analytical thinking to improve product behavior, optimize
                    system performance, and guide engineering decisions. My goal is to build software that
                    is not only functional, but intelligent, measurable, and built to scale in production
                    environments.
                </motion.p>
            </div>

            {/* Next Button */}
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

    // ==================== STEP 2: SKILLS CONTENT ====================
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

            {/* Skills Badges */}
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

            {/* IconCloud Container */}
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

            {/* Back Button */}
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

    // ==================== PROFILE IMAGE SECTION ====================
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
            {/* Fixed container with explicit dimensions */}
            <div className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[500px] md:w-[400px] md:h-[550px] lg:w-[450px] lg:h-[600px]">
                {/* Desktop: With Lens effect */}
                <div className="hidden md:block w-full h-full">
                    <Lens zoomFactor={1.5} lensSize={200} className="w-full h-full">
                        {/* Image wrapper with proper dimensions */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-linear-to-br from-gray-900 to-black">
                            <Image
                                src="/My_image/my_image.png"
                                alt="Pavan Kumar Talluri - Full Stack Developer"
                                fill
                                priority
                                sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                onError={handleImageError}
                                quality={90}
                            />

                            {/* Fallback background in case image fails */}
                            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20" />
                        </div>
                    </Lens>
                </div>

                {/* Mobile: Without Lens effect */}
                <div className="block md:hidden w-full h-full">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-linear-to-br from-gray-900 to-black">
                        <Image
                            src="/My_image/my_image.png"
                            alt="Pavan Kumar Talluri - Full Stack Developer"
                            fill
                            priority
                            sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
                            className="object-cover"
                            onError={handleImageError}
                            quality={90}
                        />

                        {/* Fallback background in case image fails */}
                        <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20" />
                    </div>
                </div>
            </div>
        </motion.div>
    );

    // ==================== MAIN COMPONENT ====================
    return (
        <section
            id="about"
            className="container mx-auto py-20 px-4 md:px-6 min-h-screen flex flex-col justify-center"
        >
            {/* Section Heading */}
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

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1">
                {/* Left Column: Profile Image */}
                {renderProfileImage()}

                {/* Right Column: Content with Step Navigation */}
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