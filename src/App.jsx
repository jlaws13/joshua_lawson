export default function JoshuaLawsonWebsite() {
  const assetBase = import.meta.env.BASE_URL;
  // const profileImage = `${assetBase}images/headshot.jpg`;
  const profileImage = `${assetBase}images/walking.jpg`;
  const cvUrl = `${assetBase}files/cv.pdf`;

  const researchInterests = [
    "Asset Pricing",
    "Price Impact of Retail Demand",
    "Portfolio Choice",
    "Empirical Market Microstructure",
    "Machine Learning in Finance",
  ];

  const education = [
    {
      degree: "Ph.D. in Finance",
      school: "University of Tennessee, Knoxville",
      dates: "Aug. 2024 – May 2027",
      details: "Expected completion: May 2027.",
    },
    {
      degree: "Graduate Study in Finance",
      school: "University of Rochester, Simon Business School",
      dates: "Aug. 2021 – May 2024",
      details: "Doctoral coursework in finance.",
    },
    {
      degree: "M.S. in Mathematics, Applied Track",
      school: "SUNY–Buffalo",
      dates: "May 2021",
      details:
        "Relevant coursework: Numerical Analysis I/II, Methods of Applied Mathematics I/II, Stochastic Processes, Real Analysis, Measure Theory, Nonlinear Dynamics.",
    },
    {
      degree: "M.S. in Quantitative Finance",
      school: "SUNY–Buffalo",
      dates: "Dec. 2020",
      details:
        "Relevant coursework: Quantitative Methods for Finance, Portfolio Theory, Financial Modeling in R.",
    },
  ];

  const publications = [
    {
      title: "Crude Oil Futures Prices and Foreign Exchange Markets",
      authors:
        "Md Rafayet Alam, Md Abdur Rahman Forhad, Mohammed Syedul Islam, and Joshua Lawson",
      venue: "Applied Economics, 2023",
      link: "https://scholar.google.com/citations?user=wVeYQeAAAAAJ&hl=en",
    },
    {
      title: "Speculation and Food-Grain Commodities",
      authors: "Joshua Lawson, Md Rafayet Alam, and Xiaoli L. Etienne",
      venue: "Applied Economics, 2021",
      link: "https://scholar.google.com/citations?user=wVeYQeAAAAAJ&hl=en",
    },
  ];

  const workingPapers = [
    {
      title: "The Equilibrium Price Impact of Household Demand",
      subtitle: "Job Market Paper",
      description:
        "Studies how household demand affects equilibrium prices, with a focus on ownership structure, institutional inelasticity, and cross-sectional price impact.",
    },
    {
      title: "Arbitrage Thresholds and Price Discovery in Dual-Class Equity",
      subtitle: "Draft available upon request",
      description:
        "Examines the limits of arbitrage and how frictions shape relative pricing and information transmission across dual-class shares.",
    },
    {
      title:
        "Expected Growth and Average Utility: A Microeconomic Axiomatization of Ergodicity Economics",
      subtitle: "Draft available upon request",
      description:
        "Develops a microeconomic foundation for ergodicity economics and expected growth using an axiomatic approach.",
    },
  ];

  const teaching = [
    {
      course: "Investment and Portfolio Management (FINC 425)",
      role: "Instructor, University of Tennessee, Knoxville",
      dates: "Spring 2026; Fall 2026",
    },
    {
      course: "Financial Derivatives (MGF 635)",
      role: "Instructor, SUNY–Buffalo",
      dates: "Spring 2021",
    },
    {
      course: "Financial Derivatives (MGF 435)",
      role: "Instructor, SUNY–Buffalo",
      dates: "Spring 2021",
    },
    {
      course: "Teaching Assistant and Tutor",
      role:
        "SUNY–Buffalo — Derivative Securities, Corporate Finance, Equity Research, Biostatistics, Calculus I/II/III, Linear Algebra, Probability Theory",
      dates: "Sep. 2019 – Dec. 2020",
    },
  ];

  const conferences = [
    "FMA Doctoral Student Consortium, Tampa, FL (2026), selected presenter: The Equilibrium Price Impact of Household Demand",
    "FMA Annual Meeting, Tampa, FL (2026), presenter: The Equilibrium Price Impact of Household Demand",
    "Brown Bag Seminar, University of Rochester (2022, 2023, 2024), presented",
    "Brown Bag Seminar, University of Tennessee (2024, 2026), presented",
    "Santa Fe Institute, Spring 2024, attended",
    "London Mathematical Laboratory, Fall 2024, attended",
  ];

  const extras = [
    {
      title: "Award",
      body: "Ed Nissan Best Undergraduate Paper Award, 2019",
    },
    {
      title: "Service",
      body:
        "Quantitative Portfolio Construction with Asset Pricing and Python — an 8 week applied mini-seminar covering arbitrage pricing theory and models of the stochastic discount factor, Summer 2026.",
    },
    {
      title: "Software",
      body:
        "Mu Hat — a comprehensive Python package that replicates the canon of empirical asset pricing.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-semibold tracking-tight text-slate-900">
            Joshua Lawson
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="transition hover:text-slate-950">About</a>
            <a href="#research" className="transition hover:text-slate-950">Research</a>
            <a href="#papers" className="transition hover:text-slate-950">Papers</a>
            <a href="#teaching" className="transition hover:text-slate-950">Teaching</a>
            <a href="#education" className="transition hover:text-slate-950">Education</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 py-10 md:py-16">
        <section id="about" className="grid scroll-mt-24 gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Ph.D. Candidate in Finance · 2026–2027 Job Market
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Joshua Lawson
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              I am a Ph.D. candidate in Finance at the University of Tennessee, Knoxville.
              My research lies at the intersection of asset pricing, empirical market
              microstructure, portfolio choice, and machine learning in finance.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              A central theme of my research is the equilibrium price impact of heterogeneous investors. I
              study how variation in investor preferences and arbitrage intensity affects price formation
              and market efficiency. I also work on topics related to machine learning in finance and
              long-run decision making under uncertainty.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://scholar.google.com/citations?user=wVeYQeAAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Google Scholar
              </a>
              <a
                href="mailto:cnm188@vols.utk.edu"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 transition hover:-translate-y-0.5"
              >
                Email
              </a>
              <a
                href={cvUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 transition hover:-translate-y-0.5"
              >
                CV PDF
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <img
                src={profileImage}
                alt="Joshua Lawson"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-base font-semibold text-white">
                JL
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Joshua Lawson</h2>
                <p className="text-sm text-slate-600">University of Tennessee, Knoxville</p>
                <p className="text-sm text-slate-600">Department of Finance</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
              <div>
                <p className="font-medium text-slate-900">Research fields</p>
                <p>{researchInterests.join(" • ")}</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">Expected completion</p>
                <p>May 2027</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">Email</p>
                <p>cnm188@vols.utk.edu</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">References</p>
                <p>Available upon request</p>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="mt-20 scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
            Research interests
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {researchInterests.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-base font-medium text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="papers" className="mt-20 scroll-mt-24">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Research
              </h2>
              <p className="mt-2 text-slate-600">
                Working papers and publications.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Working papers
              </p>
              <div className="mt-5 space-y-6">
                {workingPapers.map((paper) => (
                  <div key={paper.title} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                      <h3 className="text-lg font-semibold text-slate-950">{paper.title}</h3>
                      <p className="text-sm font-medium text-slate-500">{paper.subtitle}</p>
                    </div>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">{paper.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Publications
              </p>
              <div className="mt-5 space-y-6">
                {publications.map((paper) => (
                  <div key={paper.title} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                    <h3 className="text-lg font-semibold text-slate-950">{paper.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{paper.authors}</p>
                    <p className="mt-1 text-sm text-slate-700">{paper.venue}</p>
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-slate-900 underline underline-offset-4"
                    >
                      View on Google Scholar
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="teaching" className="mt-20 scroll-mt-24">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Teaching
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                I have taught courses in investments and derivatives and supported a broad
                range of undergraduate and graduate quantitative courses.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="space-y-5">
                {teaching.map((item) => (
                  <div key={`${item.course}-${item.dates}`} className="rounded-2xl border border-slate-100 p-5">
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                      <h3 className="text-base font-semibold text-slate-950">{item.course}</h3>
                      <p className="text-sm text-slate-500">{item.dates}</p>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{item.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="mt-20 scroll-mt-24">
          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Education
              </h2>
              <div className="mt-6 space-y-5">
                {education.map((item) => (
                  <div key={`${item.degree}-${item.school}`} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                      <h3 className="text-base font-semibold text-slate-950">{item.degree}</h3>
                      <p className="text-sm text-slate-500">{item.dates}</p>
                    </div>
                    <p className="mt-1 text-sm text-slate-700">{item.school}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Presentations</h2>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
                  {conferences.map((item) => (
                    <li key={item} className="rounded-2xl border border-slate-100 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Additional</h2>
                <div className="mt-6 space-y-5">
                  {extras.map((item) => (
                    <div key={item.title}>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20 scroll-mt-24 pb-12">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 px-6 py-10 text-white shadow-sm md:px-10">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contact</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">
              For research inquiries, job market materials, or teaching information, please
              reach out by email.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:cnm188@vols.utk.edu"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
              >
                cnm188@vols.utk.edu
              </a>
              <a
                href="https://scholar.google.com/citations?user=wVeYQeAAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
              >
                Google Scholar
              </a>
              <a
                href={cvUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
              >
                CV PDF
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
