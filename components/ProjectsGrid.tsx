"use client";

import { ProjectCard } from "./ProjectCard";
import { CASE_STUDIES } from "@/lib/data";

export function ProjectsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {/* First row - 2 large cards */}
            <div className="md:col-span-2 lg:col-span-2">
                <ProjectCard project={CASE_STUDIES[0]} index={0} />
            </div>
            <div className="md:col-span-1 lg:col-span-1">
                <ProjectCard project={CASE_STUDIES[1]} index={1} />
            </div>

            {/* Second row - 3 equal cards */}
            <div className="md:col-span-1">
                <ProjectCard project={CASE_STUDIES[2]} index={2} />
            </div>
            <div className="md:col-span-1">
                <ProjectCard project={CASE_STUDIES[3]} index={3} />
            </div>
            <div className="md:col-span-1">
                <ProjectCard project={CASE_STUDIES[4]} index={4} />
            </div>

            {/* Third row - 1 large card */}
            <div className="md:col-span-3">
                <ProjectCard project={CASE_STUDIES[5]} index={5} />
            </div>
        </div>
    );
}
