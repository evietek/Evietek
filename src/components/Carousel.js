"use client";

import { forwardRef, useImperativeHandle, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDribbble, FaBehance, FaInstagram } from "react-icons/fa";

const Carousel = forwardRef((props, ref) => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const currentTranslateRef = useRef(0);
  
  const portfolioItems = [
    { id: 1, src: "/Portfolio/img_1.png", alt: "Portfolio 1" },
    { id: 2, src: "/Portfolio/img_2.png", alt: "Portfolio 2" },
    { id: 3, src: "/Portfolio/img_3.png", alt: "Portfolio 3" },
    { id: 4, src: "/Portfolio/img_4.png", alt: "Portfolio 4" },
  ];

  // For duplicate items to create infinite effect
  const displayItems = [...portfolioItems, ...portfolioItems, ...portfolioItems];
  
  // Animation control
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationId;
    let startTime;
    
    // Slower speed - adjust this value to control speed (smaller = slower)
    const speed = 0.02; 
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      
      if (!isPaused) {
        // Move by small percentage for smooth movement
        currentTranslateRef.current -= speed;
        
        // If we've moved a full set width, reset position
        if (currentTranslateRef.current <= -100) {
          currentTranslateRef.current = 0;
        }
        
        scrollContainer.style.transform = `translateX(${currentTranslateRef.current}%)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  // Expose next/prev scroll functionality
  useImperativeHandle(ref, () => ({
    next: () => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer) return;
      
      // Move forward by approx one item width (25% of a set)
      currentTranslateRef.current -= 25;
      
      scrollContainer.style.transition = 'transform 0.3s ease';
      scrollContainer.style.transform = `translateX(${currentTranslateRef.current}%)`;
      
      setTimeout(() => {
        scrollContainer.style.transition = '';
      }, 300);
    },
    prev: () => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer) return;
      
      // Move backward by approx one item width (25% of a set)
      currentTranslateRef.current += 25;
      
      scrollContainer.style.transition = 'transform 0.3s ease';
      scrollContainer.style.transform = `translateX(${currentTranslateRef.current}%)`;
      
      setTimeout(() => {
        scrollContainer.style.transition = '';
      }, 300);
    },
  }));

  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 w-[300%]" 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredItem(null);
          }}
        >
          {displayItems.map((item, index) => (
            <div
              key={index}
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] shrink-0"
            >
              <motion.div
                className="bg-white shadow-lg rounded-2xl p-4 cursor-pointer relative overflow-hidden items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
                
                {hoveredItem === index && (
                  <motion.div 
                    className="absolute bottom-10 left-28 right-0 bg-white w-45 rounded-2xl shadow-lg px-4 py-2 mx-2 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-center space-x-4">
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                        aria-label="Dribbble"
                      >
                        <FaDribbble size={20} color="white" />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                        aria-label="Behance"
                      >
                        <FaBehance size={20} color="white" />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
                        aria-label="Instagram"
                      >
                        <FaInstagram size={20} color="white" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

Carousel.displayName = "Carousel";
export default Carousel;