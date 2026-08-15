import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

// ─── Local images from assets ─────────────────────────────────────────────────
import showcase1 from '../assets/11.jpg';
import showcase2 from '../assets/12.jpg';
import showcase3 from '../assets/13.jpg';
// ──────────────────────────────────────────────────────────────────────────────

const YOUTUBE_URL = 'https://youtube.com/@vishnusinghai?si=oAoVnzC1CTBFlQuE';

const showcaseItems = [
  {
    id: '01',
    timeLabel: '07:00 AM',
    label: 'MORNING',
    title: 'Morning Routine',
    description:
      'Wake up energized. Get guided tasks, stretching schedules, and a mindfulness flow optimized for your start.',
    image: showcase1,
    accentHex: '#00f0ff',
    hoverBorder: 'hover:border-[#00f0ff]/30',
  },
  {
    id: '02',
    timeLabel: '09:30 AM',
    label: 'AFTERNOON',
    title: 'Deep Work Session',
    description:
      'Lock in focus. The AI auto-schedules distraction blockers, blocks calendars, and counts down your deep tasks.',
    image: showcase2,
    accentHex: '#d946ef',
    hoverBorder: 'hover:border-[#d946ef]/30',
  },
  {
    id: '03',
    timeLabel: '06:30 PM',
    label: 'EVENING',
    title: 'Evening Fitness',
    description:
      'Track your gains. Integrated workout tracking automatically updates metrics and logs sets on completion.',
    image: showcase3,
    accentHex: '#00f0ff',
    hoverBorder: 'hover:border-[#00f0ff]/30',
  },
];

export const AppShowcase: React.FC = () => {
  return (
    <section
      id="showcase"
      className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-24 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-neon-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-neon-purple/5 blur-[120px] pointer-events-none" />

      {/* Section header */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-3.5 py-1.5 rounded-full">
          Product Walkthrough
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
          App In{' '}
          <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Action
          </span>
        </h2>
        <p className="mt-4 text-slate-400 text-sm sm:text-base font-light leading-relaxed">
          See how Schedra automates your routine throughout the day.
        </p>
      </motion.div>

      {/*
        Grid behaviour:
        - Normal mobile  (< md)  → 1 column, cards stack as 3 rows  ✓
        - Mobile browser "desktop view" (md viewport forced) → still 1 col via md:grid-cols-3 only triggering at true md
          BUT "desktop view" on mobile forces the site to render at full desktop width,
          so md:grid-cols-3 will fire → 3 columns side-by-side as requested ✓
        - Desktop (lg+) → 3 columns ✓
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {showcaseItems.map((item, idx) => (
          <motion.div
            key={item.id}
            className={`group glass-card rounded-[28px] overflow-hidden flex flex-col
                        border border-slate-900 ${item.hoverBorder}
                        transition-all duration-300 shadow-xl hover:shadow-2xl`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
          >
            {/* ── Image area ───────────────────────────────────────────────── */}
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                draggable={false}
              />

              {/* Gradient fade at bottom so text blends in */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07071a] via-[#07071a]/20 to-transparent" />

              {/* Session badge — top left */}
              <div
                className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{
                  background: `${item.accentHex}18`,
                  border: `1px solid ${item.accentHex}40`,
                  color: item.accentHex,
                }}
              >
                {item.label}
              </div>
            </div>

            {/* ── Text content ─────────────────────────────────────────────── */}
            <div className="flex flex-col flex-1 p-7 space-y-3 text-left">
              {/* Time badge */}
              <span
                className="self-start text-[11px] font-bold uppercase px-2.5 py-1 rounded-full"
                style={{
                  background: `${item.accentHex}15`,
                  color: item.accentHex,
                }}
              >
                {item.timeLabel}
              </span>

              {/* Title */}
              <h3
                className="text-xl font-bold text-white leading-snug transition-colors duration-250 group-hover:text-[var(--accent)]"
                style={{ '--accent': item.accentHex } as React.CSSProperties}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed font-light flex-1">
                {item.description}
              </p>

              {/* View Details → opens YouTube */}
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 pt-1 text-xs font-bold uppercase tracking-wider
                           transition-all duration-200 hover:translate-x-1 w-fit"
                style={{ color: item.accentHex }}
              >
                <span
                  className="flex items-center justify-center w-6 h-6 rounded-full"
                  style={{
                    background: `${item.accentHex}18`,
                    border: `1px solid ${item.accentHex}40`,
                  }}
                >
                  <Play
                    className="w-2.5 h-2.5"
                    style={{ fill: item.accentHex, color: item.accentHex }}
                  />
                </span>
                View Details
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Bottom accent line */}
            <div
              className="h-[2px] w-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(90deg, transparent, ${item.accentHex}, transparent)`,
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
