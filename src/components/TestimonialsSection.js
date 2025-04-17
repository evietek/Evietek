"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Aria K",
    title: "Professional and Attentive Team",
    review: "The team was professional and took the time to understand our unique needs, delivering solutions just for us.",
    link: "https://www.trustpilot.com/reviews/67f6b09c284f277bb7444ef6",
    date: "10/04/2025"
  },
  {
    name: "Bolt",
    title: "Perfect for Startups Needing Everything in One Place",
    review: "I was launching a new business and needed everything-logo, website, SEO. They handled it all and made my life so much easier.",
    link: "https://www.trustpilot.com/reviews/67d453b0d4e26444c894ffda",
    date: "13/03/2025"
  },
  {
    name: "Mateo",
    title: "There Was a Delay, But They Handled It Well",
    review: "Our project took a little longer than expected, but they were upfront about it and even included some free social media designs to apologize. Great customer service.",
    link: "https://www.trustpilot.com/reviews/67cc657f900c2b6374720ba7",
    date: "07/03/2025"
  },
  {
    name: "Deny K",
    title: "Affordable Solutions",
    review: "They offered options that fit our budget without lowering quality.",
    link: "https://www.trustpilot.com/reviews/68009ce8057ff7cd864cdade",
    date: "12/04/2025"
  },
  {
    name: "Baler F",
    title: "Improved Search Ranking",
    review: "Their knowledge boosted our website's position on search engines, bringing in more visitors.",
    link: "https://www.trustpilot.com/reviews/67f95765f0629f8326a41fea",
    date: "09/04/2025"
  },
];

export default function TestimonialsSection() {
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const tickerRef1 = useRef(null);
  const tickerRef2 = useRef(null);

  const position1 = useRef(0);
  const position2 = useRef(0);

  const animationRef1 = useRef(null);
  const animationRef2 = useRef(null);

  const [isPaused1, setIsPaused1] = useState(false);
  const [isPaused2, setIsPaused2] = useState(false);

  const [itemWidth1, setItemWidth1] = useState(0);
  const [itemWidth2, setItemWidth2] = useState(0);

  const [hasPlayedMagnet, setHasPlayedMagnet] = useState(false);

  const handleMagnetEnter = () => {
    if (!hasPlayedMagnet) {
      setHasPlayedMagnet(true);
      setTimeout(() => setHasPlayedMagnet(false), 1500);
    }
  };

  useEffect(() => {
    const initWidths = () => {
      if (tickerRef1.current && tickerRef2.current) {
        const firstItem1 = tickerRef1.current.querySelector(".ticker-item");
        const firstItem2 = tickerRef2.current.querySelector(".ticker-item");

        if (firstItem1 && firstItem2) {
          const width1 = firstItem1.offsetWidth;
          const width2 = firstItem2.offsetWidth;
          setItemWidth1(width1);
          setItemWidth2(width2);
          position2.current = -width2 * (duplicatedTestimonials.length - testimonials.length);
        }
      }
    };

    initWidths();
    window.addEventListener("resize", initWidths);
    return () => window.removeEventListener("resize", initWidths);
  }, []);

  const animate1 = () => {
    if (!isPaused1 && tickerRef1.current) {
      position1.current -= 1.5;
      if (position1.current <= -itemWidth1) {
        position1.current = 0;
      }
      tickerRef1.current.querySelector(".ticker-track").style.transform = `translateX(${position1.current}px)`;
    }
    animationRef1.current = requestAnimationFrame(animate1);
  };

  const animate2 = () => {
    if (!isPaused2 && tickerRef2.current) {
      position2.current += 1.5;
      if (position2.current >= 0) {
        position2.current = -itemWidth2;
      }
      tickerRef2.current.querySelector(".ticker-track").style.transform = `translateX(${position2.current}px)`;
    }
    animationRef2.current = requestAnimationFrame(animate2);
  };

  useEffect(() => {
    animationRef1.current = requestAnimationFrame(animate1);
    return () => cancelAnimationFrame(animationRef1.current);
  }, [isPaused1, itemWidth1]);

  useEffect(() => {
    animationRef2.current = requestAnimationFrame(animate2);
    return () => cancelAnimationFrame(animationRef2.current);
  }, [isPaused2, itemWidth2]);

  const createTickerItems = (items) =>
    items.map((t, idx) => (
      <div key={idx} className="ticker-item min-w-[300px] md:min-w-[320px] lg:min-w-[350px] mx-3">
        <TestimonialCard {...t} />
      </div>
    ));

  return (
    <section className="relative bg-[#FFFFFF] text-[#333] py-3 md:py-8 px-0 lg:pt-24 pb-0">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center rounded-[12px] mb-5 py-[5px] px-[15px] bg-[#5E51FE] rotate-[-5.5deg]">
          <span className="font-['Bricolage_Grotesque'] font-extrabold text-white text-xl md:text-2xl">
            Testimonials
          </span>
        </div>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-[45px] lg:text-[50px] xl:text-[50px] 2xl:text-[55px] leading-[107%] font-bricolage font-bold text-[#341E61]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        >
          What Are Customers <br className="hidden md:block" /> Saying About Us?
        </motion.h2>
      </div>

      {/* Carousel 1 */}
      <div className="max-w-full mx-auto mt-12 py-4 overflow-hidden">
        <div
          className="relative w-full"
          ref={tickerRef1}
          onMouseEnter={() => setIsPaused1(true)}
          onMouseLeave={() => setIsPaused1(false)}
        >
          <div className="ticker-track flex will-change-transform">{createTickerItems(duplicatedTestimonials)}</div>
        </div>
      </div>

      {/* Carousel 2 */}
      <div className="max-w-full mx-auto mt-4 py-4 overflow-hidden">
        <div
          className="relative w-full"
          ref={tickerRef2}
          onMouseEnter={() => setIsPaused2(true)}
          onMouseLeave={() => setIsPaused2(false)}
        >
          <div className="ticker-track flex will-change-transform">{createTickerItems(duplicatedTestimonials)}</div>
        </div>
      </div>

      {/* Trustpilot CTA */}
      <div className="flex justify-center mt-12 pb-4 md:pb-0">
        <motion.div
          className="text-center mt-2"
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
            <div className="flex items-center">
              <Image src="/trustpilot_logo.svg" alt="Trustpilot Star" width={20} height={20} />
              <span className="ml-2 text-green-500">Trustpilot Reviews</span>
            </div>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="#007f4e" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-35 right-2 md:right-15 lg:right-35 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
        <Image src="/Testimonials/Icon.svg" alt="Icon" width={80} height={80} />
      </div>

      <motion.div
        className="absolute top-5 left-3 md:top-40 lg:left-35 xl:top-20 2xl:top-40 md:left-15 w-12 h-12 sm:w-16 sm:h-16 lg:w-30 lg:h-30 xl:w-40 xl:h-40"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        onMouseEnter={handleMagnetEnter}
      >
        <motion.div animate={hasPlayedMagnet ? { rotate: -90 } : {}} transition={{ duration: 1.5, ease: "easeInOut" }}>
          <Image src="/Testimonials/Magnet.svg" alt="Magnet" width={160} height={160} />
        </motion.div>
      </motion.div>
    </section>
  );
}
