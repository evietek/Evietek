'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // To check if we're on homepage
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: '600',
  display: 'swap',
  variable: '--font-bricolage',
});

const services = [
  "Website",
  "Branding",
  "Social Media Marketing",
  "Logo Designing",
  "Illustrations",
];

const LoadingAnimation = ({ onComplete }) => {
  const pathname = usePathname();
  const [shouldPlayAnimation, setShouldPlayAnimation] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // initially false
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("hasPlayedHomepageAnimation");

    // ✅ Only play if we're on the homepage AND haven't played yet
    if (pathname === "/" && !hasPlayed) {
      setShouldPlayAnimation(true);
      setIsVisible(true);
      sessionStorage.setItem("hasPlayedHomepageAnimation", "true");
    } else {
      onComplete(); // Immediately skip animation
    }
  }, [pathname, onComplete]);

  useEffect(() => {
    if (!shouldPlayAnimation) return;

    // Dispatch loading state when animation begins
    window.dispatchEvent(new CustomEvent('loadingStateChange', {
      detail: { isLoading: true }
    }));

    const timer = setTimeout(() => {
      if (currentIndex < services.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setShowLogo(true);
        setTimeout(() => {
          setIsVisible(false);
          window.dispatchEvent(new CustomEvent('loadingStateChange', {
            detail: { isLoading: false }
          }));
          onComplete();
        }, 1500);
      }
    }, 350);

    return () => {
      clearTimeout(timer);
      window.dispatchEvent(new CustomEvent('loadingStateChange', {
        detail: { isLoading: false }
      }));
    };
  }, [shouldPlayAnimation, currentIndex, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={bricolage.className + " fixed inset-0 z-[999999] flex items-center justify-center bg-[#030438]"}
        >
          <AnimatePresence mode="wait">
            {!showLogo ? (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="text-center"
              >
                <h2 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white select-none cursor-default">
                  {services[currentIndex]}
                </h2>
              </motion.div>
            ) : (
              <motion.div
                key="logo"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-[200px] h-[60px] sm:w-[250px] sm:h-[70px] md:w-[300px] md:h-[80px]"
              >
                <Image
                  src="/logo.svg"
                  alt="EvieTek Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
