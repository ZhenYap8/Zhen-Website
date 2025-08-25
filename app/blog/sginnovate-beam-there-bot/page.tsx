import Container from "@/components/ui/container"; // changed
import Separator from "@/components/ui/separator"; // changed
import { promises as fs } from "fs";
import path from "path";
import { marked } from "marked";
import Image from "next/image";

export const runtime = "nodejs";

export const metadata = {
  title: "SGInnovate × NRP — Tech Talk: Beam There, Bot — Notes",
  description: "Reflections on embodied AI, robotics learning, and Singapore’s ecosystem.",
  openGraph: { images: ["/images/sginnovate-hero.jpg"] },
  twitter: { card: "summary_large_image", images: ["/images/sginnovate-hero.jpg"] },
};

export default async function SGInnovateNotesPage() {
  const mdPath = path.join(process.cwd(), "content", "blog", "sginnovate-beam-there-bot.md");
  let html = "";
  try {
    const src = await fs.readFile(mdPath, "utf8");
    html = marked.parse(src) as string;
  } catch {
    html = "<p>Note not found. Add content/blog/sginnovate-beam-there-bot.md</p>";
  }

  const formattedDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="section">
      <Container>
        {/* Float image to the right */}
        <figure className="post-hero post-hero--right">
          <Image
            src="/images/sginnovate-hero.jpg"
            alt='Zhen Wei Yap at SGInnovate × NRP “Beam There, Bot”'
            width={1600}
            height={1067}
            priority
            className="post-hero__img"
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption className="post-hero__caption">Zhen Wei Yap at the SGInnovate × NRP Event</figcaption>
        </figure>

        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
        <Separator />
        <p><em>Last updated: {formattedDate}</em></p>
      </Container>
    </section>
  );
}