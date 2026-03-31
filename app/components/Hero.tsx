export default function Hero() {
  return (
    <section className="px-6 pb-10 pt-12 sm:pb-14 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Performance Marketing
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Estimate your growth plan{" "}
              <span className="text-blue-600">in 60 seconds</span>
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              Answer four quick questions and get a recommended marketing
              package — with setup fees, monthly retainer, and a clear growth
              focus — tailored to your business goals.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Build My Growth Plan
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-base font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Explore Services
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Instant recommendations
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Transparent pricing
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                No discovery calls
              </div>
            </div>

            {/* Credibility line */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
              <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-xs leading-5 text-amber-800">
                Built by a marketer who has generated over{" "}
                <span className="font-semibold">$1M+ in revenue</span> and
                managed <span className="font-semibold">65+ campaigns</span> across the Caribbean.
              </p>
            </div>
          </div>

          {/* Right — step 1 preview card */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-3xl bg-blue-600/8 blur-2xl" />
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/80">
              {/* Step indicator */}
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Step 1 of 5
                </p>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div
                      key={n}
                      className={`h-1.5 rounded-full transition-all ${n === 1 ? "w-6 bg-blue-600" : "w-1.5 bg-slate-200"}`}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-4 text-lg font-bold text-slate-900">
                What is your primary goal?
              </p>

              <div className="mt-4 space-y-2.5">
                {[
                  { label: "Get More Leads", selected: true },
                  { label: "Increase Sales", selected: false },
                  { label: "Launch a Product", selected: false },
                  { label: "Improve Ad Performance", selected: false },
                  { label: "Build Awareness", selected: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
                      item.selected
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border-2 ${item.selected ? "border-blue-600 bg-blue-600" : "border-slate-300"}`}>
                      {item.selected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                    </div>
                    <span className={`text-sm font-medium ${item.selected ? "text-blue-900" : "text-slate-600"}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-end">
                <div className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white">
                  Next →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
