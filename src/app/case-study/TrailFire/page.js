'use client';

import Breadcrumb from '@/components/BreadCrumb';
import CaseStudyTitle from '@/components/CaseStudyTitle';
import CaseStudyContent from '@/components/CaseStudyContent';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation Variants
const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const TrailFire = () => {
  return (
    <>
      <section className="pt-0 relative bg-white select-none cursor-default">

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <Breadcrumb
            title="TrailFire"
            backgroundImage="/case_study/bg.avif"
          />
        </motion.div>
      </section>

      <section className="pt-15 md:pt-0 mt-0 px-6 md:px-16 lg:px-0 relative bg-white select-none cursor-default">
        {/* Case Study Logo Image */}
        <motion.div
          className="flex items-start text-left max-w-6xl mx-auto md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <Image
            src="/Case_Study/casestudy.svg"
            alt="Case Study"
            width={120}
            height={60}
            className="w-[110px] h-[55px] sm:w-[130px] sm:h-[65px] md:w-[150px] md:h-[75px] lg:w-[120px] lg:h-[60px]"
          />
        </motion.div>

        {/* Case Study Title Section */}
        <div className="max-w-6xl mx-auto px-6">
          <CaseStudyTitle
            title="Web Design and Development to Improve TrailFire's Online Presence"
            imageLeft="/Case_Study/Trailfire/title_1.png"
            imageRight="/Case_Study/Trailfire/title_2.png"
          />
        </div>

        {/* Project Overview Section */}
        <div className="max-w-6xl mx-auto px-6">
          <CaseStudyContent
            mainHeading="Client Overview:"
            contents={[
              {
                text: "As a pay-per-click (PPC) Services Company that focuses on getting businesses more online visibility and sales, TrailFire is results-driven. TrailFire wanted a website that clearly conveyed its knowledge, credibility, and service offerings since it was dedicated to producing ROI-focused campaigns. "
              }
            ]}
          />

          <CaseStudyContent
            mainHeading="Challenges:  "
            contents={[
              {
                text: "Before our collaboration, TrailFire faced several challenges with its website:",
              },
              {
                list: [
                  "**Lack of a Conversion-Optimized Design:** The previous website did not effectively guide visitors toward inquiry and conversion actions.",
                  "**Unclear Service Presentation:** The PPC services were not structured in a way that made it easy for potential clients to understand their benefits.",
                  "**Outdated User Experience (UX):** Navigation was not intuitive, leading to higher bounce rates and lower engagement.",
                  "**Limited Mobile Responsiveness:** The site lacked a fully responsive layout, affecting user experience across different devices."
                ]
              },

            ]}
          />

          <CaseStudyContent
            mainHeading="Our Approach & Solution:"
            contents={[
              {
                subHeading: "1. Revamping the Website with a High-Conversion UI/UX ",
                list: [
                  "Designed a modern, clean, and visually engaging interface that reflects TrailFire’s expertise in PPC services.",
                  "Created clear call-to-action (CTA) sections strategically placed to drive inquiries and sign-ups.",
                  "Developed a structured content flow, ensuring visitors can quickly understand the benefits of TrailFire’s PPC solutions."
                ]
              },
              {
                subHeading: "2. Enhancing Service Presentation & Messaging ",
                list: [
                  "Restructured the service pages, making them concise, informative, and conversion-focused.",
                  "Added engaging visuals, infographics, and case studies to establish credibility and showcase real results.",
                  "Optimized content with SEO-friendly headings, service highlights, and clear benefit statements."
                ]
              },
              {
                subHeading: "3. Developing a High-Performance & Responsive Website ",
                list: [
                  "Built a fast, lightweight website optimized for speed and seamless performance.",
                  "Ensured full mobile responsiveness, providing an excellent browsing experience across all screen sizes.",
                  "Integrated secure and scalable backend development, supporting future growth and scalability."
                ]
              }
            ]}


          />

          <CaseStudyContent
            mainHeading="Results & Impact: "
            contents={[
              {
                text: "Our web design and development solutions resulted in significant improvements for TrailFire: ",
              },
              {
                list: [
                  "**55%** Increase in user engagement and time spent on the website",
                  "**40%** Improvement in conversion rates, leading to more service inquiries",
                  "**Stronger Brand Perception**, positioning TrailFire as an authoritative PPC solutions provider",
                  "**Improved Mobile Experience**, reducing bounce rates and increasing lead generation"
                ],
                image: {
                  src: "/Case_Study/Trailfire/image.jpeg",
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
                text: " **“**Our new website has transformed the way we present our PPC services.The clean, user- friendly design, combined with a structured content strategy, has significantly increased our lead conversions. The team truly understood our business goals and delivered a website that performs.**“** **TrailFire Team**  "
              }
            ]}
          />

          <CaseStudyContent
            mainHeading="Conclusion :"
            contents={[
              {
                text: "Our high-performance development and conversion-focused web design helped TrailFire build a stronger online presence that improves the user experience and helps the business grow."
              },
              {
                text: "**Need a Website That Converts?** \\n Let’s craft a high-performing, visually compelling site tailored to your business goals.\\n **Get in touch with us today!** "
              }
            ]}
          />

        </div>

      </section>
    </>
  );
};

export default TrailFire;
