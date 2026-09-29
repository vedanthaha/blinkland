"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Command = {
  id: string;
  label: string;
  timeline: { title: string; duration: number; type: 'input' | 'app' | 'done' }[];
  appColor: string;
};

const COMMANDS: Command[] = [
  {
    id: 'spotify',
    label: 'Open Spotify',
    appColor: '#1DB954',
    timeline: [
      { title: 'Opening application', duration: 800, type: 'input' },
      { title: 'Spotify appears', duration: 1200, type: 'app' },
      { title: 'Done', duration: 500, type: 'done' }
    ]
  },
  {
    id: 'vscode',
    label: 'Open VS Code',
    appColor: '#007ACC',
    timeline: [
      { title: 'Opening VS Code', duration: 800, type: 'input' },
      { title: 'Workspace loading', duration: 1500, type: 'app' },
      { title: 'Done', duration: 500, type: 'done' }
    ]
  },
  {
    id: 'save',
    label: 'Press Ctrl + S',
    appColor: '#333333',
    timeline: [
      { title: 'Triggering shortcut', duration: 600, type: 'input' },
      { title: 'File saved', duration: 800, type: 'app' },
      { title: 'Done', duration: 500, type: 'done' }
    ]
  }
];

export function ActInteractive() {
  const [activeCommand, setActiveCommand] = useState<Command | null>(null);
  const [stepIndex, setStepIndex] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);

  const runCommand = (cmd: Command) => {
    if (isRunning) return;
    setActiveCommand(cmd);
    setStepIndex(-1);
    setIsRunning(true);
    
    let currentStep = 0;
    
    const executeNextStep = () => {
      if (currentStep >= cmd.timeline.length) {
        setIsRunning(false);
        return;
      }
      
      setStepIndex(currentStep);
      
      setTimeout(() => {
        currentStep++;
        executeNextStep();
      }, cmd.timeline[currentStep].duration);
    };
    
    // Slight delay before starting
    setTimeout(executeNextStep, 400);
  };

  return (
    <section className="py-32 px-6 md:px-12 w-full max-w-[1400px] mx-auto border-t border-white/5">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-[#FF5A1F]/30 text-[#FF5A1F] bg-[#FF5A1F]/10 mb-6">
          ACT
        </div>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
          Blinky <span className="text-[#FF5A1F]">acts</span> on your behalf.
        </h2>
        <p className="text-xl text-white/60 font-light mb-12 max-w-2xl leading-relaxed">
          Select a command to watch Blinky control the computer in real-time.
        </p>

        {/* Command Rail */}
        <div className="flex overflow-x-auto pb-4 gap-4 hide-scrollbar">
          {COMMANDS.map((cmd) => (
            <button
              key={cmd.id}
              onClick={() => runCommand(cmd)}
              disabled={isRunning && activeCommand?.id !== cmd.id}
              className={`whitespace-nowrap px-6 py-4 rounded-full font-medium transition-all ${
                activeCommand?.id === cmd.id 
                  ? 'bg-white text-black shadow-lg scale-105' 
                  : 'bg-[#111] text-white/70 border border-white/10 hover:bg-white/10 hover:text-white'
              } ${isRunning && activeCommand?.id !== cmd.id ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {cmd.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Interactive Simulation Area */}
      <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl">
        
        {/* Top: Command Input Bar (Visual only) */}
        <div className="max-w-xl mx-auto mb-12 relative">
          <div className="bg-[#111] border border-white/10 rounded-full px-6 py-4 flex items-center shadow-lg">
            <span className="text-white/40 mr-3">Blinky {'>'}</span>
            <span className="text-white font-medium">
              {activeCommand ? activeCommand.label : "Select a command above..."}
            </span>
          </div>
          {isRunning && (
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "linear" }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] w-1/2 bg-[#FF5A1F] origin-left rounded-full"
            />
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Side: Execution Timeline */}
          <div className="w-full lg:w-64 shrink-0 flex flex-col gap-6 relative">
            <div className="absolute top-4 bottom-4 left-[11px] w-[2px] bg-white/5 z-0"></div>
            
            {activeCommand ? (
              activeCommand.timeline.map((step, idx) => {
                const isActive = stepIndex === idx;
                const isPast = stepIndex > idx;
                
                return (
                  <div key={idx} className="flex items-center gap-4 relative z-10">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isActive ? 'bg-[#FF5A1F] text-white shadow-[0_0_15px_rgba(255,90,31,0.5)]' : 
                      isPast ? 'bg-white/20 text-white/50' : 'bg-[#111] border border-white/10 text-transparent'
                    }`}>
                      {isPast && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                      {isActive && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                    <span className={`font-medium transition-colors duration-300 ${isActive ? 'text-white' : isPast ? 'text-white/50' : 'text-white/20'}`}>
                      {step.title}
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="text-white/30 text-sm font-medium italic">Waiting for command...</div>
            )}
          </div>

          {/* Center: Desktop Visualization */}
          <div className="flex-1 w-full bg-[#111] border border-white/5 rounded-xl aspect-[16/10] relative overflow-hidden flex items-center justify-center p-8">
            
            {/* Desktop Wallpaper / Base */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#050505] to-[#111] pointer-events-none"></div>

            <AnimatePresence mode="wait">
              {activeCommand && stepIndex >= 0 ? (
                <motion.div
                  key={activeCommand.id + stepIndex}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.2 } }}
                  className="w-full max-w-lg relative z-10"
                >
                  {/* Render abstract app UI based on step */}
                  {activeCommand.timeline[stepIndex].type === 'input' && (
                    <div className="w-full h-32 bg-[#1A1A1A] border border-white/10 rounded-xl flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full border-2 border-t-[#FF5A1F] border-r-[#FF5A1F] border-b-white/10 border-l-white/10 animate-spin"></div>
                    </div>
                  )}

                  {activeCommand.timeline[stepIndex].type === 'app' && (
                    <motion.div 
                      initial={{ height: 100 }}
                      animate={{ height: 280 }}
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden"
                      style={{ borderTop: `4px solid ${activeCommand.appColor}` }}
                    >
                      <div className="h-10 border-b border-white/5 flex items-center px-4">
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                      </div>
                      <div className="flex-1 p-6 flex flex-col gap-4">
                        <div className="h-8 w-1/3 bg-white/5 rounded"></div>
                        <div className="h-4 w-2/3 bg-white/5 rounded"></div>
                        <div className="flex-1 bg-white/5 rounded mt-4"></div>
                      </div>
                    </motion.div>
                  )}

                  {activeCommand.timeline[stepIndex].type === 'done' && (
                    <motion.div 
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="w-full h-48 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl flex flex-col items-center justify-center text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-4">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div className="font-medium text-white">Task Completed</div>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white/20 font-medium"
                >
                  Desktop Preview
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>

        </div>
      </div>
    </section>
  );
}
