"use client";
import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import WhyChoose from '@/components/ServiceWCU';
import Feature from '@/components/ServiceFeature';
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceSidebar from "@/components/ServiceSidebar";

const faqs = [
  {
    question: "What is branding, and why is it important for my business?",
    answer:
      "Branding is the process of creating a unique identity for your business through visuals, messaging, and strategy. It helps differentiate you from competitors and builds trust with your audience.",
  },
  {
    question: "What branding services do you offer?",
    answer:
      "We provide a range of services, including brand strategy development, logo design, visual identity creation, content creation, and social media branding. ",
  },
  {
    question: "How long does it take to develop a complete brand identity?",
    answer:
      "The timeline depends on the scope of the project. Typically, creating a full brand identity takes 4–8 weeks, including consultations, designs, and revisions.",
  },
  {
    question: " Can I update my current branding instead of starting from scratch?",
    answer:
      "Yes, we can help refine and modernize your existing branding while preserving its core essence to maintain recognition.",
  },
];

const BrandingServicePage = () => {
  const images = [
    { src: '/Services/Branding/hero1.png', alt: 'Branding' },
    { src: '/Services/Branding/hero2.jpg', alt: 'Bradning' }
  ];

  return (
    <main className="bg-[#F2F2F5]">  
      <Breadcrumb 
        title="Branding" 
        backgroundImage="/Services/Branding/bg.jpeg" 
        backgroundPosition="center 52%" 
      />
      
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <ServiceSidebar />
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4 px-4 sm:px-6 md:px-8 py-8 sm:py-4">
          {/* Carousel Section */}
          <div className="mb-4 sm:mb-4">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Carousel images={images} />
              </div>
            </div>
          </div>

          {/* Title and Description Section */}
          <div className="mb-0 sm:mb-0 px-4 sm:px-8 md:px-12">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              In today's competitive market, effective branding is essential for success. At Evietek, we understand that strong branding builds recognition and trust among customers. For instance, think about how instantly recognizable the golden arches of McDonald's are. That's the power of branding. Our branding services are designed to help your business create a memorable identity that resonates with your target audience. 
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0 sm:mb-0">
            <WhyChoose
              heading="Why Choose Evietek For Branding Services"
              description="Evietek's branding solutions are designed to establish a unique identity for your business, enhance brand recognition, and build lasting customer relationships."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Comprehensive Brand Strategy",
                  description: "Craft tailored strategies to position your brand effectively in the market."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Brand Support & Consultation",
                  description: "Continuous guidance to ensure your brand remains consistent and impactful. "
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Visual Identity Development",
                  description: "From logo design to brand guidelines, we create cohesive visual assets. "
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable Solutions Tailored to Your Business Growth",
                  description: "Flexible branding solutions that evolve with your business."
                }
              ]}
              bottomDescription="Our professionals will learn your brand values and goals to ensure our solutions suit your vision. Evietek's branding skills may wow your target audience in a competitive market."
            />
          </div>

          {/* Features Section */}
          <div className="mb-0 sm:mb-0">
            <Feature
              heading="Feature of Branding Design Services"
              description="Experience strategic brand development, creative design, and seamless integration for a powerful and memorable brand identity."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Strategic Brand Analysis",
                  description: "Understand your market and audience to build a solid foundation."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Brand Performance Monitoring",
                  description: "Track engagement and optimize brand strategies for maximum impact. "
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "User-Friendly Brand Interface",
                  description: "Create a cohesive and intuitive brand experience across all platforms."
                }
              ]}
              bottomImage={{
                src: "/Services/Branding/image.png",
                alt: "Brand Illustration",
                width: 400,
                height: 300
              }}
              bottomDescription="We deliver data-driven strategies, creative assets, and ongoing support to elevate your brand's visibility and drive growth. "
              additionalFeatures={[
                "Comprehensive Brand Strategy",
                "Consistent Visual Identity",
                "Regular Performance Analytics",
                "Scalable and Flexible Solutions"
              ]}
            />
          </div>

          {/* FAQ Section */}
            <div className="mb-0 sm:mb-0 px-4 sm:px-8 md:px-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#030438] mb-6 sm:mb-8">
              Frequently Asked Questions
            </h2>
            <ServiceFAQ faqs={faqs} className="w-full" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BrandingServicePage;

 
 
 