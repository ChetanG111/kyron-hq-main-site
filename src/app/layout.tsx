import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KyronHQ — Execution Systems",
  description: "Automation, software, and infrastructure—engineered for leverage.",
  keywords: ["automation", "software", "infrastructure", "execution systems", "KyronHQ"],
  authors: [{ name: "KyronHQ" }],
  openGraph: {
    title: "KyronHQ — Execution Systems",
    description: "Automation, software, and infrastructure—engineered for leverage.",
    type: "website",
    siteName: "KyronHQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "KyronHQ — Execution Systems",
    description: "Automation, software, and infrastructure—engineered for leverage.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg text-text-primary`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
