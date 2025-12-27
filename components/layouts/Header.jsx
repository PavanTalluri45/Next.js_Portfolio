"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { cn } from "@/lib/utils";
import { AuroraText } from "@/components/ui/aurora-text";
import {
    Home,
    User,
    Briefcase,
    FolderOpen,
    GraduationCap,
    Award,
    Mail,
    X,
    MoreVertical,
} from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";

// Navigation items 
const NAV_ITEMS = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Certifications", href: "#certifications", icon: Award },
];

export default function Header() {
    // State
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [visibleNavItems, setVisibleNavItems] = useState([]);
    const [hiddenNavItems, setHiddenNavItems] = useState([]);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showBottomNav, setShowBottomNav] = useState(true);

    // Refs
    const scrollTimeoutRef = useRef(null);
    const lastScrollYRef = useRef(0);

    // ==================== HELPER FUNCTIONS ====================

    const updateActiveSection = useCallback(() => {
        // If not on home page (url check could be added here if using real routing), 
        // but for single page scroll:
        const sections = NAV_ITEMS.map((item) => item.href.substring(1));

        const currentSection = sections.find((section) => {
            const element = document.getElementById(section);
            if (!element) return false;

            const rect = element.getBoundingClientRect();
            // Expanded detection range
            return rect.top <= 300 && rect.bottom >= 300;
        });

        if (currentSection) {
            setActiveSection(currentSection);
        }
    }, []);

    const handleLinkClick = (href) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleLogoClick = () => {
        window.location.href = "/";
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

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

            // Hide bottom nav when scrolling down, show when scrolling up
            setShowBottomNav(!(currentScrollY > lastScrollY && currentScrollY > 100));

            setLastScrollY(currentScrollY);
            updateActiveSection();
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, updateActiveSection]);

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

        return (
            <AnimatePresence>
                {showBottomNav && (
                    <motion.div
                        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                        {/* Responsive Dock Container */}
                        <div className="mx-auto mb-4 w-max max-w-full px-2">
                            <Dock
                                className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl px-3 py-3"
                                iconSize={windowWidth < 375 ? 36 : 42}
                                iconMagnification={windowWidth < 375 ? 50 : 60}
                                direction="middle"
                            >
                                {/* Visible navigation icons */}
                                {visibleNavItems.map((item) => {
                                    const isActive = activeSection === item.href.substring(1);
                                    const Icon = item.icon;

                                    return (
                                        <DockIcon
                                            key={item.name}
                                            onClick={() => handleLinkClick(item.href)}
                                            className={cn(
                                                "transition-all duration-200",
                                                isActive
                                                    ? "bg-primary/20 text-primary"
                                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                                            )}
                                        >
                                            <div className="relative">
                                                <Icon className="w-5 h-5" />
                                                {isActive && (
                                                    <motion.div
                                                        className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ type: "spring" }}
                                                    />
                                                )}
                                            </div>
                                            {/* Tooltip */}
                                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                                {item.name}
                                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-foreground rotate-45 -mt-1" />
                                            </div>
                                        </DockIcon>
                                    );
                                })}

                                {/* More button */}
                                {visibleNavItems.length < NAV_ITEMS.length && (
                                    <DockIcon
                                        onClick={() => setIsMobileMenuOpen(true)}
                                        className={cn(
                                            "transition-all duration-200",
                                            isActiveSectionInHidden || isMobileMenuOpen
                                                ? "bg-primary/20 text-primary"
                                                : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                                        )}
                                    >
                                        <div className="relative">
                                            <MoreVertical className="w-5 h-5" />
                                            {isActiveSectionInHidden && (
                                                <motion.div
                                                    className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: "spring" }}
                                                />
                                            )}
                                        </div>
                                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                            More
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-foreground rotate-45 -mt-1" />
                                        </div>
                                    </DockIcon>
                                )}
                            </Dock>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
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