"use client";

import PricingCard from "./PricingCard";
import { motion } from "framer-motion";

import { FaPlaneDeparture, FaRocket, FaSpaceShuttle } from "react-icons/fa";

export default function PricingSection() {
    const pricingPlans = [
        {
          title: "Social Media Marketing",
          price: "$499.99",
          paymentType: "monthly",
          icon: "/SMM.gif",
          gradient: "bg-gradient-to-b from-purple-400 to-purple-700",
          features: [
            "30 <strong>Social Media Posts</strong> / Month",
            "Platform <strong>Management</strong> (3 Channels)",
            "<strong>Hashtag</strong> & Caption Strategy",
            "Monthly <strong>Performance Report</strong>",
            "Up to <strong>3 Major Revision</strong> Rounds <strong>+</strong> </br>Unlimited Minor Tweaks Thereafter",
            "Lifetime <strong>Support</strong>"
          ]
        },
        {
          title: "Branding Design",
          price: "$649.99",
          paymentType: "one-time",
          icon: "/branding.gif",
          gradient: "bg-gradient-to-b from-pink-400 to-pink-600",
          popular: true,
          features: [
            "Logo <strong>Design</strong> (3 Concepts)",
            "Business <strong>Card Design</strong>",
            "Brand <strong>Style Guide</strong>",
            "Social <strong>Media Kit</strong>",
            "Up to <strong>3 Major Revision</strong> Rounds <strong>+</strong> </br>Unlimited Minor Tweaks Thereafter",

            "Lifetime <strong>Support</strong>"
          ]
        },
        {
          title: "Website Design",
          price: "$749.99",
          paymentType: "one-time",
          icon: "/Web.gif",
          gradient: "bg-gradient-to-b from-purple-400 to-purple-700",
          features: [
            "3-Page <strong>Custom Website</strong>",
            "Mobile <strong>Responsive Design</strong>",
            "Basic <strong>Contact Form</strong>",
            "1 <strong>Revision Round</strong>",
            "1-Month <strong>Support</strong>"
          ]
        }
      ];
      
      

  return (
<section className="relative bg-[#f9f9f9] py-8 px-4 md:px-8 lg:px-16">
<div className="text-center mb-10 flex flex-col items-center">
  <motion.img
    src="/Pricing.svg"
    alt="Pricing"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="w-28 h-auto md:w-36 mb-4 select-none rotate-[355deg]"
  />
  <p className="text-[30px] md:text-[40px] lg:text-[50px] leading-[107%] font-bricolage font-bold text-[#341E61] mt-1 md:mt-1 select-none cursor-default">
    Choose The Plan <br />That Fits Your Needs
  </p>
</div>



      {/* Mobile Carousel (single card centered) */}
      <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        <div className="flex w-fit">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className="w-[85vw] flex-shrink-0 snap-center mx-2 first:ml-[7.5vw] last:mr-[7.5vw]"
            >
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-6 cursor-pointer">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
      {/* Decorative Background GIFs */}
<div className="pointer-events-none absolute top-4 md:top-20 xl:top-15 left-[10] md:left-4 xl:left-34 z-0 opacity-100">
  <img src="/decor1.gif" alt="decorative" className="w-12 h-16 md:w-24 md:h-32 xl:w-28 xl:h-36 2xl:w-32 2xl:h-42 rotate-330" />
</div>
<div className="pointer-events-none absolute top-10 right-4 md:right-16 lg:right-24 xl:right-48 z-0 opacity-100">
  <img src="/decor2.gif" alt="decorative" className="w-12 h-12 md:w-20 md:h-20 xl:w-28 xl:h-28" />
</div>
<div className="pointer-events-none absolute bottom-1 right-[40%] md:top-3/4 md:right-10 lg:right-25 xl:right-5 z-10 opacity-100 md:block hidden">
  <img src="/decor3.gif" alt="decorative" className="w-20 h-20  md:w-26 md:h-26 lg:w-32 lg:h-32" />
</div>

    </section>
  );
}