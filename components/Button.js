import React from "react";

function Button({ text, dark, onClick, width = "w-fit" }) {
  return (
    <div
      onClick={onClick}
      className={`inline-block border-2 border-indigo-600 rounded-full px-6 py-2 cursor-pointer transition-colors duration-300 text-center ${
        dark
          ? "bg-indigo-600 text-white hover:bg-indigo-700"
          : "bg-white text-indigo-600 hover:bg-indigo-100"
      } 
      ${width}
      `}
    >
      <p className="text-md fugaz">{text}</p>
    </div>
  );
}

export default Button;
