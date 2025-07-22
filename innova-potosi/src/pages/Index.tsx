import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import FormSection from "@/components/FormSection";
import VirtualTourSection from "@/components/VirtualTourSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <FormSection />
      <VirtualTourSection />
      <FooterSection />
    </div>
  );
};

export default Index;
