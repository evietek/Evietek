// "use client";

// import { forwardRef, useImperativeHandle, useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { FaDribbble } from "react-icons/fa";

// const Carousel = forwardRef((props, ref) => {
//   const scrollRef = useRef(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const currentTranslateRef = useRef(0);
  
//   const portfolioItems = [
//     { id: 1, src: "/Portfolio/img_1.png", alt: "Portfolio 1" },
//     { id: 2, src: "/Portfolio/img_2.png", alt: "Portfolio 2" },
//     { id: 3, src: "/Portfolio/img_3.png", alt: "Portfolio 3" },
//     { id: 4, src: "/Portfolio/img_4.png", alt: "Portfolio 4" },
//   ];

//   // For duplicate items to create infinite effect
//   const displayItems = [...portfolioItems, ...portfolioItems, ...portfolioItems, ...portfolioItems, ...portfolioItems];
  
//   // Animation control
//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;
    
//     let animationId;
//     let startTime;
    
//     // Slower speed - adjust this value to control speed (smaller = slower)
//     const speed = 0.02; 
    
//     const animate = (timestamp) => {
//       if (!startTime) startTime = timestamp;
      
//       if (!isPaused) {
//         // Move by small percentage for smooth movement
//         currentTranslateRef.current -= speed;
        
//         // If we've moved a full set width, reset position
//         if (currentTranslateRef.current <= -100) {
//           currentTranslateRef.current = 0;
//         }
        
//         scrollContainer.style.transform = `translateX(${currentTranslateRef.current}%)`;
//       }
      
//       animationId = requestAnimationFrame(animate);
//     };
    
//     animationId = requestAnimationFrame(animate);
    
//     return () => {
//       if (animationId) {
//         cancelAnimationFrame(animationId);
//       }
//     };
//   }, [isPaused]);

//   // Expose next/prev scroll functionality
//   useImperativeHandle(ref, () => ({
//     next: () => {
//       const scrollContainer = scrollRef.current;
//       if (!scrollContainer) return;
      
//       // Move forward by approx one item width (25% of a set)
//       currentTranslateRef.current -= 25;
      
//       scrollContainer.style.transition = 'transform 0.3s ease';
//       scrollContainer.style.transform = `translateX(${currentTranslateRef.current}%)`;
      
//       setTimeout(() => {
//         scrollContainer.style.transition = '';
//       }, 300);
//     },
//     prev: () => {
//       const scrollContainer = scrollRef.current;
//       if (!scrollContainer) return;
      
//       // Move backward by approx one item width (25% of a set)
//       currentTranslateRef.current += 25;
      
//       scrollContainer.style.transition = 'transform 0.3s ease';
//       scrollContainer.style.transform = `translateX(${currentTranslateRef.current}%)`;
      
