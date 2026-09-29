"use client"
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "SCREEN UNDERSTANDING",
    heading: "Blinky understands the software in front of you.",
    description: "Blinky constantly observes your screen, identifying UI elements, reading text, and understanding the context of the applications you are using, just like a human.",
    visual: (
      <div className="w-full aspect-video bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-12 border-2 border-[#FF5A1F] rounded shadow-[0_0_20px_rgba(255,90,31,0.5)] flex items-center justify-center bg-[#FF5A1F]/20">
          <span className="text-white text-xs font-bold font-mono">Button detected</span>
        </div>
      </div>
    )
  },
  {
    title: "COMPUTER CONTROL",
    heading: "Blinky can click, type, and navigate.",
    description: "Full autonomous control over your operating system. Blinky can execute precise mouse movements, send keystrokes, and interact with complex software interfaces.",
    visual: (
      <div className="w-full aspect-video bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center relative">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path></svg>
        </div>
      </div>
    )
  },
  {
    title: "VOICE",
    heading: "Blinky can listen and respond naturally.",
    description: "Speak to your computer as you would to a colleague. Blinky understands natural language, parsing your intent and translating it into computer actions.",
    visual: (
      <div className="w-full aspect-video bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center gap-2">
        {[...Array(7)].map((_, i) => (
          <motion.div 
            key={i} 
            animate={{ height: [20, 60 + Math.random() * 40, 20] }} 
            transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }} 
            className="w-3 rounded-full bg-[#FF5A1F]"
          ></motion.div>
        ))}
      </div>
    )
  },
  {
    title: "AUTOMATION",
    heading: "Blinky handles multi-step workflows.",
    description: "Chain together complex tasks. Blinky observes the outcome of each step, adapts to unexpected UI changes, and verifies success before moving on.",
    visual: (
      <div className="w-full aspect-video bg-[#111] rounded-2xl border border-white/10 p-8 flex flex-col justify-center gap-4">
        {['Extract Data', 'Format Spreadsheet', 'Email Report'].map((step, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4">
            <div className={`w-4 h-4 rounded-full ${i === 2 ? 'bg-[#FF5A1F] animate-pulse' : 'bg-green-500'}`}></div>
            <span className="text-white/80">{step}</span>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "TUTORING",
    heading: "Blinky guides you directly inside software.",
    description: "Learn new tools faster. Blinky highlights exactly where to click and explains complex interfaces without you ever needing to tab out to a tutorial.",
    visual: (
      <div className="w-full aspect-video bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center relative">
        <div className="bg-[#FF5A1F] text-black font-bold px-6 py-4 rounded-xl shadow-2xl z-10 relative">
          "Click here to add a new layer."
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF5A1F] rotate-45"></div>
        </div>
      </div>
    )
  },
  {
    title: "REMOTE COMPANION",
    heading: "Interact with your workstation from anywhere.",
    description: "The Blinky mobile companion turns your phone into a powerful remote control for your desktop. Send commands, check status, and trigger actions on the go.",
    visual: (
      <div className="w-full aspect-video bg-[#111] rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
         <div className="w-24 h-48 bg-black border-4 border-[#333] rounded-[1.5rem] absolute -bottom-10 left-1/2 -translate-x-1/2 shadow-2xl flex flex-col p-2">
            <div className="w-8 h-2 bg-[#222] rounded-full mx-auto mb-4 mt-2"></div>
            <div className="bg-[#FF5A1F] p-2 rounded-lg text-black text-[10px] font-bold text-center mt-auto mb-8">Execute</div>
         </div>
      </div>
    )
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF5A1F] selection:text-white pt-32 pb-32 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto mb-32 text-center">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">Capabilities</h1>
        <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
          Understand exactly what makes Blinky the most capable autonomous desktop companion.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col gap-32">
        {features.map((feature, idx) => (
          <section key={feature.title} className={`flex flex-col gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
            
            <div className="w-full md:w-1/2 flex flex-col">
              <span className="text-[#FF5A1F] text-sm font-bold tracking-[0.2em] uppercase mb-4">{feature.title}</span>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 leading-tight">{feature.heading}</h2>
              <p className="text-lg text-white/50 font-light leading-relaxed">{feature.description}</p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              {feature.visual}
            </motion.div>

          </section>
        ))}
      </div>
    </div>
  );
}
