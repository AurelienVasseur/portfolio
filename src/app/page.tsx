import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import AboutMe from "@/components/sections/about-me";
import DotBackground from "@/components/ui/dot-background";
import ContactSection from "@/components/sections/contact-section";
import TestimonialsSection from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <DotBackground />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-8 space-y-40">
          <HeroSection />
          <AboutMe />
          <ExperiencesSection />
          <ProjectsSection />
          <ContactSection />
          <TestimonialsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
