import Link from "next/link";
import { Car, Wrench, CircleDot } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <main className="flex-grow">

        {/* Hero */}
        <section className="relative h-52 sm:h-64 md:h-80 overflow-hidden">
          <div
            className="absolute inset-0 scale-105 animate-slow-zoom"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roadside%20Service-Aj8w0DTGpOOdrpAfoRVTI8JkFJV8OH.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <Car className="absolute top-8 left-8 text-white opacity-20 w-8 h-8 sm:w-12 sm:h-12 animate-float" />
          <Wrench className="absolute bottom-8 right-10 text-white opacity-20 w-7 h-7 sm:w-10 sm:h-10 animate-float delay-1000" />
          <CircleDot className="absolute top-14 right-8 text-white opacity-20 w-10 h-10 sm:w-14 sm:h-14 animate-float delay-2000" />
          <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 animate-slide-in-left">
              About Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl animate-slide-in-right">
              Your trusted mobile tyre fitting service across Leicestershire.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

            {/* Text Content */}
            <div className="flex-1 space-y-4 sm:space-y-6 animate-fade-in-left w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary text-balance">
                Professional Mobile Tyre Fitting at Your Doorstep.
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Mobile Tyre Leicestershire is your local expert for fast, reliable tyre fitting and roadside assistance. We bring the garage to you – whether you're at home, work, or stranded on the roadside.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Founded with a simple mission – to eliminate the stress of tyre emergencies – we have become a trusted name across Leicester and surrounding areas. Our fully equipped vans and certified technicians ensure you're back on the road quickly and safely.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-6 sm:mt-8">
                {[
                  { icon: "schedule", value: "24/7", label: "Availability" },
                  { icon: "speed", value: "15–30m", label: "Avg Response" },
                  { icon: "tire_repair", value: "5K+", label: "Tyres Fitted" },
                ].map((stat) => (
                  <div key={stat.label} className="group flex flex-col items-center text-center bg-slate-50 rounded-xl p-3 sm:p-4">
                    <span className="material-symbols-outlined text-accent-orange text-xl sm:text-2xl mb-1 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </span>
                    <span className="text-lg sm:text-2xl font-black text-accent-orange leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full animate-fade-in-right">
              <div className="relative group max-w-lg mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-orange rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-02%20at%206.36.31%20AM-MdlsqXGMwO1zCGDQhErIJNgYxNvu6q.jpeg"
                    alt="Leicestershire Tyres mobile fitting van parked on a residential street"
                    className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Cards */}
        <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 sm:mb-12 animate-fade-in">
              Our Commitment
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {[
                {
                  icon: "target",
                  title: "Our Mission",
                  body: "To deliver prompt, professional mobile tyre fitting across Leicestershire, ensuring no driver is left stranded for long.",
                  delay: "0.1s",
                },
                {
                  icon: "verified",
                  title: "Quality Assured",
                  body: "We use only high-quality tyres and state-of-the-art equipment, with all work carried out by certified fitters.",
                  delay: "0.2s",
                },
                {
                  icon: "handshake",
                  title: "Fair & Transparent",
                  body: "No hidden fees, no surprises. We provide clear pricing and honest advice for every job.",
                  delay: "0.3s",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group relative bg-white p-5 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
                  style={{ animationDelay: card.delay }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl sm:text-3xl text-accent-orange">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-accent-orange transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {card.body}
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent-orange group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-primary to-blue-900 p-8 sm:p-12 md:p-16 text-center animate-scale-in">
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-accent-orange/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl animate-pulse delay-1000" />

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 relative z-10 animate-fade-in-up text-balance">
                Stuck with a tyre issue?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-10 max-w-2xl mx-auto relative z-10 animate-fade-in-up delay-150">
                Our mobile team is on standby 24/7 across Leicestershire.
              </p>
              <Link
                href="tel:07599298404"
                className="inline-flex items-center gap-2 sm:gap-3 bg-white text-primary px-6 sm:px-10 py-3 sm:py-5 rounded-full text-lg sm:text-xl md:text-2xl font-black shadow-2xl hover:scale-105 transition-all duration-300 relative z-10"
              >
                <span className="material-symbols-outlined text-xl sm:text-3xl">call</span>
                07599 298404
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
