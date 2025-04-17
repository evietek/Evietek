'use client';

import Link from 'next/link';

export default function ProjectInquirySection() {
  return (
    <section className="bg-gradient-to-r from-white via-gray-50 to-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] leading-[107%] font-bricolage font-bold text-[#341E61] mb-12 select-none cursor-default">
            Have A Project To Discuss?
          </h2>
        <Link href="/book-a-meeting">
        <button className="bg-[#5E51FE] hover:bg-[#4A40E4] text-white font-medium px-6 py-3 rounded-md shadow transition duration-300">
  CONTACT US
</button>
        </Link>
      </div>
    </section>
  );
}
