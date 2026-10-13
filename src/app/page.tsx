"use client"
import React from 'react';
import { HeroInteractive } from '@/components/sections/hero-interactive';
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
      
      {/* 2. Desktop Companion Showcase */}
      <DesktopCompanionShowcase />

      {/* 3. Interactive Quick Actions Showcase */}
      <QuickActionsShowcase />

      {/* 4. Mobile Remote Companion Showcase */}
      <MobileCompanionShowcase />

      {/* 5. Feature Storytelling (Observe → Plan → Act) */}
      <FeatureStorytelling />

      {/* 6. High-Contrast Final Call To Action */}
      <FinalCTA />
    </div>
  );
}
