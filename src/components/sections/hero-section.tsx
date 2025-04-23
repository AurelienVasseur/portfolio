import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import projectsData from "@/data/projects.json";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Ellipsis } from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";
import { BackgroundLines } from "../ui/background-lines";

export function HeroSection() {
  return (
    <section className="space-y-4 py-24 md:py-32">
      <div className="grid gap-4 md:grid-cols-5">
        <Card className="col-span-5 bg-muted/50 py-0">
          <BackgroundLines className="w-full h-full rounded-xl bg-white dark:bg-black">
            <CardContent className="relative flex flex-col items-center space-y-8 p-12 pt-16 pb-24">
              <Badge
                variant="outline"
                className="rounded-full px-4 py-1 text-md font-normal"
              >
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
          </BackgroundLines>
        </Card>
        <Card className="p-12 py-6 col-span-2">
          <CardContent className="flex items-center justify-between p-0">
            <p className="text-lg font-normal">
              {projectsData.projects.length} projects released
            </p>
            <span className="text-2xl">🔥</span>
          </CardContent>
        </Card>

        <Card className="flex items-center justify-center p-12 py-6 col-span-3">
          <CardContent className="flex gap-4 p-0 items-end">
            <TooltipProvider>
              {[
                {
                  name: "JavaScript",
                  image: "/javascript.png",
                  fallback: "JS",
                },
                {
                  name: "TypeScript",
                  image: "/typescript.png",
                  fallback: "TS",
                },
                { name: "Next.js", image: "/nextjs.png", fallback: "NX" },
                { name: "Shadcn/ui", image: "/shadcnui.png", fallback: "SH" },
                { name: "Supabase", image: "/supabase.png", fallback: "SB" },
                { name: "MongoDB", image: "/mongodb.png", fallback: "MO" },
                {
                  name: "Tailwind CSS",
                  image: "/tailwindcss.png",
                  fallback: "TC",
                },
                { name: "Vercel", image: "/vercel.svg", fallback: "VC" },
                { name: "Heroku", image: "/heroku.png", fallback: "HK" },
                { name: "And more...", image: "", fallback: <Ellipsis /> },
              ].map((e) => (
                <Tooltip key={e.name}>
                  <TooltipTrigger>
                    <Avatar>
                      <AvatarImage src={e.image} className="object-contain" />
                      <AvatarFallback>{e.fallback}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{e.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
