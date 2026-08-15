import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, X, Loader2 } from 'lucide-react';

// ─── Instagram SVG (not available in lucide-react@0.383.0) ───────────────────
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
import { supabase } from '../lib/supabase';

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// ─── Success Dialog Component ─────────────────────────────────────────────────
const SuccessDialog: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Dialog box */}
      <motion.div
        className="relative z-10 bg-[#070722] border border-slate-800 rounded-3xl p-8 sm:p-12
                   w-full max-w-md text-center shadow-2xl overflow-hidden"
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 30 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      >
        {/* Glow blobs inside dialog */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-neon-cyan/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-neon-purple/10 blur-2xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900 border border-slate-800
                     flex items-center justify-center text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Animated checkmark */}
        <motion.div
          className="relative mx-auto w-20 h-20 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
        >
          {/* Outer ring pulse */}
          <motion.div
            className="absolute inset-0 rounded-full bg-neon-cyan/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.3, 1], opacity: [0, 0.6, 0] }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          />
          {/* Icon container */}
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/20
                          border border-neon-cyan/40 flex items-center justify-center shadow-lg shadow-neon-cyan/20">
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20, delay: 0.25 }}
            >
              <CheckCircle className="w-10 h-10 text-neon-cyan" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
            Message Sent! 🎉
          </h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-2">
            Thanks for reaching out! Your message has been delivered successfully.
          </p>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            We'll get back to you at{' '}
            <span className="text-neon-cyan font-semibold">schedrasupport@gmail.com</span>{' '}
            within 2 hours. ✨
          </p>
        </motion.div>

        {/* CTA button */}
        <motion.button
          onClick={onClose}
          className="relative mt-8 group w-full py-3.5 rounded-xl font-bold text-sm overflow-hidden"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl" />
          <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
          <span className="relative z-10 text-white">Back to Home</span>
        </motion.button>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

// ─── Main Contact Component ───────────────────────────────────────────────────
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please write a message.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: formData.name.trim(),
          phone: formData.phone.trim() || null,
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
      ]);

      if (error) throw error;

      // Reset form and show success dialog
      setFormData({ name: '', phone: '', email: '', message: '' });
      setErrors({});
      setShowSuccess(true);
    } catch (err: unknown) {
      console.error('Supabase error:', err);
      setSubmitError(
        'Something went wrong sending your message. Please try again or email us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Field change handler ────────────────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
    setSubmitError(null);
  };

  return (
    <>
      {/* ── Success Dialog ──────────────────────────────────────────────────── */}
      {showSuccess && <SuccessDialog onClose={() => setShowSuccess(false)} />}

      {/* ── Section ────────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-24 relative overflow-hidden"
      >
        {/* Background glow overlay */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-neon-cyan/5 blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* ── Left Side: Copy ────────────────────────────────────────────── */}
          <motion.div
            className="lg:col-span-5 flex flex-col space-y-6 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="self-start text-xs font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-3.5 py-1.5 rounded-full">
              Get In Touch
            </span>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Let's Build <br />
              <span className="bg-gradient-to-r from-neon-cyan via-neon-indigo to-neon-purple bg-clip-text text-transparent">
                Together
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
              Have questions about how Schedra can optimize your enterprise team or personal routines? Reach out to our engineers and product experts. We usually respond within 2 hours.
            </p>

            <div className="space-y-4 pt-4">
              {/* Email */}
              <div className="flex items-center space-x-3.5 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-neon-cyan" />
                </div>
                <a
                  href="mailto:vs320371@gmail.com"
                  className="text-sm font-medium hover:text-neon-cyan transition-colors"
                >
                  schedrasupport@gmail.com
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center space-x-3.5 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <InstagramIcon className="w-4 h-4 text-neon-purple" />
                </div>
                <a
                  href="https://www.instagram.com/vishnusinghai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-neon-purple transition-colors"
                >
                  @vishnusinghai
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-3.5 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-neon-indigo" />
                </div>
                <span className="text-sm font-medium">Ranchi, India</span>
              </div>
            </div>
          </motion.div>

          {/* ── Right Side: Form ───────────────────────────────────────────── */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="glass-card rounded-[28px] p-6 sm:p-10 border border-slate-900/60 shadow-xl relative overflow-hidden">
              
              {/* Corner glowing blur inside the form box */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/5 blur-2xl pointer-events-none" />

              {/* Global submit error */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    className="mb-5 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-medium"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {submitError}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5 text-left" noValidate>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className={`w-full bg-[#050514] border focus:ring-1 outline-none rounded-xl px-4 py-3 text-slate-200 text-sm
                                  transition-all duration-300 placeholder:text-slate-700
                                  ${errors.name
                                    ? 'border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/20'
                                    : 'border-slate-800 focus:border-neon-cyan/80 focus:ring-neon-cyan/20'
                                  }`}
                    />
                    {errors.name && (
                      <p className="text-rose-400 text-[10px] font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone (optional) */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Phone <span className="text-slate-600 normal-case font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#050514] border border-slate-800 focus:border-neon-purple/80 focus:ring-1 focus:ring-neon-purple/20 outline-none rounded-xl px-4 py-3 text-slate-200 text-sm transition-all duration-300 placeholder:text-slate-700"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={`w-full bg-[#050514] border focus:ring-1 outline-none rounded-xl px-4 py-3 text-slate-200 text-sm
                                transition-all duration-300 placeholder:text-slate-700
                                ${errors.email
                                  ? 'border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/20'
                                  : 'border-slate-800 focus:border-neon-cyan/80 focus:ring-neon-cyan/20'
                                }`}
                  />
                  {errors.email && (
                    <p className="text-rose-400 text-[10px] font-medium">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className={`w-full bg-[#050514] border focus:ring-1 outline-none rounded-xl px-4 py-3 text-slate-200 text-sm
                                transition-all duration-300 placeholder:text-slate-700 resize-none
                                ${errors.message
                                  ? 'border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/20'
                                  : 'border-slate-800 focus:border-neon-purple/80 focus:ring-neon-purple/20'
                                }`}
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-[10px] font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full group py-4 rounded-xl font-bold text-sm transition-all duration-300 overflow-hidden shadow-lg shadow-neon-purple/10 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan p-[1px] rounded-xl" />
                  <span className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                  <span className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-xl" />
                  <span className="relative z-10 text-white flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Let's Connect <Send className="w-4 h-4" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};
