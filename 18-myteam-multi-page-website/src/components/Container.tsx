import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-10/12 max-w-6xl lg:w-9/12 ${className}`.trim()}>
      {children}
    </div>
  );
}
