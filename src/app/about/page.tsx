'use client';
import { motion } from "framer-motion"; // Import framer-motion
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Section3 from "@/components/About/Section3";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About Page | Free Next.js Template for Startup and SaaS",
//   description: "This is About Page for Startup Nextjs Template",
// };

const sectionVariants = {
  hidden: {
    y: 50, // Move the section down initially
    opacity: 0, // Start with zero opacity
  },
  visible: {
    y: 0, // Bring the section to its natural position
    opacity: 1, // Fully visible
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.5, // Smooth animation
    },
  },
};

const AboutPage = () => {
  return (
    <>
      {/* Animated Breadcrumb */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Breadcrumb
          pageName="About Page"
          description="AR software enables your customers to try-on products virtually, view them in real life, and leverage image recognition to create immersive, interactive experiences that drive engagement and sales."
        />
      </motion.div>

      {/* Animated About Section One */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <AboutSectionOne />
      </motion.div>

      {/* Animated About Section Two */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <AboutSectionTwo />
      </motion.div>

      {/* Animated Section 3 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Section3 />
      </motion.div>
    </>
  );
};

export default AboutPage;
