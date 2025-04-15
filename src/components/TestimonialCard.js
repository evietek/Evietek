import { useState } from "react";

export default function TestimonialCard({ name, title, review, stars = 5, link }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Shadow styling based on the screenshot (X:0, Y:0, Blur:103, Spread:0, #CCCBEE)
  const shadowStyle = isHovered 
    ? "0 0 30px 0 rgba(204, 203, 238, 1)" 
    : "0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"; // Default shadow-md

  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={`bg-white rounded-2xl p-6 md:p-8 text-center transition-all duration-300 ${isHovered ? '-translate-y-1' : ''} h-[300px] md:h-[320px] lg:h-[280px] w-full cursor-pointer border-1 border-[#CCCBEE]`} // Added border-4 and custom border color
        style={{ boxShadow: shadowStyle }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h3 className="text-xl font-semibold text-[#341E61] mb-1 md:mb-2">{title}</h3>

        {/* Trustpilot Style Stars */}
        <div className="flex justify-center gap-1 mb-2 md:mb-4">
          {[...Array(stars)].map((_, i) => (
            <span key={i} className="text-[#00B67A] text-2xl">★</span>
          ))}
        </div>

        <p className="text-gray-600 text-sm mb-2 md:mb-6 italic">{review}</p>
        <p className="font-medium text-[#341E61]">{name}</p>
      </div>
    </a>
  );
}
