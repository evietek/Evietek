'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
  const [isVisible, setIsVisible] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("hasPlayedHomepageAnimation");

    if (pathname === "/" && !hasPlayed) {
      setShouldPlayAnimation(true);
      setIsVisible(true);
      sessionStorage.setItem("hasPlayedHomepageAnimation", "true");
    } else {
      onComplete(); // Skip animation
    }
  }, [pathname, onComplete]);

  useEffect(() => {
    if (!shouldPlayAnimation) return;

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
    }, 400);

    return () => {
      clearTimeout(timer);
      window.dispatchEvent(new CustomEvent('loadingStateChange', {
        detail: { isLoading: false }
      }));
    };
  }, [shouldPlayAnimation, currentIndex, onComplete]);

  if (!isVisible) return null;

  return (
    <div className={bricolage.className + " fixed inset-0 z-[999999] flex items-center justify-center bg-[#030438]"}>
      {!showLogo ? (
        <div className="text-center">
          <h2 className="text-4xl sm:text-4xl md:text-7xl lg:text-8xl xl:text-9xl text-white select-none cursor-default">
            {services[currentIndex]}
          </h2>
        </div>
      ) : (
        <div className="relative w-[200px] h-[60px] sm:w-[250px] sm:h-[70px] md:w-[300px] md:h-[80px]">
          <Image
            src="/logo.svg"
            alt="EvieTek Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      )}
    </div>
  );
};

export default LoadingAnimation;
