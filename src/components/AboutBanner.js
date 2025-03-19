"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutBanner = ({
  imageUrl = "/About_us/4.jpg",
  imageAlt = "24/7 assistance",
  heading = "24/7 assistance",
  content = "Real-time assistance for all your digital transformation needs, including branding strategies, content creation and web development.",
  direction = "ltr", // 'ltr' (image left) or 'rtl' (image right)
  startColor = "#4169e1", // Royal blue
  endColor = "#06b6d4", // Cyan/teal
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Shorter version for mobile
  const mobileContent = "Real-time assistance for all your digital needs.";

  return (
    <motion.div 
      className="relative flex items-center w-full pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* For LTR (Left to Right) direction */}
      {direction === "ltr" && (
        <>
          {/* Wrapper for the custom image shape */}
          <div className="absolute w-[120px] h-[100px] md:w-[175px] md:h-[150px] lg:w-[150px] lg:h-[120px] xl:w-[220px] xl:h-[155px] flex justify-center items-center z-10">
            {/* White border wrapper using the correct shape */}
            <div
              className="absolute w-full h-full bg-[#F2F2F5]"
              style={{
                clipPath: "polygon(45% -70%,96% 50%,50% 155%,0 50%)",
              }}
            ></div>

            {/* Image container with exact shape */}
            <motion.figure
              className="absolute w-[100px] h-[80px] md:w-[150px] md:h-[125px] lg:w-[130px] lg:h-[120px] xl:w-[180px] xl:h-[145px] overflow-hidden group"
              style={{
                clipPath: "polygon(50% -50%,100% 50%,50% 150%,0 50%)",
              }}
            >
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transform scale-0 
                            transition-all duration-700 origin-center rotate-45 group-hover:scale-[2]" />
            </motion.figure>
          </div>

          {/* Content area with increased height and circular edge */}
          <motion.div
            className="text-white py-2 md:py-4 px-3 md:px-6 flex flex-col justify-center relative !w-[280px] md:!w-[500px] lg:h-[120px] xl:h-[145px] md:h-[120px] h-[80px] left-[80px] md:left-[90px] lg:left-[60px] xl:left-[160px]"
            style={{
              background: `linear-gradient(180deg, ${startColor}, ${endColor})`,
              borderTopRightRadius: "72px",
              borderBottomRightRadius: "72px",
              zIndex: 1,
            }}
          >
            <h3 className="text-base md:text-xl font-medium leading-tight pl-8 md:pl-16 pb-1 md:pb-4">{heading}</h3>
            <p className="text-xs md:text-sm mt-1 leading-tight pl-8 md:pl-16">
              <span className="md:hidden">{mobileContent}</span>
              <span className="hidden md:inline">{content}</span>
            </p>
          </motion.div>
        </>
      )}

      {/* RTL (Right to Left) direction */}
      {direction === "rtl" && (
        <>
          {/* Content area with increased height and circular edge */}
          <motion.div
            className="text-white py-2 md:py-4 px-3 md:px-6 flex flex-col justify-center relative !w-[280px] md:!w-[580px] lg:h-[90px] md:h-[120px] h-[80px] right-[80px] md:right-[90px] lg:right-[160px]"
            style={{
              background: `linear-gradient(180deg, ${startColor}, ${endColor})`,
              borderTopLeftRadius: "45px",
              borderBottomLeftRadius: "45px",
              zIndex: 1,
            }}
          >
            <h3 className="text-base md:text-xl font-medium leading-tight pr-8 md:pr-16 pb-1 md:pb-4">{heading}</h3>
            <p className="text-xs md:text-sm mt-1 leading-tight pr-8 md:pr-16">
              <span className="md:hidden">{mobileContent}</span>
              <span className="hidden md:inline">{content}</span>
            </p>
          </motion.div>

          {/* Wrapper for the custom image shape (Now on the Right Side) */}
          <div className="absolute w-[120px] h-[100px] md:w-[175px] md:h-[150px] lg:w-[220px] lg:h-[155px] flex justify-center items-center z-10 right-0">
            {/* White border wrapper using the correct shape */}
            <div
              className="absolute w-full h-full bg-[#F2F2F5]"
              style={{
                clipPath: "polygon(45% -70%,96% 50%,50% 155%,0 50%)",
              }}
            ></div>

            {/* Image container with exact shape */}
            <motion.figure
              className="absolute w-[100px] h-[80px] md:w-[150px] md:h-[125px] lg:w-[180px] lg:h-[145px] overflow-hidden group"
              style={{
                clipPath: "polygon(50% -50%,100% 50%,50% 150%,0 50%)",
              }}
            >
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transform scale-0 
                            transition-all duration-700 origin-center rotate-45 group-hover:scale-[2]" />
            </motion.figure>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default AboutBanner;
