import Container from "@/app/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import Separator from "@/app/components/ui/separator";

export default function EdgePage() {
  return (
    <section className="section">
      <Container>
        <h2 style={{ marginBottom: 8 }}>Edge</h2>
        <p style={{ color: "var(--muted)", marginTop: 0 }}>
          Chemistry BSc + Robotics & AI MSc → embodied intelligence for scientific discovery.
        </p>
        <Separator />
        <div className="grid grid-2">
          <Card>
            <CardHeader><CardTitle>Embodied AI + Scientific Insight</CardTitle></CardHeader>
            <CardContent>
              <p>Bridge robotics learning with domain knowledge to build agents that operate in labs and real systems.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Strategic Differentiators</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Chemistry + robotics fluency</li>
                <li>Open‑source contributions aligned with DM (dm‑control, Acme)</li>
                <li>Clear mission alignment and research‑style outputs</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}