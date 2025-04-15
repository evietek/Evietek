"use client";

import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
    // Right Decorative Animation
    const decorationVariants = {
        initial: { opacity: 0, y: 100 },
        animate: {
            opacity: 0.7,
            y: 0,
            transition: { duration: 1.3, ease: "easeOut" }
        }
    };

    // Divider Animation (Appearing from Top)
    const decorationVariants2 = {
        initial: { opacity: 0, y: -100 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.3, ease: "easeOut" }
        }
    };

    // Slide-in from bottom for "What We Do" heading
    const headingVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.3, ease: "easeOut" }
        }
    };

    // Service Cards Data
    const services = [
        {
            title: "Website Design",
            description: "Captivate visitors with sleek, user-friendly designs that drive engagement and conversions effortlessly.",
            icon: "/Our_Services/Website_Logo.svg",
            decoration: "/Our_Services/Decor_1.svg",
            link: "/website-design"
        },
        {
            title: "Branding Design",
            description: "Craft a powerful brand identity that resonates, builds trust, and sets you apart instantly.",
            icon: "/Our_Services/Branding_Design_Logo.svg",
            decoration: "/Our_Services/Decor_2.svg",
            link: "/branding"
        },
        {
            title: "Social Media Marketing",
            description: "Dominate digital platforms with strategic content that attracts, engages, and converts your audience.",
            icon: "/Our_Services/Marketing_Logo.svg",
            decoration: "/Our_Services/Decor_3.svg",
            link: "/social-media-marketing"
        }
    ];

    return (
        <section id="services" className="relative bg-[#FFFFFF] text-[#333] py-3 md:py-8 lg:pt-8 px-4 md:px-8 lg:px-12 pb-0">
            {/* Section Heading */}
            <div className="flex flex-col items-center text-center">
            <div className="relative flex justify-center items-center w-full mt-10 md:mt-0 lg:mt-0">
      {/* Our Text */}
      <div className="relative z-10 -mt-16 -mr-2.5 lg:-mt-20">
  <div className="flex items-center justify-center rounded-[12px] rotate-[-3.5deg] p-[10px] sm:px-[15px] sm:py-[10px]" // 👈 Responsive padding: 10px for mobile, 15px for sm and up
    style={{ backgroundColor: "#CB73FE" }}
  >
          <span className="font-['Bricolage_Grotesque'] font-extrabold text-white text-xl sm:text-xl md:text-2xl lg:text-3xl text-center"
          >
            Our
          </span>
        </div>
      </div>

      {/* Services Text - With correct specs */}
      <div className="relative -ml-0 -mt-8 z-0">
  <div 
    className="flex items-center justify-center rounded-[12px] p-[10px] sm:px-[15px] sm:py-[10px]"
    style={{
      backgroundColor: "#5E51FE",
      top: "20px",
      left: "113.77px",
      transform: "rotate(5.29deg)"
    }}
  >

          <span 
            className="font-['Bricolage_Grotesque'] font-extrabold text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          >
            Services
          </span>
        </div>
      </div>
    </div>

                {/* "What We Do" Heading with Slide-in Animation */}
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

            {/* Services Cards Section */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:gap-6">
                {services.map((service) => (
                    <Link key={service.title} href={service.link} passHref>
                        <div className="cursor-pointer">
                            <ServiceCard
                                background="white"
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                decoration={service.decoration}
                            />
                        </div>
                    </Link>
                ))}
            </div>

            {/* Decorative Sticker (Right Corner) */}
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

            {/* Divider (Centered Below Everything) */}
            <motion.div
                className="relative inset-x-0 mt-[5px] sm:mt-4 md:mt-[10px] lg:mt-[80px] lg:mb-[20px] z-[10] flex justify-center"
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
