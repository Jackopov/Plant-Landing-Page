"use client";

import { motion } from "framer-motion";
import { Send, Leaf, Instagram, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  Collection: [
    "Rare Specimens",
    "Monstera Collection",
    "Philodendron Archive",
    "Ficus Gallery",
  ],
  Services: [
    "White Glove Delivery",
    "Space Consultation",
    "Plant Care Programme",
    "Corporate Installations",
  ],
  Company: [
    "Our Story",
    "Botanical Experts",
    "Press & Media",
    "Privacy Policy",
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-forest-950">
      {/* Private Club Section */}
      <div className="border-b border-alabaster-300/10 px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Leaf className="mx-auto mb-6 h-8 w-8 text-brass-400" />
            <h2 className="font-serif text-3xl font-light text-alabaster-50 md:text-5xl">
              Join the Collectors&apos; Circle
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-sans text-sm font-light leading-relaxed text-alabaster-300/50">
              Receive exclusive access to new arrivals, private viewing
              invitations, and seasonal botanical insights curated by our
              team of specialists.
            </p>

            {!subscribed ? (
              <form
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full max-w-sm border border-alabaster-300/20 bg-transparent px-6 py-4 font-sans text-sm text-alabaster-100 placeholder-alabaster-400/30 outline-none transition-colors focus:border-brass-400/50 sm:w-80"
                />
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 bg-brass-500 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-forest-950 transition-all duration-500 hover:bg-brass-400 sm:w-auto"
                >
                  Subscribe
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10"
              >
                <p className="font-sans text-sm text-brass-400">
                  Welcome to the Collectors&apos; Circle. We&apos;ll be in touch soon.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-brass-400" />
                <span className="font-serif text-xl text-alabaster-100">
                  Botanique Privé
                </span>
              </div>
              <p className="mt-4 max-w-sm font-sans text-sm font-light leading-relaxed text-alabaster-300/40">
                Curating extraordinary botanical specimens for the world&apos;s most
                discerning interiors since 2018.
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-alabaster-300/10 text-alabaster-400/40 transition-colors hover:border-alabaster-300/20 hover:text-alabaster-200"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-alabaster-300/10 text-alabaster-400/40 transition-colors hover:border-alabaster-300/20 hover:text-alabaster-200"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-alabaster-400/60">
                  {category}
                </h4>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="group flex items-center gap-1 font-sans text-sm text-alabaster-300/40 transition-colors duration-300 hover:text-alabaster-200"
                      >
                        {link}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-alabaster-300/10 pt-8 md:flex-row">
            <p className="font-sans text-xs text-alabaster-400/30">
              © 2026 Botanique Privé. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-sans text-xs text-alabaster-400/30 transition-colors hover:text-alabaster-300/50"
              >
                Privacy
              </a>
              <a
                href="#"
                className="font-sans text-xs text-alabaster-400/30 transition-colors hover:text-alabaster-300/50"
              >
                Terms
              </a>
              <a
                href="#"
                className="font-sans text-xs text-alabaster-400/30 transition-colors hover:text-alabaster-300/50"
              >
                Shipping
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
