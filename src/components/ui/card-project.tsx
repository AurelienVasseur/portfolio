"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { ProgressBar } from "./progress-bar";

import Autoplay from "embla-carousel-autoplay";
import { IconBrandGithub, IconRocket } from "@tabler/icons-react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      containScroll: "trimSnaps",
    },
    [Autoplay({ playOnInit: true, delay: 3000 })]
  );

  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [emblaApi, onScroll]);

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
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
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

          {project.imageFiles.length > 1 && (
            <ProgressBar progress={scrollProgress} />
          )}
        </div>
        <div className="flex flex-row gap-2 items-center align-middle">
          <h2 className="text-xl font-semibold">{project.name}</h2>
          <Link href={project.githubUrl}>
            <span className="px-2 py-0.5 rounded-full bg-primary/30 text-primary text-xs border border-primary/20 hover:bg-primary/40 transition-colors cursor-pointer flex items-center gap-1">
              <IconBrandGithub className="h-3 w-3" />
              GitHub
            </span>
          </Link>
          <Link href={project.websiteUrl}>
            <span className="px-2 py-0.5 rounded-full bg-blue-500/30 text-blue-500 text-xs border border-blue-500/20 hover:bg-blue-500/40 transition-colors cursor-pointer flex items-center gap-1">
              <IconRocket className="h-3 w-3" />
              Explore
            </span>
          </Link>
        </div>
        <p className="text-md leading-relaxed">{project.description}</p>
      </CardContent>
    </Card>
  );
}
