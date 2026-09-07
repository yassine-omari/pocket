import React from "react";

type DivProps = {
  className?: string;
  children: React.ReactNode;
};
const DivClasses = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ";

const Div = ({ children, className }: DivProps) => {
  return <div className={`${className} ${DivClasses}`}>{children}</div>;
};

export default Div;
