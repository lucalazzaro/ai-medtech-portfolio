import Image from "next/image";

const LINKS = {
  email: "mailto:lazzaro_luca@hotmail.com",
  linkedin: "https://www.linkedin.com/in/luca-lazzaro-54888787",
  github: "https://github.com/lucalazzaro",
  calendly: "https://calendly.com/lazzaro_luca", 
};

const sections = [
  { id: "intro", title: "Overview" },
  { id: "background", title: "Background" },
  { id: "philosophy", title: "AI Philosophy" },
  { id: "skills", title: "Technical Stack & Skills" },
  { id: "projects", title: "Selected Projects" },
  { id: "contact", title: "Contact" },
];

type Project = {
  title: string;
  subtitle: string;
  context: string;
  mentalModel: {
    input: string[];
    transformation: string[];
    output: string[];
  };
  technicalChoice: {
    choice: string;
    why: string;
  };
  deliberateNonChoice: string;
  snapshot: {
    hook: string;
    problem: string;
    approach: string;
    techStack: string;
    impact: string;
  };
  status: string;
};

const projects: Project[] = [
  {
    title: "Dental Workflow Bottleneck Analyzer",
    subtitle: "AI-assisted operational intelligence",
    context:
      "Dental clinics often run on intuition when it comes to delays, cancellations, and chair utilization. This project turns simulated operational data (calendar, treatments, durations, cancellations) into decision-grade signals: where time leaks happen, why they happen, and what to fix first.",
    mentalModel: {
      input: [
        "Simulated schedule data (appointments, durations, provider)",
        "Treatment types + expected time ranges",
        "Cancellation / no-show events",
      ],
      transformation: [
        "Cleaning + normalization (time windows, categories)",
        "Operational metrics (delays, utilization, variability)",
        "Explainable heuristics (rule-based + stats)",
      ],
      output: [
        "Bottleneck map (where the flow breaks)",
        "KPIs dashboard (utilization, delay, cancellation patterns)",
        "Actionable suggestions (what to fix first, and why)",
      ],
    },
    technicalChoice: {
      choice: "Rule-based + statistical signals (instead of heavy ML).",
      why: "For workflow optimization, interpretability and iteration speed beat model complexity. The goal is operational clarity, not prediction theater.",
    },
    deliberateNonChoice:
      "I intentionally did NOT use deep learning or “predict the future” models—this is about operational leverage, not artificial sophistication.",
    snapshot: {
      hook:
        "Operational intelligence from dental clinic scheduling and treatment-flow data.",
      problem:
        "Clinics don’t know where they lose time, revenue, and patients—everything is based on gut feeling.",
      approach:
        "Compute delay/utilization/cancellation signals and generate explainable insights (stats + heuristics) to prioritize workflow fixes.",
      techStack: "Python, Pandas, Streamlit (light dashboard), minimal ML",
      impact:
        "Bottleneck identification and decision-ready metrics for scheduling and operations (coming soon).",
    },
    status: "Coming soon",
  },
  {
    title: "Clinical Decision Support — Rule + ML Hybrid",
    subtitle: "Pragmatic AI, not magic",
    context:
      "In Med-Tech, pure rules are rigid and pure ML is often opaque. This project demonstrates a hybrid decision-support approach: explicit clinical logic provides guardrails, and a lightweight model improves prioritization—always with a human-readable explanation.",
    mentalModel: {
      input: [
        "Simulated patient attributes (age, smoking, visit frequency)",
        "Treatment type and simple history markers",
        "Basic risk indicators (rule-friendly features)",
      ],
      transformation: [
        "Layer 1: explicit clinical rules (guardrails + priorities)",
        "Layer 2: lightweight ML (logistic regression / tree)",
        "Explanation layer (feature importance / SHAP-lite)",
      ],
      output: [
        "Risk / priority score",
        "Human-readable rationale (what drove the result)",
        "Suggested next action category (follow-up / check / escalate)",
      ],
    },
    technicalChoice: {
      choice: "Lightweight model + explanation over black-box accuracy.",
      why: "Clinical decision support lives or dies on trust. A slightly less “accurate” but explainable system is more deployable than an opaque one.",
    },
    deliberateNonChoice:
      "I intentionally did NOT optimize for maximum benchmark accuracy—this is designed for interpretability and safe clinical integration.",
    snapshot: {
      hook:
        "A hybrid clinical decision-support system built for trust and adoption.",
      problem:
        "Rules-only systems are rigid; ML-only systems can be opaque. Clinicians need both guardrails and evidence-based scoring.",
      approach:
        "Explicit rules provide guardrails; a lightweight model refines prioritization; explanations make the output usable and trustworthy.",
      techStack: "Scikit-learn, SHAP (or simple feature importance), minimal UI",
      impact:
        "Transparent prioritization logic suitable for real clinical workflows (coming soon).",
    },
    status: "Coming soon",
  },
  {
    title: "AI-Augmented Intake & Triage System",
    subtitle: "Process intelligence, not chatbot hype",
    context:
      "Most clinical intake arrives as messy, inconsistent text. This project turns unstructured patient descriptions into validated structured data—designed to reduce admin friction and improve downstream clinical workflow quality.",
    mentalModel: {
      input: [
        "Simulated free-text patient requests / symptoms",
        "Basic metadata (channel, date, clinic context)",
        "Optional constraints (required fields for downstream systems)",
      ],
      transformation: [
        "LLM extraction to structured JSON (schema-first prompting)",
        "Validation + normalization (types, ranges, required fields)",
        "Confidence / fallback logic (when data is incomplete)",
      ],
      output: [
        "Clean structured intake record (ready for systems)",
        "Triage tags (category / urgency / follow-up needs)",
        "Audit trail: what was inferred vs explicitly stated",
      ],
    },
    technicalChoice: {
      choice: "Schema-first extraction with strict validation.",
      why: "The point is reliable structure, not conversation. Validations prevent garbage data from flowing downstream and make integration realistic.",
    },
    deliberateNonChoice:
      "I intentionally did NOT build a ‘chatbot’. The focus is data quality and workflow integration, not fancy dialogue.",
    snapshot: {
      hook: "Turn chaotic patient intake text into validated structured data.",
      problem:
        "Intake information often arrives incomplete/incoherent, creating downstream friction and inconsistent triage.",
      approach:
        "LLM extracts JSON following a strict schema; backend validation normalizes fields; outputs are integration-ready.",
      techStack:
        "LLM API, prompt engineering, backend validations (FastAPI optional)",
      impact:
        "Higher-quality intake data and faster triage with fewer manual back-and-forth steps (coming soon).",
    },
    status: "Coming soon",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">
      {children}
    </span>
  );
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
      <p className="text-xs uppercase tracking-widest text-white/40">{label}</p>
      <p className="mt-2 text-sm text-white/80 leading-relaxed">{value}</p>
    </div>
  );
}

