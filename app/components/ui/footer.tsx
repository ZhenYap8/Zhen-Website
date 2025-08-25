// filepath: /Users/zhenweiyap/Documents/Github/Zhen-Website/Zhen-Website/app/components/ui/footer.tsx
import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "var(--muted)" }}>© {new Date().getFullYear()} Zhen Wei. All rights reserved.</span>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            <a href="https://github.com/ZhenYap8" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/yapzhenwei/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}