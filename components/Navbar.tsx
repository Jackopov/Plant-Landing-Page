"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Collection", href: "#specimens" },
  { label: "Concierge", href: "#concierge" },
  { label: "Realisations", href: "#gallery" },
  { label: "Passports", href: "#passports" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{
        backgroundColor: useTransform(
          bgOpacity,
          (v) => `rgba(13, 30, 19, ${v * 0.95})`
        ),
        borderBottomColor: useTransform(
          borderOpacity,
          (v) => `rgba(245, 244, 239, ${v})`
        ),
      }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-transparent backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <Leaf className="h-5 w-5 text-brass-400" />
          <span className="font-serif text-lg font-light tracking-wide text-alabaster-100">
            Botanique Privé
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-alabaster-300/60 transition-colors duration-300 hover:text-alabaster-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#concierge"
            className="border border-brass-400/30 px-6 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-brass-400 transition-all duration-300 hover:border-brass-400/60 hover:bg-brass-500/10"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-alabaster-200 md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-alabaster-300/10 bg-forest-950/98 px-6 pb-8 backdrop-blur-md md:hidden"
        >
          <nav className="flex flex-col gap-4 pt-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-sm font-medium text-alabaster-200/70 transition-colors hover:text-alabaster-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#concierge"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-brass-500 px-6 py-3 text-center font-sans text-xs font-semibold uppercase tracking-[0.15em] text-forest-950"
            >
              Book Consultation
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
