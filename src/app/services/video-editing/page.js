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
      "We offer a range of video editing services, including basic editing (trimming and transitions), advanced color correction, motion graphics and audio editing to enhance overall quality.",
  },
  {
    question: "How long does it take to complete a video edit?",
    answer:
      "The turnaround time for video editing depends on the project's complexity and length, but we typically deliver initial edits within 1-2 weeks.",
  },
  {
    question: "Can I provide input during the editing process?",
    answer:
      "Absolutely! We encourage client feedback throughout the editing process to ensure the final product aligns with your vision and requirements.",
  },
  {
    question: "What file formats do you deliver for the final edited video?",
    answer:
      "We deliver final edited videos in various formats based on your needs, including MP4, MOV and AVI, ensuring compatibility with your intended platforms.",
  },
];

const VideoEditingServicePage = () => {
  const images = [
    { src: '/Services/Video/hero1.jpg', alt: 'Video Editing' },
    { src: '/Services/Video/hero2.webp', alt: 'Video Editing' }
  ];

  return (
    <main className="bg-[#F2F2F5]">  
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
            <p className="text-gray-600 leading-relaxed">
              In the digital age, video content is king. At Evietek, we understand that professional video editing is crucial for creating engaging and impactful content. Whether you're a small business owner wanting to promote your brand or a content creator sharing your passion, quality editing can make all the difference. For instance, a travel vlogger can turn raw footage of their adventures into a captivating story that resonates with viewers.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We can help bring your vision to life and take your content to the next level thanks to our experienced editing team. The creative approach and meticulous attention to detail we employ guarantee that your videos will be noticed in a crowded online landscape.
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="mb-0">
            <WhyChoose
              heading="Why Choose Evietek's Video Editing Services?"
              description="Evietek's Video Editing Services are designed to enhance your brand's storytelling with high-quality visuals, seamless transitions and engaging content. Whether for marketing, social media, or professional projects, our expert editors bring your vision to life."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "High-Quality Video Production",
                  description: "Professional editing with attention to detail and creative storytelling."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "24/7 Support & Continuous Revisions",
                  description: "Round-the-clock assistance and regular updates to perfect your content."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Seamless Integration with Your Brand",
                  description: "Consistent branding and messaging across all video content."
                },
                {
                  iconSrc: "/About_Us/4.svg",
                  title: "Scalable Solutions Tailored to Your Needs",
                  description: "Flexible editing packages that grow with your content needs."
                }
              ]}
              bottomDescription="We deliver cinematic excellence, dynamic effects and engaging storytelling to elevate your content. Let Evietek transform your raw footage into compelling videos that captivate your audience!"
            />
          </div>

          {/* Features Section */}
          <div className="mb-0">
            <Feature
              heading="Features of Evietek's Video Editing Services"
              description="Evietek's Video Editing Services provide advanced editing techniques, real-time collaboration and seamless integration to transform your raw footage into engaging visual content."
              features={[
                {
                  iconSrc: "/About_Us/1.svg",
                  title: "Types of Video Editing Services Offered",
                  description: "We offer a range of video editing services, from basic trimming and transitions to advanced color correction for vibrant visuals."
                },
                {
                  iconSrc: "/About_Us/2.svg",
                  title: "Motion Graphics",
                  description: "We specialize in motion graphics and visual effects to enhance professionalism, using animated elements to engage viewers and improve audio quality."
                },
                {
                  iconSrc: "/About_Us/3.svg",
                  title: "Impact Through Video Content",
                  description: "Investing in professional video editing is essential for impactful content; let Evietek help you create high-quality videos that inspire your audience!"
                }
              ]}
              bottomImage={{
                src: "/Services/Video/image.png",
                alt: "Video Editing Illustration",
                width: 400,
                height: 300
              }}
              bottomDescription="Let us help you create professional videos that will captivate your audience and elevate your brand."
              additionalFeatures={[
                "High-Quality Visual Enhancements",
                "Automated Editing Optimization",
                "Regular Content Updates & Revisions",
                "Scalable and Flexible Editing Packages"
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

export default VideoEditingServicePage; 