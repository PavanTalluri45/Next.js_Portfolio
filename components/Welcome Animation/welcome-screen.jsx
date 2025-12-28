"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function WelcomeScreen({ onComplete }) {
    const [phase, setPhase] = useState('text');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Simple text animation timing
        const timer = setTimeout(() => {
            setPhase('complete');
            setTimeout(() => {
                sessionStorage.setItem("welcomeShown", "true");
                onComplete();
            }, 1000);
        }, 3000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!isMounted) return null;

    return (
        <AnimatePresence>
            {phase !== 'complete' && (
                <motion.div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black text-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-center px-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-4"
                    >
                        <TypingAnimation
                            words={["Welcome to the World of Pavan Kumar"]}
                            duration={50}
                            className="font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"
                            cursorStyle="|"
                            loop={false}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}