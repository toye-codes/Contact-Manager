import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={`bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 flex items-center justify-center ${className}`}>
      {children}{" "}
    </button>
  );
};

export default Button;
