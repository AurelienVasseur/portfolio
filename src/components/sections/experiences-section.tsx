"use client";

import { useEffect, useState } from "react";
import experiencesData from "@/data/experiences.json";
import CardExperience, { Experience } from "@/components/ui/card-experience";

export function ExperiencesSection() {
  const [activeExperiences, setActiveExperiences] = useState<Experience[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    const experiences = experiencesData.experiences.reverse();
    setExperiences(
      experiences.filter((experience) => !experience.current)
    );
    setActiveExperiences(
      experiences.filter((experience) => experience.current)
    );
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">I&apos;m working with them</h2>
        <div className="space-y-6">
          {activeExperiences.map((experience) => (
            <CardExperience key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="relative mb-8">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">
              Previous experiences
            </span>
          </div>
        </div>
        <div className="space-y-6">
          {experiences.map((experience) => (
            <CardExperience key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
