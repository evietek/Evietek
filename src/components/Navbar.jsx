'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Track active page
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto"; // Fixed the logic here
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const scrollToServices = (e) => {
    e.preventDefault();
    if (pathname !== '/') {
      // Store the intention to scroll in sessionStorage
      sessionStorage.setItem('shouldScrollToServices', 'true');
      router.push('/');
    } else {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  // Clean up the body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-[100] px-4 py-3 pt-8 transition-all duration-500 flex justify-between items-center ${isScrolled
          ? "bg-[#030438]/90 backdrop-blur-md shadow-lg"
          : pathname === "/book-a-meeting"
            ? "bg-[#030438]"  // Apply the specific bg for book-a-meeting page
            : pathname !== "/"
            ? "bg-[#030438] md:bg-transparent"
            : "bg-transparent"
        }`}
    >
      <div className="container mx-auto max-w-7xl flex justify-between items-center w-full">
        {/* Clickable Logo (Redirects to Home) */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.svg" alt="EvieTek Logo" width={150} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 lg:space-x-8 xl:space-x-10 text-white text-sm lg:text-base xl:text-lg font-medium tracking-wide">
          <Link href="/about" className={`${pathname === "/about" ? "text-gray-300" : "hover:text-gray-300 transition"}`}>
            About us
          </Link>
                    <Link href="/services" className={`${pathname === "/services" ? "text-gray-300" : "hover:text-gray-300 transition"}`}>
            Services
          </Link>
          <Link href="/projects" className={`${pathname === "/projects" ? "text-gray-300" : "hover:text-gray-300 transition"}`}>
            Projects
          </Link>
          {/* <button onClick={scrollToServices} className="hover:text-gray-300 transition">
            Services
          </button> */}
          <Link href="/case-study" className={`${pathname === "/case-study" ? "text-gray-300" : "hover:text-gray-300 transition"}`}>
            Case Study
          </Link>
        </div>

        {/* CTA Button (Desktop) */}
        <Link href="/book-a-meeting" className="hidden md:block">
          <button className="flex items-center gap-1.5 bg-gradient-to-b from-[#5A50FF] to-[#D376FF] hover:opacity-90 text-white px-4 py-2 rounded-2xl font-semibold text-sm lg:text-base xl:text-lg shadow-lg transition-all transform hover:scale-105">
            <Image src="/Phone.svg" alt="Phone" width={15} height={15} />
            Book a Meeting
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl relative z-50">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-[#030438] bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center space-y-8">
          <Link href="/about" onClick={closeMenu} className={`${pathname === "/about" ? "text-gray-300" : "text-white hover:text-gray-300 transition"}`}>
            About us
          </Link>
          <Link href="/projects" onClick={closeMenu} className={`${pathname === "/projects" ? "text-gray-300" : "text-white hover:text-gray-300 transition"}`}>
            Projects
          </Link>
          {/* <button onClick={scrollToServices} className="text-white hover:text-gray-300 transition">
            Services
          </button> */}
          <Link href="/case-study" onClick={closeMenu} className={`${pathname === "/case-study" ? "text-gray-300" : "text-white hover:text-gray-300 transition"}`}>
            Case Study
          </Link>

          {/* CTA Button Inside Mobile Menu */}
          <Link href="/book-a-meeting" onClick={closeMenu}>
            <button className="flex items-center gap-2 bg-gradient-to-b from-[#9F67FF] to-[#F271C4] hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold text-base shadow-lg transition-all transform hover:scale-105">
              <Image src="/Phone.svg" alt="Phone" width={16} height={16} />
              Book a Meeting
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
