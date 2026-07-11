import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import BenefitsSection from '../components/BenefitsSection';
import InfoSection from '../components/InfoSection';
import ValuesMarquee from '../components/ValuesMarquee';
import UseCasesSection from '../components/UseCasesSection';
import ComplianceSection from '../components/ComplianceSection';
import CTASection from '../components/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <InfoSection />
      <ValuesMarquee />
      <UseCasesSection />
      <ComplianceSection />
      <CTASection />
    </>
  );
}
