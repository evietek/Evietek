"use client";
import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import WhyChoose from '@/components/ServiceWCU';
import Feature from '@/components/ServiceFeature';
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceSidebar from "@/components/ServiceSidebar";

const faqs = [
  {
    question: "What is the typical cost of a website design?",
    answer:
"Website design costs vary depending on features and complexity, typically ranging from a few hundred to several thousand dollars. "  },
  {
    question: "How long does it take to complete a website design project?",
    answer:
"Timelines vary based on project scope but usually range from a few weeks to a few months. "  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
"Yes! All our websites are fully responsive and optimized for seamless performance across all devices. "  },
  {
    question: "Can I update the website myself after it`s completed?",
    answer:
"Absolutely! We provide training and resources to help you manage and update your website independently post-launch. "  },
];

const WebDesignServicePage = () => {
  const images = [
    { src: '/Services/Web/hero1.jpg', alt: 'Web Design' },
    { src: '/Services/Web/hero2.jpg', alt: 'Web Design' }
  ];

  return (
    <main className="bg-[#F2F2F5] select-none cursor-default pt-10 md:pt-0">  
      <Breadcrumb 
        title="Web Design" 
        backgroundImage="/Services/Web/bg.jpg"
        backgroundPosition="center 60%" 
      />
      
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <ServiceSidebar />
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4 px-4 lg:px-8 py-4">
          {/* Carousel Section */}
          <div className="mb-4">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Carousel images={images} />
              </div>
            </div>
          </div>

          {/* Title and Description Section */}
          <div className="mb-0 px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#030438] mb-4">
            Elevate Your Digital Presence with Exceptional Website Design 
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-600 leading-relaxed">
            In today’s competitive online world, your website is often the first impression customers have of your brand. At Evietek, we create visually stunning and highly functional websites that not only capture attention but also enhance user experience and build trust. Whether you own a local café or a global eCommerce store, a professionally designed website ensures you stand out in a crowded market.             </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Evietek`s Website Design Services"
              description="At Evietek, we go beyond aesthetics, we design digital experiences that captivate audiences and drive conversions. By blending creativity, functionality and the latest technology, we craft bespoke websites that elevate your brand identity and maximize engagement."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Custom Design Tailored to Your Brand`s Vision"
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Support and Continuous Performance Optimization"
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Integration with Existing Digital Infrastructure"
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable Solutions for Future Growth and Expansion"
                }
              ]}
              bottomDescription="Our expert team ensures your website is fully responsive, user-friendly and optimized to deliver measurable results."
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Feature of Website Design Services"
              description="We provide cutting-edge, user-centric designs that combine aesthetics with seamless functionality to enhance your online presence."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Creative Web Design",
                  description: "Custom-built, responsive websites that align with your brand and captivate visitors. "
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Performance Monitoring",
                  description: "Ensure continuous functionality and a smooth user experience through ongoing tracking."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "User-Friendly Interface",
                  description: "Intuitive navigation and layout that improve engagement and conversions."
                }
              ]}
              bottomImage={{
                src: "/Services/Web/image.png",
                alt: "Web Designer working",
                width: 400,
                height: 300
              }}
              bottomDescription="Our designs prioritize creativity, performance and scalability to ensure your brand’s success in the digital space."
              additionalFeatures={[
                "Customized UI/UX Solutions",
                "Scalable Design Architecture",
                "SEO-Optimized Development",
                "Ongoing Support and Maintenance"
              ]}
            />
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#030438] mb-4 sm:mb-6 px-4 sm:px-8 md:px-12">
                        Get a Website That Works for Your Business
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed  mb-2 px-4 sm:px-8 md:px-12">
            Your website should do more than just look good, it should engage, convert and grow with your brand. Let Evietek design a website that makes an impact. Contact us today! 
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mb-0 px-12">
            <h2 className="text-3xl font-bold text-[#030438] mb-8">
              Frequently Asked Questions
            </h2>
            <ServiceFAQ faqs={faqs} className="w-full" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WebDesignServicePage;

 
 
 