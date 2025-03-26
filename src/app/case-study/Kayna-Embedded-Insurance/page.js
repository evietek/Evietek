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

const KaynaEmbeddedInsurance = () => {
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
              title="Kayna Embedded Insurance" 
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
          title="Kayna Embedded Insurance"
          description="Kayna provides an embedded insurance solution, enabling businesses to integrate coverage into their digital platforms effortlessly. With advanced APIs and seamless onboarding, companies can enhance customer security without the hassle of manual processes."
          imageLeft="/Case_Study/title_2.svg"
          imageRight="/Case_Study/title_1.svg"
        />
      </div>

      {/* Project Overview Section */}
      <div className="max-w-6xl mx-auto px-6">
      <CaseStudyContent
        mainHeading="Project Overview:"
        contents={[
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla molestie fermentum. Mauris maximus sapien ut dui tempor pharetra. Fusce vitae tellus ut enim vehicula fringilla eget ut ligula. Nam viverra gravida sodales. Morbi placerat eleifend elit, sit amet porttitor augue vehicula vitae. Aenean at sodales dui. Aenean laculis sem in porta finibus. Morbi cursus nisl mollis, suscipit est sed, feugiat lacus.",
            image: {
              src: "/Case_Study/Project_Overview.svg",
              alt: "Services We Provide",
              width: 800,
              height: 600
            }
          }
        ]}
      />

<CaseStudyContent
        mainHeading="Key Features:  "
        contents={[
          {
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla molestie fermentum. Mauris maximus sapien ut dui tempor pharetra. Fusce vitae tellus ut enim vehicula fringilla eget ut ligula. Nam viverra gravida sodales. Morbi placerat eleifend elit, sit amet porttitor augue vehicula vitae. Aenean at sodales dui. Aenean iaculis sem in porta finibus. Morbi cursus nisl mollis, suscipit est sed, feugiat lacus. ",
        
          }
        ]}
      />

<CaseStudyContent
        mainHeading="Project Key Components:"
        contents={[
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla molestie fermentum. Mauris maximus sapien ut dui tempor pharetra. Fusce vitae tellus ut enim vehicula fringilla eget ut ligula. Nam viverra gravida sodales. Morbi placerat eleifend elit, sit amet porttitor augue vehicula vitae. Aenean at sodales dui. Aenean laculis sem in porta finibus. Morbi cursus nisl mollis, suscipit est sed, feugiat lacus.",
            image: {
              src: "/Case_Study/Project_Key.svg",
              alt: "Key Project Components",
              width: 800,
              height: 600
            },
          }
        ]}
      />

<CaseStudyContent
        mainHeading="Business Analysis:"
        contents={[
          {
            text: "These findings help in understanding the gaps in the market & potential opportunities for improvement & innovation.",
            image: {
              src: "/Case_Study/Analysis_1.svg",
              alt: "Analysis 1",
              width: 800,
              height: 600
            }
          },
          {
            text: "These findings help in understanding the gaps in the market & potential opportunities for improvement & innovation.",
            image: {
              src: "/Case_Study/Analysis_2.svg",
              alt: "Analysis 2",
              width: 800,
              height: 600
            }
          }
        ]}
      />

<CaseStudyContent
        mainHeading="Brand Identity & Design System:"
        contents={[
          {
            image: {
              src: "/Case_Study/Logo.svg",
              alt: "Logo",
              width: 800,
              height: 600
            }
          },
          {
            subHeading: "Colors",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla molestie fermentum. Mauris maximus sapien ut dui tempor pharetra. Fusce vitae tellus ut enim vehicula fringilla eget ut ligula. Nam viverra gravida sodales.",
            image: {
              src: "/Case_Study/Colors.svg",
              alt: "Colors",
              width: 800,
              height: 600
            }
          },
           {
            subHeading: "Typography",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla molestie fermentum. Mauris maximus sapien ut dui tempor pharetra. Fusce vitae tellus ut enim vehicula fringilla eget ut ligula. Nam viverra gravida sodales.",
            image: {
              src: "/Case_Study/Typography.svg",
              alt: "Typography",
              width: 800,
              height: 600
            }
          }
        ]}
      />

<CaseStudyContent
        mainHeading="Paint Points:"
        contents={[
          {
            text: "These findings help in understanding the gaps in the market & potential opportunities for improvement & innovation.",
            image: {
              src: "/Case_Study/Paint.svg",
              alt: "Paint Points",
              width: 800,
              height: 600
            }
          }
        ]}
      />

<CaseStudyContent
        mainHeading="UI Design:"
        contents={[
          {
            subHeading: "Dashboard:",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla molestie fermentum. Mauris maximus sapien ut dui tempor pharetra. Fusce vitae tellus ut enim vehicula fringilla eget ut ligula. Nam viverra gravida sodales.",
            image: {
              src: "/Case_Study/Dashboard.svg",
              alt: "Dashboard",
              width: 800,
              height: 600
            }
          },
           {
            subHeading: "Other Pages:",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla molestie fermentum. Mauris maximus sapien ut dui tempor pharetra. Fusce vitae tellus ut enim vehicula fringilla eget ut ligula. Nam viverra gravida sodales.",
            image: {
              src: "/Case_Study/Other_Pages.svg",
              alt: "Other Pages",
              width: 800,
              height: 600
             }
          }
        ]}
      />

<CaseStudyContent
        mainHeading="Final Deliverable:"
        contents={[
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla molestie fermentum. Mauris maximus sapien ut dui tempor pharetra. Fusce vitae tellus ut enim vehicula fringilla eget ut ligula. Nam viverra gravida sodales. Morbi placerat eleifend elit, sit amet porttitor augue vehicula vitae. Aenean at sodales dui. Aenean laculis sem in porta finibus. Morbi cursus nisl mollis, suscipit est sed, feugiat lacus.",
            image: {
              src: "/Case_Study/Final.svg",
              alt: "Final Deliverable",
              width: 800,
              height: 600
            }
          }
        ]}
      />
    
      </div>

    </section>
    </>
  );
};

export default KaynaEmbeddedInsurance;
