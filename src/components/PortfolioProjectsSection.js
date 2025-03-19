"use client";

import Projects from "./PortfolioProjects";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioProjectsSection() {
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

  const cameraVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } 
    }
  };

  const rocketVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } 
    }
  };

  const rotatingStar = {
    rotate: [0, 360], // Rotates continuously
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <section className="relative bg-[#F9F9F9] text-[#333] py-3 md:py-8 lg:pt-8 px-4 md:px-8 lg:px-12 pb-0">
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <Image 
            src="/Portfolio_2/Portfolio.svg"
            alt="Portfolio"
            width={170}
            height={85}
            className="w-[110px] h-[55px] sm:w-[130px] sm:h-[65px] md:w-[150px] md:h-[75px] lg:w-[170px] lg:h-[85px]"
            priority
          />
        </motion.div>

        {/* "Our Recent Projects" Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-[45px] lg:text-[50px] xl:text-[50px] 2xl:text-[55px] leading-[107%] font-bricolage font-bold text-[#341E61] mt-1 md:mt-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={subHeadingVariants}
        >
          Our Recent Projects
        </motion.h2>
      </div>

      <Projects />

{/* Rocket (Slides from Left) */}
{/* Rocket (Slides from Left) */}
<motion.div
  className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 xl:bottom-140 2xl:bottom-48 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-35 xl:h-35 2xl:w-50 2xl:h-50 z-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={rocketVariants}
  whileHover={{
    x: ["0%", "50%", "70%", "50%", "0%", "-50%", "-70%", "-50%", "0%"],
    y: ["0%", "-70%", "0%", "70%", "0%", "-70%", "0%", "70%", "0%"],
    rotate: [-180, -135, -90, -45, 0, 45, 90, 135, -180],
    transition: {
      duration: 5,
      ease: "linear",
      times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
      repeat: Infinity,
    }
  }}
>
  <Image 
    src="/Portfolio_2/Rocket.svg" 
    alt="Rocket" 
    width={150} 
    height={150}
    className="w-full h-full" 
    priority
  />
</motion.div>
      
      {/* Star (Continuously Rotating + Twisting on Hover) */}
      <motion.div
        className="absolute bottom-10 sm:bottom-16 md:bottom-20 lg:bottom-24 xl:bottom-100 2xl:bottom-32 left-4 sm:left-8 md:left-16 lg:left-24 xl:left-30 2xl:left-40 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24"
        animate={rotatingStar}
        whileHover={{ rotateY: 180 }} // Twists on hover
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Image 
          src="/Portfolio_2/Star.svg" 
          alt="Star" 
          width={40} 
          height={40}
          className="w-full h-full" 
          priority
        />
      </motion.div>

      {/* Camera (Drops from Top + Slower Continuous Tilting on Hover) */}
      <motion.div
        className="absolute top-10 sm:top-16 md:top-20 lg:top-24 xl:top-100 2xl:top-32 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-36 2xl:h-36"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cameraVariants}
        whileHover={{ 
          rotate: [-10, 20, -10, 20, -10, 20, 0], // Keeps tilting until hover is removed
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } 
        }}
      >
        <Image 
          src="/Portfolio_2/Camera.svg" 
          alt="Camera" 
          width={160} 
          height={160} 
          className="w-full h-full"
          priority
        />
      </motion.div>
    </section>
  );
}
