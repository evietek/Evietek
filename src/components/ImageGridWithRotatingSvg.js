"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ImageGridWithRotatingSvg = () => {
  // Animation variants for images
  const imageVariants = {
    initial: (index) => ({
      opacity: 0,
      scale: 0.8,
      y: 50
    }),
    animate: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2
      }
    })
  };

  // Animation variants for the rotating circle
  const circleVariants = {
    initial: {
      scale: 0.8,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto p-4 md:gap-4 gap-2">
      {/* Mobile: First image, Desktop: Left image */}
      <motion.div 
        className="relative w-[80%] md:w-1/3 h-[250px] md:h-90 overflow-hidden rounded-lg group"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={imageVariants}
        custom={0}
      >
        <Image
          src="/About_Us/1.jpg"
          alt="Person working at night in office"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transform scale-0 
                      transition-all duration-700 origin-center rotate-45 group-hover:scale-[2]" />
      </motion.div>
      
      {/* Center rotating SVG */}
      <Link href="/book-a-meeting">
        <motion.div 
          className="absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          initial="initial"
          whileInView="animate"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
          variants={circleVariants}
        >
          <div className="relative w-[150px] h-[150px] md:w-50 md:h-50 rounded-full flex items-center justify-center animate-spin-slow">
            <Image 
              src="/About_Us/circle.svg"
              alt="Cybersecurity badge" 
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </Link>
      
      {/* Mobile: Second image, Desktop: Right column with two stacked images */}
      <div className="w-[80%] md:w-1/3 flex flex-col md:gap-4 gap-2">
        <motion.div 
          className="relative w-full h-[250px] md:h-54 overflow-hidden rounded-lg group"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
          custom={1}
        >
          <Image
            src="/About_Us/2.jpg"
            alt="Woman working on computer"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transform scale-0 
                        transition-all duration-700 origin-center rotate-45 group-hover:scale-[2]" />
        </motion.div>
        {/* Only show on desktop */}
        <motion.div 
          className="relative w-full hidden md:block h-60 overflow-hidden rounded-lg group"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
          custom={2}
        >
          <Image
            src="/About_Us/3.jpg"
            alt="Security interface on laptop"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transform scale-0 
                        transition-all duration-700 origin-center rotate-45 group-hover:scale-[2]" />
        </motion.div>
      </div>
    </div>
  );
};

// Add this to your tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'spin-slow': 'spin 15s linear infinite',
//       }
//     }
//   }
// }

export default ImageGridWithRotatingSvg;