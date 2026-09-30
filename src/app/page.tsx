"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HeroInteractive } from '@/components/sections/hero-interactive';
import { DemoVideo } from '@/components/ui/demo-video';
import BackgroundPixelStars from '@/components/ui/background-pixel-stars';
import Link from 'next/link';

function CTASection() {
  return (
    <section className="py-32 px-6 md:px-12 w-full flex flex-col items-center text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundPixelStars />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#FF5A1F]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        
        <div className="flex justify-center mb-8">
          <img src="/blinky_mascot_logo.png" alt="Blinky" className="w-32 h-32 object-contain drop-shadow-2xl" />
        </div>
        
        <h2 className="text-5xl md:text-7xl font-medium mb-16 leading-tight tracking-tight">
          Tell Blinky.<br/>Get it done.
        </h2>

        <div className="w-full relative group mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5A1F]/0 via-[#FF5A1F]/30 to-[#FF5A1F]/0 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative flex items-center bg-[#111] border border-white/10 rounded-full px-8 py-6 shadow-2xl cursor-text">
            <span className="text-white/40 text-xl font-light">What should Blinky do?</span>
            <div className="ml-auto w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          <Link href="https://github.com/KingSahil/Blinky/releases" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-full font-semibold text-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2">
            Download for Windows
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
          <Link href="https://github.com/KingSahil/Blinky/" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-5 rounded-full font-medium text-lg text-white/80 hover:text-white transition-all flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5">
            View on GitHub
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>
      
      </motion.div>
    </section>
  );
}

export default function BlinkyLandingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* 1. Core Hero */}
      <HeroInteractive />
      
      {/* 2. Short Product Proof */}
      <section className="py-24 px-6 md:px-12 w-full max-w-[1200px] mx-auto text-center border-t border-white/5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
            The computer companion you've been waiting for.
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-16 font-light">
            Blinky is a fully autonomous agent that lives on your desktop. It sees what you see, listens to your voice, and uses your computer to get things done.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/demo" className="px-8 py-4 bg-[#111] hover:bg-white/10 border border-white/10 rounded-full transition-colors font-medium">
              Watch Demo
            </Link>
            <Link href="/features" className="px-8 py-4 bg-[#111] hover:bg-white/10 border border-white/10 rounded-full transition-colors font-medium">
              Explore Features
            </Link>
            <Link href="/quick-actions" className="px-8 py-4 bg-[#111] hover:bg-white/10 border border-white/10 rounded-full transition-colors font-medium">
              See Quick Actions
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 3. CTA */}
      <CTASection />
    </div>
  );
}
