"use client";

import Breadcrumb from '@/components/BreadCrumb';
import ServicesSection from '@/components/ServicesPageSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQSection from '@/components/FAQSection';

const ServicesPage = () => {
  return (
    <main className="bg-[#F2F2F5]">  
      <div className="w-full">
        <Breadcrumb 
          title="Our Services" 
          backgroundImage="/Services/service-bg.jpg"
          backgroundPosition="center 30%" 
        />
      </div>
      <ServicesSection /> 
      <WhyChooseUs />
      <FAQSection />
    </main>
  );
};

export default ServicesPage;
