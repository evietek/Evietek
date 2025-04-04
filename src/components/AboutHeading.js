"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHeading() {
  return (
    <div className="relative flex items-center">
      {/* About SVG - Sliding from Left */}
      <motion.div 
        className="relative z-10 -mt-6 md:-mt-4  lg:-mt-6  -mr-2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        <Image 
          src="/About/About.svg" 
          alt="About" 
          width={110} height={55}  
          className="w-[110px] h-[55px] sm:w-[130px] sm:h-[65px] md:w-[120px] md:h-[60px] lg:w-[170px] lg:h-[85px]"
        />
      </motion.div>

      {/* Us SVG - Slightly Smaller & Adjusted Position */}
      <motion.div 
        className="relative -ml-4 sm:-ml-5 md:-ml-5 lg:-ml-7 -mt-0 z-0" // Adjusted for tablet & mobile
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.1 }}
      >
        <Image 
          src="/About/Us.svg" 
          alt="Us" 
          width={80} height={40}  // Slightly reduced size
          className="w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[90px] md:h-[45px] lg:w-[130px] lg:h-[65px]"
        />
      </motion.div>
    </div>
  );
}
