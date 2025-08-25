// filepath: /Users/zhenweiyap/Documents/Github/Zhen-Website/Zhen-Website/app/deepmind-2026/page.tsx
import Container from "@/app/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import Separator from "@/app/components/ui/separator";

export default function RoadmapPage() {
  return (
    <section className="section">
      <Container>
        <h2 style={{ marginBottom: 8 }}>Roadmap — DeepMind 2026</h2>
        <p style={{ color: "var(--muted)", marginTop: 0 }}>
          Positioning as an MSc Robotics & AI candidate who fuses research‑calibre AI with robotic embodiment and scientific insight.
        </p>
        <Separator />

        <div className="grid grid-2">
          <Card>
            <CardHeader><CardTitle>Strategic Focus Areas</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Embodied AI (vision + language + action)</li>
                <li>AI for Science (e.g., AlphaFold, weather, materials)</li>
                <li>Reinforcement Learning & Planning</li>
                <li>Multimodal AI (fusion of vision, language, proprioception)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Pre‑Semester (now–Sep 2025)</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Master PyTorch + NumPy</li>
                <li>Finish “Modern Robotics” (SE(3), control)</li>
                <li>Mini‑project: chemistry × robotics (e.g., Sim2Real pipetting agent)</li>
                <li>Read: DreamerV3, Gemini, AlphaFold, Gato</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Semester 1 — Foundations & Visibility</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Modules: Perception & Control, RL, CV/ML</li>
                <li>Understand PG, value‑based RL, world models, planning</li>
                <li>Project: embodied RL + visual servoing (Isaac Gym/MuJoCo)</li>
                <li>Experiment with SE(3) transformers / graph planners</li>
                <li>Start blog: “AI + Robotics for Science: Experiments by Zhen Wei Yap”</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Semester 2 — Research Depth</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Thesis aligned with DeepMind themes:
                  Sim2Real multimodal manipulation; lab robotics for discovery; RL with tactile feedback</li>
                <li>Co‑supervise with Chemistry + AI or robotics faculty</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Research Contributions</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Submit to a workshop (NeurIPS/ICRA/RSS/CoRL)</li>
                <li>Improve open‑source repos (Acme, dm‑control, OpenFold)</li>
                <li>Share results professionally to relevant researchers</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Skill Stack — by June 2026</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>AI/ML: PyTorch, JAX, Acme, world models, transformers</li>
                <li>Robotics: ROS2, Isaac Gym, MuJoCo, Sim2Real</li>
                <li>Control: MPC, PID, trajectory optimization</li>
                <li>Geometry: Lie groups, SE(3), quaternions</li>
                <li>Perception: depth + vision fusion, tactile, multimodal</li>
                <li>Science + AI: RDKit, structure‑property prediction</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Differentiators DeepMind Notices</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Embodiment + scientific insight</li>
                <li>Rare domain fluency shown via blog and projects</li>
                <li>Open‑source profile aligned with DM ecosystems</li>
                <li>Mission alignment demonstrated across portfolio</li>
                <li>Workshop poster or thesis‑derived artifact</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Application Strategy (Late 2026)</CardTitle></CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Apply: Research Engineer – Robotics, AI Resident – Science</li>
                <li>CV shows multimodal agents, Sim2Real, scientific AI</li>
                <li>Depth in PyTorch/JAX, control, embodied environments</li>
                <li>Highlight Chemistry cross‑domain fluency</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}