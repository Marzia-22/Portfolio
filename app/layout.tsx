import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

const baseUrl = "https://marziatasneem.dev";

export const metadata: Metadata = {
  title: "Marzia Tasneem | CSE Student & Full-Stack Developer",
  description:
    "Portfolio of Marzia Tasneem, a third-year Computer Science student at KLH University building full-stack applications and exploring practical AI.",
  keywords: [
    "Marzia Tasneem",
    "Computer Science",
    "Full Stack Developer",
    "KLH University",
    "React",
    "Next.js",
    "Software Engineering",
    "Portfolio",
    "Hyderabad",
  ],
  authors: [{ name: "Marzia Tasneem" }],
  creator: "Marzia Tasneem",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Marzia Tasneem | CSE Student & Full-Stack Developer",
    description:
      "Building full-stack applications, exploring AI, and learning everything I can. Third-year CSE student at KLH University, Hyderabad.",
    url: baseUrl,
    siteName: "Marzia Tasneem",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marzia Tasneem | CSE Student & Full-Stack Developer",
    description:
      "Building full-stack applications, exploring AI, and learning everything I can.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
