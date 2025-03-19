"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eyeImages.length); // Loop through the sequence
    }, 500); // Change every 300ms for a natural blink

    return () => clearInterval(blinkInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="absolute top-40 right-20 md:top-20 md:right-50 lg:top-20 lg:right-100 w-20 h-20 sm:w-30 sm:h-30 lg:w-40 lg:h-40">
      <Image src={eyeImages[currentIndex]} alt="Blinking Eye" width={200} height={200} />
    </div>
  );
}
