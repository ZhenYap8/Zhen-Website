import Container from "@/components/ui/container";
import Separator from "@/components/ui/separator";

export const metadata = {
  title: "AI Water Polo Simulation",
  description: "Designing a reinforcement learning environment for gameplay strategy and decision‑making.",
};

export default function WaterPoloSimPage() {
  return (
    <section className="section">
      <Container>
        <h2 style={{ marginBottom: 8 }}>AI Water Polo Simulation</h2>
        <p style={{ color: "var(--muted)", marginTop: 0 }}>
          RL environment to study gameplay strategy and decision‑making.
        </p>
        <Separator />
        <div className="prose">
          <p>
            A custom environment to explore team coordination, policy learning, and evaluation for aquatic sports.
            Focus areas include observation design, sparse rewards, curriculum learning, and sim realism.
          </p>
          <ul>
            <li>Stack: Python, PyTorch, Gym‑style API, MuJoCo/Isaac for physics</li>
            <li>Topics: MARL, credit assignment, curriculum, evaluation</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}