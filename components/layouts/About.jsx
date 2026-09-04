"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Lens } from "@/components/ui/lens";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraText } from "@/components/ui/aurora-text";
import { ChevronRight, ChevronLeft } from "lucide-react";

const SKILLS = [
  // Languages
  { name: "Python", category: "Language" },
  { name: "JavaScript (ES6+)", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "SQL", category: "Language" },
  { name: "HTML/CSS", category: "Language" },

  // Frontend
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Python (FastAPI)", category: "Backend" },
  { name: "REST API", category: "Backend" },
  { name: "WebSockets", category: "Backend" },

  // GenAI & LLM Integration
  {
    name: "Retrieval-Augmented Generation (RAG) Pipeline",
    category: "GenAI & LLM Integration",
  },
  { name: "Prompt Engineering", category: "GenAI & LLM Integration" },
  { name: "LangChain", category: "GenAI & LLM Integration" },
  { name: " LLMs (Gemini API)", category: "GenAI & LLM Integration" },
  { name: "Vector Databases (ChromaDB)", category: "GenAI & LLM Integration" },
  { name: "Model Context Protocol (MCP)", category: "GenAI & LLM Integration" },
  { name: "AI Agents", category: "GenAI & LLM Integration" },

  // Database
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Firebase", category: "Database" },

  // Tools & Cloud
  {
    name: "AWS (EC2, S3)",
    category: "Tools & Cloud",
  },
  {
    name: "CI/CD",
    category: "Tools & Cloud",
  },
  {
    name: "Docker (Containerization & Images)",
    category: "Tools & Cloud",
  },

  { name: "Git", category: "Tools & Cloud" },
  { name: "GitHub", category: "Tools & Cloud" },
  { name: "Postman", category: "Tools & Cloud" },
  { name: "Vercel", category: "Tools & Cloud" },
  { name: "Calude Code", category: "Tools & Cloud" },
  { name: "Jest", category: "Tools & Cloud" },
];

export default function About() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://via.placeholder.com/400x500/3B82F6/FFFFFF?text=Profile+Image";
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
        <AuroraText
          colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}
          speed={1}
        >
          Learning, Building,
        </AuroraText>{" "}
        and Growing Every Day
      </motion.h3>

      <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed flex-1">
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          I&apos;m <strong>Pavan Kumar Talluri</strong>, a 2025 B.Tech graduate
          in Data Science and an aspiring <strong>Full Stack GenAI Engineer</strong>.
          I&apos;m looking for a fresher or entry-level opportunity where I can
          apply my skills, contribute to real-world projects, and continue
          growing as a Full Stack GenAI Engineer.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          I enjoy developing AI-powered web  applications from idea to
          deployment, working across both frontend and backend using{" "}
          <strong>Python</strong>,<strong> JavaScript</strong>,{" "}
          <strong>React.js</strong>,<strong> Next.js</strong>,{" "}
          <strong>Node.js</strong>,<strong> Express.js</strong>,{" "}
          <strong>FastAPI</strong>, and
          <strong> Supabase</strong>. I have hands-on experience with AI
          technologies including <strong>LangChain</strong>,{" "}
          <strong>LLMs (Google Gemini API)</strong>,
          <strong> Retrieval-Augmented Generation (RAG)</strong>, vector
          databases, REST API integration and MCP.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          Through projects such as an AI SQL Assisant with Langchain, an
          Employee Handbook RAG Chatbot, I have gained practical experience in
          designing databases, developing backend APIs, integrating AI models,
          and deploying full-stack applications on Vercel. During my Frontend
          Developer internship at <strong>I AIM Labs</strong>, I developed
          responsive user interfaces using React.js and Tailwind CSS, integrated
          REST APIs, and strengthened my problem-solving skills. I&apos;m
          passionate about learning new technologies, solving real-world
          problems, and continuously improving as a software developer.
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
        Technical{" "}
        <AuroraText
          colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}
          speed={1}
        >
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
              ease: [0.16, 1, 0.3, 1],
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
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex-1 flex items-center justify-center min-h-[450px] w-full relative"
      ></motion.div>

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
        delay: 0.3,
      }}
      className="relative group flex justify-center items-center h-full"
    >
      <div className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[500px] md:w-[400px] md:h-[550px] lg:w-[450px] lg:h-[600px]">
        <div className="hidden md:block w-full h-full">
          <Lens zoomFactor={1.5} lensSize={200} className="w-full h-full">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-linear-to-br from-gray-900 to-black">
              <Image
                src="/My_image/image.jpg"
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
              src="/My_image/image.jpg"
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
          delay: 0.1,
        }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          <AuroraText
            colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}
            speed={1}
          >
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
