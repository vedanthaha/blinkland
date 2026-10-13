"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, BrainCircuit, MousePointerClick, ShieldCheck, Sparkles } from 'lucide-react';

export function FeatureStorytelling() {
  const steps = [
    {
      step: '01',
      title: 'Observe',
      tagline: 'Perceives your desktop spatially.',
      description: 'Blinky continuously samples your display through a high-throughput, low-latency visual pipeline. It tracks open windows, active inputs, and system states just like a colleague sitting beside you.',
      icon: Eye,
      details: [
        'Real-time element segmentation & OCR',
        'Multi-monitor awareness across 4K displays',
        'Zero API dependency on target apps'
      ]
    },
    {
      step: '02',
      title: 'Plan',
      tagline: 'Reasoning before execution.',
      description: 'Your intent is decomposed into a structured execution graph. Blinky determines the exact sequence of clicks, keystrokes, and verification checkpoints needed to accomplish the task safely.',
      icon: BrainCircuit,
      details: [
        'Atomic action validation graph',
        'Self-correcting retry heuristics',
        'State verification at each milestone'
      ]
    },
    {
      step: '03',
      title: 'Act',
      tagline: 'Native OS interaction at human speed.',
      description: 'Dispatches natural mouse motion curves and native Windows keyboard shortcuts. Blinky navigates complex nested menus, fills forms, and executes commands with complete precision.',
      icon: MousePointerClick,
      details: [
        'Smooth bezier mouse trajectories',
        'Instant emergency abort via Esc key',
        'Strict local permission sandbox'
      ]
    }
  ];

  return (
    <section className="py-28 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-white/[0.08] relative">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF5A1F]/[0.02] blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 text-[#FF5A1F] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          The Execution Loop
        </div>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
          How Blinky gets <br className="hidden sm:inline" />
          <span className="text-[#FF5A1F]">the computer work done.</span>
        </h2>
        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
          From the moment you speak or press a hotkey, Blinky operates through a transparent three-step loop with safety checkpoints at every stage.
        </p>
      </div>

      {/* Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* SVG Connecting Line (Visible on desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-12 h-[1px] bg-gradient-to-r from-transparent via-[#FF5A1F]/20 to-transparent pointer-events-none z-0" />

        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-[#09090b] border border-white/[0.08] rounded-3xl p-8 flex flex-col justify-between relative group hover:border-white/20 transition-all duration-300 shadow-xl z-10"
            >
              <div>
                {/* Step badge & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF5A1F] group-hover:scale-105 group-hover:bg-[#FF5A1F] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-white/30 tracking-widest">
                    PHASE {item.step}
                  </span>
                </div>

                <div className="text-xs uppercase tracking-wider font-mono text-[#FF5A1F] mb-1">
                  {item.tagline}
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Checkpoint list */}
              <div className="border-t border-white/[0.06] pt-6 space-y-2.5">
                {item.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-mono text-white/50">
                    <span className="text-[#FF5A1F] mt-0.5">•</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
