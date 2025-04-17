// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-[#030438] text-white pt-20 pb-7 relative select-none">

//       {/* Project Inquiry Section */}
//       <div className="px-6 pb-10 text-center">
//         <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] leading-[107%] font-bricolage font-bold text-[#F6F5FF] mb-6 select-none cursor-default">
//           Have a Project To Discuss?
//         </h2>
//         <Link href="/book-a-meeting">
//           <button className="bg-[#5E51FE] hover:bg-[#4A40E4] text-white font-medium px-6 py-3 rounded-md shadow transition duration-300">
//             CONTACT US
//           </button>
//         </Link>
//       </div>

//       {/* Footer Links Section */}
//       <div className="mx-auto px-6 mt-12 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-white justify-items-start sm:justify-items-center bg-[#1A1D5A] py-8">
//       {/* Services */}
//         <div className="my-6">
//           <h3 className="text-2xl font-semibold mb-6 text-white">Services</h3>
//           <ul className="space-y-1 text-lg text-gray-300">
//             <li><a href="/web-application" className="hover:text-[#5E51FE] transition-colors">Web App Development</a></li>
//             <li><a href="/logo-designing" className="hover:text-[#5E51FE] transition-colors">Logo Designing</a></li>
//             <li><a href="/branding" className="hover:text-[#5E51FE] transition-colors">Branding</a></li>
//             <li><a href="/social-media-marketing" className="hover:text-[#5E51FE] transition-colors">Social Media Marketing</a></li>
//           </ul>
//         </div>

//         {/* Solutions */}
//         <div className="my-6">
//                     <h3 className="text-2xl font-semibold mb-6 text-white">Solutions</h3>
//           <ul className="space-y-1 text-lg text-gray-300">
//             <li><a href="#" className="hover:text-[#5E51FE] transition-colors">Ecommerce App</a></li>
//             <li><a href="#" className="hover:text-[#5E51FE] transition-colors">Food Delivery App</a></li>
//             <li><a href="#" className="hover:text-[#5E51FE] transition-colors">Healthcare App</a></li>
//             <li><a href="#" className="hover:text-[#5E51FE] transition-colors">Real Estate App</a></li>
//           </ul>
//         </div>

//         {/* Quick Links */}
//         <div className="my-6">          <h3 className="text-2xl font-semibold mb-6 text-white">Quick Links</h3>
//           <ul className="space-y-1 text-lg text-gray-300">
//             <li><a href="/about" className="hover:text-[#5E51FE] transition-colors">About Us</a></li>
//             <li><a href="/projects" className="hover:text-[#5E51FE] transition-colors">Projects</a></li>
//             <li><a href="/case-study" className="hover:text-[#5E51FE] transition-colors">Case Study</a></li>
//             <li><a href="/book-a-meeting" className="hover:text-[#5E51FE] transition-colors">Book A Meeting</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Contact Info */}
//       <div className="px-6 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 lg:space-x-16 text-center md:text-left text-lg sm:text-lg md:text-base lg:text-xl">
//         <a href="mailto:info@evietek.com" className="flex items-center space-x-3 md:space-x-4 hover:opacity-80 transition-opacity">
//           <Image src="/Footer/Mail.svg" alt="Email" width={24} height={24} className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
//           <p>info@evietek.com</p>
//         </a>
//         <a href="tel:+16478045528" className="flex items-center space-x-3 md:space-x-4 hover:opacity-80 transition-opacity">
//           <Image src="/Footer/Phone.svg" alt="Phone" width={24} height={24} className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
//           <p>+1 (647) 804 5528</p>
//         </a>
//         <div className="flex items-center space-x-4 pl-12 md:pl-0 md:space-x-4">
//           <Image
//             src="/Footer/location.svg"
//             alt="Location"
//             width={24}
//             height={24}
//             className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0"
//           />
//           <div className="flex flex-col justify-center text-left leading-tight">
//             <span>201 Barry Pl, London,</span>
//             <span>Ontario, Canada</span>
//           </div>
//         </div>
//       </div>

//       {/* Social Links */}
//       <div className="w-full bg-[#1A1D5A] py-4 sm:py-5 mt-4 sm:mt-10">
//         <div className="flex justify-center space-x-8 sm:space-x-12 lg:space-x-16">
//           <a href="#" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
//             <Image src="/Footer/Linkedin.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
//             <span className="hidden sm:inline text-base sm:text-sm md:text-base lg:text-xl">LinkedIn</span>
//           </a>
//           <a href="https://www.behance.net/evietekstudio" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
//             <Image src="/Footer/Behance.svg" alt="Dribble" width={24} height={24} className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
//             <span className="hidden sm:inline text-base sm:text-sm md:text-base lg:text-xl">Behance</span>
//           </a>
//           <a href="https://dribbble.com/evietek" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
//             <Image src="/Footer/Dribble.svg" alt="Dribble" width={24} height={24} className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
//             <span className="hidden sm:inline text-base sm:text-sm md:text-base lg:text-xl">Dribble</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
//             <Image src="/Footer/Instagram.svg" alt="Instagram" width={24} height={24} className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
//             <span className="hidden sm:inline text-base sm:text-sm md:text-base lg:text-xl">Instagram</span>
//           </a>
//           <a href="https://www.facebook.com/evietek" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
//             <Image src="/Footer/Facebook.svg" alt="Facebook" width={24} height={24} className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
//             <span className="hidden sm:inline text-base sm:text-sm md:text-base lg:text-xl">Facebook</span>
//           </a>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="px-6 relative">
//         <p className="text-center text-gray-400 text-sm sm:text-sm md:text-base lg:text-xl mt-0 sm:mt-6 md:mt-6 relative sm:static -bottom-4">
//           © 2020–2025 EvieTek. All Rights Reserved.
//         </p>
//       </div>

