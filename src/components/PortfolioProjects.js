"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const projects = [
  { id: 1, src: "/Portfolio_2/Trakpac.svg", alt: "Trackpac", title: "Trackpac", link: "https://trackpac.io/" },
  // { id: 2, src: "/Portfolio_2/AllInTicket.svg", alt: "All In Ticket", title: "All In Ticket", link: "/projects/all-in-ticket" },
  // { id: 3, src: "/Portfolio_2/Medalyc.svg", alt: "Medalyc", title: "Medalyc", link: "/projects/medalyc" },
  { id: 4, src: "/Portfolio_2/Zonaris.svg", alt: "Zonaris", title: "Zonaris", link: "https://www.zonaris.io/" },
];

const PortfolioProjects = () => {
  const [tappedId, setTappedId] = useState(null);
  const [spacingValue, setSpacingValue] = useState(50);
  const [screenWidth, setScreenWidth] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  useEffect(() => {
    const updateValues = () => {
      const width = window.innerWidth;
      setScreenWidth(width);

      if (width < 640) setSpacingValue(80);        // mobile
      else if (width < 768) setSpacingValue(90);   // large mobile
      else if (width < 1024) setSpacingValue(100); // tablet
      else if (width < 1280) setSpacingValue(150); // laptop
      else if (width < 1536) setSpacingValue(170); // desktop
      else setSpacingValue(160);                   // large desktop
    };

    // Set initial values
    setScreenWidth(window.innerWidth);
    updateValues();

    window.addEventListener("resize", updateValues);
    return () => window.removeEventListener("resize", updateValues);
  }, []);

// Calculate base height based on screen width
const getBaseHeight = () => {
  if (screenWidth === 0) return 600; // Default for SSR
  
  if (screenWidth < 760) return 200; // For smaller screens
  if (screenWidth < 1024) return 365; // For medium screens
  if (screenWidth < 1441) return 500; // For smaller screens
  return 600; // For larger screens
};
  const handleClick = (e, projectId, link) => {
    e.preventDefault();
    if (tappedId === projectId) {
      // If already expanded, redirect to the link
      window.open(link, "_blank");
    } else {
      // Otherwise, expand the project
      setTappedId(projectId);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".portfolio-card")) {
        setTappedId(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  // Animation variants for the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
        delayChildren: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: -100 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative flex flex-col items-center justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-0 sm:mb-0 md:mb-0 lg:mb-0"
    >
      <motion.div 
        className="relative w-[300px] sm:w-[300px] md:w-[580px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] flex flex-col items-center"
        style={{
          height: `${((projects.length - 1) * spacingValue) + getBaseHeight()}px`
        }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="absolute w-full"
            style={{
              top: `${(projects.length - 1 - index) * spacingValue}px`, 
              zIndex: projects.length - index,
            }}
            variants={cardVariants}
            custom={index}
          >
            <div 
              className={`portfolio-card block w-full transition-transform duration-1500 ease-in-out cursor-pointer
                ${tappedId === project.id ? 'translate-y-[-60px] sm:translate-y-[-80px] md:translate-y-[-100px] lg:translate-y-[-120px] xl:translate-y-[-140px]' : ''}`}
              onClick={(e) => handleClick(e, project.id, project.link)}
            >
              <div className="w-full px-2 sm:px-0">
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={1000}
                  height={400}
                  className="rounded-lg shadow-lg w-full max-h-[280px] sm:max-h-[230px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-none 2xl:max-h-none"
                  priority
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioProjects;