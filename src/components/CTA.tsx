import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-16 relative overflow-hidden">
      
      {/* Container with Purple to Cyan gradient backdrop */}
      <motion.div 
        className="relative rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-20 text-center shadow-2xl border border-white/10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/90 via-neon-indigo/95 to-neon-cyan/90 z-0" />
        
        {/* Mesh background effects */}
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='%23fff' stroke-width='2' opacity='.1'/%3E%3C/svg%3E")` }} />

        {/* Ambient backlighting inside the card */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#070716]/30 blur-[80px] rounded-full pointer-events-none" />

        {/* Contents */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-8">
          
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-white animate-spin-slow" />
            <span>Join Schedra Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-none text-glow-cyan">
            Ready to Take Control <br className="hidden sm:inline" /> of Your Day?
          </h2>

          <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-xl font-light leading-relaxed">
            Join thousands of productive users using Schedra. Set up your AI scheduler and fitness planner in minutes.
          </p>
        </div>

      </motion.div>
    </section>
  );
};
