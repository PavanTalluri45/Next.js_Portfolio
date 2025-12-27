"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LightRays } from "@/components/ui/light-rays";
import { AuroraText } from "@/components/ui/aurora-text";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [typingKey, setTypingKey] = useState(0);

    useEffect(() => {
        setIsLoaded(true);
        setTypingKey(prev => prev + 1);
    }, []);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2 + i * 0.1,
                duration: 0.8,
                ease: "easeOut",
            },
        }),
    };

    // Path to your resume file
    const resumePath = "https://drive.google.com/drive/folders/116ZXqTCaBt4zgQqPPxT2KJWPxcWJ8Wzz?usp=drive_link";

    return (
        <section
            id="home"
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 py-4"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <LightRays
                    count={12}
                    color="rgba(120, 119, 198, 0.2)"
                    blur={60}
                    speed={15}
                    length="70vh"
                    className="opacity-70"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-5xl text-center px-4">


                {/* Name*/}
                <motion.h1
                    custom={1}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    variants={fadeUpVariants}
                    className="mb-2 mt-10 text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                >
                    <AuroraText>Pavan Kumar Talluri</AuroraText>
                </motion.h1>

                {/* Typing Animation Skill */}
                <motion.div
                    custom={2}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    variants={fadeUpVariants}
                    className="mb-4 h-auto min-h-12 sm:min-h-14 text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl lg:text-4xl"
                >
                    <span className="block sm:inline">I am a </span>
                    <TypingAnimation
                        key={typingKey}
                        words={[
                            "Full Stack Developer",
                            "Data Analyst",
                        ]}
                        duration={50}
                        className="font-semibold text-primary block sm:inline mt-1 sm:mt-0"
                        cursorStyle="|"
                        loop={true}
                    />
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isLoaded ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mx-auto w-full max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl px-2 sm:px-4"
                >
                    <p>
                        A full-stack engineer with a strong analytical foundation who builds end-to-end digital systems and transforms data into strategic insight. I create reliable, scalable applications while simultaneously analyzing complex information to identify patterns, optimize performance, and guide informed business decisions, ensuring that every product is both technically sound and commercially intelligent.
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    custom={4}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    variants={fadeUpVariants}
                    className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6"
                >
                    <RainbowButton
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        className="h-12 sm:h-14 w-full sm:w-auto min-w-[280px] rounded-lg text-base sm:text-lg px-8"
                    >
                        <span className="flex items-center justify-center sm:justify-start gap-2">
                            View My Work
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </span>
                    </RainbowButton>

                    {/* Desktop Resume Button (Hidden on Mobile) */}
                    <div className="hidden sm:block w-full sm:w-auto">
                        <a
                            href={resumePath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full"
                        >
                            <InteractiveHoverButton
                                onClick={() => console.log("Download Resume clicked")}
                                className="h-14 w-full min-w-[280px] rounded-lg text-lg px-8"
                            >
                                Download Resume
                            </InteractiveHoverButton>
                        </a>
                    </div>

                    {/* Mobile Resume Button (Visible only on Mobile) */}
                    <div className="block sm:hidden w-full">
                        <a
                            href={resumePath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full"
                        >
                            <RainbowButton
                                onClick={() => console.log("Download Resume clicked")}
                                className="h-12 w-full rounded-lg text-base px-8 bg-white/5"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Download Resume
                                </span>
                            </RainbowButton>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}