"use client";

import { useState } from "react";
import ScrollIndicator from "./ScrollIndicator";
import DecorativeElements from "./DecorativeElements";
import Image from "next/image";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"], // adjust weights as needed
});



export default function HeroSection() {
  {/* Floating Design Badge – Left */ }
  const [hasPlayedDesign, setHasPlayedDesign] = useState(false);
  const [hasPlayedDev, setHasPlayedDev] = useState(false);
  const [hasPlayedE, setHasPlayedE] = useState(false);
  const [hasPlayedLasts, setHasPlayedLasts] = useState(false);

  const handleDesignEnter = () => {
    if (!hasPlayedDesign) {
      setHasPlayedDesign(true);
      setTimeout(() => {
        setHasPlayedDesign(false);
      }, 1000);
    }
  };

  const handleDevEnter = () => {
    if (!hasPlayedDev) {
      setHasPlayedDev(true);
      setTimeout(() => {
        setHasPlayedDev(false);
      }, 1000);
    }
  };

  const handleEEnter = () => {
    if (!hasPlayedE) {
      setHasPlayedE(true);
      setTimeout(() => {
        setHasPlayedE(false);
      }, 600); // Match the rotation animation duration
    }
  };

  const handleLastsEnter = () => {
    if (!hasPlayedLasts) {
      setHasPlayedLasts(true);
      setTimeout(() => {
        setHasPlayedLasts(false);
      }, 1000); // Match the skew animation duration
    }
  };

  return (
    <>
      <section
        className={`relative bg-[#030438] text-white h-[60vh] md:h-[90vh] flex flex-col items-center justify-between text-center px-6 md:px-12 pt-18 md:pt-20 pb-0 overflow-hidden ${playfair.className}`}
      >
        {/* Background with CSS Grid Pattern */}
<div className="absolute inset-0 w-full h-full bg-[#030438] overflow-hidden">
  {/* Grid pattern with improved visibility */}
  <div 
    className="absolute inset-0 w-full h-full"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px'
    }}
  />
  
  {/* Radial gradient overlay */}
  <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(120,70,190,0.3)_0%,rgba(3,4,56,0.8)_70%,rgba(3,4,56,1)_100%)]"></div>
  
  {/* Purple glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] w-[90vw] h-[50vw] max-w-[1200px] max-h-[600px] bg-[#7A3DD7] opacity-35 rounded-full blur-[120px]"></div>

</div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold leading-[0.8] select-none cursor-default">
              We Build <br />
              <span className="text-white flex items-center justify-center gap-2">
                <motion.div
                  initial={{ y: -250, x: 0, opacity: 0 }}
                  animate={{
                    y: [-250, 120, -20, 5, 0],
                    x: [0, 30, -15, 5, 0],
                    opacity: 1,
                  }}
                  transition={{ duration: 3, ease: "easeOut" }}
                  className="inline-block cursor-pointer"
                  onMouseEnter={handleEEnter}
                >
                  <motion.div
                    animate={hasPlayedE ? { rotateY: 180 } : {}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <Image
                      src="/svgs/E.svg"
                      alt="E"
                      width={60}
                      height={60}
                      className="inline-block align-middle md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px]"
                    />
                  </motion.div>
                </motion.div>

                <span className="relative -mt-2 font-bold">xperiences</span>
              </span>

              <span>that{" "}</span>

              <motion.span
                className="relative inline-block ml-1 cursor-pointer"
                initial={{ rotate: 4, skewX: 6 }}
                onMouseEnter={handleLastsEnter}
              >
                <motion.div
                  animate={hasPlayedLasts ? { rotate: -4, skewX: -6 } : {}}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <span className="absolute inset-0 bg-yellow-400 w-full h-full -z-10 transform skew-x-6 rotate-4 xl:translate-y-2.5 rounded-md"></span>
                  <span className="relative inline-block px-1 pb-2 text-black font-bold">
                    Lasts
                  </span>
                </motion.div>
              </motion.span>
            </h1>


            {/* Subheading */}
            <p className="mt-6 md:mt-10 text-base md:text-lg max-w-2xl mx-auto opacity-90 font-light select-none cursor-default">
              We at Evietek create visually stunning digital experiences that
              effortlessly engage, captivate, and convert. Grow your brand with
              innovation that speaks for itself.
            </p>
          </div>

          {/* Floating Design Badge – Left */}
          <div
            className={`
    absolute 
    left-[1%] top-[17%]
    sm:left-[6%] sm:top-[10%]
    md:left-[8%] md:top-[12%]
    lg:left-[5%] lg:top-[20%]
    xl:left-[5%] xl:top-[24%]
    w-[80px] h-[40px]
    sm:w-[150px] sm:h-[75px]
    md:w-[180px] md:h-[90px]
    lg:w-[200px] lg:h-[100px]
    xl:w-[250px] xl:h-[125px]
    z-20
    group
  `}
            onMouseEnter={handleDesignEnter}
          >
            <div className="w-full h-full cursor-pointer" />

            {/* Glowing blob */}
            <div
              className={`
      absolute inset-0 
      opacity-40 blur-xl 
      -z-10 bg-purple-700 
      rounded-full 
      pointer-events-none 
      transition-transform 
      duration-1000 
      ${hasPlayedDesign ? "scale-125 translate-x-2 translate-y-2" : ""}
    `}
            />

            {/* Image with dynamic buzz class */}
            <Image
              src="/svgs/Design.svg"
              alt="Design"
              fill
              className={`
      object-contain
      animate-float-left
      pointer-events-none
      transition-all duration-700
      ${hasPlayedDesign ? "animate-buzz scale-110" : ""}
    `}
              sizes="(max-width: 768px) 100px , (max-width: 1200px) 160px, 220px"
            />
          </div>

          {/* Floating Development Badge – Right */}
          <div
            className={`
    absolute 
    right-[3%] bottom-[2%]
    sm:right-[8%] sm:bottom-[35%]
    md:right-[2%] md:bottom-[45%]
    lg:right-[1%] lg:bottom-[1%]
    xl:right-[5%] xl:bottom-[30%]
    w-[80px] h-[40px]
    sm:w-[150px] sm:h-[75px]
    md:w-[180px] md:h-[90px]
    lg:w-[200px] lg:h-[100px]
    xl:w-[250px] xl:h-[125px]
    z-20
    group
  `}
            onMouseEnter={handleDevEnter}
          >
            <div className="w-full h-full cursor-pointer" />

            {/* Glowing blob */}
            <div
              className={`
      absolute inset-0 
      opacity-40 blur-xl 
      -z-10 bg-purple-700 
      rounded-full 
      pointer-events-none 
      transition-transform 
      duration-1000 
      ${hasPlayedDev ? "scale-125 translate-x-2 translate-y-2" : ""}
    `}
            />

            <Image
              src="/svgs/Development.svg"
              alt="Development"
              fill
              className={`
      object-contain
      animate-float-right
      pointer-events-none
      transition-all duration-700
      ${hasPlayedDev ? "animate-buzz scale-110" : ""}
    `}
              sizes="(max-width: 768px) 100px , (max-width: 1200px) 160px, 220px"
            />
          </div>

        </div>



        <DecorativeElements />

        <div className="w-full flex justify-center py-0 animate-bounce-slow">
          <ScrollIndicator />
        </div>
      </section>
    </>
  );
}
