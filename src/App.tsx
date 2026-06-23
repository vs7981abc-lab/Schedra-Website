import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { AppShowcase } from './components/AppShowcase';
import { ProductPreview } from './components/ProductPreview';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

// ── Main landing page (everything that was already in App) ────────────────────
const MainPage = () => (
  <div className="bg-[#03030c] min-h-screen text-slate-100 selection:bg-neon-cyan/30 selection:text-white overflow-x-hidden font-sans">
    {/* Premium background grid overlay */}
    <div className="fixed inset-0 grid-bg pointer-events-none opacity-[0.4] z-0" />

    {/* Sticky Blur Navbar */}
    <Navbar />

    {/* Main Sections Content */}
    <main className="relative z-10 flex flex-col items-center w-full">
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <AppShowcase />
      <ProductPreview />
      <Testimonials />
      <Contact />
      <CTA />
    </main>

    {/* Corporate Premium Footer */}
    <Footer />
  </div>
);
// ──────────────────────────────────────────────────────────────────────────────

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                 element={<MainPage />} />
        <Route path="/privacy-policy"   element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;