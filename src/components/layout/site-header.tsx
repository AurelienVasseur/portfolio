"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { ThemeToggle } from "../ui/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";
import { locales, LocaleSwitcher } from "../ui/locale-switcher";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";

const sectionTitles: Record<string, string> = {
  hero: "Hi, I'm Aurélien",
  about: "About Me",
  experiences: "My Experiences",
  projects: "My Projects",
  contact: "Get in Touch",
};

export function SiteHeader() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const [activeSection, setActiveSection] = useState("hero");
  const [isLocaleChanging, setIsLocaleChanging] = useState(false);
  const [isChangingEnd, setIsChangingEnd] = useState(false);
  const [activeLocale, setActiveLocale] = useState(locale);

  useEffect(() => {
    const sections = Object.keys(sectionTitles)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const handleMouseMove = (e: MouseEvent) => {
      const y = e.clientY;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (y >= rect.top && y <= rect.bottom) {
          if (section.id !== activeSection) {
            setActiveSection(section.id);
          }
          break;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [activeSection]);

  const handleLocaleChange = (newLocale: string) => {
    console.log("newLocale", newLocale);

    setIsLocaleChanging(true);
    setTimeout(() => {
      setActiveLocale(newLocale);
      //window.scrollTo({ top: 0, behavior: 'instant' });

      //setIsChanging(false);
      setTimeout(() => {
        setIsChangingEnd(true);
        setTimeout(() => {
          router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            // fixed top-0 left-0 bg-background h-screen w-screen -translate-y-5
            { pathname, params },
            { locale: newLocale }
          );
        }, 1000);
      }, 1500);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {!isLocaleChanging && (
          <motion.header
            id="header"
            key="header"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className={cn("sticky top-0 z-50 pt-5 px-8 mx-auto max-w-5xl")}
          >
            <div className="shadow-sm bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-2xl">
              <div className="mx-auto max-w-5xl px-4 py-1">
                <div className="flex h-14 items-center justify-between">
                  <div className="flex items-center">
                    <Link
                      href="/"
                      className="mr-6 flex items-center space-x-3 overflow-hidden h-11"
                    >
                      <Avatar className="size-11">
                        <AvatarImage src="/aurelien.jpg" />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>

                      <div className="relative w-40 h-11 overflow-hidden">
                        <AnimatePresence initial={false} mode="popLayout">
                          <motion.span
                            key={activeSection}
                            initial={{ y: -40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 40, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 flex items-center font-normal"
                          >
                            {sectionTitles[activeSection]}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                    </Link>
                  </div>
                  <div className="flex items-center space-x-4">
                    <LocaleSwitcher
                      handleLocaleChange={handleLocaleChange}
                      activeLocale={activeLocale}
                    />
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isLocaleChanging && (
          <motion.div
            key="localeSwitcherModal"
            initial={{ bottom: 0, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="dark fixed top-0 left-0 w-full h-full z-50 bg-background"
          >
            <AnimatePresence>
              {locales.map(
                (l) =>
                  activeLocale === l.locale &&
                  !isChangingEnd && (
                    <motion.span
                      key={l.locale}
                      initial={{ y: locale === l.locale ? 0 : -80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: locale === l.locale ? 80 : 0, opacity: 0 }}
                      transition={{ duration: 0.7 }}
                      className=" fixed w-full h-full flex items-center justify-center text-white text-2xl"
                    >
                      {l.message}
                    </motion.span>
                  )
              )}
              <motion.span
                key="isChangingLocaleEnd"
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.7 }}
                className=" fixed w-full h-full flex items-center justify-center"
              ></motion.span>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
