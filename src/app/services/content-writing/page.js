"use client";
import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import WhyChoose from '@/components/ServiceWCU';
import Feature from '@/components/ServiceFeature';
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceSidebar from "@/components/ServiceSidebar";

const faqs = [
  {
    question: "How long does it take to complete a project?",
    answer:
      "Timelines vary depending on project scope, but we ensure efficiency and timely delivery.",
  },
  {
    question: "What about revisions?",
    answer:
      "We refine content until it meets your expectations. Pricing is flexible and customization comes standard. At Evietek, we ensure every client’s content needs are met seamlessly.",
  },
];

const ContentWritingServicePage = () => {
  const images = [
    { src: '/Services/CW/hero1.jpg', alt: 'Content Writing' },
    { src: '/Services/CW/hero2.jpg', alt: 'Content Writing' }
  ];

  return (
    <main className="bg-[#F2F2F5] select-none cursor-default pt-10 md:pt-0">  
      <Breadcrumb 
        title="Content Writing" 
        backgroundImage="/Services/CW/bg.png"
        backgroundPosition="center 50%" 
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
              Elevate Your Brand with Impactful Content 
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-600 leading-relaxed">
            In the digital world, content is the driving force behind engagement and conversions. At Evietek, we craft compelling, high-quality content that not only captures attention but also drives meaningful action. Whether you want to establish thought leadership, boost SEO rankings, or connect with your audience, our expert content writing services deliver words that work. 
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
            We help you achieve marketing success by creating content that informs, persuades and resonates. Partner with Evietek to craft content that doesn’t just attract visitors, it compels them to act. 
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Content Writing Services"
              description="Evietek’s content writing services strengthen your brand’s voice and enhance your online presence. Our team of professional writers specializes in crafting engaging and valuable content tailored to your audience’s needs.  "
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Strategic Content Planning",
                  description: "Align content with business goals to maximize impact."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Support & Delivery",
                  description: "Reliable service with quick turnaround times."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Platform Integration ",
                  description: "Seamlessly publish content across multiple channels."
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable Solutions",
                  description: "Flexible content strategies for businesses of all sizes."
                }
              ]}
              bottomDescription="Our SEO-friendly content not only drives traffic and conversions but also reflects your brand’s identity with clarity and consistency."
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Feature of Content Writing Services"
              description="Our expert writing services are designed to engage, educate and convert. We create content that enhances your brand’s online visibility and helps you achieve your marketing objectives."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "SEO-Optimized Content",
                  description: "Improve search rankings with content designed to increase visibility and engagement."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Edits",
                  description: "Ensure content accuracy and seamless readability for an enhanced user experience."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "High-Quality Content Creation",
                  description: "Informative content that educates and changes using new and strategic messaging to increase the impact of your brand."
                }
              ]}
              bottomImage={{
                src: "/Services/CW/image.png",
                alt: "Web Designer working",
                width: 400,
                height: 300
              }}
              bottomDescription="Provides high-quality writing, real-time collaboration and seamless integration for impactful content creation."
              additionalFeatures={[
                "Engaging Blog Posts",
                "Persuasive Copywriting",
                "Regular Content Updates",
                "Scalable and Flexible"
              ]}
            />

<h2 className="text-2xl sm:text-3xl font-bold text-[#030438] mb-4 sm:mb-6 px-4 sm:px-8 md:px-12">
Achieve More with Evietek’s Expert Content Writing 
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed  mb-2 px-4 sm:px-8 md:px-12">
            Great content is more than just words, it’s a powerful tool for business growth. Let Evietek help you create content that drives engagement, builds trust and increases conversions. Get started today! 
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

export default ContentWritingServicePage;

 
 
 