// filepath: /Users/zhenweiyap/Documents/Github/Zhen-Website/Zhen-Website/app/background/page.tsx
import Container from "@/app/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import Badge from "@/app/components/ui/badge";
import Separator from "@/app/components/ui/separator";

export default function BackgroundPage() {
  return (
    <section className="section">
      <Container>
        <h2 style={{ marginBottom: 8 }}>Background</h2>
        <p style={{ color: "var(--muted)", marginTop: 0 }}></p>
        <Separator />

        <div className="grid grid-2">
          <Card>
            <CardHeader><CardTitle>Education</CardTitle></CardHeader>
            <CardContent>
              <div style={{ display: "grid", gap: 12 }}>
                <div>
                  <strong>University College London (UCL)</strong> — BSc, Chemistry
                  <div style={{ color: "var(--muted)" }}>2022–2025</div>
                </div>
                <div>
                  <strong>Queen Mary University of London (QMUL)</strong> — MSc, Robotics & AI
                  <div style={{ color: "var(--muted)" }}>2025–2026</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}