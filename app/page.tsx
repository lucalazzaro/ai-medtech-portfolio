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
  { id: "skills", title: "Applied Stack & Skills" },
  { id: "experience", title: "Beyond Models: Product & Delivery Experience" },
  { id: "projects", title: "Selected Projects" },
  { id: "contact", title: "Contact" },
];

type Project = {
  title: string;
  subtitle: string;
  context: string;
  livenote?: string;
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
  links?: {
    demo?: string;
    github?: string;
    liveNote?: string;
  };
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Clinical Data Quality Gate",
    subtitle: "Trust before metrics",
    context:
      "In medical and dental clinics, data often arrives incomplete, inconsistent, or simply wrong. This project shows a reliability-first data quality layer that cleans and validates incoming records — and blocks downstream usage when trust cannot be established.",
    livenote:
      "Live demo available — reliability-first validation and downstream gating.",
    mentalModel: {
      input: [
        "Messy patient records (inconsistent fields and formats)",
        "Missing or conflicting demographic / clinical values",
        "Free-text notes (when present)",
      ],
      transformation: [
        "Normalization (formats, field mapping)",
        "Deterministic validation and plausibility checks",
        "Explicit trust classification (OK / ATTENTION / BLOCKED)",
        "Downstream gating with clear, human-readable reasons",
      ],
      output: [
        "Trusted, structured patient records",
        "Blocked records with clear reason messages",
        "Suggested next-step actions (what to fix)",
      ],
    },
    technicalChoice: {
      choice:
        "Hard validation rules and explicit trust gates; AI is presented only as an assistive extraction layer (not a decision-maker).",
      why:
        "In clinical workflows, bad data is more dangerous than missing automation. Trust must be established before analytics or decisions are allowed downstream.",
    },
    deliberateNonChoice:
      "No KPI dashboard, no black-box predictions, and no chatbot-driven decision-making.",
    snapshot: {
      hook: "Stop bad data before it contaminates clinical workflows.",
      problem: "Analytics and automation break when source data cannot be trusted.",
      approach:
        "Normalize and validate incoming data, then gate downstream usage with transparent rules.",
      techStack: "Next.js, TypeScript, Zod",
      impact:
        "Production-style data quality gate that protects downstream analytics and automation.",
    },
    status: "Live",
    links: {
      demo: "https://clinical-data-quality-gate.vercel.app/",
      github: "https://github.com/lucalazzaro/clinical-data-quality-gate",
    },
    featured: true,
  },
  {
    title: "KPI Command Center",
    subtitle: "Cross-channel KPIs + explainable 7-day forecast",
    context:
      "Most teams track many KPIs but still struggle to answer: What matters today? And what might break next? This dashboard turns customer, sales, and marketing signals into a clear health status, plain-English drivers, and concrete actions — using synthetic data only.",
    livenote:
      "Live demo available — monitoring with lightweight, explainable ML behavior.",
    mentalModel: {
      input: [
        "Synthetic daily business signals (customer, sales, marketing)",
        "Region + channel filters (EU/NA/APAC, Email/Chat/Phone)",
        "Scenario sliders (ticket volume, marketing push)",
      ],
      transformation: [
        "KPI aggregation per area (Customer / Sales / Marketing)",
        "Overall health score (0–100) + 'Main signal' summary",
        "Baseline vs model forecast (simulated gradient boosting behavior)",
      ],
      output: [
        "Guided dashboard views (Overview → Area → Actions)",
        "Human-readable 'why' explanations (drivers)",
        "Recommended actions with impact level",
      ],
    },
    technicalChoice: {
      choice: "Explainable forecasting + decision signals (not black-box predictions).",
      why: "Operational decisions need clarity and trust — the model supports judgment, it doesn't replace it.",
    },
    deliberateNonChoice:
      "No opaque end-to-end pipelines, no proprietary data, no 'AI magic' claims.",
    snapshot: {
      hook: "A business dashboard that stays readable, even for non-technical people.",
      problem:
        "Cross-team metrics are often tracked in silos, so early warning signals are missed.",
      approach:
        "Combine a small set of meaningful KPIs into one health view, then explain what's driving changes and what to do next.",
      techStack: "Next.js, TypeScript, Recharts",
      impact:
        "A portfolio-ready example of product-thinking + applied analytics with clear, explainable signals.",
    },
    status: "Live",
    links: {
      demo: "https://kpi-command-center-self.vercel.app/",
      github: "https://github.com/lucalazzaro/kpi-command-center",
    },
    featured: true,
  },
  {
    title: "Multi-Agent Backoffice: Why Humans Still Matter",
    subtitle: "A comic-style demo of AI failure modes (and accountability).",
    context:
      "A simulated MedTech backoffice where each AI agent makes a locally reasonable suggestion — and the system fails when those suggestions collide. The UI makes failure visible (as a comic), then forces a human sign-off step to show accountability.",
    mentalModel: {
      input: [
        "A situation snapshot (backlog, budget, constraints)",
        "Short free-text context (what the team ‘hears’)",
        "Simple policies (compliance strict, discount cap)",
      ],
      transformation: [
        "Agents propose actions (structured outputs + confidence/evidence)",
        "Conflict detector flags collisions (growth vs capacity, discounts vs cash)",
        "Policy gate blocks unsafe actions (e.g., compliance shortcuts)",
        "CEO sign-off step enforces human accountability",
      ],
      output: [
        "Agent proposals (comic dialogues)",
        "Visible collisions + severity",
        "Rules: allowed / needs approval / blocked",
        "Post-mortem: what failed and why",
      ],
    },
    technicalChoice: {
      choice:
        "Deterministic agent outputs + readable governance layers (no LLM required).",
      why: "For a portfolio demo, reproducibility beats randomness. The message is about failure modes and governance, not model magic.",
    },
    deliberateNonChoice:
      "I intentionally did NOT build a fully autonomous agentic system — the goal is to show where AI stops and humans must decide.",
    snapshot: {
      hook:
        "A comic-style multi-agent office simulator that makes conflicts, rules, and accountability impossible to ignore.",
      problem:
        "Multi-agent systems can sound smart individually and still fail as a system: misalignment, overconfidence, policy blindness, brittleness.",
      approach:
        "Structured agent outputs → conflict detection → policy gate → CEO sign-off → post-mortem (all visible in UI).",
      techStack: "Next.js, TypeScript, Tailwind, deterministic simulation",
      impact:
        "Shows governance and human accountability patterns recruiters actually care about (beyond demos that ‘just work’).",
    },
    status: "Live",
    links: {
      demo: "https://multi-agent-backoffice.vercel.app/",
      github: "https://github.com/lucalazzaro/multi-agent-backoffice",
    },
    featured: true,
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

        {project.links ? (
          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
              >
                Live Demo
              </a>
            ) : null}

            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
              >
                GitHub
              </a>
            ) : null}

            {project.featured ? (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-widest text-white/60">
                Featured
              </span>
            ) : null}
          </div>
        ) : null}

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
            <div className="flex items-center">
              <div>
                <p className="text-sm text-white/60">Luca Lazzaro</p>
                <p className="text-lg font-semibold">
                  Applied AI Specialist – Healthcare Decision Systems
                </p>
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
                  Applied AI for healthcare decision systems.
                </h1>

                <p className="text-lg text-white/70 italic tracking-wide">
                  Not another chatbot — systems people can trust.
                </p>

                <p className="text-lg md:text-xl text-white/60 max-w-2xl">
                  I design workflow-integrated AI for regulated environments:
                  decision support, data quality gates, and governance-aware
                  automation.
                </p>

                <p className="text-lg md:text-xl text-white/60 max-w-2xl">
                  My focus is <span className="text-white/70">deployable</span>{" "}
                  systems with clear decision boundaries, explainability, and
                  real operational adoption.
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
              <Pill>Decision Support Systems</Pill>
              <Pill>Workflow Intelligence</Pill>
              <Pill>Data Quality & Validation</Pill>
              <Pill>Governed AI</Pill>
            </div>
          </section>

          <SectionCard id="background" title="Background">
            <p>
              I come from a multidisciplinary background spanning customer
              success, clinical support, and operational roles in international
              tech environments.
            </p>

            <p>
              Working closely with healthcare professionals exposed me to the
              real friction points of clinical workflows — delays, ambiguity,
              manual workarounds, and systems that technically “work” but fail
              people.
            </p>

            <p>My transition to AI started with hands-on problem solving.</p>

            <p>
              I began prototyping decision support patterns and reliability-first
              data foundations. What started as curiosity became a mission: build
              MedTech AI that survives contact with reality.
            </p>
          </SectionCard>

          <SectionCard id="philosophy" title="AI Philosophy in Med-Tech">
            <p>
              AI in Med-Tech is not about adding a chatbot on top of existing
              systems. It’s an architectural shift that reshapes how data,
              decisions, and responsibility flow across the stack.
            </p>
            <p>
              I focus on data-centric engineering, interpretable decision
              support, and workflow-integrated AI that clinicians can understand
              and trust — with governance, safety, and adoption treated as core
              design constraints.
            </p>
            <p>Technology only matters when it works under real constraints.</p>
          </SectionCard>

          {/* Technical Stack & Skills (repositioned to “applied”) */}
          <SectionCard id="skills" title="Applied Stack & Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoBox label="Languages" value="Python (applied), SQL, TypeScript" />

              <InfoBox
                label="Applied AI & Decision Systems"
                value="Rule-based + model-assisted decision support, human-in-the-loop patterns, explainability, failure modes, governance-aware workflows"
              />

              <InfoBox
                label="ML Foundations (working knowledge)"
                value="Baselines, model evaluation, gradient boosting concepts, lightweight forecasting patterns"
              />

              <InfoBox
                label="Data Quality & Pipelines"
                value="Validation patterns, schema enforcement, trust gating, deterministic preprocessing, edge-case handling"
              />

              <InfoBox
                label="APIs & Deployment (pragmatic)"
                value="API prototyping (FastAPI-style), container basics, CI/CD fundamentals, deploy patterns (serverless/VM), monitoring basics"
              />

              <InfoBox
                label="Frontend for Decision UIs"
                value="Next.js, React, Tailwind — dashboards and guided UX for non-technical users"
              />

              <InfoBox
                label="Systems & Architecture (conceptual)"
                value="System design thinking, observability concepts, policy gates, MLOps basics, reliability-first design"
              />
            </div>

            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Framework-heavy deep learning is intentionally not the focus of
              this portfolio. The emphasis is on deployable systems, trust, and
              decision-making under real-world constraints.
            </p>
          </SectionCard>

          <SectionCard
            id="experience"
            title="Beyond Models: Product & Delivery Experience"
          >
            <p>
              Before focusing full-time on applied AI, I worked in international
              tech environments where systems are built, shipped, and held
              accountable.
            </p>
            <p>
              This experience shapes how I design AI today: not as isolated
              models, but as products that must survive real users, workflows,
              and constraints.
            </p>
            <p>
              I bring a product and delivery mindset to AI, with experience in
              cross-functional collaboration, workflow-first design, and
              stakeholder-ready communication — using tools like Jira, Power BI,
              and Salesforce in real delivery contexts.
            </p>
            <p>
              This is why I care about governance, failure modes, and
              human-in-the-loop design as much as models and metrics.
            </p>
          </SectionCard>

          <SectionCard id="projects" title="Selected Projects">
            <p className="text-white/70">
              These projects are designed to demonstrate system thinking and
              real-world Med-Tech impact. The emphasis is on architecture,
              workflow leverage, and deployable design—not “more code for the
              sake of code.”
            </p>

            <div className="mt-5 space-y-5">
              {projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </SectionCard>

          <SectionCard id="contact" title="Contact">
            <p>
              If you’re building healthcare products and care about real-world
              deployment—not demos—I’d love to connect.
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
            © {new Date().getFullYear()} Luca — Applied AI · Healthcare Decision Systems
          </footer>
        </div>
      </div>
    </main>
  );
}
