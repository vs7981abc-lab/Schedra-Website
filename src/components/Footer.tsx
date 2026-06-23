import React from 'react';
import { Sparkles, Mail } from 'lucide-react';

// ─── Social link constants ────────────────────────────────────────────────────
const INSTAGRAM_URL = 'https://www.instagram.com/vishnusinghai?igsh=MWJqNjlneWJidG50Mw==';
const YOUTUBE_URL   = 'https://youtube.com/@vishnusinghai?si=oAoVnzC1CTBFlQuE';
const X_URL         = 'https://x.com/vishnusinghai';
const EMAIL         = 'vs320371@gmail.com';
// ──────────────────────────────────────────────────────────────────────────────

// ─── Inline SVG icons (no lucide dependency issues) ───────────────────────────
const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const EmailIcon = () => (
  <Mail className="w-4 h-4" />
);

// ─── Social links data ────────────────────────────────────────────────────────
const socialLinks = [
  { icon: <InstagramIcon />, href: INSTAGRAM_URL,       label: 'Instagram' },
  { icon: <XIcon />,         href: X_URL,               label: 'X (Twitter)' },
  { icon: <YoutubeIcon />,   href: YOUTUBE_URL,         label: 'YouTube' },
  { icon: <EmailIcon />,     href: `mailto:${EMAIL}`,   label: 'Email' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#020208] border-t border-slate-900 pt-20 pb-10 mt-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-left">

        {/* ── Brand Info Column (spans 2 cols on lg) ─────────────────────── */}
        <div className="lg:col-span-2 flex flex-col space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-neon-purple via-neon-indigo to-neon-cyan p-[1px] flex items-center justify-center">
              <div className="w-full h-full bg-[#08081a] rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-neon-cyan" />
              </div>
            </div>
            <span className="text-lg font-bold tracking-wider text-white">Schedra</span>
          </div>

          {/* Tagline */}
          <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
            Your personal AI daily planner, gym tracker, and productivity partner. Harness machine learning routines for maximum day-to-day efficiency.
          </p>

          {/* Social icons — Instagram, X, YouTube, Email */}
          <div className="flex space-x-3">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={social.label}
                title={social.label}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center
                           text-slate-400 hover:text-white hover:border-neon-cyan/40
                           hover:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Column: Product ───────────────────────────────────────────── */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Product</h4>
          <ul className="space-y-3.5">
            {['Features', 'AI Scheduler', 'Gym Planner', 'Pricing', 'Updates'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-slate-400 hover:text-white text-sm font-light transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column: Support ───────────────────────────────────────────── */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Support</h4>
          <ul className="space-y-3.5">
            {['Help Center', 'Contact', 'FAQ'].map((item) => (
              <li key={item}>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white text-sm font-light transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column: Connect (social links as text list) ───────────────── */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Connect</h4>
          <ul className="space-y-3.5">
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-white text-sm font-light transition-colors duration-200">
                Instagram
              </a>
            </li>
            <li>
              <a href={X_URL} target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-white text-sm font-light transition-colors duration-200">
                X (Twitter)
              </a>
            </li>
            <li>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-white text-sm font-light transition-colors duration-200">
                YouTube
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}
                className="text-slate-400 hover:text-white text-sm font-light transition-colors duration-200">
                Email Us
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Bottom Row ──────────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 border-t border-slate-900 mt-16 pt-8
                      flex flex-col md:flex-row justify-between items-center
                      text-slate-500 text-xs font-light gap-4 md:gap-0">
        <span>&copy; 2026 Schedra. All Rights Reserved.</span>
        <div className="flex space-x-6">
          <a href="privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="terms-of-service" className="hover:text-white transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};