import React from "react";

const SubSectionHeader = ({ children, className }) => {
  return (
    <h2
      className={`text-3xl lg:text-[64px] leading-relaxed font-instrument text-blue-500 ${className}`}
    >
      {children}
    </h2>
  );
};

export default SubSectionHeader;
