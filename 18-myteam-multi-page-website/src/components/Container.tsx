import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-11/12 max-w-6xl">{children}</div>;
}
