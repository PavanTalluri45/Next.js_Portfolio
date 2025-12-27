"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/layouts/Hero";
import About from "@/components/layouts/About";
import Experience from "@/components/layouts/Experience";
import Projects from "@/components/layouts/Projects";
import Education from "@/components/layouts/Education";
import Certifications from "@/components/layouts/Certifications";
import Footer from "@/components/layouts/Footer";
import WelcomeScreen from "@/components/Welcome Animation/welcome-screen";

export default function Home() {
    const [showWelcome, setShowWelcome] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if welcome screen has already been shown in this session
        const hasShownWelcome = sessionStorage.getItem("welcomeShown");

        if (!hasShownWelcome) {
            setShowWelcome(true);
        }

        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <div className="min-h-screen bg-background"></div>;
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            {showWelcome ? (
                <WelcomeScreen onComplete={() => {
                    sessionStorage.setItem("welcomeShown", "true");
                    setShowWelcome(false);
                }} />
            ) : (
                <>
                    <Hero />
                    <About />
                    <Projects />
                    <Experience />
                    <Education />
                    <Certifications />
                    <Footer />
                </>
            )}
        </main>
    );
}
