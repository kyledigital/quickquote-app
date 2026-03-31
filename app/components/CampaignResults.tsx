const results = [
  {
    badge: "Google Ads",
    badgeColor: "bg-blue-100 text-blue-700",
    client: "Enersave Solutions",
    headline: "$1.19M in attributed revenue",
    body: "Full-funnel Google Ads strategy built to grow visibility and conversions at scale across Search, Display, and YouTube.",
    stats: [
      { value: "8.4x", label: "ROAS" },
      { value: "185M+", label: "Impressions" },
      { value: "3.38M", label: "Clicks" },
      { value: "$1.19M", label: "Revenue" },
    ],
    border: "border-blue-100",
    statColor: "text-blue-700",
  },
  {
    badge: "Meta Ads — $250 budget",
    badgeColor: "bg-pink-100 text-pink-700",
    client: "FindYello (Yello Media Group)",
    headline: "541K+ impressions at $0.46 CPM",
    body: "Maximum reach on a lean budget through smart audience segmentation and creative testing across Facebook and Instagram.",
    stats: [
      { value: "$0.46", label: "CPM" },
      { value: "541K+", label: "Impressions" },
      { value: "36,753", label: "Unique Viewers" },
      { value: "3,394", label: "Profile Visits" },
    ],
    border: "border-pink-100",
    statColor: "text-pink-700",
  },
  {
    badge: "Campaign Strategy",
    badgeColor: "bg-violet-100 text-violet-700",
    client: "Brand Camp 2025 + Refill Hope",
    headline: "220K+ views from concept to launch",
    body: "Led Brand Camp 2025 and Refill Hope from strategy through execution — directing creative, producing video, and driving reach across paid and organic channels.",
    stats: [
      { value: "220K+", label: "Campaign Views" },
      { value: "100K+", label: "Brand Camp Views" },
      { value: "3,900+", label: "Interactions" },
      { value: "800+", label: "Brand Camp Engagements" },
    ],
    border: "border-violet-100",
    statColor: "text-violet-700",
  },
];

export default function CampaignResults() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Proven Results
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Real campaigns. Measurable outcomes.
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-500">
            Every estimate in this tool is built on the same thinking that delivered
            these results across Caribbean and international markets.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {results.map((r) => (
            <article
              key={r.client}
              className={`flex flex-col rounded-2xl border ${r.border} bg-white p-7 shadow-sm`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${r.badgeColor}`}>
                  {r.badge}
                </span>
              </div>

              <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-widest text-slate-400">
                {r.client}
              </p>
              <h3 className="mt-1 text-xl font-bold leading-snug text-slate-900">
                {r.headline}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">{r.body}</p>

              {/* Stats grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-6">
                {r.stats.map((s) => (
                  <div key={s.label}>
                    <p className={`text-xl font-bold tracking-tight ${r.statColor}`}>
                      {s.value}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom credibility strip */}
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
