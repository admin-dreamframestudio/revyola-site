import React, { useState } from "react";

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
    icon: "procedure",
    points: [
      "High-volume CPT combinations",
      "Bundling and modifier sensitivity",
      "Procedure payment variability across payers",
    ],
  },
  {
    title: "Diagnostic specialties",
    examples: "Allergy, pulmonology, cardiology, neurology",
    icon: "diagnostic",
    points: [
      "Testing-heavy workflows",
      "Multi-line adjudication complexity",
      "Repeated reimbursement variance patterns",
    ],
  },
  {
    title: "Evaluation-heavy specialties",
    examples: "Rheumatology, endocrinology, infectious disease",
    icon: "evaluation",
    points: [
      "E/M coding sensitivity",
      "Downcoding and partial payment patterns",
      "Closed-claim behavior that standard reporting misses",
    ],
  },
  {
    title: "Multi-site specialty groups",
    examples: "Platform groups and regional practice networks",
    icon: "network",
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

  const mobileMenuClosed = false;
  console.assert(mobileMenuClosed === false, "mobile menu default should remain closed");
}

if (typeof window !== "undefined" && typeof console !== "undefined") {
  runSelfTests();
}

function Brand() {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-3 sm:gap-4">
      <div className="flex items-center justify-center rounded-xl bg-transparent">
        <img
          src="/Revyola_Logo.png"
          alt="Revyola"
          className="h-9 w-auto object-contain sm:h-10"
        />
      </div>
    </a>
  );
}

