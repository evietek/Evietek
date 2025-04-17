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

const EpicTeams = () => {
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
            title="EpicTeams"
            backgroundImage="/Case_Study/bg.avif"
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
            title="Making Epic Teams' Brand Identity Stronger With Powerful Design "
            imageLeft="/Case_Study/Epic-Teams/title_1.png"
            imageRight="/Case_Study/Epic-Teams/title_2.jpeg"
          />
        </div>

        {/* Project Overview Section */}
        <div className="max-w-6xl mx-auto px-6">
          <CaseStudyContent
            mainHeading="Client Overview:"
            contents={[
              {
                text: "Through strategic development and new solutions, Epic Teams is a dynamic platform that helps businesses and organizations grow and thrive. They needed a strong, consistent brand identity that accurately captured their mission and kept people interested in order to improve their market presence.",

              }
            ]}
          />

          <CaseStudyContent
            mainHeading="Challenges:  "
            contents={[
              {
                text: "Before working with us, Epic Teams faced several branding and design challenges: "
              },
              {
                list: [
                  "**Inconsistent Brand Identity:** The visual elements lacked a unified look, making it hard to establish strong brand recognition.",
                  "**Lack of Engagement:** The existing design did not effectively communicate trust, professionalism, and innovation, key factors for attracting organizations.",
                  "**Limited Digital Presence:** Their branding did not translate well across digital platforms, impacting visibility and audience reach."
                ]
              }
            ]}
          />

          <CaseStudyContent
            mainHeading="Our Approach & Solution:"
            contents={[
              {
                subHeading: "1. Creating a Unified Branding Strategy ",
                list: [
                  "Developed a modern, professional brand identity that aligns with Epic Teams' mission.",
                  "Established consistent color palettes, typography, and visual elements to create a cohesive look.",
                  "Designed a bold and recognizable logo, ensuring brand recall across all platforms.",
                  "Incorporated dynamic visual storytelling, making the brand feel innovative and approachable.",
                ]
              },
              {
                subHeading: "2. Enhancing Visual Appeal & Engagement ",
                list: [
                  "Crafted high-impact branding materials, including website assets, marketing graphics, and promotional content.",
                  "Used a clean, structured layout to improve readability and engagement for organizations seeking support.",
                  "Incorporated dynamic visual storytelling, making the brand feel innovative and approachable.",
                ]
              },
              {
                subHeading: "3. Strengthening Digital Presence ",
                list: [
                  "Optimized branding for seamless integration across web, social media, and digital marketing campaigns.",
                  "Developed a responsive and visually appealing website that enhances the user experience.",
                  "Ensured brand consistency across all digital touchpoints to build credibility and trust."
                ]
              }
            ]}


          />

          <CaseStudyContent
            mainHeading="Results & Impact: "
            contents={[
              {
                text: "The branding transformation significantly improved Epic Teams' digital and market presence: "
              },
              {
                list: [
                  "**50%** Increase in brand recognition and online engagement.",
                  "**Stronger audience connection**, leading to a **35%** boost in inquiries from organizations.",
                  "**Enhanced professionalism and credibility**, helping Epic Teams establish a trusted presence in its industry."
                ],
                image: {
                  src: "/Case_Study/Epic-Teams/image.jpeg",
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
                text: "**“**  Our new branding has completely transformed how we present ourselves. Our professional touch, clean design, and visually consistent content have given us the credibility and impact we needed to get more businesses to sign up. We couldn’t be happier!**“** **Epic Teams Team**  "
              }
            ]}
          />

          <CaseStudyContent
            mainHeading="Conclusion :"
            contents={[
              {
                text: "Epic Teams has a strong, professional, and interesting brand identity that makes them stand out in their industry thanks to the strategic branding design approach we used."
              },
              {
                text: "**Looking to Strengthen Your Brand Identity?** \\n Let’s create a bold and recognizable brand that captivates your audience and drives growth. **Contact us today!** "
              }
            ]}
          />

        </div>

      </section>
    </>
  );
};

export default EpicTeams;
