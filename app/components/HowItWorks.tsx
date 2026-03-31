const steps = [
  {
    title: "Choose Services",
    description:
      "Select the marketing or web services that match your current growth goals.",
  },
  {
    title: "Get Instant Estimate",
    description:
      "Watch your live total update immediately as you build the right package.",
  },
  {
    title: "Request Your Quote",
    description:
      "Share your business details so we can follow up with a tailored next step.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
            How It Works
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            A faster way to price the services your business needs
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            QuickQuote helps you move from browsing to budgeting in a few simple
            steps.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-base font-semibold text-white shadow-lg shadow-blue-200">
                0{index + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
