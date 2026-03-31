export default function Navbar() {
  return (
    <nav className="px-6 pt-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-slate-200 bg-white/90 px-5 py-3 shadow-[0_15px_40px_-30px_rgba(15,23,42,0.4)] backdrop-blur sm:px-6">
        <div className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
          QuickQuote
        </div>

        <div className="flex items-center gap-5 text-sm font-medium text-slate-600 sm:gap-6 sm:text-base">
          <a href="#services" className="transition hover:text-blue-700">
            Services
          </a>
          <a href="#quote" className="transition hover:text-blue-700">
            Estimate
          </a>
        </div>
      </div>
    </nav>
  );
}
