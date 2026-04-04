import Link from "next/link";

const services = [
  {
    title: "Mobile Tyre Fitting",
    description:
      "Professional mobile tyre fitting at your home, workplace, or roadside anywhere in Leicestershire. We supply and fit tyres quickly and safely with expert service you can rely on.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New%20Updated%20Mobile%20tyre%20fitting%20image-kU9CL4kql0xSeolZsycNkYuQaX2ysV.jpeg",
  },
  {
    title: "Mobile Tyre Repair",
    description:
      "Fast and reliable mobile tyre repair service for punctures and minor damage. Our technicians assess the tyre condition and repair it efficiently to get you back on the road safely.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile%20Tyre%20Repair-V7LqewA9HOybjycnn5DG7P0zi0L0r8.jpeg",
  },
  {
    title: "Mobile Tyre Replacement",
    description:
      "Need a new tyre urgently? We provide quick mobile tyre replacement with quality tyres fitted at your location, saving you time and hassle.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l4 4M17 3l-4 4M9 21l4-4M13 21l-4-4M21 13v4M19 15h4M12 7v6l4 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-02%20at%206.36.31%20AM-mcrzHXtZ4uwvhgUpd1Ggp3Fwk3ecbz.jpeg",
  },
  {
    title: "Mobile Tyre At Your Location",
    description:
      "Wherever you are in Leicestershire, our team comes directly to you. We deliver convenient, stress-free tyre services at your exact location.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 2v4M12 18v4M4 12H2h2m16 0h2-2M5.636 5.636l2.828 2.828M15.536 15.536l2.828 2.828M5.636 18.364l2.828-2.828M15.536 8.464l2.828-2.828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile-Tyre-At-Your-Location-opt-gSnbsRHz0dmyQT2hAEYrPE9gJhiMYZ.webp",
  },
  {
    title: "Flat Tyres Service",
    description:
      "If you have a flat tyre, we respond quickly with the right tools and expertise to repair or replace it on the spot, ensuring minimal disruption to your journey.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flat%20Tyre%20Service-zKwuG1jGvepf8rdJY7qqbisJgKsAQa.jpeg",
  },
  {
    title: "Motorway Tyre Fitting",
    description:
      "Stranded on the motorway? Our emergency motorway tyre fitting service provides fast assistance to keep you safe and moving again.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New%20Motorway%20Tyre%20fitting%20image-rHyte2reiXjrCMZvjPra9EaEM5D69F.jpeg",
  },
  {
    title: "Roadside Tyre Service",
    description:
      "Comprehensive roadside tyre service for punctures, blowouts, and damaged tyres. We provide quick response times and professional support across Leicestershire.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roadside%20Service-EKHCHZ3tZzqALpHxHko1qo8zF9CxUh.jpeg",
  },
  {
    title: "Emergency Tyre Fitting",
    description:
      "24/7 emergency tyre fitting service for urgent situations. Day or night, we are ready to assist with fast, dependable tyre solutions.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Service-fX293cINGEWbowm7ykBaXwh9GDBJZY.jpeg",
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
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
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
