import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-md transition-transform active:scale-95 ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;