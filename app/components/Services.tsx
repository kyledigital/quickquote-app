import { services } from "./serviceData";

const accents = [
  "from-blue-600 to-cyan-500",
  "from-slate-900 to-slate-700",
  "from-sky-600 to-blue-700",
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Essential growth services with transparent starting prices
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Built for businesses that need polished execution without waiting on
            a long discovery call.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.4)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-35px_rgba(37,99,235,0.35)]"
            >
              <div
                className={`inline-flex rounded-2xl bg-gradient-to-br ${accents[index]} px-4 py-2 text-sm font-semibold text-white shadow-lg`}
              >
                {service.name}
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                {service.name}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {service.description}
              </p>
              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                  Investment
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-blue-700">
                  {service.benefit}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
