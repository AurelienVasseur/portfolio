import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("HomePage");
  const [isClicked, setIsClicked] = useState(false);

  // Determine main label
  let mainLabel = "";
  if (experience.startup) mainLabel = t("experiences.companyTypes.startup");
  else if (experience.bigCompany)
    mainLabel = t("experiences.companyTypes.bigCompany");
  else if (experience.client)
    mainLabel = t("experiences.experienceTypes.client");
  else if (experience.internship)
    mainLabel = t("experiences.experienceTypes.internship");

  // Default color if not specified
  const mainColor = experience.mainColor || "#1a1a1a";

  return (
    <div
      className="relative rounded-3xl overflow-hidden min-h-[500px] min-w-full md:min-w-[400px] flex flex-col items-center group transition-all duration-300 cursor-pointer"
      style={{
        background: mainColor,
      }}
      onClick={() => setIsClicked(!isClicked)}
    >
      {/* <BackgroundParticlesAnimation /> */}

      {/* Main badge at top left */}
      {mainLabel && (
        <div className="absolute top-5 left-5 z-10">
          <span className="px-4 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-md border border-white/20">
            {mainLabel}
          </span>
        </div>
      )}

      {/* Status indicator at top right */}
      <div className="absolute top-5 right-5 z-10">
        {experience.current ? (
          <span className="px-3 py-1 rounded-full bg-green-500/20 text-white text-xs font-semibold backdrop-blur-sm border border-green-500/30 flex items-center gap-1.5 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {t("experiences.current")}
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/20 flex items-center gap-1">
            <CheckCircle2 className="h-3.5 w-3.5" />
            {t("experiences.done")}
          </span>
        )}
      </div>

      {/* Centered logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 border border-white/20">
        <img
          src={`/experiences/${experience.logoFile}`}
          alt={`Logo ${experience.company}`}
          className="w-16 h-16 object-contain rounded-sm"
        />
      </div>

      {/* Experience details with backdrop blur */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-md z-20 p-6 flex flex-col text-white transition-all duration-300 ease-in-out ${
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
          <h3 className="text-2xl font-bold mb-2">{t(experience.position)}</h3>
          <h4 className="text-xl mb-4">{experience.company}</h4>
          <p className="text-sm mb-2">
            {experience.current && `${t("experiences.since")} `}
            {experience.startDate}
            {!experience.current && ` - ${experience.endDate}`}
          </p>
          <p className="text-sm mb-4">{t(experience.location)}</p>
          <p className="text-sm mb-4">{t(experience.description)}</p>
          <div className="flex flex-wrap gap-2">
            {experience.client && (
              <span className="px-3 py-1 rounded-full bg-white/5 text-white text-xs font-semibold border border-white/20">
                {t("experiences.experienceTypes.client")}
              </span>
            )}
            {experience.internship && (
              <span className="px-3 py-1 rounded-full bg-white/5 text-white text-xs font-semibold border border-white/20">
                {t("experiences.experienceTypes.internship")}
              </span>
            )}
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold border border-white/20"
              >
                {t(tech)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
