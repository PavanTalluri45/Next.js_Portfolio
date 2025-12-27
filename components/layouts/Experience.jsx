"use client";
import ExperienceCard from "@/components/cards/Experience/ExperienceCard";
import { motion } from "motion/react";
import { AuroraText } from "@/components/ui/aurora-text";

const experiences = [
    {
        role: "Data Analyst Intern",
        company: "NullClass Edtech Private Limited",
        date: "Nov 2024 – Apr 2025",
        description: [
            "Built an interactive Power BI business intelligence dashboard providing real-time tracking of key performance metrics and emerging trends for strategic decision-making.",
            "Performed large-scale data cleaning and transformation using Power Query, improving data quality by 40% and establishing reliable automated processing pipelines.",
            "Developed advanced DAX measures and calculated columns to extract actionable insights from social media engagement data, enabling more targeted and data-driven content strategies."
        ]
    },
    {
        role: "Front End Developer Intern",
        company: "I AIM Labs",
        date: "Nov 2024 – Feb 2025",
        description: [
            "Developed responsive, cross-device user interfaces using React.js and Tailwind CSS to deliver consistent and intuitive user experiences.",
            "Improved application performance and accessibility by optimizing page load times, reducing redundant code, and applying modern web accessibility best practices.",
            "Integrated RESTful APIs in collaboration with backend teams and followed Agile development workflows using Git, including code reviews, sprint planning, and iterative releases."
        ]
    }
];


export default function Experience() {
    return (
        <section id="experience" className="container mx-auto py-20 px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center">
                Professional <AuroraText>Journey</AuroraText>
            </h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/50 via-primary to-primary/50" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(124,58,237,0.5)] z-20">
                                <div className="absolute inset-0 bg-primary/20 animate-ping rounded-full" />
                            </div>

                            {/* Content Wrapper */}
                            <div className="ml-12 md:ml-0 md:w-1/2 flex justify-center">
                                <div className="w-full max-w-md">
                                    <ExperienceCard {...exp} />
                                </div>
                            </div>

                            {/* Empty space for the other side of the timeline */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
