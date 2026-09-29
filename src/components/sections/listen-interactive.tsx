"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ListenInteractive() {
  const [status, setStatus] = useState<'idle' | 'listening' | 'thinking' | 'done'>('idle');
  const [transcript, setTranscript] = useState("");
  
  const runSimulation = () => {
    if (status !== 'idle' && status !== 'done') return;
    setStatus('listening');
    setTranscript("");

    const fullText = "Open my project and start the development server.";
    let i = 0;
    
    const interval = setInterval(() => {
      setTranscript(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setStatus('thinking');
          setTranscript("Thinking...");
          
          setTimeout(() => {
            setTranscript("On it.");
            
            setTimeout(() => {
              setStatus('done');
              setTranscript("Done.");
              
              setTimeout(() => {
                setStatus('idle');
                setTranscript("");
              }, 3000);
            }, 1000);
          }, 1500);
        }, 800);
      }
    }, 40);
  };

  const getMascotAnimation = () => {
    switch (status) {
      case 'listening':
        return { y: [-2, 2], scale: [1, 1.02], transition: { repeat: Infinity, repeatType: "reverse" as const, duration: 0.3 } };
      case 'thinking':
        return { scale: [1, 0.95, 1], transition: { repeat: Infinity, repeatType: "reverse" as const, duration: 1 } };
      case 'done':
        return { scale: [1, 1.1, 1], transition: { duration: 0.4 } };
      default:
        return { y: [-5, 5], transition: { repeat: Infinity, repeatType: "reverse" as const, duration: 3, ease: "easeInOut" as const } };
    }
  };

  return (
    <section className="py-32 px-6 md:px-12 w-full flex flex-col items-center justify-center">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Typography */}
        <div className="flex-1 md:pr-12 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
              Blinky <span className="text-[#FF5A1F]">listens.</span>
            </h2>
            <p className="text-xl text-white/60 font-light max-w-md mx-auto md:mx-0">
              Just tell it what you need.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Interactive Panel */}
        <div className="flex-[1.5] w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={runSimulation}
            className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group cursor-pointer hover:border-white/20 transition-colors shadow-2xl min-h-[400px] flex flex-col items-center justify-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#FF5A1F]/5 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Mascot */}
            <motion.div 
              animate={getMascotAnimation()}
              className="relative w-24 h-24 mb-12 z-10"
            >
              <img src="/blinky mascot logo.png" alt="Blinky Mascot" className="w-full h-full object-contain drop-shadow-xl" />
            </motion.div>

            {/* Waveform */}
            <div className="flex items-center justify-center gap-1.5 h-16 mb-8 z-10 w-full">
              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: status === 'listening' ? [8, Math.random() * 40 + 20, 8] : 4,
                    opacity: status === 'listening' ? 1 : 0.2
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse" as const,
                    duration: status === 'listening' ? Math.random() * 0.3 + 0.2 : 0.5,
                    ease: "easeInOut" as const,
                    delay: Math.random() * 0.2
                  }}
                  className={`w-1.5 rounded-full ${status === 'listening' ? 'bg-[#FF5A1F]' : 'bg-white'}`}
                />
              ))}
            </div>

            {/* Transcript & Status */}
            <div className="h-12 flex items-center justify-center z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={transcript || status}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`text-lg md:text-xl font-medium text-center ${status === 'done' ? 'text-green-400' : 'text-white'}`}
                >
                  {transcript || (status === 'idle' ? "Click to interact" : "")}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Listening Indicator */}
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${status === 'listening' ? 'bg-[#FF5A1F] animate-pulse' : 'bg-white/20'}`}></div>
              <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                {status === 'idle' ? 'STANDBY' : status}
              </span>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
