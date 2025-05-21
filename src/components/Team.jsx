"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


export default function Team() {
      const [isHovered1, setIsHovered1] = useState(false);

  const teamMembers = [
    {
      name: "Christopher",
      title: "CEO & Founder, EvieTek",
      description: "EvieTek is one of the most powerful multi-vendor script",
      image: "/About_Us/Team/1.png",
    },
    {
      name: "Roberto",
      title: "CEO & Founder, EvieTek",
      description: "EvieTek is one of the most powerful multi-vendor script",
      image: "/About_Us/Team/2.png",
    },
    {
      name: "Ella Glenn",
      title: "CEO & Founder, EvieTek",
      description: "EvieTek is one of the most powerful multi-vendor script",
      image: "/About_Us/Team/3.png",
    },
  ];

  return (
    <section className="w-full lg:max-w-4xl xl:max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        {/* Tags */}
        <div className="relative flex justify-center items-center w-full mt-4 sm:mt-10">
          {/* Our */}
          <div className="relative z-10 -mt-6 -mr-3 rotate-[-5.54deg] bg-[#CB73FE] px-3 py-1.5 sm:px-4 sm:py-2 rounded-[12px]">
            <span className="font-extrabold text-white text-base sm:text-xl md:text-2xl lg:text-3xl">
              Our
            </span>
          </div>
          {/* Team */}
          <div className="relative z-0 rotate-[-4.57deg] bg-[#5E51FE] px-3 py-1.5 sm:px-4 sm:py-2 rounded-[12px]">
            <span className="font-extrabold text-white text-base sm:text-xl md:text-2xl lg:text-3xl">
              Team
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-[clamp(1.75rem,5vw,3.125rem)] leading-[1.15] font-bricolage font-bold text-[#341E61] mt-4 sm:mt-6 select-none cursor-default">
          The Amazing Team Behind<br className="hidden sm:block" />
          EvieTek
        </h2>
      </div>

{/* Team Members Cards */}
<div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
  {teamMembers.map((member, index) => (
    <div 
      key={index} 
      className="flex flex-col items-center w-full max-w-[20rem]  lg:max-w-sm bg-white rounded-3xl p-6 md:p-3 lg:p-6"
      style={{ boxShadow: '29px 66px 122.8px 0px rgba(204, 200, 238, 0.66)' }}
    >
      {/* Member Image */}
      <div className="rounded-full overflow-hidden w-20 h-20 lg:w-28 lg:h-28 mb-4">
        <Image
          src={member.image}
          alt={member.name}
          width={128}
          height={128}
          className="object-cover items-center"
        />
      </div>

      {/* Member Info */}
      <h3 className="text-[#341E61] text-xl lg:text-2xl font-bold mb-1 text-center">{member.name}</h3>
      <p className="text-[#341E61] text-sm lg:text-md mb-2 text-center">{member.title}</p>
      <p className="text-gray-600 text-sm lg:text-md text-center mb-4">{member.description}</p>
      
      {/* Book a Meeting Button */}
<Link href="/book-a-meeting" className="block">
            <button
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
              className="group flex items-center gap-1 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] hover:opacity-90 text-white px-3 py-2 rounded-2xl font-semibold text-sm md:text-base shadow-lg transition-all transform hover:scale-105"
            >
              <div className="w-5 h-5">
                <Image
                  src="/Phone.svg"
                  alt="Phone"
                  width={16}
                  height={16}
                  className={`w-full h-full ${isHovered1 ? "animate-wiggle" : ""}`}
                />
              </div>
              Book a Meeting
            </button>
          </Link>
    </div>
  ))}
</div>

    </section>
  );
}