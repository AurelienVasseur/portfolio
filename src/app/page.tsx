"use client"

import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import AboutMe from "@/components/sections/about-me";
import ContactSection from "@/components/sections/contact-section";
import TestimonialsSection from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* <SiteHeader /> */}
      {/* <DotBackground /> */}
      <main className="flex-1">
        <div className="bg-red-100 flex justify-center items-center h-screen">
          <HeroSection />
        </div>
        
        <div className="bg-background z-50 px-8 pt-10 space-y-40 rounded-t-4xl shadow-2xl">
          <div className="flex flex-col space-y-40 mx-auto max-w-5xl">
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
