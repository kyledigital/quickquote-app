import CampaignResults from "./components/CampaignResults";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import QuoteForm from "./components/QuoteForm";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Subtle dot-grid texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HowItWorks />
        <CampaignResults />
        <Services />
        <QuoteForm />

        <footer className="border-t border-slate-200 bg-white px-6 py-10">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="font-bold tracking-tight text-slate-900">QuickQuote</p>
                <p className="mt-1 text-sm text-slate-500">
                  A digital growth planning tool by a performance marketer with 65+
                  campaigns and $1M+ in attributed revenue.
                </p>
              </div>
              <div className="flex items-center gap-5 text-sm text-slate-500">
                <a href="#services" className="transition hover:text-slate-900">Services</a>
                <a href="#how" className="transition hover:text-slate-900">How it works</a>
                <a href="#quote" className="transition hover:text-slate-900">Get a quote</a>
              </div>
            </div>
            <div className="mt-8 border-t border-slate-100 pt-6 text-xs text-slate-400">
              © {new Date().getFullYear()} QuickQuote. Built for Caribbean businesses.
              Estimates are for planning purposes and may vary based on project scope.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
