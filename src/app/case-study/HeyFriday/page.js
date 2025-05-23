'use client';

import Breadcrumb from '@/components/BreadCrumb';
import CaseStudyTitle from '@/components/CaseStudyTitle';
import CaseStudyContent from '@/components/CaseStudyContent';


const HeyFriday = () => {
  return (
    <>
      <section className="pt-0 relative bg-white select-none cursor-default">

        {/* Breadcrumb */}
        <div className="w-full">
          <Breadcrumb
            title="HeyFriday"
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
            title="Strengthening HeyFriday AI’s Online Presence with Strategic SEO & Backlink Building "
            imageLeft="/Case_Study/HeyFriday/title_1.jpeg"
            imageRight="/Case_Study/HeyFriday/title_2.jpeg"
          />
        </div>

        {/* Project Overview Section */}
        <div className="max-w-6xl mx-auto px-6">
          <CaseStudyContent
            mainHeading="Client Overview:"
            contents={[
              {
                text: "HeyFriday AI is an AI-powered writing tool that assists users in quickly producing excellent content. Thanks to HeyFriday AI, businesses, content creators, and marketers can easily and intelligently write everything from blog posts and marketing copy to creative writing. Search engine optimization (SEO) tactics were necessary for the platform to increase its online visibility and search engine rankings in order to differentiate itself in the highly competitive AI writing industry."

              }
            ]}
          />

          <CaseStudyContent
            mainHeading="Challenges:  "
            contents={[
              {
                text: "Before implementing our backlink-building strategy, HeyFriday AI faced several SEO challenges: "
              },
              {
                list: [
                  "**Low Domain Authority (DA):** The website lacked a strong backlink profile, which affected its credibility in search rankings. ",
                  "**Limited Organic Traffic:** Due to fewer high-authority backlinks, the site struggled to rank on competitive keywords. ",
                  "**Lack of Industry-Specific Backlinks:** The site needed authoritative backlinks from relevant AI, tech, and content marketing niches to enhance its search performance. ",
                  "**Slow Growth in Search Engine Rankings:** Despite having valuable AI writing services, HeyFriday AI wasn’t reaching its full SEO potential. "
                ]
              }
            ]}
          />

          <CaseStudyContent
            mainHeading="Our Approach & Solution:"
            contents={[
              {
                subHeading: "1. Implementing a High-Quality Backlink Strategy ",
                list: [
                  "Conducted in-depth competitor analysis to identify backlink opportunities from high-authority sites in the AI and writing space. ",
                  "Built white-hat backlinks from authoritative blogs, industry directories, and content marketing websites. ",
                  "Focused on contextual link placements within AI-related articles, improving SEO credibility. "
                ]
              },
              {
                subHeading: "2. Guest Posting & Content Syndication ",
                list: [
                  "Partnered with reputable websites to publish guest posts featuring HeyFriday AI as a valuable tool for content creation. ",
                  "Developed high-quality, SEO-optimized guest articles that positioned HeyFriday AI as a leader in AI writing solutions.",
                  "Leveraged content syndication, ensuring brand exposure across multiple platforms."
                ]
              },
              {
                subHeading: "3. Niche-Relevant Forum & Community Engagement ",
                list: [
                  "Created backlinks through engaging discussions on AI, writing, and marketing forums. ",
                  "Provided valuable insights and tool recommendations in tech communities to build credibility and natural backlinks. ",
                ]
              },
              {
                subHeading: "4. Optimizing Anchor Text Strategy ",
                list: [
                  "Used a diverse anchor text strategy, balancing branded, generic, and keyword-focused backlinks to enhance SEO performance. ",
                  "Avoided spammy tactics, ensuring a natural and algorithm-friendly backlink profile."
                ]
              }
            ]
            }
          />

          <CaseStudyContent
            mainHeading="Results & Impact: "
            contents={[
              {
                text: "Our backlink-building strategy led to significant improvements in HeyFriday AI’s SEO performance:"
              },
              {
                list: [
                  "**35%** Increase in domain authority within three months. ",
                  "**50%** Growth in organic traffic, leading to higher user engagement and conversions. ",
                  "**Top 10** Google rankings for competitive keywords in the AI writing niche. ",
                  "**Stronger Online Presence**, positioning HeyFriday AI as a trusted AI writing solution. "
                ]
              }
            ]}
          />


          <CaseStudyContent
            mainHeading="Client Testimonial :"
            contents={[
              {
                text: " **“**The backlink strategy helped us gain authority in the AI writing industry. In search results, our rankings went up a lot, which brought us more organic traffic and new users. The results were beyond our expectations!**“** **HeyFriday AI Team**  "
              }
            ]}
          />

          <CaseStudyContent
            mainHeading="Conclusion :"
            contents={[
              {
                text: "We assisted HeyFriday AI in improving its SEO rankings, increasing organic traffic, and solidifying its position as an industry leader in AI writing by implementing a targeted backlink-building strategy. "
              },
              {
                text: "**Want to Boost Your Website’s SEO with High-Quality Backlinks?** \\n Let’s build a strong backlink strategy that increases your visibility and rankings **Contact us today!** "
              }
            ]}
          />

        </div>

      </section>
    </>
  );
};

export default HeyFriday;
