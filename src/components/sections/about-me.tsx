"use client";

import React, { useState, useEffect } from "react";
import { Modal } from "../ui/modal";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import aboutData from "@/data/about.json";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { BackgroundParticlesAnimation } from "../ui/background-particles-animation";
import { useTranslations } from "next-intl";

export default function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("HomePage");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  const translatedSections = aboutData.sections.map((section) => ({
    ...section,
    title: t(section.titleKey),
    description: t(section.descriptionKey)
  }));

  return (
    <>
      <section id="about" className="flex justify-center items-center">
        <Card 
          className="w-full bg-muted/50 p-0 overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 to-slate-900">
            <BackgroundParticlesAnimation />
            
            <CardContent className="relative flex flex-col items-center space-y-4 md:space-y-8 p-6 md:p-12 pt-8 md:pt-16 pb-12 md:pb-24">
              <Badge
                variant="outline"
                className="rounded-full px-4 py-1 text-sm md:text-md font-normal text-white"
              >
                {t("about.badge")}
              </Badge>
              <div className="space-y-2 md:space-y-4 items-start w-full mt-2 md:mt-5">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4rem] font-normal leading-tight tracking-tight text-white">
                  {t("about.title")}
                </h1>
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4rem] font-normal leading-tight tracking-tight text-white/70">
                  {t("about.subtitle")}
                </h2>
              </div>
            </CardContent>
          </div>
        </Card>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex justify-center items-center h-screen w-full bg-neutral-900">
          <div className="w-full max-w-4xl mx-auto">
            <StickyScroll content={translatedSections} />
          </div>
        </div>
      </Modal>
    </>
  );
}
