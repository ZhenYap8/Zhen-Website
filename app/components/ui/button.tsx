// filepath: /Users/zhenweiyap/Documents/Github/Zhen-Website/Zhen-Website/app/components/ui/button.tsx
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "secondary";
  children?: React.ReactNode;
  className?: string;
}

export default function Button({ variant = "default", className, children, ...props }: ButtonProps) {
  const cls = ["btn", variant === "ghost" && "btn--ghost", variant === "secondary" && "btn--secondary", className]
    .filter(Boolean).join(" ");
  return <button className={cls} {...props}>{children}</button>;
}