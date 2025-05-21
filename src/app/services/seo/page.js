"use client";
import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import WhyChoose from '@/components/ServiceWCU';
import Feature from '@/components/ServiceFeature';
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceSidebar from "@/components/ServiceSidebar";

const faqs = [
  {
    question: "What is SEO and why does it matter?",
    answer:
      "SEO (Search Engine Optimization) enhances your website`s ranking, making it easier for potential customers to find your business online.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
    "Typically, results become noticeable within 3 to 6 months, depending on competition and website condition."
  },
  {
    question: "What services do SEO agencies offer?",
    answer:
    "SEO agencies provide keyword research, site audits, content optimization, and link-building services to improve search visibility."
  },
  {
    question: "What do I need to provide for SEO services? ",
    answer:
    "To maximize effectiveness, share business objectives, competitor insights, preferred keywords, and access to analytics tools."
  },
  {
    question: "Ready to Dominate Search Results?",
    answer:
    "Let Evietek’s SEO experts propel your business forward. Contact us today and take the first step toward digital success!"
  }
];

const SEOServicePage = () => {
  const images = [
    { src: '/Services/SEO/hero1.jpg', alt: 'SEO Services' },
    { src: '/Services/SEO/hero2.jpeg', alt: 'SEO Services' }
  ];

  return (
    <main className="bg-[#F2F2F5] select-none cursor-default pt-10 md:pt-0">  
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#030438] mb-4">
            Get Discovered, Get Results 
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-600 leading-relaxed">
            In today’s digital world, visibility is everything. At Evietek, we specialize in SEO (Search Engine Optimization) to ensure your business stands out. Imagine a bakery struggling to attract customers online—without effective SEO, it remains invisible while competitors flourish. With Evietek’s proven SEO strategies, businesses like yours can dominate search results, attract high-intent customers, and drive sustainable growth. 
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Evietek`s SEO Services?"
              description="Evietek’s SEO solutions are designed to boost your online presence, increase organic traffic, and keep you ahead in search rankings. Our expert team leverages advanced optimization techniques to maximize your reach and improve engagement."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Comprehensive Optimization",
                  description: "for all digital platforms"
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Monitoring",
                  description: " & Continuous Algorithm Updates"
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Integration",
                  description: "with Your Existing Digital Strategy"
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable Solutions",
                  description: "Tailored to Your Business Goals"
                }
              ]}
              bottomDescription="With our tailored strategies, expect higher rankings, enhanced user experience, and consistent lead generation."
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Powerful Features of Evietek`s SEO Services"
              description="Our data-driven approach ensures top search engine rankings and sustainable traffic growth"
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Keyword Research & Optimization",
                  description: "Identify high-performing keywords to boost visibility and attract the right audience."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Performance Monitoring",
                  description: "Track rankings, traffic, and engagement with advanced analytics for data-backed decisions."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "User-Friendly SEO Strategies",
                  description: "A detailed website analysis to identify strengths and gaps, focusing on speed, content, and structure."
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "On-Page SEO Excellence",
                  description: "Optimize title tags, meta descriptions, and content to enhance search engine performance."
                },
                {
                  iconSrc: "/About_Us/5.svg",
                  title: "Off-Page SEO Authority",
                  description: "Build credibility with high-quality backlinks from trusted sources to improve domain authority."
                },
                {
                  iconSrc: "/About_Us/6.svg",
                  title: "Technical SEO Optimization",
                  description: "Enhance site speed, mobile-friendliness, and overall technical performance for superior ranking results."
                },
                
              ]}
              bottomImage={{
                src: "/Services/SEO/image.jpg",
                alt: "SEO Process Circle",
                width: 400,
                height: 300
              }}
              bottomDescription="With Evietek, you receive:"
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