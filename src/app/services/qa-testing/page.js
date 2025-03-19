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
      "QA testing is a process that ensures software functions as intended by verifying its functionality against defined requirements and acceptance criteria.",
  },
  {
    question: "How do you determine the cost of QA testing services?",
    answer:
      "The cost of QA testing services varies based on project specifics, with pricing typically being a fraction of hiring in-house testers, depending on the complexity and scope of the project.",
  },
  {
    question: "What types of testing do you offer?",
    answer:
      "We offer various types of testing, including functional, non-functional, manual, automated, performance and usability testing, tailored to meet the unique needs of each project.",
  },
  {
    question: "How quickly can you start a QA testing project?",
    answer:
      "Our team is prepared to begin projects quickly, often within 1-2 days, thanks to our proactive hiring strategy and readiness to integrate with your existing processes.",
  }
];

const QATestingServicePage = () => {
  const images = [
    { src: '/Services/QA/hero1.png', alt: 'QA Testing' },
    { src: '/Services/QA/hero2.jpg', alt: 'QA Testing' }
  ];

  return (
    <main className="bg-[#F2F2F5]">  
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
            <p className="text-gray-600 leading-relaxed">
              In the fast-paced world of software development, quality assurance (QA) is vital. At Evietek, we understand that effective QA testing ensures your software is reliable and performs well. Imagine launching a new app only to find out it crashes during peak usage. This can harm your reputation and lead to loss of customers. Our QA testing services help prevent such issues, ensuring your software meets high standards before it reaches users.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our skilled QA testers examine every part of your program to find and fix bugs. You may rest certain that Evietek's QA testing services have completely tested and prepared your software for release.
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose QA Testing Services?"
              description="Evietek's QA Testing Services ensure your software runs flawlessly by identifying and eliminating bugs before deployment. Our expert testing solutions enhance performance, security and user experience, helping you deliver a seamless digital product."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Comprehensive Testing for All Platforms",
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
                  title: "QA strategies that adapt to business and project needs",
                }
              ]}
              bottomDescription="We provide end-to-end manual and automated testing to detect vulnerabilities, improve performance and ensure optimal software reliability. Partner with Evietek for a bug-free, high-performance digital experience."
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Features of QA Testing Services"
              description="Evietek's QA Testing Services ensure your software meets the highest standards by identifying issues early and optimizing performance. Our advanced testing solutions help deliver a seamless, secure and high-quality user experience."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Test Plan",
                  description: "We create a comprehensive test plan outlining methodologies and tools, focusing on areas like usability, performance and security."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Test Design",
                  description: "Our team develops detailed test cases based on your requirements, ensuring thorough coverage and incorporating automation where beneficial."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Execution and Reporting",
                  description: "We execute tests and meticulously document results, providing detailed reports on defects and performance issues with reproduction steps and fix suggestions."
                }
              ]}
              bottomImage={{
                src: "/Services/QA/image.webp",
                alt: "QA Testing",
                width: 500,
                height: 300
              }}
              bottomDescription="Evietek's QA Testing Services test across platforms and devices using industry best practices and cutting-edge technologies. Our skilled QAs find vulnerabilities and prepare your program for launch."
              additionalFeatures={[
                "Cross-Platform Compatibility Testing",
                "Automated & Manual Testing",
                "Regular Testing Reports & Updates",
                "Scalable & Customizable Solutions"
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

export default QATestingServicePage; 