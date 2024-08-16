import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import imgUrl from "./assets/profile.jpg";

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
  CV: "",
};

const projects = [
  {
    title: "Furnish app",
    description: "  A simple web app for purchasing furnichures",
    href: "https://github.com/elikandid/furnish-app",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Project 2",
    description:
      "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ipsam recusandae placeat quidem nisi facilis necessitatibus obcaecati est illo sint?",
    href: "/",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    span: "2024 — Present",
  },
  {
    title: "Project 3",
    description:
      "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ipsam recusandae placeat quidem nisi facilis necessitatibus obcaecati est illo sint?",
    href: "/",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    span: "2024 — Present",
  },
  {
    title: "Project 4",
    description:
      "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ipsam recusandae placeat quidem nisi facilis necessitatibus obcaecati est illo sint?",
    href: "/",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    span: "2024 — Present",
  },
];

const socials = [
  { name: "GitHub", href: "https://github.com/elikandid", icon: SiGithub },
  { name: "LInkedin", href: "linkedin.com/in/elikemdogbey", icon: SiLinkedin },
];
export { about, hero, projects, navLinks, socials };
