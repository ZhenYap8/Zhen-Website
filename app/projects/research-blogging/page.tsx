import Container from "@/components/ui/container";
import Separator from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
  title: "Research Blogging",
  description: "Documenting experiments and reflections in research‑style posts.",
};

export default function ResearchBloggingPage() {
  return (
    <section className="section">
      <Container>
        <h2 style={{ marginBottom: 8 }}>Research Blogging</h2>
        <p style={{ color: "var(--muted)", marginTop: 0 }}>
          Writing to clarify thinking and share results with the community.
        </p>
        <Separator />
        <div className="prose">
          <p>
            Posts mix experiment logs, ablations, and lessons learned. See recent entries:
          </p>
          <ul>
            <li><Link href="/blog/sginnovate-beam-there-bot">SGInnovate × NRP — Beam There, Bot</Link></li>
            <li><Link href="/blog/debugging-myself-while-debugging-code">Debugging Myself While Debugging Code</Link></li>
          </ul>
        </div>
      </Container>
    </section>
  );
}