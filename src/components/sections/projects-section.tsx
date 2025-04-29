"use client";

import { LayoutCards, BaseItem } from "@/components/ui/layout-cards";
import { CardProject } from "@/components/ui/card-project";
import projectsData from "@/data/projects.json";

interface Project extends BaseItem {
  id: number;
  name: string;
  description: string;
  imageFiles: string[];
  githubUrl: string;
  websiteUrl: string;
  size: "normal" | "large";
}

type ProjectData = {
  id: unknown;
  name: unknown;
  description: unknown;
  imageFiles: unknown;
  githubUrl: unknown;
  websiteUrl: unknown;
  size: unknown;
};

function isProject(item: unknown): item is Project {
  const project = item as ProjectData;
  return (
    typeof item === "object" &&
    item !== null &&
    typeof project.id === "number" &&
    typeof project.name === "string" &&
    typeof project.description === "string" &&
    Array.isArray(project.imageFiles) &&
    typeof project.githubUrl === "string" &&
    typeof project.websiteUrl === "string" &&
    (project.size === "normal" || project.size === "large")
  );
}

export function ProjectsSection() {
  const projects = projectsData.projects.filter(isProject);

  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-8">Build. Build. Build.</h2>

      <LayoutCards<Project>
        items={projects}
        renderCard={(project) => <CardProject project={project} />}
        renderExpanded={(project) => <CardProject project={project} isExpanded />}
      />
    </section>
  );
}
