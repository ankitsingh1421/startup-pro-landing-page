'use client';

import { motion } from "framer-motion"; // Import framer-motion
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const sectionVariants = {
  hidden: {
    y: 50, // Initial position down the Y-axis
    opacity: 0, // Fully transparent
  },
  visible: {
    y: 0, // Normal position
    opacity: 1, // Fully visible
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.5, // Smooth animation
    },
  },
};

const ContactPage = () => {
  return (
    <>
      {/* Animated Breadcrumb */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Breadcrumb
          pageName="Contact Page"
          description="Join the future of Augmented Reality and get the latest news on immersive experiences, groundbreaking AR tech, and upcoming product releases."
        />
      </motion.div>

      {/* Animated Contact Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.div>
    </>
  );
};

export default ContactPage;
