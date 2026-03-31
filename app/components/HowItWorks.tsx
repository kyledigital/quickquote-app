const steps = [
  {
    number: "01",
    title: "Define Your Goal",
    description: "Tell us what you want to achieve — more leads, more sales, a launch, or better ad performance.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Set Your Budget",
    description: "Choose your monthly ad budget range so we can match the right scale of campaign to your investment.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Pick Your Services",
    description: "Select the specific services you want included — Google Ads, video editing, website setup, or all three.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Get Your Growth Plan",
    description: "Receive a recommended package with setup fee, monthly retainer, and primary focus — built around your inputs.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Four steps to your custom growth plan
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-500">
            No sales calls, no waiting. Answer four questions and walk away with
            a clear, priced marketing plan for your business.
          </p>
        </div>

        <div className="relative mt-12">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 md:block"
            style={{ left: "calc(12.5% + 1.5rem)", right: "calc(12.5% + 1.5rem)" }}
          />
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-100 bg-white text-blue-600 shadow-md shadow-blue-100">
                  {step.icon}
                </div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 translate-x-4 rounded-full bg-blue-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-5 text-sm font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
