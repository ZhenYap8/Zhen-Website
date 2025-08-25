// filepath: /Users/zhenweiyap/Documents/Github/Zhen-Website/Zhen-Website/app/components/ui/navbar.tsx
import React from "react";
import Link from "next/link";
import Container from "./container";

export default function Navbar() {
  return (
    <nav className="nav">
      <Container className="nav-inner">
        <Link href="/" style={{ fontWeight: 700 }}>Zhen</Link>
        <div style={{ display: "flex", gap: 10 }}>
            <Link href="/background">Background</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
        </div>
      </Container>
    </nav>
  );
}