import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

// The main component that handles all variations
const CaseStudyContent = ({ 
  mainHeading,
  contents,
  className
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Animation variants
  const headingVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div ref={ref} className={`flex flex-col md:flex-row w-full py-6 ${className || ''}`}>
      {/* Main heading on the left with slide-in-from-left animation */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <motion.h2 
          className="text-2xl font-bold text-indigo-900"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          {mainHeading}
        </motion.h2>
      </div>
      
      {/* Content area on the right */}
      <div className="w-full md:w-2/3">
        {contents.map((content, index) => (
          <ContentBlock 
            key={index} 
            {...content} 
            delay={index * 0.15} // Stagger the animations
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  );
};

// Sub-component for individual content blocks
const ContentBlock = ({ 
  subHeading,
  text,
  image,
  additionalContents,
  delay,
  isInView
}) => {
  // Animation variants
  const subHeadingVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: delay 
      } 
    }
  };
  
  const textVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: delay + 0.1 
      } 
    }
  };
  
  const imageVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: delay + 0.2 
      } 
    }
  };

  return (
    <div className="mb-8 last:mb-0">
      {/* Optional subheading with slide-in-from-top animation */}
      {subHeading && (
        <motion.h3 
          className="text-xl font-semibold text-indigo-900 mb-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={subHeadingVariants}
        >
          {subHeading}
        </motion.h3>
      )}
      
      {/* Main text content with fade-in animation */}
      <motion.p 
        className="text-gray-600 mb-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariants}
      >
        {text}
      </motion.p>
      
      {/* Optional image with slide-in-from-bottom animation */}
      {image && (
        <motion.div 
          className="mt-4 rounded-lg overflow-hidden"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <img 
            src={image.src} 
            alt={image.alt || "Content illustration"} 
            className="w-full h-auto rounded"
          />
        </motion.div>
      )}
      
      {/* Handle nested additional contents if provided */}
      {additionalContents && additionalContents.map((content, nestedIndex) => (
        <AdditionalContent 
          key={nestedIndex} 
          {...content} 
          delay={delay + 0.3 + (nestedIndex * 0.15)} 
          isInView={isInView} 
        />
      ))}
    </div>
  );
};

// Separate component for additional nested content to handle its own animations
const AdditionalContent = ({
  subHeading,
  text,
  image,
  delay,
  isInView
}) => {
  // Animation variants for nested content
  const nestedHeadingVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: delay 
      } 
    }
  };
  
  const nestedTextVariants = {
    hidden: { y: -15, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: delay + 0.1 
      } 
    }
  };
  
  const nestedImageVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: delay + 0.2 
      } 
    }
  };

  return (
    <div className="mt-6">
      {subHeading && (
        <motion.h4 
          className="text-lg font-medium text-indigo-900 mb-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={nestedHeadingVariants}
        >
          {subHeading}
        </motion.h4>
      )}
      
      <motion.p 
        className="text-gray-600"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={nestedTextVariants}
      >
        {text}
      </motion.p>
      
      {image && (
        <motion.div 
          className="mt-4 rounded-lg overflow-hidden bg-indigo-900 p-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={nestedImageVariants}
        >
          <img 
            src={image.src} 
            alt={image.alt || "Content illustration"} 
            className="w-full h-auto rounded"
          />
        </motion.div>
      )}
    </div>
  );
};

export default CaseStudyContent;