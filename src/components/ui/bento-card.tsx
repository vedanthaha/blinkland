import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

export interface BentoCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function BentoCard({ title, description, icon, children, className, colSpan = 1 }: BentoCardProps) {
  const spanClasses = {
    1: "col-span-1",
    2: "col-span-1 md:col-span-2",
    3: "col-span-1 md:col-span-2 lg:col-span-3",
    4: "col-span-1 md:col-span-2 lg:col-span-4",
  };

  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "bg-[#0A0A0A] border border-white/10 rounded-[2rem] overflow-hidden relative flex flex-col group hover:border-[#FF5A1F]/30 transition-colors shadow-2xl min-h-[300px]",
        spanClasses[colSpan],
        className
      )}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      
      {/* Content Area */}
      <div className="p-8 flex-1 flex flex-col z-10 relative h-full">
        <div className="flex items-center gap-4 mb-4">
          {icon && <div className="text-[#FF5A1F]">{icon}</div>}
          <h3 className="font-medium text-xl text-white tracking-tight">{title}</h3>
        </div>
        <p className="text-white/50 mb-8 font-light leading-relaxed max-w-sm">{description}</p>
        
        {/* Custom Visual Area */}
        <div className="relative mt-auto flex-1 flex items-end justify-center w-full">
          {children}
        </div>
      </div>
      
      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_120%,rgba(255,90,31,0.1),transparent_60%)] pointer-events-none" />
    </motion.div>
  );
}
