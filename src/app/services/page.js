import HeroSection from "@/components/HeroSection2";
import ServicesSection from "@/components/ServicesSection";
import IndustriesServed from "@/components/IndustriesServed";
import PortfolioSection from "@/components/PortfolioSection";


const ServicePage = () => {
  return (
    <main className="bg-[#FFFFFF] cursor-default select-none">  
<HeroSection
  tagText="Services"
  tagBgColor="#5E51FE"
  heading={`Smart Digital Solutions
That Drive Results`}
  subheading={`Explore services designed to attract, engage, 
and grow your brand across every digital touchpoint.`}
/>
<div className="relative pt-16" />
<ServicesSection services={["Website Design", "Branding Design", "Social Media Marketing" , "Content Writing" , "Website Development", "SEO" ]} showDecorations={false} />
            <IndustriesServed/>
            <PortfolioSection/>
    </main>
  );
};

export default ServicePage;
