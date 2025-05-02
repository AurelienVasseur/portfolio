"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const locales = ["en", "fr"];

export function LocaleSwitcher({
  handleLocaleChange,
  activeLocale,
}: {
  handleLocaleChange: (newLocale: string) => void;
  activeLocale: string;
}) {
  return (
    <Select value={activeLocale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="fr">Français</SelectItem>
      </SelectContent>
    </Select>
  );
}
