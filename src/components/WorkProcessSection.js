"use client";

import Banner from "./WorkProcessBanner";
import WorkProcessCard from "./WorkProcessCard";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WorkProcessSection() {
  // Floating Animation for Cards - reduced amplitude
  const floatingAnimation = {
    y: [-3, 3, -3], // Reduced movement to prevent overflow
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const [copied, setCopied] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleCopy = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

    if (isMobile) {
      window.location.href = "tel:+16478045528";
    } else {
      navigator.clipboard.writeText("+1 (647) 804 5528");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
    }
  };

  return (
    <>
      {/* Banner Section */}
      <section className="relative bg-[#030438] text-[#ffff] py-4 md:py-8 lg:pt-15 px-0 md:px-0 lg:px-0 pb-0 overflow-hidden">
        <Banner />
      </section>

      {/* Main Content Section */}
      <section className="relative bg-[#030438] text-[#ffff] py-4 md:py-10 lg:pt-12 px-4 md:px-10 lg:px-16 pb-4 overflow-hidden">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
        <div className="relative flex justify-center items-center w-full mt-10">
      {/* Work Text */}
      <div className="relative z-10 -mt-10 -mr-3">
        <div 
          className="flex items-center justify-center"
          style={{
            backgroundColor: "#5E51FE",
            borderRadius: "12px",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "15px",
            paddingRight: "15px",
            width: "fit-content",
            height: "Hug (52px)",
            transform: "rotate(-5.54deg)"
          }}
        >
          <span 
            className="font-['Bricolage_Grotesque'] font-extrabold text-white text-xl sm:text-xl md:text-2xl lg:text-3xl"
          >
            Work
          </span>
        </div>
      </div>

      {/* Process Text */}
      <div className="relative  z-0">
        <div 
          className="flex items-center justify-center"
          style={{
            backgroundColor: "#CB73FE",
            borderRadius: "12px",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "15px",
            paddingRight: "15px",
            width: "fit-content",
            height: "Hug (52px)",
            transform: "rotate(-4.57deg)"
          }}
        >
          <span 
            className="font-['Bricolage_Grotesque'] font-extrabold text-white text-xl sm:text-xl md:text-2xl lg:text-3xl"
          >
            Process
          </span>
        </div>
      </div>
    </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] leading-[107%] font-bricolage font-bold text-[#F6F5FF] mt-2 select-none cursor-default">
            How We Can <br className="hidden sm:block" />
            Work Together
          </h2>
        </div>

        {/* Work Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:flex xl:flex-row justify-center items-center gap-y-5 sm:gap-y-8 md:gap-y-20 lg:gap-y-12 gap-x-8 mt-20 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 relative">
          {[
            {
              icon: "/Work_Process/1.svg",
              iconHover: "/Work_Process/1a.svg",
              number: "1",
              title: "Brief/Short Details",
              description: "Tell us about your project whether it's a brief or just an idea so we can understand your goals and bring them to life.",
              rotation: 2.52,
              positionClass: " -translate-y-0  md:-translate-y-6 lg:-translate-y-8"
            },
            {
              icon: "/Work_Process/2.svg",
              iconHover: "/Work_Process/2a.svg",
              number: "2",
              title: "Questions",
              description: "We'll ask relevant questions to clarify your project's scope, ensuring we're aligned on expectations and can create the best plan for your needs.",
              highlight: true,
              rotation: -2.69,
              positionClass: "translate-y-0 md:translate-y-6 lg:translate-y-8"
            },
            {
              icon: "/Work_Process/3.svg",
              iconHover: "/Work_Process/3a.svg",
              number: "3",
              title: "Providing Quote",
              description: "Once we understand the details, we'll provide a transparent quote no surprises, just an honest estimate based on your project's requirements and scope.",
              rotation: -1.24,
              positionClass: "-translate-y-0 md:-translate-y-6 lg:-translate-y-8"
            },
            {
              icon: "/Work_Process/4.svg",
              iconHover: "/Work_Process/4a.svg",
              number: "4",
              title: "Get Started",
              description: "If everything looks great, we can have a quick chat or jump right in and start working on bringing your vision to reality.",
              rotation: -0.48,
              positionClass: "translate-y-0 md:translate-y-6 lg:translate-y-8"
            }
          ].map((card, index) => (
            <div
              key={index}
              className={`w-full flex justify-center mb-0 ${card.positionClass}`}
            >
              {/* Floating Wrapper */}
              <motion.div animate={floatingAnimation}>
                <WorkProcessCard {...card} />
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-5 md:mt-20">
          {/* Book a Meeting Button */}
          <Link href="/book-a-meeting" className="block">
            <button
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
              className="group flex items-center gap-1.5 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold text-sm md:text-base lg:text-lg shadow-lg transition-all transform hover:scale-105"
            >
              <div className="w-7 h-7">
                <Image
                  src="/phone.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                  className={`w-full h-full ${isHovered1 ? "animate-wiggle" : ""}`}
                />
              </div>
              Book a Meeting
            </button>
          </Link>

          {/* Copy Phone Button */}
          <div className="relative">
            <button
              onClick={handleCopy}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
              className="group flex items-center gap-1.5 bg-[#3E2472] hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold text-sm md:text-base lg:text-lg shadow-lg transition-all transform hover:scale-105"
            >
              <div className="w-7 h-7">
                <Image
                  src="/phone.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                  className={`w-full h-full ${isHovered2 ? "animate-wiggle" : ""}`}
                />
              </div>
              +1 (647) 804 5528
            </button>

            {copied && (
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm text-green-400 font-medium whitespace-nowrap">
                Copied!
              </span>
            )}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 left-0 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
          <Image src="/Work_Process/Laptop.svg" alt="Laptop" width={80} height={80} />
        </div>
        <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
          <Image src="/Work_Process/Star.svg" alt="Star" width={80} height={80} />
        </div>
      </section>
    </>
  );
}