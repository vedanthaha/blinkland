"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundPixelStars } from '@/components/ui/background-pixel-stars';

export function HeroInteractive() {
  const [command, setCommand] = useState('');
  const [demoState, setDemoState] = useState<'idle' | 'typing' | 'listening' | 'understanding' | 'acting' | 'success'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [isHoveringMic, setIsHoveringMic] = useState(false);

  const runDemo = () => {
    if (demoState !== 'idle' && demoState !== 'success') return;
    
    setCommand('');
    setLogs([]);
    setDemoState('typing');

    const fullCommand = "Open Spotify and play Midnight City";
    let i = 0;
    
    // Typewriter effect
    const typeInterval = setInterval(() => {
      setCommand(fullCommand.slice(0, i + 1));
      i++;
      if (i === fullCommand.length) {
        clearInterval(typeInterval);
        
        // Move to understanding
        setTimeout(() => {
          setDemoState('understanding');
          setLogs(["Understanding..."]);
          
          // Move to acting
          setTimeout(() => {
            setDemoState('acting');
            setLogs(l => [...l, "Opening Spotify..."]);
            
            setTimeout(() => {
              setLogs(l => [...l, "Searching for Midnight City..."]);
              
              setTimeout(() => {
                setLogs(l => [...l, "Playing..."]);
                
                // Move to success
                setTimeout(() => {
                  setDemoState('success');
                  setLogs(l => [...l, "✓ Done"]);
                  
                  // Reset after a while
                  setTimeout(() => {
                    setDemoState('idle');
                    setCommand('');
                    setLogs([]);
                  }, 4000);
                }, 1000);
              }, 1200);
            }, 1200);
          }, 1500);
        }, 1000);
      }
    }, 50);
  };

  // Determine mascot animation variants based on state
  const getMascotAnimation = () => {
    switch (demoState) {
      case 'listening':
        return { y: [-5, 5], scale: [1, 1.05], transition: { repeat: Infinity, repeatType: "reverse" as const, duration: 0.5, ease: "easeInOut" as const } };
      case 'understanding':
        return { scale: [1, 0.95, 1], filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"], transition: { repeat: Infinity, repeatType: "reverse" as const, duration: 1.2, ease: "easeInOut" as const } };
      case 'acting':
        return { x: [-3, 3, -3], y: [-15, -15], rotation: [-2, 2, -2], transition: { repeat: Infinity, repeatType: "reverse" as const, duration: 0.4 } };
      case 'success':
        return { scale: [1, 1.1, 1], y: -20, transition: { duration: 0.5, ease: "easeOut" as const } };
      case 'typing':
        return { y: -10, transition: { duration: 0.5 } };
      case 'idle':
      default:
        return { y: [-10, 10], transition: { repeat: Infinity, repeatType: "reverse" as const, duration: 3, ease: "easeInOut" as const } };
    }
  };

  return (
    <section className="relative overflow-hidden pt-40 pb-20 px-6 md:px-12 w-full min-h-[95vh] flex flex-col items-center justify-center bg-black bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAIElEQVR42mIUEhJiwAbevXuHVZyJgUQwqmEUDB0AEGAADd8DEPTX6ksAAAAASUVORK5CYII=')] bg-[size:10px]">
      <BackgroundPixelStars />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF5A1F]/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0"></div>

      <div className="max-w-[1200px] mx-auto w-full z-10 relative flex flex-col items-center text-center">
        
        {/* Top Typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-medium leading-[1.05] tracking-tight mb-6"
        >
          Tell Blinky.<br />
          <span className="text-[#FF5A1F]">It gets it done.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-xl md:text-2xl text-white/80 mb-16 max-w-2xl font-light leading-relaxed"
        >
          Blinky sees what you see, understands what you ask, and takes care of the computer work.
        </motion.p>

        {/* Mascot & Interface Container */}
        <div className="relative w-full max-w-2xl flex flex-col items-center">
          
          {/* Mascot */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[240px] flex items-center justify-center mb-8"
          >
            <div className="absolute inset-0 bg-[#FF5A1F] blur-[80px] opacity-20 rounded-full pointer-events-none"></div>
            <motion.img 
              animate={getMascotAnimation()}
              src="/blinky_mascot_logo.png" 
              alt="Blinky Mascot" 
              className="w-[180px] md:w-[220px] object-contain drop-shadow-2xl relative z-10"
            />
            
            {/* Status Logs floating next to Mascot */}
            <div className="absolute top-1/2 -right-32 md:-right-48 -translate-y-1/2 flex flex-col gap-2 w-48 pointer-events-none">
              <AnimatePresence>
                {logs.map((log, idx) => (
                  <motion.div
                    key={idx + log}
                    initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                    animate={{ opacity: idx === logs.length - 1 ? 1 : 0.5, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(4px)" }}
                    className={`text-sm font-medium ${idx === logs.length - 1 && demoState === 'success' ? 'text-green-400' : 'text-white'}`}
                  >
                    {log}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Command Field */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full relative group"
            onClick={runDemo}
          >
            <div className={`absolute -inset-1 bg-gradient-to-r from-[#FF5A1F]/0 via-[#FF5A1F]/40 to-[#FF5A1F]/0 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 ${demoState !== 'idle' ? 'opacity-50 animate-pulse' : ''}`}></div>
            <div className="relative flex items-center bg-[#111] border border-white/10 rounded-full px-6 py-5 shadow-2xl transition-all cursor-text overflow-hidden">
              
              <div className="flex-1 overflow-hidden relative h-7">
                {!command && demoState === 'idle' && (
                  <span className="absolute inset-0 text-white/40 text-lg flex items-center pointer-events-none">
                    What should Blinky do?
                  </span>
                )}
                <span className="text-white text-lg flex items-center h-full whitespace-nowrap">
                  {command}
                  {demoState === 'typing' && <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, repeatType: "reverse" as const, duration: 0.4 }} className="w-0.5 h-5 bg-[#FF5A1F] ml-1 inline-block"></motion.span>}
                </span>
              </div>

              <div className="flex items-center gap-3 pl-4 border-l border-white/10 ml-4">
                <button 
                  onMouseEnter={() => setIsHoveringMic(true)}
                  onMouseLeave={() => setIsHoveringMic(false)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${demoState === 'listening' || isHoveringMic ? 'bg-[#FF5A1F] text-white' : 'bg-white/5 text-white/50 hover:text-white'}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
                </button>
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest px-2 hidden sm:block">
                  OR LISTEN
                </div>
              </div>

            </div>
          </motion.div>
          
          <div className="mt-6 text-sm text-white/30 flex gap-4">
            <span className="cursor-pointer hover:text-white/60 transition-colors" onClick={(e) => { e.stopPropagation(); runDemo(); }}>Try: "Open Spotify"</span>
            <span className="cursor-pointer hover:text-white/60 transition-colors" onClick={(e) => { e.stopPropagation(); runDemo(); }}>Try: "Export this project"</span>
          </div>

        </div>
      </div>
    </section>
  );
}
