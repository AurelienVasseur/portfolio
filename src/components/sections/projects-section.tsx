import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import projectsData from "@/data/projects.json"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{project.name}</CardTitle>
                <Badge variant="secondary" className="rotate-15">Week #{project.id}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full bg-muted">
                <img 
                  src={`/images/${project.imageFile}`} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={project.githubUrl}>GitHub</Link>
              </Button>
              <Button asChild size="sm">
                <Link href={project.websiteUrl}>Jump!</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
} 