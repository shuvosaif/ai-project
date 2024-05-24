import React from "react";

const SectionHeading = ({children,className}) => {
  return <h1 className={`font-normal text-[48px] font-instrument  ${className}`}>{children}</h1>;
};

export default SectionHeading;
