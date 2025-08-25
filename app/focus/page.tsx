import Container from "@/app/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import Separator from "@/app/components/ui/separator";

export default function FocusPage() {
  return (
    <section className="section">
      <Container>
        <h2 style={{ marginBottom: 8 }}>Focus</h2>
        <p style={{ color: "var(--muted)", marginTop: 0 }}>
          What I’m building to align with embodied AI, robotics learning, and scientific intelligence.
        </p>
        <Separator />
        <div className="grid grid-2">
          <Card>
            <CardHeader><CardTitle>Reinforcement Learning & Control</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Policy gradients, value-based RL, world models</li>
                <li>Planning and model‑based control (MPC)</li>
                <li>Isaac Gym / MuJoCo environments</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Perception & Multimodal</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Vision + language + proprioception fusion</li>
                <li>Visual servoing, depth fusion, tactile sensing</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Sim2Real & Embodiment</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Domain randomization & transfer</li>
                <li>Calibration and real‑world evaluation</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Research Practice</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Reproducing landmark papers (DreamerV3, Gato, Gemini)</li>
                <li>Clean repos with baselines and ablations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}