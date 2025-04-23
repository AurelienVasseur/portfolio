"use client"

import { useEffect, useState } from 'react';
import experiencesData from '@/data/experiences.json';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  location: string;
  description: string;
  technologies: string[];
  client: boolean;
  logoFile: string;
}

export function ExperiencesSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    setExperiences(experiencesData.experiences);
  }, []);

  const formatDate = (date: string) => {
    return format(new Date(date + '-01'), 'MMMM yyyy', { locale: fr });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">I worked with them</h2>
        <div className="space-y-6">
          {experiences.map((experience) => (
            <Card key={experience.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={`/images/${experience.logoFile}`}
                    alt={`Logo ${experience.company}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold">{experience.position}</h3>
                      <p className="text-gray-600">{experience.company}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {formatDate(experience.startDate)} - {experience.current ? 'Présent' : formatDate(experience.endDate)}
                    </div>
                  </div>
                  <p className="text-gray-500 mt-1">{experience.location}</p>
                  <p className="mt-4">{experience.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {experience.client && (
                    <Badge variant="outline" className="mt-4">
                      Projet Client
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 