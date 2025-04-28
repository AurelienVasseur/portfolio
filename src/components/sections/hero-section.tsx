"use client";

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
import { FireEffect } from "../ui/fire-effect";
import Link from "next/link";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="h-screen mx-auto max-w-5xl w-full fixed space-y-24 pt-12 md:pt-24 lg:pt-32">
      <Link href="/" className="mr-6 flex flex-col space-x-3 space-y-2 items-center justify-center">
        <Avatar className="size-12">
          <AvatarImage src="/aurelien.jpg" />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
        <span className="font-normal">Hi, I&apos;m Aurélien</span>
      </Link>
      <div className="grid gap-4 md:grid-cols-5">
        <Card className="col-span-5 bg-muted/50 py-0">
          <BackgroundLines className="w-full h-full rounded-xl bg-white dark:bg-black">
            <CardContent className="relative flex flex-col items-center space-y-8 md:space-y-8 p-6 md:p-12 pt-16 md:pt-16 pb-24 md:pb-24">
              <Badge
                variant="outline"
                className="rounded-full px-4 py-1 text-sm md:text-md font-normal"
              >
                #OneMonthOneProject
              </Badge>
              <div className="space-y-2 md:space-y-4 items-start w-full mt-2 md:mt-5">
                <h1 className="text-3xl md:text-5xl lg:text-[4rem] font-normal leading-tight tracking-tight">
                  SaaS builder
                </h1>
                <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-normal leading-tight tracking-tight text-muted-foreground">
                  Passionate engineer
                </h2>
              </div>
            </CardContent>
          </BackgroundLines>
        </Card>
        <Card
          className="p-6 md:p-12 py-4 md:py-6 col-span-5 lg:col-span-2 relative overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer"
          onClick={() => {
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <FireEffect />
          <CardContent className="flex items-center justify-between p-0 relative z-10">
            <p className="text-base md:text-lg font-normal">
              {projectsData.projects.length} projects released
            </p>
          </CardContent>
        </Card>

        <Card className="flex items-start lg:items-center justify-center p-6 md:p-12 py-4 md:py-6 col-span-5 lg:col-span-3">
          <CardContent className="flex flex-wrap gap-2 md:gap-4 p-0 items-end justify-center md:justify-start">
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
      <div
        onClick={() => {
          document
            .getElementById("menu")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity mt-8 animate-bounce"
      >
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <div className="w-8 h-8 rounded-full border-2 border-muted-foreground flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
