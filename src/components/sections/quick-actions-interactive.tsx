"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  VolumeX, 
  Globe, 
  Music, 
  Lightbulb, 
  Volume2, 
  Volume1, 
  FolderDown, 
  Settings,
  CheckCircle2,
  Loader2
} from 'lucide-react';

type Tab = 'MEDIA' | 'APPS' | 'SYSTEM' | 'SMART HOME';

export function QuickActionsInteractive() {
  const [activeTab, setActiveTab] = useState<Tab>('APPS');
  const [status, setStatus] = useState("Ready");
  const [mediaPlaying, setMediaPlaying] = useState(false);
  const [lightOn, setLightOn] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const TABS: Tab[] = ['MEDIA', 'APPS', 'SYSTEM', 'SMART HOME'];

  const handleAction = (actionName: string, actionCategory: string) => {
    if (isProcessing) return;
    setIsProcessing(true);
    setLastAction(actionName);
    
    // Initial status
    if (actionName.includes('OPEN')) {
      setStatus(`Opening ${actionName.replace('OPEN ', '')}...`);
    } else {
      setStatus(`Executing ${actionName}...`);
    }

    setTimeout(() => {
      // Execute the state change
      if (actionName === 'PLAY / MUTE') {
        setMediaPlaying(!mediaPlaying);
        setStatus(mediaPlaying ? 'Muted' : 'Playing');
      } else if (actionName === 'TOGGLE LIGHT') {
        setLightOn(!lightOn);
        setStatus(lightOn ? 'Light OFF' : 'Light ON');
      } else if (actionName === 'VOLUME UP') {
        setVolume(v => Math.min(100, v + 20));
        setStatus('Volume increased');
      } else if (actionName === 'VOLUME DOWN') {
        setVolume(v => Math.max(0, v - 20));
        setStatus('Volume decreased');
      } else {
        setStatus('✓ Done');
      }
      
      setIsProcessing(false);
      
      // Clear status after a bit if we want to reset to ready
      setTimeout(() => {
        setLastAction(null);
      }, 3000);
      
    }, 800);
  };

  return (
    <section className="py-32 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-white/5">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Typography */}
        <div className="flex-1 lg:pr-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-[#FF5A1F]/30 text-[#FF5A1F] bg-[#FF5A1F]/10 mb-6">
              QUICK ACTIONS
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
              Some things<br/>don&apos;t need a command.
            </h2>
            <p className="text-xl text-white/60 font-light mb-10 max-w-md leading-relaxed">
              Give Blinky one-tap actions for the things you do all the time.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Interactive Panel */}
        <div className="flex-[1.5] w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] shadow-2xl relative flex flex-col min-h-[500px]"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FF5A1F]/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

            {/* Panel Header */}
            <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 z-10 bg-[#111]/50 rounded-t-[2rem] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center p-1.5 shadow-inner">
                  <img src="/blinky_mascot_logo.png" alt="Blinky" className="w-full h-full object-contain" />
                </div>
                <span className="font-semibold text-sm tracking-wide text-white">QUICK ACTIONS</span>
              </div>
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
              </div>
            </div>

            <div className="flex flex-1 z-10 relative">
              {/* Category Sidebar */}
              <div className="w-40 border-r border-white/10 flex flex-col p-4 gap-2">
                {TABS.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-left px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-colors ${
                      activeTab === tab ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Action Area */}
              <div className="flex-1 p-8 flex flex-col">
                
                {/* Actions Grid */}
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      {activeTab === 'MEDIA' && (
                        <>
                          <ActionCard 
                            icon={mediaPlaying ? <Play className="w-5 h-5 text-[#FF5A1F]" /> : <VolumeX className="w-5 h-5 text-white/70" />}
                            label="PLAY / MUTE" 
                            active={mediaPlaying}
                            onClick={() => handleAction('PLAY / MUTE', 'MEDIA')} 
                            isProcessing={isProcessing && lastAction === 'PLAY / MUTE'}
                          />
                          <ActionCard 
                            icon={<Volume2 className="w-5 h-5 text-white/70" />}
                            label="VOLUME UP" 
                            onClick={() => handleAction('VOLUME UP', 'MEDIA')} 
                            isProcessing={isProcessing && lastAction === 'VOLUME UP'}
                          />
                          <ActionCard 
                            icon={<Volume1 className="w-5 h-5 text-white/70" />}
                            label="VOLUME DOWN" 
                            onClick={() => handleAction('VOLUME DOWN', 'MEDIA')} 
                            isProcessing={isProcessing && lastAction === 'VOLUME DOWN'}
                          />
                          {/* Visual Volume Indicator */}
                          <div className="col-span-2 mt-4 px-4 py-3 bg-[#111] rounded-xl border border-white/5 flex items-center gap-4">
                            <Volume1 className="w-4 h-4 text-white/40" />
                            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <motion.div animate={{ width: `${volume}%` }} className="h-full bg-white transition-all"></motion.div>
                            </div>
                            <Volume2 className="w-4 h-4 text-white/40" />
                          </div>
                        </>
                      )}

                      {activeTab === 'APPS' && (
                        <>
                          <ActionCard 
                            icon={<Globe className="w-5 h-5 text-blue-400" />}
                            label="OPEN BROWSER" 
                            onClick={() => handleAction('OPEN BROWSER', 'APPS')} 
                            isProcessing={isProcessing && lastAction === 'OPEN BROWSER'}
                          />
                          <ActionCard 
                            icon={<Music className="w-5 h-5 text-green-400" />}
                            label="OPEN SPOTIFY" 
                            onClick={() => handleAction('OPEN SPOTIFY', 'APPS')} 
                            isProcessing={isProcessing && lastAction === 'OPEN SPOTIFY'}
                          />
                        </>
                      )}

                      {activeTab === 'SYSTEM' && (
                        <>
                          <ActionCard 
                            icon={<FolderDown className="w-5 h-5 text-yellow-400" />}
                            label="OPEN DOWNLOADS" 
                            onClick={() => handleAction('OPEN DOWNLOADS', 'SYSTEM')} 
                            isProcessing={isProcessing && lastAction === 'OPEN DOWNLOADS'}
                          />
                          <ActionCard 
                            icon={<Settings className="w-5 h-5 text-white/70" />}
                            label="OPEN SETTINGS" 
                            onClick={() => handleAction('OPEN SETTINGS', 'SYSTEM')} 
                            isProcessing={isProcessing && lastAction === 'OPEN SETTINGS'}
                          />
                        </>
                      )}

                      {activeTab === 'SMART HOME' && (
                        <>
                          <ActionCard 
                            icon={<Lightbulb className={`w-5 h-5 ${lightOn ? 'text-yellow-400' : 'text-white/70'}`} />}
                            label="TOGGLE LIGHT" 
                            active={lightOn}
                            onClick={() => handleAction('TOGGLE LIGHT', 'SMART HOME')} 
                            isProcessing={isProcessing && lastAction === 'TOGGLE LIGHT'}
                          />
                          {/* Visual Light Indicator */}
                          <div className="col-span-2 mt-4 px-4 py-6 bg-[#111] rounded-xl border border-white/5 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                            <motion.div animate={{ opacity: lightOn ? 1 : 0 }} className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-yellow-400/20 blur-[30px] rounded-full"></motion.div>
                            <Lightbulb className={`w-8 h-8 relative z-10 transition-colors ${lightOn ? 'text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]' : 'text-white/20'}`} />
                            <span className="text-xs font-bold text-white/50 tracking-widest z-10">{lightOn ? 'LIVING ROOM: ON' : 'LIVING ROOM: OFF'}</span>
                          </div>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Status Bar */}
                <div className="mt-8 h-12 bg-[#111] border border-white/5 rounded-xl flex items-center px-4 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF5A1F]"></div>
                  
                  <div className="flex items-center gap-3 w-full">
                    {isProcessing ? (
                      <Loader2 className="w-4 h-4 text-[#FF5A1F] animate-spin" />
                    ) : status.includes('✓') ? (
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse ml-1"></div>
                    )}
                    
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={status}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className={`text-sm font-medium ${status.includes('✓') || status.includes('ON') || status.includes('Playing') ? 'text-white' : 'text-white/70'}`}
                      >
                        {status}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function ActionCard({ 
  icon, 
  label, 
  onClick, 
  active = false,
  isProcessing = false
}: { 
  icon: React.ReactNode, 
  label: string, 
  onClick: () => void,
  active?: boolean,
  isProcessing?: boolean
}) {
  return (
    <button 
      onClick={onClick}
      disabled={isProcessing}
      className={`relative overflow-hidden flex flex-col gap-4 p-5 rounded-2xl border text-left transition-all ${
        active 
          ? 'bg-[#FF5A1F]/10 border-[#FF5A1F]/30 shadow-[0_0_15px_rgba(255,90,31,0.1)]' 
          : 'bg-[#111] border-white/5 hover:bg-white/5 hover:border-white/10'
      } ${isProcessing ? 'opacity-80 cursor-wait' : ''}`}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${active ? 'bg-[#FF5A1F]/20' : 'bg-white/5'}`}>
        {icon}
      </div>
      <span className="text-xs font-bold tracking-wider text-white">{label}</span>
      
      {/* Click ripple / Processing overlay */}
      {isProcessing && (
        <motion.div 
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 10, opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-white/20 rounded-full origin-center pointer-events-none"
        ></motion.div>
      )}
    </button>
  );
}
