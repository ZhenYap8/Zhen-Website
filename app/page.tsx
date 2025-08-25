// filepath: /Users/zhenweiyap/Documents/Github/Zhen-Website/Zhen-Website/app/page.tsx
import Container from "@/components/ui/container";
import Separator from "@/components/ui/separator";
import CardLink from "@/components/ui/card-link";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

function fmt(d: Date) {
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

async function uploaded(relMdPath: string) {
  try {
    const p = path.join(process.cwd(), "content", "blog", relMdPath);
    const st = await fs.stat(p);
    return fmt(st.mtime);
  } catch {
    return fmt(new Date());
  }
}

export default async function HomePage() {
  const sgDate = await uploaded("sginnovate-beam-there-bot.md");
  const debugDate = await uploaded("debugging-myself-while-debugging-code.md");

  return (
    <>
      <section className="hero">
        <Container>
          <h1>Zhen Wei Yap</h1>
          <p>Fusing research‑calibre AI with robotics embodiment and scientific insight.</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid grid-3">
            <CardLink href="/focus" title="Focus">
              <p>RL, control, multimodal perception, and Sim2Real for robotics.</p>
            </CardLink>

            <CardLink href="/edge" title="Edge">
              <p>Chemistry background + robotics MSc → rare embodied‑science fluency.</p>
            </CardLink>

            <CardLink href="/output" title="Output">
              <p>Projects, blog experiments, and a research‑style MSc thesis.</p>
            </CardLink>
          </div>
          <Separator />
        </Container>
      </section>

      {/* Latest blog section */}
      <section className="section">
        <Container>
          <h2 style={{ marginBottom: 8 }}>Latest Blogs</h2>
          <p style={{ color: "var(--muted)", marginTop: 0 }}>
            A recent collection of my thoughts, projects, and lessons learned along the way.
          </p>

          <div className="grid grid-2">
            <Link href="/blog/sginnovate-beam-there-bot" className="card-link">
              <div className="card card--clickable">
                <h3>SGInnovate × NRP: “Beam There, Bot”</h3>
                <p>Takeaways on embodied AI, robotics learning, and the Singapore ecosystem.</p>
                <div className="card__footer">
                  <span className="card__meta">Uploaded: {sgDate}</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/debugging-myself-while-debugging-code" className="card-link">
              <div className="card card--clickable">
                <h3>Debugging Myself While Debugging Code</h3>
                <p>On the emotional marathon of building this site and fighting errors.</p>
                <div className="card__footer">
                  <span className="card__meta">Uploaded: {debugDate}</span>
                </div>
              </div>
            </Link>
          </div>

          <Separator />
        </Container>
      </section>
    </>
  );
}