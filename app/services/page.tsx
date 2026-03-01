import Link from "next/link";

const services = [
  {
    title: "Mobile Tyre Fitting",
    description:
      "Expert fitting delivered straight to your home or workplace. No garage queues. No wasted time. Just comfort and convenience when you need it most.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    image: "/services/s1.jpg",
  },
  {
    title: "Puncture Repairs",
    description:
      "Fast, safe and British Standard repairs to get you confidently back on the road. Because every journey matters.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    image: "/services/s2.jfif",
  },
  {
    title: "Tyre Pressure Checks",
    description:
      "Correct tyre pressure improves fuel efficiency and safety. We ensure your tyres are road-ready and performance-optimised.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l4 4M17 3l-4 4M9 21l4-4M13 21l-4-4M21 13v4M19 15h4M12 7v6l4 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    image: "/services/s3.jpg",
  },
  {
    title: "Seasonal Changes",
    description:
      "Switch between summer and winter tyres effortlessly. Stay safe in every season without lifting a finger.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 2v4M12 18v4M4 12H2h2m16 0h2-2M5.636 5.636l2.828 2.828M15.536 15.536l2.828 2.828M5.636 18.364l2.828-2.828M15.536 8.464l2.828-2.828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    image: "/services/s4.jpg",
  },
  {
    title: "New Tyres",
    description:
      "Premium, mid-range, and budget options available. We help you choose the perfect tyres for your vehicle and driving style.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    image: "/services/s5.avif",
  },
  {
    title: "Part-Worn Tyres",
    description:
      "Quality-tested and affordable. A smart choice when you need reliability without stretching your budget.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    image: "/services/s6.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <main className="flex-grow">

        {/* Hero */}
        <div className="relative w-full h-52 sm:h-64 md:h-80 overflow-hidden bg-slate-900">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz_7WWrTAVPW3G3luRSOPtMo1gnQFUm4u_-2A3BoenXplRTk6RMU1KJmh4ZzO7vj2frFik8BE44vNBr3m5yTxTaZsPqJ0MKIQMZ9yHzGNxX1KfiNefzHdKa90ZkjJPvYks2QVgCJYNzboGU_HteiHt3GFI03-nVjaB9FStx1QefHvZx8rYL-9OqBQgLzLWTuEIHMzJ61xZ8FGMj4h7PfKw6nF0DQEFEL0xrHGOLuONun0sFMAK8CgnlBXGzPvU8hn6jIkajVUxFjQd")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 sm:mb-4">
              Our Services
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-xl leading-relaxed">
              Fast, reliable, and professional roadside assistance across the region. We come to you, 24 hours a day.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-44 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-shrink-0">{service.icon}</div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <Link
                    href="tel:07599298404"
                    className="text-primary font-semibold inline-flex items-center gap-1 text-sm hover:gap-2 transition-all group"
                  >
                    Book now
                    <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto bg-primary rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 md:p-16 relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-3 sm:mb-6 relative z-10">
              Stranded? We&apos;re on the way.
            </h2>
            <p className="text-sm sm:text-base md:text-xl opacity-90 mb-6 sm:mb-10 max-w-2xl mx-auto relative z-10">
              Our operators are standing by 24 hours a day, 7 days a week to assist you with any roadside emergency.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center relative z-10">
              <Link
                href="tel:07599298404"
                className="flex items-center justify-center gap-2 bg-white text-primary px-6 sm:px-10 py-3 sm:py-5 rounded-full text-lg sm:text-2xl font-black shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="material-symbols-outlined text-xl sm:text-3xl">call</span>
                07599 298404
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center border-2 border-white/40 hover:border-white text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full text-base sm:text-lg font-bold transition-all duration-300 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
