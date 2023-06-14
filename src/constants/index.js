import {
  aros,
  funkos,
  llaveros,
  souvenir,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Inicio",
  },
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "experience",
    title: "Mis trabajos",
  },
  {
    id: "feedbacks",
    title: "Mis clientes"
  },
  {
    id: "contact",
    title: "Contáctame",
  },
];



const experiences = [
  {
    title: "Funkos",
    company_name: "Personajes literarios, Caricaturas, Anime, Pelis y más",
    icon: funkos,
    iconBg: "#383E56",
    date: "Funkos Personalizados de tus prsonajes favoritos",
    image: funkos,
  },
  {
    title: "LLaveros",
    company_name: "Mate, Animales, Objetos ",
    icon: llaveros,
    iconBg: "#E6DEDD",
    date: "Llaveros personalizados de tus objetos o personajes favoritos",
    image: llaveros,
  },
  {
    title: "Souvenirs",
    company_name: "Souvenirs",
    icon: souvenir,
    iconBg: "#383E56",
    date: "Souvenirs personalizados",
    image: souvenir,
  },
  {
    title: "Aros",
    company_name: "Mate, Oreo, Objetos varios",
    icon: aros,
    iconBg: "#E6DEDD",
    date: "Aros personalizados",
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
