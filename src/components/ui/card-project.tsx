"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  imageFiles: string[];
  githubUrl: string;
  websiteUrl: string;
  size?: "normal" | "large";
}

interface CardProjectProps {
  project: Project;
  isExpanded?: boolean;
}

export function CardProject({ project, isExpanded = false }: CardProjectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  if (!isExpanded) {
    return (
      <Card
        className="p-0 overflow-hidden transition-all h-80"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full h-full relative">
          <img
            src={`/images/${project.imageFiles[0]}`}
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
      <CardContent>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {project.imageFiles.map((image, index) => (
              <div key={index} className="flex-[0_0_100%]">
                <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                  <img
                    src={`/images/${image}`}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 dark:bg-black/10 dark:hover:bg-black/20 transition-colors border border-gray-200 dark:border-gray-800"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 dark:bg-black/10 dark:hover:bg-black/20 transition-colors border border-gray-200 dark:border-gray-800"
            onClick={scrollNext}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <h2 className="text-lg font-semibold mt-4">{project.name}</h2>
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
