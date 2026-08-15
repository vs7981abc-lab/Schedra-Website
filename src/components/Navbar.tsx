import React from 'react';
import { Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full glass-nav transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

        {/* Left Side: Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-neon-purple via-neon-indigo to-neon-cyan p-[1.5px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#08081a] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-neon-cyan group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent font-sans">
            Schedra
          </span>
        </div>
      </div>
    </nav>
  );
};
