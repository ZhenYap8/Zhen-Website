import React from "react";

export default function Badge({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <span className={["badge", className].filter(Boolean).join(" ")}>{children}</span>;
}