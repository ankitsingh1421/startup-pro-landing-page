import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Top AR Tools for Immersive Experiences",
    paragraph:
      "Explore the most powerful AR tools that are revolutionizing industries and enabling immersive experiences for users.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "AR Specialist",
    },
    tags: ["AR tools", "technology", "immersive"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "How AR is Changing the Future of Retail",
    paragraph:
      "Discover how augmented reality is transforming the retail landscape by enhancing shopping experiences and boosting customer engagement.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "AR Developer",
    },
    tags: ["retail", "AR innovation", "future of shopping"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "AR in Education: A Game Changer for Learning",
    paragraph:
      "AR is transforming education by making learning more interactive and engaging. Learn how it’s shaping the future of classrooms.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Educational Technologist",
    },
    tags: ["education", "AR in learning", "technology"],
    publishDate: "2025",
  },
];

export default blogData;
