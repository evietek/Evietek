"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { id: 1, logo: "/clients/Pen_&_Papers.svg", alt: "Pen & Papers" },
  { id: 2, logo: "/clients/Kinno.svg", alt: "Kinno" },
  { id: 3, logo: "/clients/Unisell.svg", alt: "Unisell" },
  { id: 4, logo: "/clients/AK.svg", alt: "American Kitchen" },
  { id: 5, logo: "/clients/Lavish.svg", alt: "Lavish" },
  { id: 6, logo: "/clients/Valley_Soles.svg", alt: "Valley Soles" },
  { id: 7, logo: "/clients/Chic_Styles.svg", alt: "Chic Styles" },
  { id: 8, logo: "/clients/Baskoteh.svg", alt: "Baskoteh" },
  { id: 9, logo: "/clients/True_Smile.svg", alt: "True Smile" },
  { id: 10, logo: "/clients/Coral_Tower.svg", alt: "Coral Tower" },
];

export default function TrustedClients() {
  return (
    <section className="bg-[#FFFFFF] py-12 overflow-hidden w-full">
      {/* Heading (Slides in from Bottom) */}
      <motion.h2
        className="text-center text-2xl md:text-3xl font-bold text-[#341E61] mb-6 select-none cursor-default"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Trusted By Amazing Clients & Brands
      </motion.h2>

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
