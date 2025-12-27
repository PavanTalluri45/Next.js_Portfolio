"use client";
import EducationCard from "@/components/cards/Education/EducationCard";
import { motion } from "motion/react";
import { AuroraText } from "@/components/ui/aurora-text";

const education = [
    {
        degree: "Bachelor of Technology in Computer Science and Engineering (Data Science)",
        institution: "Chalapathi Institute of Technology, Guntur",
        date: "2020 – 2025",
        description: "Completed a specialized undergraduate program in Data Science and Computer Science, covering data analytics, machine learning, databases, and full-stack development, graduating with a CGPA of 6.70/10."
    },
    {
        degree: "Intermediate (12th Grade)",
        institution: "Sri Chaitanya Junior College, Tenali",
        date: "2018 – 2020",
        description: "Focused on Mathematics, Physics, and Chemistry with a strong academic foundation in analytical and problem-solving skills, achieving a CGPA of 8.11/10."
    },
    {
        degree: "Secondary School (10th Grade)",
        institution: "Dr. KKR Gowtham School, Tenali",
        date: "2018",
        description: "Completed secondary education with a CGPA of 9.3/10, demonstrating strong academic performance and discipline."
    }
];


export default function Education() {
    return (
        <section id="education" className="container mx-auto py-20 px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center">
                Academic <AuroraText>Background</AuroraText>
            </h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/30 to-primary/10" />

                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 w-3 h-3 rounded-full bg-background border border-primary z-20" />

                            {/* Content Wrapper */}
                            <div className="ml-12 md:ml-0 md:w-1/2 flex justify-center">
                                <div className="w-full max-w-md">
                                    <EducationCard {...edu} />
                                </div>
                            </div>

                            {/* Empty space */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
