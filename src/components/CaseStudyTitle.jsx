'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation Variants
const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } 
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } 
  }
};

const CaseStudyTitle = ({ title, description, imageLeft, imageRight }) => {
  return (
    <div className="flex flex-col max-w-6xl mx-auto mt-0">
      
      {/* Left-Aligned Heading & Description */}
      <motion.div 
        className="text-left items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headingVariants}
      >
        <h2 className="mt-2 md:mt-3 text-3xl md:text-5xl font-bricolage font-bold leading-tight text-[#341E61]">
          {title}
        </h2>
      </motion.div>

      {/* Left-Aligned Description */}
      {description && (
        <motion.p 
          className="mt-4 text-lg text-[#41335E] text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={paragraphVariants}
        >
          {description}
        </motion.p>
      )}

      {/* Images Section (Centered) */}
      <motion.div 
        className={`flex ${imageRight ? 'flex-row gap-8' : 'justify-center'} items-center mt-6 mx-auto px-4 max-w-6xl`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageVariants}
      >
        {/* Left Image */}
        {imageLeft && (
          <div className={`${imageRight ? 'w-[48%]' : 'w-full'} flex justify-center`}>
            <Image 
              src={imageLeft} 
              alt="Case Study Left Image" 
              width={500} 
              height={300} 
              className="max-w-full w-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Right Image (Only if both images exist) */}
        {imageRight && (
          <div className="w-[48%] flex justify-center">
            <Image 
              src={imageRight} 
              alt="Case Study Right Image" 
              width={500} 
              height={300} 
              className="max-w-full w-auto rounded-lg shadow-lg"
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CaseStudyTitle;
