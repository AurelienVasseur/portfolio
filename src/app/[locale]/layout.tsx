import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { geistMono, geistSans, jetbrainsMono } from "./fonts";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Hi, I'm Aurélien",
  description: "SaaS builder. Passionate engineer.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  } 

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <NextIntlClientProvider>
        <body className="min-h-screen bg-background font-mono antialiased hide-scrollbar">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
