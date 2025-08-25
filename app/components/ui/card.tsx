// filepath: /Users/zhenweiyap/Documents/Github/Zhen-Website/Zhen-Website/app/components/ui/card.tsx
import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> { children?: React.ReactNode; }

export function Card({ className, children, ...props }: CardProps) {
  return <div className={["card", className].filter(Boolean).join(" ")} {...props}>{children}</div>;
}

export function CardHeader({ children }: { children?: React.ReactNode }) {
  return <div style={{ marginBottom: 8 }}>{children}</div>;
}
export function CardTitle({ children }: { children?: React.ReactNode }) {
  return <h3>{children}</h3>;
}
export function CardContent({ children }: { children?: React.ReactNode }) {
  return <div>{children}</div>;
}