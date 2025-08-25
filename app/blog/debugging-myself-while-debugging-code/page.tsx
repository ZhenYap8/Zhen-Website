import Container from "@/components/ui/container";
import Separator from "@/components/ui/separator";
import { promises as fs } from "fs";
import path from "path";
import { marked } from "marked";

export const runtime = "nodejs";

export const metadata = {
  title: "Debugging Myself While Debugging Code",
  description: "On the emotional marathon of building this site and fighting errors.",
  twitter: { card: "summary" },
};

export default async function DebuggingMyselfPost() {
  const mdPath = path.join(process.cwd(), "content", "blog", "debugging-myself-while-debugging-code.md");
  let html = "";
  try {
    const src = await fs.readFile(mdPath, "utf8");
    html = marked.parse(src) as string;
  } catch {
    html = "<p>Note not found. Add content/blog/debugging-myself-while-debugging-code.md</p>";
  }

  const formattedDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="section">
      <Container>
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
        <Separator />
        <p><em>Last updated: {formattedDate}</em></p>
      </Container>
    </section>
  );
}