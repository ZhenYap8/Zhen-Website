import Container from "@/components/ui/container";
import Separator from "@/components/ui/separator";

export const metadata = {
  title: "AI Investment Analysis Tool",
  description: "FastAPI platform to scrape companies and generate AI‑based research insights.",
};

export default function InvestmentToolPage() {
  return (
    <section className="section">
      <Container>
        <h2 style={{ marginBottom: 8 }}>AI Investment Analysis Tool</h2>
        <p style={{ color: "var(--muted)", marginTop: 0 }}>
          Scraping, enrichment, and LLM‑assisted summaries for research workflows.
        </p>
        <Separator />
        <div className="prose">
          <p>
            A pipeline that ingests filings and news, normalizes data, and produces concise reports.
            Emphasis on source traceability, caching, and reproducible prompts.
          </p>
          <ul>
            <li>Stack: FastAPI, Python, Postgres/SQLite, worker queue</li>
            <li>Topics: retrieval, prompt engineering, evaluation</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}