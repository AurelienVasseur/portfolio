"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  imageFile: string;
  githubUrl: string;
  websiteUrl: string;
}

interface CardProjectProps {
  project: Project;
  isExpanded?: boolean;
}

export function CardProject({ project, isExpanded = false }: CardProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (!isExpanded) {
    return (
      <Card
        className="p-0 overflow-hidden transition-all h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-video w-full relative">
          <img
            src={`/images/${project.imageFile}`}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 transition-colors" />
          <motion.div
            className="absolute top-4 left-4"
            initial={{ y: -50, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              opacity: { duration: 0.2 },
            }}
          >
            <span className="px-4 py-1 rounded-full bg-white/30 text-white text-xs font-semibold  border border-white/20">
              {project.name}
            </span>
          </motion.div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-3xl">{project.name}</CardTitle>
          <Badge variant="secondary" className="rotate-15 text-xl">
            Week #{project.id}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
          <img
            src={`/images/${project.imageFile}`}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="mt-6 text-lg leading-relaxed">{project.description}</p>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button asChild variant="outline" size="lg">
          <Link href={project.githubUrl}>Voir sur GitHub</Link>
        </Button>
        <Button asChild size="lg">
          <Link href={project.websiteUrl}>Visiter le site</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
