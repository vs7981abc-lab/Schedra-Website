import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Schedra
          </Link>
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
            This policy explains how Schedra — both the app and this website — collects, uses, and protects your
            personal information. We are committed to keeping your data safe and transparent.
          </p>
          <p className="text-slate-600 text-xs mt-4">Last updated: August 3, 2026</p>
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
            title: 'About Schedra',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'The app',
                text: 'Schedra is a productivity app, built and maintained by an independent developer based in India. It helps you build daily routines, plan workouts and meals, take notes, and track habits — with optional AI-powered assistance ("Schedra AI") for eligible subscribers.',
              },
              {
                subtitle: 'This website',
                text: 'schedra.com is our companion website. It doesn\u2019t require sign-in or an account, and the only personal information it collects is what you choose to submit through our Contact form.',
              },
              {
                subtitle: 'Keep your account secure',
                text: 'Keep the Gmail account you sign in with, and your device, secure. Any hacking or unwanted modification by anyone else is your own responsibility and something we can\u2019t undo on our end.',
              },
            ],
          },
          {
            number: '02',
            title: 'Information We Collect In The App',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'Account & profile info',
                text: 'Schedra signs you in exclusively through Google, so when you sign in we receive the basic profile info Google shares at your authorisation — your name, email, and profile photo.',
              },
              {
                subtitle: 'Details you provide',
                text: 'You also share your age, gender, group/category, and country, how you heard about Schedra, and any referral code involved.',
              },
              {
                subtitle: 'Content you create',
                text: 'The content you create in the app — routines, workout and meal plans, notes, and uploaded files.',
              },
              {
                subtitle: 'Usage & billing info',
                text: 'We also keep basic usage information like your subscription status and account timestamps. We never directly collect or store your full card, UPI, or bank details — all payments go through Google Play Billing, which handles that under its own privacy practices.',
              },
            ],
          },
          {
            number: '03',
            title: 'Information We Collect On This Website',
            accent: '#6366f1',
            content: [
              {
                subtitle: 'Contact form',
                text: 'When you submit our Contact form, we store the name, phone number (optional), email address, and message you provide, along with the time of submission, so we can get back to you.',
              },
              {
                subtitle: 'Automatically collected data',
                text: 'Like most websites, our hosting infrastructure automatically logs standard technical information — such as browser type, device type, and general request data — to keep the site secure and running smoothly.',
              },
              {
                subtitle: 'Cookies',
                text: 'This website avoids third-party advertising cookies or tracking pixels. Any cookies used are limited to what\u2019s needed for the site to function.',
              },
            ],
          },
          {
            number: '04',
            title: 'Local Storage vs. Cloud Storage',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'What lives on your device',
                text: 'Your routines, workout and meal plans, reminders, notes, settings, profile image, notification history, AI chat history, and (for Free users) uploaded files all live on your device first, for offline access and speed. If you uninstall the app, lose your device, or don\u2019t hold an active subscription, anything that hasn\u2019t been synced to the cloud may not be recoverable.',
              },
              {
                subtitle: 'What\u2019s always in the cloud',
                text: 'Regardless of plan, some account-level data — your username, email, age, gender, group, country, referral details, wallet balance, and subscription status — is stored in secure cloud storage to run your account and the referral program.',
              },
              {
                subtitle: 'Pro/Premium sync',
                text: 'Only Pro/Premium subscribers can additionally sync recurring routines, workout/meal plans, habit-builder scores, and any files or notes-PDFs they individually choose to upload — nothing is uploaded automatically. Your personal Schedra API key is never stored in the cloud, only on your device.',
              },
            ],
          },
          {
            number: '05',
            title: 'Habit, Fitness & Sensor Data',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'Sensors & location',
                text: 'If you use habit-builder features like the step counter, running tracker, or cycling tracker, Schedra accesses your device\u2019s sensors and GPS location to measure steps, distance, pace, and routes.',
              },
            ],
          },
          {
            number: '06',
            title: 'AI Features & Your Data',
            accent: '#6366f1',
            content: [
              {
                subtitle: 'How it works',
                text: 'When you use AI-assisted features — AI Chat, AI Calorie Scan, Meal Planner, or Routine/Exercise suggestions — the inputs you provide (like photos for calorie scanning or text prompts) are sent through Schedra\u2019s own backend to Schedra AI to generate a response for you.',
              },
              {
                subtitle: 'Availability & limits',
                text: 'These features are available only to eligible paid subscribers, and any AI-generated response is for general informational and productivity purposes only — never a medical diagnosis.',
              },
            ],
          },
          {
            number: '07',
            title: 'Third-Party Service Providers',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'Who we rely on',
                text: 'Schedra relies on a small set of trusted providers: Supabase for authentication support and our cloud database (this also powers the Contact form on this website), Google Sign-In for account authentication, Google Play Billing for subscription payments, and Schedra AI infrastructure to power AI features through our backend.',
              },
              {
                subtitle: 'We don\u2019t sell your data',
                text: 'Each provider processes information under its own privacy practices, alongside the contractual safeguards we put in place. We do not sell your personal information to anyone.',
              },
            ],
          },
          {
            number: '08',
            title: 'Data Retention & Deletion',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'App account deletion',
                text: 'You can permanently delete your account anytime from Settings \u2192 Account Deactivation, and deletion is permanent. For Free users, cloud-stored account data is deleted immediately. For Pro/Premium users, cloud-synced data — routines, workout/meal plans, habit-builder scores, uploaded files and notes — is kept for 7 days after deletion or subscription cancellation, so you can recover or export it, and then it\u2019s permanently deleted. We\u2019d recommend downloading anything you want to keep before that 7-day window closes.',
              },
              {
                subtitle: 'Website contact messages',
                text: 'Messages sent through this website\u2019s Contact form are kept only as long as needed to respond to your inquiry. You can request deletion at any time by emailing us.',
              },
            ],
          },
          {
            number: '09',
            title: 'Your Privacy Rights',
            accent: '#6366f1',
            content: [
              {
                subtitle: 'Your rights',
                text: 'Depending on where you live, you may have rights to access, correct, delete, restrict, or port your personal information, and to object to certain processing — for example under the EU/UK GDPR, India\u2019s Digital Personal Data Protection Act, or the California CCPA/CPRA.',
              },
              {
                subtitle: 'How to exercise them',
                text: 'Many of these are already available in-app (updating your profile, deleting your account); for anything else, reach us at schedrasupport@gmail.com or via "Report a Problem" in Settings.',
              },
            ],
          },
          {
            number: '10',
            title: 'Children\u2019s Privacy',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'Age requirement',
                text: 'Schedra is intended for users 13 years of age and older, and we don\u2019t knowingly collect personal information from children under 13. If your local law sets a higher age of digital consent, you\u2019ll need a parent or guardian\u2019s permission to use Schedra.',
              },
              {
                subtitle: 'If you believe a child shared data with us',
                text: 'If you believe a child has given us information without appropriate consent, please contact us so we can address it.',
              },
            ],
          },
          {
            number: '11',
            title: 'International Users & Data Transfers',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'Where your data may go',
                text: 'Schedra is available worldwide, and because our infrastructure and service providers may operate outside your own country, your information may be processed in other jurisdictions with different data protection laws.',
              },
              {
                subtitle: 'Billing regions',
                text: 'Billing currency follows your region — INR within India, USD elsewhere — both handled through Google Play Billing.',
              },
            ],
          },
          {
            number: '12',
            title: 'Data Security',
            accent: '#6366f1',
            content: [
              {
                subtitle: 'How we protect it',
                text: 'We use industry-standard practices — including secure Google Sign-In authentication and access-controlled cloud infrastructure — to protect your information, though no method of transmission or storage is ever 100% secure.',
              },
              {
                subtitle: 'Your responsibility',
                text: 'You\u2019re responsible for keeping your own Google account credentials and device secure; we can\u2019t be responsible for losses from unauthorised access to your own account or device.',
              },
            ],
          },
          {
            number: '13',
            title: 'Changes to This Policy & Contact Us',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'Updates',
                text: 'We may update this Privacy Policy as Schedra evolves — material changes are reflected in the "Last Updated" date above, and continuing to use the app or website afterward means you accept the revised Policy.',
              },
              {
                subtitle: 'Get in touch',
                text: 'For privacy questions, data requests, or any other concerns, reach us at schedrasupport@gmail.com, through "Report a Problem" in Settings, or via this website.',
              },
            ],
          },
          {
            number: '14',
            title: 'Our Mission',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'What drives us',
                text: 'Our mission is to simplify your daily routine, improve productivity, and help you stay consistent in achieving your goals through a reliable and intuitive platform.',
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
            <Link to="/privacy-policy" className="text-neon-cyan">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

    </div>
  );
};
