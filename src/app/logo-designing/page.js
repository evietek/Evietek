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
      "At Evietek, the timeline typically ranges from one to three weeks, depending on the complexity of the design.",
  },
  {
    question: "Who owns the logo?",
    answer:
      "Once the final design is approved and payment is completed, you gain full ownership rights.",
  },
  {
    question: "What about revisions?",
    answer:
      "We offer multiple revision rounds to ensure the final design exceeds your expectations.",
  }
];

const LogoDesignServicePage = () => {
  const images = [
    { src: '/Services/Logo/hero1.jpg', alt: 'Logo Design' },
    { src: '/Services/Logo/hero2.webp', alt: 'Logo Design' }
  ];

  return (
    <main className="bg-[#F2F2F5] select-none cursor-default pt-10 md:pt-0">  
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#030438] mb-4">
            The Power of a Well-Designed Logo 
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-600 leading-relaxed">
            At Evietek, we know a logo is more than just a design—it`s the face of your brand. A compelling logo builds trust, enhances recognition, and makes a lasting impression. Think of the world`s most iconic logos—each one tells a story and creates an emotional connection. Your brand deserves the same impact.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
            A well-crafted logo instantly conveys your brand’s personality and values, helping you stand out in a crowded market. It`s not just about aesthetics—it`s about making your business unforgettable.
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Evietek`s Logo Design Services"
              description="A strong logo is the foundation of your brand`s identity. At Evietek, we create visually striking, meaningful, and memorable logos that set your business apart. Our expert designers blend creativity and strategy to craft logos that represent your brand`s essence."
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
              bottomDescription="At Evietek, we don`t just design logos—we build brand identities that leave a lasting impression. Let`s create a signature look for your business today!"
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Features of Evietek`s Logo Design Services"
              description="We craft logos that are not only visually appealing but also strategically designed to reinforce your brand identity. Our approach combines artistic creativity with precision to deliver logos that resonate with your audience."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Our Logo Designing Process",
                  description: "We begin with an in-depth consultation to understand your vision, values, and target audience. Every element is meticulously planned to ensure your logo tells your brand`s unique story."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Research and Inspiration",
                  description: "We analyze competitors, industry trends, and various design styles—from minimalist to vintage—to create a standout logo that aligns with your brand."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Design Concepts",
                  description: "We develop multiple logo concepts, refine your chosen design, and deliver it in versatile formats suitable for both print and digital platforms."
                }
              ]}
              bottomImage={{
                src: "/Services/Logo/image.jpg",
                alt: "Design",
                width: 350,
                height: 250
              }}
              bottomDescription="Our expert designers work closely with you to ensure your brand`s identity is reflected in every detail. With our strategic approach, we help your business shine in a competitive landscape. "
              additionalFeatures={[
                "Unique & Memorable Branding",
                "Seamless Integration with Your Brand Identity",
                "High-Resolution & Scalable Files",
                "Timely Delivery & Professional Expertise"
              ]}
            />
            <h2 className="text-3xl font-bold text-[#030438] mb-2 px-12">Let`s Bring Your Brand to Life!</h2>
            <p className="text-gray-600 leading-relaxed px-12 mb-4">
            A great logo is the first step in building a powerful brand presence. Work with Evietek to create a logo that defines your identity and captures your audience`s attention. 
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

export default LogoDesignServicePage; 