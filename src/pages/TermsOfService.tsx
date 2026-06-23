import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

export const TermsOfService: React.FC = () => {
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
            <FileText className="w-4 h-4 text-neon-purple" />
            <span className="text-xs font-bold uppercase tracking-widest text-neon-purple">Terms of Service</span>
          </div>
        </div>
      </nav>

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="relative w-full max-w-4xl mx-auto px-6 pt-16 pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-neon-purple/5 blur-[120px] pointer-events-none" />
        <div className="relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-neon-purple bg-neon-purple/10 px-3.5 py-1.5 rounded-full mb-6">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
            Terms of{' '}
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-xl">
            Please read these Terms of Service carefully before using Schedra. By accessing or using our app, you agree to be bound by these terms.
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

        {[
          {
            number: '01',
            title: 'Acceptance of Terms',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'Agreement',
                text: 'By downloading, installing, or using the Schedra application ("App") or website ("Service"), you confirm that you are at least 13 years of age and agree to these Terms of Service ("Terms"). If you do not agree, please do not use Schedra.',
              },
              {
                subtitle: 'Updates to Terms',
                text: 'We reserve the right to update or modify these Terms at any time. Changes will be communicated via email or an in-app notification. Your continued use of Schedra after any changes constitutes your acceptance of the new Terms.',
              },
            ],
          },
          {
            number: '02',
            title: 'Description of Service',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'What Schedra provides',
                text: 'Schedra is an AI-powered daily planning application that offers task scheduling, gym workout planning, meal planning, smart reminders, and productivity analytics. The App is intended for personal, non-commercial use.',
              },
              {
                subtitle: 'AI features',
                text: 'Certain features of Schedra use artificial intelligence and machine learning to generate personalised schedules and recommendations. These are provided as suggestions only and are not guaranteed to be accurate or suitable for every individual situation.',
              },
            ],
          },
          {
            number: '03',
            title: 'User Accounts',
            accent: '#6366f1',
            content: [
              {
                subtitle: 'Account creation',
                text: 'To access certain features, you may need to create an account. You agree to provide accurate, current, and complete information during registration and to keep your account details up to date.',
              },
              {
                subtitle: 'Account security',
                text: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately at vs320371@gmail.com if you suspect any unauthorised access to your account.',
              },
              {
                subtitle: 'Account termination',
                text: 'We reserve the right to suspend or terminate your account at our discretion if you violate these Terms or engage in any conduct that we determine to be harmful to other users or the integrity of our Service.',
              },
            ],
          },
          {
            number: '04',
            title: 'Acceptable Use',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'Permitted use',
                text: 'You may use Schedra solely for personal, lawful purposes in accordance with these Terms. You agree not to use the Service in any way that could damage, disable, or impair it.',
              },
              {
                subtitle: 'Prohibited activities',
                text: 'You must not: attempt to gain unauthorised access to any part of the Service; reverse engineer, decompile, or disassemble any portion of the App; use automated tools, bots, or scripts to access or scrape the Service; upload or share any content that is illegal, harmful, abusive, or infringes on the rights of others; or impersonate any person or entity.',
              },
            ],
          },
          {
            number: '05',
            title: 'Intellectual Property',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'Our content',
                text: 'All content within Schedra including but not limited to the name, logo, design, text, graphics, code, and AI models are the exclusive property of Schedra and its creator. All rights are reserved.',
              },
              {
                subtitle: 'Your content',
                text: 'You retain ownership of any personal data, tasks, and content you input into Schedra. By using the Service, you grant Schedra a limited, non-exclusive licence to use this data solely to provide and improve the Service.',
              },
              {
                subtitle: 'Feedback',
                text: 'If you submit ideas, suggestions, or feedback about Schedra, you grant us the right to use that feedback without any obligation to compensate you.',
              },
            ],
          },
          {
            number: '06',
            title: 'Third-Party Services',
            accent: '#6366f1',
            content: [
              {
                subtitle: 'External links and integrations',
                text: 'Schedra may contain links to third-party websites or integrate with third-party services such as Google Play Store. We are not responsible for the content, policies, or practices of these third parties. Your use of such services is governed by their own terms and policies.',
              },
            ],
          },
          {
            number: '07',
            title: 'Disclaimers and Limitation of Liability',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'No warranties',
                text: 'Schedra is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components.',
              },
              {
                subtitle: 'Health and fitness disclaimer',
                text: 'The gym planning, meal planning, and fitness tracking features of Schedra are for informational and organisational purposes only and do not constitute medical or professional health advice. Always consult a qualified healthcare professional before making significant changes to your diet or exercise routine.',
              },
              {
                subtitle: 'Limitation of liability',
                text: 'To the fullest extent permitted by applicable law, Schedra and its creator shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the Service.',
              },
            ],
          },
          {
            number: '08',
            title: 'Governing Law',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'Jurisdiction',
                text: 'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.',
              },
            ],
          },
          {
            number: '09',
            title: 'Contact Us',
            accent: '#6366f1',
            content: [
              {
                subtitle: 'Questions about these Terms',
                text: 'If you have any questions or concerns about these Terms of Service, please contact us at vs320371@gmail.com or via Instagram @vishnusinghai. We will do our best to respond within 48 hours.',
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
            <a href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-neon-purple">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
};