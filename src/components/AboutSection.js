"use client";

import AboutHeading from "./AboutHeading";
import AboutContent from "./AboutContent";
import AboutGrid from "./AboutGrid";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  // Left Decorative Animation
  const decorationVariants = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 0.7,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Divider Animation (Appearing from Top)
  const decorationVariants2 = {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about-section" className="relative bg-[#F9F9F9] text-[#333] py-6 md:py-12 lg:pt-16 px-4 md:px-8 lg:px-12 pb-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10 relative z-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <AboutHeading />
          <AboutContent />
        </div>

        {/* Right Grid */}
        <div className="md:w-1/2">
          <AboutGrid />
        </div>
      </div>

      {/* Decorative Sticker (Left Corner) */}
      <motion.div
        className="absolute bottom-60 left-1 z-0"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={decorationVariants}
      >
        <Image 
          src="/About/Sticker3.svg" 
          alt="Abstract Sticker" 
          width={50} 
          height={50} 
          className="opacity-60 sm:w-[80px] sm:h-[80px] sm:opacity-70 md:w-[100px] md:h-[100px] md:opacity-0 lg:w-[160px] lg:h-[160px] lg:opacity-100"
        />
      </motion.div>

      {/* Divider (Centered Below Everything) */}
      <motion.div
        className="relative inset-x-0 mt-[5px] sm:mt-4 md:mt-[10px] lg:mt-[60px] z-[10] flex justify-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={decorationVariants2}
      >
        <Image 
          src="/divider.svg" 
          alt="Divider" 
          width={800} 
          height={30} 
          className="opacity-100 sm:w-[1000px] sm:h-[30px] md:w-[1200px] md:h-[30px]"
        />
      </motion.div>
    </section>
  );
}
