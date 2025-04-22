import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import projectsData from "@/data/projects.json"

export function HeroSection() {
  return (
    <section className="space-y-4 py-24 md:py-32">
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-2 bg-muted/50 p-12 pt-16 pb-24">
          <CardContent className="flex flex-col items-center space-y-8 p-0">
            <Badge variant="outline" className="rounded-full px-4 py-1 text-md font-normal">
              #OneWeekOneProject
            </Badge>
            <div className="space-y-4 items-start w-full mt-5">
              <h1 className="text-[4rem] font-normal leading-none tracking-tight">
                SaaS builder
              </h1>
              <h2 className="text-[4rem] font-normal leading-none tracking-tight text-muted-foreground">
                Passionate engineer
              </h2>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50 p-12 py-6">
          <CardContent className="flex items-center justify-between p-0">
            <p className="text-lg font-normal">
              {projectsData.projects.length} projects released
            </p>
            <span className="text-2xl">🔥</span>
          </CardContent>
        </Card>

        <Card className="flex items-center justify-center bg-muted/50 p-12 py-6">
          <CardContent className="flex gap-4 p-0">
            <div className="h-4 w-4 rounded-full bg-muted" />
            <div className="h-4 w-4 rounded-full bg-muted" />
            <div className="h-4 w-4 rounded-full bg-muted" />
            <div className="h-4 w-4 rounded-full bg-muted" />
            <div className="h-4 w-4 rounded-full bg-muted" />
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 