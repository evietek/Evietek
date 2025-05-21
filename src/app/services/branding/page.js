"use client";
import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import WhyChoose from '@/components/ServiceWCU';
import Feature from '@/components/ServiceFeature';
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceSidebar from "@/components/ServiceSidebar";

const faqs = [
  {
    question: "What is branding, and why does it matter?",
    answer:
      "Branding is the process of creating a unique identity through visuals, messaging and strategy. It differentiates your business from competitors and builds trust with your audience",
  },
  {
    question: "What branding services do you offer?",
    answer:
"Our services include brand strategy development, logo design, visual identity creation, content development and social media branding.",
  },
  {
    question: "How long does it take to develop a brand identity?",
    answer:
"A complete brand identity typically takes 4-8 weeks, covering consultation, design and revisions. ",
  },
  {
    question: " Can I update my current branding instead of starting from scratch?",
    answer:
    "Yes! We refine and modernize your existing brand while preserving its core identity to maintain recognition"  },
];

const BrandingServicePage = () => {
  const images = [
    { src: '/Services/Branding/hero1.png', alt: 'Branding' },
    { src: '/Services/Branding/hero2.jpg', alt: 'Bradning' }
  ];

  return (
    <main className="bg-[#F2F2F5] select-none cursor-default pt-10 md:pt-0">  
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#030438] mb-4">
              Build a Brand That Stands Out
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            In a crowded marketplace, branding is the key to recognition and trust. At Evietek, we craft brand identities that leave a lasting impression. Think about the golden arches of McDonald`s, instantly recognizable and trusted worldwide. That’s the power of strong branding. Our expert branding services ensure your business creates a compelling identity that resonates with your audience and sets you apart.             </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0 sm:mb-0">
            <WhyChoose
              heading="Why Choose Evietek For Branding Services"
              description="Evietek`s branding solutions go beyond aesthetics, we establish your business as a strong, memorable brand. Our services enhance brand recognition and build deep, lasting customer relationships."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Comprehensive Brand Strategy",
                  description: "Position your brand effectively with tailored strategies."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Brand Support & Consultation",
                  description: "Ensure brand consistency with expert guidance."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Visual Identity Development",
                  description: "From logo design to brand guidelines, we create cohesive assets."
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable Solutions Tailored to Your Growth",
                  description: "Flexible branding solutions that evolve with your business."
                }
              ]}
              bottomDescription="We take the time to understand your brand values and goals, ensuring our branding solutions align perfectly with your vision. Stand out and capture your target audience with Evietek’s strategic branding expertise. "
            />
          </div>

          {/* Features Section */}
          <div className="mb-0 sm:mb-0">
            <Feature
              heading="Feature of Branding Design Services"
              description="Experience a holistic approach to branding that combines strategy, creativity and seamless integration to build a strong and memorable identity."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Strategic Brand Analysis",
                  description: "Gain in-depth insights into your market and audience to establish a strong foundation."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Brand Performance Monitoring",
                  description: "Track engagement, refine strategies and ensure long-term brand success."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "User-Friendly Brand Interface",
                  description: "Deliver a cohesive and engaging brand experience across all platforms."
                }
              ]}
              bottomImage={{
                src: "/Services/Branding/image.png",
                alt: "Brand Illustration",
                width: 400,
                height: 300
              }}
              bottomDescription="Our data-driven strategies, innovative design and continuous support help increase brand visibility and drive sustainable growth."
              additionalFeatures={[
                "Comprehensive Brand Strategy",
                "Consistent Visual Identity",
                "Regular Performance Analytics",
                "Scalable and Flexible Solutions"
              ]}
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#030438] mb-4 sm:mb-6 px-4 sm:px-8 md:px-12">
              Elevate Your Brand with Evietek
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed  mb-2 px-4 sm:px-8 md:px-12">
            Your brand is more than just a logo, it’s an experience. Let Evietek help you build a powerful identity that attracts, engages and retains customers. Get started today and take your brand to the next level!
            </p>

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

 
 
 