"use client";

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";

export default function EducationCard({ degree, institution, date, description }) {
    return (
        <div className="relative group w-full">
            <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-muted/40 shadow-md">
                <CardHeader className="pb-4">
                    <div className="flex flex-col mb-2">
                        <h3 className="text-xl font-bold">{degree}</h3>
                        <h4 className="text-lg font-medium text-primary">{institution}</h4>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{date}</span>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        {description}
                    </p>
                </CardContent>
            </Card>

            {/* Border Beam Effect */}
            <BorderBeam
                size={250}
                duration={12}
                delay={9}
            />
        </div>
    );
}
