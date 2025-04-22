'use client'

import { cn } from "@/lib/utils"
import { useScroll } from "@/hooks/use-scroll"
import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  const scrolled = useScroll()

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      scrolled && "border-b shadow-sm"
    )}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/aurelien.jpg"
                  alt="Aurélien's profile picture"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="hidden font-normal sm:inline-block">
                Hi, I&apos;m Aurélien
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 