// Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <div className="flex items-center gap-2">
        <div className="text-primary">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <span className="text-base sm:text-xl font-black tracking-tight text-white uppercase leading-tight line-clamp-1">
          Mobile Tyre Leicestershire
        </span>
      </div>

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
