import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import QuoteForm from "./components/QuoteForm";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.14),_transparent_35%),linear-gradient(180deg,#f8fbff_0%,#ffffff_35%,#f8fafc_100%)]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <QuoteForm />
    </div>
  );
}
