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
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Mobile Tyre Leicestershire"
                  width={240}
                  height={78}
                  className="h-16 w-auto object-contain brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Professional mobile tyre fitting and emergency roadside assistance across Leicestershire. Fast, reliable, and available 24/7.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-base">social_leaderboard</span>
              </Link>
              <Link
                href="#"
                aria-label="Share"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-base">share</span>
              </Link>
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
