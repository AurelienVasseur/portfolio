"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import AboutMe from "@/components/sections/about-me";
import ContactSection from "@/components/sections/contact-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import IntroductionSection from "@/components/sections/introduction-section";
export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* <SiteHeader /> */}
      {/* <DotBackground /> */}
      <main className="flex-1" style={{ background: "oklch(0.145 0 0)" }}>
        <div className="dark bg-background text-foreground flex justify-center items-center h-screen relative">
          <HeroSection />
        </div>
        <div className="h-[120vh] relative z-10  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/10 rounded-t-4xl flex flex-col justify-center items-center">
          <div className="flex items-center flex-col gap-4">
            <IntroductionSection />
          </div>
        </div>
        <div className="bg-background relative  z-20  shadow-2xl">
          <div className=" flex flex-col px-8 pt-10 space-y-40 mx-auto max-w-5xl">
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
    </div>
  );
}
