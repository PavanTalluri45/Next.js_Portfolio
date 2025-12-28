import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Engineering Work", href: "#engineering" },
    { name: "Professional Journey", href: "#journey" },
    { name: "Technical Credibility", href: "#credibility" }
];

const socialLinks = [
    { icon: Github, href: "https://github.com/PavanTalluri45?tab=repositories", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pavankumartalluri45/", label: "LinkedIn" },
];

/**
 * Footer Component - Website footer with brand intro, quick links, and contact info
 */
export default function Footer() {
    const smoothScroll = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const resumePath = "https://drive.google.com/drive/folders/116ZXqTCaBt4zgQqPPxT2KJWPxcWJ8Wzz?usp=drive_link";

    const handleDownloadResume = () => {
        window.open(resumePath, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer id="footer" className="relative bg-background border-t border-border/50 py-16 overflow-hidden">
            {/* Remove container constraint and use full width */}
            <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">

                    {/* Left Column: Brand & Social */}
                    <motion.div
                        className="lg:col-span-5 space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-2">
                                <AuroraText>Pavan Kumar Talluri</AuroraText>
                            </h2>
                            <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                                A full-stack engineer with a strong analytical foundation who builds end-to-end digital systems and transforms data into strategic insight.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="block"
                                >
                                    {/* Icon Container - BorderBeam with faster animation */}
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-background/50 border border-border/10 group cursor-pointer hover:bg-primary/10 transition-colors duration-300">
                                        <BorderBeam size={40} duration={3} delay={0} borderWidth={1} />
                                        <social.icon className="relative z-10 w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Middle Column: Quick Links */}
                    <motion.div
                        className="lg:col-span-3 lg:pl-8 space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => smoothScroll(link.href)}
                                        className="text-muted-foreground hover:text-primary text-base transition-colors duration-200"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Column: Contact & Resume */}
                    <motion.div
                        className="lg:col-span-4 space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>

                            {/* Email Item */}
                            <div className="flex items-center gap-4">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-background/50 border border-border/10 shrink-0 hover:bg-primary/10 transition-colors duration-300">
                                    <BorderBeam size={35} duration={3} delay={0} borderWidth={1} />
                                    <Mail className="relative z-10 w-4 h-4 text-foreground" />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</span>
                                    <a
                                        href="mailto:talluripavankumar88@gmail.com"
                                        className="text-sm md:text-base font-medium text-foreground hover:text-primary truncate transition-colors"
                                    >
                                        talluripavankumar88@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone Item */}
                            <div className="flex items-center gap-4">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-background/50 border border-border/10 shrink-0 hover:bg-primary/10 transition-colors duration-300">
                                    <BorderBeam size={35} duration={3} delay={0} borderWidth={1} />
                                    <Phone className="relative z-10 w-4 h-4 text-foreground" />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Phone</span>
                                    <span className="text-sm md:text-base font-medium text-foreground">
                                        +91 7793931658
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Resume Button */}
                        <div className="pt-2">
                            <div className="hidden md:block">
                                <InteractiveHoverButton onClick={handleDownloadResume}>
                                    Download Resume
                                </InteractiveHoverButton>
                            </div>
                            <div className="md:hidden w-full">
                                <RainbowButton className="w-full justify-center" onClick={handleDownloadResume}>
                                    <span className="flex items-center gap-2">
                                        <Download className="w-4 h-4" />
                                        Download Resume
                                    </span>
                                </RainbowButton>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Bottom - full width */}
                <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Pavan Kumar Talluri. All rights reserved.</p>
                    <p>Built with Next.js 16</p>
                </div>
            </div>
        </footer>
    );
}