const heroStats = [
  { value: "1–3%", label: "silent commercial revenue leakage can go unnoticed annually" },
  { value: "Closed claims", label: "contain the clearest signal of payer behavior" },
  { value: "No rip-and-replace", label: "works alongside existing billing and RCM teams" },
];

const signalItems = [
  "Silent underpayments with no denial flag",
  "Modifier reimbursement suppression",
  "Same-day E/M and procedure payment reductions",
  "Multi-line bundling inconsistencies",
  "Cross-payer variability on identical workflows",
  "Contract logic not consistently applied",
];

const specialtyGroups = [
  {
    title: "Procedural specialties",
    examples: "Dermatology, GI, pain, ENT, ophthalmology",
    points: [
      "High-volume CPT combinations",
      "Bundling and modifier sensitivity",
      "Procedure payment variability across payers",
    ],
  },
  {
    title: "Diagnostic specialties",
    examples: "Allergy, pulmonology, cardiology, neurology",
    points: [
      "Testing-heavy workflows",
      "Multi-line adjudication complexity",
      "Repeated reimbursement variance patterns",
    ],
  },
  {
    title: "Evaluation-heavy specialties",
    examples: "Rheumatology, endocrinology, infectious disease",
    points: [
      "E/M coding sensitivity",
      "Downcoding and partial payment patterns",
      "Closed-claim behavior that standard reporting misses",
    ],
  },
  {
    title: "Multi-site specialty groups",
    examples: "Platform groups and regional practice networks",
    points: [
      "Payer inconsistency across entities",
      "Scale amplifies hidden leakage",
      "Leadership needs pattern-level visibility",
    ],
  },
];

const valueItems = [
  "Reveal hidden payer behavior across thousands of encounters",
  "Quantify financial impact by workflow, payer, and code pattern",
  "Equip billing teams with actionable recovery intelligence",
  "Support smarter payer discussions with defensible data",
  "Surface revenue already earned but not fully paid",
  "Create leadership visibility without operational disruption",
];

const partnerReasons = [
  {
    title: "For providers",
    text: "See where reimbursement behavior diverges from expectation across the workflows you perform every day.",
  },
  {
    title: "For operators",
    text: "Turn closed claims into pattern intelligence that informs growth, contracting, and financial oversight.",
  },
  {
    title: "For RCM leaders",
    text: "Strengthen existing billing teams with sharper visibility instead of replacing the systems already in place.",
  },
];

export function buildMailtoLink({ name = "", email = "", company = "", message = "" }) {
  const subject = encodeURIComponent("Revyola inquiry");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
  );
  return `mailto:info@revyola.com?subject=${subject}&body=${body}`;
}

function runSelfTests() {
  const href = buildMailtoLink({
    name: "Alex",
    email: "alex@example.com",
    company: "North Star Health",
    message: "Hello",
  });

  console.assert(href.startsWith("mailto:info@revyola.com"), "mailto should start with destination");
  console.assert(href.includes("subject=Revyola%20inquiry"), "subject should be encoded");
  console.assert(href.includes("North%20Star%20Health"), "company should be included in body");
}

if (typeof window !== "undefined" && typeof console !== "undefined") {
  runSelfTests();
}

function Brand() {
return (
    <a href="#top" className="flex items-center gap-4">
      <img
        src="/Revyola_Logo.png"
        alt="Revyola"
        className="h-14 w-auto object-contain"
      />
      <span className="text-lg font-semibold text-slate-950">
        Revyola
      </span>
    </a>
  );
}

function NavLinks({ mobile = false }) {
  const base = mobile
    ? "block rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
    : "text-sm text-slate-300 transition hover:text-white";

  return (
    <>
      <a href="#signal" className={base}>Signal</a>
      <a href="#specialties" className={base}>Specialties</a>
      <a href="#partners" className={base}>Partners</a>
      <a href="#contact" className={base}>Contact</a>
    </>
  );
}

