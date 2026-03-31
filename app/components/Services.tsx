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
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    id: "content-strategy",
    title: "Content & Strategy",
    eyebrow: "Brand momentum",
    description:
      "Creative strategy and content systems that sharpen positioning, improve consistency, and support paid performance.",
    highlight: "Best for brands building authority",
    accent: "amber",
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
    eyebrow: "Fix the foundation",
    description:
      "Strategic one-off work to audit performance, tighten execution, and remove friction before you scale.",
    highlight: "Ideal before a relaunch or reset",
    accent: "emerald",
    serviceIds: ["campaign-audit", "website-setup"],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const accentMap: Record<
  string,
  {
    shell: string;
    halo: string;
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
    shell: "bg-linear-to-br from-sky-100 via-white to-white",
    halo: "bg-sky-400/20",
    border: "border-sky-200/70",
    text: "text-sky-900",
    badge: "bg-sky-600",
    badgeText: "text-white",
    panel: "border-sky-100/80 bg-white/90",
    price: "text-sky-700",
    button: "hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700",
  },
  amber: {
    shell: "bg-linear-to-br from-amber-100 via-white to-white",
    halo: "bg-amber-400/20",
    border: "border-amber-200/70",
    text: "text-amber-950",
    badge: "bg-amber-500",
    badgeText: "text-slate-950",
    panel: "border-amber-100/80 bg-white/90",
    price: "text-amber-700",
    button: "hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700",
  },
  emerald: {
    shell: "bg-linear-to-br from-emerald-100 via-white to-white",
    halo: "bg-emerald-400/20",
    border: "border-emerald-200/70",
    text: "text-emerald-950",
    badge: "bg-emerald-600",
    badgeText: "text-white",
    panel: "border-emerald-100/80 bg-white/90",
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
    <div className="grid gap-4 py-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-semibold tracking-tight text-slate-950">{service.name}</p>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {service.benefit}
          </span>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-600">{service.description}</p>
      </div>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
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
          Add to quote -&gt;
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-sky-100/60 via-white to-transparent" />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
            Services
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            A sharper service menu for brands that want growth with structure
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Clear pricing matters, but so does context. These offers are grouped by
            the business problem they solve, so the section feels strategic instead
            of transactional.
          </p>
        </div>

        <div className="mt-6 grid gap-4 rounded-[2rem] border border-slate-200/80 bg-white/80 p-5 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)] backdrop-blur sm:grid-cols-3">
          {[
            { label: "Average launch speed", value: "7-14 days" },
            { label: "Built for", value: "Lead gen + brand growth" },
            { label: "Pricing style", value: "Clear starting rates" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200/80 bg-slate-50 px-5 py-4 text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                {item.label}
              </p>
              <p className="mt-2 text-base font-semibold tracking-tight text-slate-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {CATEGORIES.map((cat) => {
            const a = accentMap[cat.accent];
            const catServices = cat.serviceIds
              .map((id) => services.find((s) => s.id === id))
              .filter(Boolean) as Service[];

            return (
              <div
                key={cat.id}
                className={`group relative overflow-hidden rounded-[2rem] border ${a.border} ${a.shell} p-7 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.32)] transition duration-300 hover:-translate-y-1`}
              >
                <div className={`pointer-events-none absolute -right-10 top-6 h-28 w-28 rounded-full blur-3xl ${a.halo}`} />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="space-y-4">
                    <span className="inline-flex rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500 backdrop-blur">
                      {cat.eyebrow}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${a.badge} ${a.badgeText} shadow-lg shadow-slate-900/10`}>
                        {cat.icon}
                      </div>
                      <div>
                        <p className={`text-lg font-bold tracking-tight ${a.text}`}>{cat.title}</p>
                        <p className="mt-1 text-sm font-medium text-slate-500">{cat.highlight}</p>
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                    {catServices.length} offers
                  </span>
                </div>

                <p className="relative mt-5 max-w-sm text-sm leading-7 text-slate-600">
                  {cat.description}
                </p>

                <div className={`relative mt-6 overflow-hidden rounded-[1.6rem] border ${a.panel} p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]`}>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                      Included services
                    </p>
                    <a
                      href="#quote"
                      className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-900"
                    >
                      Build quote
                    </a>
                  </div>
                  <div className="divide-y divide-slate-200/80">
                    {catServices.map((service) => (
                      <ServiceRow key={service.id} service={service} accent={a} />
                    ))}
                  </div>
                </div>

                <div className="relative mt-5 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 backdrop-blur">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Delivery note
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Every engagement is scoped around business goals, channel fit, and
                    the level of creative support needed to execute well.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-6 text-white shadow-[0_24px_70px_-42px_rgba(15,23,42,0.7)] sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-300">
              Pricing principle
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              All prices are shown in Jamaican Dollars (JMD) and represent starting
              rates. Final scope depends on timeline, creative needs, campaign
              complexity, and reporting requirements.
            </p>
          </div>
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
          >
            Build your plan -&gt;
          </a>
        </div>
      </div>
    </section>
  );
}
