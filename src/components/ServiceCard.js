"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ServiceCard({ background, title, description, icon, decoration }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 800); // Match the transition duration
    }
  };

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

  return (
<motion.div
  className={`relative flex flex-col items-center text-center bg-white rounded-3xl p-6 md:p-8 py-8 md:py-10 lg:py-12 transition-all duration-300 ease-out h-[420px] md:h-[460px] lg:h-[540px] max-w-[300px] md:max-w-[340px] lg:max-w-[360px] justify-between ${
    isAnimating ? 'shadow-[0px_10px_40px_#CCC8EE]' : 'shadow-md'
  }`}
  style={{ background, borderRadius: "1.5rem", overflow: "hidden" }}
  initial="hidden"
  whileInView="visible"
  onHoverStart={() => setIsAnimating(true)}
  onHoverEnd={() => setIsAnimating(false)}
  viewport={{ once: true, amount: 0.1 }}
  variants={cardVariants}
>


      {/* Decorative Background SVG - Positioned Correctly */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none "
        variants={contentVariants}
      >
        <Image
          src={decoration}
          alt="Card Decoration"
          layout="fill"
          objectFit="cover"
          
          className="opacity-100 "
        />
      </motion.div>

      {/* Card Title */}
      <motion.h3
        className="mt-4 text-[30px] sm:text-[36px] leading-[103%] font-semibold text-[#3E2472] text-center font-bricolage"
        variants={contentVariants}
      >
        {title}
      </motion.h3>

      {/* Card Description */}
      <motion.p
        className="mt-2 text-[18px] leading-[138%] font-normal text-[#41335E] max-w-[280px] md:max-w-[300px] lg:max-w-[320px] font-gilroy"
        variants={contentVariants}
      >
        {description}
      </motion.p>

      {/* Card Icon */}
      <motion.div
        className="relative w-[150px] h-[140px] md:w-[220px] md:h-[170px] mt-6 mb-25"
        variants={contentVariants}
      >
        <Image src={icon} alt={title} width={220} height={170} />
      </motion.div>
    </motion.div>
  );
}
