"use client";

export default function HeroSection({
  tagText = "",
  tagBgColor = "",
  heading = "",
  subheading = "",
  heightClass = "min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh]",
}) {
  return (
    <section
      className={`relative bg-[#030438] text-white ${heightClass} flex flex-col items-center justify-between text-center pt-12 md:pt-16 pb-0 overflow-hidden font-BricolageGrotesque font-bold`}
    >
      {/* Background Grid + Glow */}
      <div className="absolute inset-0 w-full h-full bg-[#030438] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Radial gradient */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(120,70,190,0.3)_0%,rgba(3,4,56,0.8)_70%,rgba(3,4,56,1)_100%)]" />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[900px] max-h-[450px] bg-[#7A3DD7] opacity-30 rounded-full blur-[100px] sm:blur-[120px]" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-grow relative z-10 px-4 sm:px-6 lg:px-12">
        {/* Tag */}
        <div
          className="flex items-center justify-center rounded-xl py-1 px-4 sm:px-6 rotate-[-5deg] mt-4 sm:mt-6"
          style={{ backgroundColor: tagBgColor }}
        >
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white">
            {tagText}
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-4xl mx-auto pt-4 sm:pt-6">
          <h1 className="text-[clamp(1.75rem,5vw,4.5rem)] leading-[1.1] font-bold select-none cursor-default whitespace-pre-line">
            {heading}
          </h1>

          {/* Subheading */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto opacity-90 font-Gilroy font-light select-none cursor-default whitespace-pre-line">
            {subheading}
          </p>
        </div>
      </div>
    </section>
  );
}
