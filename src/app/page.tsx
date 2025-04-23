import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SiteHeader } from "@/components/layout/site-header"
import { Footer } from "@/components/layout/footer"
import { ExperiencesSection } from "@/components/sections/experiences-section"
import AboutMe from "@/components/sections/about-me"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4">
          <HeroSection />
          <AboutMe />
          <ExperiencesSection />
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
