import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Kumar Varun",
      position: "Architect",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Schedra completely restructured my daily workflow. The gym planner keeps me consistent and their are different reminder system as well."
    },
    {
      name: "Ankit Kumar",
      position: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Ease to Access. The automated notifications and dynamic daily adjustments feel like absolute magic."
    },
    {
      name: "Saurav Kumar",
      position: "Financial Advisor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      rating: 4,
      text: "Very Ease to Access.The meal planner and exercise planner have been a game-changer for my nutrition goals. But Still needs some improvements."
    }
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-24 relative overflow-hidden">
      
      {/* Background glow points */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-neon-purple/5 blur-[120px] pointer-events-none" />

      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.span 
          className="text-xs font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-3.5 py-1.5 rounded-full"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.span>
        
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Loved by{" "}
          <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Thousands
          </span>
        </motion.h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            className="group glass-card p-8 rounded-[24px] flex flex-col justify-between text-left relative overflow-hidden border border-slate-900/60 transition-all duration-300 hover:border-neon-cyan/20 hover:translate-y-[-4px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
          >
            {/* Stars rating */}
            <div className="flex items-center space-x-1 mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Review content */}
            <p className="text-slate-300 text-sm leading-relaxed mb-8 font-light italic">
              "{review.text}"
            </p>

            {/* User metadata */}
            <div className="flex items-center space-x-4 border-t border-slate-900/80 pt-6 mt-auto">
              <img
                className="h-11 w-11 rounded-full object-cover border border-slate-800"
                src={review.avatar}
                alt={`${review.name} avatar`}
              />
              <div>
                <h4 className="text-sm font-bold text-slate-100">{review.name}</h4>
                <p className="text-xs text-slate-500">{review.position}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
