"use client";

import FloatingBadge from "./FloatingBadge";
import ScrollIndicator from "./ScrollIndicator";
import DecorativeElements from "./DecorativeElements";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-[#030438] text-white h-[50vh] md:h-[80vh] flex flex-col items-center justify-between text-center px-6 md:px-12 pt-20 md:pt-8 pb-0 overflow-hidden">
      {/* Background Grid SVG - Covers Full Width */}
      <div className="absolute inset-0 w-full h-full">
        <svg className="absolute inset-0 w-full h-full opacity-50 pointer-events-none brightness-110 mix-blend-screen" xmlns="http://www.w3.org/2000/svg">
          <image href="/bg.svg" width="100%" height="100%" preserveAspectRatio="none" />
        </svg>
      </div>

      {/* Layered Background: Blue Bottom, Purple Center, Blue Edges */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle, rgba(120,70,190,0.8) 25%, rgba(3,4,56,0.9) 70%, rgba(3,4,56,1) 100%)] pointer-events-none"></div>

      {/* Wider Purple Glow on X-Axis */}
      <div className="absolute inset-0 flex items-center justify-center -translate-y-12">
        <div className="w-[90vw] h-[50vw] max-w-[1200px] max-h-[600px] bg-[#7A3DD7] opacity-35 rounded-full blur-[120px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Main Heading */}
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold leading-[0.8] font-vastagoLight">
            We Build <br />

            {/* Centering "E" SVG with "xperiences" */}
            <span className="text-white flex items-center justify-center gap-2">
              {/* E SVG Drops from Higher & Bounces */}
              <motion.div
                initial={{ y: -250, x: 0, opacity: 0 }}
                animate={{
                  y: [-250, 120, -20, 5, 0],
                  x: [0, 30, -15, 5, 0],
                  opacity: 1
                }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                whileHover={{ rotateY: 180 }}
                className="inline-block"
              >
                <Image src="/svgs/E.svg" alt="E" width={60} height={60} className="inline-block align-middle md:w-[100px] md:h-[100px]" />
              </motion.div>

              <span className="relative -mt-2 font-vastago-bold">xperiences</span>
            </span>

            <span>
              that{" "}
            </span>
            <motion.span
              className="relative inline-block ml-1"
              initial={{ rotate: 4, skewX: 6 }}
              whileHover={{ rotate: -4, skewX: -6 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <span className="absolute inset-0 bg-yellow-400 w-full h-full -z-10 transform skew-x-6 rotate-4 rounded-md"></span>
              
              <span className="relative inline-block px-1 py-1 text-black font-vastago-bold">
                Lasts
              </span>
            </motion.span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 md:mt-10 text-base md:text-lg max-w-2xl mx-auto opacity-90 font-vastago-light">
            We specialize in creating digital experiences that are as 
            intuitive as they are stunning. Stand out effortlessly.
          </p>
        </div>

        {/* Floating Badge Elements */}
        <FloatingBadge position="left" icon="/svgs/Design.svg" />
        <FloatingBadge position="right" icon="/svgs/Development.svg" />
      </div>

      {/* Decorative Elements */}
      <DecorativeElements />

      {/* Scroll Indicator - Now part of the content flow */}
      <div className="w-full flex justify-center py-0 animate-bounce-slow">
        <ScrollIndicator />
      </div>
    </section>
  );
}