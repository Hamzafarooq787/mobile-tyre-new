
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import FloatingButtonsFull from "@/components/ui/floatingbuttons";
import Link from "next/link";


// Services data from the provided file
const services = [
  {
    title: 'Mobile Tyre Fitting',
    description:
      'Expert fitting delivered straight to your home or workplace. No garage queues. No wasted time. Just comfort and convenience when you need it most.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    image: '/services/s1.jpg',      // s1.jpg
  },
  {
    title: 'Puncture Repairs',
    description:
      'Fast, safe and British Standard repairs to get you confidently back on the road. Because every journey matters.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    image: '/services/s2.jfif',     // s2.jfif
  },
  {
    title: 'Tyre Pressure Checks',
    description:
      'Correct tyre pressure improves fuel efficiency and safety. We ensure your tyres are road-ready and performance-optimised.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l4 4M17 3l-4 4M9 21l4-4M13 21l-4-4M21 13v4M19 15h4M12 7v6l4 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    image: '/services/s3.jpg',      // s3.jpg
  },
  {
    title: 'Seasonal Changes',
    description:
      'Switch between summer and winter tyres effortlessly. Stay safe in every season without lifting a finger.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v4M12 18v4M4 12H2h2m16 0h2-2M5.636 5.636l2.828 2.828M15.536 15.536l2.828 2.828M5.636 18.364l2.828-2.828M15.536 8.464l2.828-2.828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    image: '/services/s4.jpg',      // s4.jpg
  },
  {
    title: 'New Tyres',
    description:
      'Premium, mid-range, and budget options available. We help you choose the perfect tyres for your vehicle and driving style.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    image: '/services/s5.avif',     // s5.avif
  },
  {
    title: 'Part-Worn Tyres',
    description:
      'Quality-tested and affordable. A smart choice when you need reliability without stretching your budget.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    image: '/services/s6.jpg',      // s6.jpg
  },
];

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        {/* Hero Section with Animations */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden bg-slate-900 group">
          {/* Background image with slow zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-10000 group-hover:scale-110"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz_7WWrTAVPW3G3luRSOPtMo1gnQFUm4u_-2A3BoenXplRTk6RMU1KJmh4ZzO7vj2frFik8BE44vNBr3m5yTxTaZsPqJ0MKIQMZ9yHzGNxX1KfiNefzHdKa90ZkjJPvYks2QVgCJYNzboGU_HteiHt3GFI03-nVjaB9FStx1QefHvZx8rYL-9OqBQgLzLWTuEIHMzJ61xZ8FGMj4h7PfKw6nF0DQEFEL0xrHGOLuONun0sFMAK8CgnlBXGzPvU8hn6jIkajVUxFjQd")',
            }}
          ></div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full animate-ping delay-700"></div>
          </div>
          
          {/* Text content with slide animations */}
          <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-slide-in-left">
              Our Services
            </h2>
            <p className="text-lg text-slate-200 max-w-xl leading-relaxed animate-slide-in-right delay-300">
              Fast, reliable, and professional roadside assistance across the region. We come to you, 24 hours a day.
            </p>
          </div>
        </div>

        {/* Services Grid Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-xl mb-5"
                />
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0">{service.icon}</div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href="#"
                  className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all group"
                >
                  Find out more
                  <span aria-hidden="true" className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Table with Animations */}
        <section className="bg-slate-50 dark:bg-slate-900/50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-extrabold mb-4 animate-slide-in-left">
                Service Areas & Base Pricing
              </h2>
              <p className="text-slate-600 dark:text-slate-400 animate-slide-in-right delay-150">
                Transparent pricing for our mobile call-out services across the region.
              </p>
            </div>
            
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300">
                  <tr>
                    <th className="px-6 py-4 font-bold uppercase text-xs">Area / Region</th>
                    <th className="px-6 py-4 font-bold uppercase text-xs">Call-out Fee</th>
                    <th className="px-6 py-4 font-bold uppercase text-xs">Response Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {[
                    { area: "City Centre & Inner Suburbs", fee: "£30.00", time: "30-45 Mins", accent: false },
                    { area: "Outer Ring & Suburbs", fee: "£45.00", time: "45-60 Mins", accent: false },
                    { area: "Rural & Surrounding Towns", fee: "£60.00+", time: "60-90 Mins", accent: false },
                    { area: "Motorway Recovery / Assist", fee: "Quote Required", time: "Priority (20-40 Mins)", accent: true },
                  ].map((row, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-300 animate-fade-in-right"
                      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    >
                      <td className="px-6 py-4 font-medium">{row.area}</td>
                      <td className={`px-6 py-4 font-bold ${row.accent ? 'text-accent' : 'text-primary'}`}>
                        {row.fee}
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="mt-6 text-center text-sm text-slate-500 animate-fade-in-up delay-500">
              * Prices shown are for call-out only. Labour and parts (tyres, fuel) are charged additionally.
            </p>
          </div>
        </section>

        {/* CTA Section with Animations */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto bg-primary rounded-[2rem] p-8 md:p-16 relative overflow-hidden text-center text-white group/cta animate-scale-in">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl animate-pulse delay-700"></div>
            
            {/* Floating icons */}
            <div className="absolute top-10 left-10 text-white/20 animate-float">
              <span className="material-symbols-outlined text-4xl">emergency</span>
            </div>
            <div className="absolute bottom-10 right-10 text-white/20 animate-float delay-500">
              <span className="material-symbols-outlined text-4xl">car_repair</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10 animate-fade-in-up">
              Stranded? We're on the way.
            </h2>
            
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto relative z-10 animate-fade-in-up delay-150">
              Our operators are standing by 24 hours a day, 7 days a week to assist you with any roadside emergency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                href="tel:07599298404"
                className="flex items-center justify-center gap-3 bg-white text-primary px-10 py-5 rounded-full text-2xl font-black shadow-2xl hover:scale-110 hover:shadow-white/30 transition-all duration-300 group/btn relative overflow-hidden animate-bounce-gentle"
              >
                <span className="material-symbols-outlined text-3xl group-hover/btn:rotate-12 transition-transform animate-ring">
                  call
                </span>
                07599 298404
                <span className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"></span>
              </Link>
              
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white/40 hover:border-white text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:bg-white/10 relative overflow-hidden group/btn"
              >
                Contact Us
                <span className="absolute inset-0 bg-white/20 scale-0 group-hover/btn:scale-150 transition-transform duration-500 opacity-0 group-hover/btn:opacity-100 rounded-full"></span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtonsFull/>
    </div>
  );
}