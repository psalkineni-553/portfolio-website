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
              View Resume
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
            Building reliable data solutions that turn raw data into business insight.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I am a master&apos;s student in Information Technology and Management focused on
            data analytics, data quality, dashboards, validation, and growing into data
            engineering through real-world project work.
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
            I focus on data work that connects technical accuracy with business usefulness.
            My current direction is Data Analyst first, Data Engineer second, and Data
            Scientist as a future growth path. I am building projects around dashboards,
            reporting logic, data validation, pipelines, and AI-assisted workflows.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">Skills</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Data Analytics",
              items: "SQL, Excel, Power BI, reporting logic, dashboard validation",
            },
            {
              title: "Data Engineering Foundations",
              items: "Python, data cleaning, data pipelines, data quality checks, BigQuery learning path",
            },
            {
              title: "AI & Automation",
              items: "AI-assisted workflows, document extraction validation, automated output verification",
            },
            {
              title: "Programming & Web",
              items: "Python, basic HTML/CSS, Django exposure, GitHub",
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
      <section id="projects" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Featured Projects</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "AI-Powered Business Insights Dashboard",
                status: "Planned / Flagship Project",
                description:
                  "A future analytics project focused on turning raw business data into dashboards, metrics, and decision-ready insights.",
              },
              {
                title: "Carbon Credit Tracking System",
                status: "Completed",
                description:
                  "A full-stack web application focused on sustainability data, tracking workflows, and reporting-oriented data flows.",
              },
              {
                title: "Sentiment and Feedback Analysis using ML",
                status: "Academic Project",
                description:
                  "A machine learning project focused on analyzing feedback text and generating insights from sentiment classification.",
              },
            ].map((project) => (
              <div key={project.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm font-semibold text-blue-700">{project.status}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">Experience</h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">
              Tata Consultancy Services — Assistant System Engineer
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Worked on enterprise reporting support, data validation, dashboard logic,
              issue documentation, and cross-functional communication.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">
              Outamation — AI-Powered Document Insights & Data Extraction Externship
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Currently working with AI-powered document workflows, structured data extraction,
              automated output validation, reconciliation checks, and business-facing reports.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            I am open to data analytics, analytics engineering, and junior data engineering
            opportunities where I can work on reliable data, dashboards, pipelines, and insights.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:psalkineni@gmail.com" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200">
              Email Me
            </a>
            <a href="https://github.com/psalkineni-553" target="_blank" className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:border-white">
              GitHub
            </a>
            <a href="http://linkedin.com/in/pavan-salkineni-2b4481227" target="_blank" className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:border-white">
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