"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"], // adjust weights as needed
});

export default function JoinUSSection() {
  // Animation variants for floating elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  // Animation variants for text
  const textAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for projects with combined slide and float effects
  const slideFromTopAndFloat = {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        y: {
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          times: [0, 0.5, 1],
          delay: 1,
        },
        opacity: { duration: 1.5, ease: "easeOut" },
      },
    },
  };

  const slideFromBottomAndFloat = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        y: {
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          times: [0, 0.5, 1],
          delay: 1,
        },
        opacity: { duration: 1.5, ease: "easeOut" },
      },
    },
  };

  const slideFromLeftAndFloat = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      y: [0, -10, 0],
      transition: {
        x: { duration: 1, ease: "easeOut" },
        y: {
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          times: [0, 0.5, 1],
          delay: 1,
        },
        opacity: { duration: 1.5, ease: "easeOut" },
      },
    },
  };

  const slideFromRightAndFloat = {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      y: [0, -10, 0],
      transition: {
        x: { duration: 1, ease: "easeOut" },
        y: {
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          times: [0, 0.5, 1],
          delay: 1,
        },
        opacity: { duration: 1.5, ease: "easeOut" },
      },
    },
  };

  // Rotating animation for stars with pulsing opacity
  const rotatingAnimation = {
    initial: { opacity: 0.1, rotate: 0 },
    animate: {
      opacity: [0.5, 0.7, 1, 1, 0.7, 0.5],
      rotate: 360,
      transition: {
        opacity: {
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          times: [0, 0.2, 0.5, 0.8, 1],
        },
        rotate: {
          duration: 8,
          ease: "linear",
          repeat: Infinity
        }
      },
    },
  };

  const [copied, setCopied] = useState(false);

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);


  return (
    <section className={`relative bg-[#030438] text-white flex flex-col items-center justify-between text-center px-6 md:px-12 md:py-10 overflow-hidden ${playfair.className}`}>
      {/* Background Grid SVG - Covers Full Width */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="absolute inset-0 w-full h-full opacity-50 pointer-events-none brightness-110 mix-blend-screen"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image href="/bg.svg" width="100%" height="100%" preserveAspectRatio="none" />
        </svg>
      </div>

      {/* Layered Background */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle, rgba(120,70,190,0.8) 25%, rgba(3,4,56,0.9) 70%, rgba(3,4,56,1) 100%)] pointer-events-none"></div>

      {/* Wider Purple Glow on X-Axis */}
      <div className="absolute inset-0 flex items-center justify-center -translate-y-6 md:-translate-y-8 xl:-translate-y-10">
        <div className="w-[90vw] h-[50vw] max-w-[1200px] max-h-[600px] bg-[#7A3DD7] opacity-35 rounded-full blur-[80px] md:blur-[100px] xl:blur-[120px]"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-full py-12 md:py-16 xl:py-20">
        {/* Heading */}
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            className="text-[35px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-[110%] font-bricolageGrotesque font-bold text-white select-none cursor-default"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={textAnimation}
          >
            Be a Part of Our <br />
            Creative & Digital <br />
            Evolution
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-gilroyRegular font-normal leading-[150%] text-center mt-6 max-w-3xl px-2 md:px-0 select-none cursor-default"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={textAnimation}
          >
            At Evietek, we`re not just another digital agency we`re pioneers in graphic design, web development, and digital marketing. Our mission? To transform ideas into powerful digital experiences that captivate, engage, and drive results. Whether you`re a creative designer, web development pro, or marketing strategist, you`ll find an inspiring space to innovate, grow, and make an impact. Looking for a team that values creativity, strategy, and cutting-edge digital solutions? Let`s shape the future of digital together!
          </motion.p>
        </div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={textAnimation}
        >
          <Link href="/book-a-meeting" className="block">
            <button
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
              className="flex items-center gap-2 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] hover:opacity-90 text-white px-5 py-2 md:px-6 md:py-3 rounded-2xl font-semibold text-sm md:text-base xl:text-lg shadow-lg transition-all transform hover:scale-105"
            >
              <Image
                src="/phone.svg"
                alt="Phone"
                width={18}
                height={18}
                className={`md:w-[20px] md:h-[20px] ${isHovered1 ? "animate-wiggle" : ""}`}
              />
              Book a Meeting
            </button>
          </Link>

          <div className="relative">
            <button
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
              onClick={() => {
                const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

                if (isMobile) {
                  window.location.href = "tel:+16478045528";
                } else {
                  navigator.clipboard.writeText("+1 (647) 804 5528");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }
              }}

              className="flex items-center gap-2 bg-[#ffff] hover:opacity-90 text-[#030438] px-5 py-2 md:px-6 md:py-3 rounded-2xl font-semibold text-sm md:text-base xl:text-lg shadow-lg transition-all transform hover:scale-105"
            >
              <Image
                src="/phone2.svg"
                alt="Phone"
                width={18}
                height={18}
                className={`md:w-[20px] md:h-[20px] ${isHovered2 ? "animate-wiggle" : ""}`}
              />
              +1 (647) 804 5528
            </button>

            {copied && (
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm text-green-500 font-medium whitespace-nowrap">
                Copied!
              </span>
            )}
          </div>
        </motion.div>

      </div>

      {/* Decorative Icons with continuous rotation and pulsing opacity */}
      <motion.div
        className="absolute bottom-38 right-10 md:bottom-40 md:right-25 lg:bottom-50 lg:right-20 xl:bottom-65 xl:right-70 w-8 h-8 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-15 lg:h-15 xl:w-20 xl:h-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={rotatingAnimation}
      >
        <Image src="/Join_Us/Star2.svg" alt="Star" width={30} height={30} className="w-10 h-10" />
      </motion.div>

      <motion.div
        className="absolute top-35 left-10 md:top-40 md:left-12  xl:top-50 xl:left-60 lg:top-50 lg:left-30 w-8 h-8 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-15 lg:h-15 xl:w-20 xl:h-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={rotatingAnimation}
      >
        <Image src="/Join_Us/Star.svg" alt="Star" width={30} height={30} className="w-10 h-10" />
      </motion.div>

      {/* Mobile corners (4 images) - Show on mobile, hide on md and up */}
      <motion.div
        className="block md:hidden absolute top-[-20] left-0 w-24 h-24"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={slideFromLeftAndFloat}
      >
        <Image src="/Join_Us/1.svg" alt="Project-1" width={150} height={150} className="w-full h-full" />
      </motion.div>

      <motion.div
        className="block md:hidden absolute bottom-0 right-0 w-24 h-24"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={slideFromBottomAndFloat}
      >
        <Image src="/Join_Us/3.svg" alt="Project-3" width={150} height={150} className="w-full h-full" />
      </motion.div>

      <motion.div
        className="block md:hidden absolute top-[-20] right-0 w-24 h-24"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={slideFromTopAndFloat}
      >
        <Image src="/Join_Us/5.svg" alt="Project-4" width={150} height={150} className="w-full h-full" />
      </motion.div>

      <motion.div
        className="block md:hidden absolute bottom-0 left-0 w-24 h-24"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={slideFromBottomAndFloat}
      >
        <Image src="/Join_Us/6.svg" alt="Project-6" width={150} height={150} className="w-full h-full" />
      </motion.div>

      {/* Desktop layout (all 6 images) - Only show on md and up */}
      <div className="hidden md:block">
        <motion.div
          className="absolute top-60 left-0 xl:top-65 xl:left-10 lg:top-70 lg:left-0 md:w-40 md:h-40  xl:w-60 xl:h-60"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={slideFromLeftAndFloat}
        >
          <Image src="/Join_Us/1.svg" alt="Project-1" width={200} height={200} className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 xl:top-[10] xl:left-10 lg:top-[20] lg:left-0 md:w-40 md:h-40  xl:w-60 xl:h-60"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={slideFromTopAndFloat}
        >
          <Image src="/Join_Us/2.svg" alt="Project-2" width={220} height={220} className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-0 right-0 xl:bottom-10 xl:right-10 lg:bottom-10 lg:right-0 md:w-40 md:h-40 xl:w-60 xl:h-60"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={slideFromBottomAndFloat}
        >
          <Image src="/Join_Us/3.svg" alt="Project-3" width={220} height={220} className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute top-0 right-0 xl:top-5 xl:right-10 lg:top-5 lg:right-0 md:w-40 md:h-40  xl:w-60 xl:h-60"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={slideFromTopAndFloat}
        >
          <Image src="/Join_Us/4.svg" alt="Project-4" width={220} height={220} className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute top-60 right-0 xl:top-65 xl:right-10 lg:top-70 lg:right-0 md:w-40 md:h-40  xl:w-60 xl:h-60"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={slideFromRightAndFloat}
        >
          <Image src="/Join_Us/5.svg" alt="Project-5" width={220} height={220} className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 xl:bottom-1 0 xl:left-10 lg:bottom-10 lg:left-0 md:w-40 md:h-40  xl:w-60 xl:h-60"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={slideFromBottomAndFloat}
        >
          <Image src="/Join_Us/6.svg" alt="Project-6" width={220} height={220} className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
}