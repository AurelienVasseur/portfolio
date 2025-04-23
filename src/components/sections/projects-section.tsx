"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData.projects)[0] | null
  >(null);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">My projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.projects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden cursor-pointer transition-all hover:scale-[1.02]"
            onClick={() => setSelectedProject(project)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{project.name}</CardTitle>
                <Badge variant="secondary" className="rotate-15">
                  Week #{project.id}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full bg-muted">
                <img
                  src={`/images/${project.imageFile}`}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                onClick={(e) => e.stopPropagation()}
              >
                <Link href={project.githubUrl}>GitHub</Link>
              </Button>
              <Button asChild size="sm" onClick={(e) => e.stopPropagation()}>
                <Link href={project.websiteUrl}>Jump!</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent>
          {selectedProject && (
            <div className="h-full w-full overflow-y-auto">
              <div className="container mx-auto py-12">
                <div className="max-w-5xl mx-auto space-y-8">
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-3xl font-bold">
                      {selectedProject?.name}
                    </DialogTitle>
                    <Badge variant="secondary" className="rotate-10 text-2xl">
                      Week #{selectedProject.id}
                    </Badge>
                  </div>
                  <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                    <img
                      src={`/images/${selectedProject.imageFile}`}
                      alt={selectedProject.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-6">
                    <p className="text-xl leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div className="flex gap-4">
                      <Button asChild variant="outline" size="lg">
                        <Link href={selectedProject.githubUrl}>
                          Voir sur GitHub
                        </Link>
                      </Button>
                      <Button asChild size="lg">
                        <Link href={selectedProject.websiteUrl}>
                          Visiter le site
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
