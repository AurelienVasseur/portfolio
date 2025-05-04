import {
  Caveat,
  Geist,
  Geist_Mono,
  Inter,
  JetBrains_Mono,
  Montserrat,
  Roboto_Mono,
  Raleway,
  Quicksand,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
});

export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});
