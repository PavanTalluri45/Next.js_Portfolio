"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AuroraText } from "@/components/ui/aurora-text";
import { Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";

// ==================== JOURNEY DATA ====================

const JOURNEY = [
    {
        phase: "Industry Exposure",
        description: "Applying theoretical knowledge to real-world business problems through internships.",
        icon: Briefcase,
        color: "text-blue-400",
        items: [
            {
                title: "Data Analyst Intern",
                organization: "NullClass Edtech Private Limited",
                period: "Nov 2024 - Apr 2025",
                desc: "Built an interactive Power BI business intelligence dashboard to deliver real-time visibility into key performance indicators and emerging trends, supporting data-driven strategic decision-making. Executed large-scale data cleaning and transformation using Power Query, improving overall data quality by 40 percent and establishing reliable automated data pipelines. Designed advanced DAX measures and calculated columns to generate actionable insights from social media engagement data, enabling more precise, performance-driven content and marketing strategies.",
                tags: ["Power BI", "Power Query", "DAX", "Data Visualization", "Marketing Analytics"]
            },
            {
                title: "Developer Intern",
                organization: "I AIM Labs",
                period: "Nov 2024 - Feb 2025",
                desc: "Developed responsive, cross-device user interfaces with React.js and Tailwind CSS to deliver a consistent and intuitive user experience, while improving performance and accessibility through optimized page loads, cleaner code architecture, and modern web accessibility standards. Collaborated closely with backend teams to integrate RESTful APIs and worked within Agile development workflows using Git for version control, code reviews, sprint planning, and iterative feature releases.",
                tags: [
                    "React.js",
                    "Tailwind CSS",
                    "Responsive Design",
                    "Web Performance Optimization",
                    "Web Accessibility",
                    "RESTful API Integration",
                    "Agile Development",
                    "Git Version Control",
                    "Code Reviews",
                    "Cross-Browser Compatibility"
                ]

            }
        ]
    },
    {
        phase: "Foundation",
        description: "Building the core pillars of Computer Science and Data Analytics.",
        icon: GraduationCap,
        color: "text-emerald-400",
        items: [
            {
                title: "B.Tech in CSE (Data Science)",
                organization: "Chalapathi Institute of Technology",
                period: "2020/21 - 2025",
                desc: "Completed a specialized undergraduate program in Data Science and Computer Science, covering data analytics, machine learning, databases, and full-stack development, graduating with a CGPA of 6.70/10.",
                tags: [
                    "Data Science",
                    "Machine Learning",
                    "Python",
                    "SQL",
                    "Data Analytics",
                    "Statistics",
                    "Probability",
                    "Database Management Systems",
                    "Data Structures & Algorithms",
                    "Full-Stack Development",
                    "Computer Science Fundamentals",
                    "Software Engineering"
                ]

            },
            {
                title: "Intermediate (12th Grade)",
                organization: "Sri Chaitanya Junior College",
                period: "2018 - 2020",
                desc: "Focused on Mathematics, Physics, and Chemistry with a strong academic foundation in analytical and problem-solving skills, achieving a CGPA of 8.11/10.",
                tags: ["Mathematics", "Physics", "Chemistry"]
            },
            {
                title: "Secondary School (10th Grade)",
                organization: "Dr. KKR Gowtham School",
                period: "2018",
                desc: "Completed secondary education with a CGPA of 9.3/10, demonstrating strong academic performance and discipline.",
                tags: ["Academics", "Discipline", "Foundation"]
            }
        ]
    }
];

export default function ProfessionalJourney() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section id="journey" ref={containerRef} className="container mx-auto py-24 px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-24"
            >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Professional <AuroraText>Journey</AuroraText>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    From academic foundations to deploying scalable production systems.
                </p>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
                {/* Central Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block" />

                {/* Mobile Line */}
                <div className="absolute left-8 top-4 bottom-4 w-px bg-border md:hidden" />

                <div className="space-y-24">
                    {JOURNEY.map((phase, index) => {
                        const Icon = phase.icon;
                        return (
                            <div key={index} className="relative">
                                {/* Phase Marker */}
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
                                    <div className="md:w-1/2 md:text-right pr-12 hidden md:block">
                                        <h3 className={`text-2xl font-bold ${phase.color}`}>{phase.phase}</h3>
                                    </div>

                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center z-10 shadow-lg">
                                        <Icon className={`w-5 h-5 ${phase.color}`} />
                                    </div>

                                    <div className="pl-20 md:pl-12 md:w-1/2">
                                        <h3 className={`text-2xl font-bold ${phase.color} md:hidden`}>{phase.phase}</h3>
                                        <p className="text-muted-foreground md:hidden text-sm mb-2">{phase.period}</p>
                                        <p className="text-foreground/80 font-light">{phase.description}</p>
                                    </div>
                                </div>

                                {/* Phase Items */}
                                <div className="space-y-8">
                                    {phase.items.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
                                        >
                                            {/* Card Positioning */}
                                            <div className="md:w-1/2 flex justify-end md:px-12 pl-20">
                                                <div className={`w-full p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden ${index % 2 !== 0 && "md:text-left"}`}>
                                                    <div className="flex flex-col gap-2 mb-4">
                                                        <div className="flex flex-wrap gap-2 items-center justify-between">
                                                            <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                                                {item.title}
                                                            </h4>
                                                            {item.period && (
                                                                <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-sm">
                                                                    {item.period}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <span className={`text-sm font-medium ${phase.color}`}>{item.organization}</span>
                                                    </div>

                                                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                                        {item.desc}
                                                    </p>

                                                    <div className="flex flex-wrap gap-2">
                                                        {item.tags.map((tag, t) => (
                                                            <Badge key={t} variant="secondary" className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-secondary/30 text-secondary-foreground/70">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                    <BorderBeam size={250} duration={12} delay={9} />
                                                </div>
                                            </div>

                                            {/* Connector Dot */}
                                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-8 w-1.5 h-1.5 rounded-full bg-border z-0" />

                                            <div className="hidden md:block md:w-1/2"></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
