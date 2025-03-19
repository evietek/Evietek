"use client";

import { motion } from "framer-motion";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-500 cursor-pointer 
                  ${isOpen ? "bg-gradient-to-br from-[#4D9FFF] to-[#8750F7] text-white" : "bg-white text-black shadow-md"}`}
      onClick={onClick}
    >
      {/* Question (Clickable Header) */}
      <div className="w-full flex justify-between items-center p-3 sm:p-4 md:p-5 px-4 sm:px-6 md:px-8 lg:px-12 text-sm sm:text-base md:text-lg font-semibold focus:outline-none relative">
        {question}

        {/* Simple Arrow Icons (Color Changes When Open) */}
        <motion.span
          initial={{ rotate: 0, color: "#4A5568" }}
          animate={{ rotate: isOpen ? 180 : 0, color: isOpen ? "#FFFFFF" : "#4A5568" }}
          transition={{ duration: 0.3 }}
          className="text-base sm:text-lg md:text-xl"
        >
          ▾
        </motion.span>
      </div>

      {/* Separator Line (Visible When Open) */}
      {isOpen && <div className="h-[1px] bg-white opacity-50 mx-4 sm:mx-6 md:mx-8 mb-3 sm:mb-4"></div>}

      {/* Answer (Expands/Collapses) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="px-4 sm:px-6 md:px-8 lg:px-12 pb-3 sm:pb-4"
      >
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">{answer}</p>
      </motion.div>
    </div>
  );
};

export default FAQItem;
