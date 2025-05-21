import HeroSection from "@/components/HeroSection2";
import WhyChoose from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import TestimonialsSection from "@/components/TestimonialsSection";
import Team from "@/components/Team";

const AboutPage = () => {
  return (
    <main className="bg-[#FFFFFF] cursor-default select-none">   
      <HeroSection
        tagText="About Evietek"
        tagBgColor="#CB73FE"
        heading={`Driven by Innovation, 
Powered by Passion`}
        subheading={`Discover the people and purpose behind Evieteks 
mission to elevate brands digitally from start to finish.`}
      />
      <WhyChoose/>
      <CTA/>
      <Team/>
      <TestimonialsSection/>
    </main>
  );
};

export default AboutPage;