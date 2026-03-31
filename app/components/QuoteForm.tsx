"use client";

import { useState } from "react";
import { services } from "./serviceData";

// Sign up at https://formspree.io and replace YOUR_FORM_ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

// ─── Data ────────────────────────────────────────────────────────────────────

const GOALS = [
  {
    id: "get-leads",
    label: "Get More Leads",
    sub: "Fill your pipeline with qualified prospects",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    id: "increase-sales",
    label: "Increase Sales",
    sub: "Convert more browsers into buyers",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    id: "launch-product",
    label: "Launch a Product",
    sub: "Drive visibility and first-week conversions",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    id: "improve-ads",
    label: "Improve Ad Performance",
    sub: "Cut waste and scale what's working",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
  },
  {
    id: "build-awareness",
    label: "Build Awareness",
    sub: "Get your brand in front of the right audience",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
];

const BUDGETS = [
  { id: "starter", label: "Under J$50,000/mo", sub: "Getting started" },
  { id: "growth", label: "J$50,000 – J$150,000/mo", sub: "Growing fast" },
  { id: "scale", label: "J$150,000 – J$300,000/mo", sub: "Scaling up" },
  { id: "premium", label: "J$300,000+/mo", sub: "Full performance" },
];

const PACKAGES: Record<string, { name: string; focus: string; tagline: string; baseSetup: number; baseRetainer: number }> = {
  "get-leads": {
    name: "Lead Generation Package",
    focus: "Leads & Conversions",
    tagline: "Drive qualified traffic and convert visitors into paying customers.",
    baseSetup: 25000,
    baseRetainer: 35000,
  },
  "increase-sales": {
    name: "Sales Growth Package",
    focus: "Revenue & Sales",
    tagline: "Maximize purchase intent and convert high-value buyers at scale.",
    baseSetup: 30000,
    baseRetainer: 45000,
  },
  "launch-product": {
    name: "Product Launch Package",
    focus: "Awareness & Leads",
    tagline: "Build visibility, generate buzz, and drive first-week conversions.",
    baseSetup: 45000,
    baseRetainer: 60000,
  },
  "improve-ads": {
    name: "Performance Optimization",
    focus: "ROI & ROAS",
    tagline: "Cut wasted spend and scale what's already working in your campaigns.",
    baseSetup: 20000,
    baseRetainer: 30000,
  },
  "build-awareness": {
    name: "Brand Awareness Package",
    focus: "Reach & Engagement",
    tagline: "Get your brand in front of the right audience consistently.",
    baseSetup: 25000,
    baseRetainer: 40000,
  },
};

const BUDGET_MULTIPLIERS: Record<string, number> = {
  starter: 1.0,
  growth: 1.6,
  scale: 2.5,
  premium: 4.0,
};

const STEP_LABELS = ["Your Goal", "Your Budget", "Services", "Your Plan", "Connect"];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatJMD(amount: number) {
  return `J$${amount.toLocaleString("en-US")}`;
}

function round(n: number, to = 1000) {
  return Math.round(n / to) * to;
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  // ── Derived ──
  const pkg = PACKAGES[goal];
  const multiplier = BUDGET_MULTIPLIERS[budget] ?? 1;
  const setupFee = pkg ? round(pkg.baseSetup * multiplier) : 0;
  const retainer = pkg ? round(pkg.baseRetainer * multiplier) : 0;
  const selectedGoalLabel = GOALS.find((g) => g.id === goal)?.label ?? "";
  const selectedBudgetLabel = BUDGETS.find((b) => b.id === budget)?.label ?? "";

  // ── Handlers ──
  const toggleService = (id: string) =>
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );

  const canAdvance = () => {
    if (step === 1) return !!goal;
    if (step === 2) return !!budget;
    if (step === 3) return selectedServices.length > 0;
    return true;
  };

  const validateLead = () => {
    const e: { name?: string; email?: string } = {};
    if (!name.trim()) e.name = "Name is required.";
    if (!email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateLead()) return;
    setSubmitStatus("loading");

    const serviceNames = selectedServices
      .map((id) => services.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          whatsapp: whatsapp || "Not provided",
          goal: selectedGoalLabel,
          budget: selectedBudgetLabel,
          services: serviceNames,
          recommendedPackage: pkg?.name,
          setupFee: formatJMD(setupFee),
          monthlyRetainer: formatJMD(retainer),
          primaryFocus: pkg?.focus,
        }),
      });
      setSubmitStatus(res.ok ? "success" : "error");
    } catch {
      setSubmitStatus("error");
    }
  };

  // ── Input styles ──
  const inputCls =
    "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
  const inputErrCls =
    "mt-1.5 w-full rounded-xl border border-red-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:ring-2 focus:ring-red-100";

  return (
    <section id="quote" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Growth Plan Estimator
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Build your custom marketing plan
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Four quick questions. One tailored recommendation. No calls needed.
          </p>
        </div>

        {submitStatus === "success" ? (
          // ── Success screen ──────────────────────────────────────────────
          <div className="mx-auto max-w-lg rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">You're all set, {name.split(" ")[0]}!</h3>
            <p className="mt-2 text-sm text-slate-600">
              Your growth plan request has been received. Expect a reply at{" "}
              <span className="font-semibold text-slate-900">{email}</span> within 24 hours.
            </p>
            <div className="mx-auto mt-6 rounded-xl border border-slate-200 bg-white p-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Your plan</p>
              <p className="mt-1 text-base font-bold text-slate-900">{pkg?.name}</p>
              <div className="mt-3 flex gap-4">
                <div>
                  <p className="text-xs text-slate-400">Setup Fee</p>
                  <p className="text-lg font-bold text-blue-600">{formatJMD(setupFee)}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Monthly Retainer</p>
                  <p className="text-lg font-bold text-blue-600">{formatJMD(retainer)}/mo</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setStep(1); setGoal(""); setBudget(""); setSelectedServices([]);
                setName(""); setEmail(""); setWhatsapp(""); setSubmitStatus("idle");
              }}
              className="mt-5 text-sm font-medium text-blue-600 hover:underline"
            >
              Start over
            </button>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl">
            {/* ── Step progress ──────────────────────────────────────────── */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {STEP_LABELS.map((label, i) => {
                  const n = i + 1;
                  const done = step > n;
                  const active = step === n;
                  return (
                    <div key={label} className="flex flex-1 flex-col items-center">
                      <div className="relative flex w-full items-center">
                        {/* Left connector */}
                        {i > 0 && (
                          <div className={`h-0.5 flex-1 ${done || active ? "bg-blue-600" : "bg-slate-200"}`} />
                        )}
                        {/* Circle */}
                        <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-all ${
                          done
                            ? "border-blue-600 bg-blue-600 text-white"
                            : active
                            ? "border-blue-600 bg-white text-blue-600"
                            : "border-slate-300 bg-white text-slate-400"
                        }`}>
                          {done ? (
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          ) : n}
                        </div>
                        {/* Right connector */}
                        {i < STEP_LABELS.length - 1 && (
                          <div className={`h-0.5 flex-1 ${done ? "bg-blue-600" : "bg-slate-200"}`} />
                        )}
                      </div>
                      <span className={`mt-1.5 hidden text-[10px] font-medium sm:block ${active ? "text-blue-600" : done ? "text-slate-500" : "text-slate-400"}`}>
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Card ──────────────────────────────────────────────────── */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-100">
              <div className="p-6 sm:p-8">

                {/* STEP 1 — Goal */}
                {step === 1 && (
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">What is your primary goal?</h3>
                    <p className="mt-1 text-sm text-slate-500">Choose the outcome that matters most to your business right now.</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-1">
                      {GOALS.map((g) => {
                        const selected = goal === g.id;
                        return (
                          <button
                            key={g.id}
                            type="button"
                            onClick={() => setGoal(g.id)}
                            className={`flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition ${
                              selected
                                ? "border-blue-500 bg-blue-50 shadow-sm shadow-blue-100"
                                : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${selected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                              {g.icon}
                            </div>
                            <div>
                              <p className={`text-sm font-semibold ${selected ? "text-blue-900" : "text-slate-900"}`}>{g.label}</p>
                              <p className="text-xs text-slate-500">{g.sub}</p>
                            </div>
                            <div className={`ml-auto flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 ${selected ? "border-blue-600 bg-blue-600" : "border-slate-300"}`}>
                              {selected && <div className="h-2 w-2 rounded-full bg-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2 — Budget */}
                {step === 2 && (
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">What is your monthly ad budget?</h3>
                    <p className="mt-1 text-sm text-slate-500">This helps us match the right scale of campaign to your investment.</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {BUDGETS.map((b) => {
                        const selected = budget === b.id;
                        return (
                          <button
                            key={b.id}
                            type="button"
                            onClick={() => setBudget(b.id)}
                            className={`flex flex-col rounded-xl border px-5 py-5 text-left transition ${
                              selected
                                ? "border-blue-500 bg-blue-50 shadow-sm shadow-blue-100"
                                : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <div className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${selected ? "border-blue-600 bg-blue-600" : "border-slate-300"}`}>
                              {selected && <div className="h-2 w-2 rounded-full bg-white" />}
                            </div>
                            <p className={`mt-3 text-sm font-bold ${selected ? "text-blue-900" : "text-slate-900"}`}>{b.label}</p>
                            <p className="mt-0.5 text-xs text-slate-500">{b.sub}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3 — Services */}
                {step === 3 && (
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Which services do you want?</h3>
                    <p className="mt-1 text-sm text-slate-500">Select everything you need — we'll include it in your plan.</p>
                    <div className="mt-6 space-y-3">
                      {services.map((s) => {
                        const selected = selectedServices.includes(s.id);
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => toggleService(s.id)}
                            className={`w-full rounded-xl border px-5 py-4 text-left transition ${
                              selected
                                ? "border-blue-500 bg-blue-50 shadow-sm shadow-blue-100"
                                : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 transition ${selected ? "border-blue-600 bg-blue-600" : "border-slate-300"}`}>
                                {selected && (
                                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                  </svg>
                                )}
                              </div>
                              <div className="flex-1">
                                <p className={`text-sm font-semibold ${selected ? "text-blue-900" : "text-slate-900"}`}>{s.name}</p>
                                <p className="mt-0.5 text-xs text-slate-500">{s.description}</p>
                              </div>
                              <span className={`text-sm font-bold ${selected ? "text-blue-700" : "text-slate-500"}`}>
                                J${s.price}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 4 — Results */}
                {step === 4 && pkg && (
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Recommended For You</p>
                        <h3 className="mt-1 text-2xl font-bold text-slate-900">{pkg.name}</h3>
                        <p className="mt-1 text-sm text-slate-500">{pkg.tagline}</p>
                      </div>
                      <span className="flex-shrink-0 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {pkg.focus}
                      </span>
                    </div>

                    {/* Pricing blocks */}
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Setup Fee</p>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{formatJMD(setupFee)}</p>
                        <p className="mt-1 text-xs text-slate-400">One-time</p>
                      </div>
                      <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Monthly Retainer</p>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-blue-700">{formatJMD(retainer)}</p>
                        <p className="mt-1 text-xs text-blue-400">Per month</p>
                      </div>
                    </div>

                    {/* Included services */}
                    <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Included Services</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedServices.map((id) => {
                          const svc = services.find((s) => s.id === id);
                          return svc ? (
                            <span key={id} className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                              {svc.name}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </div>

                    {/* Summary row */}
                    <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-950 px-5 py-4 text-white">
                      <div>
                        <p className="text-xs font-medium text-slate-400">Primary Focus</p>
                        <p className="mt-0.5 text-sm font-semibold">{pkg.focus}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium text-slate-400">Goal</p>
                        <p className="mt-0.5 text-sm font-semibold">{selectedGoalLabel}</p>
                      </div>
                    </div>

                    {/* Credibility line */}
                    <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <p className="text-xs leading-5 text-amber-800">
                        These estimates are built by a marketer who has generated over{" "}
                        <span className="font-semibold">$1M+ in revenue</span> and managed{" "}
                        <span className="font-semibold">65+ campaigns</span> across the Caribbean — not a generic pricing table.
                      </p>
                    </div>
                  </div>
                )}

                {/* STEP 5 — Lead capture */}
                {step === 5 && (
                  <form onSubmit={handleSubmit} noValidate>
                    <h3 className="text-xl font-bold text-slate-900">Let's get in touch</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Leave your details and we'll send you this plan along with next steps.
                    </p>

                    <div className="mt-6 space-y-4">
                      <label className="block text-xs font-semibold text-slate-700">
                        Full Name <span className="text-red-500">*</span>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((p) => ({ ...p, name: undefined })); }}
                          placeholder="Jane Smith"
                          className={errors.name ? inputErrCls : inputCls}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                      </label>

                      <label className="block text-xs font-semibold text-slate-700">
                        Email Address <span className="text-red-500">*</span>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: undefined })); }}
                          placeholder="jane@business.com"
                          className={errors.email ? inputErrCls : inputCls}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                      </label>

                      <label className="block text-xs font-semibold text-slate-700">
                        WhatsApp Number
                        <input
                          type="tel"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="+1 876 000 0000"
                          className={inputCls}
                        />
                        <p className="mt-1 text-xs text-slate-400">Optional — for faster replies</p>
                      </label>
                    </div>

                    {/* Plan summary recap */}
                    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">You're requesting</p>
                      <p className="mt-1 text-sm font-bold text-slate-900">{pkg?.name}</p>
                      <div className="mt-2 flex gap-5 text-sm">
                        <span className="text-slate-500">Setup: <span className="font-semibold text-slate-900">{formatJMD(setupFee)}</span></span>
                        <span className="text-slate-500">Monthly: <span className="font-semibold text-blue-600">{formatJMD(retainer)}/mo</span></span>
                      </div>
                    </div>

                    {submitStatus === "error" && (
                      <p className="mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
                        Something went wrong. Please try again or message us on WhatsApp.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitStatus === "loading"}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitStatus === "loading" ? (
                        <>
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        "Get My Growth Plan"
                      )}
                    </button>
                    <p className="mt-3 text-center text-xs text-slate-400">
                      No commitment. We'll follow up within 24 hours.
                    </p>
                  </form>
                )}
              </div>

              {/* ── Navigation ──────────────────────────────────────────── */}
              {step < 5 && (
                <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4 sm:px-8">
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.max(1, s - 1))}
                    disabled={step === 1}
                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.min(5, s + 1))}
                    disabled={!canAdvance()}
                    className={`flex items-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition ${
                      canAdvance()
                        ? "bg-blue-600 shadow-sm hover:-translate-y-0.5 hover:bg-blue-700"
                        : "cursor-not-allowed bg-slate-200 text-slate-400"
                    }`}
                  >
                    {step === 4 ? "Looks Good — Continue" : "Next"}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
