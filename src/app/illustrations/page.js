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
      "The illustration process typically involves initial sketches for review within two to three weeks, followed by revisions and final artwork completion, which can take an additional four weeks after approval",
  },
  {
    question: "How long does it take to complete an illustration?",
    answer:
      "Most illustrations can take between half a day to two business days, while book covers may require up to two weeks to finalize.",
  },
  {
    question: "Can I request revisions on my illustrations?",
    answer:
      "Yes, you can request revisions during the sketch stage, with two complimentary rounds allowed. Additional changes at the final art stage may incur extra charges",
  },
  {
    question: "What tools do I need to start illustrating?",
    answer: "You can begin with basic materials like colored pencils or watercolors, but many illustrators find it beneficial to work digitally using software like Procreate or Photoshop for flexibility and efficiency."
  }
];

const ContentWritingServicePage = () => {
  const images = [
    { src: '/Services/Illustration/hero1.jpg', alt: 'Illustration' },
    { src: '/Services/Illustration/hero1.png', alt: 'Illustration' }
  ];

  return (
    <main className="bg-[#F2F2F5]">  
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

            <p className="text-gray-600 leading-relaxed">
            In today’s visually driven world, high-quality illustrations are essential. At Evietek, we understand that professional illustration can elevate your brand and communicate your message effectively. Whether you need artwork for a children’s book or custom graphics for your website, our illustrations help you stand out. For instance, a vibrant illustration can make a dull report engaging and memorable. 

With imagination and accuracy, our team of skilled illustrators can materialize your vision. Reach out to us now to discover how we can elevate your visual content and make a memorable impact on your viewers.  
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-4">
            <WhyChoose
              heading="Why Choose Illustrations Services"
              description="Evietek’s illustration services are designed to visually captivate, communicate brand stories and enhance user experiences. Our team of skilled illustrators transforms concepts into compelling visuals, helping brands engage audiences and build memorable identities."
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
              bottomDescription="We deliver compelling visuals, unique designs and consistent branding to make your business stand out. Our team excels in creating engaging illustrations that resonate with your audience and elevate your brand’s identity."
            />
          </div>

          {/* Features Section */}
          <div className="mb-4">
            <Feature
              heading="Feature of Content Illustration Services"
              description="At Evietek, we specialize in creating captivating visuals that communicate your brand’s story with creativity and precision. Our team ensures seamless collaboration and tailored designs that leave a lasting impression."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Character Design",
                  description: "We design unique characters for branding or storytelling that resonate with your audience"
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Our Illustration Process",
                  description: "We begin with a consultation to understand your vision, creating artwork that fits your goals."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "High-Quality Illustrations",
                  description: "Engaging artwork boosts audience interaction, drawing attention on social media and print materials."
                }
              ]}
              bottomImage={{
                src: "/Services/Illustration/image.jpg",
                alt: "Web Designer working",
                width: 400,
                height: 300
              }}
              bottomDescription="We provide custom illustrations, consistent branding and flexible design solutions to enhance your brand’s visual identity and engage your audience effectively."
              additionalFeatures={[
                "Unique Visual Narratives",
                "Scalable and Adaptable Designs",
                "Timely Project Delivery",
                "Continuous Support and Updates"
              ]}
            />
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

export default ContentWritingServicePage;

 
 
 