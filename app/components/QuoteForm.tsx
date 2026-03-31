"use client";

import { useState } from "react";
import { services } from "./serviceData";

// Sign up at https://formspree.io and replace YOUR_FORM_ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

// ─── Step labels ─────────────────────────────────────────────────────────────
const STEP_LABELS = ["Your Goal", "Your Support", "Your Budget", "Your Plan", "Connect"];

// ─── Step 1 — Goals ──────────────────────────────────────────────────────────
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
    label: "Launch a Product or Service",
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
    sub: "Cut waste and scale what's already working",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
  },
  {
    id: "build-awareness",
    label: "Build Brand Awareness",
    sub: "Get your brand in front of the right audience",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
];

// ─── Step 2 — Support types ───────────────────────────────────────────────────
const SUPPORT_OPTIONS = [
  {
    id: "google-ads",
    label: "Google Ads Management",
    sub: "Search, Display & YouTube campaigns built to convert",
    serviceIds: ["google-ads"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
  {
    id: "meta-ads",
    label: "Meta Ads Campaign",
    sub: "Facebook & Instagram paid social that reaches the right audience",
    serviceIds: ["meta-ads"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
  {
    id: "campaign-audit",
    label: "Campaign Audit",
    sub: "A clear breakdown of what's working, what's wasting budget, and where to grow",
    serviceIds: ["campaign-audit"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    id: "content-strategy",
    label: "Content & Growth Strategy",
    sub: "Content direction, campaign ideas, and performance-focused execution",
    serviceIds: ["content-strategy", "video-editing"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    id: "landing-page",
    label: "Landing Page Build",
    sub: "A conversion-focused page built for your ads or product launch",
    serviceIds: ["website-setup"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    id: "full-package",
    label: "Full Growth Package",
    sub: "Ads, content, strategy, and execution — all coordinated around one goal",
    serviceIds: ["google-ads", "meta-ads", "content-strategy", "video-editing", "website-setup"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

// ─── Step 3 — Budgets ─────────────────────────────────────────────────────────
const BUDGETS = [
  { id: "starter", label: "Under J$50,000 / mo", sub: "Getting started" },
  { id: "growth", label: "J$50,000 – J$150,000 / mo", sub: "Growing fast" },
  { id: "scale", label: "J$150,000 – J$300,000 / mo", sub: "Scaling up" },
  { id: "premium", label: "J$300,000+ / mo", sub: "Full performance" },
];

// ─── Package recommendations ──────────────────────────────────────────────────
const PACKAGES: Record<string, {
  name: string;
  focus: string;
  why: string;
  baseSetup: number;
  baseRetainer: number;
}> = {
  "get-leads": {
    name: "Lead Generation Package",
    focus: "Leads & Conversions",
    why: "Google Ads and paid social are the fastest way to put your brand in front of people already searching for what you offer. Combined with a clear landing page, this plan is built to drive consistent, qualified lead flow from day one.",
    baseSetup: 25000,
    baseRetainer: 35000,
  },
  "increase-sales": {
    name: "Sales Growth Package",
    focus: "Revenue & Sales",
    why: "This plan targets high-intent traffic and uses conversion-optimised creative to move buyers further down the funnel faster. Every component is aligned to closing sales, not just generating clicks.",
    baseSetup: 30000,
    baseRetainer: 45000,
  },
  "launch-product": {
    name: "Product Launch Package",
    focus: "Awareness & Conversions",
    why: "A successful launch requires coordinated paid, organic, and content execution. This plan gives you the visibility and first-week momentum you need — across ads, content, and landing experience — to make the launch count.",
    baseSetup: 45000,
    baseRetainer: 60000,
  },
  "improve-ads": {
    name: "Performance Optimization",
    focus: "ROI & ROAS",
    why: "If your campaigns are running but not delivering, the problem is almost always in targeting, creative, or structure. An audit identifies the waste fast. Then we rebuild what actually converts and scale from there.",
    baseSetup: 20000,
    baseRetainer: 30000,
  },
  "build-awareness": {
    name: "Brand Awareness Package",
    focus: "Reach & Engagement",
    why: "Awareness at scale comes from consistent, well-distributed content amplified by paid media. This plan builds recognizable presence over time — so when your audience is ready to buy, your brand is already familiar.",
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

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatJMD(n: number) {
  return `J$${n.toLocaleString("en-US")}`;
}

function round(n: number, to = 1000) {
  return Math.round(n / to) * to;
}

function getIncludedServices(selectedSupport: string[]) {
  const ids = new Set<string>();
  selectedSupport.forEach((supportId) => {
    const opt = SUPPORT_OPTIONS.find((o) => o.id === supportId);
    opt?.serviceIds.forEach((sid) => ids.add(sid));
  });
  return Array.from(ids);
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState("");
  const [selectedSupport, setSelectedSupport] = useState<string[]>([]);
  const [budget, setBudget] = useState("");

  // Contact fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [projectNotes, setProjectNotes] = useState("");

  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; businessName?: string }>({});

  // ── Derived ──
  const pkg = PACKAGES[goal];
  const multiplier = BUDGET_MULTIPLIERS[budget] ?? 1;
  const setupFee = pkg ? round(pkg.baseSetup * multiplier) : 0;
  const retainer = pkg ? round(pkg.baseRetainer * multiplier) : 0;
  const includedServiceIds = getIncludedServices(selectedSupport);
  const includedServices = includedServiceIds
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean) as typeof services;
  const goalLabel = GOALS.find((g) => g.id === goal)?.label ?? "";
  const budgetLabel = BUDGETS.find((b) => b.id === budget)?.label ?? "";
  const supportLabels = selectedSupport
    .map((id) => SUPPORT_OPTIONS.find((o) => o.id === id)?.label)
    .filter(Boolean)
    .join(", ");

  // ── Validation ──
  const canAdvance = () => {
    if (step === 1) return !!goal;
    if (step === 2) return selectedSupport.length > 0;
    if (step === 3) return !!budget;
    return true;
  };

  const validateContact = () => {
    const e: typeof errors = {};
    if (!fullName.trim()) e.fullName = "Full name is required.";
    if (!email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email address.";
    if (!businessName.trim()) e.businessName = "Business or brand name is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const toggleSupport = (id: string) => {
    // "full-package" is exclusive
    if (id === "full-package") {
      setSelectedSupport((prev) => prev.includes("full-package") ? [] : ["full-package"]);
      return;
    }
    setSelectedSupport((prev) => {
      const without = prev.filter((s) => s !== "full-package");
      return without.includes(id) ? without.filter((s) => s !== id) : [...without, id];
    });
  };

  // ── Submit ──
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateContact()) return;
    setSubmitStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          whatsapp: whatsapp || "Not provided",
          businessName,
          projectNotes: projectNotes || "None",
          goal: goalLabel,
          supportAreas: supportLabels,
          budget: budgetLabel,
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

  // ── Styles ──
  const inputCls = "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
  const inputErrCls = "mt-1.5 w-full rounded-xl border border-red-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:ring-2 focus:ring-red-100";

  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <section id="quote" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Growth Plan Estimator
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Let's build your plan
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-500">
              Five focused questions. One tailored recommendation. No sales calls,
              no waiting.
            </p>
          </div>
          {step > 1 && (
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {goal && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {goalLabel}
                </span>
              )}
              {selectedSupport.length > 0 && step > 2 && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  {selectedSupport.length} support area{selectedSupport.length > 1 ? "s" : ""}
                </span>
              )}
              {budget && step > 3 && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {budgetLabel}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Success screen */}
        {submitStatus === "success" ? (
          <div className="mx-auto max-w-lg rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              You're all set, {fullName.split(" ")[0]}!
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Your growth plan request has been received. Expect a reply at{" "}
              <span className="font-semibold text-slate-900">{email}</span> within 24 hours.
            </p>
            <div className="mx-auto mt-6 rounded-xl border border-slate-200 bg-white p-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Your recommended plan</p>
              <p className="mt-1 text-base font-bold text-slate-900">{pkg?.name}</p>
              <div className="mt-3 flex gap-6 text-sm">
                <div>
                  <p className="text-xs text-slate-400">Setup Fee</p>
                  <p className="mt-0.5 text-lg font-bold text-blue-600">{formatJMD(setupFee)}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Monthly Retainer</p>
                  <p className="mt-0.5 text-lg font-bold text-blue-600">{formatJMD(retainer)}/mo</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setStep(1); setGoal(""); setSelectedSupport([]); setBudget("");
                setFullName(""); setEmail(""); setWhatsapp(""); setBusinessName(""); setProjectNotes("");
                setSubmitStatus("idle"); setErrors({});
              }}
              className="mt-5 text-sm font-medium text-blue-600 hover:underline"
            >
              Start over
            </button>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl">

            {/* Progress indicator */}
            <div className="mb-8">
              <div className="flex items-center">
                {STEP_LABELS.map((label, i) => {
                  const n = i + 1;
                  const done = step > n;
                  const active = step === n;
                  return (
                    <div key={label} className="flex flex-1 items-center">
                      <div className="flex flex-col items-center">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-bold transition-all ${
                          done ? "border-blue-600 bg-blue-600 text-white"
                               : active ? "border-blue-600 bg-white text-blue-600"
                               : "border-slate-300 bg-white text-slate-400"
                        }`}>
                          {done ? (
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          ) : n}
                        </div>
                        <span className={`mt-1 hidden text-[10px] font-semibold sm:block ${active ? "text-blue-600" : done ? "text-slate-500" : "text-slate-400"}`}>
                          {label}
                        </span>
                      </div>
                      {i < STEP_LABELS.length - 1 && (
                        <div className={`mb-4 h-px flex-1 sm:mb-0 ${done ? "bg-blue-600" : "bg-slate-200"}`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Card */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="p-6 sm:p-8">

                {/* ── Step 1: Goal ────────────────────────────────────── */}
                {step === 1 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Step 1</p>
                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      What is your primary business goal?
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Choose the outcome that matters most right now. This shapes your entire plan.
                    </p>
                    <div className="mt-6 space-y-2.5">
                      {GOALS.map((g) => {
                        const selected = goal === g.id;
                        return (
                          <button
                            key={g.id}
                            type="button"
                            onClick={() => setGoal(g.id)}
                            className={`w-full rounded-xl border px-5 py-4 text-left transition ${
                              selected
                                ? "border-blue-500 bg-blue-50 shadow-sm shadow-blue-100"
                                : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition ${selected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                                {g.icon}
                              </div>
                              <div className="flex-1">
                                <p className={`text-sm font-semibold ${selected ? "text-blue-900" : "text-slate-900"}`}>{g.label}</p>
                                <p className="mt-0.5 text-xs text-slate-500">{g.sub}</p>
                              </div>
                              <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition ${selected ? "border-blue-600 bg-blue-600" : "border-slate-300"}`}>
                                {selected && <div className="h-2 w-2 rounded-full bg-white" />}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ── Step 2: Support ─────────────────────────────────── */}
                {step === 2 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Step 2</p>
                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      What kind of support do you need?
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Select one or more. Choosing the{" "}
                      <span className="font-medium text-slate-700">Full Growth Package</span> includes everything.
                    </p>
                    <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {SUPPORT_OPTIONS.map((opt) => {
                        const selected = selectedSupport.includes(opt.id);
                        const isFullPackage = opt.id === "full-package";
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => toggleSupport(opt.id)}
                            className={`rounded-xl border px-4 py-4 text-left transition ${
                              selected
                                ? isFullPackage
                                  ? "border-slate-800 bg-slate-950 shadow-sm"
                                  : "border-blue-500 bg-blue-50 shadow-sm shadow-blue-100"
                                : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                            } ${isFullPackage && !selected ? "border-dashed border-slate-300" : ""}`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition ${
                                selected
                                  ? isFullPackage ? "bg-white/10 text-white" : "bg-blue-600 text-white"
                                  : "bg-slate-100 text-slate-500"
                              }`}>
                                {opt.icon}
                              </div>
                              <div className="flex-1">
                                <p className={`text-sm font-semibold leading-snug ${selected && isFullPackage ? "text-white" : selected ? "text-blue-900" : "text-slate-900"}`}>
                                  {opt.label}
                                </p>
                                <p className={`mt-1 text-xs leading-4 ${selected && isFullPackage ? "text-slate-400" : "text-slate-500"}`}>
                                  {opt.sub}
                                </p>
                              </div>
                              <div className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border-2 transition ${
                                selected
                                  ? isFullPackage ? "border-white bg-white" : "border-blue-600 bg-blue-600"
                                  : "border-slate-300"
                              }`}>
                                {selected && (
                                  <svg className={`h-2.5 w-2.5 ${isFullPackage ? "text-slate-900" : "text-white"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                  </svg>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ── Step 3: Budget ──────────────────────────────────── */}
                {step === 3 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Step 3</p>
                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      What is your monthly marketing budget?
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      This is your total ad spend budget — not the service fee. It helps us recommend the right scale of campaign.
                    </p>
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
                            <div className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition ${selected ? "border-blue-600 bg-blue-600" : "border-slate-300"}`}>
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

                {/* ── Step 4: Plan ────────────────────────────────────── */}
                {step === 4 && pkg && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Step 4 — Your Recommendation</p>
                    <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{pkg.name}</h3>
                        <p className="mt-1 text-sm text-slate-500">
                          Based on your goal to{" "}
                          <span className="font-medium text-slate-700">{goalLabel.toLowerCase()}</span>
                        </p>
                      </div>
                      <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {pkg.focus}
                      </span>
                    </div>

                    {/* Why this plan */}
                    <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Why this plan works</p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{pkg.why}</p>
                    </div>

                    {/* Pricing */}
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-slate-200 bg-white p-5">
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Setup Fee</p>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{formatJMD(setupFee)}</p>
                        <p className="mt-1 text-xs text-slate-400">One-time</p>
                      </div>
                      <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">Monthly Retainer</p>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-blue-700">{formatJMD(retainer)}</p>
                        <p className="mt-1 text-xs text-blue-400">Per month</p>
                      </div>
                    </div>

                    {/* Included services */}
                    {includedServices.length > 0 && (
                      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">What's Included</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {includedServices.map((s) => (
                            <span key={s.id} className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                              <svg className="h-3 w-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                              {s.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Dark summary row */}
                    <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-950 px-5 py-4 text-white">
                      <div>
                        <p className="text-xs font-medium text-slate-400">Primary Focus</p>
                        <p className="mt-0.5 text-sm font-semibold">{pkg.focus}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium text-slate-400">Budget Range</p>
                        <p className="mt-0.5 text-sm font-semibold">{budgetLabel}</p>
                      </div>
                    </div>

                    {/* Credibility */}
                    <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <p className="text-xs leading-5 text-amber-800">
                        These estimates are built by a performance marketer with{" "}
                        <span className="font-semibold">65+ campaigns managed</span> and{" "}
                        <span className="font-semibold">$1M+ in attributed revenue</span> — not a generic pricing table.
                      </p>
                    </div>
                  </div>
                )}

                {/* ── Step 5: Contact ─────────────────────────────────── */}
                {step === 5 && (
                  <form onSubmit={handleSubmit} noValidate>
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Step 5</p>
                    <h3 className="mt-1 text-xl font-bold text-slate-900">Let's get in touch</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Share your details and we'll send your plan along with a clear next step — within 24 hours.
                    </p>

                    <div className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block text-xs font-semibold text-slate-700">
                          Full Name <span className="text-red-500">*</span>
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => { setFullName(e.target.value); if (errors.fullName) setErrors((p) => ({ ...p, fullName: undefined })); }}
                            placeholder="Jane Smith"
                            className={errors.fullName ? inputErrCls : inputCls}
                          />
                          {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
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
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block text-xs font-semibold text-slate-700">
                          Business / Brand Name <span className="text-red-500">*</span>
                          <input
                            type="text"
                            value={businessName}
                            onChange={(e) => { setBusinessName(e.target.value); if (errors.businessName) setErrors((p) => ({ ...p, businessName: undefined })); }}
                            placeholder="Island Ventures"
                            className={errors.businessName ? inputErrCls : inputCls}
                          />
                          {errors.businessName && <p className="mt-1 text-xs text-red-600">{errors.businessName}</p>}
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
                          <p className="mt-1 text-[10px] text-slate-400">Optional — for faster replies</p>
                        </label>
                      </div>

                      <label className="block text-xs font-semibold text-slate-700">
                        Project Notes
                        <textarea
                          value={projectNotes}
                          onChange={(e) => setProjectNotes(e.target.value)}
                          placeholder="Tell us anything useful — your timeline, current challenges, what you've already tried, or specific goals."
                          rows={4}
                          className={`${inputCls} resize-none`}
                        />
                        <p className="mt-1 text-[10px] text-slate-400">Optional — the more context, the better</p>
                      </label>
                    </div>

                    {/* Plan recap */}
                    <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">You're requesting</p>
                      <p className="mt-1 text-sm font-bold text-slate-900">{pkg?.name}</p>
                      <div className="mt-2 flex flex-wrap gap-5 text-sm">
                        <span className="text-slate-500">
                          Setup:{" "}
                          <span className="font-semibold text-slate-900">{formatJMD(setupFee)}</span>
                        </span>
                        <span className="text-slate-500">
                          Monthly:{" "}
                          <span className="font-semibold text-blue-600">{formatJMD(retainer)}/mo</span>
                        </span>
                      </div>
                    </div>

                    {submitStatus === "error" && (
                      <p className="mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
                        Something went wrong. Please try again or contact us directly on WhatsApp.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitStatus === "loading"}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
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
                        "Send Me My Growth Plan →"
                      )}
                    </button>
                    <p className="mt-3 text-center text-xs text-slate-400">
                      No commitment. We follow up within 24 hours with a clear next step.
                    </p>
                  </form>
                )}
              </div>

              {/* Navigation */}
              {step < 5 && (
                <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/60 px-6 py-4 sm:px-8">
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
                    className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold text-white transition ${
                      canAdvance()
                        ? "bg-blue-600 hover:-translate-y-0.5 hover:bg-blue-700 shadow-sm shadow-blue-200"
                        : "cursor-not-allowed bg-slate-200 text-slate-400"
                    }`}
                  >
                    {step === 4 ? "This looks right — continue" : "Next"}
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
