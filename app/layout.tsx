import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

const pageTitle = `${siteConfig.companyName} | Custom AI Assistants for Small Business`;
const pageDescription =
  "We build private, custom AI assistants trained on your documents and workflows. Simple setup for law firms, accounting, and professional services.";
const socialDescription =
  "Private AI assistants trained on your business documents. No technical team required.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: socialDescription,
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.companyName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.tagline,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: socialDescription,
    images: ["/opengraph-image"],
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
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
