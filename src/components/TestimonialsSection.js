"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reviews from "./Reviews";

export default function TestimonialsSection() {
  // Animation Variants
  const headingVariants = {
    hidden: { opacity: 0, y: -50 }, // Drop from top
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const subHeadingVariants = {
    hidden: { opacity: 0, y: 50 }, // Slide from bottom
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } 
    }
  };

  const magnetVariants = {
    hidden: { opacity: 0, x: -100 }, // Slide from left
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } 
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, x: 100 }, // Slide from right
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } 
    }
  };

  const floatingAnimation = {
    y: [-5, 5, -5], // Floating effect
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative bg-[#F9F9F9] text-[#333] py-3 md:py-8 lg:pt-8 px-4 md:px-8 lg:px-12 pb-0">
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center">
        {/* Testimonials Heading (Drops from Top) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <Image 
            src="/Testimonials/Testimonials.svg"
            alt="Testimonials"
            width={140}
            height={50}
            className="w-[110px] h-[55px] sm:w-[130px] sm:h-[65px] md:w-[150px] md:h-[75px] lg:w-[170px] lg:h-[85px]"
          />
        </motion.div>
        
        {/* Content Heading (Slides from Bottom) */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-[45px] lg:text-[50px] xl:text-[50px] 2xl:text-[55px] leading-[107%] font-bricolage font-bold text-[#341E61] mt-1 md:mt-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={subHeadingVariants}
        >
          What Are Customers <br className="hidden md:block" /> Saying About Us?
        </motion.h2>
      </div>    

      {/* Placeholder for Testimonials */}
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto mt-10 p-8 bg-[#white] shadow-lg rounded-lg min-h-[250px]">
        <Reviews /> 
      </div>

      {/* Icon (Slides from Right + Floating) */}
      <motion.div
        className="absolute top-35 right-2 md:right-15 lg:right-35 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={iconVariants}
        animate={floatingAnimation} // Floating Effect
      >
        <Image src="/Testimonials/Icon.svg" alt="Icon" width={80} height={80} />
      </motion.div>

      {/* Magnet (Slides from Left + Rotates on Hover) */}
      <motion.div
        className="absolute top-10 left-3 md:top-40 lg:left-35 md:left-15 w-12 h-12 sm:w-16 sm:h-16 lg:w-30 lg:h-30 xl:w-40 xl:h-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={magnetVariants}
        whileHover={{ rotate: -90 }} // Rotates on Hover
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image src="/Testimonials/Magnet.svg" alt="Magnet" width={160} height={160} />
      </motion.div>
    </section>
  );
}
