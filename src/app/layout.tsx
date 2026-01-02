"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

const headerFooterVariants = {
  hidden: {
    y: -50, // Moves header upwards
    opacity: 0,
  },
  visible: {
    y: 0, // Natural position
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.5, // Smooth transition
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {/* Animated Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={headerFooterVariants}
          >
            <Header />
          </motion.div>

          {/* Main content */}
          {children}

          {/* Animated Footer */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={headerFooterVariants}
          >
            <Footer />
          </motion.div>

          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
