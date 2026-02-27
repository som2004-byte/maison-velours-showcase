import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  const baseClass = "mv-container";
  const resolvedClassName = className
    ? `${baseClass} ${className}`
    : baseClass;

  return <div className={resolvedClassName}>{children}</div>;
}
