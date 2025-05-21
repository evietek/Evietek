"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { id: 1, logo: "/Clients/Pen_&_Papers.svg", alt: "Pen & Papers" },
  { id: 2, logo: "/Clients/Kinno.svg", alt: "Kinno" },
  { id: 3, logo: "/Clients/Unisell.svg", alt: "Unisell" },
  { id: 4, logo: "/Clients/AK.svg", alt: "American Kitchen" },
  { id: 5, logo: "/Clients/Lavish.svg", alt: "Lavish" },
  { id: 6, logo: "/Clients/Valley_Soles.svg", alt: "Valley Soles" },
  { id: 7, logo: "/Clients/Chic_Styles.svg", alt: "Chic Styles" },
  { id: 8, logo: "/Clients/Baskoteh.svg", alt: "Baskoteh" },
  { id: 9, logo: "/Clients/True_Smile.svg", alt: "True Smile" },
  { id: 10, logo: "/Clients/Coral_Tower.svg", alt: "Coral Tower" },
];

export default function TrustedClients() {
  return (
    <section className="bg-[#FFFFFF] py-12 overflow-hidden w-full text-center">
      {/* Heading (Slides in from Bottom) */}
      <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] leading-[107%] font-bricolage font-bold text-[#341E61] mb-12 select-none cursor-default">
            Trusted By Amazing Clients & Brands
          </h2>

      {/* Scrolling Carousel (Slides in from Right) */}
      <motion.div
        className="relative w-full overflow-hidden"
        initial={{ opacity: 0, x: 100 }} // Start off-screen right
        whileInView={{ opacity: 1, x: 0 }} // Slide in when in view
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
<motion.div
  className="flex w-max space-x-10"
  animate={{ x: ["0%", "-50%"] }}
  transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
        >
          {/* Duplicate clients to create a seamless infinite loop */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="w-[250px] h-[250px] flex-shrink-0 bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.alt}
                width={220}
                height={220}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
