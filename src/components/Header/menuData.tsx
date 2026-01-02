import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  
  {
    id: 4,
    title: "Try-on",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Spectacles",
        path: "https://tryon-mvp.netlify.app",
        newTab: false,
      },
      {
        id: 42,
        title: "Earrings",
        path: "https://tryon-mvp.netlify.app/earring.html",
        newTab: false,
      },
      {
        id: 43,
        title: "Nosepins",
        path: "https://tryon-mvp.netlify.app/nose.html",
        newTab: false,
      },
      {
        id: 44,
        title: "Necklaces",
        path: "https://tryon-mvp.netlify.app/neck.html",
        newTab: false,
      },
      {
        id: 45,
        title: "Caps",
        path: "https://cap-sigma.vercel.app/",
        newTab: false,
      },
      {
        id: 46,
        title: "Watch",
        path: "/",
        newTab: false,
      },
      {
        id: 47,
        title: "Braclets",
        path: "/",
        newTab: false,
      },
      {
        id: 48,
        title: "Rings",
        path: "https://ring-ecru.vercel.app/",
        newTab: false,
      },
      {
        id: 49,
        title: "Shoes",
        path: "https://abhay333d.github.io/shoes/",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "View in Reality",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Furtinures",
        path: "https://ar-bca-5thsem.netlify.app/",
        newTab: false,
      },
      {
        id: 42,
        title: "House Models",
        path: "https://3d-housemodel.netlify.app/",
        newTab: false,
      },
      {
        id: 43,
        title: "Menu Crads",
        path: "https://3d-menu-vectarstudio.netlify.app/",
        newTab: false,
      },
      {
        id: 44,
        title: "Home Decors",
        path: "/",
        newTab: false,
      },
      {
        id: 45,
        title: "Ecom Products",
        path: "/",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Image Recognitions",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Personal Card",
        path: "https://tryon-mvp.netlify.app/card/card.html",
        newTab: false,
      },
      {
        id: 42,
        title: "Books",
        path: "https://tryon-mvp.netlify.app/card/card.html",
        newTab: false,
      },
      {
        id: 43,
        title: "X-ray Report",
        path: "https://tryon-mvp.netlify.app/card/card.html",
        newTab: false,
      },
      {
        id: 44,
        title: "Banner Ads",
        path: "https://tryon-mvp.netlify.app/card/card.html",
        newTab: false,
      },
      {
        id: 45,
        title: "Invitation Card",
        path: "https://tryon-mvp.netlify.app/card/card.html",
        newTab: false,
      },
    ],
  },
];
export default menuData;
