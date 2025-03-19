"use client";

import React from 'react';
import { motion } from 'framer-motion';
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
  // {
  //   tag: 'Product Design',
  //   heading: 'Streamline remote hiring with Pangea.ai`s marketplace',
  //   content: 'Struggling to find the perfect software development partner? Pangea.ai cuts through the noise. The platform connects businesses with elite development firms, ensuring a perfect match for your project...',
  //   image: '/case_study/2.svg',
  //   imagePosition: 'left',
  //   bgColor: 'bg-[#65E5F2]',
  //   tagColor: 'bg-[#030438] text-blue-100',
  //   headingColor: 'text-[#030438]',
  //   contentColor: 'text-[#030438]',
  //   buttonColor: 'text-[#030438]',
  //   buttonLink: '/case-study/1'
  // },
  // Add more case studies as needed
];

const CaseStudyPage = () => {
  return (
    <main className="bg-[#F2F2F5]">  
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-16 sm:space-y-24"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <CaseStudyCard {...study} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
    </main>
  );
};

export default CaseStudyPage;