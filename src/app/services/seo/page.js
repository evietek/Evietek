"use client";
import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import WhyChoose from '@/components/ServiceWCU';
import Feature from '@/components/ServiceFeature';
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceSidebar from "@/components/ServiceSidebar";

const faqs = [
  {
    question: "What is SEO and why is it important?",
    answer:
      "SEO, or search engine optimization, improves your website's visibility in search engine results, helping attract more organic traffic and potential customers.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "Typically, it can take 3 to 6 months to see significant results from SEO efforts, depending on various factors like competition and the current state of your website.",
  },
  {
    question: "What services do SEO agencies provide?",
    answer:
      "SEO agencies offer services such as site audits, keyword research, content strategy development and link building to enhance your website's online presence.",
  },
  {
    question: "Do I need to provide anything to the SEO agency?",
    answer:
      "Yes, you should share information about your business objectives, competitors, preferred keywords and access to analytics tools for effective campaign development.",
  }
];

const SEOServicePage = () => {
  const images = [
    { src: '/Services/SEO/hero1.jpg', alt: 'SEO Services' },
    { src: '/Services/SEO/hero2.jpeg', alt: 'SEO Services' }
  ];

  return (
    <main className="bg-[#F2F2F5]">  
      <Breadcrumb 
        title="Search Engine Optimization" 
        backgroundImage="/Services/SEO/bg.jpg" 
        backgroundPosition="center 48%" 
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
              In today's digital marketplace, having a strong online presence is crucial. At Evietek, we understand that effective SEO (Search Engine Optimization) is key to achieving this. Good SEO improves your website's visibility on search engines, helping potential customers find you easily. Imagine a local bakery that wants to attract more customers; without proper SEO, they might remain hidden while competitors thrive.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              The local bakery and other businesses can enhance their online visibility and connect with their target audience by utilizing Evietek's comprehensive SEO services. We use strategic SEO to increase website traffic and sales.
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Evietek's SEO Services?"
              description="Evietek's SEO Services are essential for enhancing your online visibility, driving organic traffic and ensuring your business stays ahead in search rankings. By optimizing every aspect of your digital presence, we provide a robust strategy for long-term growth and success."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Comprehensive Optimization for All Digital Platforms",
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Monitoring & Continuous Algorithm Updates",
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Integration with Your Existing Digital Strategy",
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable Solutions Tailored to Your Business Goals",
                }
              ]}
              bottomDescription="Our services ensure: Higher Search Rankings & Organic Growth, On-Page & Off-Page SEO Optimization, Technical SEO Audits & Fixes, and Scalable & Flexible Strategies. Let Evietek boost your online presence and drive measurable results with expert SEO solutions!"
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Features of Evietek's SEO Services"
              description="We provide cutting-edge SEO strategies with data-driven insights, real-time monitoring and seamless integration to boost your online presence and search engine rankings."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Keyword Research & Optimization",
                  description: "Target high-performing keywords to improve visibility and attract the right audience."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Performance Monitoring",
                  description: "Track rankings, organic traffic and engagement with advanced analytics."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "User-Friendly SEO Strategies",
                  description: "Enhance user experience with optimized content, technical SEO and site structure."
                }
              ]}
              bottomImage={{
                src: "/Services/SEO/image.jpg",
                alt: "SEO Process Circle",
                width: 400,
                height: 300
              }}
              bottomDescription="Our professionals remain on top of industry developments and algorithm improvements to optimize your website for optimum visibility. Our track record shows we can improve traffic and conversions."
              additionalFeatures={[
                "Comprehensive Website Optimization",
                "Automated SEO Audits & Fixes",
                "Regular Algorithm Updates & Adjustments",
                "Scalable & Flexible Strategies for Any Business"
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

export default SEOServicePage; 