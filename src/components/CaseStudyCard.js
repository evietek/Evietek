'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CaseStudyCard = ({
  tag,
  tagColor = 'bg-green-100 text-green-800',
  heading,
  headingColor = 'text-gray-800',
  content,
  contentColor = 'text-gray-600',
  bgColor = 'bg-white',
  image,
  imagePosition = 'right',
  buttonText = 'READ MORE',
  buttonColor = 'text-green-600',
  buttonLink,
}) => {
  return (
    <div className="relative w-full max-w-7xl mx-auto my-8">
      <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center overflow-hidden`}>
        {/* Content section */}
        <motion.div 
          initial={{ opacity: 0, x: imagePosition === 'left' ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`${bgColor} p-4 md:p-6 z-10 md:w-1/2 rounded-lg shadow-md`}
        >
          {/* Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${tagColor}`}
          >
            {tag.toUpperCase()}
          </motion.div>
          
          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className={`text-2xl md:text-3xl font-bold mb-4 ${headingColor}`}
          >
            {heading}
          </motion.h2>
          
          {/* Content */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className={`mb-6 ${contentColor}`}
          >
            {content}
          </motion.p>
          
          {/* Button */}
          <motion.a 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileHover={{ x: 5 }}
            href={buttonLink} 
            className={`flex items-center font-semibold ${buttonColor} hover:underline transition-all cursor-pointer`}
          >
            {buttonText}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
        
        {/* Image section */}
        <motion.div 
          initial={{ opacity: 0, x: imagePosition === 'left' ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`md:w-1/2 h-64 md:h-96 ${imagePosition === 'left' ? 'md:-mr-12' : 'md:-ml-12'} relative`}
        >
          <motion.img 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            src={image} 
            alt={heading} 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudyCard;