"use client";

import { HiOutlineDocumentText } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function AboutBrandSection() {
      const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+12014713999";
  };
  return (
    <section className="bg-[#341E61] text-white lg:rounded-3xl w-full lg:max-w-[60rem] xl:max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-10">
      
      {/* Full-width Main Heading */}
      <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-center lg:text-left mx-auto lg:mx-0">
        We`re a brand identity studio based out of Northern California that designs killer brands that people love, and give old brands a refresh.
      </h2>

      {/* Two-column layout below heading */}
      <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
        {/* Left: Bullet Points */}
        <div className="flex-1 space-y-6">
          {[
            {
              title: "Innovation First",
              desc: "We embrace new ideas, bold thinking, and the latest technologies.",
            },
            {
              title: "Client-Centric",
              desc: "Your success is our success. We listen, understand, and adapt to your needs.",
            },
            {
              title: "Excellence in Execution",
              desc: "From pixel-perfect designs to flawless campaigns, we sweat every detail so you don’t have to.",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
<div className="w-10 h-10 bg-[#CB73FE] rounded-full flex items-center justify-center text-white text-3xl leading-none p-2">
  <HiOutlineDocumentText />
</div>

              <p className="text-base leading-relaxed">
                <strong>{item.title}:</strong> {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Supporting text and space for your buttons */}
        <div className="flex-1 space-y-6">
          <p className="text-white/90 text-base leading-relaxed">
            We believe in building partnerships based on trust, honesty, and clear communication.
          </p>

{/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-5 md:mt-10">
          {/* Book a Meeting Button */}
          <Link href="/book-a-meeting" className="block">
            <button
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
              className="group flex items-center gap-1 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] hover:opacity-90 text-white px-3 py-3 rounded-2xl font-semibold text-sm md:text-base shadow-lg transition-all transform hover:scale-105"
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

          {/* Call Button */}
          <button
            onClick={handleCall}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            className="group flex items-center gap-1 bg-[#F6F5FF] hover:opacity-90 text-[#030438] px-3 py-3 rounded-2xl font-semibold text-sm md:text-base shadow-lg transition-all transform hover:scale-105"
          >
            <div className="w-5 h-5">
<Image
  src="/Phone2.svg"
  alt="Phone"
  width={16}
  height={16}
  className={`w-full h-full  ${isHovered2 ? "animate-wiggle" : ""}`}
/>

            </div>
            +1 201 471 3999
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}