//       {/* Corner Icon */}
//       <div className="absolute bottom-2 md:bottom-0 left-3 sm:left-6 lg:left-10 w-7 h-7 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
//         <Image src="/Footer/icon.svg" alt="Icon" fill style={{ objectFit: "contain" }} />
//       </div>
//     </footer>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#030438] text-white pt-20 pb-7 relative select-none">

      {/* Project Inquiry Section */}
      <div className="px-6 pb-10 text-center">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] leading-[107%] font-bricolage font-bold text-[#F6F5FF] mb-6 select-none cursor-default">
          Have a Project To Discuss?
        </h2>
        <Link href="/book-a-meeting">
          <button className="bg-[#5E51FE] hover:bg-[#4A40E4] text-white font-medium px-6 py-3 rounded-md shadow transition duration-300">
            CONTACT US
          </button>
        </Link>
      </div>

      {/* Footer Links Section */}
      <div className="mx-auto px-6 mt-12 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white justify-items-start sm:justify-items-center py-8">
      {/* Services */}
        <div className="my-6">
          <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-6 text-white">Services</h3>
          <ul className="space-y-1 text-lg md:text-md lg:text-lg text-gray-300">
            <li><a href="/web-application" className="hover:text-[#5E51FE] transition-colors">Web App Development</a></li>
            <li><a href="/logo-designing" className="hover:text-[#5E51FE] transition-colors">Logo Designing</a></li>
            <li><a href="/branding" className="hover:text-[#5E51FE] transition-colors">Branding</a></li>
            <li><a href="/social-media-marketing" className="hover:text-[#5E51FE] transition-colors">Social Media Marketing</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="my-6">
                    <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-6 text-white">Solutions</h3>
          <ul className="space-y-1 text-lg md:text-md lg:text-lg text-gray-300">
            <li><a href="#" className="hover:text-[#5E51FE] transition-colors">Ecommerce App</a></li>
            <li><a href="#" className="hover:text-[#5E51FE] transition-colors">Food Delivery App</a></li>
            <li><a href="#" className="hover:text-[#5E51FE] transition-colors">Healthcare App</a></li>
            <li><a href="#" className="hover:text-[#5E51FE] transition-colors">Real Estate App</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="my-6">          <h3 className="text-2xl  md:text-xl lg:text-2xl font-semibold mb-6 text-white">Quick Links</h3>
          <ul className="space-y-1 text-lg md:text-md lg:text-lg text-gray-300">
            <li><a href="/about" className="hover:text-[#5E51FE] transition-colors">About Us</a></li>
            <li><a href="/projects" className="hover:text-[#5E51FE] transition-colors">Projects</a></li>
            <li><a href="/case-study" className="hover:text-[#5E51FE] transition-colors">Case Study</a></li>
            <li><a href="/book-a-meeting" className="hover:text-[#5E51FE] transition-colors">Book A Meeting</a></li>
          </ul>
        </div>

                {/* Get In Touch */}
                <div className="my-6">          <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
          <ul className="space-y-1 text-lg md:text-md lg:text-lg text-gray-300">
            <li><a href="mailto:info@evietek.com" className="flex items-center space-x-3 md:space-x-4 hover:opacity-80 transition-opacity">
          <Image src="/Footer/Mail.svg" alt="Email" width={24} height={24} className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <p>info@evietek.com</p>
        </a></li>
            <li><a href="tel:+16478045528" className="flex items-center space-x-3 md:space-x-4 hover:opacity-80 transition-opacity">
          <Image src="/Footer/Phone.svg" alt="Phone" width={24} height={24} className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <p>+1 (647) 804 5528</p>
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
    <p>201 Barry Pl, London, Ontario, Canada</p>
  </div>
</li>
<li className="flex space-x-4 pt-3">
  <a href="#" className="hover:opacity-80 transition-opacity">
    <Image src="/Footer/Linkedin.svg" alt="linkedIn" width={24} height={24} className="w-10 h-10" />
  </a>
  <a href="https://www.behance.net/evietekstudio" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
    <Image src="/Footer/Behance.svg" alt="Behance" width={24} height={24} className="w-10 h-10" />
  </a>
  <a href="https://dribbble.com/evietek" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
    <Image src="/Footer/Dribble.svg" alt="Dribbble" width={24} height={24} className="w-10 h-10" />
  </a>
  <a href="#" className="hover:opacity-80 transition-opacity">
    <Image src="/Footer/Instagram.svg" alt="Instagram" width={24} height={24} className="w-10 h-10" />
  </a>
  <a href="https://www.facebook.com/evietek" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
    <Image src="/Footer/Facebook.svg" alt="Facebook" width={24} height={24} className="w-10 h-10" />
  </a>
</li>


          </ul>
        </div>
      </div>

       {/* Copyright */}
      <div className="px-6 relative">
        <p className="text-center text-gray-400 text-sm sm:text-sm md:text-base lg:text-xl mt-0 sm:mt-6 md:mt-6 relative sm:static -bottom-4">
          © 2020–2025 EvieTek. All Rights Reserved.
        </p>
      </div>

      {/* Corner Icon */}
      <div className="absolute bottom-2 md:bottom-0 left-3 sm:left-6 lg:left-10 w-7 h-7 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
        <Image src="/Footer/icon.svg" alt="Icon" fill style={{ objectFit: "contain" }} />
      </div>
    </footer>
  );
}
