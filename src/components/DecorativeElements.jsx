"use client";

import Image from "next/image";

export default function DecorativeElements() {
  return (
    <>
      {/* Left Spark (Blue, Rotates & Glows) */}
      <div 
        className="absolute left-[8%] bottom-[45%] sm:left-[5%] sm:bottom-[25%] md:left-[15%] md:bottom-[40%] lg:left-[10%] lg:bottom-[20%] xl:left-[15%] xl:bottom-[28%] animate-rotate-glow"
      >
        <Image 
          src="/svgs/Star2.svg" 
          alt="Decorative Left" 
          width={25} height={25}  // Decreased default size for mobile
          className="sm:w-[25px] sm:h-[25px] lg:w-[50px] lg:h-[50px]" // Larger sizes for bigger screens
        />
      </div>

      {/* Right Star (Yellow, Spins Slowly) */}
      <div className="absolute right-[10%] top-[15%] sm:right-[8%] sm:top-[18%] md:right-[12%] lg:right-[20%] lg:top-[25%] animate-spin-slow">
        <Image 
          src="/svgs/Star1.svg" 
          alt="Decorative Right" 
          width={25} height={25}  // Decreased default size for mobile
          className="sm:w-[25px] sm:h-[25px] lg:w-[50px] lg:h-[50px]" // Larger sizes for bigger screens
        />
      </div>
    </>
  );
}
