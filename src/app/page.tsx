'use client';
import { motion } from "framer-motion";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Renderops",
//   description: "AR and VR development made easy",
//   // other metadata
// };

const zoomInUpVariants = {
  hidden: {
    scale: 0.8, // Start slightly smaller
    y: 50, // Start from slightly below
    opacity: 0, // Invisible at the start
  },
  visible: {
    scale: 1, // Full size
    y: 0, // Natural position
    opacity: 1, // Fully visible
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.8, // Duration of the animation
    },
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={zoomInUpVariants}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInUpVariants}
        viewport={{ once: true, amount: 0.2 }} // Trigger only once when 20% of the section is visible
      >
        <Features />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Video />
      </motion.div>
      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Brands />
      </motion.div> */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <AboutSectionOne />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <AboutSectionTwo />
      </motion.div>
      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Testimonials />
      </motion.div> */}
      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Pricing />
      </motion.div> */}
      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Blog />
      </motion.div> */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInUpVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Contact />
      </motion.div>
    </>
  );
}
