"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] overflow-hidden bg-forest-950"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y: imageY, scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=1920&q=80')",
          }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/50 to-forest-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/60 via-transparent to-forest-950/60" />
      </motion.div>

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 flex items-center gap-2 border border-brass-400/30 bg-brass-500/10 px-5 py-2 backdrop-blur-sm"
        >
          <Leaf className="h-4 w-4 text-brass-400" />
          <span className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-alabaster-200">
            Private Botanical Collection
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-5xl font-serif text-5xl font-light leading-[1.1] text-alabaster-50 md:text-7xl lg:text-8xl"
        >
          Living Sculptures
          <br />
          <span className="text-brass-400">for Discerning</span>
          <br />
          Interiors
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 max-w-2xl font-sans text-base font-light leading-relaxed text-alabaster-300/80 md:text-lg"
        >
          We curate extraordinary botanical specimens for luxury residences,
          boutique hotels, and architectural masterpieces. Each plant is a
          statement — a living work of art selected with uncompromising precision.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#specimens"
            className="group flex items-center gap-3 bg-brass-500 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-forest-950 transition-all duration-500 hover:bg-brass-400 hover:shadow-lg hover:shadow-brass-500/20"
          >
            Explore Private Catalogue
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#concierge"
            className="border border-alabaster-300/30 px-8 py-4 font-sans text-sm font-medium uppercase tracking-[0.15em] text-alabaster-200 transition-all duration-500 hover:border-alabaster-300/60 hover:bg-alabaster-50/5"
          >
            Book Consultation
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-alabaster-400/50">
              Scroll
            </span>
            <div className="h-10 w-[1px] bg-gradient-to-b from-alabaster-400/50 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
