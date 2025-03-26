"use client";
import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import WhyChoose from '@/components/ServiceWCU';
import Feature from '@/components/ServiceFeature';
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceSidebar from "@/components/ServiceSidebar";

const faqs = [
  {
    question: "What is the illustration process?",
    answer:
      "The process begins with initial sketches, usually ready within two to three weeks. After revisions, final artwork is completed in an additional four weeks post-approval.",
  },
  {
    question: "How long does it take to complete an illustration?",
    answer:
      "Most illustrations take between half a day to two business days, while book covers may require up to two weeks to finalize.",
  },
  {
    question: "Can I request revisions on my illustrations?",
    answer:
      "Yes! You can request two complimentary rounds of revisions during the sketch stage. Additional changes at the final stage may incur extra charges.",
  },
  {
    question: "What tools do I need to start illustrating?",
    answer: "Basic materials like colored pencils or watercolors are great for traditional illustration. However, many illustrators prefer digital tools such as Procreate or Photoshop for greater flexibility and efficiency."
  }
];

const IllustrationsServicePage = () => {
  const images = [
    { src: '/Services/Illustration/hero1.jpg', alt: 'Illustration' },
    { src: '/Services/Illustration/hero1.png', alt: 'Illustration' }
  ];

  return (
    <main className="bg-[#F2F2F5] select-none cursor-default pt-10 md:pt-0">  
      <Breadcrumb 
        title="Illustrations" 
        backgroundImage="/Services/Illustration/bg.jpeg"
        backgroundPosition="center 60%" 
      />
      
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <ServiceSidebar />
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4 px-4 lg:px-8 py-10">
          {/* Carousel Section */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Carousel images={images} />
              </div>
            </div>
          </div>

          {/* Title and Description Section */}
          <div className="mb-4 px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#030438] mb-4">
            Elevate Your Brand with Stunning Illustrations 
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>

            <p className="text-gray-600 leading-relaxed">
            In today’s visually driven world, high-quality illustrations can make all the difference. At Evietek, we craft professional, eye-catching illustrations that bring ideas to life and enhance brand identity. Whether you need captivating artwork for a children’s book or custom graphics for your website, our expert illustrators ensure your visuals leave a lasting impact. 
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
            With a mix of creativity and precision, our team transforms your vision into reality. Let Evietek enhance your visual content and create illustrations that truly stand out. 
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-4">
            <WhyChoose
              heading="Why Choose Illustrations Services"
              description="Evietek’s illustration services are designed to visually engage, tell stories and enhance user experience. Our skilled illustrators craft compelling visuals that help brands establish strong, memorable identities."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Custom Artwork for All Platforms "
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Creative Support & Revisions"
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Integration with Existing Designs"
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable Solutions Tailored to Your Vision"
                }
              ]}
              bottomDescription="We provide high-quality, unique and visually captivating illustrations that make your business stand out, ensuring your audience connects with your brand on a deeper level."
            />
          </div>

          {/* Features Section */}
          <div className="mb-4">
            <Feature
              heading="Feature of Content Illustration Services"
              description="At Evietek, we create stunning visuals that tell your brand’s story with creativity and precision. Our collaborative approach ensures tailored designs that make an impact."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Character Design",
                  description: "We develop unique characters for branding, storytelling and marketing that resonate with your audience."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Our Illustration Process",
                  description: "We begin with an in-depth consultation to understand your vision and objectives, ensuring the final artwork aligns with your brand."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "High-Quality Illustrations",
                  description: "Engaging, vibrant artwork enhances audience interaction across social media, print materials and digital platforms."
                }
              ]}
              bottomImage={{
                src: "/Services/Illustration/image.jpg",
                alt: "Web Designer working",
                width: 400,
                height: 300
              }}
              bottomDescription="Evietek offers custom illustrations, consistent branding and adaptable designs to reinforce your visual identity and captivate your audience effectively."
              additionalFeatures={[
                "Unique Visual Narratives",
                "Scalable and Adaptable Designs",
                "Timely Project Delivery",
                "Continuous Support and Updates"
              ]}
            />

<h2 className="text-2xl sm:text-3xl font-bold text-[#030438] mb-4 sm:mb-6 px-4 sm:px-8 md:px-12">
              Transform Your Brand with Custom Illustrations 
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed  mb-2 px-4 sm:px-8 md:px-12">
            Let Evietek help you create visuals that enhance your brand’s identity and engagement. Contact us today to discuss your illustration needs and bring your ideas to life! 
            </p>

          </div>

          {/* FAQ Section */}
          <div className="mb-4 px-12">
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

export default IllustrationsServicePage;

 
 
 