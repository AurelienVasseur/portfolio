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
      href: "#",
    },
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#hero",
    },
    {
      title: "Experiences",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "#OneMonthOneProject challenge",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
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
    <div className="flex flex-row items-center rounded-full">
      <FloatingDock items={links.map(link => ({
        ...link,
        scrollBlock: link.scrollBlock as "center" | "start" | undefined
      }))} />
    </div>
  );
}
