"use client";

import React, { useState, useEffect } from "react";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconHome,
  IconTerminal2,
  IconNewSection,
  IconExchange,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMessage,
  IconKeyboard,
  IconArrowBack,
  IconArrowForward,
} from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function MenuSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const links = [
    {
      title: "Learn more about me",
      icon: (
        <Avatar className="size-11">
          <AvatarImage src="/aurelien.jpg" />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
      ),
      id: "content",
      scrollBlock: "start",
    },
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      scrollToTop: true,
    },
    {
      title: "Experiences",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      id: "experiences",
      scrollBlock: "center",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      id: "projects",
      scrollBlock: "start",
    },
    /*{
      title: "#OneMonthOneProject challenge",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },*/
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/AurelienVasseur",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/aurelien-vasseur/",
    },
    {
      title: "Contact",
      icon: (
        <IconMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      id: "contact",
      scrollBlock: "center",
    },
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-row items-center rounded-full">
        <FloatingDock items={links.map(link => ({
          ...link,
          scrollBlock: link.scrollBlock as "center" | "start" | undefined
        }))} />
      </div>
      <div className="flex items-center gap-4 text-xs text-neutral-400 dark:text-neutral-500">
        <div className="flex items-center gap-1">
          <IconArrowBack className="h-3 w-3" />
          <span>Press</span>
          <kbd className="flex items-center gap-1 rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 dark:border-neutral-700 dark:bg-neutral-800">
            <IconKeyboard className="h-3 w-3" />
            <span>Esc</span>
          </kbd>
          <span>to close</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Press</span>
          <kbd className="flex items-center gap-1 rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 dark:border-neutral-700 dark:bg-neutral-800">
            <IconKeyboard className="h-3 w-3" />
            <span>Enter</span>
          </kbd>
          <span>or</span>
          <kbd className="flex items-center gap-1 rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 dark:border-neutral-700 dark:bg-neutral-800">
            <IconKeyboard className="h-3 w-3" />
            <span>Space</span>
          </kbd>
          <span>to continue</span>
          <IconArrowForward className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}
