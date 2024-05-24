import React from "react";

const MainSection = ({ children, className }) => {
  return <p className={`p-10 bg-amber-50 ${className}`}>{children}</p>;
};

export default MainSection;
