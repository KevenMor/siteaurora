import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import InfoSection from './components/InfoSection';
import ValuesMarquee from './components/ValuesMarquee';
import UseCasesSection from './components/UseCasesSection';
import ComplianceSection from './components/ComplianceSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col bg-[#F5F5F5]">
      <div className="h-screen flex flex-col overflow-hidden relative">
        <Navbar />
        <HeroSection />
      </div>
      <StatsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <InfoSection />
      <ValuesMarquee />
      <UseCasesSection />
      <ComplianceSection />
      <CTASection />
      <Footer />
    </div>
  );
}
