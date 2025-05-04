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
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export function HeroSection({ className }: { className?: string }) {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const t = useTranslations("HomePage");

  return (
    <section
      id="hero"
      className={cn(
        "w-full space-y-24 flex flex-col justify-center",
        className
      )}
    >
      <motion.div
        className="flex flex-col space-y-7"
        style={{
          scale,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10,
          mass: 0.5,
        }}
      >
        <Link
          href="/"
          className="mr-6 hidden md:flex flex-col space-x-3 space-y-2 items-center justify-center"
        >
          <Avatar className="size-12">
            <AvatarImage src="/aurelien.jpg" />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
          <span className="font-normal">{t("hero.greeting")}</span>
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
                  <h1 className="text-2xl md:text-5xl lg:text-[4rem] font-normal leading-tight tracking-tight">
                    {t("hero.title")}
                  </h1>
                  <h2 className="text-2xl md:text-5xl lg:text-[4rem] font-normal leading-tight tracking-tight text-muted-foreground">
                    {t("hero.subtitle")}
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
                {t("hero.projectsCount", {
                  count: projectsData.projects.length,
                })}
              </p>
            </CardContent>
          </Card>

          <Card className="hidden md:flex items-start lg:items-center justify-center p-6 md:p-12 py-4 md:py-6 col-span-5 lg:col-span-3">
            <CardContent className="flex flex-wrap gap-2 md:gap-4 p-0 items-end justify-center md:justify-start">
              <TooltipProvider>
                {[
                  {
                    name: t("technologies.javascript"),
                    image: "/javascript.png",
                    fallback: "JS",
                  },
                  {
                    name: t("technologies.typescript"),
                    image: "/typescript.png",
                    fallback: "TS",
                  },
                  {
                    name: t("technologies.nextjs"),
                    image: "/nextjs.png",
                    fallback: "NX",
                  },
                  {
                    name: t("technologies.shadcnui"),
                    image: "/shadcnui.png",
                    fallback: "SH",
                  },
                  {
                    name: t("technologies.supabase"),
                    image: "/supabase.png",
                    fallback: "SB",
                  },
                  {
                    name: t("technologies.mongodb"),
                    image: "/mongodb.png",
                    fallback: "MO",
                  },
                  {
                    name: t("technologies.tailwind"),
                    image: "/tailwindcss.png",
                    fallback: "TC",
                  },
                  {
                    name: t("technologies.vercel"),
                    image: "/vercel.svg",
                    fallback: "VC",
                  },
                  {
                    name: t("technologies.heroku"),
                    image: "/heroku.png",
                    fallback: "HK",
                  },
                  {
                    name: t("technologies.andMore"),
                    image: "",
                    fallback: <Ellipsis />,
                  },
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
        {/*<div
          onClick={() => {
            document
              .getElementById("header")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex md:hidden flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity mt-8 animate-bounce"
        >
          <span className="text-sm text-muted-foreground">
            {t("hero.scrollToExplore")}
          </span>
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
        </div>*/}
      </motion.div>
    </section>
  );
}
