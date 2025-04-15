"use client";

import Projects from "./PortfolioProjects";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PortfolioProjectsSection() {
  const [hasPlayedStar, setHasPlayedStar] = useState(false);
  const [hasPlayedCamera, setHasPlayedCamera] = useState(false);

  const handleStarEnter = () => {
    if (!hasPlayedStar) {
      setHasPlayedStar(true);
      setTimeout(() => {
        setHasPlayedStar(false);
      }, 1500); // Match the hover animation duration
    }
  };

  const handleCameraEnter = () => {
    if (!hasPlayedCamera) {
      setHasPlayedCamera(true);
      setTimeout(() => {
        setHasPlayedCamera(false);
      }, 3000); // Match the tilt animation duration
    }
  };

  // Animation Variants
  const subHeadingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.2 }
    }
  };

  const cameraVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.3 }
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
    <section className="relative bg-[#FFFFFF] text-[#333] py-3 md:py-8 lg:pt-16 px-4 md:px-8 lg:px-12 pb-0">
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center">
      <div 
        className="flex items-center justify-center rounded-[12px] py-[5px] px-[15px] bg-[#CB73FE] rotate-[-5.5deg]"
      >
        <span 
          className="font-['Bricolage_Grotesque'] font-extrabold text-white text-xl sm:text-xl md:text-2xl lg:text-3xl text-center"
        >
          Portfolio
        </span>
      </div>

        {/* "Our Recent Projects" Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-[45px] lg:text-[50px] xl:text-[50px] 2xl:text-[55px] leading-[107%] font-bricolage font-bold text-[#341E61] mt-1 md:mt-1 select-none cursor-default"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={subHeadingVariants}
        >
          Our Recent Projects
        </motion.h2>
      </div>

      <Projects />

      {/* Rocket Image */}
      <motion.div
        className="absolute bottom-28 sm:bottom-20 md:bottom-24 lg:bottom-32 xl:bottom-48 right-0 w-16 h-16 sm:w-12 sm:h-12 md:w-24 md:h-24 lg:w-35 lg:h-35 xl:w-42 xl:h-42 2xl:w-50 2xl:h-50 z-10"
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
        className="absolute bottom-25 sm:bottom-16 md:bottom-20 lg:bottom-24 xl:bottom-50 2xl:bottom-32 left-1 sm:left-8 md:left-8 lg:left-24 xl:left-30 2xl:left-40 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 z-10"
        animate={rotatingStar}
        onMouseEnter={handleStarEnter}
      >
        <motion.div
          animate={hasPlayedStar ? { rotateY: 180 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src="/Portfolio_2/Star.svg"
            alt="Star"
            width={40}
            height={40}
            className="w-full h-full md:w-10 md:h-10"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Camera (Drops from Top + Slower Continuous Tilting on Hover) */}
      <motion.div
        className="absolute top-10 sm:top-16 md:top-20 lg:top-24 xl:top-30 2xl:top-32 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-22 lg:h-22 xl:w-24 xl:h-24 2xl:w-36 2xl:h-36"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={cameraVariants}
        onMouseEnter={handleCameraEnter}
      >
        <motion.div
          animate={hasPlayedCamera ? {
            rotate: [-10, 20, -10, 20, -10, 20, 0],
          } : {}}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <Image
            src="/Portfolio_2/Camera.svg"
            alt="Camera"
            width={160}
            height={160}
            className="w-full h-full cursor-pointer"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
