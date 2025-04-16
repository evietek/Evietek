"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Carousel from "./Carousel"; // Carousel component
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Image from "next/image";
import BlinkingEye from "./BlinkingEye"; // Import the blinking eye component

export default function PortfolioSection() {
  const carouselRef = useRef(null);

  // Function to trigger next slide
  const nextSlide = () => {
    if (carouselRef.current) {
      // carouselRef.current.next();
      carouselRef.current?.next();
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      // carouselRef.current.prev();
      carouselRef.current?.prev();
    }
  };

  // Animation Variants
  const subheadingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.5, ease: "easeOut", delay: 0.2 } 
    }
  };

  const buttonsVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.5, ease: "easeOut", delay: 0.4 } 
    }
  };

  const floatAnimation = {
    y: [-10, 10, -10], // Moves up and down
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative bg-[#FFFFFF] text-[#3E2472] py-6 md:py-10 lg:pt-10 px-2 sm:px-4 md:px-8 lg:px-12 pb-15 md:pb-20 lg:pb-20 overflow-hidden">

      <BlinkingEye />

      
      {/* Floating Basketball */}
      <motion.div 
        className="absolute bottom-10 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 z-10"
        animate={floatAnimation}
      >
        <Image src="/Portfolio/basketball.svg" alt="Basketball" width={80} height={80} />
      </motion.div>

      <div className="absolute inset-x-0 bottom-12 md:bottom-15 lg:bottom-[-30] flex justify-end">
        <Image 
          src="/Portfolio/Abstract.svg" 
          alt="Abstract" 
          width={160} 
          height={160} 
          className="w-24 h-24 sm:w-30 sm:h-30 lg:w-40 lg:h-40 translate-y-1/2 lg:translate-y-0"
        />
      </div>

      {/* Centered Container for Text and Arrows */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading and Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full mb-8">
          
          {/* Left side: Portfolio Heading (Animated Drop from Top) */}
          <div className="flex flex-col items-start text-left">
      <div 
        className="flex items-center justify-center rounded-[12px] lg:mt-5 py-[5px] px-[15px] bg-[#5E51FE] rotate-[-5.5deg]"
      >
        <span 
          className="font-['Bricolage_Grotesque'] font-extrabold text-white 
                    text-xl sm:text-xl md:text-2xl lg:text-3xl text-center"
        >
          Portfolio
        </span>
      </div>
    
            
            {/* Content Heading (Slides from Bottom) */}
            <motion.h2 
              className="mt-2 md:mt-3 text-3xl md:text-5xl font-bricolage font-bold leading-tight select-none cursor-default"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={subheadingVariants}
            >
              We Are Mostly <br className="hidden md:block" /> Dribbling Around
            </motion.h2>
            </div>
          {/* Right side: Navigation Buttons (Slide from Right) */}
          <motion.div 
            className="flex items-center space-x-4 mt-4 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={buttonsVariants}
          >
<button 
  onClick={prevSlide} 
  className="bg-[#5E51FE] p-2 py-4 rounded-lg shadow-md hover:bg-[#E0D7FF] hover:shadow-[0_10px_30px_#CCC8EE] transition duration-300 flex items-center justify-center"
  aria-label="Previous slide"
  type="button"
>
  <FaChevronLeft className="text-white text-xl" />
</button>

<button 
  onClick={nextSlide} 
  className="bg-[#5E51FE] p-2 py-4 rounded-lg shadow-md hover:bg-[#E0D7FF] hover:shadow-[0_10px_30px_#CCC8EE] transition duration-300 flex items-center justify-center"
  aria-label="Next slide"
  type="button"
>
  <FaChevronRight className="text-white text-xl" />
</button>


          </motion.div>
        </div>
      </div>

      {/* Carousel Component */}
      <div className="mt-8 ml-0 md:mt-12 md:ml-0 lg:ml-10">
        <Carousel ref={carouselRef} />
      </div>
    </section>
  );
}
