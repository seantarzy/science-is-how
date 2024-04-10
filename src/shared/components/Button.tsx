import React from "react";
import AtomLogo from "../../assets/atom-logo.png";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  hideIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, hideIcon=false,...props }) => {
  return (
    <button {...props}>
      <div
        className="flex gap-2 justify-center items-center px-4 py-2 border-blue-500 border-2 rounded-lg text-black hover:bg-blue-600 transition-colors
      "
      >
        {!hideIcon && <img src={AtomLogo} alt="Atom logo" className="h-12 w-12" />}
        {children}
      </div>
    </button>
  );
};

export default Button;
