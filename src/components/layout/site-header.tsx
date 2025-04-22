'use client'

import { cn } from "@/lib/utils"
import { useScroll } from "@/hooks/use-scroll"
import Link from "next/link"

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
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">
                Portfolio
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 