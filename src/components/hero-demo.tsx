"use client"

import { motion, useReducedMotion } from "motion/react"
import { SonarGrid } from "@/components/ui/sonar-grid"
import { useState } from "react"

const settings = {
  ringWidth: 90,
  speed: 260,
  amplitude: 2.2,
  pingEvery: 2.4,
  interactive: true,
  spacing: 26,
  baseOpacity: 0.28,
  useThemeColor: true,
  color: "#FF6A3D",
  headline: "Tell Blinky what to do.",
  subline: "Your autonomous workstation companion. It sees what you see, and gets to work.",
}

export function HeroDemo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props }
  const reduce = useReducedMotion()
  const enter = (delay: number): any =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14, filter: "blur(6px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        }

  const [input, setInput] = useState("");
  const [heroSequence, setHeroSequence] = useState<{type: string, text: string}[]>([]);

  const handleHeroCommand = (cmd: string) => {
    setHeroSequence([{ type: 'user', text: cmd }]);
    
    setTimeout(() => {
      setHeroSequence(prev => [...prev, { type: 'blinky', text: 'Understanding screen context...' }]);
    }, 1000);
    
    setTimeout(() => {
      setHeroSequence(prev => [...prev, { type: 'executing', text: 'Opening application and executing...' }]);
    }, 2500);
    
    setTimeout(() => {
      setHeroSequence(prev => [...prev, { type: 'blinky', text: 'Task completed successfully.' }]);
    }, 4000);
  };

  return (
    <SonarGrid
      id="sonar-grid-demo"
      ringWidth={s.ringWidth}
      speed={s.speed}
      amplitude={s.amplitude}
      pingEvery={s.pingEvery}
      interactive={s.interactive}
      spacing={s.spacing}
      baseOpacity={s.baseOpacity}
      color={s.useThemeColor ? undefined : s.color}
      pingArea={[0.22, 0.18, 0.78, 0.82]}
      className="bg-background flex min-h-[max(600px,100svh)] w-full flex-col relative"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_34%_30%_at_50%_50%,var(--bg-primary)_0%,transparent_100%)]"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-8 py-32 text-center mt-16">
        <div className="flex max-w-2xl flex-col items-center">
          <motion.h1
            {...enter(0.08)}
            className="text-foreground text-5xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl"
            style={{ fontFamily: 'var(--font-astonpoliz), sans-serif', letterSpacing: '2px' }}
          >
            {s.headline}
          </motion.h1>
          <motion.p {...enter(0.16)} className="text-muted-foreground mt-8 max-w-xl text-base text-pretty sm:text-lg">
            {s.subline}
          </motion.p>
          <motion.div {...enter(0.24)} className="mt-16 flex flex-col items-center justify-center gap-3 w-full">
            <div className="command-box w-full max-w-md relative z-10 cursor-text" style={{ pointerEvents: 'auto' }}>
              <img 
                src="/Blinky logo.png" 
                alt="Blinky Icon" 
                className="command-blinky-icon"
              />
              <input 
                type="text" 
                className="command-input flex-1" 
                placeholder="Open Spotify and play my playlist..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onPointerDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && input.trim()) {
                    handleHeroCommand(input);
                    setInput('');
                  }
                }}
              />
              <div className="command-action shrink-0">
                <span>Enter</span> ⏎
              </div>
            </div>
            
            {heroSequence.length > 0 && (
              <div className="demo-sequence mt-8 text-left w-full max-w-md" style={{ pointerEvents: 'auto', zIndex: 10 }}>
                {heroSequence.map((cmd, idx) => (
                  <div key={idx} className={`demo-step ${cmd.type}`} style={{ animationDelay: `${idx * 0.8}s` }}>
                    {cmd.type === 'blinky' && (
                      <img src="/Blinky logo.png" alt="Blinky" style={{width: 20, height: 20}} />
                    )}
                    <span>{cmd.text}</span>
                    {cmd.type === 'executing' && (
                      <span style={{color: 'var(--accent-color)'}}>✓</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </SonarGrid>
  )
}
