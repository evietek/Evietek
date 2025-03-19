"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const HowItWork = () => {
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

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3 + (index * 0.1),
        ease: "easeOut"
      }
    })
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  const phoneVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-12 md:py-16 bg-[#030438]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-24 lg:px-0 xl:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-1/2 pl-4 md:pl-16"
            variants={containerVariants}
          >
            {/* Section Label */}
            <motion.div 
              className="flex items-center gap-2 mb-4"
              variants={titleVariants}
            >
              <div className="text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#65E5F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <p className="text-[#65E5F2] font-medium tracking-wide uppercase text-sm md:text-base">HOW IT WORK</p>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white-900"
              variants={titleVariants}
            >
              Streamlined Process,<br />
              <span className="text-[#CB73FE]">Crafting</span>  <span className="text-indigo-400">Digital</span> <span className="text-blue-400">Transformation </span><span className="text-cyan-400"> Excellence.</span>
            </motion.h2>
            
            {/* Process Steps */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-10 md:left-[32px] lg:left-[30px] lg:top-[60px] w-0.5 h-[240px] border-l-4 border-dotted border-[#CB73FE]"></div>
              
              {/* Step 1 */}
              <motion.div 
                className="flex mb-8 md:mb-10 relative"
                variants={stepVariants}
                custom={0}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 md:w-15 md:h-15 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] rounded-full text-white font-bold text-lg md:text-xl">
                    01
                  </div>
                </div>
                <div className="ml-4 md:ml-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-[#CB73FE]">Assessment & Strategy</h3>
                  <p className="text-white-600 text-sm md:text-base">
                    We begin by understanding your business goals and identifying growth opportunities through in-depth analysis and strategic planning. 
                  </p>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                className="flex mb-8 md:mb-10 relative"
                variants={stepVariants}
                custom={1}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 md:w-15 md:h-15 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] rounded-full text-white font-bold text-lg md:text-xl">
                    02
                  </div>
                </div>
                <div className="ml-4 md:ml-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-[#CB73FE]">Implementation</h3>
                  <p className="text-white-600 text-sm md:text-base">
                    Our expert team executes innovative digital solutions, leveraging technology to enhance visibility and drive results.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                className="flex relative"
                variants={stepVariants}
                custom={2}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 md:w-15 md:h-15 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] rounded-full text-white font-bold text-lg md:text-xl">
                    03
                  </div>
                </div>
                <div className="ml-4 md:ml-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-[#CB73FE]">Ongoing Support & Optimization</h3>
                  <p className="text-white-600 text-sm md:text-base">
                    We continuously monitor performance, provide maintenance, and refine strategies to ensure sustained success. 
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Images */}
          <motion.div 
            className="w-full lg:w-1/3 relative mt-8 lg:mt-0"
            variants={containerVariants}
          >
            {/* Main Background Image */}
            <motion.div 
              className="relative rounded-2xl lg:left-40 overflow-hidden group"
              variants={imageVariants}
            >
              <div className="relative">
                <Image
                  src="/About_Us/h1.webp"
                  alt="Security team working"
                  width={200}
                  height={300}
                  className="w-full object-cover h-[400px] md:h-[400px] lg:h-[500px] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transform scale-0 
                              transition-all duration-700 origin-center rotate-45 group-hover:scale-[2]" />
              </div>
            </motion.div>
            
            {/* Floating Phone Frame */}
            <motion.div 
              className="absolute left-45 md:left-75 lg:left-16 top-70 md:top-75 lg:top-1/2 -translate-y-1/2 w-48 md:w-64 bg-[#030438] p-2 rounded-3xl shadow-xl overflow-hidden group"
              variants={phoneVariants}
            >
              <div className="rounded-2xl overflow-hidden relative">
                <Image
                  src="/About_Us/h2.jpg"
                  alt="Security expert"
                  width={300}
                  height={100}
                  className="md:w-60 lg:w-full object-cover h-48 md:h-40 lg:h-60 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transform scale-0 
                              transition-all duration-700 origin-center rotate-45 group-hover:scale-[2]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWork;