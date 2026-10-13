"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundPixelStars from '@/components/ui/background-pixel-stars';
import { 
  Terminal, 
  Sparkles, 
  ArrowRight, 
  Download, 
  Command, 
  CheckCircle2, 
  Cpu, 
  Eye, 
  MousePointer, 
  Play,
  RotateCcw
} from 'lucide-react';

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

type ExecutionStep = {
  phase: string;
  detail: string;
  status: 'done' | 'active' | 'pending';
};

const DEMO_PRESETS = [
  {
    id: 'spotify',
    label: '"Open Spotify and play Midnight City"',
    app: 'Spotify.exe',
    steps: [
      { phase: 'Vision', detail: 'Identified Spotify icon in taskbar (x: 480, y: 1052)', status: 'done' as const },
      { phase: 'Input', detail: 'Dispatched native click & focused search bar', status: 'done' as const },
      { phase: 'Action', detail: 'Typed "Midnight City" and hit Return key', status: 'done' as const },
      { phase: 'Verify', detail: 'Audio playback stream confirmed active', status: 'done' as const }
    ]
  },
  {
    id: 'search',
    label: '"Search local documentation for auth hook"',
    app: 'Google Chrome',
    steps: [
      { phase: 'Vision', detail: 'Scanned active browser tab for search input', status: 'done' as const },
      { phase: 'Input', detail: 'Navigated to docs.blinky.so/hooks', status: 'done' as const },
      { phase: 'Action', detail: 'Extracted code snippet to clipboard', status: 'done' as const },
      { phase: 'Verify', detail: 'Snippet ready in clipboard buffer', status: 'done' as const }
    ]
  },
  {
    id: 'render',
    label: '"Export project render and lock workstation"',
    app: 'Premiere Pro',
    steps: [
      { phase: 'Vision', detail: 'Located File -> Export -> Media menu items', status: 'done' as const },
      { phase: 'Input', detail: 'Selected ProRes 422 preset and started queue', status: 'done' as const },
      { phase: 'Action', detail: 'Dispatched Windows Lock command (Win+L)', status: 'done' as const },
      { phase: 'Verify', detail: 'Render running in background; PC secured', status: 'done' as const }
    ]
  }
];

