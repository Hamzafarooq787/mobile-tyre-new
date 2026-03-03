
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

  <main className="flex-1">
    {/* Hero Section - Fully Responsive */}
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-accent/5 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left Content - Responsive Text */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 animate-fade-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-bold text-primary w-fit animate-pop-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              24/7 Emergency Service
            </div>

            {/* Heading - Responsive Font Sizes */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 animate-slide-in-left">
                Mobile Tyre <br className="hidden xs:block" />
                <span className="text-primary">Leicestershire</span>
              </h1>
              <p className="max-w-lg text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 animate-slide-in-right delay-150">
                Fast & Reliable Tyre Fitting at Your Location – 24/7 emergency service, mobile, professional.
              </p>
            </div>

            {/* Buttons - Responsive Stack */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              {/* Orange Call Button */}
              <Link
                href="tel:07599298404"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-base sm:text-lg font-black text-white shadow-xl shadow-orange-500/30 hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden animate-fade-in-up delay-300"
              >
                <span className="material-symbols-outlined text-xl sm:text-2xl group-hover:rotate-12 transition-transform animate-soft-bounce">
                  phone_in_talk
                </span>
                <span className="whitespace-nowrap">Call Now: 07599 298404</span>
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                {/* Continuous glow effect */}
                <span className="absolute inset-0 rounded-xl bg-orange-400/20 animate-pulse-slow"></span>
              </Link>

              <Link
                href="/services"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-orange-200 bg-white/90 backdrop-blur-sm px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-slate-900 hover:bg-orange-50 hover:border-orange-400 transition-all duration-300 group relative overflow-hidden animate-fade-in-up delay-500"
              >
                <span>Our Services</span>
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform animate-float-slow">
                  arrow_forward
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200/50 to-transparent -translate-x-full animate-shimmer-slow"></span>
              </Link>
            </div>

            {/* Social Proof - Responsive */}
            <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-6 animate-fade-in-up delay-700">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-white bg-slate-${i === 1 ? "200" : i === 2 ? "300" : "400"
                      } hover:scale-110 hover:z-10 transition-transform duration-300`}
                  ></div>
                ))}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">
                <span className="font-bold text-slate-900 text-sm sm:text-base">500+</span> Tyres fitted this month
              </div>
            </div>
          </div>

          {/* Right Image - Responsive */}
          <div className="relative animate-fade-in-right">
            <div className="relative">
              {/* Main Image */}
              <div
                className="aspect-video w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-100 shadow-xl sm:shadow-2xl group/image"
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-10000 group-hover/image:scale-110"
                  style={{
                    backgroundImage:
                      'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Van-Image%20%281%29-5MVG3X80eAOoIuVj7lX6mQI9vPPWEC.png")',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Floating Stats Card - Responsive Positioning */}
              <div className="absolute -bottom-3 sm:-bottom-6 left-2 sm:left-4 rounded-xl sm:rounded-2xl bg-white p-3 sm:p-4 md:p-6 shadow-lg sm:shadow-xl animate-float z-10">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <span className="material-symbols-outlined text-base sm:text-lg md:text-xl">verified</span>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-900 whitespace-nowrap">
                      Average Response
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-xl font-black text-primary">
                      15-30 Mins
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Icon */}
              <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 bg-white p-2 sm:p-3 rounded-full shadow-lg animate-bounce-gentle">
                <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">emergency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Services Section - Responsive Grid */}
    <section className="bg-background-light py-12 sm:py-16 md:py-20" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col items-center text-center animate-fade-in">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900">
            Our Premium Services
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-slate-600 px-4">
            We provide a comprehensive range of mobile tyre services to get you back on the road quickly.
          </p>
        </div>

        {/* Service Cards - Responsive Grid - Changed to 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {[
            {
              title: "Mobile Tyre Fitting",
              desc: "Professional mobile tyre fitting at your home, workplace, or roadside anywhere in Leicestershire. We supply and fit tyres quickly and safely with expert service you can rely on.",
              image: "/services/s1.jpg",
              icon: "tire_repair",
              delay: "0.1s"
            },
            {
              title: "Mobile Tyre Repair",
              desc: "Fast and reliable mobile tyre repair service for punctures and minor damage. Our technicians assess the tyre condition and repair it efficiently to get you back on the road safely.",
              image: "/services/s2.jfif",
              icon: "build",
              delay: "0.2s"
            },
            {
              title: "Mobile Tyre Replacement",
              desc: "Need a new tyre urgently? We provide quick mobile tyre replacement with quality tyres fitted at your location, saving you time and hassle.",
              image: "/services/s3.jpg",
              icon: "autorenew",
              delay: "0.3s"
            },
            {
              title: "Mobile Tyre At Your Location",
              desc: "Wherever you are in Leicestershire, our team comes directly to you. We deliver convenient, stress-free tyre services at your exact location.",
              image: "/services/s4.jpg",
              icon: "location_on",
              delay: "0.4s"
            },
            {
              title: "Flat Tyres Service",
              desc: "If you have a flat tyre, we respond quickly with the right tools and expertise to repair or replace it on the spot, ensuring minimal disruption to your journey.",
              image: "/services/s5.avif",
              icon: "emergency",
              delay: "0.5s"
            },
            {
              title: "Motorway Tyre Fitting",
              desc: "Stranded on the motorway? Our emergency motorway tyre fitting service provides fast assistance to keep you safe and moving again.",
              image: "/services/s6.jpg",
              icon: "directions_car",
              delay: "0.6s"
            },
            {
              title: "Roadside Tyre Service",
              desc: "Comprehensive roadside tyre service for punctures, blowouts, and damaged tyres. We provide quick response times and professional support across Leicestershire.",
              image: "/services/s7.jpeg",
              icon: "map",
              delay: "0.7s"
            },
            {
              title: "Emergency Tyre Fitting",
              desc: "24/7 emergency tyre fitting service for urgent situations. Day or night, we are ready to assist with fast, dependable tyre solutions.",
              image: "/services/s8.jpg",
              icon: "schedule",
              delay: "0.8s"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: service.delay }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${service.image}")`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Overlay on Mobile */}
                <div className="absolute top-3 right-3 sm:hidden bg-white/90 p-2 rounded-full">
                  <span className="material-symbols-outlined text-primary">{service.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                <h3 className="mb-2 text-lg sm:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-slate-600">
                  {service.desc}
                </p>
                <Link
                  href="/services"
                  className="mt-auto flex items-center font-bold text-primary group-hover:gap-2 transition-all"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us Section - Responsive */}
    <section className="bg-white py-10 sm:py-16 md:py-24" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us Section */}
        <div className="mb-16 lg:mb-20 animate-fade-in">
          <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-5 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">

            {/* Always-visible animated background blobs */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            {/* Additional floating blobs for more life */}
            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

            {/* Subtle moving gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>

            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            {/* Floating Icons - more prominent */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-6 left-6 w-16 h-16 text-primary/40 animate-float-slow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="2"/>
                  <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="absolute bottom-8 right-8 w-20 h-20 text-accent/40 animate-float" style={{ animationDelay: '1s' }}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 14h-1.5l-1.7-3.4c-.3-.6-1-1-1.7-1H7.9c-.7 0-1.4.4-1.7 1L4.5 14H3v5h2v1c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h8v1c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h2v-5zM7.9 10h8.2l1.5 3H6.4l1.5-3zM5 15h14v2H5v-2z"/>
                </svg>
              </div>
              <div className="absolute top-16 right-16 w-14 h-14 text-primary/40 animate-spin-slow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="absolute bottom-12 left-8 w-16 h-16 text-accent/40 animate-float" style={{ animationDelay: '2s' }}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 text-slate-900 animate-fade-in-up">
                Why Choose Mobile Tyre Leicestershire?
              </h3>
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-3xl animate-fade-in-up delay-150">
                We bring the garage to you – at home, work, or roadside. Our expert technicians provide seamless tyre fitting anywhere in Leicestershire with rapid response times and professional excellence.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                {[
                  { icon: "schedule", title: "30-60 Minute Arrival", desc: "Average response time within the hour.", delay: "0.1s" },
                  { icon: "location_on", title: "Any Location", desc: "Home, work, or roadside – we come to you.", delay: "0.2s" },
                  { icon: "engineering", title: "Certified Fitters", desc: "Experienced and qualified technicians.", delay: "0.3s" },
                  { icon: "payments", title: "Competitive Prices", desc: "Transparent pricing with no hidden fees.", delay: "0.4s" }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white/90 backdrop-blur-sm p-6 transition-all duration-500 hover:bg-primary/5 hover:scale-110 hover:shadow-2xl animate-fade-in-up"
                    style={{ animationDelay: feature.delay }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white transition-transform group-hover:rotate-12">
                      <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                    </div>
                    <h4 className="text-lg lg:text-xl font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* Customer Reviews Section */}
    <section className="bg-background-light py-10 sm:py-16 md:py-20" id="reviews">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-8 sm:mb-12 flex flex-col items-center text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-4">
            <span className="material-symbols-outlined text-base">star</span>
            Verified Customer Reviews
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-3 text-balance">
            What Our Customers Say
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-slate-600">
            Don't just take our word for it — here's what drivers across Leicestershire say about our mobile tyre service.
          </p>
          {/* Star summary bar */}
          <div className="flex items-center gap-2 mt-4">
            {[1,2,3,4,5].map((s) => (
              <span key={s} className="material-symbols-outlined text-yellow-400 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
            <span className="ml-2 font-black text-slate-900 text-lg">5.0</span>
            <span className="text-slate-500 text-sm">(150+ reviews)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {[
            {
              name: "James R.",
              location: "Leicester",
              rating: 5,
              date: "January 2025",
              review: "Absolutely brilliant service! Had a blowout on the M1 and they arrived within 40 minutes. The technician was professional, efficient and had me back on the road in no time. Highly recommend!",
              initials: "JR",
              color: "bg-blue-600",
            },
            {
              name: "Sarah M.",
              location: "Loughborough",
              rating: 5,
              date: "February 2025",
              review: "Used Mobile Tyre Leicestershire twice now and both times the service has been outstanding. Came to my home address, very polite and the price was very fair. Will not use anyone else!",
              initials: "SM",
              color: "bg-emerald-600",
            },
            {
              name: "David K.",
              location: "Hinckley",
              rating: 5,
              date: "December 2024",
              review: "Got a puncture at work and they came out within the hour. Fitted two new tyres on-site, no fuss. The whole experience was seamless — great value for money too.",
              initials: "DK",
              color: "bg-orange-500",
            },
            {
              name: "Priya T.",
              location: "Oadby",
              rating: 5,
              date: "March 2025",
              review: "Couldn't believe how quick and easy it was. Booked online, they turned up exactly when they said, and the job was done while I had my morning coffee. 100% recommend to anyone.",
              initials: "PT",
              color: "bg-purple-600",
            },
            {
              name: "Mark H.",
              location: "Wigston",
              rating: 5,
              date: "November 2024",
              review: "Emergency call at 11pm on a Sunday — they picked up immediately and had someone out within 45 minutes. Lifesavers! Genuinely impressive 24/7 service. Thank you!",
              initials: "MH",
              color: "bg-red-600",
            },
            {
              name: "Claire B.",
              location: "Market Harborough",
              rating: 5,
              date: "January 2025",
              review: "Very professional from start to finish. Transparent pricing with no surprises, the fitter was friendly and thorough. My go-to for tyres from now on. Top service!",
              initials: "CB",
              color: "bg-teal-600",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-2xl bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up border border-slate-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-yellow-400 text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-1">
                &ldquo;{review.review}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${review.color} text-white text-sm font-black`}>
                  {review.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.location} &middot; {review.date}</p>
                </div>
                {/* Google badge */}
                <div className="ml-auto flex items-center gap-1 text-xs text-slate-400 font-medium">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 text-center animate-fade-in-up">
          <p className="text-slate-600 text-sm sm:text-base mb-4">
            Join hundreds of satisfied customers across Leicestershire.
          </p>
          <Link
            href="tel:07599298404"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-105 transition-all duration-300"
          >
            <span className="material-symbols-outlined text-lg">phone_in_talk</span>
            Book Your Tyre Fitting
          </Link>
        </div>

      </div>
    </section>

    {/* CTA Section - Responsive */}
    <section className="bg-primary py-12 sm:py-16 md:py-20" id="contact">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-6 sm:p-8 md:p-10 lg:p-12 animate-scale-in">

          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl animate-pulse delay-700"></div>

          {/* Floating Icons */}
          <div className="absolute top-5 left-5 sm:top-10 sm:left-10 text-white/20 animate-float">
            <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl">emergency</span>
          </div>
          <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 text-white/20 animate-float delay-500">
            <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl">car_repair</span>
          </div>

          {/* Content */}
          <h2 className="relative z-10 mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white animate-fade-in-up">
            Need a Tyre? Don't Wait Around
          </h2>

          <p className="relative z-10 mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up delay-150">
            Get back on the road with Leicestershire's most trusted mobile tyre service.
          </p>

          <Link
            href="tel:07599298404"
            className="relative z-10 inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-4 rounded-full bg-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-lg sm:text-xl md:text-2xl font-black text-primary shadow-2xl hover:scale-105 hover:shadow-white/30 transition-all duration-300 group overflow-hidden animate-bounce-gentle"
          >
            <span className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl group-hover:rotate-12 transition-transform animate-ring">
              call
            </span>
            <span className="whitespace-nowrap">07599 298404</span>
            <span className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
          </Link>
        </div>
      </div>
    </section>
  </main>

    </div>
  );
}
