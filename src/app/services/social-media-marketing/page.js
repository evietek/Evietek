"use client";
import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import WhyChoose from '@/components/ServiceWCU';
import Feature from '@/components/ServiceFeature';
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceSidebar from "@/components/ServiceSidebar";

const faqs = [
  {
    question: "What is social media marketing?",
    answer:
      "Social media marketing involves using social platforms to promote products or services, engage with audiences, and build brand awareness.",
  },
  {
    question: "How can social media marketing benefit my business?",
    answer:
      "It increases brand visibility, drives website traffic, enhances customer engagement, and can lead to higher conversion rates.",
  },
  {
    question: "Which social media platforms should I focus on?",
    answer:
      "The choice of platforms depends on your target audience; popular options include Facebook, Instagram, LinkedIn, and Twitter based on your industry. ",
  },
  {
    question: "How often should I post on social media?",
    answer:
      "Posting frequency varies by platform, but generally, consistent posting—ranging from a few times a week to daily—helps maintain engagement and visibility. ",
  },
];

const SocialMediaMarketingServicePage = () => {
  const images = [
    { src: '/Services/Social/hero1.webp', alt: 'SMM' },
    { src: '/Services/Social/hero2.jpg', alt: 'SMM' }
  ];

  return (
    <main className="bg-[#F2F2F5]">  
      <Breadcrumb 
        title="Social Media Marketing" 
        backgroundImage="/Services/Social/bg.jpg" 
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
              In today's digital world, social media marketing is essential for any business. At Evietek, we know that effective social media strategies can significantly enhance your brand's visibility and customer engagement. For instance, a local coffee shop can attract new customers by sharing enticing photos of their latest brews on Instagram. By leveraging social media, businesses can connect with their audience in meaningful ways. 

              This can lead to increased brand loyalty and ultimately drive sales. Additionally, social media platforms offer valuable insights into consumer behavior and preferences, allowing businesses to tailor their marketing efforts accordingly.
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Social Media Marketing Services"
              description="Evietek's Social Media Marketing solutions are designed to elevate your brand, enhance engagement, and drive growth across all platforms. Through data-driven strategies and creative content, we help you build a loyal online community and achieve measurable results."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Comprehensive Strategy Development",
                  description: "Tailored campaigns to target the right audience and maximize reach."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Performance Monitoring & Analytics",
                  description: "Track engagement, conversions, and ROI in real-time."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Integration with Your Brand Voice",
                  description: "Maintain consistency and authenticity across all social channels."
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable Solutions to Meet Business Goals",
                  description: "Flexible strategies that adapt to your brand's growth and evolving needs."
                }
              ]}
              bottomDescription="We provide full-service social media management, content creation, and audience targeting to ensure your brand thrives in the digital landscape."
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Features of Social Media Marketing Services"
              description="Evietek's Social Media Marketing solutions offer advanced strategies, real-time analytics, and user-friendly tools to enhance your brand's online presence and engagement."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Advanced Audience Targeting",
                  description: "Reach your ideal customers with precision and data-driven insights."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Performance Tracking",
                  description: "Monitor engagement, conversions, and trends for continuous optimization."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "User-Friendly Content Management Interface",
                  description: "Effortlessly manage posts, track analytics, and engage with your audience."
                }
              ]}
              bottomImage={{
                src: "/Services/Social/image.jpeg",
                alt: "Social Media Globe",
                width: 300,
                height: 300
              }}
              bottomDescription="Our solutions provide targeted marketing strategies, creative content, and consistent brand messaging to drive growth and customer loyalty."
              additionalFeatures={[
                "Comprehensive Brand Strategy",
                "Automated Scheduling & Posting ",
                "Regular Analytics Reports",
                "Scalable & Flexible Solutions"
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

export default SocialMediaMarketingServicePage;

 
 
 