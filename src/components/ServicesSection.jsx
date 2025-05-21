"use client";

import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

export default function ServicesSection({ services = [], showDecorations = true }) {
    const filteredServices = allServices.filter(service =>
        services.includes(service.title)
    );

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

            {/* Cards */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:gap-6">
                {filteredServices.map(service => (
                    <Link key={service.title} href={service.link} passHref>
                        <div className="cursor-pointer">
                            <ServiceCard
                                background="white"
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                decoration={service.decoration}
                                variant={service.variant}
                                borderColor={service.borderColor}
                            />
                        </div>
                    </Link>
                ))}
            </div>

            {/* Optional Decorations */}
            {showDecorations && (
                <>
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
                </>
            )}
        </section>
    );
}
