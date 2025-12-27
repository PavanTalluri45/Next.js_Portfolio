"use client";

// React imports
import { useState, useEffect } from "react";

// Local components - Layout sections
import Hero from "@/components/layouts/Hero";
import About from "@/components/layouts/About";
import Experience from "@/components/layouts/Experience";
import Projects from "@/components/layouts/Projects";
import Education from "@/components/layouts/Education";
import Certifications from "@/components/layouts/Certifications";
import Footer from "@/components/layouts/Footer";
import WelcomeScreen from "@/components/Welcome Animation/welcome-screen";

/**
 * Home Page Component
 * Features session-based welcome screen that only shows once per browser session
 */
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

    // Show blank screen while checking session storage
    if (isLoading) {
        return <div className="min-h-screen bg-background"></div>;
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            {showWelcome ? (
                // Show welcome screen on first visit
                <WelcomeScreen onComplete={() => {
                    sessionStorage.setItem("welcomeShown", "true");
                    setShowWelcome(false);
                }} />
            ) : (
                // Show main portfolio content
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
