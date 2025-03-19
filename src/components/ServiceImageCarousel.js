"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);
  
  // Only show navigation if there's more than one image
  const showNavigation = images.length > 1;
  
  // Auto-advance the carousel if there are multiple images
  useEffect(() => {
    if (!showNavigation || isHovering || isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [images.length, showNavigation, isHovering, isDragging]);
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    const diff = startX - currentX;
    
    // Threshold for slide change - 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Dragged left - go to next slide
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else {
        // Dragged right - go to previous slide
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      }
      setIsDragging(false);
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovering(false);
  };
  
  return (
    <motion.div 
      ref={carouselRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-hidden rounded-xl border-2 sm:border-3 md:border-4 border-gray-200 shadow-lg sm:shadow-xl md:shadow-2xl bg-gray-900"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Image container */}
      <div className="relative h-[180px] sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[400px] w-full">
        <AnimatePresence mode="wait">
          {images.map((image, index) => (
            index === currentIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full h-full"
              >
                <img
                  src={image.src || image}
                  alt={image.alt || `Slide ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                  draggable="false"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      {showNavigation && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ServiceImageCarousel;