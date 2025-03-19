"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import KeyPointCard from "./KeyPointCard";
import StatsSection from "./StatsSection";

const keyPoints = [
  {
    icon: "/Why_Choose_Us/icon-why-choose-1.svg",
    title: "Expertise & Innovation",
    description: "A team of experienced digital specialists delivering cutting-edge solutions tailored for success.",
  },
  {
    icon: "/Why_Choose_Us/icon-why-choose-2.svg",
    title: "Strategic & Proactive Approach",
    description: "We anticipate challenges and implement forward-thinking solutions to keep your brand ahead of the curve.",
  },
  {
    icon: "/Why_Choose_Us/icon-why-choose-3.svg",
    title: "Customized Digital Strategies",
    description: "Personalized solutions designed to enhance visibility, drive engagement, and foster long-term growth.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-8 sm:py-12 md:py-8 px-4 sm:px-6 md:px-8 lg:px-24 bg-[#0B0F2F] text-white">
      <div className="container mx-auto max-w-[90%] xl:max-w-[85%] 2xl:max-w-[80%]">
        {/* Flex Container for Image and Text */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          
          {/* Left Side - Image with Slide-in Effect */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative group"
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/Why_Choose_Us/1.jpg"
                alt="Why Choose Us"
                width={400}
                height={300}
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] object-cover rounded-lg"
              />
              {/* White Overlay Effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transform scale-0 
                              transition-all duration-700 origin-center rotate-45 group-hover:scale-[2]">
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text + Cards */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xs sm:text-sm uppercase tracking-widest text-[#CB73FE] mb-2"
            >
              Why Choose Us
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 leading-snug"
            >
              Innovative solutions for <br /> digital excellence.
            </motion.h2>

            {/* Key Points - Slide in from Right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              {keyPoints.map((point, index) => (
                <KeyPointCard key={index} {...point} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section - Slide in from Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-0 sm:mt-0 pt-6 sm:pt-8 xl:mt-0 xl:pt-4"
        >
          <StatsSection />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
