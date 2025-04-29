"use client";

import React, { useState, useEffect } from "react";
import { Modal } from "../ui/modal";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import aboutData from "@/data/about.json";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { BackgroundParticlesAnimation } from "../ui/background-particles-animation";

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
      <section className="flex justify-center items-center">
        <Card 
          className="w-full max-w-4xl bg-muted/50 p-0 overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 to-slate-900">
            <BackgroundParticlesAnimation />
            
            <CardContent className="relative flex flex-col items-center space-y-4 md:space-y-8 p-6 md:p-12 pt-8 md:pt-16 pb-12 md:pb-24">
              <Badge
                variant="outline"
                className="rounded-full px-4 py-1 text-sm md:text-md font-normal text-white"
              >
                About Me
              </Badge>
              <div className="space-y-2 md:space-y-4 items-start w-full mt-2 md:mt-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-normal leading-tight tracking-tight text-white">
                  Know more about me
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-normal leading-tight tracking-tight text-white/70">
                  Discover my journey
                </h2>
              </div>
            </CardContent>
          </div>
        </Card>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex justify-center items-center h-screen w-full bg-neutral-900">
          <div className="w-full max-w-4xl mx-auto">
            <StickyScroll content={aboutData.sections} />
          </div>
        </div>
      </Modal>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, 15px) rotate(5deg);
          }
          50% {
            transform: translate(5px, -10px) rotate(-5deg);
          }
          75% {
            transform: translate(-10px, 5px) rotate(3deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
        
        @keyframes float-particle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translate(15px, -20px) scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: translate(5px, 15px) scale(0.9);
            opacity: 0.4;
          }
          75% {
            transform: translate(-20px, -5px) scale(1.05);
            opacity: 0.5;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
        }
        
        .animate-float {
          animation: float infinite ease-in-out;
        }
        
        .animate-float-particle {
          animation: float-particle infinite ease-in-out;
        }
      `}</style>
    </>
  );
}
