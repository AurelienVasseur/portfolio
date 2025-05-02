"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getFlagIcon } from "./flag-icon";

export const locales = [
  { locale: "en", message: "Hello" },
  { locale: "fr", message: "Bonjour" },
];

export function LocaleSwitcher({
  handleLocaleChange,
  activeLocale,
}: {
  handleLocaleChange: (newLocale: string) => void;
  activeLocale: string;
}) {
  return (
    <Select value={activeLocale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-[60px] transition-all bg-transparent border-none focus:ring-0 focus:ring-offset-0 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50">
        <SelectValue placeholder={getFlagIcon({ locale: activeLocale })} />
      </SelectTrigger>
      <SelectContent className="w-auto min-w-0 flex">
        {locales.map((locale) => (
          <SelectItem
            key={locale.locale}
            value={locale.locale}
            className="p-0 pl-10 pr-6 py-3 w-auto min-w-0 flex justify-center items-center gap-2"
          >
            {getFlagIcon({ locale: locale.locale })}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
