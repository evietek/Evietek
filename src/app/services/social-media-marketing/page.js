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
"Social media marketing involves using platforms like Facebook, Instagram, LinkedIn and Twitter to promote products, engage audiences and build brand awareness."  },
  {
    question: "How can social media marketing benefit my business?",
    answer:
"It helps increase brand visibility, drive website traffic, enhance customer engagement and improve conversion rates. "  },
  {
    question: "Which social media platforms should I focus on?",
    answer:
"The best platforms depend on your audience. Facebook and Instagram are great for B2C, while LinkedIn and Twitter work well for B2B industries."  },
  {
    question: "How often should I post on social media?",
    answer:
"Consistency is key. Posting several times a week to daily keeps engagement levels high and strengthens brand presence. "  },
];

const SocialMediaMarketingServicePage = () => {
  const images = [
    { src: '/Services/Social/hero1.webp', alt: 'SMM' },
    { src: '/Services/Social/hero2.jpg', alt: 'SMM' }
  ];

  return (
    <main className="bg-[#F2F2F5] select-none cursor-default pt-10 md:pt-0">  
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#030438] mb-4">
            Amplify Your Brand with Social Media Marketing 
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-600 leading-relaxed">
            In today’s fast-paced digital world, social media marketing is no longer optional, it’s essential. At Evietek, we craft strategic social media campaigns that boost brand visibility, increase engagement and drive conversions. Imagine a local coffee shop attracting new customers simply by sharing visually appealing posts on Instagram. That’s the power of social media. 
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
            By leveraging the right platforms, businesses can build strong customer relationships, enhance brand loyalty and tap into valuable consumer insights to refine marketing strategies. 
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Social Media Marketing Services"
              description="Evietek’s data-driven social media marketing solutions are designed to elevate your brand, increase engagement and drive measurable growth. Our expertise ensures that your brand stays ahead of the competition in the ever-evolving digital landscape."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Comprehensive Strategy Development",
                  description: "Tailored campaigns designed to reach and engage your ideal audience."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Performance Monitoring & Analytics",
                  description: "Track engagement, conversions, and ROI in real-time."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Integration with Your Brand Voice",
                  description: "Ensure authenticity and consistency across all platforms."
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable Solutions to Meet Business Goals",
                  description: "Strategies that evolve as your brand expands."
                }
              ]}
              bottomDescription="We offer full-service social media management, including content creation, audience targeting and campaign execution to help your brand thrive in the digital space."
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Features of Social Media Marketing Services"
              description="Evietek’s advanced social media marketing solutions provide the tools and insights needed to enhance your brand presence, engagement and conversions."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Advanced Audience Targeting",
                  description: "Leverage data-driven insights to reach the right audience with precision and maximize engagement."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Performance Tracking",
                  description: "Monitor interactions, conversions and trends to optimize marketing efforts continuously."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "User-Friendly Content Management",
                  description: "Effortlessly schedule posts, track analytics and interact with your audience, all in one place."
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

<h2 className="text-2xl sm:text-3xl font-bold text-[#030438] mb-4 sm:mb-6 px-4 sm:px-8 md:px-12">
Take Your Social Media to the Next Level             </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed  mb-2 px-4 sm:px-8 md:px-12">
            Engage, convert and grow with Evietek’s expert social media marketing services. Let’s create a strategy that drives real results. Get started today!             </p>
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

 
 
 