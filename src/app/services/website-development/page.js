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
"Niche web development focuses on specialized areas like e-commerce, CMS platforms and industry-specific solutions tailored to unique business needs. "  },
  {
    question: "How long does it take to develop a niche web application?",
    answer:
"Timelines vary depending on complexity, but most projects take anywhere from several weeks to a few months. "  },
  {
    question: "What technologies are commonly used in niche web development?",
    answer:
"Common technologies include HTML, CSS and JavaScript for front-end development, with back-end options like PHP, Python, or Ruby depending on project needs. "  },
  {
    question: "Do you provide ongoing support after the website is launched?",
    answer:
"Yes! We offer continuous maintenance and support services to ensure your website stays updated, secure and fully functional. "  },
];

const WebDevelopmentServicePage = () => {
  const images = [
    { src: '/Services/Web-Dev/hero1.png', alt: 'Web Development' },
    { src: '/Services/Web-Dev/hero2.webp', alt: 'Web Development' }
  ];

  return (
    <main className="bg-[#F2F2F5] select-none cursor-default pt-10 md:pt-0">  
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#030438] mb-4">
            Build a Powerful Online Presence with Expert Web Development 
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-600 leading-relaxed">
            In today’s digital world, a strong online presence is crucial for business success. At Evietek, we know that web development goes beyond building a website, it’s about creating an engaging platform that reflects your brand and meets your customers’ needs. A well-developed website attracts visitors, converts leads and builds long-term loyalty.             </p>
            <p className="text-gray-600 leading-relaxed mt-4">
            With our team of experienced developers and designers, we ensure your website is not only visually stunning but also functions seamlessly. Let Evietek help you stand out in the crowded online marketplace and leave a lasting impression.             </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Web Development Services?"
              description="Evietek’s Web Development Services deliver high-performance, secure and scalable solutions tailored for businesses of all sizes. We create responsive, SEO-friendly websites designed to provide seamless user experiences and drive business growth. "
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Custom Website Development",
                  description: "Build a website tailored to your brand’s goals."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Maintenance & Support",
                  description: "Ensure smooth functionality with ongoing technical assistance. "
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Integration with Existing Systems",
                  description: "Enhance workflows with API and software integrations."
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Tailored Solutions for Business Growth",
                  description: "Scalable web solutions that evolve with your needs."
                }
              ]}
              bottomDescription="Our robust development approach includes secure coding practices, intuitive designs and cutting-edge technology to empower your online presence. "
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Features of Web Development Services"
              description="Evietek’s Web Development Services offer advanced digital solutions, seamless integrations and user-friendly designs to strengthen your brand’s online impact."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Custom Website Development",
                  description: "High-performance, scalable and visually engaging websites designed to meet your business needs. "
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Performance Optimization",
                  description: "Fast-loading speeds, smooth navigation and seamless user experiences for increased engagement. "
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "User-Friendly Interface",
                  description: "Intuitive and responsive web designs ensure accessibility across all devices."
                }
              ]}
              bottomImage={{
                src: "/Services/Web-Dev/image.webp",
                alt: "Web Development Illustration",
                width: 400,
                height: 300
              }}
              bottomDescription="Our development services incorporate secure coding, API integrations and advanced functionalities to make your website powerful, flexible and future-ready."
              additionalFeatures={[
                "Mobile-Friendly & Responsive",
                "SEO-Optimized Structure",
                "Secure & Scalable Solutions",
                "Ongoing Maintenance & Support"
              ]}
            />
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#030438] mb-4 sm:mb-6 px-4 sm:px-8 md:px-12">
                        Transform Your Business with Expert Web Development             </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed  mb-2 px-4 sm:px-8 md:px-12">
            A website should do more than just exist, it should engage, convert and grow your business. Let Evietek craft a high-quality website that delivers results. Contact us today!             </p>
          </div>

          {/* FAQ Section */}
          <div className="mb-0 px-12">
            <h2 className="text-3xl font-bold text-[#030438] mb-8">
              Frequently Asked Questions
            </h2>
            <ServiceFAQ faqs={faqs} className="w-full" />
          </div>
          <p className="text-sm sm:text-lg text-[#030438] leading-relaxed  mt-4 mb-2 px-4 sm:px-10 md:px-16">
          <b>Ready to build a website that drives success? Contact Evietek today!  </b>
          </p>
        </div>
      </div>
    </main>
  );
};

export default WebDevelopmentServicePage; 