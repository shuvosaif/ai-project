import React from "react";

const Paragraph = ({ children, className }) => {
  return <p className={`font-inter text-[20px] ${className}`}>{children}</p>;
};

export default Paragraph;
