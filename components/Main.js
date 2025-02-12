import React from "react";

const Main = ({ children }) => {
  return (
    <div className="w-full max-w-[1000px] mx-auto min-h-screen flex flex-col ">
      {children}
    </div>
  );
};

export default Main;
