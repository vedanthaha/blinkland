"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const demos = [
  {
    id: "spotify",
    title: "Open Spotify",
    subtitle: "Quick Action",
    video: "/open_spotify.mp4",
    color: "from-[#1DB954]"
  },
  {
    id: "search",
    title: "Search the web",
    subtitle: "Autonomous Agent",
    video: "/local_web_search.mp4",
    color: "from-[#FF5A1F]"
  },
  {
    id: "edit",
    title: "Video edit? Here.",
    subtitle: "Creative Workflow",
    video: "/edit_video.mp4",
    color: "from-[#9d4edd]"
  }
];

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState<typeof demos[0] | null>(null);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-[#FF5A1F] selection:text-white pt-32 pb-32 overflow-hidden relative">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#FF5A1F] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="text-[#FF5A1F] font-bold tracking-[0.2em] uppercase mb-4 text-sm">Demonstrations</div>
          <h1 className="text-5xl md:text-7xl font-light mb-6">See Blinky in Action.</h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-sans font-light">
            Select a workflow to see how seamlessly Blinky understands your screen and executes tasks.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demos.map((demo, idx) => (
            <motion.div 
              key={demo.id}
              layoutId={`card-${demo.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8, type: "spring", bounce: 0.4 }}
              onClick={() => setActiveDemo(demo)}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer group shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              {/* Thumbnail Video (Silent/Muted) */}
              <video 
                src={demo.video}
                autoPlay loop muted playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${demo.color} to-transparent opacity-60 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-80`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              {/* Content */}
              <motion.div layoutId={`content-${demo.id}`} className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                <motion.div layoutId={`subtitle-${demo.id}`} className="text-white/70 text-sm tracking-widest uppercase mb-2 font-bold">{demo.subtitle}</motion.div>
                <motion.h2 layoutId={`title-${demo.id}`} className="text-3xl font-light">{demo.title}</motion.h2>
                
                {/* Play Button Indicator */}
                <div className="mt-8 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Cinematic View */}
      <AnimatePresence>
        {activeDemo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
          >
            {/* Close Button */}
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.4 } }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setActiveDemo(null)}
              className="absolute top-8 right-8 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-md"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </motion.button>

            {/* Cinematic Container */}
            <motion.div 
              layoutId={`card-${activeDemo.id}`}
              className="w-full max-w-[1600px] h-full max-h-[90vh] bg-black rounded-[2rem] overflow-hidden relative shadow-[0_0_100px_rgba(255,90,31,0.2)] border border-white/10 flex flex-col md:flex-row"
            >
              {/* Video Player */}
              <div className="w-full md:w-3/4 h-full relative bg-black">
                <video 
                  src={activeDemo.video}
                  autoPlay loop controls playsInline
                  className="w-full h-full object-contain bg-black"
                />
              </div>
              
              {/* Sidebar Info */}
              <motion.div 
                layoutId={`content-${activeDemo.id}`}
                className="w-full md:w-1/4 h-full bg-[#0a0a0a] p-8 md:p-12 border-l border-white/10 flex flex-col justify-center relative overflow-hidden"
              >
                {/* Accent glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${activeDemo.color} to-transparent opacity-20 blur-[80px]`}></div>
                
                <div className="relative z-10">
                  <motion.div layoutId={`subtitle-${activeDemo.id}`} className="text-[#FF5A1F] text-sm tracking-widest uppercase mb-4 font-bold">{activeDemo.subtitle}</motion.div>
                  <motion.h2 layoutId={`title-${activeDemo.id}`} className="text-4xl md:text-5xl font-light mb-8">{activeDemo.title}</motion.h2>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs text-white/50 uppercase tracking-wide mb-1">Status</div>
                      <div className="flex items-center gap-2 text-green-400 font-mono text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        Execution Successful
                      </div>
                    </div>
                    
                    <p className="text-white/60 font-sans leading-relaxed text-sm">
                      Blinky intelligently processes your command, maps the visual elements on your screen, and autonomously orchestrates the exact sequence of clicks and keystrokes to execute the workflow flawlessly.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
