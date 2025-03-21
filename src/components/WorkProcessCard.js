"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WorkProcessCard({ number, icon, iconHover, title, description, rotation }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative shadow-lg rounded-[22px] p-8 pt-14 w-[280px] sm:w-[300px] md:w-[280px] lg:w-[280px] 
      mb-12 sm:mb-0 /* Added bottom margin for mobile only */
      transition-all duration-300 group"
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      style={{ height: "auto" }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
{/* Icon (Double flip on hover) */}
<motion.div
  className="absolute -top-8 left-6 w-20 h-20"
  whileHover={{ rotateY: 360 }}
  animate={isFlipped ? { rotateY: 360 } : { rotateY: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <div className="relative w-full h-full">
    <div className="absolute inset-0 transition-opacity duration-300" 
         style={{ opacity: isFlipped ? 0 : 1 }}>
      <Image src={icon} alt={title} width={80} height={80} />
    </div>
    <div className="absolute inset-0 transition-opacity duration-300" 
         style={{ opacity: isFlipped ? 1 : 0 }}>
      <Image src={iconHover || icon} alt={title} width={80} height={80} />
    </div>
  </div>
</motion.div>

      {/* Number + Heading (Inline) */}
      <div className="flex items-center space-x-2">
        {/* Number (Circular background, reversed for hover) */}
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full text-[16px] font-bold
          bg-[#3E2472] text-white group-hover:bg-white group-hover:text-[#3E2472] transition-all duration-300"
        >
          {number}
        </div>

        {/* Title - Now Always Visible */}
        <h3
          className="font-bricolage text-[24px] font-semibold leading-[103%] text-[#3E2472] 
          group-hover:text-white transition-all duration-300"
        >
          {title}
        </h3>
      </div>

      {/* Description - Changes color on hover */}
      <p
        className="text-[16px] font-gilroy leading-[138%] mt-2 text-[#41335E] group-hover:text-white transition-all duration-300"
      >
        {description}
      </p>

      {/* Background Color Change on Hover */}
      <motion.div
        className="absolute inset-0 rounded-[22px] z-[-1] bg-white group-hover:bg-[#5B42F3] transition-all duration-300"
      />
    </motion.div>
  );
}