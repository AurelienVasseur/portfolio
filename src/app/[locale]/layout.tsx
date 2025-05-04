import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { quicksand } from "./fonts";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: t("author") }],
    creator: t("author"),
    publisher: t("author"),
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: "fr_FR",
      siteName: t("title"),
      images: [
        {
          url: t("images.og"),
          width: 1200,
          height: 630,
          alt: t("images.alt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      creator: t("author"),
      images: [t("images.og")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: t("googleSiteVerification"),
    },
    other: {
      'pinterest-rich-pin': 'true',
      'linkedin:title': t("title"),
      'linkedin:description': t("description"),
      'linkedin:image': t("images.og"),
      'whatsapp:title': t("title"),
      'whatsapp:description': t("description"),
      'whatsapp:image': t("images.og"),
      'telegram:title': t("title"),
      'telegram:description': t("description"),
      'telegram:image': t("images.og"),
    },
  };
}

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

  // ${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable}

  return (
    <html
      lang={locale}
      className={`${quicksand.className} antialiased`}
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
