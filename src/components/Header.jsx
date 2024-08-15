import React from "react";
import { header } from "../portfolio";
import Container from "./Container";

const Header = () => {
  return (
    <header className=" h-[10vh] border-b w-full border-black/5 bg-transparent fixed top-0 left-0 backdrop-blur-sm ">
      <Container className={` h-full w-full max-w-[1200px]`}>
        <ul className=" flex  items-center h-full space-x-10 justify-end ">
          {header.nav.map((link, index) => (
            <li key={index}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
};

export default Header;
