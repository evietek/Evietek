"use client";

import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Import Bricolage Grotesque font
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["300", "400", "500", "700"],
});

export default function AboutContent() {
  // Animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 50 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.9 
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="relative container mx-auto px-4 py-4  ">
      <div className="max-w-2xl relative z-10">
        {/* Heading with Bricolage Grotesque and Updated Color */}
        <motion.h2 
          className={`text-3xl sm:text-4xl md:text-4xl font-bold leading-tight ${bricolage.variable} text-[#341E61]`}
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          Helping Brands Grow Better Since 2020
        </motion.h2>

        {/* Body text with Gilroy-Medium and Updated Color */}
        <motion.p 
          className="mt-4 text-base sm:text-lg md:text-lg leading-relaxed font-gilroy-medium text-[#341E61]"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          At Evietek, we specialize in crafting innovative digital solutions that drive growth, 
          enhance visibility, and build lasting connections for brands worldwide.
        </motion.p>

        {/* CTA Button with Updated Background Color */}
        <Link href="/book-a-meeting">
  <motion.button
    className="mt-4 sm:mt-6 flex items-center gap-2 bg-[#341E61] hover:bg-[#412876] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-base sm:text-lg md:text-base shadow-lg transition-all"
    variants={buttonVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.2 }}
    whileHover="hover"
  >
    <motion.div
      initial={{ rotate: 0 }}
      whileHover={{ rotate: [0, 15, -15, 0] }}
      transition={{ duration: 0.3 }}
    >
      <Image 
        src="/phone.svg" 
        alt="Phone" 
        width={20} 
        height={20} 
        className="mr-2"
      />
    </motion.div>
    Book a Meeting
  </motion.button>
</Link>
      </div>
    </section>
  );
}
