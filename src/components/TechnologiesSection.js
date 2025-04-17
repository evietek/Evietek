'use client';

import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiFigma,
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiWordpress,
  SiShopify,
  SiWoo,
} from "react-icons/si";

const techData = {
  Frontend: [
    { name: "HTML", icon: <SiHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 size={40} className="text-blue-500" /> },
    { name: "React", icon: <SiReact size={40} className="text-cyan-500" /> },
    { name: "React Native", icon: <SiReact size={40} className="text-indigo-400" /> },   
    { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-teal-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs size={40} className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress size={40} className="text-gray-600" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} className="text-black" /> },
    { name: "MySQL", icon: <SiMysql size={40} className="text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
    { name: "Firebase", icon: <SiFirebase size={40} className="text-amber-500" /> },
  ],
  "UI UX Design": [
    { name: "Figma", icon: <SiFigma size={40} className="text-purple-500" /> },
    { name: "Adobe XD", icon: <SiAdobexd size={40} className="text-fuchsia-600" /> },
    { name: "Illustrator", icon: <SiAdobeillustrator size={40} className="text-amber-600" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop size={40} className="text-blue-700" /> },
  ],
  CMS: [
    { name: "WordPress", icon: <SiWordpress size={40} className="text-blue-700" /> },
    { name: "Shopify", icon: <SiShopify size={40} className="text-green-600" /> },
    { name: "WooCommerce", icon: <SiWoo size={40} className="text-purple-600" /> },
  ],
};

const tabs = Object.keys(techData);

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className="bg-[#FFFFFF] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] leading-[107%] font-bricolage font-bold text-[#341E61] mb-12 select-none cursor-default">
            Technologies We Work With
          </h2>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium border transition-all
                ${
                  activeTab === tab
                    ? "bg-[#5E51FE] text-white"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tech Cards Container */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
            {techData[activeTab].map((tech) => (
              <div
                key={tech.name}
                className="bg-white rounded-xl shadow-md py-4 md:p-6 w-32 md:w-40 flex flex-col items-center justify-center 
                transition-all duration-300 cursor-pointer border border-transparent
                hover:shadow-[0_4px_10px_0_#CCCBEE] hover:border-[#5E51FE]"
              >
                {tech.icon}
                <p className="text-gray-800 font-medium mt-3">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}