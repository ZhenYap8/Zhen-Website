import Container from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Separator from "@/components/ui/separator";
import Link from "next/link";

export default function OutputPage() {
  return (
    <section className="section">
      <Container>
        <h2 style={{ marginBottom: 8 }}>Output</h2>
        <p style={{ color: "var(--muted)", marginTop: 0 }}>
          Projects, writing, and thesis work on the path to DeepMind 2026.
        </p>
        <Separator />
        <div className="grid grid-2">
          <Card>
            <CardHeader><CardTitle>Projects</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>
                  <Link href="/projects/ai-investment-analysis-tool">
                    AI Investment Tool — research + engineering for market analysis
                  </Link>
                </li>
                <li>
                  <Link href="/projects/ai-water-polo-simulation">
                    AI Water Polo Simulation — RL agents in a custom game environment
                  </Link>
                </li>
                <li>
                    <Link href="/projects/custom-ai-chatbot">
                        Custom AI Chatbot — personalized assistant demoed in a university talk
                    </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Writing</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li><Link href="/blog/sginnovate-beam-there-bot">SGInnovate × NRP — “Beam There, Bot”</Link></li>
                <li><Link href="/blog/debugging-myself-while-debugging-code">Debugging Myself While Debugging Code</Link></li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>MSc Thesis</CardTitle></CardHeader>
            <CardContent>
              <p>Research‑intensive project aligned with embodied multimodal manipulation and Sim2Real.</p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}