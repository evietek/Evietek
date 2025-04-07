'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumb from '@/components/BreadCrumb';
import CaseStudyCard from "@/components/CaseStudyCard";

const caseStudies = [
  {
    tag: 'Branding',
    heading: 'Transforming Lars Tornøe’s Digital Presence with Modern Branding & Web Design',
    content: 'Revamping Lars Tornøe’s brand with modern web design, we crafted a sleek, high converting e-commerce platform, enhancing user experience, engagement, and positioning the brand as premium.',
    image: '/case_study/Lars-Tornoe/cover.png',
    imagePosition: 'right',
    bgColor: 'bg-[#053027]',
    tagColor: 'bg-[#CB73FE] text-white-800',
    headingColor: 'text-white-800',
    contentColor: 'text-white-600',
    buttonLink: '/case-study/Lars-Tornoe',
    buttonColor: 'text-[#CB73FE]',
  },
  {
    tag: 'UI/UX Design',
    heading: 'Transforming Zonaris with a Cutting-Edge UI/UX & Web Design',
    content: 'We revamped Zonaris’ UI/UX with a sleek, crypto-centric design, improving navigation, trust, and performance boosting user engagement, sign-ups, and Bitcoin staking conversions significantly.',
    image: '/case_study/Zonaris/cover.webp',
    imagePosition: 'left',
    bgColor: 'bg-[#65E5F2]',
    tagColor: 'bg-[#51328F] text-white-800',
    headingColor: 'text-[#000000]',
    contentColor: 'text-[#000000]',
    buttonLink: '/case-study/Zonaris',
    buttonColor: 'text-[#51328F]',
  },
  // {
  //   tag: 'Web Design',
  //   heading: 'Elevating TrackPac’s Digital Presence with Advanced Web Design & Development',
  //   content: 'We modernized TrackPac’s digital presence with a sleek, high performance website, enhancing user experience, scalability, and engagement while showcasing its cutting-edge IoT sensor management solutions.',
  //   image: '/case_study/Trackpac/cover.webp',
  //   imagePosition: 'right',
  //   bgColor: 'bg-[#CB73FE]',
  //   tagColor: 'bg-[#65E5F2] text-[#000000]',
  //   headingColor: 'text-[#030438]',
  //   contentColor: 'text-[#030438]',
  //   buttonLink: '/case-study/Trackpac',
  //   buttonColor: 'text-[#65E5F2]',
  // },
  {
    tag: 'Web Development',
    heading: 'Web Design and Development to Improve TrailFire`s Online Presence',
    content: 'We redesigned TrailFire’s website with a high-conversion UI/UX, improved service presentation, and optimized performance, boosting engagement, conversions, and brand authority in PPC solutions.',
    image: '/case_study/Trailfire/cover.jpeg',
    imagePosition: 'right',
    bgColor: 'bg-[#FCD700]',
    tagColor: 'bg-[#053027] text-white-800',
    headingColor: 'text-[#030438]',
    contentColor: 'text-[#030438]',
    buttonLink: '/case-study/TrailFire',
    buttonColor: 'text-[#053027]',
  },


  {
    tag: 'SEO',
    heading: 'Strengthening HeyFriday AI’s Online Presence with Strategic SEO & Backlink Building ',
    content: 'We enhanced HeyFriday AI’s SEO through strategic backlink building, increasing domain authority, organic traffic, and search rankings positioning it as a leading AI writing solution.',
    image: '/case_study/HeyFriday/cover.jpeg',
    imagePosition: 'left',
    bgColor: 'bg-[#51328F]',
    tagColor: 'bg-[#5E51FE] text-white-800',
    headingColor: 'text-white-800',
    contentColor: 'text-white-600',
    buttonLink: '/case-study/HeyFriday',
    buttonColor: 'text-white-300',
  },
  {
    tag: 'Branding',
    heading: 'Making Epic Teams’ brand identity stronger with powerful design ',
    content: 'We strengthened Epicstreams` brand identity through strategic design, creating a cohesive visual presence, enhancing engagement, and optimizing digital platforms resulting in increased recognition, credibility, and audience inquiries.',
    image: '/case_study/Epic-Teams/cover.png',
    imagePosition: 'right',
    bgColor: 'bg-[#5E51FE]',
    tagColor: 'bg-[#FCD700] text-[#000000]',
    headingColor: 'text-white-800',
    contentColor: 'text-white-600',
    buttonLink: '/case-study/Epic-Teams',
    buttonColor: 'text-[#FCD700]',
  },



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
        delay: index * 0.05,
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
            transition={{ duration: 0.6, delay: 0.05 }}
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