import Image from "next/image";

const sections = [
  { id: "intro", title: "Overview" },
  { id: "background", title: "Background" },
  { id: "philosophy", title: "AI Philosophy" },
  { id: "projects", title: "Selected Projects" },
  { id: "contact", title: "Contact" },
];

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
                <p className="text-lg font-semibold">
                  AI Engineer, Med-Tech
                </p>
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
                  Building AI systems that reshape the Med-Tech stack.
                </h1>

                <p className="text-lg md:text-xl text-white/70 max-w-2xl">
                  I design AI-driven systems for dental and medical technologies,
                  focused on workflow intelligence, clinical decision support,
                  and production-ready data-to-impact pipelines.
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
              {[
                "Workflow Intelligence",
                "Clinical Decision Support",
                "Data Quality & Validation",
                "Deployable AI Systems",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <SectionCard id="background" title="Background">
            <p>
              I come from a multidisciplinary background spanning customer
              success, clinical support, and operational roles in international
              tech environments. Working closely with healthcare professionals
              exposed me to the real friction points of clinical workflows.
            </p>

            <p>
              This led me to AI engineering, not as an abstract technical pursuit,
              but as a practical tool to redesign systems, improve
              decision-making, and reduce operational and cognitive load in
              clinical environments.
            </p>
          </SectionCard>

          <SectionCard id="philosophy" title="AI Philosophy in Med-Tech">
            <p>
              I don’t see AI as a chatbot layer or a standalone agent. In
              Med-Tech, AI is a systemic shift affecting the entire stack: data
              collection, validation, interpretation, decision support, and
              deployment inside real workflows.
            </p>

            <p>
              Accuracy alone is not enough. Trust, interpretability, and
              integration define real-world impact.
            </p>
          </SectionCard>

          <SectionCard id="projects" title="Selected Projects">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Workflow Bottleneck Analyzer",
                  desc: "Operational signals extracted from scheduling and treatment flow data.",
                },
                {
                  title: "Hybrid Rule + ML Decision Support",
                  desc: "Interpretable clinical logic designed for trust.",
                },
                {
                  title: "AI-Augmented Intake Structuring",
                  desc: "Transform unstructured patient input into validated data.",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="
                    rounded-2xl border border-white/10 bg-black
                    p-5 transition
                    hover:bg-white/5 hover:border-white/20
                  "
                >
                  <p className="font-semibold">{p.title}</p>
                  <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                  <p className="mt-3 text-xs text-white/40 italic">
                    Coming soon
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard id="contact" title="Contact">
            <p>
              If you’re building Med-Tech products and care about real-world
              deployment—not demos—I’d love to connect.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:YOUR_EMAIL_HERE"
                className="rounded-xl bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/YOUR_GITHUB"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
              >
                GitHub
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

