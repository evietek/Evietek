"use client";
import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import WhyChoose from '@/components/ServiceWCU';
import Feature from '@/components/ServiceFeature';
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceSidebar from "@/components/ServiceSidebar";

const faqs = [
  {
    question: "What types of animation projects do you handle?",
    answer:
      "We create 2D and 3D animations for various needs, including product demos, explainer videos, marketing campaigns and storytelling projects.",
  },
  {
    question: "How long does it take to complete an animation project?",
    answer:
      "The timeline depends on the complexity of your project. On average, most animations take 2-6 weeks from concept to final delivery. ",
  },
  {
    question: "Can I provide input during the animation process?",
    answer:
      "Absolutely! We involve you at every step, from scriptwriting and storyboarding to the final edits, ensuring the animation meets your expectations.",
  },
  {
    question: "What do I need to provide to get started?",
    answer: "Share your project goals, target audience and any specific ideas or references you have in mind. We'll guide you through the rest!"
  }
];

const AnimationServicePage = () => {
  const images = [
    { src: '/Services/Animation/hero1.webp', alt: 'Animation' },
    { src: '/Services/Animation/hero2.gif', alt: 'Animation Gif' }
  ];

  return (
    <main className="bg-[#F2F2F5]">  
      <Breadcrumb 
        title="2D/3D Animation" 
        backgroundImage="/Services/Animation/bg.jpg"
        backgroundPosition="center 45%" 
      />
      
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <ServiceSidebar />
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4 px-4 sm:px-6 md:px-8 py-8 sm:py-4">
          {/* Carousel Section */}
          <div className="mb-4 sm:mb-4">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Carousel images={images} />
              </div>
            </div>
          </div>

          {/* Title and Description Section */}
          <div className="mb-0 sm:mb-0 px-4 sm:px-8 md:px-12">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              In today's digital landscape, animation is a powerful tool for storytelling and marketing. At Evietek, we specialize in creating captivating 2D and 3D animations that engage audiences and communicate messages effectively. For instance, a well-crafted explainer video can simplify complex concepts, making them accessible to viewers. Our animation services are designed to help your brand stand out and connect with your audience on a deeper level.  

              Whether you need a promotional video, educational content, or interactive media, our team of skilled animators can bring your ideas to life with creativity and precision. Let us help you elevate your brand with visually stunning animations that leave a lasting impression on your target audience.  
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0 sm:mb-0">
            <WhyChoose
              heading="Why Choose 2D & 3D Animation Services"
              description="Evietek's Animation Services are designed to bring your brand's vision to life with cutting-edge design, creativity and precision. From engaging 2D visuals to immersive 3D experiences, we transform ideas into captivating digital content."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Comprehensive Animation Solutions",
                  description: "Craft stunning 2D and 3D animations for marketing, branding and storytelling." 
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Support & Continuous Project Updates",
                  description: "Stay in the loop with regular progress reports and seamless communication." 
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Integration with Existing Visual Strategies",
                  description: "Ensure consistency and fluidity across all platforms and media channels."
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable Solutions Tailored to Your Business Needs",
                  description: "From small projects to large-scale productions, we adapt to your goals."
                }
              ]}
              bottomDescription="We provide end-to-end animation services that enhance your brand's visibility, captivate your audience and drive engagement."
            />
          </div>

          {/* Features Section */}
          <div className="mb-0 sm:mb-0">
            <Feature
              heading="Feature of 2D & 3D Animation Services"
              description="Evietek's advanced animation services blend creativity with technology to deliver stunning visual experiences that captivate audiences and boost brand engagement."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Creative Concept Development",
                  description: "Transform your ideas into visually compelling stories."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Animation Rendering",
                  description: "Ensure smooth and efficient production with cutting-edge tools."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "User-Friendly Collaboration Interface ",
                  description: "Seamlessly collaborate with our team to bring your vision to life."
                }
              ]}
              bottomImage={{
                src: "/Services/Animation/image.webp",
                alt: "Web Designer working",
                width: 400,
                height: 300
              }}
              bottomDescription="We provide end-to-end animation solutions, from concept design to final production, ensuring your brand stands out in the digital space."
              additionalFeatures={[
                "High-Quality Visuals", 
                "Custom Animation Strategies", 
                "Regular Progress Updates", 
                "Flexible and Scalable Solutions" 
              ]}
            />
          </div>

          {/* FAQ Section */}
          <div className="mb-0 sm:mb-0 px-4 sm:px-8 md:px-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#030438] mb-6 sm:mb-8">
              Frequently Asked Questions
            </h2>
            <ServiceFAQ faqs={faqs} className="w-full" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnimationServicePage;

 
 
 