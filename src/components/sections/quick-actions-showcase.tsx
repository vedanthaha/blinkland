"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Music, 
  Search, 
  Video, 
  Globe, 
  Lightbulb, 
  VolumeX, 
  Volume2, 
  Terminal, 
  Folder, 
  ShieldAlert,
  Play,
  RotateCcw,
  Sparkles,
  Check
} from 'lucide-react';

type ActionCategory = 'all' | 'media' | 'apps' | 'system';

interface QuickAction {
  id: string;
  name: string;
  category: 'media' | 'apps' | 'system';
  hotkey: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  type: 'video' | 'simulation';
  videoSrc?: string;
  simulatedState?: {
    actionLabel: string;
    details: string;
    status: string;
  };
}

const ACTIONS: QuickAction[] = [
  {
    id: 'spotify',
    name: 'Open Spotify',
    category: 'media',
    hotkey: '1',
    icon: Music,
    description: 'Launches Spotify, searches for your requested playlist or track, and starts playback seamlessly.',
    type: 'video',
    videoSrc: '/open_spotify.mp4'
  },
  {
    id: 'search',
    name: 'Autonomous Web Search',
    category: 'apps',
    hotkey: '2',
    icon: Search,
    description: 'Opens your browser, searches across multiple web sources, and summarizes key insights into your notes.',
    type: 'video',
    videoSrc: '/local_web_search.mp4'
  },
  {
    id: 'edit',
    name: 'Video Workflow & Export',
    category: 'apps',
    hotkey: '3',
    icon: Video,
    description: 'Navigates video editor controls, aligns timeline markers, and triggers final render export.',
    type: 'video',
    videoSrc: '/edit_video.mp4'
  },
  {
    id: 'browser',
    name: 'Browser Automation',
    category: 'apps',
    hotkey: '4',
    icon: Globe,
    description: 'Spawns browser instance, navigates to target URL, and auto-fills required forms or logins.',
    type: 'video',
    videoSrc: '/browser_open.mp4'
  },
  {
    id: 'light',
    name: 'Toggle Smart Lighting',
    category: 'system',
    hotkey: '5',
    icon: Lightbulb,
    description: 'Integrates with local Home Assistant or Philips Hue bridges to control desk and room ambients.',
    type: 'video',
    videoSrc: '/light_toogle.mp4'
  },
  {
    id: 'mute',
    name: 'Mute System Audio',
    category: 'media',
    hotkey: '6',
    icon: VolumeX,
    description: 'Instantly mutes all background system audio, calls, or media players with one hotkey.',
    type: 'simulation',
    simulatedState: {
      actionLabel: 'Dispatched Windows CoreAudio API',
      details: 'Master Volume attenuated: 0% [Muted]',
      status: 'Audio Muted'
    }
  },
  {
    id: 'terminal',
    name: 'Execute Terminal Script',
    category: 'system',
    hotkey: '7',
    icon: Terminal,
    description: 'Runs designated shell routines, dev servers, or Git synchronization tasks quietly.',
    type: 'simulation',
    simulatedState: {
      actionLabel: 'Spawned pwsh.exe process',
      details: 'Script "sync_work.ps1" completed with exit code 0.',
      status: 'Script Finished'
    }
  },
  {
    id: 'lock',
    name: 'Lock Workstation',
    category: 'system',
    hotkey: '8',
    icon: ShieldAlert,
    description: 'Triggers Windows Lock workstation (Win+L) securely when walking away from your desk.',
    type: 'simulation',
    simulatedState: {
      actionLabel: 'Windows Security Lock',
      details: 'Workstation locked. User session preserved in memory.',
      status: 'Workstation Locked'
    }
  }
];

