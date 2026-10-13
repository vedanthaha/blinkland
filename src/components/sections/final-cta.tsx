"use client"
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundPixelStars from '@/components/ui/background-pixel-stars';
import Link from 'next/link';
import { Download, BookOpen, ShieldCheck, Sparkles, Check } from 'lucide-react';

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function FinalCTA() {
  return (
    <section className="py-32 px-6 md:px-12 w-full flex flex-col items-center text-center relative overflow-hidden border-t border-white/[0.08]">
      {/* Background stars & ambient glow */}
      <div className="absolute inset-0 z-0">
        <BackgroundPixelStars />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF5A1F]/[0.08] blur-[140px] rounded-full pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl flex flex-col items-center"
      >
        {/* Mascot */}
        <div className="relative mb-10 group">
          <div className="absolute inset-0 bg-[#FF5A1F] blur-[60px] opacity-25 rounded-full pointer-events-none group-hover:opacity-40 transition-opacity" />
          <img
            src="/blinky_mascot_logo.png"
            alt="Blinky Mascot"
            className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-[0_0_35px_rgba(255,90,31,0.4)] relative z-10 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Headline */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 text-[#FF5A1F] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Ready For Your Desktop
        </div>

        <h2 className="text-5xl md:text-7xl font-light text-white mb-6 leading-[1.08] tracking-tight">
          Tell Blinky. <br />
          <span className="text-[#FF5A1F]">Get it done today.</span>
        </h2>

        <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mb-12 leading-relaxed">
          Experience your first autonomous desktop companion. Free, local-first, and completely open source.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12">
          <a
            href="https://github.com/KingSahil/Blinky/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 bg-white hover:bg-neutral-100 text-black px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2.5 shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:-translate-y-0.5"
          >
            <Download className="w-5 h-5 text-black" />
            <span>Download for Windows</span>
          </a>

          <a
            href="https://github.com/KingSahil/Blinky/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white px-8 py-4 rounded-2xl font-medium text-base transition-all duration-200 flex items-center justify-center gap-2.5 hover:-translate-y-0.5"
          >
            <GithubIcon className="w-5 h-5 text-white/80" />
            <span>GitHub</span>
          </a>
        </div>

        {/* System Requirements & Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/40">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Windows 10 / 11 (64-bit)</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>No Dedicated GPU Required</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FF5A1F]" />
            <span>Local & Private</span>
          </div>
        </div>

        {/* Navigation jump pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/demo"
            className="px-5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-xs font-medium text-white/70 hover:text-white transition-colors"
          >
            Watch Video Demos →
          </Link>
          <Link
            href="/docs"
            className="px-5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-xs font-medium text-white/70 hover:text-white transition-colors"
          >
            Documentation →
          </Link>
          <Link
            href="/faq"
            className="px-5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-xs font-medium text-white/70 hover:text-white transition-colors"
          >
            FAQ →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
