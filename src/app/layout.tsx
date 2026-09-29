import { Inter, Outfit } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import AnimatedWaveFooter from "@/components/ui/animated-wave-footer";

const astonpoliz = localFont({ 
  src: '../../public/fonts/Astonpoliz.ttf',
  variable: '--font-astonpoliz'
});

const okineSans = localFont({
  src: [
    {
      path: '../../public/fonts/MADEOkineSansPERSONALUSE-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MADEOkineSansPERSONALUSE-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MADEOkineSansPERSONALUSE-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MADEOkineSansPERSONALUSE-Light.otf',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-okine'
});

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://blinky.so"),
  title: "Blinky — Your Computer Companion",
  description: "Blinky is an AI desktop tutor, autonomous computer-use agent, and workstation companion.",
  keywords: [
    "AI", "desktop assistant", "automation", "computer vision", 
    "Blinky", "AI agent", "productivity", "macOS", "Windows"
  ],
  authors: [{ name: "Blinky Team" }],
  creator: "Blinky",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blinky.so",
    title: "Blinky — Your Computer Companion",
    description: "Blinky is an AI desktop tutor, autonomous computer-use agent, and workstation companion.",
    siteName: "Blinky",
    images: [
      {
        url: "/logo + text.png",
        width: 1200,
        height: 630,
        alt: "Blinky Logo",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blinky — Your Computer Companion",
    description: "Blinky is an AI desktop tutor, autonomous computer-use agent, and workstation companion.",
    images: ["/logo + text.png"],
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${okineSans.variable} ${astonpoliz.variable} min-h-screen bg-[#000000] text-white overflow-x-hidden font-sans selection:bg-[#FF5A1F] selection:text-white flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <AnimatedWaveFooter />
      </body>
    </html>
  );
}
