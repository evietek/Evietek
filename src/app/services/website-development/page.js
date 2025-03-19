"use client";
import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import WhyChoose from '@/components/ServiceWCU';
import Feature from '@/components/ServiceFeature';
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceSidebar from "@/components/ServiceSidebar";

const faqs = [
  {
    question: "What are niche web development services?",
    answer:
      "Niche web development services focus on specialized areas such as e-commerce, CMS development, or specific industry solutions tailored to unique business needs.",
  },
  {
    question: "How long does it take to develop a niche web application?",
    answer:
      "The timeline varies by project complexity, but niche web applications typically take several weeks to a few months to complete.",
  },
  {
    question: "What technologies are commonly used in niche web development?",
    answer:
      "Common technologies include HTML, CSS and JavaScript for front-end development and various back-end languages like PHP, Python, or Ruby, depending on the project's requirements.",
  },
  {
    question: "Do you provide ongoing support after the website is launched?",
    answer:
      "Yes, we offer ongoing maintenance and support services to ensure your website remains updated and functional post-launch.",
  },
];

const WebDevelopmentServicePage = () => {
  const images = [
    { src: '/Services/Web-Dev/hero1.png', alt: 'Web Development' },
    { src: '/Services/Web-Dev/hero2.webp', alt: 'Web Development' }
  ];

  return (
    <main className="bg-[#F2F2F5]">  
      <Breadcrumb 
        title="Web Development" 
        backgroundImage="/Services/Web-Dev/bg.jpeg" 
        backgroundPosition="center 0%" 
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
            <p className="text-gray-600 leading-relaxed">
              In today's digital world, a strong online presence is crucial for any business. At Evietek, we understand that web development is more than just building a website. It's about creating an engaging platform that reflects your brand and meets your customers' needs. A well-designed website can attract visitors, convert leads and build loyalty. We are here to help you achieve that.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our team of experienced developers and designers work closely with you to ensure that your website not only looks great but also functions seamlessly. Let us help you stand out in the crowded online marketplace and make a lasting impression on your target audience.
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Web Development Services?"
              description="Evietek's Web Development Services provide high-performance, secure and scalable solutions tailored for businesses. We create responsive, SEO-friendly websites that ensure seamless user experiences and drive growth."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Custom Website Development",
                  description: "Tailored solutions that address your specific business needs and challenges."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Maintenance & Support",
                  description: "Round-the-clock assistance to ensure your applications run smoothly."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Integration with Existing Systems",
                  description: "Connect your website with your current business tools and processes."
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Tailored Solutions for Business Growth",
                  description: "Scalable solutions that evolve with your business needs."
                }
              ]}
              bottomDescription="We ensure robust web solutions with secure coding practices, intuitive designs and the latest technology to empower your online presence."
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Features of Web Development Services"
              description="Evietek's Web Development Services offer cutting-edge solutions, seamless integrations and user-centric designs to enhance your online presence and business growth."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Custom Website Development",
                  description: "Build high-performance, scalable and visually engaging websites tailored to your brand."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Performance Optimization",
                  description: "Ensure fast loading speeds, seamless navigation and smooth user experiences."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "User-Friendly Interface",
                  description: "Intuitive and responsive designs that enhance accessibility across all devices."
                }
              ]}
              bottomImage={{
                src: "/Services/Web-Dev/image.webp",
                alt: "Web Development Illustration",
                width: 400,
                height: 300
              }}
              bottomDescription="Our services include secure coding practices, API integrations and advanced functionalities to ensure your website is powerful, flexible and future-ready."
              additionalFeatures={[
                "Mobile-Friendly & Responsive",
                "SEO-Optimized Structure",
                "Secure & Scalable Solutions",
                "Ongoing Maintenance & Support"
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

export default WebDevelopmentServicePage; 