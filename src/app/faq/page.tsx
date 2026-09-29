"use client"
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundPixelStars from '@/components/ui/background-pixel-stars';

export default function FAQPage() {
  const faqs = [
    {
      q: "Does Blinky support macOS?",
      a: "Currently, Blinky is heavily optimized for Windows. macOS support is planned for future releases once the vision and control models are adapted."
    },
    {
      q: "Do I need a powerful GPU?",
      a: "No! Blinky offloads heavy multimodal processing to the cloud. You only need a stable internet connection and a standard modern CPU."
    },
    {
      q: "Is it safe to let an AI control my PC?",
      a: "Blinky explicitly asks for confirmation before executing destructive actions (like deleting files or sending emails). You can also hit the 'Esc' key at any time to instantly revoke its control."
    },
    {
      q: "How does the mobile companion work?",
      a: "The companion app pairs with your desktop via a secure QR code. It communicates over a low-latency WebRTC connection, allowing you to view status and send commands remotely."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative pt-32 pb-32 px-6">
      <div className="absolute inset-0 z-0 grayscale opacity-30">
        <BackgroundPixelStars />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl font-medium tracking-tight mb-8">Frequently Asked Questions</h1>
          
          <div className="grid gap-6">
            {faqs.map((faq, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                key={i} 
                className="bg-[#111] border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-medium mb-2">{faq.q}</h3>
                <p className="text-white/60">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
