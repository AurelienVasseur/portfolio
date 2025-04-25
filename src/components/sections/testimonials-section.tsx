import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import testimonialsData from "@/data/testimonials.json";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-transparent relative">
      <div className="grid grid-cols-3 gap-2">
        <div className="container mx-auto px-4 col-span-1 ">
          <p className="text-lg font-handwriting transform -rotate-[15deg] -translate-x-1/3 whitespace-pre-line flex flex-col justify-center items-center text-center w-4/3">
            <span className="">
              Still not convinced that I&apos;m the one who will save humanity
              with my undeniable and absolutely mind-blowing skills?{" "}
            </span>
            <br />
            <span>
              Well, read these testimonials and prepare to be amazed! 🚀
            </span>
          </p>
        </div>
        <div className="container mx-auto px-4 col-span-2">
          <InfiniteMovingCards
            items={testimonialsData.testimonials}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
}
