"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { LightRays } from "@/components/ui/light-rays";
import { AuroraText } from "@/components/ui/aurora-text";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowRight } from "lucide-react";

const RESUME_PATH =
  "https://drive.google.com/file/d/12sLzGWimQM6DLPf8InUx8f3ZzMAq3fjh/view?usp=drive_link";

const TYPING_ROLES = ["Full Stack GenAI Engineer"];

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typingKey, setTypingKey] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    setTypingKey((prev) => prev + 1);
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

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 py-4"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/95" />
        <LightRays />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center px-3">
        <motion.h1
          custom={1}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          className="mb-6 text-2xl font-bold tracking-tight xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          <AuroraText>Pavan Kumar Talluri</AuroraText>
        </motion.h1>

        <motion.div
          custom={2}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          className="mb-6 h-auto min-h-12 sm:min-h-14 text-lg font-medium text-muted-foreground sm:text-xl md:text-2xl lg:text-3xl"
        >
          <span className="block sm:inline">I am an aspiring </span>
          <TypingAnimation
            key={typingKey}
            words={TYPING_ROLES}
            duration={50}
            className="font-semibold text-primary block sm:inline mt-1 sm:mt-0"
            cursorStyle="|"
            loop={true}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 mx-auto w-full max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg px-2 sm:px-4"
        >
          <p>
            I'm a B.Tech in Data Science graduate passionate about Full Stack
            GenAI Engineer. I enjoy developing intelligent web applications,
            exploring modern AI technologies, and continuously improving my
            skills to create meaningful software that delivers real value to
            users.
          </p>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6"
        >
          <RainbowButton
            onClick={() =>
              document
                .getElementById("engineering")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="h-10 sm:h-12 w-full sm:w-auto min-w-60 rounded-lg text-sm sm:text-base px-6"
          >
            <span className="flex items-center justify-center sm:justify-start gap-2">
              View My Work
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
          </RainbowButton>

          <div className="hidden sm:block w-full sm:w-auto">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <InteractiveHoverButton className="h-12 w-full min-w-60 rounded-lg text-base px-6">
                Download Resume
              </InteractiveHoverButton>
            </a>
          </div>

          <div className="block sm:hidden w-full">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <RainbowButton className="h-10 w-full rounded-lg text-sm px-6 bg-white/5">
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
