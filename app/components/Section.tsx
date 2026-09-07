import React from "react";
type bg = "gray" | "white";

type SectionProps = {
  bg?: bg;
  children: React.ReactNode;
  className?: string;
};

const SectionClasses = "py-20 sm:py-32";

const Section = ({ bg = "white", children, className }: SectionProps) => {
  return (
    <section
      className={` ${className} ${bg === "gray" ? "bg-foreground" : "bg-background"} ${SectionClasses} `}
    >
      {children}
    </section>
  );
};

export default Section;
