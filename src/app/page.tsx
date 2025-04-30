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
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

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
      }, 1000);
    }
  };

  const scrollToTop = () => {
    if (locked.current) return;
    locked.current = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      locked.current = false;
    }, 1000);
  };

  // Blocage/déblocage du scroll
  useEffect(() => {
    /*if (contentInView) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }*/
  }, [heroInView, menuInView, contentInView]);

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

  // ESCAPE dans menu => retour au hero
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuInView && !locked.current) {
        e.preventDefault();
        scrollToTop();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
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
    <div className="relative flex min-h-screen flex-col hide-scrollbar">
      {/* <SiteHeader /> */}
      {/* <DotBackground /> */}
      <main
        className="flex-1 hide-scrollbar"
        style={{ background: "oklch(0.145 0 0)" }}
      >
        <div
          ref={heroRef}
          id="hero"
          className="dark bg-background text-foreground flex justify-center items-center h-screen relative"
        >
          <HeroSection />
        </div>
        <div
          id="menu"
          ref={menuRef}
          className="z-10 h-[120vh] w-full bg-green-50 backdrop-blur supports-[backdrop-filter]:bg-background/10 rounded-t-4xl flex justify-center items-center"
        >
          <MenuSection />
        </div>
        <div
          id="content"
          ref={contentRef}
          className="bg-background relative overflow-y-auto hide-scrollbar h-[100vh] z-20  shadow-2xl"
        >
          {/* <div className="h-screen w-full bg-red-500 relative z-5">
          </div> */}
          <div className=" flex flex-col px-8 pt-10 space-y-24 md:space-y-32 mx-auto max-w-5xl hide-scrollbar">
            <SiteHeader />

            <AboutMe />
            <ExperiencesSection />
            <ProjectsSection />
            <ContactSection />
            <TestimonialsSection />
            <Footer />
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 right-0 h-10 bg-red-500 z-500">
        {/* <p>test: {section}</p> */}
      </div>
    </div>
  );
}
