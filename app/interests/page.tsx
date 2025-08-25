// filepath: /Users/zhenweiyap/Documents/Github/Zhen-Website/Zhen-Website/app/interests/page.tsx
import Container from "@/app/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import Separator from "@/app/components/ui/separator";

export default function InterestsPage() {
  return (
    <section className="section">
      <Container>
        <h2 style={{ marginBottom: 8 }}>Interests</h2>
        <p style={{ color: "var(--muted)", marginTop: 0 }}>Areas I’m exploring and learning from.</p>
        <Separator />
        <div className="grid grid-2">
          <Card>
            <CardHeader><CardTitle>Robotics & AI</CardTitle></CardHeader>
            <CardContent>
              <p>Perception, control, reinforcement learning, multimodal agents, and Sim2Real.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Media & Ideas</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>How to Take Over the World (podcast)</li>
                <li>Acquired (podcast)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}