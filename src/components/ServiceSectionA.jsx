"use client";

import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const allServices = [
    {
        title: "Website Design",
        description: "Captivate visitors with sleek, user-friendly designs that drive engagement and conversions effortlessly.",
        icon: "/Our_Services/Website_Design.svg",
        link: "/services/website-design",
        variant: 1
    },
    {
        title: "Branding Design",
        description: "Craft a powerful brand identity that resonates, builds trust, and sets you apart instantly.",
        icon: "/Our_Services/Branding_Design.svg",
        link: "/services/branding",
        variant: 2
    },
    {
        title: "Social Media Marketing",
        description: "Dominate digital platforms with strategic content that attracts, engages, and converts your audience.",
        icon: "/Our_Services/Social_Media_Marketing.svg",
        link: "/services/social-media-marketing",
        variant: 3
    },
    {
        title: "Content Writing",
        description: "Boost your brand with compelling, SEO-optimized content that informs, engages, and drives real conversions.",
        icon: "/Our_Services/Content_Writing.svg",
        link: "/services/content-writing",
        variant: 3
    },
    {
        title: "SEO",
        description: "Rank higher, get found faster, and grow organically with proven, data-driven SEO strategies that convert.",
        icon: "/Our_Services/SEO.svg",
        link: "/services/seo",
        variant: 1
    },
    {
        title: "Website Development",
        description: "We build powerful, user-focused web apps that solve problems, boost growth, and drive real impact.",
        icon: "/Our_Services/Website_Development.svg",
        link: "/services/website-development",
        variant: 2
    }
];

