import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import testimonialsData from "@/data/testimonials.json";
import { cn } from "@/lib/utils";
import { caveat } from "@/app/[locale]/fonts";
import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const t = useTranslations("HomePage");

  const translatedTestimonials = testimonialsData.testimonials.map((testimonial) => ({
    quote: t(testimonial.quoteKey),
    name: t(testimonial.nameKey),
    title: t(testimonial.titleKey)
  }));

  return (
    <section className="bg-transparent relative">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-2">
        <div className="container mx-auto px-4 col-span-1 ">
          <p
            className={cn(
              caveat.className,
              "text-4xl transform xl:rotate-[-15deg] xl:-translate-x-1/3 whitespace-pre-line flex flex-col justify-center items-center text-center xl:w-4/3 font-semibold"
            )}
          >
            {t("testimonials.title")}
          </p>
        </div>
        <div className="container mx-auto px-4 col-span-2">
          <InfiniteMovingCards
            items={translatedTestimonials}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
}
