"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";

const ServiceFAQ = ({ faqs, className = "w-full md:w-1/2" }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`${className} space-y-3 sm:space-y-4 lg:space-y-5`}
    >
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <FAQItem
            {...faq}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceFAQ; 