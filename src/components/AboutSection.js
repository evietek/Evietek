"use client";

import AboutContent from "./AboutContent";
import AboutGrid from "./AboutGrid";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Optimized animation variants with GPU acceleration
  const decorationVariants = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 0.7,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        willChange: "transform, opacity"
      }
    }
  };

  const decorationVariants2 = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        willChange: "transform, opacity"
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about-section"
      className="relative bg-[#F9F9F9] text-[#333] py-6 md:py-12 lg:pt-16 px-4 md:px-8 lg:px-12 pb-0 transform-gpu"
      style={{
        opacity: isInView ? 1 : 0,
        transform: `translateY(${isInView ? 0 : 20}px)`,
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out"
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10 relative z-10">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          
          <div className="relative flex items-center">
      {/* About Text  */}
      <div className="relative z-10 -mt-6 -mr-2">
        <div 
          className="flex items-center justify-center"
          style={{
            backgroundColor: "#CB73FE",
            borderRadius: "12px",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "15px",
            paddingRight: "15px",
            width: "Hug (130px)",
            height: "Hug (52px)",
            top: "8.15px",
            transform: "rotate(-3.5deg)"
          }}
        >
          <span 
            className="font-['Bricolage_Grotesque'] font-extrabold text-white text-xl sm:text-xl md:text-2xl lg:text-3xl"
          >
            About
          </span>
        </div>
      </div>

      {/* Us Text */}
      <div className="relative ml-0 -mt-0 z-0">
        <div 
          className="flex items-center justify-center"
          style={{
            backgroundColor: "#5E51FE",
            borderRadius: "12px",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "15px",
            paddingRight: "15px",
            width: "Hug (73px)",
            height: "Hug (52px)",
            top: "20px",
            left: "115.40px",
            transform: "rotate(5.20deg)"
          }}
        >
          <span 
            className="font-['Bricolage_Grotesque'] font-extrabold text-white text-xl sm:text-xl md:text-2xl lg:text-3xl"
          >
            Us
          </span>
        </div>
      </div>
    </div>
          <AboutContent />
        </motion.div>

        {/* Right Grid */}
        <div className="md:w-1/2">
  <AboutGrid />
</div>

      </div>

      {/* Decorative Sticker (Left Corner) */}
      <motion.div
        className="absolute bottom-60 left-1 z-0 transform-gpu"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={decorationVariants}
      >
        <Image
          src="/About/Sticker3.svg"
          alt="Abstract Sticker"
          width={50}
          height={50}
          className="opacity-60 sm:w-[80px] sm:h-[80px] sm:opacity-70 md:w-[100px] md:h-[100px] md:opacity-0 lg:w-[80px] xl:h-[80px] xl:w-[160px] lg:h-[160px] lg:opacity-100"
          priority
          sizes="(max-width: 640px) 50px, (max-width: 768px) 80px, (max-width: 1024px) 100px, 160px"
        />
      </motion.div>

      {/* Divider (Centered Below Everything) */}
      <motion.div
        className="relative inset-x-0 mt-[5px] sm:mt-4 md:mt-[10px] lg:mt-[60px] z-[10] flex justify-center transform-gpu"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={decorationVariants2}
      >
        <Image
          src="/divider.svg"
          alt="Divider"
          width={800}
          height={30}
          className="opacity-100 sm:w-[1000px] sm:h-[30px] md:w-[1200px] md:h-[30px]"
          priority
          sizes="(max-width: 640px) 800px, (max-width: 768px) 1000px, 1200px"
        />
      </motion.div>
    </section>
  );
}