function SectionCard({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="
        group rounded-2xl border border-white/10 bg-white/5
        p-6 md:p-8
        transition-all duration-200
        hover:-translate-y-1 hover:bg-white/10 hover:border-white/20
      "
    >
      <div className="flex items-start justify-between gap-6">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          {title}
        </h2>

        <span
          className="
            text-xs uppercase tracking-widest text-white/50
            border border-white/10 rounded-full px-3 py-1
            transition
            group-hover:text-white/70 group-hover:border-white/20
          "
        >
          Section
        </span>
      </div>

      <div className="mt-4 space-y-4 text-white/80 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-6 transition hover:bg-white/5 hover:border-white/20">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-lg font-semibold">{project.title}</p>
          <p className="mt-1 text-sm text-white/60">{project.subtitle}</p>
        </div>

        <span className="text-xs uppercase tracking-widest text-white/50 border border-white/10 rounded-full px-3 py-1">
          {project.status}
        </span>
      </div>

      <div className="mt-5 space-y-5">
        <p className="text-white/75">{project.context}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoBox label="Input" value={project.mentalModel.input.join(" • ")} />
          <InfoBox
            label="Transformation"
            value={project.mentalModel.transformation.join(" • ")}
          />
          <InfoBox
            label="Output"
            value={project.mentalModel.output.join(" • ")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoBox
            label="Technical choice"
            value={`${project.technicalChoice.choice} ${project.technicalChoice.why}`}
          />
          <InfoBox
            label="What I deliberately didn’t do"
            value={project.deliberateNonChoice}
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
          <p className="text-xs uppercase tracking-widest text-white/40">
            Snapshot
          </p>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoBox label="Hook" value={project.snapshot.hook} />
            <InfoBox label="Problem" value={project.snapshot.problem} />
            <InfoBox label="Approach" value={project.snapshot.approach} />
            <InfoBox label="Tech Stack" value={project.snapshot.techStack} />
          </div>

          <div className="mt-4">
            <InfoBox label="Impact" value={project.snapshot.impact} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10">
        {/* SIDEBAR */}
        <aside className="md:sticky md:top-10 h-fit">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white/60">Luca</p>
                <p className="text-lg font-semibold">AI Engineer, Med-Tech</p>
              </div>

              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                <Image
                  src="/profile.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <nav className="mt-6">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-3">
                Menu
              </p>

              <ul className="space-y-1">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="
                        block rounded-xl px-3 py-2
                        text-white/70 hover:text-white
                        hover:bg-white/10
                        transition
                      "
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6 pt-6 border-t border-white/10">
              <a
                href="#contact"
                className="
                  inline-flex w-full items-center justify-center
                  rounded-xl bg-white text-black font-medium
                  px-4 py-2
                  hover:bg-white/90 transition
                "
              >
                Get in touch
              </a>
            </div>
          </div>
        </aside>

        {/* CONTENT */}
        <div className="space-y-6">
          {/* HERO */}
          <section id="intro" className="space-y-6">
            <div className="flex items-start justify-between gap-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Shaping the future of Med-Tech Dental Intelligence.
                </h1>

                <p className="text-lg md:text-xl text-white/70 max-w-2xl">
                  I combine clinical insight and real-world systems thinking with practical AI engineering
                  to build tools that improve patient outcomes and elevate dental care delivery.
                  <br />
                  <span className="text-white/60">
                    My goal: design AI-driven systems focused on workflow intelligence, clinical decision support,
                    and production-ready data-to-impact pipelines.
                  </span>
                </p>
              </div>

              <div className="hidden lg:block">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden border border-white/20">
                  <Image
                    src="/profile.jpg"
                    alt="Profile photo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Pill>Workflow Intelligence</Pill>
              <Pill>Clinical Decision Support</Pill>
              <Pill>Data Quality & Validation</Pill>
              <Pill>Deployable AI Systems</Pill>
            </div>
          </section>

          <SectionCard id="background" title="Background">
            <p>
              I come from a multidisciplinary background spanning customer success,
              clinical support, and operational roles in international tech environments.
              Working closely with healthcare professionals exposed me to the real friction
              points of clinical workflows.
            </p>
            <p>
              My transition to AI started with hands-on problem solving: prototyping predictive analytics
              for clinical decision support and exploring how to improve operational efficiency.
              What began as curiosity became a mission: harness AI to build scalable Med-Tech solutions.
            </p>
          </SectionCard>

          <SectionCard id="philosophy" title="AI Philosophy in Med-Tech">
            <p>
              I believe AI in Med-Tech isn’t about slapping a chatbot on top of a system.
              It’s an architectural revolution that transforms the entire stack:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Data-centric engineering — quality and context matter more than flashy models.</li>
              <li>Interpretable and trustworthy AI — clinicians must understand and trust what they deploy.</li>
              <li>Integrated workflows — models are parts of ecosystems, not standalone toys.</li>
              <li>Deployment at scale — from edge devices in clinics to cloud-backed platforms.</li>
            </ul>

            <p>
              AI isn’t a feature. It’s a paradigm shift. I build it that way.
            </p>
          </SectionCard>

          {/* NEW: Technical Stack & Skills */}
          <SectionCard id="skills" title="Technical Stack & Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoBox label="Languages" value="Python, SQL, JavaScript" />
              <InfoBox label="ML Frameworks" value="PyTorch, TensorFlow, Scikit-Learn" />
              <InfoBox label="Data & Pipelines" value="Pandas, Airflow, Feature Store patterns" />
              <InfoBox label="Deployment" value="Docker, FastAPI, AWS (Lambda, EC2, S3)" />
              <InfoBox label="Frontend (if used)" value="React, HTML/CSS" />
              <InfoBox label="DevOps" value="CI/CD, Kubernetes, Logging & Monitoring" />
            </div>
          </SectionCard>

          <SectionCard id="projects" title="Selected Projects (Coming Soon)">
            <p className="text-white/70">
              These projects are designed to demonstrate system thinking and real-world Med-Tech impact.
              The emphasis is on architecture, workflow leverage, and deployable design—not “more code for the sake of code.”
            </p>

            <div className="mt-5 space-y-5">
              {projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </SectionCard>

          <SectionCard id="contact" title="Contact">
            <p>
              If you’re building Med-Tech products and care about real-world deployment—not demos—I’d love to connect.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={LINKS.email}
                className="rounded-xl bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition"
              >
                Email
              </a>

              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
              >
                LinkedIn
              </a>

              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
              >
                GitHub
              </a>

              <a
                href={LINKS.calendly}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
              >
                Calendly
              </a>
            </div>
          </SectionCard>

          <footer className="pt-10 text-sm text-white/40">
            © {new Date().getFullYear()} Luca — AI Engineer, Med-Tech
          </footer>
        </div>
      </div>
    </main>
  );
}