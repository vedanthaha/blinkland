"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Monitor, 
  Wifi, 
  Lock, 
  Music, 
  Globe, 
  Lightbulb, 
  ShieldCheck, 
  Radio,
  ArrowRight
} from 'lucide-react';

type MobileScenario = 'music' | 'browser' | 'light';

export function MobileCompanionShowcase() {
  const [activeScenario, setActiveScenario] = useState<MobileScenario>('music');

  const scenarios = [
    {
      id: 'music' as const,
      title: 'Control Media From Bed',
      description: 'Change playlists, adjust desktop volume, or pause Spotify on your PC without getting up.',
      mobileVideo: '/music_phone.mp4',
      desktopVideo: '/music_playing_pc.mp4',
      badge: 'Media Sync',
      icon: Music
    },
    {
      id: 'browser' as const,
      title: 'Open Web Pages on PC',
      description: 'Send article links or research topics from your phone to open instantly on your desktop monitors.',
      mobileVideo: '/open_browser_mobile.mp4',
      desktopVideo: '/browser_open.mp4',
      badge: 'Browser Push',
      icon: Globe
    },
    {
      id: 'light' as const,
      title: 'Workspace Ambient Toggle',
      description: 'Turn off your workstation monitor and desk lights remotely when stepping out.',
      mobileVideo: '/toggle_light_mobile.mp4',
      desktopVideo: '/light_toogle.mp4',
      badge: 'Desk Control',
      icon: Lightbulb
    }
  ];

  const current = scenarios.find(s => s.id === activeScenario) || scenarios[0];

  return (
    <section className="py-28 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-white/[0.08] relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 text-[#FF5A1F] mb-4">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          Remote Companion Mesh
        </div>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
          Your PC, controlled from <br className="hidden sm:inline" />
          <span className="text-[#FF5A1F]">anywhere in your home.</span>
        </h2>
        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
          Blinky is desktop-first, but never leaves your side. The companion mobile app connects over your local network with end-to-end encryption—giving you instant remote actions.
        </p>
      </div>

      {/* Scenario Selector */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {scenarios.map(s => {
          const Icon = s.icon;
          const isActive = s.id === activeScenario;
          return (
            <button
              key={s.id}
              onClick={() => setActiveScenario(s.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs md:text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? 'bg-white/10 text-white border-white/20 shadow-[0_0_20px_rgba(255,90,31,0.2)]'
                  : 'bg-white/[0.02] text-white/60 border-white/[0.06] hover:bg-white/[0.05] hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF5A1F]' : 'text-white/40'}`} />
              <span>{s.title}</span>
            </button>
          );
        })}
      </div>

      {/* Dual Device Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#09090b] border border-white/[0.08] rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Left: Mobile Phone Mockup */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="flex items-center gap-2 text-xs font-mono text-white/40 mb-4">
            <Smartphone className="w-4 h-4 text-[#FF5A1F]" />
            <span>MOBILE CONTROLLER (iOS & Android)</span>
          </div>

          <div className="w-[280px] sm:w-[320px] aspect-[9/18.5] bg-black rounded-[42px] border-[6px] border-[#222] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden relative flex flex-col">
            {/* Dynamic Island / Speaker */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#18181b] rounded-full z-20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-black/60 mr-2" />
              <div className="w-2 h-2 rounded-full bg-[#0a0a0a]" />
            </div>

            {/* Video Feed from Phone */}
            <div className="flex-1 w-full h-full relative overflow-hidden bg-[#0c0c0e]">
              <video
                key={current.mobileVideo}
                src={current.mobileVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Phone Home Bar */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
          </div>
        </div>

        {/* Center Connection Indicator (Desktop only) */}
        <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center gap-3 text-center">
          <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#FF5A1F]">
            <Wifi className="w-5 h-5 animate-pulse" />
          </div>
          <div className="text-[11px] font-mono text-emerald-400">
            Peer Mesh Active
          </div>
          <div className="text-[10px] font-mono text-white/40">
            Latency &lt; 4ms <br />
            TLS 1.3 Encrypted
          </div>
          <ArrowRight className="w-4 h-4 text-white/30 mt-1" />
        </div>

        {/* Right: Desktop PC Display Mockup */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="flex items-center gap-2 text-xs font-mono text-white/40 mb-4">
            <Monitor className="w-4 h-4 text-[#FF5A1F]" />
            <span>DESKTOP WORKSTATION (Target Screen)</span>
          </div>

          <div className="w-full aspect-[16/10] bg-black rounded-2xl border-[5px] border-[#222] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden relative flex flex-col">
            {/* Monitor Header */}
            <div className="h-6 bg-[#18181b] flex items-center px-3 justify-between border-b border-white/5">
              <span className="text-[10px] font-mono text-white/40">Blinky Desktop Companion</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>

            {/* Video Feed on PC */}
            <div className="flex-1 w-full h-full relative overflow-hidden bg-black">
              <video
                key={current.desktopVideo}
                src={current.desktopVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Scenario Description Below Screen */}
          <div className="mt-6 text-center max-w-sm">
            <div className="text-sm font-medium text-white mb-1">
              {current.title}
            </div>
            <p className="text-xs text-white/50 leading-relaxed font-light">
              {current.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
