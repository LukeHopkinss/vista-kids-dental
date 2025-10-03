// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// ---- Site constants (set these in your .env/.env.local) ----
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Vista Kids Dental";
const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL  ?? "https://www.vistakidsdental.com"; 

export const metadata: Metadata = {
  // Ensures all relative URLs (OG images, canonicals, twitter images) resolve to absolute URLs
  metadataBase: new URL(SITE_URL),

  // Page titles
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },

  // Global description (pages can override)
  description:
    "Pediatric dentistry for infants, children, and teens — gentle visits, prevention-first care, digital X-rays, and same-day emergency help.",

  applicationName: SITE_NAME,
  // Optional: keywords to give search engines more context
  keywords: [
    "pediatric dentist",
    "children's dentistry",
    "sealants",
    "nitrous oxide",
    "digital X-rays",
    "Vista dentist",
  ],

  // Open Graph defaults (homepage specifics can be set in app/page.tsx)
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/",                  // relative (resolved by metadataBase)
    title: SITE_NAME,
    description:
      "Gentle pediatric dental care with prevention-first philosophy and age-appropriate guidance.",
    images: ["/fulllogo.jpg"],       
  },

  // Twitter Card defaults
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Gentle pediatric dental care with prevention-first philosophy and age-appropriate guidance.",
    images: ["/og.jpg"],       // relative is fine thanks to metadataBase
    // site: "@YourPractice",   // optional handle
    // creator: "@DoctorHandle" // optional handle
  },

  // Crawl directives
  robots: {
    index: true,
    follow: true,
    // Optional: richer control
    // googleBot: {
    //   index: true,
    //   follow: true,
    //   "max-image-preview": "large",
    //   "max-snippet": -1,
    //   "max-video-preview": -1,
    // },
  },

  // Favicons (you can also use app/icon.png & app/apple-icon.png file conventions)
  icons: {
    icon: "/favicon.ico",
    apple: "/icononly_transparent.png",
  },

  // Optional: if you have a web manifest
  // manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans text-slate-800 bg-white">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
