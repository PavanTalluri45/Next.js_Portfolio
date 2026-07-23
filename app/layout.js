import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";

// Local components
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/layouts/Header";
import { TooltipProvider } from "@/components/ui/tooltip";

// ==================== FONT CONFIGURATION ====================

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// ==================== METADATA ====================

export const metadata = {
  title: "Pavan Kumar | Portfolio",
};

// ==================== ROOT LAYOUT ====================

/**
 * Root Layout Component
 * Provides global layout with theme provider and header navigation
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${googleSansFlex.variable} font-sans antialiased`}>
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
