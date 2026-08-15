import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Schedra
          </Link>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-neon-purple" />
            <span className="text-xs font-bold uppercase tracking-widest text-neon-purple">Terms & Conditions</span>
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
            Terms &{' '}
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-xl">
            Please read these Terms carefully before using the Schedra app or this website. By accessing or using
            either, you agree to be bound by these Terms.
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
            title: 'About Schedra & How It Works',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'The app',
                text: 'Schedra is a productivity app, built and operated by an independent developer, that helps you build daily routines, workout plans, meal schedules, notes, and habit tracking. Free users store their routine data mainly on-device. Pro/Premium users can optionally sync supported data to secure cloud storage and unlock AI-powered features. Files are uploaded to the cloud only when you explicitly choose to upload them — never automatically.',
              },
              {
                subtitle: 'This website',
                text: 'By browsing schedra.com or submitting our Contact form, you also agree to these Terms.',
              },
              {
                subtitle: 'Keep your account secure',
                text: 'Keep the Gmail account you signed up with, and your device, secure — any hacking or unwanted modification by anyone is your own responsibility and something we can\u2019t undo on our end.',
              },
            ],
          },
          {
            number: '02',
            title: 'Eligibility & Your Account',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'Age requirement',
                text: 'You must be at least 13 years old to use Schedra — if your local law sets a higher age of digital consent, you\u2019ll need a parent or guardian\u2019s permission.',
              },
              {
                subtitle: 'Sign-in & usernames',
                text: 'Schedra supports sign-in exclusively through Google Sign-In, and each Gmail account may hold only one Schedra account. You can update your username once every 14 days from Settings \u2192 Your Info.',
              },
              {
                subtitle: 'Your responsibility',
                text: 'You\u2019re responsible for keeping your Google account and device secure — any activity through a compromised account or device is on you, not something Schedra caused.',
              },
            ],
          },
          {
            number: '03',
            title: 'Ownership & Your Content',
            accent: '#6366f1',
            content: [
              {
                subtitle: 'Your licence to use Schedra',
                text: 'Using Schedra gives you a limited, personal, non-transferable licence to use the app for your own non-commercial purposes. The app itself — its design, branding, and underlying code — belongs to the developer.',
              },
              {
                subtitle: 'Your content stays yours',
                text: 'You keep full ownership of the content you create: your notes, routines, meal plans, and uploaded files. By using Schedra, you simply grant us a limited licence to store and process that content in order to provide you the service.',
              },
            ],
          },
          {
            number: '04',
            title: 'Subscriptions, Pro Codes & Payments',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'Plans',
                text: 'Schedra offers Free, Pro, and Premium plans with different levels of access to AI tools, cloud sync, API access, and calorie-scan features. Paid subscriptions renew automatically unless cancelled through Google Play before the renewal date. If you cancel, you can still download or export your cloud-synced data for up to 7 days afterward.',
              },
              {
                subtitle: 'Pro Codes',
                text: 'Pro Codes can also be purchased and redeemed for Pro/Premium access, and are processed the same way as subscriptions — exclusively through Google Play Billing.',
              },
              {
                subtitle: 'Billing',
                text: 'All payments are handled by Google Play Billing. Users in India are billed in INR; everyone else is billed in USD. UPI is available only within Google Play\u2019s own checkout flow. No purchases are made on this website.',
              },
            ],
          },
          {
            number: '05',
            title: 'Refund Policy',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'Requesting a refund',
                text: 'Refund requests can be made within 36 hours of purchase, either through "Report a Problem" in Settings or by emailing schedrasupport@gmail.com. Requests are reviewed under this policy and, where applicable, under Google Play\u2019s own Billing and refund rules.',
              },
              {
                subtitle: 'Cash vs. Redeem Code',
                text: 'When requesting a refund, choose either Cash or a replacement Redeem Code — Cash carries a 25% processing fee deducted from the refundable amount; a Redeem Code has no fee.',
              },
              {
                subtitle: 'After a refund',
                text: 'Once a refund completes, your access to Pro/Premium features and your personal API key are deactivated, and cloud sync of your data is paused until you resubscribe.',
              },
            ],
          },
          {
            number: '06',
            title: 'Referral Program',
            accent: '#6366f1',
            content: [
              {
                subtitle: 'How it works',
                text: 'Each Gmail account can hold one Schedra account and one referral code, which you can share with unlimited people. Referral rewards, however, are only granted for your first 1,000 successfully referred users, and only when a referred user makes their first qualifying subscription purchase — not on renewals.',
              },
              {
                subtitle: 'Rewards',
                text: 'Someone who signs up with your referral code gets a 5% discount on their subscription, and you earn wallet credit equal to 10% of that subscription fee once Google Play Billing confirms the purchase.',
              },
              {
                subtitle: 'Misuse',
                text: 'Misusing the referral program — fake accounts, self-referrals, or creating multiple accounts — can lead to forfeited rewards, a suspended wallet, or account termination.',
              },
            ],
          },
          {
            number: '07',
            title: 'Wallet',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'Earning balance',
                text: 'Wallet balance can only be earned through the Referral Program — Schedra doesn\u2019t currently support adding money to your wallet directly.',
              },
              {
                subtitle: 'Using balance',
                text: 'Your balance can\u2019t be withdrawn as cash. Instead, once it covers a plan\u2019s full price, you can exchange it for a one-time, 11-digit Pro Code (no discount applies to a wallet-exchanged code), which you can redeem yourself or gift to someone else. A generated code is single-use — once redeemed by anyone, it expires with no refund.',
              },
            ],
          },
          {
            number: '08',
            title: 'AI Features',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'What\u2019s available',
                text: 'AI Chat, AI Calorie Scan, Meal Planner, and Routine/Exercise suggestions — powered by Schedra AI — are available exclusively to Pro/Premium subscribers. These features can offer general health-related information, wellness suggestions, and educational guidance based on what you enter.',
              },
              {
                subtitle: 'Limits',
                text: 'AI responses are not medical diagnoses or professional medical advice, and AI-generated content can occasionally be incorrect or incomplete — always verify anything important (health, nutritional, financial, or professional) independently before relying on it.',
              },
            ],
          },
          {
            number: '09',
            title: 'Health, Fitness & Nutrition Disclaimer',
            accent: '#6366f1',
            content: [
              {
                subtitle: 'Informational only',
                text: 'Schedra includes BMI, body fat, calorie, and macro calculators, plus a workout planner and a food-comparison tool built on a locally stored food database. None of this makes Schedra a medical device or medical application — these tools, and any AI-generated health or fitness suggestions, are for general informational and productivity purposes only, not a substitute for professional medical, nutritional, or fitness advice.',
              },
              {
                subtitle: 'Always verify',
                text: 'Always consult a qualified healthcare professional before making medical, dietary, or exercise decisions. Nutritional values in our food database may occasionally be slightly inaccurate or out of date, so don\u2019t treat it as a substitute for verified labeling or professional guidance.',
              },
            ],
          },
          {
            number: '10',
            title: 'Files, Notes & Cloud Storage',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'Free vs. Pro/Premium',
                text: 'Free users\u2019 uploaded files and notes-PDFs stay on your device only — there\u2019s no cloud backup for them. Pro/Premium users can choose to sync specific files or notes-PDFs to cloud storage; only what you individually select gets uploaded, never everything automatically.',
              },
              {
                subtitle: 'Access after local deletion',
                text: 'Even if you delete a synced file from your device afterward, you can still access or download it from within Schedra. Because Schedra also relies on your device for local data, keep your device and app access secure.',
              },
            ],
          },
          {
            number: '11',
            title: 'Your API Access',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'Personal API key',
                text: 'Pro/Premium subscribers can generate a personal, Schedra-issued API key to read, create, update, or delete their own routines through supported automation tools. It\u2019s issued for Schedra\u2019s own backend — not a third-party key — and it\u2019s stored only on your device, never on our cloud servers.',
              },
              {
                subtitle: 'Your responsibility',
                text: 'Don\u2019t share your API key or device with anyone else — you\u2019re responsible for all activity performed with it.',
              },
            ],
          },
          {
            number: '12',
            title: 'Device Permissions',
            accent: '#6366f1',
            content: [
              {
                subtitle: 'What we ask for',
                text: 'Schedra only asks for the permissions it actually needs: Camera for AI food/calorie scanning; Notifications & Alarm for reminders; Photos/Media & Storage for importing or exporting files and images you choose to add; and Physical Activity, Background Activity & Location for habit-builder features like step counting, running, and cycling tracking. Internet access powers core connectivity.',
              },
              {
                subtitle: 'Managing permissions',
                text: 'You can manage any of these from your device settings, though turning some off may limit the related features.',
              },
            ],
          },
          {
            number: '13',
            title: 'Acceptable Use & AI Abuse Policy',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'What\u2019s not allowed',
                text: 'You agree not to misuse or abuse Schedra\u2019s AI services (including prompt injection or attempts to bypass safety features), scrape or reverse-engineer the app, website, or its backend, share or resell your personal API key or account access, exploit the referral or wallet system through fake accounts or self-referrals, or otherwise interfere with normal functioning of the app or website.',
              },
              {
                subtitle: 'Consequences',
                text: 'Violating any of this can lead to restricted access, forfeited wallet balance or rewards, or a suspended or terminated account.',
              },
            ],
          },
          {
            number: '14',
            title: 'Website Use & Contact Form',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'What this website is for',
                text: 'schedra.com is an informational and marketing website — no accounts are created, and no purchases are made here. All subscriptions and Pro Codes are handled exclusively through Google Play Billing within the app.',
              },
              {
                subtitle: 'Contact form',
                text: 'By submitting the Contact form, you agree we may use the name, phone number, email, and message you provide solely to respond to your inquiry. See our Privacy Policy for details on how that information is stored.',
              },
              {
                subtitle: 'External links',
                text: 'This website may link to third-party destinations such as the Google Play Store, Instagram, YouTube, or X. We\u2019re not responsible for the content or practices of those external sites, which are governed by their own terms.',
              },
            ],
          },
          {
            number: '15',
            title: 'Account Suspension, Termination & Deletion',
            accent: '#6366f1',
            content: [
              {
                subtitle: 'When we may act',
                text: 'We may suspend or terminate accounts that violate these Terms, misuse the referral/wallet or AI systems, or engage in fraudulent or unlawful activity, with or without prior notice.',
              },
              {
                subtitle: 'Deleting your own account',
                text: 'You can permanently delete your own account anytime from Settings \u2192 Account Deactivation. This is permanent: for Free users, account data is removed immediately; for Pro/Premium users, cloud-synced data (routines, plans, files) is kept for 7 days so you can recover or export it, then it\u2019s gone for good.',
              },
            ],
          },
          {
            number: '16',
            title: 'Liability, Warranty & Governing Law',
            accent: '#a855f7',
            content: [
              {
                subtitle: 'No warranties',
                text: 'Schedra is provided "as is" and "as available," without warranties of accuracy, reliability, or fitness for a particular purpose, and we don\u2019t guarantee uninterrupted or error-free operation.',
              },
              {
                subtitle: 'Limitation of liability',
                text: 'To the maximum extent the law allows, the developer isn\u2019t liable for indirect, incidental, or consequential damages, or for losses of data, revenue, or wallet balance arising from your use of the app or website, AI-generated content, third-party outages, or unauthorised access to your account or device.',
              },
              {
                subtitle: 'Governing law',
                text: 'These Terms are governed by the laws of India. Schedra is available worldwide — if you\u2019re using it from outside India, you\u2019re responsible for complying with your own local laws.',
              },
            ],
          },
          {
            number: '17',
            title: 'Changes to These Terms & Contact Us',
            accent: '#00f0ff',
            content: [
              {
                subtitle: 'Updates',
                text: 'We may update these Terms as Schedra evolves — the "Last Updated" date above reflects the latest revision, and continuing to use the app or website afterward means you accept the changes.',
              },
              {
                subtitle: 'Get in touch',
                text: 'Questions about subscriptions, refunds, or anything else in these Terms? Reach us at schedrasupport@gmail.com, through "Report a Problem" in Settings, or via this website.',
              },
            ],
          },
          {
            number: '18',
            title: 'Our Mission',
            accent: '#6366f1',
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
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-neon-purple">Terms & Conditions</Link>
          </div>
        </div>
      </footer>

    </div>
  );
};
