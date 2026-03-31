const stats = [
  { value: "$1.19M", label: "Revenue Generated" },
  { value: "65+", label: "Campaigns Managed" },
  { value: "8.4x", label: "Peak ROAS" },
  { value: "185M+", label: "Impressions Delivered" },
];

export default function Hero() {
  return (
    <section className="px-6 pb-10 pt-14 sm:pb-14 sm:pt-18">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ── Left ── */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
              Digital Growth Planning Tool
            </div>

            <h1 className="mt-5 text-[2.6rem] font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.1rem]">
              Estimate your growth plan{" "}
              <span className="text-blue-600">in 60 seconds</span>
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              Built for businesses that want smarter ads, stronger content, and
              clearer next steps — without the endless back-and-forth of a
              discovery call.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Build My Growth Plan
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-[0.95rem] font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Explore Services
              </a>
            </div>

            {/* ── Stats bar ── */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-200 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>

            {/* ── Credibility ── */}
            <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
              <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-xs leading-5 text-amber-800">
                Built by a performance marketer who has managed{" "}
                <span className="font-semibold">65+ campaigns</span> and generated{" "}
                <span className="font-semibold">$1M+ in attributed revenue</span> across Caribbean and international markets.
              </p>
            </div>
          </div>

          {/* ── Right — step preview ── */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-50 to-slate-100 blur-2xl opacity-70" />
            <div className="relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xl shadow-slate-300/40">

              {/* Progress */}
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Step 1 of 5 — Your Goal
                </p>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div
                      key={n}
                      className={`h-1.5 rounded-full ${n === 1 ? "w-6 bg-blue-600" : "w-1.5 bg-slate-200"}`}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-4 text-base font-bold text-slate-900">
                What is your primary business goal?
              </p>

              <div className="mt-4 space-y-2">
                {[
                  { label: "Get More Leads", active: true },
                  { label: "Increase Sales", active: false },
                  { label: "Launch a Product or Service", active: false },
                  { label: "Improve Ad Performance", active: false },
                  { label: "Build Brand Awareness", active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 ${
                      item.active ? "border-blue-500 bg-blue-50" : "border-slate-200"
                    }`}
                  >
                    <div className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border-2 ${item.active ? "border-blue-600 bg-blue-600" : "border-slate-300"}`}>
                      {item.active && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                    </div>
                    <span className={`text-sm font-medium ${item.active ? "text-blue-900" : "text-slate-600"}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex justify-end">
                <div className="flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white">
                  Next
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
