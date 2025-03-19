"use client";
import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import WhyChoose from '@/components/ServiceWCU';
import Feature from '@/components/ServiceFeature';
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceSidebar from "@/components/ServiceSidebar";

const faqs = [
  {
    question: "How long does it take?",
    answer:
      "Our turnaround depends on the project scope but is always efficient.",
  },
  {
    question: "What about revisions?",
    answer:
      " We’ll refine until it’s perfect. Pricing is flexible and customization is standard. At Evietek, we make sure every client’s needs are met seamlessly.",
  },
];

const ContentWritingServicePage = () => {
  const images = [
    { src: '/Services/CW/hero1.jpg', alt: 'Content Writing' },
    { src: '/Services/CW/hero2.jpg', alt: 'Content Writing' }
  ];

  return (
    <main className="bg-[#F2F2F5]">  
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

            <p className="text-gray-600 leading-relaxed">
            At Evietek, we know that great content drives results. Whether it’s making your brand stand out in a crowded digital space or engaging your audience with information they can’t ignore, quality content is the foundation of success. Content writing services give your business the boost it needs by delivering compelling words that resonate. These services are designed to elevate your online presence by aligning your message with your audience's expectations.  

We can assist you in reaching your marketing objectives and developing a stronger relationship with your target audience by applying our skills in creating interesting and educational material. Collaborate with Evietek to produce content that does more than just attract viewers; it motivates them to take action.  
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Content Writing Services"
              description="Evietek’s expert content writing services enhance your brand’s voice and online presence. Helping you reach your audience with interesting and useful content is our team of professional writers' specialty. Allow us to elevate your brand through high-quality, customized content that drives results. "
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Strategic Content Planning"
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Support & Delivery"
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Platform Integration "
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable Solutions"
                }
              ]}
              bottomDescription="We provide high-quality, SEO-friendly content that drives traffic and conversions while reflecting your brand’s unique identity. "
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Feature of Content Writing Services"
              description="Evietek’s content writing services are crafted to engage, inform and drive conversions. Our experienced writers specialize in producing compelling, SEO-friendly content that appeals to your target audience. Allow us to assist you in increasing your brand's online visibility and achieving your marketing objectives."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "SEO-Optimized Content",
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Edits",
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "User-Friendly Structure",
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

 
 
 