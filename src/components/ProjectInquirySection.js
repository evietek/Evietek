'use client';

import Link from 'next/link';

export default function ProjectInquirySection() {
  return (
    <section className="w-full pb-12 px-6 flex justify-center bg-white">
      <div className="rounded-full bg-[#FAF9FD] shadow-xl px-10 sm:px-16 py-14 text-center w-fit lg:w-4xl xl:w-6xl">
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-bricolage font-bold text-[#341E61] mb-10 select-none cursor-default">
          Have A Project To Discuss?
        </h2>

        <Link href="/book-a-meeting">
          <button className="bg-gradient-to-b from-[#5A50FF] to-[#D376FF] text-white px-8 py-4 rounded-full font-bold text-xl lg:text-2xl xl:text-3xl shadow-md hover:shadow-2xl hover:shadow-purple-400/60 transition-all transform hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-[#BFA2FF]/50">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
}
