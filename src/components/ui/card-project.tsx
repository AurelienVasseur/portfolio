"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { ProgressBar } from "./progress-bar";
import { useTranslations } from "next-intl";

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
  technologies: string[];
  workInProgress?: boolean;
  mainColor: string;
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
  const t = useTranslations("HomePage");

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
        className="p-0 overflow-hidden transition-all h-80 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full h-full relative">
          <div
            className="w-full h-full relative bg-amber-500 flex items-center justify-center p-3"
            style={{ backgroundColor: project.mainColor }}
          >
            <img
              src={`/projects/${project.imageFiles[0]}`}
              alt={project.name}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl md:scale-80 md:group-hover:scale-100 transition-all duration-300"
            />
          </div>
          {project.workInProgress && (
            <div className="absolute inset-0 backdrop-blur-sm z-10" />
          )}
          <div className="absolute inset-0 transition-colors" />
          <motion.div
            className="absolute top-4 left-4 z-20 flex flex-col gap-2 items-start"
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
              {t(project.name)}
            </span>
            {project.workInProgress && (
              <span className="px-4 py-1 rounded-full bg-orange-500/30 text-orange-400 text-xs font-semibold border border-orange-500/20">
                🚧 {t("projects.status.workInProgress")}
              </span>
            )}
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
                  <div
                    className="aspect-video rounded-lg overflow-hidden p-5 flex items-center justify-center"
                    style={{ backgroundColor: project.mainColor }}
                  >
                    <img
                      src={`/projects/${image}`}
                      alt={t(project.name)}
                      className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                      style={{ backgroundColor: project.mainColor }}
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
        <div className="flex flex-col md:flex-row gap-2 md:items-center md:align-middle">
          <h2 className="text-xl font-semibold">{t(project.name)}</h2>
          <div className="flex flex-row gap-2 items-center align-middle">
            <Link href={project.githubUrl} target="_blank">
              <span className="px-2 py-0.5 rounded-full bg-primary/30 text-primary text-xs border border-primary/20 hover:bg-primary/40 transition-colors cursor-pointer flex items-center gap-1">
                <IconBrandGithub className="h-3 w-3" />
                {t("projects.card.github")}
              </span>
            </Link>
            <Link href={project.websiteUrl} target="_blank">
              <span className="px-2 py-0.5 rounded-full bg-blue-500/30 text-blue-500 text-xs border border-blue-500/20 hover:bg-blue-500/40 transition-colors cursor-pointer flex items-center gap-1">
                <IconRocket className="h-3 w-3" />
                {t("projects.card.explore")}
              </span>
            </Link>
          </div>
        </div>
        <p className="text-md leading-relaxed">{t(project.description)}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 rounded-full text-foreground text-xs backdrop-blur-sm border border-foreground/20"
            >
              {t(tech)}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
