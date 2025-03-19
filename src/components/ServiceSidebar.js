"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const services = [
  {
    title: "Content Writing",
    path: "/services/content-writing",
    icon: "✍️"
  },
  {
    title: "Logo Designing",
    path: "/services/logo-designing",
    icon: "🎯"
  },
  {
    title: "Website Development",
    path: "/services/website-development",
    icon: "💻"
  },
  {
    title: "Website Design",
    path: "/services/website-design",
    icon: "🎨"
  },
  {
    title: "SEO",
    path: "/services/seo",
    icon: "🔍"
  },
  {
    title: "Social Media Marketing",
    path: "/services/social-media-marketing",
    icon: "📱"
  },
  {
    title: "Illustrations",
    path: "/services/illustrations",
    icon: "🖼️"
  },
  {
    title: "Video Editing",
    path: "/services/video-editing",
    icon: "🎬"
  },
  {
    title: "QA Testing Services",
    path: "/services/qa-testing",
    icon: "✅"
  },
  {
    title: "Web Application",
    path: "/services/web-application",
    icon: "⚡"
  },
  {
    title: "Branding",
    path: "/services/branding",
    icon: "🎯"
  },
  {
    title: "2D/3D Animation",
    path: "/services/animation",
    icon: "🎮"
  }
];

const ServiceSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block bg-[#030438] rounded-tr-lg rounded-br-lg shadow-md p-6 h-full sticky top-4">
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