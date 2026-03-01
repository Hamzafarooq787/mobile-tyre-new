import Link from "next/link";
    import { Car, Wrench, CircleDot } from "lucide-react";


export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">

  <main className="flex-grow">

<section className="relative h-[350px] overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center scale-105 animate-slow-zoom"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/about.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Animated Icons */}
  <Car className="absolute top-12 left-12 text-white opacity-20 w-12 h-12 animate-float" />
  <Wrench className="absolute bottom-14 right-16 text-white opacity-20 w-10 h-10 animate-float delay-1000" />
  <CircleDot className="absolute top-20 right-10 text-white opacity-20 w-14 h-14 animate-float delay-2000" />

  <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4 animate-fade-in-up">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 animate-slide-in-left">
      About Us
    </h1>
    <p className="text-lg md:text-xl opacity-90 max-w-2xl animate-slide-in-right">
      Your trusted mobile tyre fitting service across Leicestershire.
    </p>
  </div>
</section>

    {/* About Section with Animation */}
    <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text Content */}
        <div className="flex-1 space-y-6 animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-black text-primary">
            Professional Mobile Tyre Fitting at Your Doorstep.
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Mobile Tyre Leicestershire is your local expert for fast, reliable tyre fitting and roadside assistance. We bring the garage to you – whether you're at home, work, or stranded on the roadside.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Founded with a simple mission – to eliminate the stress of tyre emergencies – we have become a trusted name across Leicester and surrounding areas. Our fully equipped vans and certified technicians ensure you're back on the road quickly and safely.
          </p>

          {/* Stats with Counters Animation - Enhanced */}
          <div className="flex flex-wrap gap-8 mt-8 relative">
            {/* Floating background icons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -left-4 top-0 w-12 h-12 text-primary/5 animate-float-slow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="2"/>
                  <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="absolute right-0 bottom-0 w-16 h-16 text-accent-orange/5 animate-float" style={{ animationDelay: '1s' }}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
            </div>

            {/* Stat 1 */}
            <div className="stat-item group relative z-10 animate-pop-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-accent-orange text-2xl group-hover:rotate-12 transition-transform animate-float-slow">
                  schedule
                </span>
                <h3 className="text-3xl font-black text-accent-orange group-hover:scale-110 transition-transform duration-300">
                  24/7
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                AVAILABILITY
              </span>
            </div>

            {/* Stat 2 */}
            <div className="stat-item group relative z-10 animate-pop-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-accent-orange text-2xl group-hover:rotate-12 transition-transform animate-pulse-slow">
                  speed
                </span>
                <h3 className="text-3xl font-black text-accent-orange group-hover:scale-110 transition-transform duration-300">
                  30-60min
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                AVG RESPONSE
              </span>
            </div>

            {/* Stat 3 */}
            <div className="stat-item group relative z-10 animate-pop-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-accent-orange text-2xl group-hover:rotate-12 transition-transform animate-bounce-gentle">
                  counter_5
                </span>
                <h3 className="text-3xl font-black text-accent-orange group-hover:scale-110 transition-transform duration-300">
                  5K+
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                TYRES FITTED
              </span>
            </div>
          </div>
        </div>

        {/* Image with Animation - Fixed size */}
        <div className="flex-1 animate-fade-in-right">
          <div className="relative group max-w-lg mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-orange rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/about1.png"
                alt="Mobile Tyre Leicestershire technician at work"
                className="w-full h-auto max-h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mission Section with Cards Animation */}
    <section className="py-16 md:py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 animate-fade-in">
          Our Commitment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Mission */}
          <div
            className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 animate-fade-in-up overflow-hidden"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Floating background icons */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -bottom-4 -right-4 w-16 h-16 text-primary/10 animate-float-slow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="2"/>
                  <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="absolute -top-4 -left-4 w-12 h-12 text-accent-orange/10 animate-float" style={{ animationDelay: '1s' }}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl text-accent-orange group-hover:animate-spin-slow">target</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-orange transition-colors">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To deliver prompt, professional mobile tyre fitting across Leicestershire, ensuring no driver is left stranded for long.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent-orange group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          {/* Card 2 - Quality Assured */}
          <div
            className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:-rotate-1 animate-fade-in-up overflow-hidden"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Floating background icons */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-primary/5 animate-spin-slow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl text-accent-orange group-hover:animate-bounce-gentle">verified</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-orange transition-colors">
                Quality Assured
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We use only high-quality tyres and state-of-the-art equipment, with all work carried out by certified fitters.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent-orange group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          {/* Card 3 - Fair & Transparent */}
          <div
            className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up overflow-hidden"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Floating background icons */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 right-4 w-12 h-12 text-primary/10 animate-float">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 w-10 h-10 text-accent-orange/10 animate-float-slow" style={{ animationDelay: '0.5s' }}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 14h-1.5l-1.7-3.4c-.3-.6-1-1-1.7-1H7.9c-.7 0-1.4.4-1.7 1L4.5 14H3v5h2v1c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h8v1c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h2v-5z"/>
                </svg>
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl text-accent-orange group-hover:animate-pulse-slow">handshake</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-orange transition-colors">
                Fair & Transparent
              </h3>
              <p className="text-slate-600 leading-relaxed">
                No hidden fees, no surprises. We provide clear pricing and honest advice for every job.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent-orange group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section with Animation */}
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-blue-900 p-12 md:p-16 text-center group animate-scale-in">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-orange/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl animate-pulse delay-1000"></div>

          {/* Floating dots */}
          <div className="absolute top-10 left-10 w-3 h-3 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-4 h-4 bg-accent-orange/30 rounded-full animate-float delay-500"></div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 relative z-10 animate-fade-in-up">
            Stuck with a tyre issue?
          </h2>

          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto relative z-10 animate-fade-in-up delay-150">
            Our mobile team is on standby 24/7 across Leicestershire.
          </p>

          <Link
            href="tel:07599298404"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent-orange hover:from-primary/90 hover:to-accent-orange/90 text-white px-10 py-5 rounded-full text-2xl font-black shadow-2xl hover:scale-105 hover:shadow-primary/30 transition-all duration-300 relative z-10 animate-soft-bounce group/btn"
          >
            <span className="material-symbols-outlined text-3xl animate-ring">call</span>
            07599 298404
            <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover/btn:scale-150 transition-transform duration-500 opacity-0 group-hover/btn:opacity-100"></span>
          </Link>
        </div>
      </div>
    </section>
  </main>

</div>
  );
}
