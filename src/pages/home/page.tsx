import Navbar from '@/components/feature/Navbar';
import HeroSection from './components/HeroSection';
import TreatmentsSection from './components/TreatmentsSection';
import ResultsSection from './components/ResultsSection';
import PricingSection from './components/PricingSection';
import HowItWorksSection from './components/HowItWorksSection';
import AboutStudioSection from './components/AboutStudioSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-cream">
      <Navbar />
      <HeroSection />
      <TreatmentsSection />
      <ResultsSection />
      <PricingSection />
      <HowItWorksSection />
      <AboutStudioSection />
      <TestimonialsSection />
      <BookingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}