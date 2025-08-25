import Container from "@/components/ui/container";
import Separator from "@/components/ui/separator";

export const metadata = {
  title: "Custom AI Chatbot",
  description: "Personalized assistant demoed for accessibility and rapid knowledge lookup.",
};

export default function CustomChatbotPage() {
  return (
    <section className="section">
      <Container>
        <h2 style={{ marginBottom: 8 }}>Custom AI Chatbot</h2>
        <p style={{ color: "var(--muted)", marginTop: 0 }}>
          Lightweight retrieval and prompt templates tailored to user needs.
        </p>
        <Separator />
        <div className="prose">
          <p>
            A small RAG prototype for fast answers on a constrained corpus. Focus on latency, guardrails, and UX.
          </p>
          <ul>
            <li>Stack: Node/Python, vector store, serverless endpoint</li>
            <li>Topics: retrieval, memory, safety, evaluation</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}