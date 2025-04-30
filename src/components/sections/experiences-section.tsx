"use client";

import { useEffect, useState } from "react";
import experiencesData from "@/data/experiences.json";
import CardExperience, { Experience } from "@/components/ui/card-experience";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export function ExperiencesSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps'
  },
  [Autoplay({ playOnInit: true, delay: 3000 })]);

  useEffect(() => {
    const allExperiences = experiencesData.experiences.reverse();
    // Sort experiences: active ones first, then by date
    const sortedExperiences = [...allExperiences].sort((a, b) => {
      if (a.current && !b.current) return -1;
      if (!a.current && b.current) return 1;
      return 0;
    });
    setExperiences(sortedExperiences);
  }, []);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="experiences">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold mb-8">They trust me</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {experiences.map((experience) => (
                  <CardExperience key={experience.id} experience={experience} />
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
        </div>
      </div>
    </section>
  );
}
