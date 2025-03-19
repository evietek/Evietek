"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const KeyPointCard = ({ icon, title, description, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="group relative flex items-center gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 rounded-xl bg-white shadow-md overflow-hidden cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Gradient Fill Animation - Fills from Top on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] 
                      transform translate-y-[-100%] transition-transform duration-500 group-hover:translate-y-0">
      </div>

      {/* Content (Ensures Text & Icons Stay Above Gradient) */}
      <div className="relative z-10 flex items-center gap-3 sm:gap-4 md:gap-6">
        {/* Icon */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <Image
            src={icon}
            alt={title}
            width={75}
            height={75}
            className="w-full h-full transition-all duration-500 group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 group-hover:text-white transition-all duration-500">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white transition-all duration-500">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default KeyPointCard;
