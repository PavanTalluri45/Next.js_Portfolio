"use client";
import CertificationCard from "@/components/cards/Certification/CertificationCard";
import { motion } from "motion/react";
import { AuroraText } from "@/components/ui/aurora-text";

const certifications = [
    {
        "name": "Complete Python Course",
        "issuer": "Aajhub & Sapienz Recruit",
        "date": "February 2025",
        "description": "Completed an intensive online Python program focused on core programming, object-oriented concepts, data structures, and practical problem solving. The course was jointly conducted by Aajhub and Sapienz Recruit and validated through formal assessment and certification.",
        "skills": [
            "Python Programming",
            "Object-Oriented Programming",
            "Data Structures",
            "Problem Solving",
            "Fundamentals of Software Development"
        ],

        "certificateLink": "https://drive.google.com/file/d/1-j_Bh6lN2A1TCjnemZRTdt8JfUPdHG4t/view?usp=drive_link"
    },

    {
        "name": "SQL – Basic to Advanced",
        "issuer": "Aajhub & Sapienz Recruit",
        "date": "June 2025",
        "description": "Completed an intensive SQL program covering relational database fundamentals through advanced querying. The course included joins, subqueries, aggregations, window functions, and performance-oriented query design for real-world data analysis and backend systems.",
        "skills": [
            "SQL",
            "Relational Databases",
            "Joins & Subqueries",
            "Window Functions",
            "Data Aggregation",
            "Query Optimization"
        ],

        "certificateLink": "https://drive.google.com/file/d/1-y2h6bL1sfbIp_AQOhS--hw0mgvKNbJa/view?usp=drive_link"
    },

    {
        "name": "Full Stack Web Development Course",
        "issuer": "Aajhub & Sapienz Recruit",
        "date": "November 2025",
        "description": "Completed an intensive full stack web development program covering modern frontend and backend technologies, RESTful APIs, database integration, and real-world project development. The course was delivered online and jointly conducted by Aajhub and Sapienz Recruit.",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Frontend Development",
            "Backend Development",
            "RESTful APIs",
            "Database Integration",
            "Full Stack Web Development"
        ],

        "certificateLink": "https://drive.google.com/file/d/15vGHVHvN1DPLe-wVC8UgxsDOq5tpAcAs/view?usp=drive_link"
    },

    {
        "name": "Machine Learning with Python",
        "issuer": "Cognitive Class (IBM Developer Skills Network)",
        "date": "November 2024",
        "description": "Successfully completed an IBM-powered Machine Learning program covering supervised and unsupervised learning, model training, evaluation, and practical implementation using Python.",
        "skills": [
            "Machine Learning",
            "Python",
            "Supervised Learning",
            "Unsupervised Learning",
            "Model Evaluation",
            "Data Analysis"
        ],

        "certificateLink": "https://courses.cognitiveclass.ai/certificates/1d3a13a0f19043c897059c5dcb7af664"
    },

    {
        "name": "Complete DSA Course",
        "issuer": "Aajhub & Sapienz Recruit",
        "date": "October 2025",
        "description": "Successfully completed an intensive Data Structures and Algorithms program covering problem-solving techniques, algorithmic thinking, and core data structures used in software engineering and competitive programming.",
        "skills": [
            "Data Structures",
            "Algorithms",
            "Problem Solving",
            "Time and Space Complexity",
            "Coding Interview Preparation"
        ],

        "certificateLink": "https://drive.google.com/file/d/1USwFDwEbmUdP1G5YnveiV7K6Z36hZocH/view?usp=drive_link"
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
        scale: 0.95
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

export default function Certifications() {
    return (
        <section id="certifications" className="container mx-auto py-20 px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                    Licenses & <AuroraText>Certifications</AuroraText>
                </h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {certifications.map((cert, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <CertificationCard
                            {...cert}
                            delay={index * 1.5}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
