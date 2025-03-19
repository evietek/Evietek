import ServiceCard from "@/components/ServicePageCard";

const services = [
  {
    title: "Content Writing",
    icon: "/Services/icon-service-1.svg",
    description: "Crafting Words that Resonate and Convert.",
    link: "/services/content-writing",
  },
  {
    title: "Logo Designing",
    icon: "/Services/icon-service-2.svg",
    description: "Designing Symbols That Tell Your Story.",
    link: "/services/logo-designing",
  },
  {
    title: "Website Development",
    icon: "/Services/icon-service-3.svg",
    description: "Building Foundations for Your Digital Future.",
    link: "/services/website-development",
  },
  {
    title: "Website Designing",
    icon: "/Services/icon-service-4.svg",
    description: "Creating Beautiful, User-Friendly Digital Experiences.",
    link: "/services/website-design",
  },
  {
    title: "SEO",
    icon: "/Services/icon-service-5.svg",
    description: "Boosting Visibility, Driving Targeted Traffic.",
    link: "/services/seo",
  },
  {
    title: "Social Media Marketing",
    icon: "/Services/icon-service-6.svg",
    description: "Connecting Your Brand with Its Audience.",
    link: "/services/social-media-marketing",
  },

  {
    title: "Video Editing",
    icon: "/Services/icon-service-1.svg",
    description: "Tell Your Story, Engage Your Audience.",
    link: "/services/video-editing",
  },
  {
    title: "Illustrations",
    icon: "/Services/icon-service-2.svg",
    description: "Bringing Ideas to Life with Art",
    link: "/services/illustrations",
  },
  {
    title: "QA Testing Services",
    icon: "/Services/icon-service-3.svg",
    description: "Ensuring Quality, Delivering Perfection Every Time.",
    link: "/services/qa-testing-services",
  },
  {
    title: "Web Application",
    icon: "/Services/icon-service-4.svg",
    description: "Custom Solutions to Power Your Digital Success.",
    link: "/services/web-application",
  },
  {
    title: "Branding",
    icon: "/Services/icon-service-5.svg",
    description: "Crafting Identities that Resonate and Evolve",
    link: "/services/branding",
  },
  {
    title: "2D/3D Animation",
    icon: "/Services/icon-service-6.svg",
    description: "Animating Stories that Capture Hearts and Minds.",
    link: "/services/2d-3d-animation",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-[#030438]">
        Services We Provide
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
