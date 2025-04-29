import React, { useState } from "react";
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
  mainColor?: string;
}

export default function CardExperience({
  experience,
}: {
  experience: Experience;
}) {
  const [isClicked, setIsClicked] = useState(false);

  // Détermination du label principal
  let mainLabel = "";
  if (experience.startup) mainLabel = "Startup";
  else if (experience.bigCompany) mainLabel = "Big Company";
  else if (experience.client) mainLabel = "Projet Client";
  else if (experience.internship) mainLabel = "Internship";

  // Couleur par défaut si non spécifiée
  const mainColor = experience.mainColor || "#1a1a1a";

  return (
    <div
      className="relative rounded-3xl overflow-hidden min-h-[600px] min-w-[400px] flex flex-col items-center group transition-all duration-300 cursor-pointer"
      style={{
        background: mainColor,
      }}
      onClick={() => setIsClicked(!isClicked)}
    >
      {/* <BackgroundParticlesAnimation /> */}

      {/* Badge principal en haut à gauche */}
      {mainLabel && (
        <div className="absolute top-5 left-5 z-10">
          <span className="px-4 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-md border border-white/20">
            {mainLabel}
          </span>
        </div>
      )}

      {/* Indicateur de statut en haut à droite */}
      <div className="absolute top-5 right-5 z-10">
        {experience.current ? (
          <span className="px-3 py-1 rounded-full bg-green-500/20 text-white text-xs font-semibold backdrop-blur-sm border border-green-500/30 flex items-center gap-1.5 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Active
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/20 flex items-center gap-1">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Done
          </span>
        )}
      </div>

      {/* Logo centré */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 border border-white/20">
        <img
          src={`/experiences/${experience.logoFile}`}
          alt={`Logo ${experience.company}`}
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Détails de l'expérience avec backdrop blur */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-md z-20 p-6 flex flex-col items-center justify-center text-white transition-all duration-300 ease-in-out ${
          isClicked
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`transform transition-all duration-300 ease-in-out ${
            isClicked ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold mb-2">{experience.position}</h3>
          <h4 className="text-xl mb-4">{experience.company}</h4>
          <p className="text-sm mb-2">
            {experience.startDate} -{" "}
            {experience.current ? "Present" : experience.endDate}
          </p>
          <p className="text-sm mb-4">{experience.location}</p>
          <p className="text-sm text-center mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
