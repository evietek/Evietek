'use client';

import Link from 'next/link';
import { useState } from "react";
import Image from "next/image";

export default function ProjectInquirySection() {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
  
    const handleCall = () => {
      window.location.href = "tel:+12014713999";
    };

    return (
        <section className="w-full bg-[#FFFFFF] pb-12 px-6 flex justify-center relative">
            <div
                className="relative rounded-2xl bg-[#FFFFFF] shadow-xl px-10 sm:px-16 py-14 w-full max-w-6xl flex flex-col lg:flex-row items-center overflow-hidden"
                style={{
boxShadow: '30px 30px 70px 0px rgba(204, 200, 238, 0.66)',
  background: `
    radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
    linear-gradient(0deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
    linear-gradient(135deg, #faf9ff 0%, #f3f0ff 50%, #ede9ff 100%)
`,

                    backgroundSize: '5px 5px, 5px 5px, 5px 5px, 100% 100%',
                    backgroundPosition: '0 0, 0 0, 0 0, 0 0'
                }}
            >



                {/* Left content section */}
                <div className="w-full lg:w-[60%] lg:pr-8">
                    <h2 className="text-[30px] sm:text-[30px] md:text-[36px] lg:text-[42px] font-bricolage font-bold text-[#341E61] select-none cursor-default">
                        Have a Project to <br />Discuss?
                    </h2>

                    <p className="text-[#41335E] text-sm sm:text-base md:text-lg mb-8">
                        At Evietek, we're more than just a digital marketing agency – we're innovators in graphic design, web development, and marketing strategy. Whether you're a creative designer, a web development expert, or a digital marketing specialist, we offer an exciting environment to grow and make an impact. Ready to join a team that's shaping the future of digital experiences?
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-5 md:mt-20">
                        {/* Book a Meeting Button */}
                        <Link href="/book-a-meeting" className="block">
                            <button
                                onMouseEnter={() => setIsHovered1(true)}
                                onMouseLeave={() => setIsHovered1(false)}
                                className="group flex items-center gap-1.5 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold text-sm md:text-base lg:text-lg shadow-lg transition-all transform hover:scale-105"
                            >
                                <div className="w-7 h-7">
                                    <Image
                                        src="/phone.svg"
                                        alt="Phone"
                                        width={20}
                                        height={20}
                                        className={`w-full h-full ${isHovered1 ? "animate-wiggle" : ""}`}
                                    />
                                </div>
                                Book a Meeting
                            </button>
                        </Link>

                        {/* Call Button */}
                        <button
                            onClick={handleCall}
                            onMouseEnter={() => setIsHovered2(true)}
                            onMouseLeave={() => setIsHovered2(false)}
                            className="group flex items-center gap-1.5 bg-[#3E2472] hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold text-sm md:text-base lg:text-lg shadow-lg transition-all transform hover:scale-105"
                        >
                            <div className="w-7 h-7">
                                <Image
                                    src="/phone.svg"
                                    alt="Phone"
                                    width={20}
                                    height={20}
                                    className={`w-full h-full ${isHovered2 ? "animate-wiggle" : ""}`}
                                />
                            </div>
                            +1 201 471 3999
                        </button>
                    </div>
                </div>

                {/* Right illustration container */}
                <div className="hidden lg:flex justify-center items-center w-full lg:w-[40%]">
                    <div className="relative w-full h-64">
                        {/* Main mail icon container */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-80 h-70 bg-[#FFFFFF] rounded-2xl flex items-center justify-center shadow-lg">
                                <Image
                                    src="/Mail.svg"
                                    alt="Mail Icon"
                                    width={60}
                                    height={60}
                                    className="w-60 h-60"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}