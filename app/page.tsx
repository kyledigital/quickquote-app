import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import QuoteForm from "./components/QuoteForm";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Subtle dot grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.45,
        }}
      />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HowItWorks />
        <Services />
        <QuoteForm />
        <footer className="border-t border-slate-200 bg-white px-6 py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
            <span className="font-semibold tracking-tight text-slate-900">
              QuickQuote
            </span>
            <span>© {new Date().getFullYear()} QuickQuote. Built for Caribbean businesses.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
