// "use client";

// import { forwardRef, useImperativeHandle, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import Image from "next/image";
// import Link from "next/link";

// const Carousel = forwardRef((props, ref) => {
//   const [swiperInstance, setSwiperInstance] = useState(null);

//   // Expose next and prev functions
//   useImperativeHandle(ref, () => ({
//     next: () => swiperInstance?.slideNext(),
//     prev: () => swiperInstance?.slidePrev(),
//   }));

//   // Portfolio items data
//   const portfolioItems = [
//     { id: 1, src: "/Portfolio/img_1.png", alt: "Portfolio 1" },
//     { id: 2, src: "/Portfolio/img_2.png", alt: "Portfolio 2" },
//     { id: 3, src: "/Portfolio/img_3.png", alt: "Portfolio 3" },
//     { id: 4, src: "/Portfolio/img_4.png", alt: "Portfolio 4" },
//   ];

 
//   return (
//     <div className="relative w-screen overflow-hidden">
//       <div 
//         className="relative w-full px-2 pr-8 sm:px-4 md:px-8 lg:px-12 flex justify-center lg:justify-end overflow-hidden"
//       >
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={10}
//           slidesPerView="auto"
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           speed={2000}
//           onSwiper={setSwiperInstance}
//           className="w-full sm:w-[90%] md:w-[85%] lg:w-full"
//           breakpoints={{
//             480: { slidesPerView: 1.2, spaceBetween: 10 }, // Mobile - Centered
//             640: { slidesPerView: 1.5, spaceBetween: 10 }, // Small tablets - Centered
//             768: { slidesPerView: 2, spaceBetween: 12 }, // Tablets - Centered
//             1024: { slidesPerView: 2.8, spaceBetween: 15 }, // Small desktops - Right side
//             1280: { slidesPerView: 3.5, spaceBetween: 15 }, // Large screens - Right side
//           }}
//         >
//           {/* Generate slides dynamically */}
//           {[...portfolioItems, ...portfolioItems].map((item, index) => (
//             <SwiperSlide key={index} className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
//               {/* <Link href={`/Portfolio/${item.alt.toLowerCase().replace(/\s+/g, "-")}`} passHref> */}
//                 <motion.div
//                   className="bg-white shadow-lg rounded-2xl p-4 cursor-pointer"
//                   custom={index} // Pass index for stagger effect
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                 >
//                   <Image 
//                     src={item.src} 
//                     alt={item.alt} 
//                     width={400} 
//                     height={300} 
//                     className="rounded-lg w-full h-auto"
//                   />
//                 </motion.div>
//               {/* </Link> */}
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// });

// Carousel.displayName = "Carousel";
// export default Carousel;

"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Carousel = forwardRef((props, ref) => {
  const scrollRef = useRef(null);

  const portfolioItems = [
    { id: 1, src: "/Portfolio/img_1.png", alt: "Portfolio 1" },
    { id: 2, src: "/Portfolio/img_2.png", alt: "Portfolio 2" },
    { id: 3, src: "/Portfolio/img_3.png", alt: "Portfolio 3" },
    { id: 4, src: "/Portfolio/img_4.png", alt: "Portfolio 4" },
  ];

  // Expose next/prev scroll functionality
  useImperativeHandle(ref, () => ({
    next: () => {
      scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });
    },
    prev: () => {
      scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
    },
  }));

  return (
    <div className="relative w-screen overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="flex animate-marquee whitespace-nowrap gap-4">
          {[...portfolioItems, ...portfolioItems].map((item, index) => (
            <div
              key={index}
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] shrink-0"
            >
              <motion.div
                className="bg-white shadow-lg rounded-2xl p-4 cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        .animate-marquee {
          animation: scroll-left 20s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
});

Carousel.displayName = "Carousel";
export default Carousel;
