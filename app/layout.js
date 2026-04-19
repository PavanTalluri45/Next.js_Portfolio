import { Rubik } from "next/font/google";
import "./globals.css";

// Local components
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/layouts/Header";
import { TooltipProvider } from "@/components/ui/tooltip";

// ==================== FONT CONFIGURATION ====================

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

// ==================== METADATA ====================

export const metadata = {
  title: "Pavan Kumar | Portfolio",
  description: "Full Stack Developer - Building scalable web applications.",
};

// ==================== ROOT LAYOUT ====================

/**
 * Root Layout Component
 * Provides global layout with theme provider and header navigation
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rubik.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Header />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
