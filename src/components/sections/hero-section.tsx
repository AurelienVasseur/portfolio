import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section className="space-y-6 py-24 md:py-32">
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-2 p-6">
          <CardContent className="flex flex-col items-start space-y-4">
            <Badge variant="outline" className="text-sm">
              #OneWeekOneProject
            </Badge>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                SaaS builder
              </h1>
              <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl">
                Passionate engineer
              </h2>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardContent className="flex items-center justify-between">
            <p className="text-lg font-medium">
              16 projects released
            </p>
            <span className="text-2xl">🔥</span>
          </CardContent>
        </Card>

        <Card className="flex items-center justify-center p-6">
          <CardContent className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-muted" />
            <div className="h-3 w-3 rounded-full bg-muted" />
            <div className="h-3 w-3 rounded-full bg-muted" />
            <div className="h-3 w-3 rounded-full bg-muted" />
            <div className="h-3 w-3 rounded-full bg-muted" />
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 