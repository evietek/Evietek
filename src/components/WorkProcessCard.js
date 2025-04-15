"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WorkProcessCard({ number, icon, iconHover, title, description, rotation }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasPlayedIconFlip, setHasPlayedIconFlip] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!hasPlayedIconFlip) {
      setHasPlayedIconFlip(true);
      setTimeout(() => {
        setHasPlayedIconFlip(false);
      }, 4000); // Match the icon flip animation duration
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Shadow based on the screenshot (X:8, Y:8, Blur:0, Spread:0, #0E0A43)
  const shadowStyle = isHovered 
    ? "8px 8px 0px 0px rgba(14, 10, 67, 1)" 
    : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"; // Default shadow-lg

  return (
    <motion.div
      className={`relative cursor-pointer rounded-[22px] p-8 pt-14 w-[280px] sm:w-[300px] md:w-[280px] lg:w-[280px] 
      mb-12 sm:mb-0
      transition-all duration-1000`}
      initial={{ rotate: 0 }}
      animate={{
        rotate: rotation,
        scale: isHovered ? 1.05 : 1
      }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        height: "auto",
        boxShadow: shadowStyle
      }}
    >
      {/* Icon (Double flip on hover) */}
      <motion.div
        className="absolute -top-8 left-6 w-20 h-20"
        animate={hasPlayedIconFlip ? { rotateY: 360 } : { rotateY: 0 }}
        transition={{ duration: 4, ease: "easeOut" }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 transition-opacity duration-300"
            style={{ opacity: hasPlayedIconFlip ? 0 : 1 }}>
            <Image src={icon} alt={title} width={80} height={80} />
          </div>
          <div className="absolute inset-0 transition-opacity duration-300"
            style={{ opacity: hasPlayedIconFlip ? 1 : 0 }}>
            <Image src={iconHover || icon} alt={title} width={80} height={80} />
          </div>
        </div>
      </motion.div>

      {/* Number + Heading (Inline) */}
      <div className="flex items-center space-x-2">
        {/* Number (Circular background, reversed for hover) */}
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full text-[16px] font-bold
          transition-all duration-300 ${isHovered ? 'bg-white text-[#3E2472]' : 'bg-[#3E2472] text-white'}`}
        >
          {number}
        </div>

        {/* Title - Now Always Visible */}
        <h3
          className={`font-bricolage text-[24px] font-semibold leading-[103%] transition-all duration-300 ${isHovered ? 'text-white' : 'text-[#3E2472]'}`}
        >
          {title}
        </h3>
      </div>

      {/* Description - Changes color on hover */}
      <p
        className={`text-[16px] font-gilroy leading-[138%] mt-2 transition-all duration-300 ${isHovered ? 'text-white' : 'text-[#41335E]'}`}
      >
        {description}
      </p>

      {/* Background Color Change on Hover */}
      <motion.div
        className={`absolute inset-0 rounded-[22px] z-[-1] transition-all duration-300 ${isHovered ? 'bg-[#5B42F3]' : 'bg-white'}`}
      />
    </motion.div>
  );
}