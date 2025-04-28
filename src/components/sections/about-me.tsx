"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Modal } from "../ui/modal";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import aboutData from "@/data/about.json";
import { FloatingDock } from "../ui/floating-dock";
import { IconHome, IconTerminal2, IconNewSection, IconExchange, IconBrandX, IconBrandGithub } from "@tabler/icons-react";

export default function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
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
    <>
      <section className="flex justify-center items-center">
      <FloatingDock
        items={links}
      />
      
        <Button size="lg" onClick={() => setIsModalOpen(true)}>
          Click here to know more about me
        </Button>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex justify-center items-center h-screen w-full bg-neutral-900">
          <div className="w-full max-w-4xl mx-auto">
            <StickyScroll content={aboutData.sections} />
          </div>
        </div>
      </Modal>
    </>
  );
}
