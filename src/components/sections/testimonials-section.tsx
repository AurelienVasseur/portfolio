import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Working with this developer was like having a superhero on our team. They didn't just write code, they saved the world one function at a time!",
    name: "John Smith",
    title: "CTO at TechSaviors Inc.",
  },
  {
    quote:
      "I've never seen someone debug with such precision. It's like they have X-ray vision for code!",
    name: "Sarah Johnson",
    title: "Lead Developer at CodeCraft",
  },
  {
    quote:
      "They don't just solve problems, they prevent them from existing in the first place. It's like having a time machine for bugs!",
    name: "Michael Chen",
    title: "Product Manager at FutureTech",
  },
  {
    quote: "Their code is so clean, it makes Marie Kondo look like a hoarder!",
    name: "Emma Davis",
    title: "Senior Developer at CleanCode",
  },
  {
    quote:
      "I'm pretty sure they can speak binary. The way they optimize code is just... otherworldly!",
    name: "Alex Rivera",
    title: "Tech Lead at BinaryBusters",
  },
];

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
            items={testimonials}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
}
