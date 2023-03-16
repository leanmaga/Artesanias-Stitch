import {
  aros,
  funkos,
  llaveros,
  souvenir,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "experience",
    title: "Mis trabajos",
  },
  {
    id: "contact",
    title: "Contáctame",
  },
];



const experiences = [
  {
    title: "Funkos",
    company_name: "Starbucks",
    icon: funkos,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    image: funkos,
  },
  {
    title: "LLaveros",
    company_name: "Llaveros",
    icon: llaveros,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    image: llaveros,
  },
  {
    title: "Souvenirs",
    company_name: "Souvenirs",
    icon: souvenir,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    image: souvenir,
  },
  {
    title: "Aros",
    company_name: "Meta",
    icon: aros,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    image: aros,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];



export {  experiences, testimonials };
