"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingCard({
  title,
  price,
  features,
  icon,
  gradient,
  popular = false,
  paymentType = "one-time", // one-time | monthly | yearly
}) {
  const [dollar, amount] = price.replace("$", "").split(".");
  const isPopular = popular;

  const buttonStyles = isPopular
    ? "bg-white border border-purple-700 text-purple-700 hover:bg-purple-500 hover:text-white"
    : "bg-transparent border border-pink-500 text-white hover:bg-pink-500 hover:text-white";

  const paymentLabel =
    paymentType === "monthly"
      ? "/MONTH"
      : paymentType === "yearly"
      ? "/YEAR"
      : null;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`relative flex flex-col items-center rounded-[28px] text-white overflow-hidden shadow-xl w-full max-w-sm ${gradient}`}
    >
      {/* POPULAR Ribbon */}
      {isPopular && (
        <div className="absolute top-4 right-[-40px] w-[160px] transform rotate-45 z-10">
          <div className="bg-white text-pink-600 text-xs font-bold text-center py-1 shadow-lg rounded-sm">
            POPULAR
          </div>
        </div>
      )}

      {/* Icon Section */}
      <div className="w-full px-6 pt-4 pb-1 flex flex-col items-center">
        <div className="bg-white/20 rounded-full w-[80px] h-[80px] flex items-center justify-center mb-4">
          {typeof icon === "string" ? (
            <img
              src={icon}
              alt={`${title} Icon`}
              className="w-[48px] h-[48px] md:w-[64px] md:h-[64px] object-contain"
            />
          ) : (
            <div className="text-5xl">{icon}</div>
          )}
        </div>

        <h3 className={`text-2xl font-bold mb-1 text-white`}>{title}</h3>
      </div>

      {/* Divider */}
      <div className="w-full px-6">
        <div className="border-t border-white/20 my-2 w-full"></div>
      </div>

      {/* Feature List */}
      <div className="w-full px-6 py-2">
        <ul className="space-y-2 text-sm mb-3 text-center">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="py-1"
              dangerouslySetInnerHTML={{ __html: feature }}
            />
          ))}
        </ul>
      </div>

      {/* Pricing */}
      <div className="mt-auto flex items-end justify-center text-center pb-4">
        <div className="flex items-start">
          <span className="text-xl mt-2">$</span>
          <span className="text-6xl font-bold leading-none">{dollar}</span>
          <div className="flex flex-col items-start justify-start ml-1">
            <span className="text-sm">.{amount || "00"}</span>
            {paymentLabel && (
              <span className="text-xl pl-5">{paymentLabel}</span>
            )}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="w-full px-8 pb-8">
        <Link href="/book-a-meeting">
          <button
            className={`w-full px-6 py-3 rounded-full text-sm font-bold transition shadow-md ${buttonStyles}`}
          >
            BOOK NOW
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
