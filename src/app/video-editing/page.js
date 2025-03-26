"use client";
import Breadcrumb from '@/components/BreadCrumb';
import Carousel from '@/components/ServiceImageCarousel';
import WhyChoose from '@/components/ServiceWCU';
import Feature from '@/components/ServiceFeature';
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceSidebar from "@/components/ServiceSidebar";

const faqs = [
  {
    question: "What types of video editing services do you offer?",
    answer:
"We offer basic editing (trimming and transitions), advanced color correction, motion graphics and audio enhancements to improve video quality."  },
  {
    question: "How long does it take to complete a video edit?",
    answer:
"Turnaround times vary by project complexity, but we typically deliver initial edits within 1–2 weeks."  },
  {
    question: "Can I provide input during the editing process?",
    answer:
"Absolutely! We value client feedback at every stage to ensure the final video meets your vision and expectations."  },
  {
    question: "What file formats do you deliver for the final edited video?",
    answer:
"We provide final videos in multiple formats, including MP4, MOV and AVI, ensuring compatibility with your preferred platforms."  },
];

const VideoEditingServicePage = () => {
  const images = [
    { src: '/Services/Video/hero1.jpg', alt: 'Video Editing' },
    { src: '/Services/Video/hero2.webp', alt: 'Video Editing' }
  ];

  return (
    <main className="bg-[#F2F2F5] select-none cursor-default pt-10 md:pt-0">  
      <Breadcrumb 
        title="Video Editing" 
        backgroundImage="/Services/Video/bg.jpg" 
        backgroundPosition="center 40%" 
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
            Transform Your Videos into Captivating Visual Stories 
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-600 leading-relaxed">
            In today’s digital landscape, video content is king. At Evietek, we specialize in professional video editing that enhances storytelling, engages audiences and elevates brand impact. Whether you’re a business promoting your services or a content creator sharing your passion, expert editing makes all the difference. Imagine a travel vlogger turning raw footage into a cinematic masterpiece, that’s the power of skilled editing.            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
            With our creative expertise and meticulous attention to detail, we ensure your videos stand out in the competitive online space.             </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Evietek`s Video Editing Services?"
              description="Evietek’s video editing solutions bring your vision to life with high-quality visuals, seamless transitions and engaging storytelling. Whether for marketing, social media, or professional projects, we deliver polished content that captures attention."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "High-Quality Video Production",
                  description: "Create visually stunning content that enhances your brand image."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Support & Continuous Revisions",
                  description: "Get expert assistance and revisions tailored to your needs."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Integration with Your Brand",
                  description: "Maintain consistency across all video platforms."
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable Solutions Tailored to Your Needs",
                  description: "Custom editing packages designed to match your project’s scope."
                }
              ]}
              bottomDescription="From cinematic effects to dynamic transitions, our editing process ensures your videos leave a lasting impact. Let Evietek turn your raw footage into compelling visual stories."
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Features of Evietek`s Video Editing Services"
              description="Evietek’s expert video editing combines creativity, precision and the latest technology to produce visually compelling content."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Types of Video Editing Services Offered",
                  description: "We provide a wide range of video editing solutions, from basic trimming and transitions to advanced color correction for stunning, vibrant visuals."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Motion Graphics & Visual Effects",
                  description: "Enhance your videos with motion graphics, animated elements and high-quality audio enhancements for a professional touch."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Impact Through Video Content",
                  description: "Professional video editing boosts engagement, strengthens brand presence and inspires audiences. Let Evietek help you create content that stands out."
                }
              ]}
              bottomImage={{
                src: "/Services/Video/image.png",
                alt: "Video Editing Illustration",
                width: 400,
                height: 300
              }}
              bottomDescription="We offer: "
              additionalFeatures={[
                "High-Quality Visual Enhancements",
                "Automated Editing Optimization",
                "Regular Content Updates & Revisions",
                "Scalable and Flexible Editing Packages"
              ]}
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#030438] mb-4 sm:mb-6 px-4 sm:px-8 md:px-12">
              Elevate Your Videos with Evietek’s Expertise 
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed  mb-2 px-4 sm:px-8 md:px-12">
            Let us bring your vision to life through expert video editing and storytelling. Contact Evietek today to create videos that captivate and inspire!             </p>
          </div>

          {/* FAQ Section */}
          <div className="mb-0 px-12">
            <h2 className="text-3xl font-bold text-[#030438] mb-8">
              Frequently Asked Questions
            </h2>
            <ServiceFAQ faqs={faqs} className="w-full" />
          </div>
          <p className="text-sm sm:text-lg text-[#030438] leading-relaxed  mt-4 mb-2 px-4 sm:px-10 md:px-16">
          <b>Ready to take your videos to the next level? Contact Evietek today!</b> 
          </p>
        </div>
      </div>
    </main>
  );
};

export default VideoEditingServicePage; 