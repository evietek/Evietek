"use client";

import { motion } from "framer-motion";

export default function WorkProcessBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#8D4BF7] to-[#C98CF8] transform -rotate-2">
      <motion.div
        className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 whitespace-nowrap py-1 sm:py-1.5 md:py-2 text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {/* Duplicated list multiple times to ensure continuous scrolling */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10">
            <span>UX/UI Design</span>
            <span>-</span>
            <span>Web Development</span>
            <span>-</span>
            <span className="hidden xs:inline">Landing Page Design</span>
            <span className="hidden xs:inline">-</span>
            <span>Graphic Design</span>
            <span>-</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}