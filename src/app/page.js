'use client';

import { useEffect, useState, useCallback } from 'react';
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import Projects from "@/components/PortfolioProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import TrustedClients from "@/components/TrustedClientsSection";
import FAQSection from "@/components/FAQSection";
import LoadingAnimation from "@/components/LoadingAnimation";
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Optimized preload content with proper cleanup
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

  // Optimized scroll handler with useCallback
  const handleScroll = useCallback(() => {
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
  }, []);

  // Optimized scroll effect
  useEffect(() => {
    if (showContent && !isLoading) {
      handleScroll();
    }
  }, [showContent, isLoading, handleScroll]);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
      document.documentElement.classList.remove('loading');
      document.body.style.overflow = 'auto';
    }, 100);
  }, []);

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
            layout="position" // Optimizes layout animations
          >
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <WorkProcessSection />
            <Projects />
            <TestimonialsSection />
            <TechnologiesSection />
            <TrustedClients />
            <FAQSection />
          </motion.div>
          
        )}
      </AnimatePresence>
      <a
  href="https://wa.me/your_number_here" // e.g. https://wa.me/923001234567
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path d="M20.52 3.48A11.93 11.93 0 0012.07.02C5.92.03.99 4.95 1 11.09a11.08 11.08 0 001.53 5.59L.02 23.98l7.59-2.45a11.08 11.08 0 005.48 1.47c6.13 0 11.1-4.98 11.1-11.12a11.93 11.93 0 00-3.67-8.4zm-8.43 17.9a9.45 9.45 0 01-4.82-1.3l-.34-.2-4.51 1.45 1.49-4.39-.22-.36a9.36 9.36 0 01-1.48-5.04c.01-5.21 4.25-9.45 9.47-9.45 2.53 0 4.9 1 6.68 2.78a9.43 9.43 0 012.8 6.66c0 5.23-4.26 9.45-9.49 9.45zm5.22-7.14c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.66.14-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.08-.29-.14-1.21-.45-2.3-1.43-.85-.76-1.42-1.7-1.59-1.98-.17-.29-.02-.45.13-.6.14-.14.29-.34.43-.5.14-.17.2-.29.29-.48.1-.2.05-.37-.02-.51-.08-.14-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.51l-.56-.01c-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.45s1.02 2.84 1.17 3.04c.14.2 2 3.07 4.83 4.3.68.29 1.21.46 1.62.59.68.21 1.3.18 1.78.11.54-.08 1.72-.7 1.97-1.37.24-.68.24-1.27.17-1.38-.08-.11-.26-.17-.55-.3z" />
  </svg>
</a>
<script src="https://code.tidio.co/er4w7kxbcosyqsnnpirnivfwqorvbjfe.js" async></script>

    </>
  );
}
