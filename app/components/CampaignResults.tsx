const accentMap: Record<
  string,
  {
    badge: string;
    shell: string;
    glow: string;
    label: string;
    stat: string;
    border: string;
  }
> = {
  blue: {
    badge: "bg-sky-400/15 text-sky-200 ring-1 ring-sky-300/20",
    shell: "from-sky-500/15 via-slate-950 to-slate-950",
    glow: "bg-sky-400/25",
    label: "text-sky-200",
    stat: "text-sky-300",
    border: "border-sky-400/15",
  },
  pink: {
    badge: "bg-rose-400/15 text-rose-200 ring-1 ring-rose-300/20",
    shell: "from-rose-500/15 via-slate-950 to-slate-950",
    glow: "bg-rose-400/20",
    label: "text-rose-200",
    stat: "text-rose-300",
    border: "border-rose-400/15",
  },
  violet: {
    badge: "bg-violet-400/15 text-violet-200 ring-1 ring-violet-300/20",
    shell: "from-violet-500/15 via-slate-950 to-slate-950",
    glow: "bg-violet-400/20",
    label: "text-violet-200",
    stat: "text-violet-300",
    border: "border-violet-400/15",
  },
};

const results = [
  {
    theme: "Revenue Scaling",
    accent: "blue",
    client: "Enersave Solutions",
    headline: "How a full-funnel Google Ads strategy turned visibility into $1.19M in revenue",
    problem:
      "The business had traffic but no structured conversion path across Search, Display, and YouTube.",
    approach:
      "Built a layered campaign architecture targeting each stage of the buying journey, from awareness to high-intent search.",
    mainResult: "$1.19M in attributed revenue",
    metrics: [
      { value: "8.4x", label: "ROAS" },
      { value: "185M+", label: "Impressions" },
    ],
  },
  {
    theme: "Budget Efficiency",
    accent: "pink",
    client: "FindYello - Yello Media Group",
    headline: "Maximum reach on a $250 budget through smart audience segmentation",
    problem:
      "A lean media budget meant every dollar had to work harder than average.",
    approach:
      "Prioritised audience overlap reduction and creative variation to lower CPM and extend reach across Facebook and Instagram.",
    mainResult: "$0.46 CPM, well below industry average",
    metrics: [
      { value: "541K+", label: "Impressions" },
      { value: "36,753", label: "Unique Viewers" },
    ],
  },
  {
    theme: "Campaign Storytelling",
    accent: "violet",
    client: "Brand Camp 2025 + Refill Hope",
    headline: "From concept to 220K+ views, leading two campaigns end to end",
    problem:
      "Both campaigns needed more than promotion. They needed a clear narrative and coordinated execution across channels.",
    approach:
      "Led strategy, creative direction, and video production while managing paid and organic distribution simultaneously.",
    mainResult: "220K+ combined views across both campaigns",
    metrics: [
      { value: "3,900+", label: "Interactions" },
      { value: "100K+", label: "Brand Camp Views" },
    ],
  },
];

export default function CampaignResults() {
  return (
    <section className="relative overflow-hidden px-6 py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(244,114,182,0.16),_transparent_24%),linear-gradient(180deg,#020617_0%,#0f172a_52%,#020617_100%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
            Case Studies
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Proof that reads like strategy, not just a highlight reel
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
            These case studies now lead with business context, strategic decisions,
            and outcome quality, so the section feels closer to a premium agency
            portfolio than a generic results grid.
          </p>
        </div>

        <div className="mt-8 grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur sm:grid-cols-3">
          {[
            { label: "Campaigns managed", value: "65+" },
            { label: "Attributed revenue", value: "$1M+" },
            { label: "Core channels", value: "Google, Meta, Content" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          {results.map((r) => {
            const a = accentMap[r.accent];
            return (
              <article
                key={r.client}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border ${a.border} bg-linear-to-br ${a.shell} p-7 shadow-[0_30px_80px_-50px_rgba(2,6,23,0.95)]`}
              >
                <div className={`pointer-events-none absolute -right-10 top-0 h-36 w-36 rounded-full blur-3xl ${a.glow}`} />

                <div className="relative flex flex-1 flex-col">
                  <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${a.badge}`}>
                    {r.theme}
                  </span>

                  <p className={`mt-6 text-[11px] font-bold uppercase tracking-[0.26em] ${a.label}`}>
                    {r.client}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-white">
                    {r.headline}
                  </h3>

                  <div className="mt-6 grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                        Challenge
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{r.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                        Strategic move
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{r.approach}</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Signature result
                    </p>
                    <p className={`mt-3 text-3xl font-bold leading-tight tracking-tight ${a.stat}`}>
                      {r.mainResult}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                      {r.metrics.map((m) => (
                        <div key={m.label} className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                          <p className={`text-lg font-bold tracking-tight ${a.stat}`}>{m.value}</p>
                          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-5 backdrop-blur sm:flex-row">
          <p className="max-w-3xl text-sm font-medium leading-7 text-slate-300">
            65+ campaigns managed across Google Ads, Meta Ads, and content strategy, spanning Caribbean and international markets.
          </p>
          <a
            href="#quote"
            className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
          >
            Get your plan -&gt;
          </a>
        </div>
      </div>
    </section>
  );
}
