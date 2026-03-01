// Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background-dark backdrop-blur-md border-b border-slate-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Mobile Tyre Leicestershire"
          width={160}
          height={52}
          className="h-10 sm:h-12 w-auto object-contain"
          priority
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-semibold transition-colors text-slate-200 hover:text-primary ${
              pathname === link.href ? "text-primary border-b-2 border-primary" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Call Button with Live Indicator */}
      <div className="hidden sm:flex items-center gap-4">
        <Link
          href="/contact"
          className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all group relative"
        >
          <span className="relative">
            <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform animate-ring">
              call
            </span>
            {/* Live indicator dot */}
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </span>
          07599 298404
        </Link>
      </div>

      {/* Hamburger Menu */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded-md text-primary hover:bg-primary/20"
        onClick={toggleMenu}
      >
        <span className="material-symbols-outlined text-white">{isOpen ? "close" : "menu"}</span>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <nav className="md:hidden bg-background-dark border-t border-slate-800">
      <ul className="flex flex-col p-4 gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-semibold transition-colors ${
                pathname === link.href ? "text-primary" : "text-slate-200 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        {/* Mobile Call Button with Live Indicator */}
        <li>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all group relative"
          >
            <span className="relative">
              <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform animate-ring">
                call
              </span>
              {/* Live indicator dot */}
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </span>
            07599 298404
          </Link>
        </li>
      </ul>
    </nav>
  )}
</header>
  );
};

export default Header;
