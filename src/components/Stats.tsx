import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckSquare, Smile, MessageSquareCode } from 'lucide-react';

export const Stats: React.FC = () => {
  const items = [
    {
      value: "1,000+",
      label: "Active Users",
      icon: <Users className="w-5 h-5 text-neon-cyan" />,
      borderGlow: "group-hover:border-neon-cyan/40"
    },
    {
      value: "50K+",
      label: "Tasks Scheduled",
      icon: <CheckSquare className="w-5 h-5 text-neon-purple" />,
      borderGlow: "group-hover:border-neon-purple/40"
    },
    {
      value: "95%",
      label: "User Satisfaction",
      icon: <Smile className="w-5 h-5 text-neon-indigo" />,
      borderGlow: "group-hover:border-neon-indigo/40"
    },
    {
      value: "24/7",
      label: "AI Support",
      icon: <MessageSquareCode className="w-5 h-5 text-neon-cyan" />,
      borderGlow: "group-hover:border-neon-cyan/40"
    }
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-12 relative">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className={`group glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-300 ${item.borderGlow} hover:translate-y-[-2px]`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
          >
            {/* Background glowing circle on hover */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-slate-900/50 group-hover:bg-neon-cyan/5 blur-xl transition-all duration-500" />
            
            <div className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            
            <span className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight bg-gradient-to-b from-white to-slate-200 bg-clip-text">
              {item.value}
            </span>
            <span className="text-xs lg:text-sm text-slate-400 mt-1.5 font-medium tracking-wide">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
