import { useTranslations } from "next-intl";
import packageJson from "../../../package.json";

export function Footer() {
  const t = useTranslations("HomePage");
  const commitSha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7);

  return (
    <footer className="px-10 mt-16 mb-10 text-xs leading-loose text-muted-foreground">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24">
        <p className="text-center">{t("footer.text")}</p>
        <p className="text-center">
          {t("footer.version", { version: packageJson.version })}
          {commitSha && ` - ${t("footer.commit", { commit: commitSha })}`}
        </p>
      </div>
    </footer>
  );
}