function GlowCard({ children, className = "" }) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_24px_80px_rgba(2,6,23,0.45)] ${className}`}>
      {children}
    </div>
  );
}

export default function RevyolaLandingPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const company = String(formData.get("company") || "");
    const message = String(formData.get("message") || "");

    window.location.href = buildMailtoLink({ name, email, company, message });
  };

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.22),transparent_18%),radial-gradient(circle_at_82%_12%,rgba(129,140,248,0.20),transparent_20%),radial-gradient(circle_at_50%_65%,rgba(16,185,129,0.10),transparent_22%),linear-gradient(180deg,#050816_0%,#071126_35%,#07172f_60%,#050816_100%)]" />
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050816]/65 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <Brand />

            <div className="hidden items-center gap-8 md:flex">
              <NavLinks />
            </div>

            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_rgba(14,165,233,0.12)] transition hover:border-cyan-300/50 hover:bg-white/15"
            >
              Talk to Revyola
            </a>
          </div>

          <div className="mt-3 grid gap-1 md:hidden">
            <NavLinks mobile />
          </div>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-7">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur-xl">
              Premium signal intelligence for specialty healthcare payments
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              See what healthcare
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                payments are really doing.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Revyola turns closed claims into signal. We surface hidden payer behaviors, underpayment patterns, and reimbursement variance across specialty workflows so providers, operators, and RCM teams can act with confidence.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_50px_rgba(56,189,248,0.28)] transition hover:-translate-y-0.5"
              >
                Start the conversation
              </a>
              <a
                href="#specialties"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                Explore specialties
              </a>
            </div>

            <div className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              {heroStats.map((item) => (
                <GlowCard key={item.value} className="p-5">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                </GlowCard>
              ))}
            </div>
          </div>

          <div className="relative mt-16 lg:col-span-5 lg:mt-0">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-cyan-400/20 via-indigo-500/15 to-emerald-400/10 blur-2xl" />
              <GlowCard className="relative overflow-hidden p-4">
                <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(6,11,30,0.98),rgba(3,8,24,0.95))] p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm text-cyan-200">Claims Signal Map</p>
                      <p className="mt-1 text-xl font-semibold tracking-[-0.03em] text-white">Pattern intelligence surface</p>
                    </div>
                    <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                      Live model
                    </div>
                  </div>

                  <div className="relative mt-6 h-[380px] overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,#081226,#050816)]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35" />
                    <div className="absolute left-5 top-5 rounded-2xl border border-cyan-300/15 bg-white/5 px-4 py-3 backdrop-blur-xl">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Detected</p>
                      <p className="mt-1 text-sm font-medium text-white">Silent payer variance</p>
                    </div>
                    <div className="absolute right-5 top-5 rounded-2xl border border-indigo-300/15 bg-white/5 px-4 py-3 backdrop-blur-xl">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Scope</p>
                      <p className="mt-1 text-sm font-medium text-white">Multi-specialty</p>
                    </div>

                    <svg viewBox="0 0 520 360" className="absolute inset-0 h-full w-full" aria-hidden="true">
                      <defs>
                        <linearGradient id="sigA" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="rgba(103,232,249,0.0)" />
                          <stop offset="45%" stopColor="rgba(103,232,249,0.95)" />
                          <stop offset="100%" stopColor="rgba(129,140,248,0.9)" />
                        </linearGradient>
                        <linearGradient id="sigB" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="rgba(52,211,153,0.0)" />
                          <stop offset="55%" stopColor="rgba(52,211,153,0.85)" />
                          <stop offset="100%" stopColor="rgba(103,232,249,0.85)" />
                        </linearGradient>
                      </defs>

                      <path d="M20 235 C95 228,122 170,180 158 S280 214,350 180 438 96,500 126" stroke="url(#sigA)" strokeWidth="3.5" fill="none" />
                      <path d="M24 280 C90 278,130 252,188 242 S282 184,356 198 438 278,500 238" stroke="url(#sigB)" strokeWidth="3" fill="none" />
                      <path d="M34 118 C96 152,148 114,202 126 S282 158,338 140 424 64,490 88" stroke="rgba(129,140,248,0.55)" strokeWidth="2.4" fill="none" />

                      {[
                        [78, 229], [132, 178], [184, 158], [248, 188], [350, 180], [452, 114],
                        [130, 256], [186, 242], [264, 206], [356, 198], [465, 252], [206, 126], [338, 140]
                      ].map(([x, y], i) => (
                        <g key={`${x}-${y}-${i}`}>
                          <circle cx={x} cy={y} r="4.8" fill="rgba(255,255,255,0.95)" />
                          <circle cx={x} cy={y} r="16" fill="rgba(56,189,248,0.12)" />
                        </g>
                      ))}
                    </svg>

                    <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                      {[
                        ["Patterns", "Bundling"],
                        ["Behavior", "Downcoding"],
                        ["Visibility", "Closed claims"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
                          <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">{label}</p>
                          <p className="mt-1 text-sm font-medium text-white">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </section>

        <section id="signal" className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <GlowCard className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">The problem</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Most underpayments are not denied. They are simply paid short.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Across specialty outpatient care, modifier combinations, multi-line encounters, and payer-specific rules create reimbursement variance that standard denial workflows often never surface.
              </p>
            </GlowCard>

            <div className="grid gap-4 sm:grid-cols-2">
              {signalItems.map((item) => (
                <GlowCard key={item} className="p-5">
                  <p className="text-sm leading-7 text-slate-100">{item}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        <section id="specialties" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Built for broad specialty care</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Designed so any specialty group can see themselves in the platform.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Revyola is not limited to one clinical niche. It is built for the common commercial payment patterns that show up across procedural, diagnostic, evaluation-heavy, and multi-site specialty organizations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {specialtyGroups.map((group) => (
              <GlowCard key={group.title} className="p-7">
                <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-300/30 via-indigo-300/25 to-emerald-300/20 ring-1 ring-white/10" />
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{group.examples}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-200">
                  {group.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </section>

        <section id="partners" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <GlowCard className="p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Why groups partner with Revyola</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Claims intelligence that fits the way specialty practices already operate.
              </h2>
              <div className="mt-8 grid gap-4">
                {partnerReasons.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </GlowCard>

            <GlowCard className="p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Value</p>
              <div className="mt-6 grid gap-4">
                {valueItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 pb-28 lg:px-10">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,38,0.95),rgba(6,11,24,0.95))] p-8 shadow-[0_30px_100px_rgba(2,6,23,0.45)] sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.16),transparent_24%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Contact</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                  Start the conversation.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  If you lead a specialty practice, platform group, revenue cycle function, or payer strategy team, Revyola is built to help you see the financial signal more clearly.
                </p>
                <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-slate-300">Direct contact</p>
                  <a href="mailto:info@revyola.com" className="mt-2 block text-lg font-medium text-white transition hover:text-cyan-200">
                    info@revyola.com
                  </a>
                </div>
              </div>

              <form className="relative grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="name"
                    placeholder="Name"
                    className="h-14 rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/50"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Work email"
                    className="h-14 rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/50"
                    required
                  />
                </div>

                <input
                  name="company"
                  placeholder="Organization"
                  className="h-14 rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/50"
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your specialty, your payer mix, or what you want visibility into"
                  rows={6}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] px-4 py-4 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300/50"
                  required
                />

                <button
                  type="submit"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-7 font-semibold text-slate-950 shadow-[0_18px_50px_rgba(56,189,248,0.28)] transition hover:-translate-y-0.5"
                >
                  Send inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050816]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© 2026 Revyola. Signal intelligence for specialty healthcare payments.</p>
          <a href="mailto:info@revyola.com" className="transition hover:text-white">
            info@revyola.com
          </a>
        </div>
      </footer>
    </div>
  );
}
