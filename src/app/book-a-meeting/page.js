'use client';

import Breadcrumb from '@/components/BreadCrumb';
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
    <main className="pt-0 px-6 md:px-16 lg:px-0 lg:pb-10 relative bg-white">
      
      {/* Breadcrumb */}
      <Breadcrumb 
        title="Book a Meeting" 
        backgroundImage="/Meeting/bg.jpg" 
        backgroundPosition="center 70%"
      />

      <div className="flex flex-col items-center text-center">
        {/* Heading Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <Image 
            src="/Meeting/Book_A_Meeting.svg"
            alt="Book a Meeting"
            width={140}
            height={50}
            className="w-[110px] h-[55px] sm:w-[130px] sm:h-[65px] md:w-[150px] md:h-[75px] lg:w-[170px] lg:h-[85px]"
          />
        </motion.div>
        
        {/* Content Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-[45px] lg:text-[50px] xl:text-[50px] 2xl:text-[55px] leading-[107%] font-bricolage font-bold text-[#341E61] mt-1 md:mt-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={subHeadingVariants}
        >
          Snag Your Free <br className="hidden md:block" /> 30-Minutes
        </motion.h2>

        {/* Description Paragraph */}
        <motion.p 
          className="mt-4 text-lg text-[#41335E] max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={subHeadingVariants}
        >
          Schedule a free 30-minute session with our experts to discuss your business needs and discover how we can help you achieve your goals.
        </motion.p>
      </div> 

      {/* Calendly Embed with Background Div */}
      <div className="flex justify-center mt-0 relative">
        <div className="absolute top-0 w-full max-w-3xl h-full bg-white shadow-xl rounded-xl p-0 border border-gray-200"></div>
        
        <div className="w-full max-w-4xl h-[750px] relative z-10">
          <InlineWidget 
            url="https://calendly.com/siriusalpha501/30min"
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
        className="absolute top-35 right-2 md:right-15 lg:right-35 lg:top-85 w-12 h-12 sm:w-16 sm:h-16 lg:w-40 lg:h-40"
        animate={floatingAnimation}
      >
        <Image src="/Meeting/Headset.svg" alt="Headset" width={160} height={160} />
      </motion.div>

      {/* Fixing "Guy" Position at Bottom */}
      <motion.div
        className="absolute bottom-0 left-0 w-24 sm:w-32 md:w-40 lg:w-56 xl:w-64"
      >
        <Image src="/Meeting/Guy.svg" alt="Guy" width={240} height={240} />
      </motion.div>   

    </main>
  );
};

export default BookaMeetingPage;
