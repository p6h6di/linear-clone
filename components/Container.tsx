import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-[120rem] mx-auto px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
