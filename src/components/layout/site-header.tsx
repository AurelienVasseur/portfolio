"use client";

import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { ThemeToggle } from "../ui/theme-toggle";

export function SiteHeader() {
  const scrolled = useScroll();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="mx-auto max-w-5xl px-4 py-1">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-3">
              <Avatar className="size-11">
                <AvatarImage src="/aurelien.jpg" />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
              <span className="font-normal">
                Hi, I&apos;m Aurélien
              </span>
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
