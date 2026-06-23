import React from 'react';
import { motion } from 'framer-motion';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Tell AI Your Goals",
      description: "Add tasks, habits and preferences.",
      glow: "shadow-neon-cyan/20 text-neon-cyan"
    },
    {
      step: "02",
      title: "AI Creates Your Plan",
      description: "AI generates optimized schedule.",
      glow: "shadow-neon-purple/20 text-neon-purple"
    },
    {
      step: "03",
      title: "Follow & Get Reminded",
      description: "Receive reminders throughout day.",
      glow: "shadow-neon-indigo/20 text-neon-indigo"
    },
    {
      step: "04",
      title: "Stay Productive & Grow",
      description: "Achieve goals and build habits.",
      glow: "shadow-neon-cyan/20 text-neon-cyan"
    }
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-24 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-neon-cyan/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-neon-purple/5 blur-[100px] pointer-events-none" />

      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <motion.span 
          className="text-xs font-bold uppercase tracking-widest text-neon-purple bg-neon-purple/10 px-3.5 py-1.5 rounded-full"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.span>
        
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Simple. Smart.{" "}
          <span className="bg-gradient-to-r from-neon-purple via-neon-indigo to-neon-cyan bg-clip-text text-transparent">
            Seamless.
          </span>
        </motion.h2>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        
        {/* Animated Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[2px] bg-slate-900 z-0">
          <motion.div 
            className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
            >
              {/* Animated Timeline Step Number Ring */}
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-purple via-neon-indigo to-neon-cyan p-[1.5px] blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-24 h-24 rounded-full bg-[#08081a] border border-slate-800 flex items-center justify-center shadow-xl group-hover:border-neon-cyan/50 transition-colors duration-300">
                  {/* Neon pulsing ambient point inside */}
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-neon-cyan timeline-pulse-dot" />
                  <span className="text-3xl font-extrabold bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                    {item.step}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-neon-cyan transition-colors duration-200">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm font-light max-w-[240px] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};
