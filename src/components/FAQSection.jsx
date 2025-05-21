'use client';

import { useState, useRef, useEffect } from "react";

const faqData = [
  {
    question: "How does Evietek maintain the security of my app?",
    answer: "We conduct thorough code reviews, testing procedures, security audits, vulnerability assessments, and continuous monitoring to maintain the highest security standards."
  },
  {
    question: "What is the minimum cost to build a mobile app?",
    answer: "The cost of building a mobile app varies widely depending on complexity, features, and platforms. Our basic mobile app development packages start at $15,000, but we recommend scheduling a consultation for a personalized quote based on your specific requirements."
  },
  {
    question: "How do Evietek stay updated on industry's latest trends?",
    answer: "Our team regularly participates in professional development programs, attends industry conferences, subscribes to leading tech publications, and engages in continuous learning to stay ahead of emerging technologies and best practices."
  },
  {
    question: "What makes us different from other software companies?",
    answer: "Our unique approach combines technical excellence with deep industry knowledge, agile methodologies, transparent communication, and dedicated project teams. We focus on building long-term partnerships rather than just delivering a product."
  },
  {
    question: "How to contact Evietel to get their services?",
    answer: "You can reach us through our contact form on the website, email us at info@evietek.com, call our support line at +1 201 471 3999, or schedule a consultation through our online booking system."
  },
  {
    question: "What services does Your Company offer?",
    answer: "We offer a comprehensive range of services including mobile app development, web app development, UI/UX design, chatbot development, NFT marketplace development, chrome extension development, and various industry-specific solutions."
  }
];

// Split the FAQ data into two columns
const leftColumnFAQs = faqData.filter((_, index) => index % 2 === 0);
const rightColumnFAQs = faqData.filter((_, index) => index % 2 === 1);

// Individual FAQ Item component to avoid re-rendering issues
const AccordionItem = ({ faq, isOpen, onToggle, itemIndex, columnType }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    if (contentRef.current) {
      // Set the actual height of the content when open
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`border bg-[#F6F5FF] rounded-lg overflow-hidden mb-6 hover:shadow-lg hover:shadow-[#CCC8EE] transition-all duration-300 ease-in-out ${isOpen ? 'border-[#5E51FE]' : 'border-gray-200'}`}
    >
      <div
        className="flex justify-between items-center p-5 cursor-pointer"
        onClick={() => onToggle(itemIndex)}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${columnType}-${itemIndex}`}
      >
        <h3 className="font-medium text-[#030438]">{faq.question}</h3>
        <button 
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-[#5E51FE] border border-[#5E51FE] transition-transform duration-300"
          aria-label={isOpen ? "Close accordion" : "Open accordion"}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-opacity duration-300">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-opacity duration-300">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </button>
      </div>
      
      {/* Smooth animated content container */}
      <div 
        id={`accordion-content-${columnType}-${itemIndex}`}
        ref={contentRef}
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ 
          height: `${height}px`,
          opacity: isOpen ? 1 : 0,
          visibility: height === 0 ? 'hidden' : 'visible',
        }}
      >
        <div className="px-5 pb-5">
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

// Column component to encapsulate each column's state
const AccordionColumn = ({ faqs, columnType }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="md:w-1/2">
      <div className="e-n-accordion" aria-label="Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            faq={faq}
            isOpen={activeIndex === index}
            onToggle={handleToggle}
            itemIndex={index}
            columnType={columnType}
          />
        ))}
      </div>
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="bg-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center rounded-[12px] mb-5 py-[5px] px-[15px] bg-[#5E51FE] rotate-[-5.5deg]">
          <span className="font-['Bricolage_Grotesque'] font-extrabold text-white text-xl md:text-2xl">
            FAQs
          </span>
        </div>
        </div>
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] leading-[107%] font-bricolage font-bold text-[#341E61] mb-12 select-none cursor-default text-center">
          Frequently <br/>Asked Questions
        </h2>

        <div className="md:flex md:space-x-6">
          {/* Left Column */}
          <AccordionColumn 
            faqs={leftColumnFAQs} 
            columnType="left" 
          />
          
          {/* Right Column */}
          <AccordionColumn 
            faqs={rightColumnFAQs} 
            columnType="right" 
          />
        </div>
      </div>
    </section>
  );
}