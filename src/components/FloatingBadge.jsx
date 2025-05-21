"use client";

import { useState } from "react";
import Image from "next/image";

export default function FloatingBadge({ position, icon }) {
  const [isHovered, setIsHovered] = useState(false);

  const floatAnimation =
    position === "left" ? "animate-float-left" : "animate-float-right";

    const positionClasses =
    position === "left"
      ? "absolute top-[8%] left-[5%] sm:top-[10%] sm:left-[6%] md:top-[12%] md:left-[8%] lg:top-[10%] lg:left-[5%] xl:top-[24%] xl:left-[10%]"
      : "absolute bottom-[10%] right-[5%] sm:bottom-[35%] sm:right-[8%] md:bottom-[45%] md:right-[2%] lg:bottom-[5%] lg:right-[5%] xl:bottom-[30%] xl:right-[5%]";
  
  

  return (
<div
  id={icon}
  className={`${positionClasses} relative transition-all duration-1000 ${floatAnimation}`}
>
  {/* Invisible hover zone – covers full badge area */}
  {position === "left" && (
    <div 
      className="
        hidden lg:block 
        absolute inset-0 
        z-20 
        cursor-pointer
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  )}

  {/* Actual image + hover effect */}
  <div 
    className="relative z-10"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div
      className={`
        w-[90px] h-[45px] 
        sm:w-[150px] sm:h-[75px] 
        md:w-[160px] md:h-[80px] 
        lg:w-[240px] lg:h-[120px] 
        xl:w-[220px] xl:h-[110px] 
        transition-all duration-1000 
        ${isHovered ? "scale-110 animate-buzz" : ""}
        relative cursor-pointer
      `}
    >
      <Image
        src={icon}
        alt={position === "left" ? "Design" : "Development"}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100px , (max-width: 1200px) 160px, 220px"
      />

      {/* Glowing blur effect */}
      <div
        className={`
          absolute inset-0 
          opacity-40 blur-xl 
          -z-10 bg-purple-700 
          rounded-full 
          pointer-events-none 
          transition-transform 
          duration-1000 
          ${isHovered ? "scale-125 translate-x-2 translate-y-2" : "scale-100"}
        `}
      />
    </div>
  </div>
</div>

  );
}