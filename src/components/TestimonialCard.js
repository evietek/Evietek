import { useState } from "react";

export default function TestimonialCard({ name, title, review, stars = 5, link }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match the transition duration
    }
  };

  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={`bg-white rounded-2xl shadow-md p-6 md:p-8 text-center transition-all duration-300 ${isAnimating ? '-translate-y-1' : ''} h-[300px] md:h-[320] lg:h-[280] w-full cursor-pointer`}
        onMouseEnter={handleMouseEnter}
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
    </a >
  );
}