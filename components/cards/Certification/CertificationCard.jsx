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
import { Award } from "lucide-react";

/**
 * CertificationCard Component - Displays official certifications with BorderBeam effect
 */
export default function CertificationCard({ name, issuer, date, description, skills, certificateLink, delay }) {
    return (
        <div className="relative group rounded-xl h-full">
            <Card className="h-full flex flex-col overflow-hidden bg-card/60 backdrop-blur-sm border-muted/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-card/80">
                <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                            <CardTitle className="text-2xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text">{name}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1 font-medium">Issued by {issuer}</p>
                        </div>
                        <span className="text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full font-semibold whitespace-nowrap ml-2">
                            {date}
                        </span>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 grow">
                    {description && (
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {description}
                        </p>
                    )}
                    {skills && skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </CardContent>
                <CardFooter className="pt-4">
                    <Button variant="default" size="default" className="w-full group/btn" asChild>
                        <a href={certificateLink || "#"} target="_blank" rel="noopener noreferrer">
                            <Award className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                            View Certificate
                        </a>
                    </Button>
                </CardFooter>
            </Card>

            {/* Border Beam Effect */}
            <BorderBeam
                duration={8}
                size={100}
                delay={delay || 0}
                colorFrom="#10B981"
                colorTo="#3B82F6"
            />
        </div>
    );
}
