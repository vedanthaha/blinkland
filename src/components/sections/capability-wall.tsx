"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileSearch, 
  Music, 
  Lightbulb, 
  Terminal, 
  Layout, 
  VolumeX, 
  ScanText, 
  ShieldAlert, 
  Database, 
  FileText,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface CapabilityItem {
  id: string;
  text: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  query: string;
  files: { name: string; size: string; type: string; date: string }[];
  selectedFile: {
    name: string;
    path: string;
    type: string;
    size: string;
    modified: string;
  };
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'search',
    text: 'Search files',
    title: 'File Search',
    subtitle: 'Quickly search for files or folders anywhere across your drives.',
    icon: FileSearch,
    query: '.heic',
    files: [
      { name: 'loupe-mono-dark.heic', size: '1.2 MB', type: 'HEIC Image', date: 'Today, 2:14 PM' },
      { name: 'loupe.heic', size: '1.8 MB', type: 'HEIC Image', date: 'Yesterday' },
      { name: 'blinky-logo.heic', size: '840 KB', type: 'HEIC Image', date: 'Oct 8, 2026' },
      { name: 'ambient-red.heic', size: '2.4 MB', type: 'HEIC Image', date: 'Oct 4, 2026' },
      { name: 'spotlight-mesh.heic', size: '3.1 MB', type: 'HEIC Image', date: 'Sep 29, 2026' }
    ],
    selectedFile: {
      name: 'loupe-mono-dark.heic',
      path: 'C:\\Users\\Desktop\\Assets\\loupe-mono-dark.heic',
      type: 'High Efficiency Image Container',
      size: '1,240,892 bytes (1.2 MB)',
      modified: 'Today at 2:14 PM'
    }
  },
  {
    id: 'spotify',
    text: 'Open Spotify',
    title: 'Media Playback',
    subtitle: 'Search albums, play podcasts, and control playback hands-free.',
    icon: Music,
    query: 'play midnight city',
    files: [
      { name: 'Midnight City — M83', size: '4:03', type: 'Track', date: 'Hurry Up, We\'re Dreaming' },
      { name: 'Reunion — M83', size: '3:57', type: 'Track', date: 'Album Track' },
      { name: 'Wait — M83', size: '5:43', type: 'Track', date: 'Album Track' },
      { name: 'Intro — M83', size: '5:22', type: 'Track', date: 'Album Track' }
    ],
    selectedFile: {
      name: 'Midnight City — M83',
      path: 'spotify:track:6GyFP1nfCDB8JyNoKJQg8B',
      type: 'Spotify Audio Stream',
      size: '320 kbps High Fidelity',
      modified: 'Now Playing'
    }
  },
  {
    id: 'terminal',
    text: 'Run scripts',
    title: 'Terminal Runner',
    subtitle: 'Execute shell commands, dev servers, and automation routines quietly.',
    icon: Terminal,
    query: 'pwsh sync_project.ps1',
    files: [
      { name: 'sync_project.ps1', size: '4 KB', type: 'PowerShell', date: 'Ready' },
      { name: 'build_release.bat', size: '2 KB', type: 'Batch', date: 'Ready' },
      { name: 'clean_cache.sh', size: '1 KB', type: 'Shell', date: 'Ready' }
    ],
    selectedFile: {
      name: 'sync_project.ps1',
      path: 'C:\\Workspace\\scripts\\sync_project.ps1',
      type: 'PowerShell Script',
      size: '4,096 bytes',
      modified: 'Exit code: 0 [Success]'
    }
  },
  {
    id: 'windows',
    text: 'Manage windows',
    title: 'Window Layouts',
    subtitle: 'Snap, tile, or organize complex multi-monitor workspaces instantly.',
    icon: Layout,
    query: 'tile 50/50 left',
    files: [
      { name: 'Split Left / Right (50/50)', size: 'Layout', type: 'System', date: 'Active' },
      { name: 'Three Columns Centered', size: 'Layout', type: 'System', date: 'Available' },
      { name: 'Full Focus Mode (Primary)', size: 'Layout', type: 'System', date: 'Available' }
    ],
    selectedFile: {
      name: 'Split Left / Right (50/50)',
      path: 'Display 1: 3840x2160',
      type: 'Native Window Manager',
      size: '2 Windows Synced',
      modified: 'Arranged in 12ms'
    }
  },
  {
    id: 'lights',
    text: 'Toggle lights',
    title: 'Smart Workspace',
    subtitle: 'Control smart bulbs, monitor backlights, and desk ambients.',
    icon: Lightbulb,
    query: 'lights warm amber 40%',
    files: [
      { name: 'Desk Ambient Strip', size: 'ON', type: 'Zigbee', date: 'Amber 2700K' },
      { name: 'Ceiling Pendant', size: 'OFF', type: 'Matter', date: 'Standby' },
      { name: 'Monitor Backlight Bar', size: 'ON', type: 'Home Assistant', date: '40% Brightness' }
    ],
    selectedFile: {
      name: 'Desk Ambient Strip',
      path: 'local://homeassistant/light.desk_strip',
      type: 'Local Mesh IoT Device',
      size: 'Latency: 3ms',
      modified: 'State: Active'
    }
  },
  {
    id: 'notes',
    text: 'Take notes',
    title: 'Quick Capture',
    subtitle: 'Jot down fleeting thoughts or save screen text directly into markdown.',
    icon: FileText,
    query: 'new note: sprint review',
    files: [
      { name: 'Sprint Review Notes.md', size: '2 KB', type: 'Markdown', date: 'Today, 3:30 PM' },
      { name: 'Design Tokens 2.0.md', size: '8 KB', type: 'Markdown', date: 'Oct 11, 2026' },
      { name: 'Blinky Roadmap.md', size: '5 KB', type: 'Markdown', date: 'Oct 9, 2026' }
    ],
    selectedFile: {
      name: 'Sprint Review Notes.md',
      path: 'C:\\Users\\Documents\\Notes\\Sprint Review.md',
      type: 'Markdown Document',
      size: '2,140 bytes',
      modified: 'Saved locally'
    }
  },
  {
    id: 'mute',
    text: 'Mute audio',
    title: 'Audio Attenuation',
    subtitle: 'Instant system-wide mute hotkey for calls and loud media.',
    icon: VolumeX,
    query: 'mute master',
    files: [
      { name: 'Master Volume [Muted]', size: '0%', type: 'CoreAudio', date: 'Active' },
      { name: 'Microphone Array [Open]', size: '100%', type: 'Audio In', date: 'Active' }
    ],
    selectedFile: {
      name: 'Master Volume [Muted]',
      path: 'Windows Audio Endpoint #0',
      type: 'System CoreAudio Endpoint',
      size: 'Volume: 0%',
      modified: 'Dispatched via WinAPI'
    }
  },
  {
    id: 'ocr',
    text: 'Find text on screen',
    title: 'Visual OCR',
    subtitle: 'Extract text, error codes, and URLs from images and video frames.',
    icon: ScanText,
    query: 'ocr clipboard',
    files: [
      { name: 'Stack trace from crash log', size: '14 lines', type: 'OCR', date: 'Captured' },
      { name: 'Invite URL from screenshot', size: '1 link', type: 'OCR', date: 'Copied' }
    ],
    selectedFile: {
      name: 'Stack trace from crash log',
      path: 'Vision Buffer #140',
      type: 'Tesseract High-Precision OCR',
      size: '14 lines recognized',
      modified: 'Copied to clipboard'
    }
  },
  {
    id: 'lock',
    text: 'Lock workstation',
    title: 'Security Lock',
    subtitle: 'Instantly lock your Windows desktop when walking away.',
    icon: ShieldAlert,
    query: 'lock pc',
    files: [
      { name: 'Lock Workstation (Win+L)', size: 'Secure', type: 'OS', date: 'Standby' }
    ],
    selectedFile: {
      name: 'Lock Workstation',
      path: 'user32.dll!LockWorkStation',
      type: 'Windows Kernel Security',
      size: 'Instant Lock',
      modified: 'Session Protected'
    }
  }
];

