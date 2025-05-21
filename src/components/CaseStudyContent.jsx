import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';

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

// Function to convert markdown-like text to formatted JSX
const formatText = (text) => {
  if (!text) return null;

  // Split by new line markers
  const paragraphs = text.split('\\n');

  // If there's only one paragraph, just handle bold formatting
  if (paragraphs.length === 1) {
    return formatBold(text);
  }

  // If there are multiple paragraphs, handle each one separately
  return paragraphs.map((paragraph, index) => {
    // Skip empty paragraphs but maintain the line break
    if (!paragraph.trim()) {
      return <br key={`br-${index}`} />;
    }

    return (
      <React.Fragment key={`p-${index}`}>
        {index > 0 && <br />}
        {formatBold(paragraph)}
      </React.Fragment>
    );
  });
};

// Function to handle bold text formatting
const formatBold = (text) => {
  // Handle bold text with **text** pattern
  const boldRegex = /\*\*(.*?)\*\*/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = boldRegex.exec(text)) !== null) {
    // Add text before the bold part
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add the bold part
    parts.push(<strong key={match.index}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }

  // Add the remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

// Sub-component for individual content blocks
const ContentBlock = ({
  subHeading,
  text,
  image,
  list,
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

  const listVariants = {
    hidden: { y: -15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: delay + 0.15
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

  // List item animation variants with staggered delays
  const listItemVariants = {
    hidden: { x: -15, opacity: 0 },
    visible: i => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: delay + 0.15 + (i * 0.05)
      }
    })
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
      {text && (
        <motion.p
          className="text-gray-600 mb-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
        >
          {formatText(text)}
        </motion.p>
      )}

      {/* List items with staggered animation */}
      {list && list.length > 0 && (
        <motion.ul
          className="list-disc pl-5 space-y-2 mb-4 text-gray-600"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={listVariants}
        >
          {list.map((item, i) => (
            <motion.li
              key={i}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={listItemVariants}
            >
              {formatText(item)}
            </motion.li>
          ))}
        </motion.ul>
      )}

      {/* Optional image with slide-in-from-bottom animation */}
      {image && (
        <motion.div
          className="mt-4 rounded-lg overflow-hidden"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <Image
            src={image.src}
            alt={image.alt || "Content illustration"}
            className="w-full h-auto rounded"
            width={image.width || 800}
            height={image.height || 600}
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
  list,
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

  const nestedListVariants = {
    hidden: { y: -15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: delay + 0.15
      }
    }
  };

  const nestedListItemVariants = {
    hidden: { x: -15, opacity: 0 },
    visible: i => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: delay + 0.15 + (i * 0.05)
      }
    })
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

      {text && (
        <motion.p
          className="text-gray-600 mb-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={nestedTextVariants}
        >
          {formatText(text)}
        </motion.p>
      )}

      {/* List items with staggered animation */}
      {list && list.length > 0 && (
        <motion.ul
          className="list-disc pl-5 space-y-2 mb-4 text-gray-600"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={nestedListVariants}
        >
          {list.map((item, i) => (
            <motion.li
              key={i}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={nestedListItemVariants}
            >
              {formatText(item)}
            </motion.li>
          ))}
        </motion.ul>
      )}

      {image && (
        <motion.div
          className="mt-4 rounded-lg overflow-hidden bg-indigo-900 p-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={nestedImageVariants}
        >
          <Image
            src={image.src}
            alt={image.alt || "Content illustration"}
            className="w-full h-auto rounded"
            width={image.width || 800}
            height={image.height || 600}
          />
        </motion.div>
      )}
    </div>
  );
};

export default CaseStudyContent;