import React from "react";
import { hero, navLinks, socials } from "../portfolio";
import Container from "./Container";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="w-40 h-40 overflow-hidden rounded-full ">
          <img
            src={hero.imgUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          <a href="/">{hero.heading}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-800 sm:text-xl">
          {hero.role}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{hero.decription}</p>
        <div className="flex space-x-4 w-full">
          <Button variant={"primary"} size={"md"}>
            <a href={hero.email}> Reach out</a>
          </Button>
          <Button variant={"secondary"} size={"md"}>
            <a href={hero.CV}>Read CV</a>
          </Button>
        </div>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navLinks.map((item) => (
              <li>
                <a
                  className="group flex items-center py-3 active"
                  href={item.path}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-800 group-focus-visible:w-16 group-focus-visible:bg-slate-800 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-800 group-focus-visible:text-slate-800">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {socials.map((social) => (
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-slate-800"
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.name}
              title={social.name}
            >
              <span className="sr-only">{social.name}</span>
              <social.icon />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
