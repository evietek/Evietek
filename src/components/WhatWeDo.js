"use client";

import React from 'react';
import Image from 'next/image';
import WhatWeDoContent from './WhatWeDoContent';
import { motion } from "framer-motion";

const WhatWeDo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const smallImageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="bg-[#F2F2F5] py-12 md:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          
          {/* Left Side - Image Section */}
          <motion.div 
            className="relative w-full lg:w-[50%] flex justify-center"
            variants={imageVariants}
          >
            {/* Image Container with Gradient Shadow */}
            <div className="relative w-[85%] md:w-[55%] lg:w-[80%] xl:w-[60%]">
              {/* Gradient Block Behind Image */}
              <div className="absolute -top-4 -left-4 w-full h-full lg:h-100 xl:h-90 2xl:h-full bg-gradient-to-b from-[#5A50FF] to-[#D376FF] rounded-[30px] z-0"></div>

              {/* Main Image */}
              <figure className="relative block rounded-[30px] overflow-hidden shadow-lg z-10 group">
                <div className="relative">
                  <Image
                    src="/About_Us/w1.jpg"
                    alt="Experts Working"
                    width={550}
                    height={450}
                    className="w-full h-auto object-cover rounded-[30px] transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transform scale-0 
                                transition-all duration-700 origin-center rotate-45 group-hover:scale-[2]" />
                </div>
              </figure>
            </div>

            {/* Experience Badge */}
            <motion.div 
              className="absolute top-[0px] md:top-[120px] right-[0%] md:right-[110px] lg:right-[0px] xl:right-[90px] h-[100px] w-[100px] md:h-[130px] md:w-[130px] bg-gradient-to-b from-purple-500 to-blue-500 text-white text-center p-[15px] rounded-full shadow-md flex flex-col items-center justify-center z-20"
              variants={badgeVariants}
            >
              <h2 className="text-2xl md:text-[30px] font-bold mb-1">5+</h2>
              <p className="text-xs uppercase leading-[1.2em]">Years Of Experience</p>
            </motion.div>

            {/* Small Overlapping Image */}
            <motion.div 
              className="absolute right-[15%] lg:right-[10px] xl:right-[90px] bottom-[-40px] lg:bottom-[60px] xl:bottom-[-50px] max-w-[200px] z-10 shadow-lg rounded-xl overflow-hidden group"
              variants={smallImageVariants}
            >
              <figure className="block rounded-[20px] relative">
                <div className="relative">
                  <Image
                    src="/About_Us/w2.webp"
                    alt="Cybersecurity Team"
                    width={200}
                    height={150}
                    className="w-full object-cover aspect-[1/0.68] rounded-[20px] transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transform scale-0 
                                transition-all duration-700 origin-center rotate-45 group-hover:scale-[2]" />
                </div>
              </figure>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-[50%]">
            <WhatWeDoContent />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhatWeDo;