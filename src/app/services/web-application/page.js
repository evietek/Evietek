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
      "Web application development is the process of creating software applications that run on web servers and can be accessed through web browsers.",
  },
  {
    question: "How long does it take to develop a web application?",
    answer:
      "The development timeline varies based on complexity, but it typically takes several weeks to months to complete a full-featured web application.",
  },
  {
    question: "What are the key stages in the web application development process?",
    answer:
      "Key stages include requirement gathering, design, front-end and back-end development, testing and deployment.",
  },
  {
    question: "What technologies are commonly used in web application development?",
    answer:
      "Common technologies include HTML, CSS and JavaScript for front-end development and languages like Python, Ruby, or PHP for back-end development.",
  },
];

const WebApplicationServicePage = () => {
  const images = [
    { src: '/Services/Web-App/hero1.jpg', alt: 'Web Application' },
    { src: '/Services/Web-App/hero2.jpg', alt: 'Web Application' }
  ];

  return (
    <main className="bg-[#F2F2F5]">  
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
            <p className="text-gray-600 leading-relaxed">
              In today's digital world, web applications are essential for businesses. At Evietek, we know that a well-developed web application can enhance user experience and improve operational efficiency. For example, a restaurant can use an online reservation system to streamline bookings and improve customer service. Our web application development services are designed to meet your specific needs and help your business thrive.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our team of skilled developers can realize your every idea, whether it's a personalized e-commerce platform or an intuitive user interface. Get in touch with us right now to go over how a customized web application solution might help your company grow to the next degree.
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Web Application Development Services?"
              description="Evietek's Web Application Development Services empower businesses with custom, scalable and secure solutions tailored to their needs. Our expert developers build high-performance applications that enhance user engagement and streamline business operations."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Comprehensive Web App Solutions",
                  description: "End-to-end solutions that address all aspects of your business needs."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Support & Continuous Updates",
                  description: "Round-the-clock assistance and regular updates to keep your application running smoothly."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Integration with Existing Systems",
                  description: "Connect your new applications with your current business tools and processes."
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable & Custom Solutions",
                  description: "Flexible solutions that grow with your business needs."
                }
              ]}
              bottomDescription="We ensure secure, user-centric and high-performance applications that drive innovation and business success."
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Features of Web Application Development"
              description="Evietek's Web Application Development services provide cutting-edge solutions with seamless integration, user-friendly interfaces and real-time performance monitoring to ensure business efficiency and growth."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Custom Web Solutions",
                  description: "Tailored applications designed to meet unique business needs and user expectations."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Performance Monitoring",
                  description: "Ensures optimal application speed, uptime and responsiveness with proactive tracking."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "User-Friendly Interface",
                  description: "Intuitive and engaging designs that enhance user experience and accessibility."
                }
              ]}
              bottomImage={{
                src: "/Services/Web-App/image.jpg",
                alt: "Web Application Process",
                width: 400,
                height: 300
              }}
              bottomDescription="This leads to higher productivity and customer satisfaction. Putting innovation and quality first, Evietek creates trustworthy solutions that help businesses succeed in today's tough digital world."
              additionalFeatures={[
                "Comprehensive Application Coverage",
                "Automated Maintenance & Updates",
                "Regular Performance Enhancements",
                "Scalable & Flexible Architecture"
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

export default WebApplicationServicePage; 