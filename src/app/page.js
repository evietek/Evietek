import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import Projects from "@/components/PortfolioProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import JoinUSSection from "@/components/JoinUsSection";
import TrustedClients from "@/components/TrustedClientsSection";

export const metadata = {
  title: 'Evietek - Your Digital Innovation Partner',
};

export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <WorkProcessSection />
    <Projects />
    <TestimonialsSection />
    <JoinUSSection />
    <TrustedClients />
    </>
  );
}
