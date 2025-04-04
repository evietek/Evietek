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

const Trackpac = () => {
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
            title="Trackpac"
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
            title="Elevating TrackPac’s Digital Presence with Advanced Web Design & Development "
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
                text: "TrackPac offers industry-leading Internet of Things (IoT) sensor management services, letting companies track, analyze, and optimize their operations in real-time with data collected from sensors. To show off its revolutionary solutions and get people more involved, TrackPac, an innovative tech company, needed a website that was up-to-date, fast, and scalable.",
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
                text: "Before our involvement, TrackPac’s digital presence faced several hurdles:",
              },
              {
                list: [
                  "**Outdated Design** The website did not reflect TrackPac’s high-tech and data-driven solutions.",
                  "**Poor User Experience** Navigation was complex, making it difficult for users to explore services and understand IoT sensor management benefits.",
                  "**Lack of Scalability** The previous website wasn’t optimized for future expansion and new features.",
                  "**Slow Performance** Page load times were high, negatively impacting user engagement and SEO rankings."
                ]
              },

            ]}
          />

          <CaseStudyContent
            mainHeading="Our Approach & Solution:"
            contents={[
              {
                subHeading: "1. Modern & Intuitive Web Design",
                list: [
                  "Developed a sleek, tech-forward UI that aligns with TrackPac’s IoT-driven vision.",
                  "Implemented clear service categorization, making it easier for users to explore IoT solutions.",
                  "Designed high-contrast visuals and interactive elements to enhance engagement.",
                ]
              },
              {
                subHeading: "2. Optimized Web Development for Performance & Scalability",
                list: [
                  "Built a responsive, high-performance website to ensure seamless access across all devices.",
                  "Integrated fast-loading architecture to reduce page load times and improve SEO rankings.",
                  "Structured the website for future scalability, allowing easy integration of new features and IoT advancements.",
                ]
              },
              {
                subHeading: "3. Enhancing User Journey & Engagement",
                list: [
                  "Simplified navigation and CTA placements to drive inquiries and conversions.",
                  "Developed an interactive dashboard showcase, helping users visualize how TrackPac’s IoT solutions function.",
                  "Ensured seamless content flow, making technical information accessible and engaging for all users.",
                ]
              }
            ]}


          />

          <CaseStudyContent
            mainHeading="Results & Impact: "
            contents={[
              {
                text: "Our web design and development enhancements led to measurable improvements: ",
              },
              {
                list: [
                  "**40%** Increase in user engagement within the first three months.",
                  "**50%** Faster page load times, improving site performance and SEO rankings.",
                  "**30%** Higher Conversion Rate, with more users reaching out for service inquiries.",
                  "**Enhanced Scalability**, allowing TrackPac to integrate new IoT solutions effortlessly."
                ]
              }
            ]}
          />


          <CaseStudyContent
            mainHeading="Client Testimonial :"
            contents={[
              {
                text: "**“**Our new website perfectly captures the innovation behind TrackPac. Our client engagement and service inquiries have increased significantly as a result of the intuitive design and seamless functionality. The team exceeded our expectations!**“** **TrackPac Team**  "
              }
            ]}
          />

          <CaseStudyContent
            mainHeading="Conclusion :"
            contents={[
              {
                text: "We transformed TrackPac's online presence into a high-performing, user-friendly platform that improves customer experience and business growth by employing a refined web design and development strategy. "
              },
              {
                text: "**Want a High-Impact Website for Your Tech Business?** \\n Let’s build a cutting-edge, scalable digital presence that drives engagement and conversions. **Get in touch with us today!** "
              }
            ]}
          />

        </div>

      </section>
    </>
  );
};

export default Trackpac;
