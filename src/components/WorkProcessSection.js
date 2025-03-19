"use client";

import Banner from "./WorkProcessBanner";
import Heading from "./WorkProcessHeading";
import WorkProcessCard from "./WorkProcessCard";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkProcessSection() {
  // Animation Variants
  const bannerVariants = {
    hidden: { opacity: 0, x: 1000 }, // Start off-screen right
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  // Modified to handle mobile differently
  const cardVariants = {
    hidden: { opacity: 0, y: -160 }, // Start from above
    visible: (i) => ({
      opacity: 1,
      // No stagger effect on mobile, preserve it for larger screens
      y: window.innerWidth < 640 ? 0 : (i % 2 === 0 ? -20 : 20),
      transition: { duration: 0.8, ease: "easeOut", delay: i * 0.2 },
    }),
  };

  // Floating Animation for Cards
  const floatingAnimation = {
    y: [-5, 5, -5], // Moves up and down continuously
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <>
      {/* Banner Section with Slide-in Animation */}
      <motion.section 
        className="relative bg-[#030438] text-[#ffff] py-4 md:py-8 lg:pt-15 px-0 md:px-0 lg:px-0 pb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={bannerVariants}
      >
        <Banner />
      </motion.section>

      {/* Main Content Section */}
      <section className="relative bg-[#030438] text-[#ffff] py-4 md:py-10 lg:pt-12 px-4 md:px-10 lg:px-16 pb-4">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <Heading />
          <motion.h2
            className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] leading-[107%] font-bricolage font-bold text-[#F6F5FF] mt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headingVariants}
          >
            How We Can <br className="hidden sm:block" />
            Work Together
          </motion.h2>
        </div>

        {/* Work Process Cards - Modified for consistent mobile spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:flex xl:flex-row justify-center items-center gap-y-8 sm:gap-y-4 gap-x-8 mt-20 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 relative">
          {[
            {
              icon: "/Work_Process/1.svg",
              number: "1",
              title: "Brief/Short Details",
              description: "Come to us with a project brief or short project details that you have currently to give us an idea of your project or product.",
              rotation: 2.52,
              positionClass: " -translate-y-0  md:-translate-y-6 lg:-translate-y-8" // Added sm: prefix
            },
            {
              icon: "/Work_Process/2.svg",
              number: "2",
              title: "Questions",
              description: "After having the details from you, we'll ask questions related to your project to understand the project length and scope.",
              highlight: true,
              rotation: -2.69,
              positionClass: "translate-y-0 md:translate-y-6 lg:translate-y-8" // Added sm: prefix
            },
            {
              icon: "/Work_Process/3.svg",
              number: "3",
              title: "Providing Quote",
              description: "We will be providing you a quote for the project after having the answers from you and estimating the resources needed for your project.",
              rotation: -1.24,
              positionClass: "-translate-y-0 md:-translate-y-6 lg:-translate-y-8" // Added sm: prefix
            },
            {
              icon: "/Work_Process/4.svg",
              number: "4",
              title: "Get Started",
              description: "If the quote works for both of us, we can have a short meeting or we can directly jump into the process of getting started.",
              rotation: -0.48,
              positionClass: "translate-y-0 md:translate-y-6 lg:translate-y-8" // Added sm: prefix
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              className={`w-full flex justify-center mb-0 ${card.positionClass}`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {/* Floating Wrapper */}
              <motion.div animate={floatingAnimation}>
                <WorkProcessCard {...card} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-20">
          <Link href="/book-a-meeting" className="block">
            <button className="flex items-center gap-1.5 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold text-sm md:text-base lg:text-lg shadow-lg transition-all transform hover:scale-105">
              <Image src="/phone.svg" alt="Phone" width={20} height={20} />
              Book a Meeting
            </button>
          </Link>
          <button className="flex items-center gap-1.5 bg-[#3E2472] hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold text-sm md:text-base lg:text-lg shadow-lg transition-all transform hover:scale-105">
            <Image src="/phone.svg" alt="Phone" width={20} height={20} />+1 (647) 804 5528
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 left-0 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
          <Image src="/Work_Process/Laptop.svg" alt="Laptop" width={80} height={80} />
        </div>
        <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
          <Image src="/Work_Process/Star.svg" alt="Star" width={80} height={80} />
        </div>
      </section>
    </>
  );
}