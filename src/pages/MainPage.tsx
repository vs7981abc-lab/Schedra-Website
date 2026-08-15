import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { AppShowcase } from '../components/AppShowcase';
import { ProductPreview } from '../components/ProductPreview';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { WaveBackground } from '../components/WaveBackground';

export const MainPage = () => (
  <div className="relative min-h-screen bg-[#03030c] overflow-x-hidden">
    <WaveBackground />
    <Navbar />
    <Hero />
    <Stats />
    <Features />
    <HowItWorks />
    <AppShowcase />
    <ProductPreview />
    <Testimonials />
    <Contact />
    <CTA />
    <Footer />
  </div>
);