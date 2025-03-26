"use client";
import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import WhyChoose from '@/components/ServiceWCU';
import Feature from '@/components/ServiceFeature';
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceSidebar from "@/components/ServiceSidebar";

const faqs = [
  {
    question: "What is QA testing?",
    answer:
      "QA testing ensures software meets defined requirements and functions correctly before release.",
  },
  {
    question: "How do you determine the cost of QA testing services?",
    answer:
      "Pricing depends on project scope, but our services are cost-effective, often more affordable than hiring in-house testers.",
  },
  {
    question: "What types of testing do you offer?",
    answer:
      "We offer functional, non-functional, manual, automated, performance and usability testing, customized to your project’s needs.",
  },
  {
    question: "How quickly can you start a QA testing project?",
    answer:
      "Our team can begin testing within 1–2 days, ensuring a seamless integration with your existing processes.",
  }
];

const QATestingServicePage = () => {
  const images = [
    { src: '/Services/QA/hero1.png', alt: 'QA Testing' },
    { src: '/Services/QA/hero2.jpg', alt: 'QA Testing' }
  ];

  return (
    <main className="bg-[#F2F2F5] select-none cursor-default pt-10 md:pt-0">  
      <Breadcrumb 
        title="QA Testing" 
        backgroundImage="/Services/QA/bg.jpg" 
        backgroundPosition="center 90%" 
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
            Attention: Ensure Your Software is Bug-Free and Reliable 
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-600 leading-relaxed">
            In today’s fast-paced software industry, quality assurance (QA) is critical to success. At Evietek, we ensure your software is flawless, secure and high-performing before it reaches users. Imagine launching a new app only to face crashes and glitches, this can damage your reputation and result in lost customers. Our expert QA testing services eliminate these risks, ensuring a smooth, reliable user experience.             </p>
            <p className="text-gray-600 leading-relaxed mt-4">
            With Evietek, your software undergoes rigorous testing to detect and resolve vulnerabilities early, guaranteeing seamless performance upon release.             </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose QA Testing Services?"
              description="Evietek’s QA testing solutions ensure your software functions flawlessly by identifying and eliminating bugs before deployment. Our comprehensive testing enhances performance, security and user experience, delivering a seamless digital product."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Comprehensive Testing Across All Platforms",
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Support & Continuous Quality Assurance",
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Integration with Existing Development Pipelines",
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Custom QA Strategies Aligned with Business Needs",
                }
              ]}
              bottomDescription="We provide end-to-end manual and automated testing to detect vulnerabilities, optimize performance and enhance software reliability. Partner with Evietek for a bug-free, high-performance digital experience."
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Features of QA Testing Services"
              description="Evietek’s QA Testing Services follow a structured approach to ensure early issue detection, enhanced performance and optimized security."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Test Plan Development",
                  description: "We design a comprehensive test plan, selecting the best methodologies and tools to assess usability, performance and security."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Test Design & Execution",
                  description: "Our team creates detailed test cases based on your requirements, ensuring full coverage, while incorporating automation where necessary."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Reporting & Optimization",
                  description: "We execute rigorous testing and provide detailed reports on defects, performance issues and recommended fixes to optimize functionality."
                }
              ]}
              bottomImage={{
                src: "/Services/QA/image.webp",
                alt: "QA Testing",
                width: 500,
                height: 300
              }}
              bottomDescription="Evietek’s cross-platform testing ensures your software works seamlessly across all devices. With our industry-leading techniques, we detect vulnerabilities before launch."
              additionalFeatures={[
                "Cross-Platform Compatibility Testing",
                "Automated & Manual Testing",
                "Regular Testing Reports & Updates",
                "Scalable & Customizable Solutions"
              ]}
            />

<h2 className="text-2xl sm:text-3xl font-bold text-[#030438] mb-4 sm:mb-6 px-4 sm:px-8 md:px-12">
Action: Deliver a Flawless Digital Experience with Evietek 
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed  mb-2 px-4 sm:px-8 md:px-12">
            Quality software builds trust and credibility. Let Evietek’s QA experts refine your product for a seamless, high-performance launch. Get in touch today!             </p>
          </div>

          {/* FAQ Section */}
          <div className="mb-0 px-12">
            <h2 className="text-3xl font-bold text-[#030438] mb-8">
              Frequently Asked Questions
            </h2>
            <ServiceFAQ faqs={faqs} className="w-full" />
          </div>
          <p className="text-sm sm:text-lg text-[#030438] leading-relaxed  mt-4 mb-2 px-4 sm:px-10 md:px-16">
          <b>Ensure your software meets the highest standards. Contact Evietek today! </b>
          </p>

        </div>
      </div>
    </main>
  );
};

export default QATestingServicePage; 