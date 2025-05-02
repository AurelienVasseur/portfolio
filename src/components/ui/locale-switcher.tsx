"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getFlagIcon } from "./flag-icon";

export const locales = [{locale:"en", message:"Hello"}, {locale:"fr", message:"Bonjour"}];

export function LocaleSwitcher({
  handleLocaleChange,
  activeLocale,
}: {
  handleLocaleChange: (newLocale: string) => void;
  activeLocale: string;
}) {
  return (
    <Select value={activeLocale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-[60px]">
        <SelectValue placeholder={getFlagIcon({ locale: activeLocale })} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <div className="flex items-center gap-2">
            {getFlagIcon({ locale: "en" })}
          </div>
        </SelectItem>
        <SelectItem value="fr">
          <div className="flex items-center gap-2">
            {getFlagIcon({ locale: "fr" })}
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
