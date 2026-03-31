const results = [
  {
    theme: "Revenue Scaling",
    themeColor: "bg-blue-50 text-blue-600",
    client: "Enersave Solutions",
    headline: "How a full-funnel Google Ads strategy turned visibility into $1.19M in revenue",
    problem: "The business had traffic but no structured conversion path across Search, Display, and YouTube.",
    approach: "Built a layered campaign architecture targeting each stage of the buying journey — from awareness to high-intent search.",
    mainResult: "$1.19M in attributed revenue",
    mainResultColor: "text-blue-700",
    metrics: [
      { value: "8.4x", label: "ROAS" },
      { value: "185M+", label: "Impressions" },
    ],
    border: "border-blue-100",
  },
  {
    theme: "Budget Efficiency",
    themeColor: "bg-pink-50 text-pink-600",
    client: "FindYello — Yello Media Group",
    headline: "Maximum reach on a $250 budget through smart audience segmentation",
    problem: "A lean media budget meant every dollar had to work harder than average.",
    approach: "Prioritised audience overlap reduction and creative variation to lower CPM and extend reach across Facebook and Instagram.",
    mainResult: "$0.46 CPM — well below industry average",
    mainResultColor: "text-pink-700",
    metrics: [
      { value: "541K+", label: "Impressions" },
      { value: "36,753", label: "Unique Viewers" },
    ],
    border: "border-pink-100",
  },
  {
    theme: "Campaign Storytelling",
    themeColor: "bg-violet-50 text-violet-600",
    client: "Brand Camp 2025 + Refill Hope",
    headline: "From concept to 220K+ views — leading two campaigns end to end",
    problem: "Both campaigns needed more than promotion — they needed a clear narrative and coordinated execution across channels.",
    approach: "Led strategy, creative direction, and video production while managing paid and organic distribution simultaneously.",
    mainResult: "220K+ combined views across both campaigns",
    mainResultColor: "text-violet-700",
    metrics: [
      { value: "3,900+", label: "Interactions" },
      { value: "100K+", label: "Brand Camp Views" },
    ],
    border: "border-violet-100",
  },
];

export default function CampaignResults() {
  return (
    <section className="px-6 py-16 sm:py-20">
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
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {results.map((r) => (
            <article
              key={r.client}
              className={`flex flex-col rounded-2xl border ${r.border} bg-white p-7`}
            >
              {/* Theme badge */}
              <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${r.themeColor}`}>
                {r.theme}
              </span>

              {/* Client */}
              <p className="mt-5 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-400">
                {r.client}
              </p>

              {/* Headline */}
              <h3 className="mt-1.5 text-base font-bold leading-snug text-slate-900">
                {r.headline}
              </h3>

              {/* Divider */}
              <div className="my-4 border-t border-slate-100" />

              {/* Problem + Approach */}
              <p className="text-xs leading-5 text-slate-500">
                <span className="font-semibold text-slate-700">Challenge: </span>
                {r.problem}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                <span className="font-semibold text-slate-700">Approach: </span>
                {r.approach}
              </p>

              {/* Main result */}
              <p className={`mt-5 text-lg font-bold tracking-tight ${r.mainResultColor}`}>
                {r.mainResult}
              </p>

              {/* Supporting metrics */}
              <div className="mt-3 flex gap-5">
                {r.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-sm font-bold text-slate-800">{m.value}</p>
                    <p className="text-xs text-slate-400">{m.label}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 sm:flex-row">
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
