"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function BlinkingEye() {
  // Eye states (three variations)
  const eyeImages = [
    "/Portfolio/Eye-Close.svg", // Fully closed
    "/Portfolio/Eye-Half.svg",   // Half open
    "/Portfolio/Eye-Open.svg",   // Fully open
    "/Portfolio/Eye-Half.svg",   // Half open again (before closing)
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const eyeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when visibility changes
        setIsInView(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0.1, // trigger when at least 10% of the element is visible
      }
    );

    // Start observing the element
    if (eyeRef.current) {
      observer.observe(eyeRef.current);
    }

    // Cleanup function
    return () => {
      if (eyeRef.current) {
        observer.unobserve(eyeRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Only run the animation if the component is in view
    let blinkInterval;
    
    if (isInView) {
      blinkInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % eyeImages.length);
      }, 500); // Change every 500ms for a natural blink
    }

    return () => {
      if (blinkInterval) {
        clearInterval(blinkInterval);
      }
    };
  }, [isInView]);

  return (
    <div 
      ref={eyeRef}
      className="absolute top-40 right-20 md:top-20 md:right-50 lg:top-20 lg:right-100 xl:right-150 w-20 h-20 sm:w-30 sm:h-30 lg:w-40 lg:h-40"
    >
      <Image src={eyeImages[currentIndex]} alt="Blinking Eye" width={200} height={200} />
    </div>
  );
}