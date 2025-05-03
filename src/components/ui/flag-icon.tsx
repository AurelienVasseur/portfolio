import { cn } from "@/lib/utils";
import { Flag } from "lucide-react";

interface FlagIconProps {
  locale: string;
  size?: number;
}

export const getFlagIcon = ({ locale, size = 4 }: FlagIconProps) => {
  const className = `h-${size} w-${size}`;

  switch (locale) {
    case "en":
      return (
        <svg
          className={className}
          viewBox="0 0 640 480"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#012169" d="M0 0h640v480H0z" />
          <path
            fill="#FFF"
            d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
          />
          <path
            fill="#C8102E"
            d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
          />
          <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
          <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
        </svg>
      );
    case "fr":
      return (
        <svg
          className={className}
          viewBox="0 0 640 480"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#fff" d="M0 0h640v480H0z" />
          <path fill="#00267f" d="M0 0h213.3v480H0z" />
          <path fill="#f31830" d="M426.7 0H640v480H426.7z" />
        </svg>
      );
    case "ja":
      return (
        <svg
          className={cn(
            className,
            "border-1 border-foreground/10 dark:border-none"
          )}
          viewBox="0 0 640 480"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#fff" d="M0 0h640v480H0z" />
          <circle cx="320" cy="240" r="160" fill="#bc002d" />
        </svg>
      );
    default:
      return <Flag className={className} />;
  }
};
