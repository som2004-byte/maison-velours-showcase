import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export function Button({
  variant = "primary",
  className,
  ...rest
}: ButtonProps) {
  const baseClass = "mv-button";
  const variantClass =
    variant === "secondary"
      ? "mv-button--secondary"
      : "mv-button--primary";

  const resolvedClassName = [baseClass, variantClass, className]
    .filter(Boolean)
    .join(" ");

  return <button className={resolvedClassName} {...rest} />;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const baseClass = "mv-button";
  const variantClass =
    variant === "secondary"
      ? "mv-button--secondary"
      : "mv-button--primary";

  const resolvedClassName = [baseClass, variantClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={resolvedClassName}>
      {children}
    </Link>
  );
}
