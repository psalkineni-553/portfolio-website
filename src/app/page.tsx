export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight text-slate-950">
            Pavan Salkineni
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#skills" className="hover:text-blue-700">Skills</a>
            <a href="#projects" className="hover:text-blue-700">Projects</a>
            <a href="#experience" className="hover:text-blue-700">Experience</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
            <a
              href="#contact"
              className="rounded-full bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
            >
              Resume Coming Soon
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Data Analytics + Data Engineering Portfolio
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Turning raw data into reliable insights through dashboards, validation, and pipeline thinking.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I&apos;m a master&apos;s student in Information Technology and Management focused on
            data analytics, reporting accuracy, data quality, and building a strong foundation for data engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800"
            >
              View Projects
            </a>
            <a
              href="https://github.com/psalkineni-553"
              target="_blank"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-blue-700 hover:text-blue-700"
            >
              GitHub
            </a>
            <a
              href="http://linkedin.com/in/pavan-salkineni-2b4481227"
              target="_blank"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-blue-700 hover:text-blue-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">About</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I am a master&apos;s student in Information Technology and Management at Florida
            Atlantic University, focused on building practical skills across data analytics
            and data engineering. My experience includes validating reporting outputs,
            checking data quality, documenting issues, and supporting analytics workflows.
            I am currently strengthening my portfolio through projects involving dashboards,
            data pipelines, business insights, and AI-assisted data validation.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">Skills</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Data Analytics & Reporting",
              items: "SQL, Excel, Power BI, KPI tracking, reporting logic, dashboard validation",
            },
            {
              title: "Data Quality & Validation",
              items: "Data reconciliation, output verification, anomaly detection, logic testing, issue documentation",
            },
            {
              title: "Data Engineering Foundations",
              items: "Python, data cleaning, pipeline thinking, structured datasets, BigQuery learning path",
            },
            {
              title: "AI-Assisted Workflows",
              items: "Document extraction validation, automated output review, AI-generated data checks, business-facing summaries",
            },
          ].map((skill) => (
            <div key={skill.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{skill.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      {/* Projects */}
      <section id="projects" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Featured Projects
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A growing collection of data-focused projects showing analytics,
              validation, reporting, and pipeline thinking.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "AI-Powered Business Insights Dashboard",
                status: "Planned / Flagship Portfolio Project",
                tools: "Python, SQL, Power BI, data cleaning, KPI analysis",
                description:
                  "A planned analytics project designed to show an end-to-end workflow: collecting or preparing business data, cleaning it with Python/SQL, validating key metrics, and building Power BI dashboards that turn raw data into decision-ready insights.",
              },
              {
                title: "Carbon Credit Trading Platform",
                status: "Team Project / Completed Core Features",
                tools: "Django, Python, HTMX, Tailwind CSS, SQLite, Google Maps API",
                description:
                  "Built a sustainability-focused web platform where employees log eco-friendly commuting activity, employers track accumulated carbon credits, and organizations can participate in a carbon credit marketplace with role-based dashboards and approval workflows.",
                link: "https://github.com/Sai-12354/Carbon-Credits",
              },
              {
                title: "Sentiment and Feedback Analysis using ML",
                status: "Academic Project",
                tools: "Python, NLP, machine learning basics, reporting",
                description:
                  "An academic machine learning project focused on analyzing feedback text, classifying sentiment, and translating model outputs into business insights.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-blue-700">
                  {project.status}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-slate-500">
                  {project.tools}
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>
                <div className="mt-6">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-sm font-semibold text-blue-700 hover:text-blue-800"
                    >
                      View GitHub →
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-blue-700">
                      Case study coming soon →
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Experience
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Professional and externship experience focused on data validation,
            reporting accuracy, AI-assisted workflows, and stakeholder-ready insights.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
              <div>
                <h3 className="text-xl font-semibold text-slate-950">
                  Tata Consultancy Services
                </h3>
                <p className="mt-1 font-medium text-slate-600">
                  Assistant System Engineer
                </p>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Jun 2024 – Dec 2024
              </p>
            </div>

            <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-slate-600">
              <li>
                Validated enterprise reporting outputs to support accuracy,
                consistency, and reliable operational reporting.
              </li>
              <li>
                Built Excel-based dashboards and tracking models while checking
                formulas, calculations, and reporting logic.
              </li>
              <li>
                Documented data quality issues, workflow steps, and validation
                checks for cross-functional teams.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
              <div>
                <h3 className="text-xl font-semibold text-slate-950">
                  Outamation
                </h3>
                <p className="mt-1 font-medium text-slate-600">
                  Advanced AI-Powered Document Insights & Data Extraction Externship
                </p>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Dec 2025 – Present
              </p>
            </div>

            <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-slate-600">
              <li>
                Working with AI-powered document workflows that convert
                unstructured documents into structured datasets.
              </li>
              <li>
                Validating automated extraction outputs through reconciliation,
                logic testing, and quality checks.
              </li>
              <li>
                Creating stakeholder-ready summaries, dashboards, and reports to
                support business-facing decisions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* Contact */}
      <section id="contact" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Let&apos;s Connect
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Open to data analytics, analytics engineering, and junior data engineering opportunities.
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              I am interested in roles where I can work with SQL, Python, dashboards,
              data quality, reporting workflows, and data pipeline foundations to help
              teams make better decisions from reliable data.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:psalkineni@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200"
            >
              Email Me
            </a>
            <a
              href="https://github.com/psalkineni-553"
              target="_blank"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:border-white"
            >
              GitHub
            </a>
            <a
              href="http://linkedin.com/in/pavan-salkineni-2b4481227"
              target="_blank"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:border-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Pavan Kumar Salkineni. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}