'use client';

import { useEffect, useState } from 'react';
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import Projects from "@/components/PortfolioProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import JoinUSSection from "@/components/JoinUsSection";
import TrustedClients from "@/components/TrustedClientsSection";
import LoadingAnimation from "@/components/LoadingAnimation";
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Preload content
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const preloadContent = async () => {
      return new Promise(resolve => setTimeout(resolve, 100));
    };

    preloadContent();

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.classList.remove('loading');
    };
  }, []);

  // Handle scrolling to services section
  useEffect(() => {
    const handleScroll = () => {
      const shouldScroll = sessionStorage.getItem('shouldScrollToServices');
      if (shouldScroll) {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          setTimeout(() => {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
            sessionStorage.removeItem('shouldScrollToServices');
          }, 100);
        }
      }
    };

    // Only attempt to scroll if content is shown and loading is complete
    if (showContent && !isLoading) {
      handleScroll();
    }
  }, [showContent, isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
      document.documentElement.classList.remove('loading');
      document.body.style.overflow = 'auto';
    }, 100);
  };

  return (
    <>
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      
      <AnimatePresence mode="wait">
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-0 select-none cursor-default"
          >
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <WorkProcessSection />
            <Projects />
            <TestimonialsSection />
            <JoinUSSection />
            <TrustedClients />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
