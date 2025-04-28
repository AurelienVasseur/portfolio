import React from "react";
import { CardContent } from "../ui/card";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section>
      <div className="grid gap-4 md:grid-cols-5">
        <Link href="https://www.linkedin.com/in/aurelien-vasseur/" target="_blank" rel="noopener noreferrer" className="col-span-5">
        <Card className="col-span-5 bg-muted/50 p-0 overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer">
          <BackgroundGradientAnimation className="w-full">
            <CardContent className="relative flex flex-col items-center space-y-4 md:space-y-8 p-6 md:p-12 pt-8 md:pt-16 pb-12 md:pb-24">
              <Badge
                variant="outline"
                className="rounded-full px-4 py-1 text-sm md:text-md font-normal text-white"
              >
                Contact me - LinkedIn only
              </Badge>
              <div className="space-y-2 md:space-y-4 items-start w-full mt-2 md:mt-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-normal leading-tight tracking-tight text-white">
                  Let&apos;s talk
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] font-normal leading-tight tracking-tight text-white/70">
                  I&apos;m always looking for new opportunities
                </h2>
              </div>
            </CardContent>
          </BackgroundGradientAnimation>
        </Card>
        </Link>
      </div>
    </section>
  );
}
