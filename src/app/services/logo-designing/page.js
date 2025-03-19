"use client";
import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import WhyChoose from '@/components/ServiceWCU';
import Feature from '@/components/ServiceFeature';
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceSidebar from "@/components/ServiceSidebar";

const faqs = [
  {
    question: "How long does the process take?",
    answer:
      "At Evietek, it usually ranges from one to three weeks, depending on the complexity of the design.",
  },
  {
    question: "Who owns the logo?",
    answer:
      "Once we finalize the design and payment is complete, you own full rights.",
  },
  {
    question: "What about revisions?",
    answer:
      "We provide several rounds to ensure the final result exceeds your expectations.",
  }
];

const LogoDesignServicePage = () => {
  const images = [
    { src: '/Services/Logo/hero1.jpg', alt: 'Logo Design' },
    { src: '/Services/Logo/hero2.webp', alt: 'Logo Design' }
  ];

  return (
    <main className="bg-[#F2F2F5]">  
      <Breadcrumb 
        title="Logo Design" 
        backgroundImage="/Services/Logo/bg.webp" 
        backgroundPosition="center 0%"
        textColor="#FEF4F1"
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
              At Evietek, we understand the power of a well-designed logo. It's not just a graphic; it's the face of your brand. A professional logo establishes trust and makes your business memorable. When people see a strong logo, like the iconic golden arches or a swoosh, they instantly connect it to the brand's identity and promise.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              An attractive logo has the power to convey your brand's personality and principles instantly, making a long-lasting impact on consumers. In order to establish a name for oneself and differentiate oneself from the competition, it is essential.
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Evietek's Logo Design Services"
              description="A strong logo is the foundation of your brand identity. At Evietek, we craft visually compelling, meaningful and memorable logos that help your business stand out. Our design process blends creativity with strategy to deliver a logo that truly represents your brand."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Unique & Impactful Designs",
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Seamless Integration with Brand Identity",
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Unlimited Revisions for Perfection",
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable Solutions for All Business Needs",
                }
              ]}
              bottomDescription="At Evietek, we don't just design logos—we build identities that leave a lasting impression. Let's craft your brand's visual signature today!"
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Features of Evietek's Logo Design Services"
              description="We create logos that are not just visually appealing but also strategically designed to strengthen your brand identity. At Evietek, we blend creativity with precision to deliver logos that leave a lasting impact."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Our Logo Designing Process",
                  description: "We begin with a consultation to understand your vision, values and target audience, ensuring your logo tells your story."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Research and Inspiration",
                  description: "We analyze competitors and industry trends, drawing inspiration from styles like minimalist or vintage to create a standout logo."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Design Concepts",
                  description: "We develop multiple concepts, refine your chosen design and deliver it in formats ready for print and digital use."
                }
              ]}
              bottomImage={{
                src: "/Services/Logo/image.jpg",
                alt: "Design",
                width: 350,
                height: 250
              }}
              bottomDescription="Our talented designers collaborate with clients to understand their brand narrative and values to produce logos that represent their identity. Our design and branding skills may help your firm stand out in a congested market."
              additionalFeatures={[
                "Unique & Memorable Branding",
                "Seamless Integration with Your Brand Identity",
                "High-Resolution & Scalable Files",
                "Timely Delivery & Professional Expertise"
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

export default LogoDesignServicePage; 