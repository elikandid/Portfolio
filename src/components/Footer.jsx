import React from "react";
import { footer } from "../portfolio";

const Footer = () => {
  return (
    <div className="w-full h-[10vh] flex items-center justify-center">
      <ul className="flex gap-4 text-neutral-500">
        {footer.map((link, index) => (
          <li key={index}>
            <a href={link.href}>
              {" "}
              <span className="sr-only">{link.name}</span>
              <link.icon className="hover:text-gray-900" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
