import React from "react";

const Button = ({ children, className, variant, size }) => {
  return (
    <button
      className={` rounded-full ${className} ${
        variant === "primary" &&
        "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-sm hover:translate-y-[2px] transition-transform duration-200 ease-in"
      } ${
        variant === "secondary" &&
        "bg-white text-black border border-black/5 hover:bg-black/5 hover:shadow-sm hover:translate-y-[2px] transition-transform duration-200 ease-in"
      }   ${size === "md" && "px-4 py-2"}  ${size === "sm" && "px-2 py-1 "}`}
    >
      {children}
    </button>
  );
};

export default Button;
