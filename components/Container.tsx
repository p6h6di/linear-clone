import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[120rem] mx-auto">{children}</div>;
};

export default Container;
