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
      "We specialize in 2D and 3D animations for product demos, explainer videos, marketing campaigns, and storytelling projects.",
  },
  {
    question: "How long does an animation project take?",
    answer:
      "Timelines vary based on complexity, but most projects are completed within 2-6 weeks.",
  },
  {
    question: "Can I provide input during the animation process?",
    answer:
      "Absolutely! Your feedback is vital at every stage—from scriptwriting to final edits—to ensure the best results.",
  },
  {
    question: "What do I need to provide to get started?",
    answer: "Simply share your project goals, target audience, and any specific ideas or references. We`ll take care of the rest!"
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#030438] mb-4">
          Captivate Your Audience with Stunning 2D & 3D Animations 
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Getting people's attention is harder than ever in today's fast-paced digital world. Here's where animation comes in—a revolutionary tool that turns ideas into aesthetically captivating stories. Not only do we create captivating 2D and 3D animations at Evietek, but our also leave a lasting impression. The message would be clearer and more interesting if you could explain a complicated idea in a few seconds with an interesting animated video. 
            <br/>
            Whether you're looking for a promotional video, educational animation, or interactive media, our expert animators turn your concepts into reality. Let us bring your vision to life with immersive visuals that make your brand unforgettable. 
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0 sm:mb-0">
            <WhyChoose
              heading="Why Choose Evietek’s 2D & 3D Animation Services?"
              description="At Evietek, we don’t just create animations—we tell stories that resonate. Our tailored animation services ensure your message is delivered with precision, creativity, and impact. Whether you want a dynamic 2D animation or a hyper-realistic 3D experience, we’ve got you covered."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Comprehensive Animation Solutions",
                  description: "Develop eye-catching 2D & 3D animations for branding, marketing, and storytelling." 
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Support & Real-Time Project Updates",
                  description: "Stay informed with continuous progress updates and direct communication with our team." 
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Brand Integration",
                  description: "Ensure your animations align perfectly with your existing brand visuals and strategies."
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Customizable & Scalable Solutions",
                  description: "Whether it’s a small animation or a full-scale production, we tailor our services to your needs."
                }
              ]}
              bottomDescription="We provide start-to-finish animation services designed to elevate your brand, enhance engagement, and drive results."
            />
          </div>

          {/* Features Section */}
          <div className="mb-0 sm:mb-0">
            <Feature
              heading="Features of Our 2D & 3D Animation Services"
              description="Evietek blends creativity with advanced technology to create visually stunning animations that amplify your brand’s presence and captivate your audience."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Creative Concept Development",
                  description: "Transform your ideas into engaging, story-driven animations that spark interest."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Real-Time Animation Rendering",
                  description: "Leverage cutting-edge technology for smooth, high-quality animation production."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Collaborative Workflow",
                  description: "Work seamlessly with our team through a user-friendly interface to refine your vision."
                }
              ]}
              bottomImage={{
                src: "/Services/Animation/image.webp",
                alt: "Web Designer working",
                width: 400,
                height: 300
              }}
              bottomDescription="We provide end-to-end animation solutions, from initial concepts to final execution, ensuring your brand stands out in the digital space. "
              additionalFeatures={[
                "High-Quality Visuals", 
                "Customized Animation Strategies ", 
                "Regular Progress Updates ", 
                "Scalable & Flexible Services " 
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

 
 
 