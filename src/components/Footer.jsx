"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#030438] text-white pt-0 pb-7 relative select-none">

      {/* Footer Links Section */}
<div className="mx-auto px-4 mt-6 mb-12 flex flex-wrap justify-start sm:justify-center text-left gap-x-16 xl:gap-x-32 gap-y-6 text-white pt-0">
      {/* Services */}
  <div className="my-6 w-full sm:w-auto">
          <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-6 text-white">Services</h3>
          <ul className="space-y-1 text-lg md:text-md lg:text-lg text-gray-300">
            <li><Link href="/services/branding" className="hover:text-[#5E51FE] transition-colors">Branding</Link></li>
            <li><Link href="/services/content-writing" className="hover:text-[#5E51FE] transition-colors">Content Writing</Link></li>
            <li><Link href="/services/seo" className="hover:text-[#5E51FE] transition-colors">SEO</Link></li>
            <li><Link href="/services/social-media-marketing" className="hover:text-[#5E51FE] transition-colors">Social Media Marketing</Link></li>
            <li><Link href="/services/web-application" className="hover:text-[#5E51FE] transition-colors">Web App Development</Link></li>
            <li><Link href="/services/website-design" className="hover:text-[#5E51FE] transition-colors">Web Design</Link></li>


          </ul>
        </div>

        {/* Solutions */}
  <div className="my-6 w-full sm:w-auto">
                    <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-6 text-white">Solutions</h3>
          <ul className="space-y-1 text-lg md:text-md lg:text-lg text-gray-300">
            <li><Link href="#" className="hover:text-[#5E51FE] transition-colors">Ecommerce App</Link></li>
            <li><Link href="#" className="hover:text-[#5E51FE] transition-colors">Food Delivery App</Link></li>
            <li><Link href="#" className="hover:text-[#5E51FE] transition-colors">Healthcare App</Link></li>
            <li><Link href="#" className="hover:text-[#5E51FE] transition-colors">Real Estate App</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
          <div className="my-6 w-full sm:w-auto">
         <h3 className="text-2xl  md:text-xl lg:text-2xl font-semibold mb-6 text-white">Quick Links</h3>
          <ul className="space-y-1 text-lg md:text-md lg:text-lg text-gray-300">
            <li><Link href="/about" className="hover:text-[#5E51FE] transition-colors">About Us</Link></li>
            <li><Link href="/about" className="hover:text-[#5E51FE] transition-colors">Services</Link></li>
            <li><Link href="/projects" className="hover:text-[#5E51FE] transition-colors">Projects</Link></li>
            <li><Link href="/case-study" className="hover:text-[#5E51FE] transition-colors">Case Study</Link></li>
            <li><Link href="/book-a-meeting" className="hover:text-[#5E51FE] transition-colors">Book A Meeting</Link></li>
          </ul>
        </div>

                {/* Get In Touch */}
                <div className="my-6 w-full sm:w-auto">
         <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
          <ul className="space-y-1 text-lg md:text-md lg:text-lg text-gray-300">
            <li><a href="mailto:info@evietek.com" className="flex items-center space-x-3 md:space-x-4 hover:text-[#5E51FE] transition-opacity">
          <Image src="/Footer/Mail.svg" alt="Email" width={24} height={24} className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <p>info@evietek.com</p>
        </a></li>
            <li><a href="tel:+12014713999" className="flex items-center space-x-3 md:space-x-4 hover:text-[#5E51FE] transition-opacity">
          <Image src="/Footer/Phone.svg" alt="Phone" width={24} height={24} className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <p>+1 201 471 3999</p>
        </a></li>
        <li className="flex items-start space-x-3 md:space-x-4">
  <Image
    src="/Footer/location.svg"
    alt="Location"
    width={24}
    height={24}
    className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0 mt-1"
  />
  <div className="text-left leading-tight text-gray-300 text-lg">
    <p>201 Barry Pl, London, <br/ >Ontario, Canada</p>
  </div>
</li>


          </ul>
        </div>
      </div>
      <div><li className="flex space-x-4 pt-0 justify-center gap-4">
  <a href="#" className="hover:opacity-80 transition-opacity">
    <Image src="/Footer/Linkedin.svg" alt="linkedIn" width={24} height={24} className="w-8 h-8 md:w-10 md:h-10" />
  </a>
  <a href="https://www.behance.net/evietekstudio" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
    <Image src="/Footer/Behance.svg" alt="Behance" width={24} height={24} className="w-8 h-8 md:w-10 md:h-10" />
  </a>
  <a href="https://dribbble.com/evietek" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
    <Image src="/Footer/Dribble.svg" alt="Dribbble" width={24} height={24} className="w-8 h-8 md:w-10 md:h-10" />
  </a>
  <a href="#" className="hover:opacity-80 transition-opacity">
    <Image src="/Footer/Instagram.svg" alt="Instagram" width={24} height={24} className="w-8 h-8 md:w-10 md:h-10" />
  </a>
  <a href="https://www.facebook.com/evietek" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
    <Image src="/Footer/Facebook.svg" alt="Facebook" width={24} height={24} className="w-8 h-8 md:w-10 md:h-10" />
  </a>
</li></div>

       {/* Copyright */}
      <div className="px-6 relative">
        <p className="text-center text-gray-400 text-sm sm:text-sm md:text-base lg:text-xl mt-0 sm:mt-6 md:mt-6 relative sm:static -bottom-4">
          © 2020–2025 EvieTek. All Rights Reserved.
        </p>
      </div>

      {/* Corner Icon */}
      <div className="absolute bottom-2 md:bottom-10 left-3 sm:left-6 lg:left-10 w-7 h-7 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
        <Image src="/Footer/icon.svg" alt="Icon" fill style={{ objectFit: "contain" }} />
      </div>
    </footer>
  );
}
