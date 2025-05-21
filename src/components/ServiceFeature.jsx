"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Feature = ({
  heading,
  description,
  features,
  bottomImage,
  bottomDescription,
  additionalFeatures
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src={feature.iconSrc}
                    alt={feature.title}
                    width={32}
                    height={32}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                  />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#030438]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Content */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <Image
              src={bottomImage.src}
              alt={bottomImage.alt}
              width={bottomImage.width || 400}
              height={bottomImage.height || 300}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-2xl shadow-md"
            />
          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
              {bottomDescription}
            </p>
            
            {/* Additional Features List */}
            <div className="space-y-3 sm:space-y-4">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16l4-4-4-4"></path>
                      <path d="M8 12h8"></path>
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature;