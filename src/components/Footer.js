"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#030438] text-white py-7 relative">
      {/* Contact Info */}
      <div className="px-6 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 lg:space-x-16 text-center md:text-left text-lg sm:text-lg md:text-base lg:text-xl">
        <div className="flex items-center space-x-3 md:space-x-4">
          <Image src="/Footer/mail.svg" alt="Email" width={24} height={24} className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <p>info@evietek.com</p>
        </div>
        <div className="flex items-center space-x-3 md:space-x-4">
          <Image src="/Footer/phone.svg" alt="Phone" width={24} height={24} className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <p>+1 (647) 804 5528</p>
        </div>
        <div className="flex items-center space-x-3 md:space-x-4">
          <Image src="/Footer/location.svg" alt="Location" width={24} height={24} className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <p>201 Barry Pl, London, Ontario, Canada</p>
        </div>
      </div>

      {/* Social Links - Full Width */}
      <div className="w-full bg-[#1A1D5A] py-4 sm:py-5 mt-8 sm:mt-10">
        <div className="flex justify-center space-x-8 sm:space-x-12 lg:space-x-16">
          <a href="#" className="flex items-center space-x-3">
            <Image src="/Footer/linkedin.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            <span className="hidden sm:inline text-base sm:text-sm md:text-base lg:text-xl">LinkedIn</span>
          </a>
          <a href="#" className="flex items-center space-x-3">
            <Image src="/Footer/Dribble.svg" alt="Dribble" width={24} height={24} className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            <span className="hidden sm:inline text-base sm:text-sm md:text-base lg:text-xl">Dribbble</span>
          </a>
          <a href="#" className="flex items-center space-x-3">
            <Image src="/Footer/instagram.svg" alt="Instagram" width={24} height={24} className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            <span className="hidden sm:inline text-base sm:text-sm md:text-base lg:text-xl">Instagram</span>
          </a>
          <a href="https://www.facebook.com/evietek" className="flex items-center space-x-3">
            <Image src="/Footer/facebook.svg" alt="Facebook" width={24} height={24} className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            <span className="hidden sm:inline text-base sm:text-sm md:text-base lg:text-xl">Facebook</span>
          </a>
        </div>
      </div>

      {/* Logo */}
      <div className="px-6 flex justify-center mt-8 sm:mt-10 lg:mt-12">
        <Image 
          src="/Footer/logo.svg" 
          alt="EvieTek Logo" 
          width={900} 
          height={180}
          className="w-64 sm:w-72 md:w-96 lg:w-full max-w-5xl" 
        />
      </div>
      
      {/* Full-Width White Divider */}
      <div className="w-full h-[1px] bg-gray-400 opacity-50 mt-8 sm:mt-10"></div>
      
      {/* Copyright */}
      <div className="px-6">
        <p className="text-center text-gray-400 text-sm sm:text-sm md:text-base lg:text-xl mt-4 sm:mt-6">
          © 2025 Rylic Studio. All Rights Reserved.
        </p>
      </div>

      {/* Corner Icon */}
      <div className="absolute bottom-0 left-3 sm:left-6 lg:left-10 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
        <Image src="/Footer/icon.svg" alt="Icon" fill style={{objectFit: "contain"}} />
      </div>
    </footer>
  );
}