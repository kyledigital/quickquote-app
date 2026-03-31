export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 px-6 pt-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-slate-200/80 bg-white/85 px-5 py-3.5 shadow-sm shadow-slate-200/60 backdrop-blur-md sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </div>
          <span className="text-[1.05rem] font-bold tracking-tight text-slate-950">
            QuickQuote
          </span>
        </div>

        {/* Links + CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-500 sm:flex">
            <a href="#services" className="transition hover:text-slate-900">
              Services
            </a>
            <a href="#how" className="transition hover:text-slate-900">
              How it works
            </a>
          </div>
          <a
            href="#quote"
            className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
