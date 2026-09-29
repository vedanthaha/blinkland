"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Target = 'export' | 'layers' | 'settings' | null;

export function SeeInteractive() {
  const [activeTarget, setActiveTarget] = useState<Target>(null);
  const [detectionState, setDetectionState] = useState<'idle' | 'detecting' | 'highlighted'>('idle');

  const handleInteract = (target: Target) => {
    if (detectionState !== 'idle') return;
    
    setActiveTarget(target);
    setDetectionState('detecting');

    setTimeout(() => {
      setDetectionState('highlighted');
      
      setTimeout(() => {
        setDetectionState('idle');
        setActiveTarget(null);
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
              SEE
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
              Blinky <span className="text-[#FF5A1F]">sees</span> what you see.
            </h2>
            <p className="text-xl text-white/60 font-light mb-10 max-w-md leading-relaxed">
              It understands the software in front of you and guides you directly on screen. Try asking for something.
            </p>

            <div className="flex flex-wrap gap-3">
              <button onClick={() => handleInteract('export')} className="px-5 py-2.5 rounded-full bg-[#111] border border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium">
                "Where is Export?"
              </button>
              <button onClick={() => handleInteract('layers')} className="px-5 py-2.5 rounded-full bg-[#111] border border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium">
                "Find the Layers"
              </button>
              <button onClick={() => handleInteract('settings')} className="px-5 py-2.5 rounded-full bg-[#111] border border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium">
                "Where are Settings?"
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Fake UI Desktop */}
        <div className="flex-[1.5] w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden aspect-[16/10] flex flex-col"
          >
            {/* Window Header */}
            <div className="h-10 border-b border-white/10 bg-[#111] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="mx-auto text-xs font-medium text-white/30">DesignEditor Pro</div>
            </div>

            {/* Fake App Interface */}
            <div className="flex-1 flex bg-[#050505] p-6 gap-6 relative">
              
              {/* Left Sidebar */}
              <div className="w-48 bg-[#111] rounded-xl border border-white/5 p-4 flex flex-col gap-3">
                <div className="h-6 bg-white/5 rounded w-full mb-4"></div>
                <div className="h-8 bg-white/5 rounded w-full relative">
                  {/* Layers Target */}
                  {activeTarget === 'layers' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute -inset-1 border-2 border-[#FF5A1F] rounded-lg pointer-events-none z-20"
                    >
                      {detectionState === 'highlighted' && (
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="absolute top-1/2 -right-32 -translate-y-1/2 bg-[#FF5A1F] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                          Here are the layers
                          <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-[#FF5A1F] rotate-45"></div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                  {detectionState === 'detecting' && activeTarget === 'layers' && (
                     <div className="absolute inset-0 bg-[#FF5A1F]/20 animate-pulse rounded"></div>
                  )}
                </div>
                <div className="h-8 bg-white/5 rounded w-full"></div>
                <div className="h-8 bg-white/5 rounded w-full"></div>
                
                <div className="mt-auto h-8 bg-white/5 rounded w-full relative">
                  {/* Settings Target */}
                   {activeTarget === 'settings' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute -inset-1 border-2 border-[#FF5A1F] rounded-lg pointer-events-none z-20"
                    >
                      {detectionState === 'highlighted' && (
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="absolute top-1/2 -right-28 -translate-y-1/2 bg-[#FF5A1F] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                          Settings icon
                          <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-[#FF5A1F] rotate-45"></div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                  {detectionState === 'detecting' && activeTarget === 'settings' && (
                     <div className="absolute inset-0 bg-[#FF5A1F]/20 animate-pulse rounded"></div>
                  )}
                </div>
              </div>

              {/* Main Canvas */}
              <div className="flex-1 bg-[#1A1A1A] rounded-xl border border-white/5 flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-sm aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 shadow-inner"></div>
              </div>

              {/* Top Right Actions */}
              <div className="absolute top-8 right-8 flex gap-3">
                <div className="w-24 h-8 bg-[#111] border border-white/10 rounded flex items-center justify-center text-[10px] text-white/50 uppercase font-bold tracking-wider relative">
                  Share
                </div>
                <div className="w-24 h-8 bg-white text-black rounded flex items-center justify-center text-[10px] uppercase font-bold tracking-wider relative">
                  Export
                  
                  {/* Export Target */}
                  {activeTarget === 'export' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute -inset-1.5 border-2 border-[#FF5A1F] rounded-lg pointer-events-none z-20"
                    >
                      {detectionState === 'highlighted' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full right-0 mt-3 bg-[#FF5A1F] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                          Export button
                          <div className="absolute -top-1 right-8 w-2 h-2 bg-[#FF5A1F] rotate-45"></div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                  {detectionState === 'detecting' && activeTarget === 'export' && (
                     <div className="absolute inset-0 bg-[#FF5A1F]/30 animate-pulse rounded"></div>
                  )}
                </div>
              </div>

            </div>
            
            {/* Scanning overlay effect */}
            <AnimatePresence>
              {detectionState === 'detecting' && (
                <motion.div 
                  initial={{ top: 0, opacity: 0 }}
                  animate={{ top: "100%", opacity: [0, 0.5, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "linear" }}
                  className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#FF5A1F]/20 to-transparent pointer-events-none z-30"
                ></motion.div>
              )}
            </AnimatePresence>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
}
