import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import imgUrl from "./assets/profile.jpg";

const header = {
  nav: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Projects",
      path: "#projects",
    },
  ],
};

const hero = {
  imgUrl,
  heading: "Hi, I'm Elikem Dogbey",
  decription:
    "As a web developer trainee, I am committed to continually learning essential coding languages and tools necessary for career building. My goal is to master web technolgies and imporve skills that will enable me contribute meaningfully to diverse project teams within my field.",
  email: "edobgey64@gmail.com",
  CV: "",
};

const projects = [
  {
    title: "Project 1",
    description:
      "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ipsam recusandae placeat quidem nisi facilis necessitatibus obcaecati est illo sint?",
    href: "/",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Project 2",
    description:
      "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ipsam recusandae placeat quidem nisi facilis necessitatibus obcaecati est illo sint?",
    href: "/",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Project 3",
    description:
      "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ipsam recusandae placeat quidem nisi facilis necessitatibus obcaecati est illo sint?",
    href: "/",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Project 4",
    description:
      "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ipsam recusandae placeat quidem nisi facilis necessitatibus obcaecati est illo sint?",
    href: "/",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
];

const footer = [
  { name: "GitHub", href: "https://github.com/elikandid", icon: SiGithub },
  { name: "LInkedin", href: "linkedin.com/in/elikemdogbey", icon: SiLinkedin },
];
export { header, hero, projects, footer };
