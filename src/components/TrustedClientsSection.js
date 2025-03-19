"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { id: 1, logo: "/clients/xp.svg", alt: "XP" },
  { id: 2, logo: "/clients/vital.svg", alt: "Vital" },
  { id: 3, logo: "/clients/resly.svg", alt: "Resly" },
  { id: 4, logo: "/clients/humaans.svg", alt: "Humaans" },

];

export default function TrustedClients() {
  return (
    <section className="bg-white py-12 overflow-hidden w-full">
      {/* Heading (Slides in from Bottom) */}
      <motion.h2
        className="text-center text-2xl md:text-3xl font-bold text-[#341E61] mb-6"
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
          animate={{ x: ["0%", "-50%"] }} // Infinite scrolling effect
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
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
