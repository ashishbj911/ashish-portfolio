import { FaFacebookMessenger, FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    label: "Home",
  },
  {
    id: 2,
    url: "/portfolio",
    label: "Portfolio",
  },
  {
    id: 3,
    url: "/contact",
    label: "Contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    url: "https://api.whatsapp.com/send?phone=+91-8802623772",
    icon: <FaWhatsapp/>
  },
  {
    id: 2,
    url: "https://www.facebook.com/",
    icon:<FaFacebookMessenger/>
  },
  {
    id: 3,
    url: "https://www.instagram.com/theashishbhardwaj/",
    icon:<FaInstagram/>
  },
  {
    id: 4,
    url: "https://www.linkedin.com/in/ashish-bhardwaj-b7251076/",
    icon: <FaLinkedinIn/>
  },
];
