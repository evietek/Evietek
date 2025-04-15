"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useState } from "react";

import 'swiper/css';

import TestimonialCard from "./TestimonialCard"; // Import the card

const testimonials = [
  {
    name: "Aria K",
    title: "Professional and Attentive Team",
    review: "The team was professional and took the time to understand our unique needs, delivering solutions just for us.",
    link: "https://www.trustpilot.com/reviews/67f6b09c284f277bb7444ef6"
  },
  {
    name: "Bolt",
    title: "Perfect for Startups Needing Everything in One Place",
    review: "I was launching a new business and needed everything-logo, website, SEO. They handled it all and made my life so much easier.",
    link: "https://www.trustpilot.com/reviews/67d453b0d4e26444c894ffda"
  },
  {
    name: "Mateo",
    title: "There Was a Delay, But They Handled It Well",
    review: "Our project took a little longer than expected, but they were upfront about it and even included some free social media designs to apologize. Great customer service.",
    link: "https://www.trustpilot.com/reviews/67cc657f900c2b6374720ba7"
  },
];

export default function TestimonialsSection() {
  const [hasPlayedMagnet, setHasPlayedMagnet] = useState(false);

  const handleMagnetEnter = () => {
    if (!hasPlayedMagnet) {
      setHasPlayedMagnet(true);
      setTimeout(() => {
        setHasPlayedMagnet(false);
      }, 1500); // Match the rotation animation duration
    }
  };

  // Animation Variants

  const subHeadingVariants = {
    hidden: { opacity: 0, y: 50 }, // Slide from bottom
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.2 }
    }
  };

  const magnetVariants = {
    hidden: { opacity: 0, x: -100 }, // Slide from left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.3 }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 100 }, // Slide from right
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.4 }
    }
  };

  const floatingAnimation = {
    y: [-5, 5, -5], // Floating effect
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative bg-[#FFFFFF] text-[#333] py-3 md:py-8 px-4 md:px-8 lg:px-16 lg:pt-24 pb-0">
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center">
        {/* Testimonials Heading (Drops from Top) */}
        <div 
        className="flex items-center justify-center rounded-[12px] mb-5 py-[5px] px-[15px] bg-[#5E51FE] rotate-[-5.5deg]"
      >
        <span 
          className="font-['Bricolage_Grotesque'] font-extrabold text-white 
                    text-xl sm:text-xl md:text-2xl lg:text-3xl text-center"
        >
          Testimonials
        </span>
      </div>

        {/* Content Heading (Slides from Bottom) */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-[45px] lg:text-[50px] xl:text-[50px] 2xl:text-[55px] leading-[107%] font-bricolage font-bold text-[#341E61] mt-1 md:mt-1 select-none cursor-default"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={subHeadingVariants}
        >
          What Are Customers <br className="hidden md:block" /> Saying About Us?
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto mt-12 py-4">
        {/* Testimonial Cards Grid */}
        <div className="max-w-7xl mx-auto mt-12 px-4">
          {testimonials.length >= 3 ? (
            // Show Swiper Carousel for 3 or more testimonials (all screen sizes)
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              modules={[Autoplay]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1440: {
                  slidesPerView: 3
                }
              }}
              className="!flex !items-center !justify-center"
              loop={true} // Ensures the slides loop continuously
              centeredSlides={false}

            >
              {testimonials.map((t, idx) => (
                <SwiperSlide key={idx} className="flex justify-center">
                  <TestimonialCard
                    name={t.name}
                    title={t.title}
                    review={t.review}
                    link={t.link}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            // Show carousel only on mobile if there are 1 or 2 reviews
            <div className="sm:hidden flex justify-center">
              <Swiper
                spaceBetween={16}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                centeredSlides={true}
                className="!flex !items-center !justify-center"
              >
                {testimonials.map((t, idx) => (
                  <SwiperSlide key={idx} className="flex justify-center">
                    <TestimonialCard
                      name={t.name}
                      title={t.title}
                      review={t.review}
                      link={t.link}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {/* Show static grid for 1-2 reviews on tablet+ */}
          {testimonials.length < 3 && (
            <div className="hidden sm:flex justify-center">
              <div className="grid gap-6 sm:grid-cols-2">
                {testimonials.map((t, idx) => (
                  <TestimonialCard
                    key={idx}
                    name={t.name}
                    title={t.title}
                    review={t.review}
                    link={t.link}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Trustpilot Embedded Component */}
        <div className="flex justify-center mt-4 pb-4 md:pb-0">
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
                <Image
                  src="/trustpilot_logo.svg"
                  alt="Trustpilot Star"
                  width={20}
                  height={20}
                />
                <span className="ml-2 text-green-500">Trustpilot Reviews</span>              </div>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="#007f4e"
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
      </div>

      {/* Icon (Slides from Right + Floating) */}
      <motion.div
        className="absolute top-35 right-2 md:right-15 lg:right-35 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={iconVariants}
        animate={floatingAnimation} // Floating Effect
      >
        <Image src="/Testimonials/Icon.svg" alt="Icon" width={80} height={80} />
      </motion.div>

      {/* Magnet (Slides from Left + Rotates on Hover) */}
      <motion.div
        className="absolute top-5 left-3 md:top-40 lg:left-35 xl:top-20 2xl:top-40 md:left-15 w-12 h-12 sm:w-16 sm:h-16 lg:w-30 lg:h-30 xl:w-40 xl:h-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={magnetVariants}
        onMouseEnter={handleMagnetEnter}
      >
        <motion.div
          animate={hasPlayedMagnet ? { rotate: -90 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image src="/Testimonials/Magnet.svg" alt="Magnet" width={160} height={160} />
        </motion.div>
      </motion.div>
    </section>
  );
}