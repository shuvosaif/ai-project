import React from "react";

const SubSectionHeader = ({ children, className }) => {
  return (
    <h2 className={`text-[32px] font-instrument text-blue-500 ${className}`}>
      {children}
    </h2>
  );
};

export default SubSectionHeader;
