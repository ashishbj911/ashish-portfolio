import { FaFacebookMessenger, FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import React from 'react';

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
    url: "/technologies",
    label: "Technologies",
  },
  {
    id: 4,
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

export const tech = [
    {
        id:1,
        image: "../images/tech/react.png",
        label: 'React JS'
    },
    {
        id:2,
        image: "../images/tech/html-5.png",
        label: 'HTML 5'
    },
    {
        id:3,
        image: "../images/tech/css.png",
        label: 'CSS 3'
    },
    {
        id:4,
        image: "../images/tech/js.png",
        label: 'Javascript'
    },
    {
        id:5,
        image: "../images/tech/jquery.png",
        label: 'Jquery'
    },
    {
        id:6,
        image: "../images/tech/wordpress.png",
        label: 'Wordpress'
    },
    {
        id:7,
        image: "../images/tech/socialengine.png",
        label: 'Social Engine'
    },
    {
        id:8,
        image: "../images/tech/photoshop.png",
        label: 'Adobe Photoshop'
    },
    {
        id:9,
        image: "../images/tech/xd.png",
        label: 'Adobe XD'
    },
    {
        id:10,
        image: "../images/tech/illustrator.png",
        label: 'Adobe Illustrator'
    },
    {
        id:11,
        image: "../images/tech/figma.png",
        label: 'Figma'
    },
    {
        id:12,
        image: "../images/tech/bootstrap.png",
        label: 'Bootstrap'
    },
    {
        id:13,
        image: "../images/tech/material.png",
        label: 'Materialize'
    },
    {
        id:14,
        image: "../images/tech/amp.png",
        label: 'Google AMP'
    },
    {
        id:15,
        image: "../images/tech/sass.png",
        label: 'SASS'
    }
]
