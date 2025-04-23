import React from "react";
import { Card } from "./card";
import { format } from "date-fns";
import { Badge } from "./badge";
import { fr } from "date-fns/locale";
import { CheckCircle2 } from "lucide-react";

export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  location: string;
  description: string;
  technologies: string[];
  logoFile: string;
  client?: boolean;
  internship?: boolean;
  startup?: boolean;
  bigCompany?: boolean;
}

export default function CardExperience({
  experience,
}: {
  experience: Experience;
}) {
  const formatDate = (date: string) => {
    return format(new Date(date + "-01"), "MMMM yyyy", { locale: fr });
  };

  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="w-16 h-16 flex-shrink-0 rounded-sm">
          <img
            src={`/experiences/${experience.logoFile}`}
            alt={`Logo ${experience.company}`}
            className="w-full h-full object-contain rounded-sm"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-semibold">{experience.company}</h3>
              <p className="text-gray-600">{experience.position}</p>
            </div>
            <div className="text-sm text-gray-500 flex items-center gap-2">
              {formatDate(experience.startDate)} -{" "}
              {experience.current ? (
                <>
                  Présent
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1.5 bg-green-50 border-green-200 text-green-700"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Active
                  </Badge>
                </>
              ) : (
                <>
                  {formatDate(experience.endDate)}
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1.5 bg-blue-50 border-blue-200 text-blue-700"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Done
                  </Badge>
                </>
              )}
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
          <div className="flex flex-wrap gap-2">
            {experience.startup && (
              <Badge variant="outline" className="mt-4">
                Startup
              </Badge>
            )}
            {experience.bigCompany && (
              <Badge variant="outline" className="mt-4">
                Big Company
              </Badge>
            )}
            {experience.client && (
              <Badge variant="outline" className="mt-4">
                Projet Client
              </Badge>
            )}
            {experience.internship && (
              <Badge variant="outline" className="mt-4">
                Internship
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