export function QuickActionsShowcase() {
  const [selectedAction, setSelectedAction] = useState<QuickAction>(ACTIONS[0]);
  const [activeCategory, setActiveCategory] = useState<ActionCategory>('all');
  const [isSimulatingAction, setIsSimulatingAction] = useState(false);

  const filteredActions = activeCategory === 'all' 
    ? ACTIONS 
    : ACTIONS.filter(a => a.category === activeCategory);

  const handleSimulate = () => {
    setIsSimulatingAction(true);
    setTimeout(() => {
      setIsSimulatingAction(false);
    }, 2400);
  };

  return (
    <section className="py-28 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-white/[0.08] relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 text-[#FF5A1F] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Instant Productivity
          </div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">
            Quick Actions. <br className="hidden sm:inline" />
            <span className="text-[#FF5A1F]">No lengthy prompts required.</span>
          </h2>
        </div>
        <p className="text-base md:text-lg text-white/60 font-light max-w-md">
          Assign one-touch hotkeys to repetitive routines. Blinky executes the full chain of desktop events without you typing a single sentence.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        {(['all', 'media', 'apps', 'system'] as const).map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-all duration-200 border ${
              activeCategory === cat
                ? 'bg-white/10 text-white border-white/20'
                : 'bg-white/[0.02] text-white/40 border-white/[0.06] hover:text-white'
            }`}
          >
            {cat === 'all' ? 'All Routines' : cat}
          </button>
        ))}
        <div className="ml-auto text-xs font-mono text-white/40 hidden md:block">
          Select or click an action to preview execution
        </div>
      </div>

      {/* Grid + Stage Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Action Selection Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          {filteredActions.map((action) => {
            const Icon = action.icon;
            const isSelected = selectedAction.id === action.id;
            return (
              <div
                key={action.id}
                onClick={() => {
                  setSelectedAction(action);
                  setIsSimulatingAction(false);
                }}
                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-center justify-between group ${
                  isSelected
                    ? 'bg-white/10 border-white/30 shadow-[0_0_25px_rgba(255,90,31,0.15)] ring-1 ring-[#FF5A1F]/30'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/15'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#FF5A1F] text-white' : 'bg-white/5 text-white/60 group-hover:text-white'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white group-hover:text-[#FF5A1F] transition-colors">
                      {action.name}
                    </div>
                    <div className="text-xs text-white/40 capitalize font-light">
                      {action.category} Routine
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <kbd className="hidden sm:inline-block px-2 py-1 rounded bg-black/50 border border-white/10 text-[11px] font-mono text-white/50">
                    #{action.hotkey}
                  </kbd>
                  <div className={`w-2 h-2 rounded-full transition-all ${
                    isSelected ? 'bg-[#FF5A1F] scale-125' : 'bg-transparent'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Live Interactive Execution Stage */}
        <div className="lg:col-span-7 bg-[#09090b] border border-white/[0.08] rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[520px]">
          
          {/* Top Bar with Clear Demonstration Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] animate-pulse" />
              <span className="text-xs font-mono text-white/70">
                ACTIVE ACTION: {selectedAction.name.toUpperCase()}
              </span>
            </div>

            <div className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-white/50">
              Interactive Demo • Desktop Simulation
            </div>
          </div>

          {/* Action Details Card */}
          <div className="mb-6">
            <h3 className="text-2xl font-light text-white mb-2">
              {selectedAction.name}
            </h3>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              {selectedAction.description}
            </p>
          </div>

          {/* Visual Execution Viewport (Video or Interactive State) */}
          <div className="relative flex-1 bg-black rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[260px] max-h-[360px]">
            {selectedAction.type === 'video' && selectedAction.videoSrc ? (
              <video
                key={selectedAction.videoSrc}
                src={selectedAction.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            ) : (
              <div className="p-8 w-full flex flex-col items-center justify-center text-center gap-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                  isSimulatingAction ? 'bg-[#FF5A1F] text-white animate-pulse' : 'bg-white/5 text-white/40'
                }`}>
                  <selectedAction.icon className="w-8 h-8" />
                </div>

                <div className="font-mono text-xs text-white/70 max-w-sm">
                  {isSimulatingAction ? (
                    <span className="text-emerald-400">
                      Executing native dispatch: {selectedAction.simulatedState?.actionLabel}
                    </span>
                  ) : (
                    <span>Ready for trigger: press button below to simulate</span>
                  )}
                </div>

                <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/50 font-mono">
                  {selectedAction.simulatedState?.details}
                </div>
              </div>
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Bottom Status Tag */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/70 z-10">
              <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Status: Verified
              </span>
              <span className="bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md text-white/50">
                Hotkey: Alt + {selectedAction.hotkey}
              </span>
            </div>
          </div>

          {/* Trigger Button */}
          {selectedAction.type === 'simulation' && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSimulate}
                disabled={isSimulatingAction}
                className="px-6 py-2.5 rounded-xl bg-[#FF5A1F] hover:bg-[#FF773D] text-white text-xs font-semibold uppercase tracking-wider transition-all disabled:opacity-50 flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5" />
                {isSimulatingAction ? 'Triggering...' : 'Simulate Hotkey'}
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
