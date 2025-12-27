"use client";

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";

export default function ExperienceCard({ role, company, date, description }) {
    return (
        <div className="relative group w-full">
            <Card className="relative overflow-hidden bg-card/80 backdrop-blur-sm border-muted/40 shadow-lg">
                <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold">{role}</h3>
                        <span className="text-sm text-muted-foreground font-medium bg-secondary px-3 py-1 rounded-full w-fit">
                            {date}
                        </span>
                    </div>
                    <h4 className="text-lg font-semibold text-primary">{company}</h4>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
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
