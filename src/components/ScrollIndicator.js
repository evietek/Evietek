"use client";

import Image from "next/image";

export default function ScrollIndicator() {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-center flex flex-col items-center cursor-pointer" onClick={handleScroll}>
      <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mb-2">Scroll down</p>
      <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 animate-bounce flex items-center justify-center">
        <Image 
          src="/svgs/arrow-down.svg"
          alt="Scroll Down"
          width={15}
          height={15}
          className="w-3 sm:w-4 md:w-5 lg:w-6 object-contain"
        />
      </div>
    </div>
  );
}
