'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Reviews = () => {
  useEffect(() => {
    // Load Trustpilot widget script
    const trustpilotScript = document.createElement('script');
    trustpilotScript.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    trustpilotScript.async = true;
    document.head.appendChild(trustpilotScript);

    return () => {
      // Cleanup script when component unmounts
      document.head.removeChild(trustpilotScript);
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
    
        
        
                
        {/* Trustpilot Review Collector Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="56278e9abfbbba0bdcd568bc"  // Updated template ID
          data-businessunit-id="67a19278db89fc000f83d82d"  // Updated business unit ID
          data-style-height="52px"
          data-style-width="100%"
        >
          <a href="https://www.trustpilot.com/review/evietek.com" target="_blank" rel="noopener">
            Trustpilot
          </a>
        </motion.div>

        {/* View All Reviews Link */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://www.trustpilot.com/review/evietek.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            View all reviews on Trustpilot
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews; 