import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export default function CardLink({
  href,
  title,
  children,
  className,
  ariaLabel,
}: {
  href: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <Link href={href} className="card-link" aria-label={ariaLabel ?? title}>
      <Card className={["card--clickable", className].filter(Boolean).join(" ")}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </Link>
  );
}