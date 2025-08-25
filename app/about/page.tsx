import Container from "@/components/ui/container";
import Separator from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <section className="about">
      <Container>
        <div className="about__container">
          <header className="about__header">
            <h2 className="about__title">About</h2>
            <p className="about__lead">
              Robotics & AI MSc candidate turning research‑level AI into embodied systems that expand human potential.
            </p>
          </header>

          <div className="about__separator" />

          <section className="about__section">
            <div className="prose">
              <h3>Profile</h3>
              <p>My fascination with systems started early with GCSE Product Design Systems, where I first explored how individual components 
                fit together to create functional, human-centred solutions. That early exposure to design thinking and integration sparked a 
                habit of analysing problems not just in isolation, but as part of larger, interconnected systems.
              </p> 
              <p>   
                At UCL, I strengthened this foundation through Chemistry, where I was trained to analyse complex molecular systems, extract 
                data-driven insights, and approach problems with scientific rigour. This experience refined my analytical mindset, research 
                skills, and appreciation for the constant dialogue between theory and experiment that defines the sciences.
              </p>   
              <p>
                Now, as an MSc candidate in Robotics & AI at Queen Mary University of London, I draw on a dual specialisation in the sciences 
                and engineering—bringing the rigour of Chemistry together with the technical depth of Robotics & AI to treat robotics as a 
                discipline where scientific thinking meets real-world embodiment.
              </p>
              <p>
                My work sits at the intersection of reinforcement learning, control, perception, and Sim2Real transfer.
                I’m especially motivated by the challenge of taking intelligence out of simulation and into embodied
                agents that interact with the messy, unpredictable physical world.
              </p>
            </div>
          </section>

          <section className="about__section">
            <div className="prose">
              <h3>Goals</h3>
              <ul>
                <li>Build embodied AI on UAVs, humanoids, assistive robots, and the next Baymax</li>
                <li>Develop RL/control pipelines in simulation (Isaac Gym, MuJoCo) and validate them on hardware</li>
                <li>Share progress through research‑style posts, blogs, and open‑source experiments</li>
              </ul>
            </div>
          </section>

          <section className="about__section">
            <div className="prose">
              <h3>Research & Technical Interests</h3>
              <ul>
                <li>Embodied agents and multimodal learning</li>
                <li>Reinforcement learning for control and locomotion</li>
                <li>Soft robotics for adaptive, compliant interaction</li>
                <li>Humanoid systems as platforms for general embodied intelligence</li>
              </ul>
            </div>
          </section>

          <section className="about__section">
            <div className="prose">
              <h3>Current Projects</h3>
              <ul>
                <li>AI Water Polo Simulation – designing a reinforcement learning environment to simulate gameplay, strategy, and decision-making in water polo</li>
                <li>AI Investment Analysis Tool – building a FastAPI platform that scrapes listed companies and generates AI-based insights for investment research</li>
                <li>AI Chatbot for My Mum – created for a university talk, this project demonstrated how conversational AI can be customized for personal use cases and accessibility</li>
                <li>Research blogging — documenting experiments and reflections in a format inspired by academic outputs</li>
              </ul>
            </div>
          </section>

          <section className="about__section">
            <div className="prose">
              <h3>Foundations</h3>
              <p>Before pivoting into Robotics & AI, I studied Chemistry at UCL (BSc, 2022–2025). That training gave me:</p>
              <ul>
                <li>A strong foundation in mathematics, data analysis, and computational modelling</li>
                <li>Experience with scientific research methods and systematic problem‑solving</li>
                <li>An interdisciplinary perspective — seeing connections between molecules, machines, and models</li>
              </ul>
            </div>
          </section>

          <section className="about__section">
            <div className="prose">
              <h3>Beyond the Lab</h3>
              <p>
                Outside of research, I enjoy creating content that makes science and technology more accessible. From Instagram
                reels to blog posts, I aim to share the reality of studying, building, and iterating through robotics projects.
              </p>
              <p>
                I also value teamwork and leadership, including service as President of UCL Water Polo, where I learned to build
                communities, motivate teams, and balance ambition with collaboration.
              </p>
            </div>
          </section>

          <section className="about__section">
            <div className="prose">
              <h3>Connect</h3>
              <p>
                I’m always open to conversations about robotics, AI, or interdisciplinary projects. Feel free to reach out for
                collaborations, discussions, or just to exchange ideas.
              </p>
            </div>
          </section>

          <Separator />
        </div>
      </Container>
    </section>
  );
}