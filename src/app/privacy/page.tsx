"use client"
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundPixelStars from '@/components/ui/background-pixel-stars';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white relative pt-32 pb-32 px-6">
      <div className="absolute inset-0 z-0 grayscale opacity-30">
        <BackgroundPixelStars />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl font-medium tracking-tight mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-white/60 font-light mb-8">
              Your privacy is paramount. Blinky is designed with strict boundaries to protect your data.
            </p>
            <div className="bg-[#111] border border-white/10 rounded-2xl p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-medium mb-2">Local-First Processing</h2>
                <p className="text-white/60">Blinky processes most visual inputs locally on your machine. Screen captures are ephemeral and are completely wiped after inference is complete.</p>
              </section>
              <section>
                <h2 className="text-2xl font-medium mb-2">Data Collection</h2>
                <p className="text-white/60">We only collect anonymized telemetry related to agent failure rates. We never collect the contents of your screen, your files, or your conversational prompts unless you explicitly submit a bug report.</p>
              </section>
              <section>
                <h2 className="text-2xl font-medium mb-2">Security</h2>
                <p className="text-white/60">Blinky's network connections are encrypted end-to-end. The companion mobile app connects to your desktop using secure, authenticated WebRTC channels.</p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
