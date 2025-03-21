'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
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
  "Content Writing",
  "Logo Designing",
  "Video Editing",
  "Illustrations",
];

const LoadingAnimation = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Dispatch initial loading state
    window.dispatchEvent(new CustomEvent('loadingStateChange', { 
      detail: { isLoading: true } 
    }));

    const timer = setTimeout(() => {
      if (currentIndex < services.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        // Show logo after last service
        setShowLogo(true);
        // Wait for logo animation then trigger completion
        setTimeout(() => {
          setIsVisible(false);
          // Update loading state before completing
          window.dispatchEvent(new CustomEvent('loadingStateChange', { 
            detail: { isLoading: false } 
          }));
          onComplete();
        }, 1500); // Extended logo display time
      }
    }, 300); // Time each service is shown

    return () => {
      clearTimeout(timer);
      // Ensure loading state is reset on unmount
      window.dispatchEvent(new CustomEvent('loadingStateChange', { 
        detail: { isLoading: false } 
      }));
    };
  }, [currentIndex, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Slower fade out
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
<h2 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white">
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