function MenuIcon({ open = false }) {
  return (
    <div className="relative h-5 w-5">
      <span className={`absolute left-0 top-0.5 h-0.5 w-5 rounded-full bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
      <span className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-white transition ${open ? "opacity-0" : "opacity-100"}`} />
      <span className={`absolute left-0 top-4.5 h-0.5 w-5 rounded-full bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
    </div>
  );
}

function NavLinks({ mobile = false, onNavigate = undefined }) {
  const base = mobile
    ? "block rounded-xl px-3 py-2.5 text-base text-slate-300 transition hover:bg-white/5 hover:text-white"
    : "text-sm text-slate-300 transition hover:text-white";

  const handleClick = () => {
    if (onNavigate) onNavigate();
  };

  return (
    <>
      <a href="#signal" className={base} onClick={handleClick}>Signal</a>
      <a href="#specialties" className={base} onClick={handleClick}>Specialties</a>
      <a href="#partners" className={base} onClick={handleClick}>Partners</a>
      <a href="#contact" className={base} onClick={handleClick}>Contact</a>
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

function SpecialtyIcon({ type }) {
  const common = "h-6 w-6 sm:h-7 sm:w-7";

  if (type === "procedure") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <rect x="4" y="6" width="10" height="3" rx="1.5" fill="#67E8F9" />
        <path d="M13 7.5L20 14.5" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 10.5L16.5 16" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
        <circle cx="18.5" cy="16.5" r="2.2" stroke="#67E8F9" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "diagnostic") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="5.5" stroke="#67E8F9" strokeWidth="2" />
        <path d="M15 15L20 20" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
        <path d="M10.5 7.5V13.5" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
        <path d="M7.5 10.5H13.5" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "evaluation") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <rect x="5" y="4" width="14" height="16" rx="2" stroke="#67E8F9" strokeWidth="2" />
        <path d="M8 9H16" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 13H13" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 17H12" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
      <circle cx="6" cy="7" r="2" fill="#67E8F9" />
      <circle cx="18" cy="7" r="2" fill="#67E8F9" />
      <circle cx="12" cy="17" r="2" fill="#67E8F9" />
      <path d="M7.5 8.5L10.5 15" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
      <path d="M16.5 8.5L13.5 15" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
      <path d="M8.5 7H15.5" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function RevyolaLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
          <div className="flex items-center justify-between gap-3 lg:gap-4">
            <Brand />

            <div className="hidden items-center gap-8 md:flex">
              <NavLinks />
            </div>

            <div className="flex items-center gap-2 md:gap-0">
              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium text-white shadow-[0_10px_30px_rgba(14,165,233,0.12)] transition hover:border-cyan-300/50 hover:bg-white/15 md:px-4"
              >
                <span className="hidden sm:inline">Talk to Revyola</span>
                <span className="sm:hidden">Talk</span>
              </a>

              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
              >
                <MenuIcon open={mobileMenuOpen} />
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="mt-3 rounded-[20px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_20px_60px_rgba(2,6,23,0.35)] md:hidden">
              <div className="grid gap-1">
                <NavLinks mobile onNavigate={() => setMobileMenuOpen(false)} />
              </div>
            </div>
          )}
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-18 sm:pt-14 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur-xl sm:mb-8">
              <span className="truncate">Premium signal intelligence for specialty healthcare payments</span>
            </div>

            <h1 className="max-w-5xl text-[2.85rem] font-semibold leading-[0.94] tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              See what healthcare
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                payments are really doing.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-xl sm:leading-8">
              Revyola turns closed claims into signal. We surface hidden payer behaviors, underpayment patterns, and reimbursement variance across specialty workflows so providers, operators, and RCM teams can act with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href="#contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_50px_rgba(56,189,248,0.28)] transition hover:-translate-y-0.5"
              >
                Start the conversation
              </a>
              <a
                href="#specialties"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                Explore specialties
              </a>
            </div>

            <div className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
              {heroStats.map((item) => (
                <GlowCard key={item.value} className="p-4 sm:p-5">
                  <p className="text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                </GlowCard>
              ))}
            </div>
          </div>

          <div className="relative mt-10 lg:col-span-5 lg:mt-0">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-cyan-400/20 via-indigo-500/15 to-emerald-400/10 blur-2xl sm:-inset-6 sm:rounded-[36px]" />
              <GlowCard className="relative overflow-hidden p-3 sm:p-4">
                <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(6,11,30,0.98),rgba(3,8,24,0.95))] p-4 sm:rounded-[24px] sm:p-6">
                  <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm text-cyan-200">Claims Signal Map</p>
                      <p className="mt-1 text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">Pattern intelligence surface</p>
                    </div>
                    <div className="shrink-0 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                      Live model
                    </div>
                  </div>

                  <div className="relative mt-5 h-[300px] overflow-hidden rounded-[20px] border border-white/8 bg-[linear-gradient(180deg,#081226,#050816)] sm:mt-6 sm:h-[380px] sm:rounded-[24px]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35" />
                    <div className="absolute left-3 top-3 rounded-2xl border border-cyan-300/15 bg-white/5 px-3 py-2 backdrop-blur-xl sm:left-5 sm:top-5 sm:px-4 sm:py-3">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Detected</p>
                      <p className="mt-1 text-xs font-medium text-white sm:text-sm">Silent payer variance</p>
                    </div>
                    <div className="absolute right-3 top-3 rounded-2xl border border-indigo-300/15 bg-white/5 px-3 py-2 backdrop-blur-xl sm:right-5 sm:top-5 sm:px-4 sm:py-3">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Scope</p>
                      <p className="mt-1 text-xs font-medium text-white sm:text-sm">Multi-specialty</p>
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
                        [130, 256], [186, 242], [264, 206], [356, 198], [465, 252], [206, 126], [338, 140],
                      ].map(([x, y], i) => (
                        <g key={`${x}-${y}-${i}`}>
                          <circle cx={x} cy={y} r="4.8" fill="rgba(255,255,255,0.95)" />
                          <circle cx={x} cy={y} r="16" fill="rgba(56,189,248,0.12)" />
                        </g>
                      ))}
                    </svg>

                    <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2 sm:bottom-5 sm:left-5 sm:right-5 sm:gap-3">
                      {[
                        ["Patterns", "Bundling"],
                        ["Behavior", "Downcoding"],
                        ["Visibility", "Closed claims"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl sm:px-4 sm:py-3">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{label}</p>
                          <p className="mt-1 text-xs font-medium text-white sm:text-sm">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </section>

        <section id="signal" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-12">
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            <GlowCard className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">The problem</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Most underpayments are not denied. They are simply paid short.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Across specialty outpatient care, modifier combinations, multi-line encounters, and payer-specific rules create reimbursement variance that standard denial workflows often never surface.
              </p>
            </GlowCard>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {signalItems.map((item) => (
                <GlowCard key={item} className="p-4 sm:p-5">
                  <p className="text-sm leading-7 text-slate-100">{item}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        <section id="specialties" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Built for broad specialty care</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Designed so any specialty group can see themselves in the platform.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Revyola is not limited to one clinical niche. It is built for the common commercial payment patterns that show up across procedural, diagnostic, evaluation-heavy, and multi-site specialty organizations.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {specialtyGroups.map((group) => (
              <GlowCard key={group.title} className="p-6 sm:p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/30 via-indigo-300/25 to-emerald-300/20 ring-1 ring-white/10">
                  <SpecialtyIcon type={group.icon} />
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{group.examples}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-200">
                  {group.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </section>

        <section id="partners" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <GlowCard className="p-6 sm:p-8 lg:p-10">
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

            <GlowCard className="p-6 sm:p-8 lg:p-10">
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

        <section id="contact" className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 sm:pb-28 lg:px-10">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,38,0.95),rgba(6,11,24,0.95))] p-6 shadow-[0_30px_100px_rgba(2,6,23,0.45)] sm:rounded-[36px] sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.16),transparent_24%)]" />
            <div className="relative grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
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
                  className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-7 font-semibold text-slate-950 shadow-[0_18px_50px_rgba(56,189,248,0.28)] transition hover:-translate-y-0.5"
                >
                  Send inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050816]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <p>© 2026 Revyola. Signal intelligence for specialty healthcare payments.</p>
          <a href="mailto:info@revyola.com" className="transition hover:text-white">
            info@revyola.com
          </a>
        </div>
      </footer>
    </div>
  );
}
