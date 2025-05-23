'use client';

import Breadcrumb from '@/components/BreadCrumb';
import CaseStudyTitle from '@/components/CaseStudyTitle';
import CaseStudyContent from '@/components/CaseStudyContent';

const LarsTornoe = () => {
  return (
    <>
      <section className="pt-0 relative bg-white select-none cursor-default">

        {/* Breadcrumb */}
        <div className="w-full">
          <Breadcrumb
            title="Lars Tornøe"
            backgroundImage="/Case_Study/bg.avif"
          />
        </div>
      </section>

      <section className="pt-15 md:pt-0 mt-0 px-6 md:px-16 lg:px-0 relative bg-white select-none cursor-default">
        {/* Case Study */}
        <div
          className="flex items-start text-left max-w-6xl mx-auto md:mt-0"
        >
      <div 
        className="flex items-center justify-center rounded-[12px] lg:mt-5 py-[5px] px-[15px] bg-[#5E51FE]"
      >
        <span 
          className="font-['Bricolage_Grotesque'] font-extrabold text-white 
                    text-xl sm:text-xl md:text-2xl lg:text-3xl text-center"
        >
          Case Study
        </span>
      </div>
        </div>


        {/* Case Study Title Section */}
        <div className="max-w-6xl mx-auto px-6">
          <CaseStudyTitle
            title="Transforming Lars Tornøe’s Digital Presence with Modern Branding & Web Design"
            imageLeft="/Case_Study/Lars-Tornoe/title_1.png"
            imageRight="/Case_Study/Lars-Tornoe/title_2.png"
          />
        </div>

        {/* Project Overview Section */}
        <div className="max-w-6xl mx-auto px-6">
          <CaseStudyContent
            mainHeading="Client Overview:"
            contents={[
              {
                text: "The minimalist and modern furniture online store Lars Tornøe is dedicated to selling high-quality, beautifully designed furniture. The company required a sleek and visually appealing digital presence that would speak to design-conscious consumers, given the emphasis on simplicity, utility, and aesthetics.",

              }
            ]}
          />

          <CaseStudyContent
            mainHeading="Challenges:  "
            contents={[
              {
                text: "Before working with us, Lars Tornøe faced several challenges with its branding and website:",
              },
              {
                list: [
                  "**Lack of Cohesive Branding:** The brand’s visual identity did not fully reflect its modern, minimalistic philosophy.",
                  "**Outdated Website Aesthetics:** The previous website design lacked the clean, elegant appeal necessary to attract high-end buyers.",
                  "**User Experience Limitations:** Navigation was not intuitive, making it difficult for customers to explore products seamlessly.",
                  "**Limited Conversion Optimization:** The existing layout did not effectively guide users toward purchases or highlight product uniqueness."
                ]
              },

            ]}
          />

          <CaseStudyContent
            mainHeading="Our Approach & Solution:"
            contents={[
              {
                subHeading: "1. Building a Strong Brand Identity ",
                list: [
                  "Developed a sophisticated branding strategy that aligns with Lars Tornøe’s focus on minimalism and modern design.",
                  "Created a refined color palette, typography, and imagery to maintain a sleek and cohesive look.",
                  "Designed a modern logo and brand assets that convey elegance and exclusivity."
                ],
              },
              {
                subHeading: "2. Aesthetic & Functional Web Design ",
                list: [
                  "Designed a clean, visually striking e-commerce layout that highlights the beauty of each furniture piece.",
                  "Prioritized white space, high-quality visuals, and structured layouts for an upscale shopping experience.",
                  "Optimized product pages with intuitive filters and categorization, making it easy for customers to browse collections.",]
              },
              {
                subHeading: "3. Enhanced User Experience & E-Commerce Performance ",
                list: [
                  "Ensured seamless navigation and a frictionless checkout process to improve user satisfaction.",
                  "Integrated responsive design, ensuring a smooth experience across all devices.",
                  "Implemented conversion-driven CTAs, guiding visitors effortlessly from exploration to purchase."
                ]
              }
            ]
            }
          />

          <CaseStudyContent
            mainHeading="Results & Impact: "
            contents={[
              {
                text: "Our strategic branding and web design improvements led to significant performance enhancements:",
              },
              {
                list: [
                  "**45%** Increase in website engagement and session duration.",
                  "**30%** Boost in e-commerce conversions within the first few months.",
                  "**Stronger Brand Recognition**, positioning Lars Tornøe as a premium furniture brand in the digital space.",
                  "**Improved Customer Experience**, leading to more repeat buyers and organic referrals."
                ],
                image: {
                  src: "/Case_Study/Lars-Tornoe/cover.png",
                  alt: "Result",
                  width: 800,
                  height: 600
                }
              }
            ]}
          />


          <CaseStudyContent
            mainHeading="Client Testimonial :"
            contents={[
              {
                text: "**“**The transformation of our website and branding has been incredible. The new design perfectly captures our contemporary, minimalist aesthetic, so facilitating customer interaction with our products. Our online presence now feels as premium as our furniture collections!**“** ** Lars Tornøe Team**  "
              }
            ]}
          />

          <CaseStudyContent
            mainHeading="Conclusion :"
            contents={[
              {
                text: "By means of a careful branding and web design approach, we assisted Lars Tornøe create an elegant, high-converting e-commerce system that improves user experience and boosts sales. "
              },
              {
                text: "**Looking to Elevate Your E-Commerce Brand?** \\n  Let’s craft a visually stunning, high-performance online store tailored to your brand’s identity. \\n **Get in touch with us today!** "
              }
            ]}
          />

        </div>

      </section>
    </>
  );
};

export default LarsTornoe;
