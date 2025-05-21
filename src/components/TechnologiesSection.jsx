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
    <section className="bg-[#FFFFFF] py-10 relative z-0 overflow-visible">
      <div 
        className="relative lg:max-w-[60rem] xl:max-w-6xl mx-auto py-16 px-6 text-center bg-[#FFFFFF] rounded-xl z-10"
        style={{ 
          boxShadow: '0px 20px 80px 30px rgba(204, 200, 238, 0.66)',
          transform: 'translateZ(0)' // Force GPU acceleration for better shadow rendering
        }}
      >
        <div className="relative flex justify-center items-center w-full mt-4 sm:my-10">
          <div className="relative z-10 -mt-6 -mr-3 rotate-[-5.54deg] bg-[#5E51FE] px-3 py-1.5 sm:px-4 sm:py-2 rounded-[12px]">
            <span className="font-extrabold text-white text-base sm:text-xl md:text-2xl lg:text-3xl">
              Tools &
            </span>
          </div>
          <div className="relative z-0 rotate-[-4.57deg] bg-[#CB73FE] px-3 py-1.5 sm:px-4 sm:py-2 rounded-[12px]">
            <span className="font-extrabold text-white text-base sm:text-xl md:text-2xl lg:text-3xl">
              Tech Stack
            </span>
          </div>
        </div>
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] leading-[107%] font-bricolage font-bold text-[#341E61] mb-12 select-none cursor-default">
          Technologies We Work With
        </h2>
        {/* Tabs */}
{/* Tabs */}
<div className="flex flex-wrap justify-center mb-10">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`px-6 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300
        ${
          activeTab === tab
            ? "bg-white text-[#341E61] shadow-lg"
            : "bg-[#F7F7FD] text-gray-600 hover:bg-gray-100"
        }`}
      style={{
        boxShadow: activeTab === tab ? '0px 4px 10px rgba(204, 200, 238, 0.5)' : 'none'
      }}
    >
      {tab === "Frontend" ? "Front-End Development" : 
       tab === "Backend" ? "Back-End Development" : 
       tab === "UI UX Design" ? "UI/UX Design" : tab}
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