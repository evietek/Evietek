"use client";

export default function WorkProcessBanner() {
  const marqueeContent = (
    <>
      <span>UX/UI Design</span>
      <span className="mx-4">-</span>
      <span>Web Development</span>
      <span className="mx-4">-</span>
      <span>Landing Page Design</span>
      <span className="mx-4">-</span>
      <span>Graphic Design</span>
      <span className="mx-4">-</span>
      <span>UX/UI Design</span>
      <span className="mx-4">-</span>
      <span>Web Development</span>
      <span className="mx-4">-</span>
      <span>Landing Page Design</span>
      <span className="mx-4">-</span>
      <span>Graphic Design</span>
      <span className="mx-4">-</span>
    </>
  );

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#8D4BF7] to-[#C98CF8] transform -rotate-2">
      <div className="marquee">
        <div className="marquee-content text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl select-none cursor-default py-1 sm:py-1.5 md:py-2">
          {marqueeContent}
          {marqueeContent}
        </div>
      </div>
    </div>
  );
}
