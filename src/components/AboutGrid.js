"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutGrid() {
  // More dynamic animation variants
  const imageVariants = {
    initial: (index) => ({
      opacity: 0,
      scale: 0.8,
      rotateY: 90,
      rotateX: index % 2 === 0 ? 10 : -5,
    }),
    animate: (index) => ({
      opacity: 1,
      scale: 1,
      rotateX: (index === 0 || index === 1) ? 10 : -5,
      rotateY: (index === 0 || index === 2) ? 25 : -25,
      transition: { 
        duration: 0.8, 
        ease: "easeInOut",
        delay: index * 0.2
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transition: { 
        duration: 0.3 
      }
    }
  };

  // Sticker animation with more dynamic movement
  const stickerVariants = {
    initial: {
      opacity: 0,
      scale: 0.3,
      rotate: -90
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    // Wrapper to scale the grid ONLY on desktop screens
    <div className="transition-transform duration-300 lg:scale-120 xl:scale-135 pr-0">

      <div className="relative w-full max-w-5xl mx-0 my-6 sm:my-8 md:my-10">
        {/* Top Row */}
        <div className="flex justify-center gap-1 sm:gap-2 md:gap-3">
          {[{ src: "/About/AboutImg1.png", alt: "Growth Chart", bgColor: "#B8E0F7" },
            { src: "/About/AboutImg2.png", alt: "Person in Yellow", bgColor: "#C5E8F9" }
          ].map((img, index) => (
            <motion.div 
              key={img.src}
              className="relative"
              style={{ perspective: "1000px" }}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <motion.div
                className="relative h-28 w-40 sm:h-32 sm:w-44 md:h-36 md:w-48 rounded-3xl overflow-hidden shadow-lg"
                style={{
                  backgroundColor: img.bgColor,
                  transformOrigin: index % 2 === 0 ? "bottom right" : "bottom left",
                  borderRadius: "40px",
                }}
                variants={imageVariants}
                custom={index}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex justify-center gap-1 sm:gap-2 md:gap-3 mt-2 sm:mt-3 md:mt-4">
          {[{ src: "/About/AboutImg3.png", alt: "Person Working", bgColor: "#B8E0F7" },
            { src: "/About/AboutImg4.png", alt: "People with Laptop", bgColor: "#FFC107" }
          ].map((img, index) => (
            <motion.div 
              key={img.src}
              className="relative"
              style={{ perspective: "1000px" }}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              custom={index + 2}
            >
              <motion.div
                className="relative h-28 w-40 sm:h-32 sm:w-44 md:h-36 md:w-48 rounded-3xl overflow-hidden shadow-lg"
                style={{
                  backgroundColor: img.bgColor,
                  transformOrigin: index % 2 === 0 ? "top right" : "top left",
                  borderRadius: "40px",
                }}
                variants={imageVariants}
                custom={index + 2}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Animated Stickers with Responsive Positioning */}
        <motion.div
          className="absolute z-10 top-[33%] left-[38%] sm:top-[35%] sm:left-[40%] md:top-[33%] md:left-[35%] lg:top-[33%] lg:left-[40%]"
          initial="initial"
          whileInView="animate"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
          variants={stickerVariants}
        >
          <Image src="/About/Sticker1.svg" alt="Hand Gesture" width={70} height={70} className="sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]" />
        </motion.div>

        <motion.div 
          className="absolute z-10 bottom-[-40px] left-[-15px] sm:bottom-[-60px] sm:left-[50px] md:bottom-[-70px] md:left-[-50px] lg:bottom-[-60px] lg:left-[60px]"
          initial="initial"
          whileInView="animate"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
          variants={stickerVariants}
        >
          <Image src="/About/Sticker2.svg" alt="Star Decoration" width={90} height={90} className="sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[100px] lg-h-[100px]" />
        </motion.div>
      </div>
    </div>
  );
}
