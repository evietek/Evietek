"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyChoose = ({ 
  heading,
  description,
  features,
  bottomDescription 
}) => {
  return (
    <section className="bg-[#F2F2F5] py-8 sm:py-12 md:py-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#030438] mb-4"
        >
          {heading}
        </motion.h2>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-12"
        >
          {description}
        </motion.p>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 sm:gap-4 bg-[#030438] rounded-lg xl:rounded-full px-4 sm:px-6 py-3 sm:py-4"
            >
              <div className="bg-gradient-to-b from-[#D376FF] to-[#5A50FF] rounded-lg xl:rounded-full p-2">
                <Image
                  src={feature.iconSrc}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 invert brightness-0 contrast-100"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#FEF4F1]">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-sm sm:text-base text-white/80 mt-1">
                    {feature.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl"
        >
          {bottomDescription}
        </motion.p>
      </div>
    </section>
  );
};

export default WhyChoose;