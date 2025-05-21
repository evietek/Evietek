"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function IndustriesServed() {

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+12014713999";
  };

return    (
    <section id="services" className="relative bg-[#F6F5FF] text-[#333]  pt-16 md:py-3 md:py-8 lg:pt-8 px-0 pb-0 lg:max-w-[60rem] xl:max-w-7xl rounded-3xl mx-auto">
            {/* Heading */}
            <div className="flex flex-col items-center text-center">
                          <div className="flex flex-col items-start text-left">
      <div 
        className="flex items-center justify-center rounded-[12px] lg:mt-5 py-[5px] px-[15px] bg-[#CB73FE] rotate-[-4.2deg]"
      >
        <span 
          className="font-bricolage font-extrabold text-white 
                    text-xl sm:text-xl md:text-2xl lg:text-3xl text-center"
        >
          Industries Served
        </span>
      </div>
                </div>

                <h2 className="text-[35px] md:text-[50px] leading-[107%] font-bricolage font-bold text-[#341E61] mt-1 md:mt-5 select-none cursor-default">
                    We Serve A Range <br /> of Customers
                </h2>
            </div>
           {/* Customer Segments */}
<div className="flex flex-wrap justify-center gap-6 mt-10 md:mt-16 text-center">
  {/* Card 1 */}
  <div className="flex flex-col items-center px-2">
    <div className="w-16 sm:w-20 h-16 sm:h-20 mb-4">
      <Image
        src="/Our_Services/Startups.svg" 
        alt="Startups Icon"
        width={64}
        height={64}
        className="w-full h-full object-contain"
      />
    </div>
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#341E61] mb-2">
      Startups
    </h3>
    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xs mx-auto">
      These findings help in understanding the gaps in the market & potential opportunities for improvement & innovation.
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center px-2">
    <div className="w-16 sm:w-20 h-16 sm:h-20 mb-4">
      <Image
        src="/Our_Services/Design_Team.svg"
        alt="Design Teams Icon"
        width={64}
        height={64}
        className="w-full h-full object-contain"
      />
    </div>
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#341E61] mb-2">
      Design Teams
    </h3>
    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xs mx-auto">
      These findings help in understanding the gaps in the market & potential opportunities for improvement & innovation.
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center px-2">
    <div className="w-16 sm:w-20 h-16 sm:h-20 mb-4">
      <Image
        src="/Our_Services/Global_Agencies.svg"
        alt="Global Agencies Icon"
        width={64}
        height={64}
        className="w-full h-full object-contain"
      />
    </div>
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#341E61] mb-2">
      Global Agencies
    </h3>
    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xs mx-auto">
      These findings help in understanding the gaps in the market & potential opportunities for improvement & innovation.
    </p>
  </div>
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
                  src="/Phone.svg"
                  alt="Phone"
                  width={20}
                  height={20}
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
            className="group flex items-center gap-1.5 bg-[#3E2472] hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold text-sm md:text-base lg:text-lg shadow-lg transition-all transform hover:scale-105"
          >
            <div className="w-7 h-7">
              <Image
                src="/Phone.svg"
                alt="Phone"
                width={20}
                height={20}
                className={`w-full h-full ${isHovered2 ? "animate-wiggle" : ""}`}
              />
            </div>
            +1 201 471 3999
          </button>
        </div>

            </section>
)
}