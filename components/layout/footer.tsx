// Footer.tsx
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">

        {/* Top grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column — spans full width on mobile, 2 cols on lg */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo.png"
                  alt="Mobile Tyre Leicestershire"
                  width={240}
                  height={78}
                  className="h-14 w-auto object-contain mix-blend-screen"
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Professional mobile tyre fitting and emergency roadside assistance across Leicestershire. Fast, reliable, and available 24/7.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/mobiletyreleicestershire"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-primary hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mobiletyreleicestershire"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-primary hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.google.com/maps/search/Mobile+Tyre+Leicestershire"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-primary hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Mobile Tyre Fitting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Battery JumpStart
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Fuel Delivery
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Wheel Balancing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="tel:07599298404" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-base text-primary flex-shrink-0">phone</span>
                  <span>07599 298404</span>
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-base text-primary flex-shrink-0 mt-0.5">mail</span>
                <a
                  href="mailto:info@mobiletyreleicestershire.co.uk"
                  className="break-all hover:text-primary transition-colors"
                >
                  info@mobiletyreleicestershire.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-base text-primary flex-shrink-0 mt-0.5">location_on</span>
                <span>24/7 Mobile Service<br />Covering all Leicestershire</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs flex flex-col gap-1.5">
          <p>© {new Date().getFullYear()} Mobile Tyre Leicestershire. All rights reserved.</p>
          <p>
            Designed &amp; Developed by{" "}
            <a
              href="https://linkedo.co.uk/"
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="text-primary hover:underline transition-colors"
            >
              Linkedo
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
