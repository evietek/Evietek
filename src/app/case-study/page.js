'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumb from '@/components/BreadCrumb';
import CaseStudyCard from "@/components/CaseStudyCard";

const caseStudies = [
  {
    tag: 'Product Design',
    heading: 'Empowering Access to Fresh Produce: Building a Mobile App for Source.ag',
    content: 'Source.ag is an Amsterdam-based agtech startup that is revolutionizing access to fresh produce using cutting-edge AI-powered greenhouses. By enabling efficient operations for growers through pioneering technology...',
    image: '/case_study/kayna.png',
    imagePosition: 'right',
    bgColor: 'bg-[#51328F]',
    tagColor: 'bg-[#5E51FE] text-white-800',
    headingColor: 'text-white-800', 
    contentColor: 'text-white-600',
    buttonLink: '/case-study/Kayna-Embedded-Insurance',
    buttonColor: 'text-white-300',
  },
  // Additional case studies can be added here
];

const CaseStudyPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Variants for smoother animations
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1, 
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6
      }
    })
  };

  if (!isClient) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#030438]">
        <div className="animate-pulse text-white">Loading...</div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <main className="bg-[#030438] pt-10 md:pt-0">  
        <motion.div 
          key="case-study-page"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.6 }}
          className="min-h-screen bg-[#030438]"
        >
          {/* Breadcrumb Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <Breadcrumb 
              title="Case Study" 
              backgroundImage="/case_study/bg.avif" 
            />
          </motion.div>
     
          {/* Case Studies Grid */}
          <section className="pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial="hidden"
                animate="visible"
                className="space-y-16 sm:space-y-24"
              >
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <CaseStudyCard {...study} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </motion.div>
      </main>
    </AnimatePresence>
  );
};

export default CaseStudyPage;