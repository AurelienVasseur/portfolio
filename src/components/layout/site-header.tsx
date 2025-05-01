"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { ThemeToggle } from "../ui/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";

const sectionTitles: Record<string, string> = {
  hero: "Hi, I'm Aurélien",
  about: "About Me",
  experiences: "My Experiences",
  projects: "My Projects",
  contact: "Get in Touch",
};

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = Object.keys(sectionTitles)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const handleMouseMove = (e: MouseEvent) => {
      const y = e.clientY;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (y >= rect.top && y <= rect.bottom) {
          if (section.id !== activeSection) {
            setActiveSection(section.id);
          }
          break;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [activeSection]);

  return (
    <header id="header" className={cn("sticky top-0 z-50 pt-5")}>
      <div className="shadow-sm bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-2xl">
        <div className="mx-auto max-w-5xl px-4 py-1">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="mr-6 flex items-center space-x-3 overflow-hidden h-11"
              >
                <Avatar className="size-11">
                  <AvatarImage src="/aurelien.jpg" />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>

                <div className="relative w-40 h-11 overflow-hidden">
                  <AnimatePresence initial={false} mode="popLayout">
                    <motion.span
                      key={activeSection}
                      initial={{ y: -40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 40, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex items-center font-normal"
                    >
                      {sectionTitles[activeSection]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
