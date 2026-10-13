"use client"
import React from 'react';
import { HeroInteractive } from '@/components/sections/hero-interactive';
import { IlluminatedKeyboard } from '@/components/sections/illuminated-keyboard';
import { CapabilityWall } from '@/components/sections/capability-wall';
import { DesktopCompanionShowcase } from '@/components/sections/desktop-companion-showcase';
import { QuickActionsShowcase } from '@/components/sections/quick-actions-showcase';
import { MobileCompanionShowcase } from '@/components/sections/mobile-companion-showcase';
import { FeatureStorytelling } from '@/components/sections/feature-storytelling';
import { FinalCTA } from '@/components/sections/final-cta';

export default function BlinkyLandingPage() {
  return (
    <div className="flex flex-col items-center bg-black text-white selection:bg-[#FF5A1F] selection:text-white overflow-x-hidden">
      {/* 1. Cinematic Hero with Desktop HUD */}
      <HeroInteractive />

      {/* 2. Reverse-Engineered Illuminated Keyboard Summon Showcase (Image 2) */}
      <IlluminatedKeyboard />

      {/* 3. Reverse-Engineered Interactive Capability Wall (Image 1) */}
      <CapabilityWall />
      
      {/* 4. Desktop Companion Showcase (Vision, OS Control, Telemetry) */}
      <DesktopCompanionShowcase />

      {/* 5. Interactive Quick Actions Showcase (Real screen recordings) */}
      <QuickActionsShowcase />

      {/* 6. Mobile Remote Companion Showcase */}
      <MobileCompanionShowcase />

      {/* 7. Feature Storytelling (Observe → Plan → Act) */}
      <FeatureStorytelling />

      {/* 8. High-Contrast Final Call To Action */}
      <FinalCTA />
    </div>
  );
}
