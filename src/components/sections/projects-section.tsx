"use client";

import { LayoutCards, BaseItem } from "@/components/ui/layout-cards";
import { CardProject } from "@/components/ui/card-project";
import projectsData from "@/data/projects.json";
import { useTranslations } from "next-intl";

interface Project extends BaseItem {
  id: number;
  name: string;
  description: string;
  imageFiles: string[];
  githubUrl: string;
  websiteUrl: string;
  size: "normal" | "large";
  technologies: string[];
  workInProgress?: boolean;
  mainColor: string;
}

type ProjectData = {
  id: unknown;
  name: unknown;
  description: unknown;
  imageFiles: unknown;
  githubUrl: unknown;
  websiteUrl: unknown;
  size: unknown;
  technologies: unknown;
  workInProgress?: unknown;
  mainColor: unknown;
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
    (project.size === "normal" || project.size === "large") &&
    Array.isArray(project.technologies) &&
    typeof project.mainColor === "string"
  );
}

export function ProjectsSection() {
  const t = useTranslations("HomePage");
  const projects = projectsData.projects.filter(isProject);

  return (
    <section id="projects" className="flex flex-col gap-10 md:gap-16">
      <h2 className="text-3xl md:text-4xl">{t("projects.title")}</h2>

      <LayoutCards<Project>
        items={projects}
        renderCard={(project) => <CardProject project={project} />}
        renderExpanded={(project) => <CardProject project={project} isExpanded />}
      />
    </section>
  );
}
