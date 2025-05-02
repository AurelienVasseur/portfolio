"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import AboutMe from "@/components/sections/about-me";
import ContactSection from "@/components/sections/contact-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import MenuSection from "@/components/sections/menu-section";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

export default function Home() {
  const locked = useRef(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { amount: 0.001 });
  const menuInView = useInView(menuRef, { amount: 0.001 });
  const contentInView = useInView(contentRef, { amount: 0.001 });

  const scrollTo = (id: string, block: ScrollLogicalPosition = "start") => {
    if (locked.current) return;
    const el = document.getElementById(id);
    if (el) {
      locked.current = true;
      el.scrollIntoView({ behavior: "smooth", block });
      setTimeout(() => {
        locked.current = false;
      }, 500);
    }
  };

  const scrollToTop = () => {
    if (locked.current) return;
    locked.current = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      locked.current = false;
    }, 500);
  };

  // Toute action dans hero => scroll vers menu
  useEffect(() => {
    const handleHeroInteraction = (e: Event) => {
      if (!heroInView || locked.current) return;
      e.preventDefault();
      scrollTo("menu", "center");
    };

    const heroEvents = ["wheel", "click", "touchstart", "keydown", "mousedown"];
    heroEvents.forEach((evt) =>
      window.addEventListener(evt, handleHeroInteraction, { passive: false })
    );

    return () => {
      heroEvents.forEach((evt) =>
        window.removeEventListener(evt, handleHeroInteraction)
      );
    };
  }, [heroInView]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (locked.current || !menuInView) return;
      if (e.key === "Escape") {
        // ESCAPE dans menu => retour au hero
        e.preventDefault();
        scrollToTop();
      }
      if (e.key === " " || e.key === "Enter") {
        // Enter and space => scroll vers le début du contenu
        e.preventDefault(); // empêche le scroll de la page avec space
        scrollTo("contentStart", "start");
      }
    };
    window.addEventListener("keydown", onKeyDown);

    const onScroll = (e: WheelEvent) => {
      if (locked.current || !menuInView) return;
      // Scroll disabled
      e.preventDefault();
    };
    window.addEventListener("wheel", onScroll, { passive: false });

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("wheel", onScroll);
    };
  }, [menuInView]);

  // Si on est tout en haut de content → scroll vers menu
  useEffect(() => {
    const contentEl = contentRef.current;
    if (!contentEl) return;

    const onContentScroll = () => {
      if (locked.current) return;
      if (!contentInView) return;

      const isScrolledToTop = contentEl.scrollTop === 0;

      if (isScrolledToTop) {
        scrollTo("menu", "center");
      }
    };

    contentEl.addEventListener("scroll", onContentScroll);

    return () => {
      contentEl.removeEventListener("scroll", onContentScroll);
    };
  }, [contentInView]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <main
        className="flex-1 overflow-hidden"
        style={{ background: "oklch(0.145 0 0)" }}
      >
        <AnimatePresence>
          <motion.div
            ref={heroRef}
            id="hero"
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="dark bg-background text-foreground flex justify-center items-center h-screen relative"
          >
            <HeroSection />
          </motion.div>
        </AnimatePresence>
        <div
          id="menu"
          ref={menuRef}
          className="z-10 h-[120vh] w-full transition-all duration-5000 backdrop-blur supports-[backdrop-filter]:bg-background/10 flex justify-center items-center rounded-t-4xl"
        >
          <MenuSection />
        </div>
        <div
          id="content"
          ref={contentRef}
          className="bg-background relative overflow-y-auto h-[100vh] z-20 shadow-2xl"
        >
          <SiteHeader />
          <div id="contentStart" className="h-24 w-full bg-background" />
          <div className="flex flex-col px-8 pt-10 space-y-24 md:space-y-32 mx-auto max-w-5xl">
            <AboutMe />
            <ExperiencesSection />
            <ProjectsSection />
            <ContactSection />
            <TestimonialsSection />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
