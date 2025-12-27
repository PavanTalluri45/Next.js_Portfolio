"use client";

// React imports
import React, { useState, useEffect, useCallback } from "react";

// Next.js imports
import Link from "next/link";

// Third-party libraries
import { motion, AnimatePresence } from "framer-motion";

// Local components
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { AuroraText } from "@/components/ui/aurora-text";
import { Dock, DockIcon } from "@/components/ui/dock";

// Utilities
import { cn } from "@/lib/utils";

// Icons
import {
    Home,
    User,
    Briefcase,
    FolderOpen,
    GraduationCap,
    Award,
    X,
    MoreVertical,
} from "lucide-react";

// ==================== CONSTANTS ====================

/**
 * Navigation menu items with icons for both desktop and mobile navigation
 */
const NAV_ITEMS = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Certifications", href: "#certifications", icon: Award },
];

/**
 * Header Component - Adaptive navigation with desktop and mobile layouts
 * - Desktop: Animated header that transforms on scroll
 * - Mobile: Bottom dock navigation with responsive item visibility
 */
export default function Header() {
    // ==================== STATE MANAGEMENT ====================

    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [visibleNavItems, setVisibleNavItems] = useState([]);
    const [hiddenNavItems, setHiddenNavItems] = useState([]);

    // ==================== HELPER FUNCTIONS ====================

    /**
     * Updates the active section based on scroll position
     * Uses an expanded detection range for better UX
     */
    const updateActiveSection = useCallback(() => {
        const sections = NAV_ITEMS.map((item) => item.href.substring(1));

        const currentSection = sections.find((section) => {
            const element = document.getElementById(section);
            if (!element) return false;

            const rect = element.getBoundingClientRect();
            // Active when section is within 300px of top
            return rect.top <= 300 && rect.bottom >= 300;
        });

        if (currentSection) {
            setActiveSection(currentSection);
        }
    }, []);

    /**
     * Handles navigation link clicks with smooth scroll
     */
    const handleLinkClick = (href) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    /**
     * Handles logo click to return to home
     */
    const handleLogoClick = () => {
        window.location.href = "/";
    };

    /**
     * Closes the mobile menu modal
     */
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    /**
     * Handles smooth scroll from link clicks
     */
    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        handleLinkClick(href);
    };

    // ==================== EFFECTS ====================

    // Initial Window Width
    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth);
        }
    }, []);

    // Update Desktop Nav Items
    const updateVisibleNavItems = useCallback((width) => {
        if (width === 0) return;
        if (width < 640) {
            const visibleCount = width < 375 ? 3 : 4;
            setVisibleNavItems(NAV_ITEMS.slice(0, visibleCount));
            setHiddenNavItems(NAV_ITEMS.slice(visibleCount));
        } else if (width < 768) {
            setVisibleNavItems(NAV_ITEMS.slice(0, 5));
            setHiddenNavItems(NAV_ITEMS.slice(5));
        } else {
            setVisibleNavItems([]);
            setHiddenNavItems([]);
        }
    }, []);

    // Window resize handler
    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
            updateVisibleNavItems(width);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [updateVisibleNavItems]);

    // Footer Detection
    useEffect(() => {
        const footerObserver = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const footer = document.getElementById("footer");
        if (footer) {
            footerObserver.observe(footer);
        }

        return () => {
            if (footer) footerObserver.unobserve(footer);
        };
    }, []);

    // Scroll Handler
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Scrolled state triggers earlier
            setIsScrolled(currentScrollY > 50);
            updateActiveSection();
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [updateActiveSection]);

    // ==================== DESKTOP NAVIGATION ====================

    const headerVariants = {
        initial: {
            y: -100,
            opacity: 0,
            width: "100%",
            borderRadius: "0px",
            top: 0
        },
        animate: (isScrolled) => ({
            y: 0,
            opacity: 1,
            width: isScrolled ? "auto" : "100%",
            borderRadius: isScrolled ? "9999px" : "0px",
            top: isScrolled ? "1.5rem" : "0rem",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        })
    };

    const renderDesktopNav = () => {
        if (windowWidth < 768) return null;
        if (isFooterVisible) return null;

        return (
            <motion.header
                className={cn(
                    "fixed z-50 flex items-center justify-center transition-colors duration-500",
                    isScrolled
                        ? "left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md border border-border/50 shadow-lg px-6 py-3"
                        : "left-0 right-0 px-12 py-8 bg-transparent border-none"
                )}
                initial="initial"
                animate="animate"
                custom={isScrolled}
                variants={headerVariants}
            >
                <div
                    className={cn(
                        "flex items-center w-full",
                        isScrolled ? "gap-6" : "justify-between"
                    )}
                >
                    {/* Logo */}
                    <motion.button
                        onClick={handleLogoClick}
                        className="text-2xl font-bold tracking-tight cursor-pointer"
                        layout
                    >
                        {isScrolled ? (
                            <span className="text-primary">P</span>
                        ) : (
                            <AuroraText>Pavan</AuroraText>
                        )}
                    </motion.button>

                    {/* Navigation Items */}
                    <nav className="flex items-center gap-1">
                        {NAV_ITEMS.map((item) => {
                            const isActive = activeSection === item.href.substring(1);

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleSmoothScroll(e, item.href)}
                                    className={cn(
                                        "relative flex items-center justify-center transition-all duration-300 rounded-full group px-5 py-2.5",
                                        isActive
                                            ? "text-primary font-semibold"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                    )}
                                >
                                    <span className="text-sm font-medium">{item.name}</span>
                                    {isActive && (
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-primary/10 -z-10"
                                            layoutId="activeSection"
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Theme Toggle */}
                    <div className={cn("flex items-center", !isScrolled && "justify-end")}>
                        <div
                            className={cn(
                                "transition-all duration-300",
                                isScrolled && "pl-4 border-l border-border/50"
                            )}
                        >
                            <AnimatedThemeToggler />
                        </div>
                    </div>
                </div>
            </motion.header>
        );
    };

    // ==================== MOBILE DOCK ====================

    // Check if active section is in hidden items
    const isActiveSectionInHidden = hiddenNavItems.some(
        (item) => item.href.substring(1) === activeSection
    );

    const renderMobileDock = () => {
        if (windowWidth >= 768) return null;
        if (isFooterVisible) return null;

        return (
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-4">
                <div className="flex justify-center px-2">
                    <div className="flex items-center gap-2 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl px-4 py-3">
                        {/* Visible navigation icons */}
                        {visibleNavItems.map((item) => {
                            const isActive = activeSection === item.href.substring(1);
                            const Icon = item.icon;

                            return (
                                <button
                                    key={item.name}
                                    onClick={() => handleLinkClick(item.href)}
                                    className={cn(
                                        "relative flex items-center justify-center p-3 rounded-full transition-colors duration-200",
                                        isActive
                                            ? "bg-primary/20 text-primary"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                                    )}
                                >
                                    <Icon className="w-5 h-5" />
                                    {isActive && (
                                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
                                    )}
                                </button>
                            );
                        })}

                        {/* More button */}
                        {visibleNavItems.length < NAV_ITEMS.length && (
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className={cn(
                                    "relative flex items-center justify-center p-3 rounded-full transition-colors duration-200",
                                    isActiveSectionInHidden || isMobileMenuOpen
                                        ? "bg-primary/20 text-primary"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                                )}
                            >
                                <MoreVertical className="w-5 h-5" />
                                {isActiveSectionInHidden && (
                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    // ==================== MOBILE MENU MODAL ====================

    const renderMobileMenuModal = () => (
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    className="fixed inset-0 z-50 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMobileMenu}
                    />

                    {/* Menu Content */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border/50 rounded-t-3xl"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        {/* Header with Close and Theme */}
                        <div className="flex items-center justify-between p-6 border-b border-border/50">
                            <button
                                onClick={closeMobileMenu}
                                className="p-2 rounded-full hover:bg-muted transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">Theme</span>
                                <AnimatedThemeToggler />
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="p-4 grid grid-cols-3 gap-2">
                            {NAV_ITEMS.map((item) => {
                                const Icon = item.icon;
                                const isActive = activeSection === item.href.substring(1);

                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => {
                                            handleLinkClick(item.href);
                                            closeMobileMenu();
                                        }}
                                        className={cn(
                                            "flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200",
                                            isActive
                                                ? "bg-primary/10 text-primary border border-primary/20 scale-95"
                                                : "border border-border/50 hover:bg-muted/30 hover:border-muted-foreground/30"
                                        )}
                                    >
                                        <Icon
                                            className={cn(
                                                "w-5 h-5 mb-1",
                                                isActive && "text-primary"
                                            )}
                                        />
                                        <span
                                            className={cn(
                                                "text-xs font-medium",
                                                isActive
                                                    ? "text-primary font-semibold"
                                                    : "text-foreground"
                                            )}
                                        >
                                            {item.name}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    // ==================== MAIN RENDER ====================

    return (
        <>
            {renderDesktopNav()}
            {renderMobileDock()}
            {renderMobileMenuModal()}
        </>
    );
}