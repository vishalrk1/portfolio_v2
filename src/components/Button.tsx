import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "text-neutral-300 flex items-center justify-center bg-neutral-900 rounded-full hover:bg-neutral-800 hover:text-white transition-colors duration-300",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
