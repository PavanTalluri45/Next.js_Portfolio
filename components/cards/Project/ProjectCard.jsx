"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { Github } from "lucide-react";

export default function ProjectCard({ title, description, technologies, repoLink, delay }) {
    return (
        <div className="relative group rounded-xl h-full">
            <Card className="h-full flex flex-col overflow-hidden bg-card/60 backdrop-blur-sm border-muted/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-card/80">
                <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text">{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="pt-4">
                    <Button variant="default" size="default" className="w-full group/btn" asChild>
                        <a href={repoLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                            View on GitHub
                        </a>
                    </Button>
                </CardFooter>
            </Card>

            {/* Border Beam Effect */}
            <BorderBeam
                duration={8}
                size={100}
                delay={delay || 0}
                colorFrom="#9333EA"
                colorTo="#3B82F6"
            />
        </div>
    );
}