export function CapabilityWall() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto rotation
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAPABILITIES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeItem = CAPABILITIES[activeIndex];
  const ActiveIcon = activeItem.icon;

  return (
    <section 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-28 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-white/[0.08] relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Interactive Paragraph Stream ("The Wall") */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8 tracking-tight leading-tight">
              What else can Blinky do?
            </h2>

            {/* Continuous stream of capabilities with dimming and active highlight */}
            <p className="text-lg md:text-xl font-light leading-relaxed select-none mb-12">
              <span className="text-white/30">It can </span>
              {CAPABILITIES.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <React.Fragment key={item.id}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`inline transition-all duration-300 text-left outline-none cursor-pointer ${
                        isActive
                          ? 'text-white font-medium scale-105 drop-shadow-[0_0_15px_rgba(255,90,31,0.6)]'
                          : 'text-white/25 hover:text-white/60'
                      }`}
                    >
                      {item.text}.
                    </button>
                    {' '}
                  </React.Fragment>
                );
              })}
              <span className="text-white/40 italic">And much, much more.</span>
            </p>
          </div>

          {/* Active Feature Sub-Badge */}
          <div className="relative min-h-[90px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-2"
              >
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 w-fit">
                  <div className="w-5 h-5 rounded-lg bg-[#FF5A1F] flex items-center justify-center text-white">
                    <ActiveIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-medium text-white tracking-wide">
                    {activeItem.title}
                  </span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-light">
                  {activeItem.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Raycast-Style Interactive Search UI Window (From Image 1) */}
        <div className="lg:col-span-7 relative">
          
          {/* Angled Brand Textured Glow (The red/amber backdrop from Image 1) */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF5A1F]/30 via-[#FF5A1F]/10 to-transparent rounded-[32px] blur-2xl pointer-events-none opacity-60" />

          {/* Desktop Window Frame */}
          <div className="relative bg-[#0b0b0e] border border-white/15 rounded-2xl md:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col min-h-[460px]">
            
            {/* Top Search Input Bar (e.g. "← .heic|") */}
            <div className="h-14 border-b border-white/10 px-5 flex items-center gap-3 bg-white/[0.02]">
              <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-white/60">
                <ArrowRight className="w-4 h-4 rotate-180 text-white/60" />
              </div>
              <div className="flex-1 font-mono text-sm text-white flex items-center">
                <span>{activeItem.query}</span>
                <span className="w-0.5 h-4 bg-[#FF5A1F] ml-0.5 animate-pulse" />
              </div>
              <div className="text-[11px] font-mono text-white/40 bg-white/5 px-2 py-1 rounded">
                ESC
              </div>
            </div>

            {/* Main Window Body: Split Results List + Metadata Inspector */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
              
              {/* Left Column in Window: Results List */}
              <div className="md:col-span-7 border-b md:border-b-0 md:border-r border-white/10 p-4 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/40 mb-3 px-2">
                    Section Label
                  </div>

                  <div className="space-y-1">
                    {activeItem.files.map((file, idx) => {
                      const isSelected = idx === 0;
                      return (
                        <div
                          key={file.name}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-colors ${
                            isSelected
                              ? 'bg-white/15 text-white shadow-inner font-medium'
                              : 'text-white/60 hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 overflow-hidden">
                            <ActiveIcon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#FF5A1F]' : 'text-white/40'}`} />
                            <span className="truncate">{file.name}</span>
                          </div>
                          <span className="text-[11px] font-mono text-white/30 shrink-0 ml-2">
                            {file.size}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/30 px-2">
                  <span>{activeItem.files.length} items</span>
                  <span>↵ Open • ⇥ Actions</span>
                </div>
              </div>

              {/* Right Column in Window: Metadata Inspector Pane */}
              <div className="md:col-span-5 p-5 bg-white/[0.01] flex flex-col justify-between text-xs font-mono">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-white/40 mb-4 pb-2 border-b border-white/5">
                    Metadata
                  </div>

                  <div className="space-y-4 text-white/70">
                    <div>
                      <div className="text-[10px] text-white/30 mb-0.5">Name</div>
                      <div className="text-white text-xs truncate">{activeItem.selectedFile.name}</div>
                    </div>

                    <div>
                      <div className="text-[10px] text-white/30 mb-0.5">Path</div>
                      <div className="text-white/60 text-[11px] break-all">{activeItem.selectedFile.path}</div>
                    </div>

                    <div>
                      <div className="text-[10px] text-white/30 mb-0.5">Type</div>
                      <div className="text-white/60 text-[11px]">{activeItem.selectedFile.type}</div>
                    </div>

                    <div>
                      <div className="text-[10px] text-white/30 mb-0.5">File Details</div>
                      <div className="text-white/60 text-[11px]">{activeItem.selectedFile.size}</div>
                    </div>

                    <div>
                      <div className="text-[10px] text-white/30 mb-0.5">State</div>
                      <div className="text-emerald-400 text-[11px] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {activeItem.selectedFile.modified}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-white/40">
                  <span>Press ⌥↵ for options</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
