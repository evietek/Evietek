"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Breadcrumb from '@/components/BreadCrumb';

// Add color mapping for skills
const skillColors = {
  "Digital Painting": "bg-[#FF6B6B]/20 text-[#FF6B6B]",
  "Character Design": "bg-[#4ECDC4]/20 text-[#4ECDC4]",
  "Vector Illustration": "bg-[#A78BFA]/20 text-[#A78BFA]",
  "Brand Identity": "bg-[#F59E0B]/20 text-[#F59E0B]",
  "Marketing Strategy": "bg-[#10B981]/20 text-[#10B981]",
  "Visual Identity": "bg-[#EC4899]/20 text-[#EC4899]",
  "Typography": "bg-[#8B5CF6]/20 text-[#8B5CF6]",
};

// Sample project data
const projects = [
  {
    id: 1,
    title: "Illustration",
    category: "design",
    description: "A collection of illustrations created by our talented design team",
    image: "/Portfolio_Main/illustration.png",
    color: "#FF6B6B",
    skills: ["Digital Painting", "Character Design", "Vector Illustration"],
    link: "https://www.behance.net/gallery/221656995/Illustrations"
  },
  {
    id: 2,
    title: "Branding",
    category: "design",
    description: "A collection of branding projects created by our talented design team",
    image: "/Portfolio_Main/branding.png",
    color: "#4ECDC4",
    skills: ["Brand Identity", "Marketing Strategy", "Visual Identity"],
    link: "https://www.behance.net/gallery/191328457/Branding"
  },
  {
    id: 3,
    title: "Logo Design",
    category: "design",
    description: "A collection of logo design projects created by our talented design team",
    image: "/Portfolio_Main/logo.png",
    color: "#A78BFA",
    skills: ["Vector Illustration", "Brand Identity", "Typography"],
    link: "https://www.behance.net/gallery/191322361/Logos"
  },
];

const categories = ["all", "web", "design", "marketing"];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = projects.filter(project => 
    activeCategory === "all" ? true : project.category === activeCategory
  );

  return (
    <main className="bg-[#F2F2F5]">

      <Breadcrumb 
      title="Portfolio" 
      backgroundImage="/Portfolio_Main/bg.webp" 
    />


      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-[#030438] mb-4"
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore our collection of successful projects and creative solutions
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full cursor-pointer transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-[#030438] text-white"
                    : "bg-white text-[#030438] hover:bg-[#030438]/10"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#030438] text-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="relative h-48 sm:h-56 mb-4 rounded-xl overflow-hidden group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                      >
                        <motion.a
                          href={project.link}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="px-6 py-2 bg-white text-[#030438] rounded-full font-medium"
                        >
                          View
                        </motion.a>
                      </motion.div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map(skill => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${skillColors[skill] || 'bg-white/10 text-white'}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage; 