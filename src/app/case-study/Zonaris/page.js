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

const Zonaris = () => {
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
            title="Zonaris"
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
            title="Transforming Zonaris with a Cutting-Edge UI/UX & Web Design "
            imageLeft="/Case_Study/title_2.svg"
            imageRight="/Case_Study/title_1.svg"
          />
        </div>

        {/* Project Overview Section */}
        <div className="max-w-6xl mx-auto px-6">
          <CaseStudyContent
            mainHeading="Client Overview:"
            contents={[
              {
                text: "When it comes to Bitcoin staking, Zonaris is a leading crypto platform that offers users solutions that are safe, easy, and yield a lot of money. Zonaris wants to improve its digital presence with a modern, user-friendly, conversion-driven website that reflects its creative approach as the crypto industry changes. "
                // image: {
                //   src: "/Case_Study/Project_Overview.svg",
                //   alt: "Services We Provide",
                //   width: 800,
                //   height: 600
                // }
              }
            ]}
          />

          <CaseStudyContent
            mainHeading="Challenges:  "
            contents={[
              {
                text: "Before collaborating with us, Zonaris faced several UX and design challenges: "
              },
              {
                list: [
                  "**Outdated UI:** The existing interface lacked a modern, crypto-friendly aesthetic.",

                  "**Complex Navigation:** Users found it difficult to access essential staking information and complete transactions smoothly.",

                  "**Low Engagement & Conversions:** The design failed to build trust and guide users toward staking actions.",

                  "**Lack of Mobile Optimization:** The platform needed a fully responsive design for an optimal experience across devices."
                ]
              }
            ]}
          />

          <CaseStudyContent
            mainHeading="Our Approach & Solution:"
            contents={[
              {
                subHeading: "1. Revamping UI/UX for a Seamless Experience ",
                list: [
                  "We conducted an in-depth user behavior analysis to understand how visitors interacted with the platform. Based on our findings, we:",
                  "Redesigned the UI with a sleek, crypto-centric visual identity, integrating a dark mode for a futuristic appeal.",
                  "Optimized navigation by simplifying the dashboard and structuring content in a way that prioritizes essential user actions."
                ]
              },
              {
                subHeading: "2. Enhancing Trust & Credibility Through Design ",
                list: [
                  "Integrated clear, compelling CTAs that guide users effortlessly from browsing to staking.",
                  "Implemented a transparent information layout, ensuring users easily access staking rates, security features, and platform benefits.",
                  "Designed an interactive onboarding experience, making it simple for new users to understand the staking process."
                ]
              },
              {
                subHeading: "3. Mobile-First, Lightning-Fast Performance ",
                list: [
                  "Created a fully responsive design, ensuring a seamless experience on desktops, tablets, and mobile devices.",
                  "Optimized website speed and performance for fast-loading pages, reducing bounce rates and improving retention."
                ]
              }
            ]}


          />

          <CaseStudyContent
            mainHeading="Results & Impact: "
            contents={[
              {
                text: "The transformation led to significant improvements in user engagement and conversions: "
              },
              {
                list: [
                  "**35%** increase in user sign-ups within the first two months.",
                  "**50%** improvement in site navigation efficiency, leading to smoother user journeys.",
                  "**40%** growth in Bitcoin staking transactions, demonstrating higher user confidence in the platform.",
                  "**Reduced bounce rate** from 60% to 35% due to a more intuitive and engaging design."
                ]
              }
            ]}
          />


          <CaseStudyContent
            mainHeading="Client Testimonial :"
            contents={[
              {
                text: "**“**The new design has completely transformed our platform! The easy-to-use interface and smooth navigation have massively increased user engagement and stake conversions. We couldn’t have asked for a better partner for this project.**“** **Zonaris Team**  "
              }
            ]}
          />

          <CaseStudyContent
            mainHeading="Conclusion :"
            contents={[
              {
                text: "With a strategic blend of UI/UX optimization and web design, we helped Zonaris create an engaging, high-performing platform that not only attracts users but also encourages Bitcoin staking conversions. "
              },
              {
                text: "**Want Similar Results?** \\n Looking to elevate your crypto platform’s UI/UX and web design? Let’s build a seamless experience that drives engagement and conversions. **Contact us today!** "
              }
            ]}
          />

        </div>

      </section>
    </>
  );
};

export default Zonaris;
