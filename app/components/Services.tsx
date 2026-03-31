import { services, Service } from "./serviceData";

const CATEGORIES = [
  {
    id: "paid-media",
    title: "Paid Media",
    eyebrow: "Demand capture",
    description:
      "Performance campaigns designed to turn active interest into qualified leads, booked calls, and revenue.",
    highlight: "Fastest path to measurable pipeline",
    accent: "blue",
    serviceIds: ["google-ads", "meta-ads"],
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
  },
  {
    id: "content-strategy",
    title: "Content and Strategy",
    eyebrow: "Brand momentum",
    description:
      "Creative strategy and content systems that sharpen positioning, improve consistency, and support paid performance.",
    highlight: "Best for brands building authority",
    accent: "amber",
    serviceIds: ["content-strategy", "video-editing", "social-media-mgmt"],
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
        />
      </svg>
    ),
  },
  {
    id: "setup-audit",
    title: "Setup and Audit",
    eyebrow: "Fix the foundation",
    description:
      "Strategic one-off work to audit performance, tighten execution, and remove friction before you scale.",
    highlight: "Ideal before a relaunch or reset",
    accent: "emerald",
    serviceIds: ["campaign-audit", "website-setup"],
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const accentMap: Record<
  string,
  {
    shell: string;
    border: string;
    text: string;
    badge: string;
    badgeText: string;
    panel: string;
    price: string;
    button: string;
  }
> = {
  blue: {
    shell: "bg-linear-to-br from-sky-50 via-white to-white",
    border: "border-sky-200/80",
    text: "text-sky-900",
    badge: "bg-sky-600",
    badgeText: "text-white",
    panel: "border-sky-100 bg-slate-50/80",
    price: "text-sky-700",
    button: "hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700",
  },
  amber: {
    shell: "bg-linear-to-br from-amber-50 via-white to-white",
    border: "border-amber-200/80",
    text: "text-amber-950",
    badge: "bg-amber-500",
    badgeText: "text-slate-950",
    panel: "border-amber-100 bg-slate-50/80",
    price: "text-amber-700",
    button: "hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700",
  },
  emerald: {
    shell: "bg-linear-to-br from-emerald-50 via-white to-white",
    border: "border-emerald-200/80",
    text: "text-emerald-950",
    badge: "bg-emerald-600",
    badgeText: "text-white",
    panel: "border-emerald-100 bg-slate-50/80",
    price: "text-emerald-700",
    button: "hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700",
  },
};

function ServiceRow({
  service,
  accent,
}: {
  service: Service;
  accent: (typeof accentMap)[keyof typeof accentMap];
}) {
  return (
    <div className="flex flex-col gap-4 py-5 md:flex-row md:items-start md:justify-between">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-semibold tracking-tight text-slate-950">
            {service.name}
          </p>
          <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 ring-1 ring-slate-200">
            {service.benefit}
          </span>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-600">
          {service.description}
        </p>
      </div>
      <div className="flex flex-col items-start gap-3 md:items-end">
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Starting at
          </p>
          <p className={`text-base font-bold tracking-tight ${accent.price}`}>
            J${service.price.toLocaleString()}
          </p>
        </div>
        <a
          href="#quote"
          className={`inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition ${accent.button}`}
        >
          Add to quote
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
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Strategic services with clear starting prices
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Everything is grouped by the business problem it solves so the
            section feels easy to scan, compare, and build into a quote.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {CATEGORIES.map((cat) => {
            const accent = accentMap[cat.accent];
            const categoryServices = cat.serviceIds
              .map((id) => services.find((service) => service.id === id))
              .filter(Boolean) as Service[];

            return (
              <div
                key={cat.id}
                className={`flex h-full flex-col rounded-[2rem] border ${accent.border} ${accent.shell} p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.35)]`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4">
                    <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {cat.eyebrow}
                    </span>
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${accent.badge} ${accent.badgeText}`}
                      >
                        {cat.icon}
                      </div>
                      <div>
                        <p className={`text-lg font-bold tracking-tight ${accent.text}`}>
                          {cat.title}
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-500">
                          {cat.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    {categoryServices.length} offers
                  </span>
                </div>

                <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
                  {cat.description}
                </p>

                <div
                  className={`mt-6 flex-1 rounded-[1.5rem] border ${accent.panel} p-5`}
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Included services
                    </p>
                    <a
                      href="#quote"
                      className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 transition hover:text-slate-900"
                    >
                      Build quote
                    </a>
                  </div>
                  <div className="divide-y divide-slate-200/80">
                    {categoryServices.map((service) => (
                      <ServiceRow
                        key={service.id}
                        service={service}
                        accent={accent}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white px-6 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700">
              Pricing principle
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
              All prices are shown in Jamaican Dollars (JMD) and represent
              starting rates. Final scope depends on timeline, creative needs,
              campaign complexity, and reporting requirements.
            </p>
          </div>
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Build your plan
          </a>
        </div>
      </div>
    </section>
  );
}
