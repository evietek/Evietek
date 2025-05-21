"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  borderColor,
  variant = 1, // Add a variant prop with default 1
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Animation Variants
  const cardVariants = {
    hidden: { backgroundColor: "white" },
    visible: {
      transition: { duration: .8, ease: "easeOut" },
    },
  };

  // Content Fade-in Variants
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: .5, delay: 0.1 }, // Delayed so it appears AFTER rotation
    },
  };

  // Circle positions based on variant
  const getCirclePositions = () => {
    switch(variant) {
      case 1:
        return {
          topLeft: { top: "-30%", left: "60%", size: "220px" },
          topRight: { top: "-30%", right: "-10%", size: "220px" },
          bottomLeft: { bottom: "-30%", left: "-8%", size: "220px" },
          bottomRight: { bottom: "-30%", right: "60%", size: "220px" },
        };
      case 2:
        return {
          topLeft: { top: "-30%", left: "15%", size: "220px" },
          topRight: { top: "-30%", right:"45%", size: "220px" },
          bottomLeft: { bottom: "-28%", left: "65%", size: "220px" },
          bottomRight: { bottom: "-35%", right: "0%", size: "220px" },
        };
      case 3:
        return {
          topLeft: { top: "-30%", left: "30%", size: "220px" },
          topRight: { top: "-30%", right: "20%", size: "220px" },
          bottomLeft: { bottom: "-30%", left: "35%", size: "220px" },
          bottomRight: { bottom: "-30%", right: "-5%", size: "220px" },
        };
      default:
        return {
          topLeft: { top: "-15%", left: "-5%", size: "220px" },
          topRight: { top: "-10%", right: "-10%", size: "220px" },
          bottomLeft: { bottom: "-15%", left: "-10%", size: "220px" },
          bottomRight: { bottom: "-10%", right: "-5%", size: "220px" },
        };
    }
  };

  const circlePositions = getCirclePositions();
  const defaultColor = "#CB73FE";
  const hoverColor = "#5E51FE";

  return (
    <motion.div
      className={`relative flex flex-col items-center text-center bg-white border-1 ${borderColor || 'border-[#CB73FE]/30'} rounded-3xl p-6 md:p-8 py-8 md:py-10 lg:py-12 transition-all duration-300 ease-out h-[420px] md:h-[460px] lg:h-[540px] max-w-[300px] md:max-w-[340px] lg:max-w-[360px] justify-between ${
        isHovered ? 'shadow-[0px_10px_40px_#CCC8EE]' : 'shadow-md' 
      }`}
      style={{ borderRadius: "1.5rem", overflow: "hidden" }}
      initial="hidden"
      whileInView="visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
    >
      {/* Top Left Circle - Filled initially, hollow on hover */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: circlePositions.topLeft.top,
          left: circlePositions.topLeft.left,
          width: circlePositions.topLeft.size,
          height: circlePositions.topLeft.size,
          border: isHovered ? `2px solid ${hoverColor}` : 'none',
          backgroundColor: isHovered ? 'transparent' : defaultColor,
          opacity: 0.4,
          transition: "all 0.5s ease"
        }}
      />

      {/* Top Right Circle - Hollow initially, filled on hover */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: circlePositions.topRight.top,
          right: circlePositions.topRight.right,
          width: circlePositions.topRight.size,
          height: circlePositions.topRight.size,
          border: isHovered ? 'none' : `2px solid ${defaultColor}`,
          backgroundColor: isHovered ? hoverColor : 'transparent',
          opacity: 1,
          transition: "all 0.5s ease"
        }}
      />

      {/* Bottom Left Circle - Hollow initially, filled on hover */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: circlePositions.bottomLeft.bottom,
          left: circlePositions.bottomLeft.left,
          width: circlePositions.bottomLeft.size,
          height: circlePositions.bottomLeft.size,
          border: isHovered ? 'none' : `2px solid ${defaultColor}`,
          backgroundColor: isHovered ? hoverColor : 'transparent',
          opacity: 1,
          transition: "all 0.5s ease"
        }}
      />

      {/* Bottom Right Circle - Filled initially, hollow on hover */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: circlePositions.bottomRight.bottom,
          right: circlePositions.bottomRight.right,
          width: circlePositions.bottomRight.size,
          height: circlePositions.bottomRight.size,
          border: isHovered ? `2px solid ${hoverColor}` : 'none',
          backgroundColor: isHovered ? 'transparent' : defaultColor,
          opacity: 0.4,
          transition: "all 0.5s ease"
        }}
      />

      {/* Card Title - Keeping original className */}
      <motion.h3
        className="mt-4 text-[30px] sm:text-[36px] leading-[103%] font-semibold text-[#3E2472] text-center font-bricolage z-10"
        variants={contentVariants}
      >
        {title}
      </motion.h3>

      {/* Card Description - Keeping original className */}
      <motion.p
        className="mt-2 text-[18px] leading-[138%] font-normal text-[#41335E] max-w-[280px] md:max-w-[300px] lg:max-w-[320px] font-gilroy z-10"
        variants={contentVariants}
      >
        {description}
      </motion.p>

      {/* Card Icon - Keeping original className and mb-25 */}
      <motion.div
        className="relative w-[150px] h-[140px] md:w-[220px] md:h-[170px] mt-6 mb-25 z-10"
        variants={contentVariants}
      >
        <Image src={icon} alt={title} width={220} height={170} />
      </motion.div>
    </motion.div>
  );
}