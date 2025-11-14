import BookingForm from '@/components/BookingForm';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import Navigation from '@/components/Navigation';
import TestimonialsSection from '@/components/TestimonialsSection';
import TrustIndicators from '@/components/TrustIndicators';
import UseCasesSection from '@/components/UseCasesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <TrustIndicators />
      <div id="drivers">
        <UseCasesSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <div id="pricing">
        <BookingForm />
      </div>
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
