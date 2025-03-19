"use client";

import React from 'react';
import AboutBanner from './AboutBanner';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
};

// Service Feature Item Component
const ServiceFeatureItem = ({ icon, text, index }) => {
  return (
    <motion.div 
      className="flex items-center gap-3 mb-4"
      variants={itemVariants}
      custom={index}
    >
      <div className="text-[#51328F]">
        {icon}
      </div>
      <span className="text-gray-700">{text}</span>
    </motion.div>
  );
};

// Right Section Content Component
const AboutPageContent = () => {
  return (
    <motion.div 
      className="w-full px-4 md:px-0 md:pr-[50px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header with logo and ABOUT US text */}
      <motion.div 
        className="flex items-center gap-2 mb-4"
        variants={itemVariants}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#51328F]">
          <path strokeWidth="2" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4" strokeWidth="2"/>
          <path strokeWidth="2" d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path strokeWidth="2" d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
        <span className="text-sm font-medium tracking-wider text-[#51328F]">ABOUT US</span>
      </motion.div>
      
      {/* Main heading with gradient text */}
      <motion.h1 
        className="text-3xl md:text-4xl font-bold text-[#030438] mb-2"
        variants={itemVariants}
      >
        Your Trusted Partner In  
        <span className="block">
          <span className="text-indigo-500"> Innovative </span>
          <span className="text-blue-400">Digital </span>
          <span className="text-cyan-400">Solutions </span>
        </span>
      </motion.h1>
      
      {/* Subheading text */}
      <motion.p 
        className="text-gray-600 mb-8 text-sm md:text-base"
        variants={itemVariants}
      >
        Evietek's innovative digital solutions guarantee long-term success, boost brand awareness, and increase involvement. 
      </motion.p>
      
      <motion.div variants={itemVariants}>
        <AboutBanner 
          imageUrl="/About_us/4.jpg"
          heading="24/7 Support"
          content="Real-time assistance for all your digital transformation needs, including branding strategies, content creation and web development."
          startColor='#8750F7'
          endColor='#D376FF'
        />
      </motion.div>
      
      {/* Service features */}
      <motion.div 
        className="flex flex-col md:flex-row gap-8 mt-8"
        variants={itemVariants}
      >
        <div className="md:w-1/2">
          <ServiceFeatureItem 
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                <path d="M12 22V12"/>
              </svg>
            }
            text="Smart Solutions for Digital Success"
            index={0}
          />
          <ServiceFeatureItem 
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
                <path d="M8 13h8"/>
                <path d="M8 17h8"/>
                <path d="M8 9h2"/>
              </svg>
            }
            text="Strategic Content That Drives Impact"
            index={1}
          />
          <ServiceFeatureItem 
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            }
            text="Visual Creativity That Speaks Volumes"
            index={2}
          />
        </div>
        
        <motion.div 
          className="md:w-1/2"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 md:w-6 md:h-6 text-[#51328F]">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="text-base md:text-lg font-bold text-[#51328F]">+1 (647) 804 5528</span>
          </div>
          
          <Link href="/book-a-meeting">
            <motion.button 
              className="inline-flex items-center bg-gradient-to-b from-[#5A50FF] to-[#D376FF] text-white py-2 md:py-3 px-4 md:px-6 rounded-full text-sm md:text-base"
              variants={buttonVariants}
              whileHover="hover"
            >
              Book A Meeting
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="White" strokeWidth="2" className="w-3 h-3 md:w-4 md:h-4 ml-2">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPageContent;