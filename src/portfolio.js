import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import imgUrl from "./assets/profile.jpg";
import CVPath from "./assets/CV.docx";

const navLinks = [
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Projects",
    path: "#projects",
  },
];

const about = {
  content: [
    "As a web developer trainee, I am committed to continually learning essential coding languages and tools necessary for career building. ",
    "My goal is to master web technolgies and imporve skills that will enable me contribute meaningfully to diverse project teams within my field.",
  ],
};

const hero = {
  imgUrl,
  heading: "Hi, I'm Elikem Dogbey",
  role: "Frontend Developer",
  decription: "",
  email: "edobgey64@gmail.com",
  CV: CVPath,
};

const projects = [
  {
    title: "Furnish app",
    description:
      "Furnish App is a simple, responsive web app for purchasing furniture. It offers a user-friendly interface with a range of furniture items, smooth navigation, and an aesthetically pleasing layout. Built with React, it efficiently handles dynamic content and user interactions for a seamless shopping experience.",
    href: "https://github.com/elikandid/furnish-app",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Parlour",
    description:
      "Parlour is a self-care app designed to help users find inner calm. It offers relaxation techniques, personalized routines, and soothing resources. With React powering dynamic content, Parlour aims to guide users towards mindfulness and tranquility through a calming and interactive experience.",
    href: "https://elikandid.github.io/Parlour/",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    span: "2024 — Present",
  },
  {
    title: "My personal website",
    description:
      " This project is a personal website that showcases your portfolio, skills, and projects. It features a clean, modern design and smooth navigation to highlight your work and achievements. Built with React for dynamic content management, the site serves as an online hub to display your expertise in web development.",
    href: "/",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    span: "2024 — Present",
  },
];

const socials = [
  { name: "GitHub", href: "https://github.com/elikandid", icon: SiGithub },
  {
    name: "LInkedin",
    href: "https://linkedin.com/in/elikemdogbey",
    icon: SiLinkedin,
  },
];
export { about, hero, projects, navLinks, socials };
