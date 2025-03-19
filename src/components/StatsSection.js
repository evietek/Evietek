"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: 25, label: "Years Experience", icon: "/Why_Choose_Us/icon-why-choose-counter-1.svg" },
  { value: 15000, label: "Project Complete", icon: "/Why_Choose_Us/icon-why-choose-counter-2.svg" },
  { value: 16000, label: "Customer Happy", icon: "/Why_Choose_Us/icon-why-choose-counter-3.svg" },
  { value: 120, label: "Winning Awards", icon: "/Why_Choose_Us/icon-why-choose-counter-4.svg" },
];

const StatsSection = () => {
  return (
    <div className="mt-0 border-t border-gray-600 pt-4 sm:pt-4 xl:pt-2">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center text-white">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2">
              <Image 
                src={stat.icon} 
                alt={stat.label} 
                width={48} 
                height={48}
                className="w-full h-full"
              />
            </div>
            {/* Motion Animated Number */}
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <AnimatedCounter from={0} to={stat.value} />
            </motion.h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Animated Counter Component (Triggers When in Viewport)
const AnimatedCounter = ({ from, to }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Detects when number enters viewport
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let start = from;
    const increment = Math.ceil(to / 100); // Controls speed

    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20); // Adjust speed

    return () => clearInterval(timer);
  }, [isInView, from, to]);

  return <span ref={ref}>{count.toLocaleString()}</span>; // Formats numbers
};

export default StatsSection;
