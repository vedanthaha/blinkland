"use client"
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function QuickActionsPage() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF5A1F] selection:text-white pb-32 pt-32">
      
      {/* HERO */}
      <div className="w-full flex flex-col items-center justify-center text-center px-6 mb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-sm font-bold text-[#FF5A1F] tracking-[0.2em] uppercase mb-8">Quick Actions</h1>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">Some things should<br/>just happen.</h2>
          <p className="text-xl text-white/50 font-light">One tap for the things you do all the time.</p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-40 max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* 01 - TOGGLE LIGHT */}
        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 flex flex-col items-start text-left">
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium uppercase tracking-wider mb-6 text-white/70">Smart Home</span>
            <h3 className="text-4xl font-medium mb-4">Toggle Light</h3>
            <p className="text-lg text-white/50 font-light">
              Control your environment instantly. Tap on your phone, and Blinky executes the action on your PC.
            </p>
          </div>
          <div className="w-full md:w-2/3 flex items-center justify-center gap-8 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
            {/* Phone */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}
              className="w-48 h-[400px] bg-black border-[6px] border-[#222] rounded-[2rem] shadow-2xl relative z-10 p-2 flex flex-col overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#222] rounded-b-xl z-20"></div>
              <video src="/toggle_light_mobile.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl"></video>
            </motion.div>

            {/* Connection line */}
            <div className="flex-1 h-[2px] bg-white/10 relative hidden md:block">
              <motion.div 
                animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-[#FF5A1F] shadow-[0_0_10px_#FF5A1F]"
              ></motion.div>
            </div>

            {/* PC */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="w-64 h-[400px] bg-black border-[6px] border-[#222] rounded-[2rem] shadow-2xl relative z-10 overflow-hidden flex items-center justify-center p-2"
            >
              <video key="light-toggle-pc" src="/light_toogle.mp4" autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover rounded-xl"></video>
            </motion.div>
          </div>
        </section>

        {/* 02 - OPEN BROWSER */}
        <section className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/3 flex flex-col items-start text-left">
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium uppercase tracking-wider mb-6 text-white/70">System</span>
            <h3 className="text-4xl font-medium mb-4">Open Browser</h3>
            <p className="text-lg text-white/50 font-light">
              Tap once. Your browser is already open on your desktop.
            </p>
          </div>
          <div className="w-full md:w-2/3 flex items-center justify-center gap-8 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
            {/* Phone */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}
              className="w-48 h-[400px] bg-black border-[6px] border-[#222] rounded-[2rem] shadow-2xl relative z-10 p-2 flex flex-col overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#222] rounded-b-xl z-20"></div>
              <video src="/open_browser_mobile.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl"></video>
            </motion.div>

            {/* Connection line */}
            <div className="flex-1 h-[2px] bg-white/10 relative hidden md:block">
              <motion.div 
                animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-[#FF5A1F] shadow-[0_0_10px_#FF5A1F]"
              ></motion.div>
            </div>

            {/* PC */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="w-[600px] max-w-full aspect-video bg-black border-[8px] border-[#222] rounded-xl shadow-2xl relative z-10 overflow-hidden flex items-center justify-center"
            >
              <video src="/browser_open.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover"></video>
            </motion.div>
          </div>
        </section>

        {/* 03 - PLAY MUSIC */}
        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 flex flex-col items-start text-left">
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium uppercase tracking-wider mb-6 text-white/70">Media</span>
            <h3 className="text-4xl font-medium mb-4">Play Music</h3>
            <p className="text-lg text-white/50 font-light">
              Start the music without reaching for your keyboard. One tap flows straight to your PC.
            </p>
          </div>
          <div className="w-full md:w-2/3 flex items-center justify-center gap-8 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
            {/* Phone */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}
              className="w-48 h-[400px] bg-black border-[6px] border-[#222] rounded-[2rem] shadow-2xl relative z-10 p-2 flex flex-col overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#222] rounded-b-xl z-20"></div>
              <video src="/music_phone.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl"></video>
            </motion.div>

            {/* Connection line */}
            <div className="flex-1 h-[2px] bg-white/10 relative hidden md:block">
              <motion.div 
                animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-[#FF5A1F] shadow-[0_0_10px_#FF5A1F]"
              ></motion.div>
            </div>

            {/* PC */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="w-[600px] max-w-full aspect-video bg-black border-[8px] border-[#222] rounded-xl shadow-2xl relative z-10 overflow-hidden flex items-center justify-center group/video cursor-pointer"
              onClick={toggleMute}
            >
              <video 
                ref={videoRef}
                src="/music_playing_pc.mp4" 
                autoPlay 
                loop 
                muted={isMuted} 
                playsInline 
                className="w-full h-full object-cover"
              ></video>
              
              {/* Audio Toggle Overlay */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10 opacity-0 group-hover/video:opacity-100 transition-opacity flex items-center justify-center">
                {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
