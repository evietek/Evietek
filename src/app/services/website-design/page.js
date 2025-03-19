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
      "The cost of website design varies based on complexity and features, but it typically ranges from a few hundred to several thousand dollars.",
  },
  {
    question: "How long does it take to complete a website design project?",
    answer:
      "The timeline for completing a website design project can range from a few weeks to a few months, depending on the project's scope. ",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes, we ensure that all websites are designed to be responsive and mobile-friendly, providing a seamless experience across all devices.",
  },
  {
    question: "Can I update the website myself after it's completed?",
    answer:
      "Absolutely! We provide training and resources to help you manage and update your website independently once it's launched.",
  },
];

const WebDesignServicePage = () => {
  const images = [
    { src: '/Services/Web/hero1.jpg', alt: 'Web Design' },
    { src: '/Services/Web/hero2.jpg', alt: 'Web Design' }
  ];

  return (
    <main className="bg-[#F2F2F5]">  
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
              Pioneering Excellence in Website Design
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-600 leading-relaxed">
              In today's digital landscape, a well-designed website is essential for any business. At Evietek, we recognize that your website is often the first impression customers have of your brand. A visually appealing and user-friendly site can significantly enhance user experience and build trust. Whether you run a local café or an online retail store, effective website design can help you stand out in a crowded market.
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Evietek's Website Design Services"
              description="Evietek crafts exceptional digital experiences that captivate audiences and drive conversions. By combining creativity, functionality, and cutting-edge technology, we deliver bespoke website designs that enhance your brand identity and foster user engagement."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Custom Design Tailored to Your Brand's Vision"
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
              bottomDescription="Evietek's website design services prioritize creativity and functionality. We craft tailored, responsive websites that enhance user experience, drive engagement, and fuel your business growth."
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Feature of Website Design Services"
              description="Delivering innovative, user-centric designs with cutting-edge functionality to enhance your brand's online presence and drive engagement."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Creative Web Design",
                  description: "Craft visually stunning, responsive websites tailored to your brand."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Performance Monitoring",
                  description: "Ensure seamless functionality and optimal user experience with continuous tracking."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "User-Friendly Interface",
                  description: "Intuitive designs that captivate visitors and improve navigation."
                }
              ]}
              bottomImage={{
                src: "/Services/Web/image.png",
                alt: "Web Designer working",
                width: 400,
                height: 300
              }}
              bottomDescription="Shape Providing creative design solutions, performance monitoring, and user-friendly experiences to elevate your digital presence."
              additionalFeatures={[
                "Customized UI/UX Solutions",
                "Scalable Design Architecture",
                "SEO-Optimized Development",
                "Ongoing Support and Maintenance"
              ]}
            />
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

 
 
 