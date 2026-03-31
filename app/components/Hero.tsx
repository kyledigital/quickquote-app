export default function Hero() {
  return (
    <section className="px-6 pb-16 pt-8 sm:pb-20 sm:pt-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 px-6 py-14 text-white shadow-[0_30px_80px_-35px_rgba(29,78,216,0.75)] sm:px-10 lg:px-14 lg:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-blue-50 backdrop-blur">
            Premium-ready quotes for modern Caribbean businesses
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Instant service estimates that help you move faster with confidence
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50/90 sm:text-xl">
            Price your Google Ads, video editing, and website setup in minutes
            with a cleaner quote experience built for serious business owners.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex min-h-13 items-center justify-center rounded-2xl bg-white px-7 py-4 text-base font-semibold text-blue-700 shadow-[0_18px_40px_-20px_rgba(255,255,255,0.9)] transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Start My Estimate
            </a>
            <a
              href="#services"
              className="inline-flex min-h-13 items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-medium text-white backdrop-blur transition hover:bg-white/15"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
