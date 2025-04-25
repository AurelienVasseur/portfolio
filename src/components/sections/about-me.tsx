"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Modal } from "../ui/modal";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import aboutData from "@/data/about.json";

export default function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <section className="flex justify-center items-center -mt-8 mb-8">
        <Button size="lg" onClick={() => setIsModalOpen(true)}>
          Click here to know more about me
        </Button>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex justify-center items-center h-screen w-full">
          <div className="w-full max-w-4xl mx-auto">
            <StickyScroll content={aboutData.sections} />
          </div>
        </div>
      </Modal>
    </>
  );
}
