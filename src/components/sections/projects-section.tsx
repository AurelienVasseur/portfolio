"use client";

import projectsData from "@/data/projects.json";
import { LayoutCards } from "@/components/ui/layout-cards";
import { CardProject } from "@/components/ui/card-project";

export function ProjectsSection() {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-8">Build. Build. Build.</h2>

      <LayoutCards
        items={projectsData.projects}
        renderCard={(project) => <CardProject project={project} />}
        renderExpanded={(project) => <CardProject project={project} isExpanded />}
      />
    </section>
  );
}
