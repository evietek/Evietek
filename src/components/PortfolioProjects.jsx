"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { id: 1, src: "/Portfolio_2/Zonaris.svg", alt: "Zonaris", title: "Zonaris", link: "https://www.zonaris.io/" },
  { id: 2, src: "/Portfolio_2/TrailFire.svg", alt: "TrailFire", title: "TrailFire", link: "https://trailfire.com/" },
];

const PortfolioProjects = () => {
  const [tappedId, setTappedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [spacingValue, setSpacingValue] = useState(50);
  const [screenWidth, setScreenWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateValues = () => {
      const width = window.innerWidth;
      setScreenWidth(width);

      if (width < 640) setSpacingValue(80);        // mobile
      else if (width < 768) setSpacingValue(90);   // large mobile
      else if (width < 1024) setSpacingValue(100); // tablet
      else if (width < 1280) setSpacingValue(150); // laptop
      else if (width < 1536) setSpacingValue(170); // desktop
      else setSpacingValue(160);                   // large desktop
    };

    // Set initial values
    setScreenWidth(window.innerWidth);
    updateValues();

    window.addEventListener("resize", updateValues);
    return () => window.removeEventListener("resize", updateValues);
  }, []);

  // Calculate base height based on screen width
  const getBaseHeight = () => {
    if (screenWidth === 0) return 600; // Default for SSR

    if (screenWidth < 760) return 200; // For smaller screens
    if (screenWidth < 1024) return 365; // For medium screens
    if (screenWidth < 1441) return 500; // For smaller screens
    return 600; // For larger screens
  };

  const handleClick = (e, projectId, link) => {
    e.preventDefault();
    if (tappedId === projectId) {
      // If already expanded, redirect to the link
      window.open(link, "_blank");
    } else {
      // Otherwise, expand the project
      setTappedId(projectId);
    }
  };

  const handleMouseEnter = (projectId) => {
    if (tappedId === null) {
      setHoveredId(projectId);
    }
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".portfolio-card")) {
        setTappedId(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-0 sm:mb-0 md:mb-0 lg:mb-0"
    >
      <div
        className="relative w-[300px] sm:w-[300px] md:w-[580px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] flex flex-col items-center"
        style={{
          height: `${((projects.length - 1) * spacingValue) + getBaseHeight()}px`
        }}
      >
        {projects.map((project, index) => {
          // Determine if card is hovered but not tapped
          const isHovered = hoveredId === project.id && tappedId !== project.id;
          // Determine if card is tapped (expanded)
          const isTapped = tappedId === project.id;
          
          return (
            <div
              key={project.id}
              className="absolute w-full"
              style={{
                top: `${(projects.length - 1 - index) * spacingValue}px`,
                zIndex: projects.length - index,
              }}
            >
              <div
                className={`portfolio-card block w-full transition-all duration-300 ease-in-out cursor-pointer`}
                style={{
                  transform: isTapped 
                    ? `translateY(${tappedId === project.id ? '-60px' : '0px'})` 
                    : isHovered 
                      ? 'translateY(-12px)' 
                      : 'translateY(0px)',
                  boxShadow: isHovered || isTapped 
                    ? '0 0 30px rgba(204, 203, 238, 1), 0 4px 20px rgba(153, 151, 217, 0.6)' 
                    : 'none',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}
                onClick={(e) => handleClick(e, project.id, project.link)}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-full px-2 sm:px-0">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={1000}
                    height={400}
                    className="w-full max-h-[280px] sm:max-h-[230px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-none 2xl:max-h-none"
                    priority
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioProjects;