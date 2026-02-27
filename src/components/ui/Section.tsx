import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  const baseClass = "mv-section";
  const resolvedClassName = className
    ? `${baseClass} ${className}`
    : baseClass;

  return <section className={resolvedClassName}>{children}</section>;
}
