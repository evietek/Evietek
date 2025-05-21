'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";

// Animation Variants
const headingVariants = {
  hidden: { opacity: 0, y: -50 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const subHeadingVariants = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } 
  }
};

const floatingAnimation = {
  y: [-5, 5, -5], 
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const BookaMeetingPage = () => {
  return (
    <main className="px-6 pt-16 md:px-16 md:pt-20  lg:px-0 lg:pt-30 lg:pb-10 relative bg-[#FFFFFF]">

      <div className="flex flex-col items-center text-center py-10">
        {/* Heading Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
      <div 
        className="flex items-center justify-center rounded-[12px] py-[5px] px-[15px] bg-[#CB73FE] rotate-[-5.5deg]"
      >
        <span 
          className="font-['Bricolage_Grotesque'] font-extrabold text-white text-xl sm:text-xl md:text-2xl lg:text-3xl text-center"
        >
          Book A Meeting
        </span>
      </div>
        </motion.div>
        
        {/* Content Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-[45px] lg:text-[50px] xl:text-[50px] 2xl:text-[55px] leading-[107%] font-bricolage font-bold text-[#341E61] mt-1 md:mt-3 select-none cursor-default"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={subHeadingVariants}
        >
          Snag Your Free <br className="hidden md:block" /> 30-Minutes
        </motion.h2>

        {/* Description Paragraph */}
        <motion.p 
          className="mt-4 mb-6 text-lg text-[#41335E] max-w-2xl select-none cursor-default"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={subHeadingVariants}
        >
          Schedule a free 30-minute session with our experts to discuss your business needs and discover how we can help you achieve your goals.
        </motion.p>
      </div> 

      {/* Calendly Embed with Background Div */}
      <div className="flex justify-center mt-0 relative mb-20">
      <div className="absolute top-0 w-full max-w-4xl h-160 lg:h-full bg-white rounded-xl p-0 shadow-[0px_30px_50px_0px_#CCC8EE] md:shadow-[0px_60px_103px_0px_#CCC8EE]"></div>
        
        <div className="w-full max-w-2xl h-[750px] relative z-10">
          <InlineWidget 
            url="https://calendly.com/evietek-info/30min"
            styles={{ height: "100%", width: "100%" }}
            pageSettings={{
              hideEventTypeDetails: true,  // Hides left section (Meeting type)
              hideLandingPageDetails: true, // Removes extra details
              backgroundColor: "ffffff",
              primaryColor: "00a2ff",
              textColor: "4d5055"
            }}
          />
        </div>
      </div>

      {/* Floating Icon (Headset) */}
      <motion.div
        className="absolute top-15 right-1 md:right-15 xl:right-35 xl:top-85 w-25 h-25 sm:w-45 sm:h-45 lg:w-60 lg:h-60"
        animate={floatingAnimation}
      >
        <Image src="/Meeting/Headset.svg" alt="Headset" width={200} height={200} />
      </motion.div>

      {/* Fixing "Guy" Position at Bottom */}
      <motion.div
        className="absolute -bottom-4 lg:-bottom-6 left-0 w-75 sm:w-80 md:w-80 lg:w-120 xl:w-120 z-10"
      >
        <Image src="/Meeting/Guy.svg" alt="Guy" width={500} height={500} />
      </motion.div>   

    </main>
  );
};

export default BookaMeetingPage;
