import { services, Service } from "./serviceData";

const CATEGORIES = [
  {
    id: "paid-media",
    title: "Paid Media",
    description: "Performance-driven ad campaigns built to generate leads, sales, and measurable ROI.",
    accent: "blue",
    serviceIds: ["google-ads", "meta-ads"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    id: "content-strategy",
    title: "Content & Strategy",
    description: "Content direction and creative strategy that strengthens your brand and lowers your cost per result.",
    accent: "violet",
    serviceIds: ["content-strategy", "video-editing", "social-media-mgmt"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
      </svg>
    ),
  },
  {
    id: "setup-audit",
    title: "Setup & Audit",
    description: "One-time services that build your foundation or fix what's broken in your current campaigns.",
    accent: "emerald",
    serviceIds: ["campaign-audit", "website-setup"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const accentMap: Record<string, { bg: string; text: string; border: string; badge: string; badgeText: string }> = {
  blue:    { bg: "bg-blue-50",    text: "text-blue-700",    border: "border-blue-100",   badge: "bg-blue-600",    badgeText: "text-white" },
  violet:  { bg: "bg-violet-50",  text: "text-violet-700",  border: "border-violet-100", badge: "bg-violet-600",  badgeText: "text-white" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100",badge: "bg-emerald-600", badgeText: "text-white" },
};

function ServiceRow({ service }: { service: Service }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <div className="flex-1">
        <p className="text-sm font-semibold text-slate-900">{service.name}</p>
        <p className="mt-0.5 text-xs leading-5 text-slate-500">{service.description}</p>
      </div>
      <div className="flex flex-shrink-0 items-center gap-3">
        <span className="text-sm font-bold text-slate-900">
          J${service.price.toLocaleString()}
        </span>
        <a
          href="#quote"
          className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          Add →
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to grow — priced clearly
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-500">
            Paid media, content, and strategy services — categorized by what
            they do, not just what they cost.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {CATEGORIES.map((cat) => {
            const a = accentMap[cat.accent];
            const catServices = cat.serviceIds
              .map((id) => services.find((s) => s.id === id))
              .filter(Boolean) as Service[];

            return (
              <div
                key={cat.id}
                className={`rounded-2xl border ${a.border} ${a.bg} p-6`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${a.badge} ${a.badgeText}`}>
                    {cat.icon}
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${a.text}`}>{cat.title}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  {cat.description}
                </p>

                {/* Service rows */}
                <div className="mt-4 divide-y divide-slate-200/70 rounded-xl border border-slate-200/60 bg-white px-4">
                  {catServices.map((service) => (
                    <ServiceRow key={service.id} service={service} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="mt-6 text-center text-xs text-slate-400">
          All prices shown in Jamaican Dollars (JMD) and represent starting rates.
          Final pricing depends on scope, timeline, and campaign complexity.{" "}
          <a href="#quote" className="font-medium text-blue-600 hover:underline">
            Build your plan →
          </a>
        </p>
      </div>
    </section>
  );
}
