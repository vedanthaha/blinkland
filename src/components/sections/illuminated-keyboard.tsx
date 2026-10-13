"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Command, Laptop, Monitor } from 'lucide-react';

interface KeyConfig {
  id: string;
  label: string;
  sub?: string;
  width?: string;
  isGlowing?: boolean;
  align?: 'center' | 'left' | 'right';
  icon?: React.ComponentType<{ className?: string }>;
}

export function IlluminatedKeyboard() {
  const [platform, setPlatform] = useState<'windows' | 'mac'>('windows');
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [summonFired, setSummonFired] = useState(false);

  // Listen for physical keyboard hotkey
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newPressed = new Set(pressedKeys);
      if (e.key === 'Alt') newPressed.add('alt');
      if (e.key === 'Meta' || e.metaKey) newPressed.add('cmd');
      if (e.key === ' ') {
        newPressed.add('space');
        // Prevent default scroll only if Alt or Cmd is held
        if (e.altKey || e.metaKey) {
          e.preventDefault();
          setSummonFired(true);
          setTimeout(() => setSummonFired(false), 2200);
        }
      }
      setPressedKeys(newPressed);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const newPressed = new Set(pressedKeys);
      if (e.key === 'Alt') newPressed.delete('alt');
      if (e.key === 'Meta') newPressed.delete('cmd');
      if (e.key === ' ') newPressed.delete('space');
      setPressedKeys(newPressed);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [pressedKeys]);

  const triggerSummon = () => {
    setSummonFired(true);
    setTimeout(() => setSummonFired(false), 2400);
  };

  // Rows definition modeled after realistic laptop/desktop chiclet keyboard
  const row1: KeyConfig[] = [
    { id: 'tilde', label: '~', sub: '`', width: 'w-10 md:w-14' },
    { id: '1', label: '!', sub: '1', width: 'w-10 md:w-14' },
    { id: '2', label: '@', sub: '2', width: 'w-10 md:w-14' },
    { id: '3', label: '#', sub: '3', width: 'w-10 md:w-14' },
    { id: '4', label: '$', sub: '4', width: 'w-10 md:w-14' },
    { id: '5', label: '%', sub: '5', width: 'w-10 md:w-14' },
    { id: '6', label: '^', sub: '6', width: 'w-10 md:w-14' },
    { id: '7', label: '&', sub: '7', width: 'w-10 md:w-14' },
    { id: '8', label: '*', sub: '8', width: 'w-10 md:w-14' },
    { id: '9', label: '(', sub: '9', width: 'w-10 md:w-14' },
    { id: '0', label: ')', sub: '0', width: 'w-10 md:w-14' },
    { id: 'minus', label: '_', sub: '-', width: 'w-10 md:w-14' },
    { id: 'plus', label: '+', sub: '=', width: 'w-10 md:w-14' },
    { id: 'backspace', label: 'delete', width: 'w-16 md:w-20', align: 'right' }
  ];

  const row2: KeyConfig[] = [
    { id: 'tab', label: 'tab', width: 'w-14 md:w-20', align: 'left' },
    { id: 'q', label: 'Q', width: 'w-10 md:w-14' },
    { id: 'w', label: 'W', width: 'w-10 md:w-14' },
    { id: 'e', label: 'E', width: 'w-10 md:w-14' },
    { id: 'r', label: 'R', width: 'w-10 md:w-14' },
    { id: 't', label: 'T', width: 'w-10 md:w-14' },
    { id: 'y', label: 'Y', width: 'w-10 md:w-14' },
    { id: 'u', label: 'U', width: 'w-10 md:w-14' },
    { id: 'i', label: 'I', width: 'w-10 md:w-14' },
    { id: 'o', label: 'O', width: 'w-10 md:w-14' },
    { id: 'p', label: 'P', width: 'w-10 md:w-14' },
    { id: 'bracketl', label: '{', sub: '[', width: 'w-10 md:w-14' },
    { id: 'bracketr', label: '}', sub: ']', width: 'w-10 md:w-14' },
    { id: 'backslash', label: '|', sub: '\\', width: 'w-12 md:w-16' }
  ];

  const row3: KeyConfig[] = [
    { id: 'caps', label: 'caps lock', width: 'w-16 md:w-24', align: 'left' },
    { id: 'a', label: 'A', width: 'w-10 md:w-14' },
    { id: 's', label: 'S', width: 'w-10 md:w-14' },
    { id: 'd', label: 'D', width: 'w-10 md:w-14' },
    { id: 'f', label: 'F', width: 'w-10 md:w-14' },
    { id: 'g', label: 'G', width: 'w-10 md:w-14' },
    { id: 'h', label: 'H', width: 'w-10 md:w-14' },
    { id: 'j', label: 'J', width: 'w-10 md:w-14' },
    { id: 'k', label: 'K', width: 'w-10 md:w-14' },
    { id: 'l', label: 'L', width: 'w-10 md:w-14' },
    { id: 'colon', label: ':', sub: ';', width: 'w-10 md:w-14' },
    { id: 'quote', label: '"', sub: '\'', width: 'w-10 md:w-14' },
    { id: 'enter', label: 'return', width: 'w-16 md:w-24', align: 'right' }
  ];

  const row4: KeyConfig[] = [
    { id: 'shiftl', label: 'shift', width: 'w-20 md:w-28', align: 'left' },
    { id: 'z', label: 'Z', width: 'w-10 md:w-14' },
    { id: 'x', label: 'X', width: 'w-10 md:w-14' },
    { id: 'c', label: 'C', width: 'w-10 md:w-14' },
    { id: 'v', label: 'V', width: 'w-10 md:w-14' },
    { id: 'b', label: 'B', width: 'w-10 md:w-14' },
    { id: 'n', label: 'N', width: 'w-10 md:w-14' },
    { id: 'm', label: 'M', width: 'w-10 md:w-14' },
    { id: 'comma', label: '<', sub: ',', width: 'w-10 md:w-14' },
    { id: 'dot', label: '>', sub: '.', width: 'w-10 md:w-14' },
    { id: 'slash', label: '?', sub: '/', width: 'w-10 md:w-14' },
    { id: 'shiftr', label: 'shift', width: 'w-20 md:w-28', align: 'right' }
  ];

  const summonKeyLabel = platform === 'windows' ? 'alt' : 'command';
  const summonKeyIcon = platform === 'windows' ? undefined : Command;

  const row5: KeyConfig[] = [
    { id: 'fn', label: 'fn', width: 'w-10 md:w-14', align: 'left' },
    { id: 'ctrl', label: 'control', width: 'w-12 md:w-16', align: 'center' },
    { id: 'optl', label: platform === 'windows' ? 'win' : 'option', width: 'w-12 md:w-16', align: 'center' },
    { 
      id: 'summon-key', 
      label: summonKeyLabel, 
      width: 'w-16 md:w-24', 
      isGlowing: true, 
      icon: summonKeyIcon,
      align: 'center'
    },
    { 
      id: 'space', 
      label: '', 
      width: 'flex-1 min-w-[160px] md:min-w-[280px]', 
      align: 'center' 
    },
    { 
      id: 'summon-key-r', 
      label: summonKeyLabel, 
      width: 'w-16 md:w-24', 
      icon: summonKeyIcon,
      align: 'center' 
    },
    { id: 'optr', label: platform === 'windows' ? 'win' : 'option', width: 'w-12 md:w-16', align: 'center' }
  ];

  const renderKey = (key: KeyConfig) => {
    const isSummonKey = key.id === 'summon-key';
    const isSpace = key.id === 'space';
    const isPhysicallyPressed = 
      (isSummonKey && (pressedKeys.has('alt') || pressedKeys.has('cmd'))) ||
      (isSpace && pressedKeys.has('space')) ||
      pressedKeys.has(key.id);

    return (
      <button
        key={key.id}
        type="button"
        onClick={() => {
          if (isSummonKey || isSpace) triggerSummon();
        }}
        className={`
          relative select-none transition-all duration-150 h-11 md:h-14 rounded-lg md:rounded-xl text-[10px] md:text-xs font-mono font-medium
          flex flex-col items-center justify-center p-1.5 outline-none cursor-pointer
          ${key.width || 'w-10 md:w-14'}
          ${isPhysicallyPressed ? 'translate-y-[2px]' : 'hover:translate-y-[0.5px]'}
          ${
            key.isGlowing
              ? 'text-[#ffe2d2] font-semibold'
              : 'text-white/45 hover:text-white/75'
          }
        `}
        style={{
          background: key.isGlowing
            ? 'linear-gradient(180deg, #1f1510 0%, #2a1b14 100%)'
            : 'radial-gradient(75% 75% at 50% 92%, #151515 0%, #0d0d0d 100%)',
          boxShadow: key.isGlowing
            ? '0 0 0.5px 1px #000, inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 2px 1px 1px rgba(0, 0, 0, 0.5)'
            : '0 0 0.5px 1px #000, inset 0 2px 1px 1px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.12)',
          textShadow: key.isGlowing ? '0 0 5px #FF5A1F, 0 0 14px #FF5A1F' : undefined
        }}
      >
        {/* Raycast Reverse-Engineered Ambient Underglow Bleed (:before) */}
        {key.isGlowing && (
          <div 
            className="absolute -top-[20%] -left-[18%] w-[136%] h-[140%] -z-10 blur-[18px] opacity-100 rounded-2xl pointer-events-none"
            style={{
              background: 'radial-gradient(56% 65%, #FF5A1F 0%, rgba(255, 90, 31, 0) 100%)'
            }}
          />
        )}

        {/* Raycast Reverse-Engineered Specular Rim Top Highlight (:after) */}
        {key.isGlowing && (
          <div 
            className="absolute top-0 left-[8%] w-[84%] h-[2px] blur-[1px] opacity-90 mix-blend-overlay pointer-events-none rounded-full"
            style={{
              background: 'radial-gradient(56% 65%, #ffffff 0%, rgba(255, 90, 31, 0) 100%)'
            }}
          />
        )}

        {/* Spacebar Underglow Leak on the left side touching the summon key */}
        {isSpace && (
          <div 
            className="absolute -top-[15%] left-0 w-[45%] h-[130%] -z-10 blur-[16px] opacity-80 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 10% 50%, rgba(255, 90, 31, 0.75) 0%, rgba(255, 90, 31, 0) 80%)'
            }}
          />
        )}

        {/* Sub-label (numbers / symbols) */}
        {key.sub && (
          <span className="text-[9px] md:text-[10px] text-white/30 leading-none">
            {key.label}
          </span>
        )}

        {/* Main label or icon */}
        <div className={`flex items-center gap-1 leading-none ${key.align === 'left' ? 'self-start pl-1' : key.align === 'right' ? 'self-end pr-1' : ''}`}>
          {key.icon && <key.icon className="w-3 md:w-3.5 h-3 md:h-3.5" />}
          <span>{key.sub ? key.sub : key.label}</span>
        </div>
      </button>
    );
  };

  return (
    <section className="py-24 px-4 sm:px-6 md:px-12 w-full max-w-[1400px] mx-auto relative overflow-hidden flex flex-col items-center">
      
      {/* Top Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/25 text-[#FF5A1F] text-xs font-mono uppercase tracking-wider mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Summon In Milliseconds</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight mb-5 leading-tight">
          Your shortcut to <span className="italic font-normal text-white">everything</span>.
        </h2>
        
        <p className="text-base sm:text-lg text-white/50 font-light leading-relaxed mb-6">
          Press <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-sm border border-white/15">Alt</kbd> + <kbd className="px-3 py-1 rounded bg-white/10 text-white font-mono text-sm border border-white/15">Space</kbd> anywhere across your operating system to summon Blinky without losing focus.
        </p>

        {/* Platform switch: Windows vs Mac */}
        <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-white/[0.05] border border-white/10 text-xs">
          <button
            type="button"
            onClick={() => setPlatform('windows')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              platform === 'windows'
                ? 'bg-white/15 text-white font-medium shadow-sm'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Windows (Alt + Space)</span>
          </button>
          <button
            type="button"
            onClick={() => setPlatform('mac')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              platform === 'mac'
                ? 'bg-white/15 text-white font-medium shadow-sm'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>macOS (Cmd + Space)</span>
          </button>
        </div>
      </div>

      {/* Simulated Live Summon Tooltip HUD */}
      <AnimatePresence>
        {summonFired && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-52 z-30 px-5 py-3 rounded-2xl bg-[#0d0d11]/95 border border-[#FF5A1F]/50 shadow-[0_15px_50px_rgba(255,90,31,0.35)] backdrop-blur-xl flex items-center gap-3 text-white"
          >
            <div className="w-3 h-3 rounded-full bg-[#FF5A1F] animate-ping" />
            <div className="font-mono text-xs">
              <span className="text-[#FF5A1F] font-bold">BLINKY SUMMONED</span> — Ready for instructions
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Illuminated Dark Keyboard Surface */}
      <div className="w-full max-w-[1140px] relative select-none mt-2">
        
        {/* Soft atmospheric gradient spill behind the chassis */}
        <div 
          className="absolute -inset-10 -z-10 pointer-events-none opacity-70"
          style={{
            background: 'radial-gradient(ellipse at 40% 75%, rgba(255, 90, 31, 0.22) 0%, rgba(255, 90, 31, 0.05) 50%, transparent 80%)'
          }}
        />

        {/* Chassis Mask (Vignette fading out into pitch black background like in Image 2) */}
        <div 
          className="w-full overflow-x-auto pb-6 pt-4 px-2 no-scrollbar"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 65%, #000 45%, rgba(0,0,0,0.6) 75%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 90% 85% at 50% 65%, #000 45%, rgba(0,0,0,0.6) 75%, transparent 100%)'
          }}
        >
          <div className="min-w-[760px] md:min-w-[940px] flex flex-col gap-2 md:gap-2.5 p-4 md:p-6 rounded-3xl bg-[#09090b]/80 border border-white/[0.04] shadow-[0_30px_100px_rgba(0,0,0,0.9)] backdrop-blur-md">
            
            {/* Row 1: Numbers & Backspace */}
            <div className="flex gap-1.5 md:gap-2 justify-center">
              {row1.map(renderKey)}
            </div>

            {/* Row 2: QWERTY */}
            <div className="flex gap-1.5 md:gap-2 justify-center">
              {row2.map(renderKey)}
            </div>

            {/* Row 3: Home Row */}
            <div className="flex gap-1.5 md:gap-2 justify-center">
              {row3.map(renderKey)}
            </div>

            {/* Row 4: Shift & Bottom Letters */}
            <div className="flex gap-1.5 md:gap-2 justify-center">
              {row4.map(renderKey)}
            </div>

            {/* Row 5: Modifier Row + Spacebar with Glow */}
            <div className="flex gap-1.5 md:gap-2 justify-center items-center">
              {row5.map(renderKey)}
            </div>

          </div>
        </div>

      </div>

      {/* Keystroke Callout Instruction */}
      <div className="mt-6 text-center text-xs text-white/35 font-mono flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
        <span>Try pressing {platform === 'windows' ? 'Alt + Space' : 'Cmd + Space'} on your keyboard right now</span>
      </div>

    </section>
  );
}
