import { useState } from "react";
import TrustpilotStars from "./TrustpilotStars";
import Image from "next/image";

export default function TestimonialCard({ 
  name, 
  position, 
  company, 
  review, 
  rating, // Rating out of 5
  date, 
  avatar,
  link = "#", 
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Convert your 5-star rating to TrustPilot's 10-point scale
  const trustpilotScore = (rating * 2).toFixed(1);

  // Shadow styling
  const shadowStyle = isHovered 
    ? "0 0 30px 0 rgba(204, 203, 238, 1)" 
    : "0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div
        className={`bg-[#F6F5FF] rounded-xl px-6 py-4 transition-all duration-300 ${isHovered ? '-translate-y-1' : ''} w-full cursor-pointer flex flex-col justify-between h-full min-h-[140px]`}
        style={{ boxShadow: shadowStyle }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Date and Stars Row */}
        <div className="flex flex-col mb-4">
          <div className="flex justify-between items-center">
            {/* TrustPilot Stars (in exact style) */}
            <div className="w-36">
              <TrustpilotStars score={parseFloat(trustpilotScore)} />
            </div>
            <span className="text-gray-500 font-medium text-sm">{date}</span>
          </div>
        </div>

        {/* Review Text - Limited to 2 lines with ellipsis */}
        <p className="text-gray-900 italic text-sm line-clamp-2 mb-4">
          &quot;{review}&quot;
        </p>

        {/* Profile Section */}
        <div className="flex items-center mt-auto">
          {avatar && (
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0 relative">
              <Image 
                src={avatar} 
                alt={`${name}'s avatar`} 
                fill 
                className="object-cover" 
                sizes="40px"
              />
            </div>
          )}
          <div className="text-left">
            <p className="font-medium text-[#341E61]">{name}</p>
            <p className="text-gray-500 text-xs">
              {position} {company && `- ${company}`}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
