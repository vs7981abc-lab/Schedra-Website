import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckSquare, Calendar as CalendarIcon, Sparkles } from 'lucide-react';

export const ProductPreview: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-24 relative overflow-hidden">
      
      {/* Background soft glowing blur */}
      <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-neon-cyan/5 blur-[130px] pointer-events-none" />

      {/* Large Glass Container */}
      <motion.div 
        className="glass-card w-full rounded-[32px] p-8 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden border border-slate-900/60"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        {/* Glow corner decorations inside card */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-neon-cyan/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-neon-purple/5 blur-3xl pointer-events-none" />

        {/* Left Info Column */}
        <div className="lg:col-span-5 flex flex-col space-y-6 text-left z-10">
          <div className="self-start inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-slate-900 text-neon-cyan text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Preview</span>
          </div>

          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
            Your Day, Your Plan, <br />
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Perfectly Organized.
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Schedra combines AI scheduling, productivity tracking and fitness planning into one intelligent platform. Let machine learning layout your best tasks sequence.
          </p>

          <div className="pt-2">
            <button className="relative group px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 overflow-hidden shadow-md shadow-neon-cyan/5">
              <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple p-[1px] rounded-xl">
                <span className="absolute inset-0 bg-slate-950 rounded-xl group-hover:opacity-0 transition-opacity duration-300"></span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
              <span className="relative z-10 text-white group-hover:text-white flex items-center justify-center gap-2">
                <Download className="w-4 h-4 text-neon-cyan group-hover:text-white transition-colors" /> Download App
              </span>
            </button>
          </div>
        </div>

        {/* Right Dashboard Mockup Column */}
        <div className="lg:col-span-7 relative w-full flex justify-center items-center">
          
          {/* Ambient glow behind dashboard */}
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 to-neon-purple/20 blur-[40px] rounded-2xl pointer-events-none" />

          {/* Large Dashboard Widget Frame */}
          <div className="relative w-full max-w-[580px] bg-[#050514] border border-slate-900 rounded-2xl p-5 shadow-2xl overflow-hidden text-left z-10 select-none">
            
            {/* Header / Top Window Bar */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-900/60">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-slate-500 text-[10px] pl-2 font-mono">schedra-dashboard-v1.0</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg text-[10px] font-bold text-neon-cyan">
                ⚡ AI Agent Online
              </div>
            </div>

            {/* Content Grid — only Task + Calendar panels (Analytics removed) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Task Checklist Panel */}
              <div className="bg-slate-950/70 border border-slate-900 p-4 rounded-xl">
                <div className="flex items-center space-x-2 mb-3">
                  <CheckSquare className="w-4 h-4 text-neon-cyan" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Today's Tasks</h4>
                </div>
                <div className="space-y-2.5">
                  {[
                    { title: "Review marketing copy", done: true },
                    { title: "Push production build", done: true },
                    { title: "Exercise Routine (Chest/Tri)", done: false },
                    { title: "Submit project reports", done: false }
                  ].map((task, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5 bg-slate-900/40 p-2 rounded-lg border border-slate-900/60">
                      {/* Checkbox dot */}
                      <div className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0
                        ${task.done
                          ? 'bg-neon-cyan/20 border-neon-cyan/60'
                          : 'bg-slate-800 border-slate-700'
                        }`}>
                        {task.done && (
                          <svg className="w-2 h-2 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-[11px] font-medium leading-none ${task.done ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                        {task.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Calendar blocks panel */}
              <div className="bg-slate-950/70 border border-slate-900 p-4 rounded-xl">
                <div className="flex items-center space-x-2 mb-3">
                  <CalendarIcon className="w-4 h-4 text-neon-purple" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Calendar Block</h4>
                </div>
                <div className="space-y-2">
                  <div className="border-l-2 border-neon-cyan bg-neon-cyan/5 px-2.5 py-1.5 rounded-r">
                    <p className="text-[10px] font-bold text-white leading-tight">Product Launch Sync</p>
                    <span className="text-[9px] text-slate-400">10:00 - 11:30 AM</span>
                  </div>
                  <div className="border-l-2 border-neon-purple bg-neon-purple/5 px-2.5 py-1.5 rounded-r">
                    <p className="text-[10px] font-bold text-white leading-tight">AI Optimisation Block</p>
                    <span className="text-[9px] text-slate-400">02:00 - 04:00 PM</span>
                  </div>
                  <div className="border-l-2 border-neon-indigo bg-neon-indigo/5 px-2.5 py-1.5 rounded-r">
                    <p className="text-[10px] font-bold text-white leading-tight">Gym Session</p>
                    <span className="text-[9px] text-slate-400">06:00 - 07:30 PM</span>
                  </div>
                  <div className="border-l-2 border-amber-500/70 bg-amber-500/5 px-2.5 py-1.5 rounded-r">
                    <p className="text-[10px] font-bold text-white leading-tight">Evening Review</p>
                    <span className="text-[9px] text-slate-400">09:00 - 09:30 PM</span>
                  </div>
                </div>
              </div>

            </div>
            {/* ── end content grid ── */}

          </div>

        </div>

      </motion.div>
    </section>
  );
};
