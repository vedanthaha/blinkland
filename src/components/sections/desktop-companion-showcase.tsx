"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Terminal, 
  Activity, 
  MousePointer, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  HardDrive,
  Layers,
  Sparkles
} from 'lucide-react';

type ShowcaseTab = 'vision' | 'control' | 'telemetry' | 'terminal';

export function DesktopCompanionShowcase() {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('vision');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const startSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(0);

    const timer1 = setTimeout(() => setSimStep(1), 700);
    const timer2 = setTimeout(() => setSimStep(2), 1600);
    const timer3 = setTimeout(() => setSimStep(3), 2600);
    const timer4 = setTimeout(() => {
      setIsSimulating(false);
      setSimStep(0);
    }, 4200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  };

  const tabs = [
    { id: 'vision' as const, label: 'Screen Vision', icon: Eye, badge: '60 FPS OCR' },
    { id: 'control' as const, label: 'Native OS Control', icon: MousePointer, badge: 'Mouse & Keys' },
    { id: 'telemetry' as const, label: 'PC Health & Activity', icon: Activity, badge: 'Telemetry' },
    { id: 'terminal' as const, label: 'Terminal & CLI', icon: Terminal, badge: 'PowerShell' },
  ];

  return (
    <section className="py-28 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-white/[0.08] relative">
      {/* Background ambient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF5A1F]/[0.03] blur-[140px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 text-[#FF5A1F] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Native Desktop Experience
        </div>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
          Lives on your desktop. <br className="hidden sm:inline" />
          <span className="text-[#FF5A1F]">Operates like a teammate.</span>
        </h2>
        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
          Unlike browser-only extensions or isolated chat boxes, Blinky has full spatial awareness of your Windows desktop—detecting buttons, tracking apps, and automating workflows.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setIsSimulating(false);
                setSimStep(0);
              }}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? 'bg-white/10 text-white border-white/20 shadow-[0_0_20px_rgba(255,90,31,0.15)]'
                  : 'bg-white/[0.02] text-white/60 border-white/[0.06] hover:bg-white/[0.05] hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF5A1F]' : 'text-white/40'}`} />
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                isActive ? 'bg-[#FF5A1F]/20 text-[#FF5A1F]' : 'bg-white/5 text-white/40'
              }`}>
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Showcase Surface */}
      <div className="bg-[#09090b] border border-white/[0.08] rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Window Chrome Header */}
        <div className="h-12 bg-white/[0.03] border-b border-white/[0.08] px-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
            <span className="ml-3 text-xs font-mono text-white/40 hidden sm:inline">
              blinky-desktop://workspace/monitor-1 [1920x1080@144Hz]
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Agent Live
            </span>
            <span className="text-white/40 hidden md:inline">Safety Sandbox: ON</span>
          </div>
        </div>

        {/* Content Pane */}
        <div className="p-6 md:p-10 min-h-[460px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            
            {/* 1. VISION TAB */}
            {activeTab === 'vision' && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Description */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="text-xs uppercase tracking-wider font-mono text-[#FF5A1F]">
                    Computer Vision Pipeline
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-white">
                    Understands any app visually—no APIs required.
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed font-light">
                    Blinky uses localized vision segmentation to map interactive targets across your display. Whether it&apos;s a legacy Win32 app, modern Electron UI, or game engine, Blinky pinpoints buttons, inputs, and sliders instantly.
                  </p>

                  <div className="space-y-2 mt-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A1F]" />
                      Real-time OCR & bounding box extraction
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A1F]" />
                      Zero telemetry exported; runs locally on PC
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A1F]" />
                      Understands complex nested desktop layouts
                    </div>
                  </div>

                  <button
                    onClick={startSimulation}
                    disabled={isSimulating}
                    className="mt-4 w-fit px-5 py-2.5 rounded-xl bg-[#FF5A1F] hover:bg-[#FF773D] text-white text-xs font-semibold tracking-wide uppercase transition-all shadow-[0_4px_20px_rgba(255,90,31,0.3)] disabled:opacity-50"
                  >
                    {isSimulating ? 'Scanning Display...' : 'Test Vision Scanner'}
                  </button>
                </div>

                {/* Right Interactive Preview */}
                <div className="lg:col-span-7 bg-black/60 rounded-2xl border border-white/10 p-5 relative overflow-hidden aspect-[16/10] flex flex-col justify-between">
                  {/* Fake App Canvas */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs text-white/50 font-mono">
                    <span>Active Target: Premiere_Export_Modal.exe</span>
                    <span className="text-[#FF5A1F]">Confidence: 99.8%</span>
                  </div>

                  <div className="relative flex-1 my-4 bg-white/[0.02] rounded-xl border border-white/5 p-4 flex flex-col justify-center gap-4">
                    {/* Simulated UI Targets */}
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10 relative">
                      <span className="text-xs text-white/80">Preset: H.264 4K High Bitrate</span>
                      <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/60">Dropdown</span>
                      {simStep >= 1 && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -inset-1 border-2 border-emerald-400 rounded-lg pointer-events-none"
                        >
                          <span className="absolute -top-3 left-2 bg-emerald-500 text-black text-[9px] font-bold px-1.5 py-0.2 rounded font-mono">
                            target_id: preset_selector [x: 420, y: 180]
                          </span>
                        </motion.div>
                      )}
                    </div>

                    <div className="flex justify-end gap-3 items-center relative">
                      <div className="px-4 py-2 bg-white/10 text-white/60 rounded-lg text-xs">Cancel</div>
                      <div className="px-5 py-2 bg-[#FF5A1F] text-white rounded-lg text-xs font-medium relative">
                        Queue Render
                        {simStep >= 2 && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute -inset-1.5 border-2 border-[#FF5A1F] rounded-lg pointer-events-none shadow-[0_0_15px_rgba(255,90,31,0.5)]"
                          >
                            <span className="absolute -top-3.5 right-0 bg-[#FF5A1F] text-white text-[9px] font-bold px-1.5 py-0.2 rounded font-mono">
                              primary_action: click(98.9%)
                            </span>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Scanner status bar */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-2 border-t border-white/5">
                    <span>Elements Detected: 14</span>
                    <span>FPS: 60.0 • Latency: 11ms</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. CONTROL TAB */}
            {activeTab === 'control' && (
              <motion.div
                key="control"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="text-xs uppercase tracking-wider font-mono text-[#FF5A1F]">
                    Native OS Event Dispatch
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-white">
                    Human-speed execution. No robotic jank.
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed font-light">
                    Blinky sends native Windows keyboard and mouse events using smooth bezier curves and humanized timing intervals. This prevents anti-bot triggers and guarantees flawless interaction with OS system dialogs.
                  </p>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs font-mono text-white/70">
                    <div className="text-white/40"># Safety Safeguard</div>
                    <div>Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[#FF5A1F] font-bold">ESC</kbd> anytime to instantly freeze Blinky and take back control.</div>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-black/60 rounded-2xl border border-white/10 p-6 flex flex-col gap-4">
                  <div className="text-xs font-mono text-white/50 border-b border-white/10 pb-3 flex justify-between">
                    <span>Input Event Ledger</span>
                    <span className="text-emerald-400">Low-level Hook Active</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-[#FF5A1F]">01</span>
                      <span className="text-white/70">mouse_move(start: [120, 480], end: [840, 260], curve: easeOutCubic)</span>
                      <span className="ml-auto text-emerald-400">✓ 14ms</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-[#FF5A1F]">02</span>
                      <span className="text-white/70">mouse_click(button: LEFT, hold_duration: 48ms)</span>
                      <span className="ml-auto text-emerald-400">✓ 48ms</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-[#FF5A1F]">03</span>
                      <span className="text-white/70">key_press_sequence([&apos;Ctrl&apos;, &apos;Shift&apos;, &apos;S&apos;])</span>
                      <span className="ml-auto text-emerald-400">✓ 62ms</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <span>✓</span>
                      <span>Target state verified. Execution complete.</span>
                      <span className="ml-auto">Total: 124ms</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. TELEMETRY TAB */}
            {activeTab === 'telemetry' && (
              <motion.div
                key="telemetry"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-white/50 text-xs font-mono mb-4">
                      <span>CPU USAGE</span>
                      <Cpu className="w-4 h-4 text-[#FF5A1F]" />
                    </div>
                    <div className="text-4xl font-light text-white mb-2">1.8%</div>
                    <p className="text-xs text-white/50">Near-zero overhead while idling in system tray.</p>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-6">
                    <div className="bg-[#FF5A1F] h-full w-[8%]" />
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-white/50 text-xs font-mono mb-4">
                      <span>RAM FOOTPRINT</span>
                      <HardDrive className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-4xl font-light text-white mb-2">112 MB</div>
                    <p className="text-xs text-white/50">Native Rust & C++ core. No bloatware or memory leaks.</p>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-6">
                    <div className="bg-emerald-400 h-full w-[14%]" />
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-white/50 text-xs font-mono mb-4">
                      <span>PERMISSION BOUNDARY</span>
                      <ShieldCheck className="w-4 h-4 text-[#FF5A1F]" />
                    </div>
                    <div className="text-4xl font-light text-white mb-2">Strict</div>
                    <p className="text-xs text-white/50">Zero background writes to personal drives without explicit user approval.</p>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-6">
                    <div className="bg-blue-400 h-full w-[100%]" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. TERMINAL TAB */}
            {activeTab === 'terminal' && (
              <motion.div
                key="terminal"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-black/80 rounded-2xl border border-white/10 p-6 font-mono text-xs text-white/80 space-y-3"
              >
                <div className="text-white/40 pb-2 border-b border-white/10 flex items-center justify-between">
                  <span>PowerShell 7.4.2 [Sandboxed Agent Subshell]</span>
                  <span className="text-emerald-400">Status: Idle</span>
                </div>
                <div className="text-white/60">
                  <span className="text-[#FF5A1F]">PS C:\Users\Desktop&gt;</span> blinky run --task &quot;git commit and push to release&quot;
                </div>
                <div className="text-white/40 pl-4 border-l-2 border-white/10 space-y-1">
                  <div>[Blinky] Resolving repository state...</div>
                  <div>[Blinky] Staged 4 modified files (components, layout).</div>
                  <div>[Blinky] Auto-generating semantic commit message...</div>
                  <div className="text-emerald-400">✓ Commit: 7f3b0c1 &quot;feat(desktop): add autonomous companion HUD&quot;</div>
                  <div className="text-emerald-400">✓ Remote updated: origin/main</div>
                </div>
                <div className="text-[#FF5A1F] pt-2">
                  <span>PS C:\Users\Desktop&gt;</span> <span className="animate-pulse">_</span>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
