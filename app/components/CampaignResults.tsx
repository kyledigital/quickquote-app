const accentMap: Record<string, {
  badge: string;
  topBar: string;
  clientText: string;
  resultText: string;
  metricValue: string;
  divider: string;
}> = {
  blue: {
    badge:       "bg-blue-600 text-white",
    topBar:      "bg-blue-600",
    clientText:  "text-blue-700",
    resultText:  "text-blue-700",
    metricValue: "text-blue-800",
    divider:     "border-blue-100",
  },
  pink: {
    badge:       "bg-pink-600 text-white",
    topBar:      "bg-pink-600",
    clientText:  "text-pink-700",
    resultText:  "text-pink-700",
    metricValue: "text-pink-800",
    divider:     "border-pink-100",
  },
  violet: {
    badge:       "bg-violet-600 text-white",
    topBar:      "bg-violet-600",
    clientText:  "text-violet-700",
    resultText:  "text-violet-700",
    metricValue: "text-violet-800",
    divider:     "border-violet-100",
  },
};

const results = [
  {
    theme: "Revenue Scaling",
    accent: "blue",
    client: "Enersave Solutions",
    headline: "How a full-funnel Google Ads strategy turned visibility into $1.19M in revenue",
    problem: "The business had traffic but no structured conversion path across Search, Display, and YouTube.",
    approach: "Built a layered campaign architecture targeting each stage of the buying journey — from awareness to high-intent search.",
    mainResult: "$1.19M in attributed revenue",
    metrics: [
      { value: "8.4x", label: "ROAS" },
      { value: "185M+", label: "Impressions" },
    ],
  },
  {
    theme: "Budget Efficiency",
    accent: "pink",
    client: "FindYello — Yello Media Group",
    headline: "Maximum reach on a $250 budget through smart audience segmentation",
    problem: "A lean media budget meant every dollar had to work harder than average.",
    approach: "Prioritised audience overlap reduction and creative variation to lower CPM and extend reach across Facebook and Instagram.",
    mainResult: "$0.46 CPM — well below industry average",
    metrics: [
      { value: "541K+", label: "Impressions" },
      { value: "36,753", label: "Unique Viewers" },
    ],
  },
  {
    theme: "Campaign Storytelling",
    accent: "violet",
    client: "Brand Camp 2025 + Refill Hope",
    headline: "From concept to 220K+ views — leading two campaigns end to end",
    problem: "Both campaigns needed more than promotion — they needed a clear narrative and coordinated execution across channels.",
    approach: "Led strategy, creative direction, and video production while managing paid and organic distribution simultaneously.",
    mainResult: "220K+ combined views across both campaigns",
    metrics: [
      { value: "3,900+", label: "Interactions" },
      { value: "100K+", label: "Brand Camp Views" },
    ],
  },
];

export default function CampaignResults() {
  return (
    <section className="border-y border-slate-200 bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Case Studies
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Strategy behind the results
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-500">
            Not just what happened — but how and why it worked.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          {results.map((r) => {
            const a = accentMap[r.accent];
            return (
              <article
                key={r.client}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-200/60"
              >
                {/* Top accent bar */}
                <div className={`h-1 w-full ${a.topBar}`} />

                {/* Card body */}
                <div className="flex flex-1 flex-col p-7">

                  {/* Theme badge */}
                  <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${a.badge}`}>
                    {r.theme}
                  </span>

                  {/* Client */}
                  <p className={`mt-5 text-[0.7rem] font-bold uppercase tracking-widest ${a.clientText}`}>
                    {r.client}
                  </p>

                  {/* Headline */}
                  <h3 className="mt-1.5 text-base font-bold leading-snug text-slate-900">
                    {r.headline}
                  </h3>

                  {/* Divider */}
                  <div className={`my-5 border-t ${a.divider}`} />

                  {/* Challenge + Approach */}
                  <div className="space-y-3">
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-900">Challenge</p>
                      <p className="mt-0.5 text-xs leading-5 text-slate-500">{r.problem}</p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-900">Approach</p>
                      <p className="mt-0.5 text-xs leading-5 text-slate-500">{r.approach}</p>
                    </div>
                  </div>

                  {/* Main result — pinned to bottom */}
                  <div className="mt-auto pt-6">
                    <p className="text-[0.6rem] font-bold uppercase tracking-widest text-slate-400">Result</p>
                    <p className={`mt-1 text-2xl font-bold leading-tight tracking-tight ${a.resultText}`}>
                      {r.mainResult}
                    </p>

                    {/* Supporting metrics */}
                    <div className="mt-4 flex gap-5 border-t border-slate-100 pt-4">
                      {r.metrics.map((m) => (
                        <div key={m.label}>
                          <p className={`text-sm font-bold ${a.metricValue}`}>{m.value}</p>
                          <p className="text-[0.65rem] font-medium uppercase tracking-wide text-slate-400">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom credibility strip */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 sm:flex-row">
          <p className="text-sm font-medium text-slate-600">
            65+ campaigns managed across Google Ads, Meta Ads, and content — Caribbean and international markets.
          </p>
          <a
            href="#quote"
            className="flex-shrink-0 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Get your plan →
          </a>
        </div>

      </div>
    </section>
  );
}
