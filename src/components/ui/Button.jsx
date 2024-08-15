import React from "react";

const Button = ({ children, className, variant, size }) => {
  return (
    <button
      className={` ${className} ${
        variant === "primary" && "bg-blue-600 text-white"
      } ${
        variant === "secondary" && "bg-white text-black border border-black/5"
      }   ${size === "md" && "px-4 py-2 rounded-md"}  ${
        size === "sm" && "px-2 py-1 rounded-sm"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
