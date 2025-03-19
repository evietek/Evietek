"use client";

import Image from "next/image";

export default function DecorativeElements() {
  return (
    <>
      {/* Left Spark (Blue, Rotates & Glows) */}
      <div 
        className="absolute left-[3%] bottom-[35%] sm:left-[5%] sm:bottom-[25%] md:left-[15%] md:bottom-[28%] animate-rotate-glow"
      >
        <Image 
          src="/svgs/Star2.svg" 
          alt="Decorative Left" 
          width={30} height={30}  // Decreased default size for mobile
          className="sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px]" // Larger sizes for bigger screens
        />
      </div>

      {/* Right Star (Yellow, Spins Slowly) */}
      <div className="absolute right-[10%] top-[30%] sm:right-[8%] sm:top-[18%] md:right-[20%] md:top-[25%] animate-spin-slow">
        <Image 
          src="/svgs/Star1.svg" 
          alt="Decorative Right" 
          width={30} height={30}  // Decreased default size for mobile
          className="sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px]" // Larger sizes for bigger screens
        />
      </div>
    </>
  );
}
