import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("HomePage");

  return (
    <footer className="px-10 mt-16">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          {t("footer.text")}
        </p>
      </div>
    </footer>
  )
} 