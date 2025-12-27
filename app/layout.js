// Next.js imports
import { Rubik } from "next/font/google";
import "./globals.css";

// Local components
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/layouts/Header";

// ==================== FONT CONFIGURATION ====================

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

// ==================== METADATA ====================

export const metadata = {
  title: "Pavan Kumar | Portfolio",
  description: "Full Stack  Developer & Data Analyst - Building scalable web applications and transforming data into insights. Explore my projects in web development, data analytics, and machine learning.",
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
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
