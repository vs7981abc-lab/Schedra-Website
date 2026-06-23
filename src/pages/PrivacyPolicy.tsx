import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#03030c] text-white">

      {/* ── Top nav bar ─────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 w-full bg-[#03030c]/90 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Schedra
          </a>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-neon-cyan" />
            <span className="text-xs font-bold uppercase tracking-widest text-neon-cyan">Privacy Policy</span>
          </div>
        </div>
      </nav>

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="relative w-full max-w-4xl mx-auto px-6 pt-16 pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-neon-cyan/5 blur-[120px] pointer-events-none" />
        <div className="relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/10 px-3.5 py-1.5 rounded-full mb-6">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
            Privacy{' '}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-xl">
            This policy explains how Schedra collects, uses, and protects your personal information. We are committed to keeping your data safe and transparent.
          </p>
          <p className="text-slate-600 text-xs mt-4">Last updated: June 2026</p>
        </div>
      </header>

      {/* ── Divider ─────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-6 py-14 space-y-12">

        {/* Helper component inline */}
        {[
          {
            number: '01',
            title: 'Information We Collect',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'Information you provide directly',
                text: 'When you create an account, we collect your name, email address, and any profile information you choose to provide. If you contact us through the contact form, we also store your message and phone number (if provided).',
              },
              {
                subtitle: 'Information collected automatically',
                text: 'When you use Schedra, we automatically collect usage data such as app activity logs, device type, operating system version, IP address, and crash reports. This helps us improve app performance and fix bugs.',
              },
              {
                subtitle: 'Health and fitness data',
                text: 'If you use our Gym Planner or Meal Planner features, we collect workout logs, exercise history, and nutritional information that you input. This data is stored securely and used only to power your personal planning experience.',
              },
            ],
          },
          {
            number: '02',
            title: 'How We Use Your Information',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'To provide and improve our services',
                text: 'We use your data to operate the Schedra app, personalise your AI scheduling experience, send you smart reminders, and improve our machine learning models for better task sequencing.',
              },
              {
                subtitle: 'To communicate with you',
                text: 'We may send you service-related emails such as account confirmations, updates about new features, and responses to your support requests. We do not send unsolicited marketing emails without your explicit consent.',
              },
              {
                subtitle: 'To ensure security',
                text: 'We use your information to detect and prevent fraudulent activity, protect the security of our systems, and comply with legal obligations.',
              },
            ],
          },
          {
            number: '03',
            title: 'Data Storage and Security',
            accent: '#6366f1',
            content: [
              {
                subtitle: 'Where your data is stored',
                text: 'Your data is stored on secure servers provided by Supabase, which uses industry-standard encryption at rest and in transit. All communications between the app and our servers use HTTPS/TLS encryption.',
              },
              {
                subtitle: 'How long we retain your data',
                text: 'We retain your account data for as long as your account is active. Contact form submissions are kept for up to 12 months for support purposes. You may request deletion of your data at any time by contacting us at vs320371@gmail.com.',
              },
              {
                subtitle: 'Security measures',
                text: 'We implement row-level security policies, access controls, and regular security audits to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
              },
            ],
          },
          {
            number: '04',
            title: 'Sharing of Information',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'We do not sell your data',
                text: 'Schedra does not sell, rent, or trade your personal information to any third parties for their marketing purposes. Your data is yours.',
              },
              {
                subtitle: 'Service providers',
                text: 'We share data with a limited number of trusted service providers who help us operate our platform — including Supabase (database), and analytics tools. These providers are contractually obligated to keep your information confidential.',
              },
              {
                subtitle: 'Legal requirements',
                text: 'We may disclose your information if required to do so by law, court order, or government authority, or if we believe disclosure is necessary to protect the rights, property, or safety of Schedra, our users, or the public.',
              },
            ],
          },
          {
            number: '05',
            title: 'Your Rights',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'Access and correction',
                text: 'You have the right to access the personal information we hold about you and to request corrections if any information is inaccurate or incomplete.',
              },
              {
                subtitle: 'Deletion',
                text: 'You may request the deletion of your personal data at any time. Upon request, we will delete your account and all associated data within 30 days, unless we are required to retain it for legal reasons.',
              },
              {
                subtitle: 'Data portability',
                text: 'You have the right to receive a copy of your personal data in a structured, machine-readable format. Contact us at vs320371@gmail.com to make this request.',
              },
            ],
          },
          {
            number: '06',
            title: 'Cookies and Tracking',
            accent: '#6366f1',
            content: [
              {
                subtitle: 'What we use',
                text: 'The Schedra web platform may use minimal cookies for session management and authentication. We do not use third-party advertising cookies or tracking pixels.',
              },
              {
                subtitle: 'Your choices',
                text: 'You can control cookie settings through your browser preferences. Disabling cookies may affect some functionality of the app.',
              },
            ],
          },
          {
            number: '07',
            title: 'Changes to This Policy',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'Updates',
                text: 'We may update this Privacy Policy from time to time. When we make significant changes, we will notify you via email or through a prominent notice in the app. Your continued use of Schedra after changes are posted constitutes acceptance of the updated policy.',
              },
            ],
          },
          {
            number: '08',
            title: 'Contact Us',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'Get in touch',
                text: 'If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at vs320371@gmail.com or reach out via Instagram @vishnusinghai. We aim to respond to all privacy-related inquiries within 48 hours.',
              },
            ],
          },
        ].map((section) => (
          <div key={section.number} className="group">
            {/* Section header */}
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-[11px] font-mono font-bold shrink-0"
                style={{ color: section.accent }}
              >
                {section.number}
              </span>
              <div className="h-px flex-1 opacity-15" style={{ background: section.accent }} />
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight shrink-0">
                {section.title}
              </h2>
            </div>

            {/* Sub-sections */}
            <div className="space-y-6 pl-0 sm:pl-8">
              {section.content.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-4 border-l-2"
                  style={{ borderColor: `${section.accent}30` }}
                >
                  <h3
                    className="text-sm font-bold mb-2"
                    style={{ color: section.accent }}
                  >
                    {item.subtitle}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

      </main>

      {/* ── Footer strip ────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-900 mt-8 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
          <span>&copy; 2026 Schedra. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="text-neon-cyan">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
};