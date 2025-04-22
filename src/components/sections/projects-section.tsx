import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Project {
  title: string
  week: number
  githubUrl: string
  demoUrl: string
}

const projects: Project[] = [
  {
    title: "Camp UI",
    week: 1,
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Nike UI",
    week: 1,
    githubUrl: "#",
    demoUrl: "#"
  }
]

export function ProjectsSection() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{project.title}</CardTitle>
                <span className="text-sm text-muted-foreground">Week #{project.week}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full bg-muted" />
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={project.githubUrl}>GitHub</Link>
              </Button>
              <Button asChild size="sm">
                <Link href={project.demoUrl}>Jump!</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
} 