export function HeroInteractive() {
  const [selectedPreset, setSelectedPreset] = useState(DEMO_PRESETS[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [visibleStep, setVisibleStep] = useState(4); // All visible by default
  const [userInput, setUserInput] = useState('');

  const triggerExecution = (preset: typeof DEMO_PRESETS[0]) => {
    setSelectedPreset(preset);
    setIsRunning(true);
    setVisibleStep(0);

    const t1 = setTimeout(() => setVisibleStep(1), 600);
    const t2 = setTimeout(() => setVisibleStep(2), 1400);
    const t3 = setTimeout(() => setVisibleStep(3), 2200);
    const t4 = setTimeout(() => {
      setVisibleStep(4);
      setIsRunning(false);
    }, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  };

  return (
    <section className="relative overflow-hidden pt-36 pb-24 px-6 md:px-12 w-full min-h-[95vh] flex flex-col items-center justify-center bg-black">
      {/* Background stars & subtle ambient glow */}
      <BackgroundPixelStars />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF5A1F]/[0.08] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-[1300px] mx-auto w-full z-10 relative flex flex-col items-center text-center">
        
        {/* Version Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 text-[#FF5A1F] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
          <span>Blinky 2.0 • Autonomous Desktop Companion</span>
        </motion.div>

        {/* Top Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl font-light leading-[1.05] tracking-tight mb-6 max-w-5xl"
        >
          Tell Blinky. <br />
          <span className="text-[#FF5A1F]">It gets it done.</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/70 mb-10 max-w-3xl font-light leading-relaxed"
        >
          A desktop-first autonomous AI agent that lives on your PC. It sees what you see, listens to your intent, and controls your keyboard and mouse to finish the work.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-16"
        >
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
            <span>View on GitHub</span>
          </a>
        </motion.div>

        {/* SUBSTANTIAL DESKTOP PRODUCT PREVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="w-full max-w-4xl bg-[#09090b] border border-white/[0.12] rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden text-left relative"
        >
          {/* Top Window Titlebar */}
          <div className="h-12 bg-white/[0.03] border-b border-white/[0.08] px-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
              <span className="ml-3 text-xs font-mono text-white/40 hidden sm:inline">
                Blinky HUD • Active Window: <span className="text-white/70">{selectedPreset.app}</span>
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-white/40 hidden md:inline">HotKey: Alt + Space</span>
              <span className="flex items-center gap-1.5 text-[#FF5A1F] bg-[#FF5A1F]/10 px-2 py-0.5 rounded border border-[#FF5A1F]/20">
                <Eye className="w-3.5 h-3.5" />
                Vision: Active
              </span>
            </div>
          </div>

          {/* Mascot Header & Command Input */}
          <div className="p-6 md:p-8 border-b border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent">
            
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FF5A1F] blur-lg opacity-30 rounded-full" />
                <img
                  src="/blinky_mascot_logo.png"
                  alt="Blinky Mascot"
                  className="w-12 h-12 object-contain relative z-10"
                />
              </div>

              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider font-mono text-[#FF5A1F] mb-0.5">
                  Autonomous Command Bar
                </div>
                <div className="text-sm text-white/50 font-light">
                  Type a command or select an automated routine below:
                </div>
              </div>
            </div>

            {/* Simulated Command Input Bar */}
            <div className="relative flex items-center bg-black/80 border border-white/15 rounded-2xl px-5 py-4 shadow-inner mb-6 group focus-within:border-[#FF5A1F]/60 transition-colors">
              <Command className="w-5 h-5 text-[#FF5A1F] mr-3 shrink-0" />
              <input
                type="text"
                readOnly
                value={isRunning ? selectedPreset.label : selectedPreset.label}
                className="w-full bg-transparent text-white text-base md:text-lg font-light focus:outline-none cursor-default"
              />
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/10 text-[11px] font-mono text-white/50 shrink-0">
                Enter ↵
              </span>
            </div>

            {/* Quick Action Suggestion Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-white/40 mr-1 hidden sm:inline">Try routine:</span>
              {DEMO_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => triggerExecution(preset)}
                  disabled={isRunning}
                  className={`text-xs px-3.5 py-1.5 rounded-xl border transition-all ${
                    selectedPreset.id === preset.id
                      ? 'bg-white/10 border-white/30 text-white font-medium'
                      : 'bg-white/[0.02] border-white/[0.08] text-white/60 hover:text-white hover:border-white/20'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

          </div>

          {/* Execution Progress Ledger */}
          <div className="p-6 md:p-8 bg-black/60">
            <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-4 border-b border-white/[0.06] pb-3">
              <span>EXECUTION LEDGER</span>
              <span>{isRunning ? 'AGENT AT WORK...' : 'ALL STEPS VERIFIED ✓'}</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {selectedPreset.steps.map((step, idx) => {
                const isStepVisible = visibleStep > idx;
                const isCurrent = visibleStep === idx + 1;
                return (
                  <motion.div
                    key={idx + step.phase}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ 
                      opacity: isStepVisible ? 1 : 0.25, 
                      x: isStepVisible ? 0 : -8 
                    }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-start md:items-center gap-3 p-3 rounded-xl border transition-all ${
                      isCurrent && isRunning
                        ? 'bg-[#FF5A1F]/10 border-[#FF5A1F]/40 text-white'
                        : isStepVisible
                        ? 'bg-white/[0.03] border-white/[0.06] text-white/80'
                        : 'bg-transparent border-transparent text-white/20'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                      isStepVisible ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-white/20'
                    }`}>
                      {isStepVisible ? '✓' : idx + 1}
                    </span>

                    <span className="font-semibold text-[#FF5A1F] uppercase tracking-wide w-16 shrink-0">
                      [{step.phase}]
                    </span>

                    <span className="flex-1 font-light">
                      {step.detail}
                    </span>

                    {isCurrent && isRunning && (
                      <span className="text-[#FF5A1F] animate-pulse font-mono text-[11px] shrink-0">
                        Running...
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
