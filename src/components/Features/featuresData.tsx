import { FaVrCardboard, FaBookOpen, FaXRay, FaAd, FaCouch, FaHome } from "react-icons/fa";

const featuresData = [
  {
    id: "tryon-face-hand-foot",
    title: "Try-On Models with Face, Hand & Foot Recognition",
    paragraph:
      "Experience cutting-edge AR technology that enables virtual try-on solutions using face, hand, and foot recognition. Perfect for beauty, fashion, and footwear industries.",
    icon: <FaVrCardboard size={50} />, // Increased size
  },
  {
    id: "ar-education",
    title: "AR for Education",
    paragraph:
      "Revolutionize learning with AR solutions that use image recognition to create interactive and immersive educational experiences.",
    icon: <FaBookOpen size={50} />, // Increased size
  },
  {
    id: "ar-healthcare-xray",
    title: "AR for Healthcare & X-Ray Analysis",
    paragraph:
      "Leverage AR technology for enhanced medical diagnostics, including X-ray visualization, providing better insights for healthcare professionals.",
    icon: <FaXRay size={50} />, // Increased size
  },
  {
    id: "ar-banner-ads",
    title: "AR for Banner Ads",
    paragraph:
      "Redefine advertising with AR-powered banner ads that engage and captivate audiences with dynamic and interactive content.",
    icon: <FaAd size={50} />, // Increased size
  },
  {
    id: "ar-furniture-buying",
    title: "AR for Buying Furniture",
    paragraph:
      "Visualize furniture in your space before purchasing with AR technology, ensuring perfect fit and style compatibility.",
    icon: <FaCouch size={50} />, // Increased size
  },
  {
    id: "ar-real-estate",
    title: "Viewing Home Models for Real Estate",
    paragraph:
      "Explore real estate properties through AR, enabling users to view home models and layouts virtually in stunning detail.",
    icon: <FaHome size={50} />, // Increased size
  },
];

export default featuresData;
