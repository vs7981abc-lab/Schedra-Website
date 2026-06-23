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
    <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 pt-14 pb-20 overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon-cyan/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/10 blur-[140px] pointer-events-none" />

      {/*
        ┌─────────────────────────────────────────────────────────────────┐
        │  TWO-COLUMN GRID — forced at ALL screen sizes (never stacks)    │
        │  Left col: text content                                         │
        │  Right col: phone + floating cards                              │
        └─────────────────────────────────────────────────────────────────┘
      */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-10 xl:gap-14 items-center min-h-[520px] sm:min-h-[600px] lg:min-h-[680px]">

        {/* ══════════════════════════════════════════
            LEFT COL — text, badges, buttons, trust
            ══════════════════════════════════════════ */}
        <motion.div
          className="flex flex-col gap-4 sm:gap-6 lg:gap-7 text-left z-10 col-span-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* AI Badge */}
          <div className="self-start inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-dark-card border border-dark-cardBorder text-slate-300 text-[9px] sm:text-xs font-semibold tracking-wide">
            <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-neon-cyan animate-pulse" />
            <span>✨ AI Powered Daily Planner</span>
          </div>

          {/* Heading — always 4 lines via explicit <br /> */}
          <h1 className="font-extrabold tracking-tight text-white leading-[1.2] font-sans
                         text-[1.35rem] sm:text-[1.9rem] md:text-[2.3rem] lg:text-[2.6rem] xl:text-[3.1rem]">
            Stop Wasting
            <br />
            Your Day.
            <br />
            <span className="bg-gradient-to-r from-neon-cyan via-neon-indigo to-neon-purple bg-clip-text text-transparent">
             Let Schedra
            </span>
            <br />
            <span className="bg-gradient-to-r from-neon-cyan via-neon-indigo to-neon-purple bg-clip-text text-transparent">
              Build It.
            </span>
          </h1>

          {/* Subheading — hidden on very small, visible sm+ */}
          <p className="hidden sm:block text-xs sm:text-sm lg:text-base text-slate-400 font-light leading-relaxed max-w-sm lg:max-w-md">
            Your personal AI Scheduler, Gym Planner, Reminder System and Daily Productivity Partner.
          </p>

          {/* Feature pills — 2 col grid, hidden on tiny screens */}
          <div className="hidden sm:grid grid-cols-2 gap-x-3 gap-y-2.5 max-w-[280px] lg:max-w-xs">
            {['AI Scheduling', 'Smart Reminders', 'Gym Planning', 'Gain Progress'].map((pill, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-neon-cyan/15 flex items-center justify-center border border-neon-cyan/25 shrink-0">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-neon-cyan" />
                </div>
                <span className="text-[10px] sm:text-xs font-medium leading-tight">{pill}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col xs:flex-row items-start gap-2.5 sm:gap-3 pt-1">

            {/* Get Started Free → Google Play */}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-4 py-2.5 sm:px-6 sm:py-3.5 lg:px-8 lg:py-4 rounded-xl font-bold
                         text-[10px] sm:text-sm lg:text-base transition-all duration-300
                         overflow-hidden shadow-lg shadow-neon-cyan/10 text-center whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-indigo to-neon-cyan p-[1.5px] rounded-xl" />
              <span className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
              <span className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-xl" />
              <span className="relative z-10 text-white flex items-center justify-center gap-1.5 sm:gap-2">
                Get Started Free
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* Explore Features → YouTube */}
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-5 sm:py-3.5 lg:px-7 lg:py-4
                         rounded-xl border border-dark-cardBorder bg-dark-card hover:bg-slate-900/60
                         text-slate-300 hover:text-white font-bold
                         text-[10px] sm:text-sm lg:text-base transition-all duration-200 whitespace-nowrap"
            >
              <Play className="w-3 h-3 sm:w-4 sm:h-4 text-neon-cyan fill-neon-cyan/25" />
              <span>Explore Features</span>
            </a>
          </div>

          {/* Trust row — hidden on tiny screens */}
          <div className="hidden sm:flex items-center gap-3 pt-3 border-t border-slate-900/80">
            <div className="flex -space-x-2">
              {avatars.map((url, idx) => (
                <img
                  key={idx}
                  className="inline-block h-7 w-7 sm:h-9 sm:w-9 rounded-full ring-2 ring-[#03030c] object-cover"
                  src={url}
                  alt={`User ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex flex-col gap-0.5 text-left">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-400 text-[9px] sm:text-xs">
                Trusted by <span className="text-white font-semibold">5,000+ users</span> worldwide
              </span>
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════
            RIGHT COL — phone image inside pill frame + 4 floating cards
            ══════════════════════════════════════════════════════════ */}
        <div className="col-span-1 relative flex items-center justify-center z-10
                        h-[320px] sm:h-[480px] md:h-[540px] lg:h-[620px] xl:h-[660px]">

          {/* Glow bloom behind phone */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[140px] sm:w-[220px] lg:w-[280px] h-[260px] sm:h-[400px] lg:h-[520px]
                            bg-gradient-to-tr from-neon-cyan/25 to-neon-purple/20
                            blur-[55px] rounded-3xl" />
          </div>

          {/* ── PILL / RECTANGLE WITH CIRCULAR ENDS FRAME ─────────────── */}
          <motion.div
            className="relative z-10 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Outer phone frame — border gradient, phone corner radius */}
            <div
              className="
                relative flex items-center justify-center
                p-[2px]
                w-[130px] sm:w-[200px] md:w-[235px] lg:w-[278px] xl:w-[308px]
              "
              style={{
                borderRadius: '36px',
                background: 'linear-gradient(160deg, #00f0ff 0%, #a855f7 50%, #00f0ff 100%)',
              }}
            >
              {/* Inner frame background */}
              <div
                className="relative overflow-hidden w-full"
                style={{
                  borderRadius: '34px',
                  background: 'linear-gradient(180deg, #070722 0%, #030310 100%)',
                  boxShadow: '0 0 60px 10px rgba(0,240,255,0.12), inset 0 0 30px rgba(168,85,247,0.08)',
                }}
              >
                {/* Phone image */}
                <img
                  src={phoneImage}
                  alt="Schedra App"
                  className="w-full h-auto object-cover select-none pointer-events-none block"
                  style={{
                    borderRadius: '34px',
                  }}
                  draggable={false}
                />

                {/* Subtle inner rim glow overlay */}
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
          {/* ── END PILL FRAME ─────────────────────────────────────────── */}

          {/* ── Floating badge cards ─────────────────────────────────
              All 4 anchored inside this fixed-height column.
          ─────────────────────────────────────────────────────────── */}

          {/* Card 1 — AI Scheduler · top-left */}
          <motion.div
            className="absolute top-[8%] left-0
                       glass-card px-2 py-2 sm:px-3 sm:py-2.5
                       flex items-center gap-2 z-20 shadow-xl
                       border-l-2 border-l-neon-cyan/50
                       max-w-[110px] sm:max-w-[145px] lg:max-w-[160px]"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-neon-cyan/15 flex items-center justify-center text-neon-cyan shrink-0">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] sm:text-[10px] font-bold text-white leading-tight truncate">AI Scheduler</p>
              <p className="text-[8px] sm:text-[9px] text-slate-400 leading-tight">Smart schedule</p>
            </div>
          </motion.div>

          {/* Card 2 — Smart Reminders · top-right */}
          <motion.div
            className="absolute top-[14%] right-0
                       glass-card px-2 py-2 sm:px-3 sm:py-2.5
                       flex items-center gap-2 z-20 shadow-xl
                       border-l-2 border-l-neon-purple/50
                       max-w-[110px] sm:max-w-[145px] lg:max-w-[160px]"
            animate={{ y: [0, 9, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-neon-purple/15 flex items-center justify-center text-neon-purple shrink-0">
              <Bell className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] sm:text-[10px] font-bold text-white leading-tight truncate">Smart Reminders</p>
              <p className="text-[8px] sm:text-[9px] text-slate-400 leading-tight">Instant alerts</p>
            </div>
          </motion.div>

          {/* Card 3 — GYM Planner · bottom-left — Dumbbell icon */}
          <motion.div
            className="absolute bottom-[14%] left-0
                       glass-card px-2 py-2 sm:px-3 sm:py-2.5
                       flex items-center gap-2 z-20 shadow-xl
                       border-l-2 border-l-neon-indigo/50
                       max-w-[110px] sm:max-w-[145px] lg:max-w-[160px]"
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-neon-indigo/15 flex items-center justify-center text-neon-indigo shrink-0">
              <Dumbbell className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] sm:text-[10px] font-bold text-white leading-tight truncate">GYM Planner</p>
              <p className="text-[8px] sm:text-[9px] text-slate-400 leading-tight">Workout scheduling</p>
            </div>
          </motion.div>

          {/* Card 4 — Meal Planner · bottom-right — Utensils icon */}
          <motion.div
            className="absolute bottom-[8%] right-0
                       glass-card px-2 py-2 sm:px-3 sm:py-2.5
                       flex items-center gap-2 z-20 shadow-xl
                       border-l-2 border-l-neon-cyan/50
                       max-w-[110px] sm:max-w-[145px] lg:max-w-[160px]"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-neon-cyan/15 flex items-center justify-center text-neon-cyan shrink-0">
              <Utensils className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] sm:text-[10px] font-bold text-white leading-tight truncate">Meal Planner</p>
              <p className="text-[8px] sm:text-[9px] text-slate-400 leading-tight">Nutritional Growth</p>
            </div>
          </motion.div>

        </div>
        {/* end right col */}

      </div>
    </section>
  );
};