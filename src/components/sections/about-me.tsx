"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Modal } from "../ui/modal";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const aboutContent = [
  {
    title: "Qui suis-je ?",
    description:
      "Je suis un développeur passionné par la création d'applications web modernes et performantes. Mon expertise couvre l'ensemble de la stack web, du front-end au back-end.",
  },
  {
    title: "Mes compétences",
    description:
      "React, TypeScript, Node.js, Python, et bien plus encore. Je m'efforce constamment d'apprendre de nouvelles technologies pour rester à la pointe de l'innovation.",
  },
  {
    title: "Mon approche",
    description:
      "Je privilégie une approche centrée sur l'utilisateur, en créant des interfaces intuitives et des expériences utilisateur exceptionnelles.",
  },
  {
    title: "Mes projets",
    description:
      "J'ai travaillé sur divers projets, des applications web aux solutions d'entreprise, en mettant l'accent sur la qualité du code et la performance.",
  },
];

export default function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  return (
    <>
      <section className="flex justify-center items-center -mt-8 mb-8">
        <Button size="lg" onClick={() => setIsModalOpen(true)}>
          Click here to know more about me
        </Button>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex justify-center items-center h-screen w-full">
          <div className="w-full max-w-4xl mx-auto">
            <StickyScroll content={aboutContent} />
          </div>
        </div>
      </Modal>
    </>
  );
}
