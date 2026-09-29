"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, Camera, Briefcase, Link2 } from "lucide-react";

export default function AnimatedWaveFooter() {
  return (
    <footer className="relative bg-black border-t border-white/5 pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 h-[300px] w-[200vw] min-w-[3600px] flex animate-[wave_15s_linear_infinite]">
          {/* First Wave SVG */}
          <svg
            className="h-full w-1/2"
            viewBox="0 0 1800 300"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 150C200 50 400 -50 600 0C800 50 1000 250 1200 200C1400 150 1600 50 1800 150V300H0V150Z"
              fill="currentColor"
              className="text-[#FF5A1F]/5"
            />
            <path
              d="M0 150C200 100 400 0 600 50C800 100 1000 250 1200 200C1400 150 1600 100 1800 150V300H0V150Z"
              fill="currentColor"
              className="text-[#FF5A1F]/10"
            />
          </svg>
          {/* Second Wave SVG (Duplicate for seamless loop) */}
          <svg
            className="h-full w-1/2"
            viewBox="0 0 1800 300"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 150C200 50 400 -50 600 0C800 50 1000 250 1200 200C1400 150 1600 50 1800 150V300H0V150Z"
              fill="currentColor"
              className="text-[#FF5A1F]/5"
            />
            <path
              d="M0 150C200 100 400 0 600 50C800 100 1000 250 1200 200C1400 150 1600 100 1800 150V300H0V150Z"
              fill="currentColor"
              className="text-[#FF5A1F]/10"
            />
          </svg>
        </div>
      </div>
      
      <div className="max-w-[1400px] relative z-10 mx-auto px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <div>
            <img src="/logo_text.png" alt="Blinky" className="h-12 w-auto mb-6 object-contain" />
            <p className="text-white/60 text-sm mb-6 max-w-xs leading-relaxed">
              Blinky sees what you see, understands what you ask, and takes care of the computer work.
            </p>
            <form className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80">Get Updates</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="bg-[#111] border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#FF5A1F]"
                />
              </div>
              <Button type="submit" className="w-full bg-white text-black hover:bg-neutral-200">
                Subscribe
              </Button>
            </form>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Product</h3>
            <nav className="space-y-3 text-sm">
              <a href="https://github.com/KingSahil/Blinky/" className="block text-white/60 transition-colors hover:text-[#FF5A1F]">Download</a>
              <a href="/docs" className="block text-white/60 transition-colors hover:text-[#FF5A1F]">Documentation</a>
              <a href="https://github.com/KingSahil/Blinky/releases" className="block text-white/60 transition-colors hover:text-[#FF5A1F]">Changelog</a>
              <a href="/privacy" className="block text-white/60 transition-colors hover:text-[#FF5A1F]">Privacy Policy</a>
              <a href="/faq" className="block text-white/60 transition-colors hover:text-[#FF5A1F]">FAQ</a>
            </nav>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Community</h3>
            <nav className="space-y-3 text-sm">
              <a href="https://github.com/KingSahil/Blinky/" target="_blank" rel="noreferrer" className="block text-white/60 transition-colors hover:text-[#FF5A1F]">GitHub Repository</a>
            </nav>
          </div>
        </div>
        <div className="border-t border-white/10 py-8 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Blinky. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
