"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const FloatingButtonsFull = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-20 right-4 z-50 bg-slate-800 text-white p-3 rounded-full shadow-xl hover:bg-primary transition-all duration-300 hover:scale-110 animate-fade-in"
        >
          <span className="material-symbols-outlined text-2xl">arrow_upward</span>
        </button>
      )}

      {/* Mobile Bottom Bar - Only on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-2 px-4 flex justify-around items-center z-40 md:hidden">
        <Link href="/" className="flex flex-col items-center text-primary">
          <span className="material-symbols-outlined text-xl">home</span>
          <span className="text-[10px]">Home</span>
        </Link>
        <Link href="/services" className="flex flex-col items-center text-slate-600">
          <span className="material-symbols-outlined text-xl">build</span>
          <span className="text-[10px]">Services</span>
        </Link>
        <Link
          href="tel:07599298404"
          className="flex flex-col items-center -mt-8 bg-primary text-white p-3 rounded-full shadow-lg"
        >
          <span className="material-symbols-outlined text-2xl">call</span>
        </Link>
        <Link href="/about" className="flex flex-col items-center text-slate-600">
          <span className="material-symbols-outlined text-xl">info</span>
          <span className="text-[10px]">About</span>
        </Link>
        <Link href="/contact" className="flex flex-col items-center text-slate-600">
          <span className="material-symbols-outlined text-xl">mail</span>
          <span className="text-[10px]">Contact</span>
        </Link>
      </div>
    </>
  );
};

export default FloatingButtonsFull;