//       setTimeout(() => {
//         scrollContainer.style.transition = '';
//       }, 300);
//     },
//   }));

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div className="w-full overflow-hidden">
//         <div
//           ref={scrollRef}
//           className="flex gap-4 w-[300%]" 
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => {
//             setIsPaused(false);
//             setHoveredItem(null);
//           }}
//         >
//           {displayItems.map((item, index) => (
//             <div
//               key={index}
//               className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] shrink-0"
//             >
//               <motion.div
//                 className="bg-white shadow-lg rounded-2xl p-4 cursor-pointer relative overflow-visible items-center"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//                 onMouseEnter={() => setHoveredItem(index)}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 <Image
//                   src={item.src}
//                   alt={item.alt}
//                   width={400}
//                   height={300}
//                   className="rounded-lg w-full h-auto"
//                 />
                
//                 {/* Positioned Dribbble icon - always visible and positioned at bottom center, half on image, half off */}
//                 <a 
//                   href="#" 
//                   className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center hover:bg-pink-600 transition-colors duration-300 border-4 border-white shadow-lg"
//                   aria-label="Dribbble"
//                 >
//                   <FaDribbble size={24} color="white" />
//                 </a>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// });

// Carousel.displayName = "Carousel";
// export default Carousel;















"use client";

import { forwardRef, useImperativeHandle, useRef, useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { FaDribbble } from "react-icons/fa";

const Carousel = forwardRef((props, ref) => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  
  // Motion value for tracking drag position
  const x = useMotionValue(0);
  const currentX = useRef(0);
  const animationControls = useRef(null);
  
  const portfolioItems = [
    { id: 1, src: "/Portfolio/img_1.png", alt: "Portfolio 1", link: "https://dribbble.com/project1" },
    { id: 2, src: "/Portfolio/img_2.png", alt: "Portfolio 2", link: "https://dribbble.com/project2" },
    { id: 3, src: "/Portfolio/img_3.png", alt: "Portfolio 3", link: "https://dribbble.com/project3" },
    { id: 4, src: "/Portfolio/img_4.png", alt: "Portfolio 4", link: "https://dribbble.com/project4" },
  ];

  // For duplicate items to create infinite effect
  const displayItems = [...portfolioItems, ...portfolioItems, ...portfolioItems, ...portfolioItems, ...portfolioItems];
  
  const itemWidth = 400; // Base width for calculations
  const containerWidth = portfolioItems.length * itemWidth;

  // Function to start or restart the auto-scroll
  const startAutoScroll = () => {
    if (isDragging || isPaused) return;
    
    // Stop any existing animation
    if (animationControls.current) {
      animationControls.current.stop();
    }
    
    // Get current position
    const currentPosition = x.get();
    
    // Calculate how much we need to move to complete one cycle
    // This avoids visual jump when resetting
    const targetPosition = currentPosition - containerWidth;
    
    animationControls.current = animate(x, targetPosition, {
      type: "tween",
      duration: 50, // Slower animation
      ease: "linear",
      onUpdate: (latest) => {
        currentX.current = latest;
        
        // If we've scrolled far enough, reset position without visual interruption
        // This creates the infinite scroll effect
        if (latest <= -containerWidth * 2) {
          x.set(latest + containerWidth);
          currentX.current = latest + containerWidth;
        }
      },
      onComplete: () => {
        // Restart animation when complete (shouldn't reach here with infinite scroll)
        startAutoScroll();
      }
    });
  };
  
  // Set up auto-scroll animation
  useEffect(() => {
    if (!isDragging && !isPaused) {
      startAutoScroll();
    } else if (animationControls.current) {
      animationControls.current.stop();
    }
    
    return () => {
      if (animationControls.current) {
        animationControls.current.stop();
      }
    };
  }, [isDragging, isPaused]);

  // Update the drag behavior
  const handleDragStart = () => {
    setIsDragging(true);
    setIsPaused(true);
  };

  const handleDragEnd = (_, info) => {
    setIsDragging(false);
    
    // Calculate the final position based on drag velocity
    const velocity = info.velocity.x;
    const endPosition = x.get() + velocity * 0.2;
    
    // Animate to the end position smoothly
    animate(x, endPosition, {
      type: "spring",
      stiffness: 100,
      damping: 20,
      onComplete: () => {
        currentX.current = x.get();
        // Resume auto-scroll with a small delay for smoother transition
        setTimeout(() => {
          setIsPaused(false);
        }, 100);
      }
    });
  };

  // Expose next/prev scroll functionality with smooth transitions
  useImperativeHandle(ref, () => ({
    next: () => {
      // Stop any current animation
      if (animationControls.current) {
        animationControls.current.stop();
      }
      
      // Temporarily pause auto-scroll
      setIsPaused(true);
      
      // Calculate how much to move (approx one item)
      const moveAmount = -itemWidth;
      const targetX = currentX.current + moveAmount;
      
      // Use spring animation for smooth movement
      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
        onComplete: () => {
          currentX.current = targetX;
          // Resume auto-scroll with a small delay
          setTimeout(() => {
            setIsPaused(false);
          }, 100);
        }
      });
    },
    prev: () => {
      // Stop any current animation
      if (animationControls.current) {
        animationControls.current.stop();
      }
      
      // Temporarily pause auto-scroll
      setIsPaused(true);
      
      // Calculate how much to move (approx one item)
      const moveAmount = itemWidth;
      const targetX = currentX.current + moveAmount;
      
      // Use spring animation for smooth movement
      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
        onComplete: () => {
          currentX.current = targetX;
          // Resume auto-scroll with a small delay
          setTimeout(() => {
            setIsPaused(false);
          }, 100);
        }
      });
    },
  }));

  return (
    <div className="relative w-full overflow-visible">
      <div className="w-full overflow-visible">
        <motion.div
          ref={scrollRef}
          className="flex gap-4 w-full cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -containerWidth * 3, right: containerWidth }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!isDragging) {
              setIsPaused(false);
            }
          }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        >
          {displayItems.map((item, index) => {
            // Calculate the original item index to get the correct link
            const originalItemIndex = index % portfolioItems.length;
            const originItem = portfolioItems[originalItemIndex];
            
            return (
              <div
                key={`${index}-${item.id}`}
                className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] shrink-0 relative"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.div
                  className="bg-white shadow-lg rounded-2xl p-0 cursor-pointer relative overflow-visible"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="rounded-lg w-full h-auto"
                    draggable={false}
                  />
                  
                  {/* Dribbble icon that appears on hover with dynamic link */}
                  {hoveredItem === index && (
                    <motion.a 
                      href={originItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      aria-label="View on Dribbble"
                      onClick={(e) => {
                        // Prevent click from triggering drag
                        e.stopPropagation();
                      }}
                    >
                      <div className="w-14 h-14 rounded-full bg-pink-500 flex items-center justify-center shadow-lg border-4 border-white">
                        <FaDribbble size={24} color="white" />
                      </div>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
});

Carousel.displayName = "Carousel";
export default Carousel;