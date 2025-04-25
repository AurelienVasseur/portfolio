import React from "react";
import { CardContent } from "../ui/card";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export default function ContactSection() {
  return (
    <section className="space-y-4 py-24 md:py-32">
      <div className="grid gap-4 md:grid-cols-5">
        <Card className="col-span-5 bg-muted/50 p-0 overflow-hidden">
          <BackgroundGradientAnimation className="w-full">
            <CardContent className="relative flex flex-col items-center space-y-8 p-12 pt-16 pb-24">
              <Badge
                variant="outline"
                className="rounded-full px-4 py-1 text-md font-normal text-white"
              >
                Contact me
              </Badge>
              <div className="space-y-4 items-start w-full mt-5">
                <h1 className="text-[4rem] font-normal leading-none tracking-tight text-white">
                  Let&apos;s talk
                </h1>
                <h2 className="text-[4rem] font-normal leading-none tracking-tight text-white/70">
                  I&apos;m always looking for new opportunities
                </h2>
              </div>
            </CardContent>
          </BackgroundGradientAnimation>
        </Card>
      </div>
    </section>
  );
}
