"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceHeading() {
  return (
    <div className="relative flex justify-center items-center w-full mt-10 md:mt-0 lg:mt-0">
      {/* Our SVG - Sliding from Left */}
      <motion.div 
        className="relative z-10 -mt-16 -mr-2 lg:-mt-20"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        <Image 
          src="/Our_Services/Our.svg"
          alt="Our"
          width={110} height={55}  
          className="w-[60px] h-[30px] sm:w-[60px] sm:h-[30px] md:w-[80px] md:h-[40px] lg:w-[130px] lg:h-[65px]"
        />
      </motion.div>

      {/* Services SVG - Slightly Smaller & Adjusted Position */}
      <motion.div 
        className="relative -ml-2 -mt-8 sm:-ml-5 md:-ml-3 lg:-ml-6 z-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.1 }}
      >
        <Image 
          src="/Our_Services/Services.svg"
          alt="Services"
          width={80} height={40}  
          className="w-[100px] h-[50px] sm:w-[100px] sm:h-[50px] md:w-[110px] md:h-[55px] lg:w-[200px] lg:h-[100px]"
        />
      </motion.div>
    </div>
  );
}
