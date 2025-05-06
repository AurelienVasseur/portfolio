"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { ThemeToggle } from "../ui/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";
import { locales, LocaleSwitcher } from "../ui/locale-switcher";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";

export function Header() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations("HomePage");
  const tLocales = useTranslations("Locales");

  const [activeSection, setActiveSection] = useState("hero");
  const [isLocaleChanging, setIsLocaleChanging] = useState(false);
  const [isChangingEnd, setIsChangingEnd] = useState(false);
  const [activeLocale, setActiveLocale] = useState(locale);
  const [isNewLocaleJapanese, setIsNewLocaleJapanese] = useState(false);
  const [japaneseMessageIndex, setJapaneseMessageIndex] = useState(0);
  const [isJapaneseEasterEgg, setIsJapaneseEasterEgg] = useState(false);

  const japaneseMessages = [
    tLocales("Japanese.messages.didYouUnderstand"),
    tLocales("Japanese.messages.notMe"),
    tLocales("Japanese.messages.letsStayInEnglish"),
  ];

  const messageDuration = 2000;

  useEffect(() => {
    const sections = ["hero", "about", "experiences", "projects", "contact"]
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
    setIsJapaneseEasterEgg(newLocale === "ja");
    setIsLocaleChanging(true);
    setTimeout(() => {
      setActiveLocale(newLocale);
      if (newLocale === "ja") {
        setTimeout(() => {
          setIsChangingEnd(true);
          setIsNewLocaleJapanese(true);
          japaneseMessages.forEach((message, index) => {
            setTimeout(() => {
              setJapaneseMessageIndex(index);
            }, messageDuration * index);
          });

          setTimeout(() => {
            setIsNewLocaleJapanese(false);
            setActiveLocale(locale);
            setTimeout(() => {
              setIsLocaleChanging(false);
              setTimeout(() => {
                setIsChangingEnd(false);
              }, 1000);
            }, 1000);
          }, messageDuration * japaneseMessages.length);
        }, messageDuration);
      } else {
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
          }, 700);
        }, messageDuration);
      }
    }, messageDuration);
  };

  return (
    <>
      <AnimatePresence>
        {!isLocaleChanging && (
          <motion.header
            id="header"
            key="header"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className={cn("sticky top-0 z-50 pt-5 px-8 mx-auto max-w-5xl")}
          >
            <div className="shadow-sm bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-2xl overflow-hidden">
              <div className="mx-auto max-w-5xl px-4 py-1">
                <div className="flex h-14 items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-6 flex justify-center items-center gap-3 h-11">
                      <Avatar className="size-11">
                        <AvatarImage src="/aurelien.jpg" />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div className="hidden md:flex items-center">
                        <AnimatePresence initial={false} mode="popLayout">
                          <motion.span
                            key={activeSection}
                            initial={{ y: -40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 40, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="font-normal text-nowrap"
                          >
                            {t(`header.sections.${activeSection}`)}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 md:gap-4">
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
            className={cn(
              "fixed top-0 left-0 w-full h-full z-50 bg-background text-foreground md:bg-foreground md:text-background md:dark:bg-background md:dark:text-foreground",
              isJapaneseEasterEgg && "md:bg-background md:text-foreground"
            )}
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
                      exit={{
                        y:
                          locale === l.locale || activeLocale === "ja" ? 80 : 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.7,
                        opacity: { type: "tween" },
                        y: { type: "spring" },
                        stiffness: 100,
                        damping: 10,
                      }}
                      className="fixed w-full h-full flex items-center justify-center text-2xl"
                    >
                      {l.message}
                    </motion.span>
                  )
              )}
              {isNewLocaleJapanese && (
                <motion.span
                  key={japaneseMessageIndex}
                  initial={{ y: -80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 80, opacity: 0 }}
                  transition={{
                    duration: 0.7,
                    opacity: { type: "tween" },
                    y: { type: "spring" },
                    stiffness: 100,
                    damping: 10,
                  }}
                  className=" fixed w-full h-full flex items-center justify-center text-2xl"
                >
                  {japaneseMessages[japaneseMessageIndex]}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
