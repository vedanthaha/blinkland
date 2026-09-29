"use client"
import React, { useState } from 'react';

interface DemoVideoProps {
  commandText?: string;
  category?: string;
  duration?: string;
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
}

export function DemoVideo({ 
  commandText, 
  category, 
  duration,
  src, 
  poster = "",
  className = "",
  autoPlay = true
}: DemoVideoProps) {
  const [hasError, setHasError] = useState(false);
  
  return (
    <div className={`relative group rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/10 ${className}`}>
      {/* Video Area */}
      <div className="w-full h-full relative flex items-center justify-center bg-[#050505]">
        {!hasError ? (
          <video 
            src={src} 
            poster={poster}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            autoPlay={autoPlay}
            loop
            muted
            playsInline
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30 bg-[#111]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
              <line x1="7" y1="2" x2="7" y2="22"></line>
              <line x1="17" y1="2" x2="17" y2="22"></line>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <line x1="2" y1="7" x2="7" y2="7"></line>
              <line x1="2" y1="17" x2="7" y2="17"></line>
              <line x1="17" y1="17" x2="22" y2="17"></line>
              <line x1="17" y1="7" x2="22" y2="7"></line>
            </svg>
            <span className="text-sm font-medium tracking-wide uppercase">Demo video coming soon</span>
          </div>
        )}
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
          <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
        </div>

        {/* Command Pill Overlay */}
        {commandText && (
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-black/90 backdrop-blur-xl border border-white/15 rounded-full px-5 py-3 flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <img src="/blinky mascot logo.png" className="w-5 h-5 object-contain" alt="Blinky" />
            <span className="text-white text-sm font-medium">{commandText}</span>
            <div className="w-6 h-6 rounded-full bg-[#FF5A1F]/20 flex items-center justify-center ml-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </div>
          </div>
        )}
      </div>

      {/* Video Footer Data */}
      {(category || duration) && (
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          {category && (
            <div className="bg-black/80 backdrop-blur text-[10px] text-white/90 px-2 py-1 rounded border border-white/10 font-bold uppercase tracking-wider">
              {category}
            </div>
          )}
          {duration && (
            <div className="bg-black/80 backdrop-blur flex items-center gap-1.5 text-xs text-white/80 px-2 py-1 rounded border border-white/10">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              {duration}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
