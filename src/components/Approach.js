"use client";

import React from "react";
import KeyPointCard from "./KeyPointCard";
import { motion } from "framer-motion";
import Image from "next/image";

const Approach = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
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
        duration: 0.4,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="bg-[#030438] py-12 md:py-16 px-4 md:px-6 pb-16 md:pb-24 relative select-none cursor-default"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto flex flex-col items-center text-left md:text-left relative">
        {/* Tagline Above Heading */}
        <motion.p 
          className="text-[#65E5F2] uppercase tracking-wide font-semibold mb-2 text-center md:text-left select-none cursor-default"
          variants={titleVariants}
        >
          Our Approach
        </motion.p>

        {/* Section Title */}
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-white pb-0 md:pb-8 text-center md:text-left select-none cursor-default"
          variants={titleVariants}
        >
          Creating a Digital Revolution, <span className="text-indigo-600">for </span><span className=" text-[#CB73FE]"> Long-Term </span><span className="text-blue-500">Success </span>
        </motion.h2>

        {/* Main Content - Flex Layout */}
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center relative">
          {/* Left Side - Feature Cards */}
          <div className="flex flex-col gap-4 w-full md:w-[60%] relative z-10 text-left md:ml-10 lg:xl-0">
            <KeyPointCard
              icon="/About_Us/1.svg"
              title="Our Goal"
              description="Our goal is to equip companies with innovative digital solutions that foster development, improve visibility, and establish close relationships. "
              index={0}
            />
            <KeyPointCard
              icon="/About_Us/2.svg"
              title="Our Vision"
              description="Redefine the digital landscape with creativity and innovation, helping brands thrive in an ever-evolving market."
              index={1}
            />
            <KeyPointCard
              icon="/About_Us/3.svg"
              title="Our Value"
              description="Trust, transparency, and long-term success are all values that we strive to cultivate through collaborative digital excellence."
              index={2}
            />
          </div>

          {/* Right Side - Image */}
          <motion.div 
            className="w-[80%] md:w-[60%] lg:w-[40%] mx-auto mt-8 md:mt-0 md:absolute md:left-[250px] lg:left-[550px] xl:left-[500px] overflow-hidden rounded-3xl group"
            variants={imageVariants}
          >
            <div className="relative">
              <Image 
                src="/About_Us/5.png"
                alt="Expert Web Developer"
                className="w-full transition-transform duration-700 group-hover:scale-110"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transform scale-0 
                            transition-all duration-700 origin-center rotate-45 group-hover:scale-[2]" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Approach;