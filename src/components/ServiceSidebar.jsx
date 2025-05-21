"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const services = [
    {
    title: "Branding",
    path: "/branding",
    icon: "🎯"
  },
  {
    title: "Content Writing",
    path: "/content-writing",
    icon: "✍️"
  },
  {
    title: "SEO",
    path: "/seo",
    icon: "🔍"
  },
  {
    title: "Social Media Marketing",
    path: "/social-media-marketing",
    icon: "📱"
  },
    {
    title: "Website Design",
    path: "/website-design",
    icon: "🎨"
  },
    {
    title: "Website Development",
    path: "/website-development",
    icon: "💻"
  },


];

const ServiceSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block bg-[#030438] shadow-md p-6 h-full sticky top-4">
      <h3 className="text-xl font-bold text-white mb-6 border-b pb-4">
        Our Services
      </h3>
      <nav className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
        {services.map((service) => (
          <Link
            key={service.path}
            href={service.path}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:shadow-sm ${
              pathname === service.path
                ? "bg-gradient-to-r from-[#D376FF] to-[#5A50FF] text-white font-medium"
                : "text-white hover:bg-white/10 hover:text-[#5A50FF]"
            }`}
          >
            <span className="text-xl w-8 text-center">{service.icon}</span>
            <span className="text-sm font-medium">{service.title}</span>
          </Link>
        ))}
      </nav>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default ServiceSidebar; 