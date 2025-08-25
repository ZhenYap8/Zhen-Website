// filepath: /Users/zhenweiyap/Documents/Github/Zhen-Website/Zhen-Website/app/components/ui/separator.tsx
import React from "react";

export default function Separator({ className }: { className?: string }) {
  return <div className={["separator", className].filter(Boolean).join(" ")} />;
}