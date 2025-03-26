"use client";
import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import WhyChoose from '@/components/ServiceWCU';
import Feature from '@/components/ServiceFeature';
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceSidebar from "@/components/ServiceSidebar";

const faqs = [
  {
    question: "What is web application development?",
    answer:
"Web application development involves creating software that runs on web servers and is accessible via web browsers. "  },
  {
    question: "How long does it take to develop a web application?",
    answer:
"Timelines vary based on complexity, but a full-featured web application typically takes several weeks to months to develop. "  },
  {
    question: "What are the key stages in the web application development process?",
    answer:
"Key stages include requirement gathering, design, front-end and back-end development, testing and deployment. "  },
  {
    question: "What technologies are commonly used in web application development?",
    answer:
"Popular technologies include HTML, CSS, JavaScript for front-end development and Python, Ruby, or PHP for back-end development. "  },
];

const WebApplicationServicePage = () => {
  const images = [
    { src: '/Services/Web-App/hero1.jpg', alt: 'Web Application' },
    { src: '/Services/Web-App/hero2.jpg', alt: 'Web Application' }
  ];

  return (
    <main className="bg-[#F2F2F5] select-none cursor-default pt-10 md:pt-0">  
      <Breadcrumb 
        title="Web Application" 
        backgroundImage="/Services/Web-App/bg.jpg" 
        backgroundPosition="center 52%" 
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
            Transform Your Business with Custom Web Applications 
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div> 
            <p className="text-gray-600 leading-relaxed">
            In today’s fast-paced digital landscape, web applications are essential for businesses looking to enhance user experience and operational efficiency. At Evietek, we specialize in developing custom, high-performance web applications that drive engagement and productivity. Imagine a restaurant using an online reservation system to streamline bookings and improve customer service, this is the power of a well-designed web application.            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
            Our expert development team builds secure, scalable and innovative solutions to help your business thrive in a competitive digital world.             </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Web Application Development Services?"
              description="Evietek’s web application solutions empower businesses with customized, scalable and secure applications designed to streamline operations and enhance user engagement."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Comprehensive Web App Solutions",
                  description: "Tailored applications designed to meet unique business needs."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Support & Continuous Updates",
                  description: "Ensuring reliability and seamless performance at all times. "
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Integration with Existing Systems",
                  description: "Enhance efficiency without disrupting workflows. "
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable & Custom Solutions",
                  description: "Future-proof applications that grow with your business. "
                }
              ]}
              bottomDescription="We create secure, user-friendly and high-performance web applications that drive innovation and business success. "
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Features of Web Application Development"
              description="Evietek delivers cutting-edge web applications that prioritize usability, efficiency and seamless integration to enhance business operations."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Custom Web Solutions",
                  description: "Develop tailor-made applications that align with your business goals and user needs. "
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Performance Monitoring",
                  description: "Track application speed, uptime and responsiveness with proactive monitoring tools."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "User-Friendly Interface",
                  description: "Craft intuitive and engaging designs that enhance accessibility and user satisfaction. "
                }
              ]}
              bottomImage={{
                src: "/Services/Web-App/image.jpg",
                alt: "Web Application Process",
                width: 400,
                height: 300
              }}
              bottomDescription="With a focus on innovation and quality, Evietek builds reliable and scalable solutions that help businesses succeed in a competitive digital space. Our development approach includes:"
              additionalFeatures={[
                "Comprehensive Application Coverage",
                "Automated Maintenance & Updates",
                "Regular Performance Enhancements",
                "Scalable & Flexible Architecture"
              ]}
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#030438] mb-4 sm:mb-6 px-4 sm:px-8 md:px-12">
              Elevate Your Business with Custom Web Applications 
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed  mb-2 px-4 sm:px-8 md:px-12">
            Harness the power of custom web applications to improve efficiency and customer engagement. Let Evietek design a solution tailored to your business needs. <b>Contact us today to get started!</b> 
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

export default WebApplicationServicePage; 