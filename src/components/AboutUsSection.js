"use client";

import React from 'react';
import ImageGridWithRotatingSvg from './ImageGridWithRotatingSvg';
import AboutUsContent from './AboutUsContent';

const AboutUsSection = () => {
    return (
      <section className="bg-[#F2F2F5] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-0">
            {/* Left side - Image grid takes up half the width */}
            <div className="w-full lg:w-[50%]">
              <ImageGridWithRotatingSvg />
            </div>
            
            {/* Right side - Your content goes here */}
            <div className="w-full lg:w-[50%]">
              <AboutUsContent />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUsSection;