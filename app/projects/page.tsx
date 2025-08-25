import Container from "@/components/ui/container";
import Separator from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
  title: "Projects",
  description: "Selected projects across RL, control, perception, and Sim2Real.",
};

export default function ProjectsPage() {
  return (
    <section className="section">
      <Container>
        <h2 style={{ marginBottom: 8 }}>Projects</h2>
        <p style={{ color: "var(--muted)", marginTop: 0 }}>
          Selected work spanning reinforcement learning, control, perception, and Sim2Real.
        </p>
        <Separator />

        <div className="grid grid-3">
          <Link href="/projects/ai-water-polo-simulation" className="card-link" aria-label="AI Water Polo Simulation">
            <div className="card card--clickable">
              <h3>AI Water Polo Simulation</h3>
              <p>RL environment to study gameplay strategy and decision‑making.</p>
              <div className="card__footer"><span className="card__meta">Focus: Simulation · RL</span></div>
            </div>
          </Link>

          <Link href="/projects/ai-investment-analysis-tool" className="card-link" aria-label="AI Investment Analysis Tool">
            <div className="card card--clickable">
              <h3>AI Investment Analysis Tool</h3>
              <p>FastAPI service that scrapes listed companies and produces insights.</p>
              <div className="card__footer"><span className="card__meta">Focus: Data · NLP</span></div>
            </div>
          </Link>

          <Link href="/projects/custom-ai-chatbot" className="card-link" aria-label="Custom AI Chatbot">
            <div className="card card--clickable">
              <h3>Custom AI Chatbot</h3>
              <p>Personalized assistant demoed in a university talk for accessibility.</p>
              <div className="card__footer"><span className="card__meta">Focus: LLMs</span></div>
            </div>
          </Link>

          <Link href="/projects/research-blogging" className="card-link" aria-label="Research Blogging">
            <div className="card card--clickable">
              <h3>Research Blogging</h3>
              <p>Documenting experiments and reflections in research‑style posts.</p>
              <div className="card__footer"><span className="card__meta">See: Blog</span></div>
            </div>
          </Link>
        </div>

        <Separator />
      </Container>
    </section>
  );
}