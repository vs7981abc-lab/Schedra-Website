import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Play, Calendar, Bell, Dumbbell, Utensils } from 'lucide-react';
import phoneImage from '../assets/phone.jpeg';

// ─── Link constants ────────────────────────────────────────────────────────────
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=YOUR_APP_PACKAGE_ID';
const YOUTUBE_URL   = 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'; // TODO: replace
// ──────────────────────────────────────────────────────────────────────────────

export const Hero: React.FC = () => {
  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
  ];

  return (
    <section className="relative w-full max-w-[1400px] mx-auto overflow-hidden">

      {/* ── Ambient glow blobs ── */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full bg-neon-cyan/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-[58%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-neon-purple/10 blur-[120px] pointer-events-none" />

      {/*
        ╔══════════════════════════════════════════════════════════════╗
        ║  MOBILE  → single column, fully centred                     ║
        ║    1. Text block (centred)                                   ║
        ║    2. Phone + floating cards (centred, below text)           ║
        ║  lg+     → two-column side-by-side (original intent)        ║
        ╚══════════════════════════════════════════════════════════════╝
      */}
      <div
        className="
          flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-14 lg:items-center
          px-5 sm:px-10 lg:px-16 xl:px-24
          pt-10 pb-20 lg:pt-14
        "
      >

        {/* ═══════════════════════════════════════════════════════
            TEXT BLOCK
            Mobile  → items-center / text-center
            lg+     → items-start  / text-left
            ═══════════════════════════════════════════════════════ */}
        <motion.div
          className="flex flex-col items-center lg:items-start gap-5 sm:gap-6 lg:gap-7 text-center lg:text-left z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >

          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                          bg-dark-card border border-dark-cardBorder
                          text-slate-300 text-xs font-semibold tracking-wide">
            <span className="flex h-2 w-2 rounded-full bg-neon-cyan animate-pulse" />
            ✨ AI Powered Daily Planner
          </div>

          {/* Heading */}
          <h1
            className="
              font-extrabold tracking-tight text-white leading-[1.15] font-sans
              text-[2.1rem] sm:text-[2.7rem] lg:text-[2.6rem] xl:text-[3.1rem]
            "
          >
            Stop Wasting<br />
            Your Day.<br />
            <span className="bg-gradient-to-r from-neon-cyan via-neon-indigo to-neon-purple bg-clip-text text-transparent">
              Let Schedra
            </span>
            <br />
            <span className="bg-gradient-to-r from-neon-cyan via-neon-indigo to-neon-purple bg-clip-text text-transparent">
              Build It.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-xs sm:max-w-sm lg:max-w-md">
            Your personal AI Scheduler, Workout Planner, Reminder System and Daily Productivity Partner.
          </p>

          {/* Feature pills — 2×2 grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 w-fit mx-auto lg:mx-0">
            {['AI Scheduling', 'Smart Reminders', 'Workout Planning', 'Gain Progress'].map((pill, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300">
                <div className="w-5 h-5 rounded-md bg-neon-cyan/15 flex items-center justify-center border border-neon-cyan/25 shrink-0">
                  <Check className="w-3 h-3 text-neon-cyan" />
                </div>
                <span className="text-xs font-medium leading-tight whitespace-nowrap">{pill}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row items-center gap-3 pt-1 w-full sm:w-auto">

            {/* Get Started Free */}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full xs:w-auto px-7 py-3.5 rounded-xl font-bold text-sm
                         transition-all duration-300 overflow-hidden shadow-lg shadow-neon-cyan/10
                         text-center whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-indigo to-neon-cyan p-[1.5px] rounded-xl" />
              <span className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
              <span className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-xl" />
              <span className="relative z-10 text-white flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* Explore Features */}
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full xs:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
                         border border-dark-cardBorder bg-dark-card hover:bg-slate-900/60
                         text-slate-300 hover:text-white font-bold text-sm
                         transition-all duration-200 whitespace-nowrap"
            >
              <Play className="w-4 h-4 text-neon-cyan fill-neon-cyan/25" />
              <span>Explore Features</span>
            </a>
          </div>

          {/* Trust row */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-900/80 w-full justify-center lg:justify-start">
            <div className="flex -space-x-2">
              {avatars.map((url, idx) => (
                <img
                  key={idx}
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#03030c] object-cover"
                  src={url}
                  alt={`User ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-400 text-xs">
                Trusted by{' '}
                <span className="text-white font-semibold">users</span>{' '}
                worldwide
              </span>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            PHONE BLOCK
            Mobile  → mt-14, centred, contained within screen width
            lg+     → right column, no top margin
            ═══════════════════════════════════════════════════════════════ */}
        <div
          className="
            relative flex items-center justify-center z-10
            mt-14 lg:mt-0
            h-[480px] sm:h-[540px] lg:h-[620px] xl:h-[660px]
            w-full
          "
        >

          {/* Glow bloom behind phone */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="
                w-[190px] sm:w-[240px] lg:w-[280px]
                h-[360px] sm:h-[440px] lg:h-[520px]
                bg-gradient-to-tr from-neon-cyan/25 to-neon-purple/20
                blur-[55px] rounded-3xl
              "
            />
          </div>

          {/* Phone frame */}
          <motion.div
            className="relative z-10 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          >
            <div
              className="
                relative flex items-center justify-center p-[2px]
                w-[172px] sm:w-[210px] lg:w-[258px] xl:w-[298px]
              "
              style={{
                borderRadius: '36px',
                background: 'linear-gradient(160deg, #00f0ff 0%, #a855f7 50%, #00f0ff 100%)',
              }}
            >
              <div
                className="relative overflow-hidden w-full"
                style={{
                  borderRadius: '34px',
                  background: 'linear-gradient(180deg, #070722 0%, #030310 100%)',
                  boxShadow:
                    '0 0 60px 10px rgba(0,240,255,0.12), inset 0 0 30px rgba(168,85,247,0.08)',
                }}
              >
                <img
                  src={phoneImage}
                  alt="Schedra App"
                  className="w-full h-auto object-cover select-none pointer-events-none block"
                  style={{ borderRadius: '34px' }}
                  draggable={false}
                />
                {/* Inner rim glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    borderRadius: '34px',
                    boxShadow: 'inset 0 0 24px 4px rgba(0,240,255,0.10)',
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* ── Floating cards ──────────────────────────────────────────────
              Anchored to the phone-block container via absolute positioning.
              left/right values give enough clearance from the phone on mobile.
          ─────────────────────────────────────────────────────────────────── */}

          {/* Card 1 — AI Scheduler · top-left */}
          <motion.div
            className="
              absolute top-[5%] left-[1%]
              glass-card px-2.5 py-2 sm:px-3 sm:py-2.5
              flex items-center gap-2.5 z-20 shadow-xl
              border-l-2 border-l-neon-cyan/50
              max-w-[130px] sm:max-w-[150px] lg:max-w-[164px]
            "
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.65 },
              x:       { duration: 0.5, delay: 0.65 },
              y:       { repeat: Infinity, duration: 6, ease: 'easeInOut' },
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-neon-cyan/15 flex items-center justify-center text-neon-cyan shrink-0 border border-neon-cyan/20">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-bold text-white leading-tight truncate">AI Scheduler</p>
              <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight mt-0.5">Smart schedule</p>
            </div>
          </motion.div>

          {/* Card 2 — Smart Reminders · top-right */}
          <motion.div
            className="
              absolute top-[14%] right-[1%]
              glass-card px-2.5 py-2 sm:px-3 sm:py-2.5
              flex items-center gap-2.5 z-20 shadow-xl
              border-l-2 border-l-neon-purple/50
              max-w-[130px] sm:max-w-[150px] lg:max-w-[164px]
            "
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0, y: [0, 9, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.8 },
              x:       { duration: 0.5, delay: 0.8 },
              y:       { repeat: Infinity, duration: 5.5, ease: 'easeInOut' },
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-neon-purple/15 flex items-center justify-center text-neon-purple shrink-0 border border-neon-purple/20">
              <Bell className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-bold text-white leading-tight truncate">Smart Reminders</p>
              <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight mt-0.5">Instant alerts</p>
            </div>
          </motion.div>

          {/* Card 3 — GYM Planner · bottom-left */}
          <motion.div
            className="
              absolute bottom-[14%] left-[1%]
              glass-card px-2.5 py-2 sm:px-3 sm:py-2.5
              flex items-center gap-2.5 z-20 shadow-xl
              border-l-2 border-l-neon-indigo/50
              max-w-[130px] sm:max-w-[150px] lg:max-w-[164px]
            "
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0, y: [0, 7, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.95 },
              x:       { duration: 0.5, delay: 0.95 },
              y:       { repeat: Infinity, duration: 6.5, ease: 'easeInOut' },
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-neon-indigo/15 flex items-center justify-center text-neon-indigo shrink-0 border border-neon-indigo/20">
              <Dumbbell className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-bold text-white leading-tight truncate">Workout Planner</p>
              <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight mt-0.5">1000+ Workouts</p>
            </div>
          </motion.div>

          {/* Card 4 — Meal Planner · bottom-right */}
          <motion.div
            className="
              absolute bottom-[5%] right-[1%]
              glass-card px-2.5 py-2 sm:px-3 sm:py-2.5
              flex items-center gap-2.5 z-20 shadow-xl
              border-l-2 border-l-neon-cyan/50
              max-w-[130px] sm:max-w-[150px] lg:max-w-[164px]
            "
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 1.1 },
              x:       { duration: 0.5, delay: 1.1 },
              y:       { repeat: Infinity, duration: 7, ease: 'easeInOut' },
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-neon-cyan/15 flex items-center justify-center text-neon-cyan shrink-0 border border-neon-cyan/20">
              <Utensils className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-bold text-white leading-tight truncate">Meal Planner</p>
              <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight mt-0.5">Nutritional Growth</p>
            </div>
          </motion.div>

        </div>
        {/* end phone block */}

      </div>
    </section>
  );
};
