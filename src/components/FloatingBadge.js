"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';

export default function FloatingBadge({ position, icon }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Restored Floating Animation
  const floatAnimation = position === "left" ? "animate-float-left" : "animate-float-right";

  const positionClasses = position === "left"
    ? "absolute left-[6%] top-[10%] sm:left-[6%] sm:top-[10%] md:left-[8%] md:top-[12%] lg:left-[10%] lg:top-[20%] xl:left-[10%] xl:top-[24%]" // Adjust these values to change the position of the design badge
    : "absolute right-[5%] bottom-[0%] sm:right-[8%] sm:bottom-[35%] md:right-[2%] md:bottom-[45%] lg:right-[10%] lg:bottom-[10%] xl:right-[5%] xl:bottom-[30%]"; // Adjust these values to change the position of the development badge

  return (
    <div
      id={icon}
      className={`${positionClasses} transition-all duration-1000 ${floatAnimation} ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative transform transition-all duration-1000 ${isHovered ? 'scale-110 animate-buzz' : ''}`}>
        {/* The badge image */}
        <Image
          src={icon}
          alt={position === "left" ? "Design" : "Development"}
          width={position === "right" ? 110 : 90}
          height={position === "right" ? 55 : 45}
          className="object-contain cursor-pointer sm:w-[150px] sm:h-[75px] md:w-[160px] md:h-[80px] lg:w-[220px] lg:h-[110px]"
        />

        {/* Improved Shadow Effect for better alignment */}
        <div 
          className={`absolute inset-0 opacity-40 blur-xl -z-10 bg-purple-700 rounded-full transition-transform duration-1000 ${
            isHovered ? 'scale-125 translate-x-2 translate-y-2' : 'scale-100'
          }`}
        ></div>
      </div>
    </div>
  );
}

