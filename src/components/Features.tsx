import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Dumbbell, Clock, TrendingUp, Cloud, ShieldCheck } from 'lucide-react';

export const Features: React.FC = () => {
  const cards = [
    {
      title: "AI-Powered Scheduling",
      description: "Advanced Workflow Optimization.",
      icon: <Brain className="w-6 h-6 text-neon-cyan" />,
      glowColor: "group-hover:border-neon-cyan/45 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]"
    },
    {
      title: "Diet & Fitness Planner",
      description: "Personalized workouts and fitness tracking.",
      icon: <Dumbbell className="w-6 h-6 text-neon-purple" />,
      glowColor: "group-hover:border-neon-purple/45 group-hover:shadow-[0_0_20px_rgba(217,70,239,0.15)]"
    },
    {
      title: "Smart Reminders",
      description: "Important alerts and notifications.",
      icon: <Clock className="w-6 h-6 text-neon-cyan" />,
      glowColor: "group-hover:border-neon-cyan/45 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]"
    },
    {
      title: "Complete Guider",
      description: "Daily, weekly and monthly reminders.",
      icon: <TrendingUp className="w-6 h-6 text-neon-indigo" />,
      glowColor: "group-hover:border-neon-indigo/45 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
    },
    {
      title: "Cloud Sync & Storage",
      description: "Access schedules from any device.",
      icon: <Cloud className="w-6 h-6 text-neon-cyan" />,
      glowColor: "group-hover:border-neon-cyan/45 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]"
    },
    {
      title: "Secure & Private",
      description: "Enterprise-grade security and privacy.",
      icon: <ShieldCheck className="w-6 h-6 text-neon-purple" />,
      glowColor: "group-hover:border-neon-purple/45 group-hover:shadow-[0_0_20px_rgba(217,70,239,0.15)]"
    }
  ];

  return (
    <section id="features" className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-24 relative overflow-hidden">
      
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />

      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.span 
          className="text-xs font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-3.5 py-1.5 rounded-full"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Features
        </motion.span>
        
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Everything You Need to{" "}
          <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Succeed
          </span>
        </motion.h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className={`group glass-card p-8 rounded-[24px] flex flex-col items-start text-left relative overflow-hidden transition-all duration-400 ${card.glowColor} hover:-translate-y-2`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: (idx % 3) * 0.15, ease: "easeOut" }}
          >
            {/* Background glowing point */}
            <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-slate-900/50 group-hover:bg-neon-cyan/5 blur-xl transition-all duration-500" />
            
            {/* Icon container */}
            <div className="w-12 h-12 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
