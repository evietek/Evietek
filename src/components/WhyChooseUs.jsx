"use client";

import Image from "next/image";
import CountUp from "react-countup";


export default function WhyChooseUs() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        {/* Tags */}
        <div className="relative flex justify-center items-center w-full mt-4 sm:mt-10">
          {/* Why */}
          <div className="relative z-10 -mt-6 -mr-3 rotate-[-5.54deg] bg-[#5E51FE] px-3 py-1.5 sm:px-4 sm:py-2 rounded-[12px]">
            <span className="font-extrabold text-white text-base sm:text-xl md:text-2xl lg:text-3xl">
              Why
            </span>
          </div>
          {/* Choose Us */}
          <div className="relative z-0 rotate-[-4.57deg] bg-[#CB73FE] px-3 py-1.5 sm:px-4 sm:py-2 rounded-[12px]">
            <span className="font-extrabold text-white text-base sm:text-xl md:text-2xl lg:text-3xl">
              Choose Us
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-[clamp(1.75rem,5vw,3.125rem)] leading-[1.15] font-bricolage font-bold text-[#341E61] mt-4 sm:mt-6 select-none cursor-default">
          The Core Values That Drive <br className="hidden sm:block" />
          Everything We Do
        </h2>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-6 md:gap-8 mt-10 md:mt-16 text-left">
        {/* Card Template */}
        {[
          {
            icon: "/About_Us/Values/1.svg",
            title: "Proven Expertise",
            desc: "A team with years of experience across industries and platforms.",
          },
          {
            icon: "/About_Us/Values/2.svg",
            title: "Results-Driven",
            desc: "Strategies focused on measurable growth and success.",
          },
          {
            icon: "/About_Us/Values/3.svg",
            title: "Custom Solutions",
            desc: "No cookie-cutter approaches. Every project is uniquely crafted.",
          },
          {
            icon: "/About_Us/Values/4.svg",
            title: "Commitment",
            desc: "A team with years of experience across industries and platforms.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-[29px_66px_122.8px_rgba(204,200,238,0.66)] p-4 sm:p-6  lg:p-8 flex gap-3 sm:gap-4 items-center"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center">
              <Image src={card.icon} alt={card.title} width={64} height={64} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#341E61] mb-1">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Results Section */}
<div className="mt-20 text-center">
  <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-[#341E61] mb-10">
    Our Results Measured In Numbers
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-[20rem] md:max-w-5xl mx-auto">
    {[
      { number: 500, suffix: "+", label: "Happy Clients" },
      { number: 20, suffix: "M+", label: "Users Acquired" },
      { number: 250, suffix: "+", label: "Team Members" },
      { number: 3000, suffix: "+", label: "Projects Completed" },
    ].map((stat, index) => (
      <div
        key={index}
        className="bg-[#F6F5FF] rounded-2xl px-3 py-4 lg:px-6 lg:py-8 flex flex-col items-center justify-center"
      >
<h2 className="text-[clamp(1.25rem,3vw,2rem)] lg:text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[#341E61] mb-2">
          <CountUp end={stat.number} duration={2} enableScrollSpy scrollSpyOnce />{stat.suffix}
        </h2>
        <p className="text-sm lg:text-base  text-[#675B7E]">{stat.label}</p>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}
