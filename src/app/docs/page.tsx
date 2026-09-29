"use client"
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundPixelStars from '@/components/ui/background-pixel-stars';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative pt-32 pb-32 px-6">
      <div className="absolute inset-0 z-0 grayscale opacity-30">
        <BackgroundPixelStars />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl font-medium tracking-tight mb-8">Documentation</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-white/60 font-light mb-8">
              Learn how to configure, control, and extend Blinky for your specific workflows.
            </p>
            <div className="bg-[#111] border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-medium mb-4">Getting Started</h2>
              <p className="text-white/60 mb-6">Install the application, grant accessibility permissions, and log in to your account. Blinky will automatically detect your screen resolution and optimize its vision models.</p>
              
              <h2 className="text-2xl font-medium mb-4">Commands Reference</h2>
              <ul className="list-disc pl-5 text-white/60 space-y-2">
                <li><strong>"Open..."</strong> - Launches applications installed on your system.</li>
                <li><strong>"Search for..."</strong> - Opens a browser and executes a web search.</li>
                <li><strong>"Extract data from..."</strong> - Reads tabular data from the screen and formats it.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