export default function ServicesSectionA() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0);
    const [mobileDragStart, setMobileDragStart] = useState(0);
    const [mobileIsDragging, setMobileIsDragging] = useState(false);
    const [mobileAutoPlay, setMobileAutoPlay] = useState(true);
    
    const carouselRef = useRef(null);
    const mobileCarouselRef = useRef(null);

    // Mobile carousel auto-slide
    useEffect(() => {
        if (!mobileAutoPlay || mobileIsDragging) return;
        
        const mobileInterval = setInterval(() => {
            setMobileCurrentIndex(prev => (prev + 1) % allServices.length);
        }, 3000);

        return () => clearInterval(mobileInterval);
    }, [mobileAutoPlay, mobileIsDragging]);

    // Update mobile carousel position
    useEffect(() => {
        if (mobileCarouselRef.current) {
            const carousel = mobileCarouselRef.current;
            const cardWidth = carousel.firstElementChild?.offsetWidth || 0;
            const gap = 24; // space-x-6 = 24px
            const scrollPosition = mobileCurrentIndex * (cardWidth + gap);
            
            carousel.scrollTo({
                left: scrollPosition,
                behavior: mobileIsDragging ? 'auto' : 'smooth'
            });
        }
    }, [mobileCurrentIndex, mobileIsDragging]);

    // Desktop Auto-rotation effect
    useEffect(() => {
        if (!autoPlay || isDragging) return;
        
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % allServices.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [autoPlay, isDragging]);

    // Mobile drag handlers
    const handleMobileTouchStart = (e) => {
        setMobileIsDragging(true);
        setMobileAutoPlay(false);
        setMobileDragStart(e.touches[0].clientX);
    };

    const handleMobileTouchMove = (e) => {
        if (!mobileIsDragging) return;
        
        const currentX = e.touches[0].clientX;
        const dragDistance = currentX - mobileDragStart;
        const threshold = 50;
        
        if (Math.abs(dragDistance) > threshold) {
            if (dragDistance > 0) {
                // Swipe right - go to previous
                setMobileCurrentIndex(prev => 
                    prev === 0 ? allServices.length - 1 : prev - 1
                );
            } else {
                // Swipe left - go to next
                setMobileCurrentIndex(prev => (prev + 1) % allServices.length);
            }
            
            setMobileIsDragging(false);
            setTimeout(() => setMobileAutoPlay(true), 2000);
        }
    };

    const handleMobileTouchEnd = () => {
        setMobileIsDragging(false);
        setTimeout(() => setMobileAutoPlay(true), 2000);
    };

    // Desktop Drag handlers
    const handleDragStart = (e) => {
        setIsDragging(true);
        setAutoPlay(false);
        const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        setDragStart(clientX);
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        
        e.preventDefault();
        const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        const dragDistance = clientX - dragStart;
        const threshold = 100;
        
        if (Math.abs(dragDistance) > threshold) {
            if (dragDistance > 0) {
                setCurrentIndex(prev => 
                    prev === 0 ? allServices.length - 1 : prev - 1
                );
            } else {
                setCurrentIndex(prev => (prev + 1) % allServices.length);
            }
            
            setIsDragging(false);
            setTimeout(() => setAutoPlay(true), 2000);
        }
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        setTimeout(() => setAutoPlay(true), 2000);
    };

    const headingVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.3, ease: "easeOut" }
        }
    };

    const decorationVariants = {
        initial: { opacity: 0, y: 100 },
        animate: {
            opacity: 0.7,
            y: 0,
            transition: { duration: 1.3, ease: "easeOut" }
        }
    };

    const decorationVariants2 = {
        initial: { opacity: 0, y: -100 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.3, ease: "easeOut" }
        }
    };

    return (
        <section id="services" className="relative bg-[#FFFFFF] text-[#333] py-3 md:py-8 lg:pt-8 px-4 md:px-8 lg:px-12 pb-0">
            {/* Heading */}
            <div className="flex flex-col items-center text-center">
                <div className="relative flex justify-center items-center w-full mt-10 md:mt-0 lg:mt-0">
                    <div className="relative z-10 -mt-16 -mr-2.5 lg:-mt-20">
                        <div className="flex items-center justify-center rounded-[12px] rotate-[-3.5deg] p-[10px] sm:px-[15px] sm:py-[10px]" style={{ backgroundColor: "#CB73FE" }}>
                            <span className="font-['Bricolage_Grotesque'] font-extrabold text-white text-xl sm:text-xl md:text-2xl lg:text-3xl text-center">
                                Our
                            </span>
                        </div>
                    </div>
                    <div className="relative -ml-0 -mt-8 z-0">
                        <div className="flex items-center justify-center rounded-[12px] p-[10px] sm:px-[15px] sm:py-[10px]"
                            style={{
                                backgroundColor: "#5E51FE",
                                transform: "rotate(5.29deg)"
                            }}>
                            <span className="font-['Bricolage_Grotesque'] font-extrabold text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl">
                                Services
                            </span>
                        </div>
                    </div>
                </div>

                <motion.h2
                    className="text-[50px] leading-[107%] font-bricolage font-bold text-[#341E61] mt-1 md:mt-5 select-none cursor-default"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={headingVariants}
                >
                    What We Do
                </motion.h2>
            </div>

            {/* Mobile Carousel - Fixed */}
            <div className="block md:hidden mt-12 overflow-hidden relative">
                <div
                    ref={mobileCarouselRef}
                    className="flex space-x-6 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scrollbar-hide"
                    style={{ 
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                    onTouchStart={handleMobileTouchStart}
                    onTouchMove={handleMobileTouchMove}
                    onTouchEnd={handleMobileTouchEnd}
                >
                    {allServices.map((service, index) => (
                        <div
                            key={`${service.title}-${index}`}
                            className="min-w-[80%] snap-center flex-shrink-0"
                        >
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </div>
            </div>

            {/* 3D Carousel with Drag Navigation - Desktop */}
            <div className="hidden md:block relative mx-auto w-full max-w-[1000px] md:scale-80">
                <div 
                    ref={carouselRef}
                    className="relative mx-auto h-[450px] md:h-[500px] lg:h-[580px] cursor-grab active:cursor-grabbing"
                    style={{ 
                        perspective: '1600px',
                        perspectiveOrigin: 'center center'
                    }}
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={handleDragStart}
                    onTouchMove={handleDragMove}
                    onTouchEnd={handleDragEnd}
                >
                    <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: `rotateY(${currentIndex * -(360 / allServices.length)}deg)`,
                            transition: isDragging ? 'none' : 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                    >
                        {allServices.map((service, i) => {
                            const angle = (i * 360) / allServices.length;
                            const radius = 400;
                            
                            return (
                                <div
                                    key={service.title}
                                    className="absolute top-1/2 left-1/2"
                                    style={{
                                        transform: `
                                            translate(-50%, -42%)
                                            rotateY(${angle}deg) 
                                            translateZ(${radius}px)
                                        `,
                                        transformOrigin: 'center center',
                                        backfaceVisibility: 'hidden',
                                    }}
                                >
                                    <div 
                                        className={`
                                            transition-all duration-700 ease-out pointer-events-auto
                                            ${i === currentIndex 
                                                ? 'opacity-100 z-10' 
                                                : 'opacity-70 z-0'
                                            }
                                        `}
                                        style={{
                                            filter: i === currentIndex ? 'none' : 'blur(0.5px)',
                                        }}
                                    >
                                        <ServiceCard {...service} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Decorations - Always Present */}
            <motion.div
                className="absolute top-10 right-1 md:top-2 lg:top-10 z-0"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
                variants={decorationVariants}
            >
                <Image
                    src="/Our_Services/Abstract.svg"
                    alt="Abstract Sticker"
                    width={100}
                    height={100}
                    className="opacity-60 sm:w-[160px] sm:h-[160px] sm:opacity-70 md:w-[150px] md:h-[150px] md:opacity-70 lg:w-[200px] lg:h-[200px] lg:opacity-100"
                />
            </motion.div>

            <motion.div
                className="relative inset-x-0 mt-[40px] md:mt-[60px] lg:mt-[80px] pb-[20px] md:pb-[0px] lg:pb[20px] z-[10] flex justify-center"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
                variants={decorationVariants2}
            >
                <Image
                    src="/divider.svg"
                    alt="Divider"
                    width={800}
                    height={30}
                    className="opacity-100 sm:w-[1000px] sm:h-[30px] md:w-[1200px] md:h-[30px]"
                />
            </motion.div>
        </section>
    );
}