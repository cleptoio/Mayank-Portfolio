"use client";

import { ProjectCard } from "./ProjectCard";
import { CASE_STUDIES } from "@/lib/data";

export function ProjectsGrid() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>
    );
}
