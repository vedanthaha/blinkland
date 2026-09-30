"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { label: 'Demo', href: '/demo' },
    { label: 'Quick Actions', href: '/quick-actions' },
    { label: 'Features', href: '/features' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-xl bg-black/40 border-b border-white/5">
      <div className="flex items-center">
        <Link href="/">
          <img src="/logo_text.png" alt="Blinky" className="h-10 w-auto object-contain cursor-pointer" />
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        {links.map(link => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href} 
              href={link.href}
              className={`transition-colors relative py-2 ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`}
            >
              {link.label}
              {isActive && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-[#FF5A1F] rounded-t-full"></div>
              )}
            </Link>
          );
        })}
      </nav>

      <div>
        <Link 
          href="https://github.com/KingSahil/Blinky/releases"
          className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2 group"
        >
          Download
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
}
