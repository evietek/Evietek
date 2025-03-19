"use client";

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

// Service Feature Item Component
const ServiceFeatureItem = ({ icon, text, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="flex items-center gap-3 mb-2"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-6 h-6 text-blue-500">
        {icon}
      </div>
      <span className="text-gray-700 text-sm md:text-base">{text}</span>
    </motion.div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    backgroundColor: "#030438",
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="flex items-center gap-4 bg-[#030438] rounded-full px-4 py-3 w-full sm:w-auto"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="bg-gradient-to-b from-[#D376FF] to-[#5A50FF] rounded-full p-2">
        <Image 
          src={icon}
          alt={title}
          width={24}
          height={24}
        />
      </div>
      <div>
        <h3 className="font-bold text-white text-sm md:text-base">{title}</h3>
      </div>
    </motion.div>
  );
};

// Right Section Content Component
const Work = () => {
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

  return (
    <motion.div 
      className="w-full pl-4 md:pl-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header with "WHAT WE DO" text */}
      <motion.div 
        className="flex items-center gap-2 mb-4 pt-8 md:pt-0"
        variants={titleVariants}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#51328F]">
          <path strokeWidth="2" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline strokeWidth="2" points="3.29 7 12 12 20.71 7"/>
          <line strokeWidth="2" x1="12" y1="22" x2="12" y2="12"/>
        </svg>
        <span className="text-sm font-medium tracking-wider text-[#51328F] uppercase">WHAT WE DO</span>
      </motion.div>
      
      {/* Main Heading */}
      <motion.h1 
        className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4"
        variants={titleVariants}
      >
        Empowering Innovation, <br />
        <span className="text-indigo-600"> Elevating </span> 
        <span className="text-blue-500"> Digital</span>
        <span className="text-cyan-500"> Presence</span>
      </motion.h1>
      
      {/* Subheading */}
      <motion.p 
        className="text-gray-600 mb-6 text-base md:text-lg"
        variants={titleVariants}
      >
        We offer cutting-edge digital solutions to boost your brand's visibility, drive growth, and foster meaningful connections. 
      </motion.p>
     
      {/* Service Features List */}
      <div className="space-y-3">
        <ServiceFeatureItem 
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#51328F]">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          }
          text="Strategic Digital Transformation and Brand Positioning"
          index={0}
        />
        <ServiceFeatureItem 
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#51328F]">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          }
          text="Advanced Web and App Development Solutions"
          index={1}
        />
        <ServiceFeatureItem 
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#51328F]">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <path d="M3.29 7L12 12l8.71-5"/>
              <path d="M12 22V12"/>
              <path d="M12 12L3 7"/>
              <path d="M17 13.5V7.5"/>
            </svg>
          }
          text="Data-Driven Marketing and Analytics"
          index={2}
        />
      </div>

      {/* Feature Cards */}
      <div className="flex flex-wrap gap-4 mb-8 mt-4">
        <FeatureCard 
          icon="/About_Us/6.svg"
          title="Innovative Solutions"
          index={0}
        />
        <FeatureCard 
          icon="/About_Us/7.svg"
          title="Seamless User Experience"
          index={1}
        />
      </div>
    </motion.div>
  );
};

export default Work;
