"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, Ruler, TreePine, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import type { Specimen } from "@/lib/types";

const specimens: Specimen[] = [
  {
    id: "monstera-albo",
    name: "Monstera Deliciosa",
    botanicalName: "Albo Variegata",
    description:
      "Exceptional variegation patterns — each leaf a unique marble of white and green. Sourced from heritage Thai nurseries.",
    age: "12 years",
    height: "2.4m",
    price: "€8,900",
    priceValue: 8900,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80",
    isRare: true,
    certificate: true,
    scaleReference: "human",
    lightExposure: "bright-indirect",
    careLevel: "moderate",
  },
  {
    id: "spiritus-sancti",
    name: "Philodendron",
    botanicalName: "Spiritus Sancti",
    description:
      "The holy grail of aroids. Extremely rare, with elongated lanceolate leaves of deep emerald. Fewer than 500 in cultivation worldwide.",
    age: "8 years",
    height: "1.8m",
    price: "€14,500",
    priceValue: 14500,
    image:
      "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=800&q=80",
    isRare: true,
    certificate: true,
    scaleReference: "human",
    lightExposure: "bright-indirect",
    careLevel: "expert",
  },
  {
    id: "ficus-lyrata",
    name: "Ficus Lyrata",
    botanicalName: "Giant Specimen",
    description:
      "A monumental floor-to-ceiling statement. This mature fiddle-leaf fig has been cultivated for over a decade in controlled conditions.",
    age: "15 years",
    height: "3.8m",
    price: "€6,200",
    priceValue: 6200,
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
    isRare: false,
    certificate: true,
    scaleReference: "human",
    lightExposure: "bright-indirect",
    careLevel: "moderate",
  },
  {
    id: "anthurium-warocqueanum",
    name: "Anthurium",
    botanicalName: "Warocqueanum",
    description:
      "The Queen Anthurium with velvety, elongated leaves reaching extraordinary dimensions. A centerpiece for any serious collection.",
    age: "6 years",
    height: "1.5m",
    price: "€4,800",
    priceValue: 4800,
    image:
      "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&q=80",
    isRare: true,
    certificate: true,
    scaleReference: "human",
    lightExposure: "shaded",
    careLevel: "expert",
  },
];

function SpecimenCard({ specimen, index }: { specimen: Specimen; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showScale, setShowScale] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-alabaster-50"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-forest-100">
        <motion.div
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div
            className="h-full w-full bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url('${specimen.image}')` }}
          />
        </motion.div>

        {/* Overlay on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-forest-950/40 backdrop-blur-[2px]"
            />
          )}
        </AnimatePresence>

        {/* Badges */}
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {specimen.isRare && (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="flex items-center gap-1.5 bg-brass-500 px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-forest-950"
            >
              <Star className="h-3 w-3" />
              Rare
            </motion.span>
          )}
          {specimen.certificate && (
            <span className="flex items-center gap-1.5 bg-alabaster-50/90 px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-forest-800 backdrop-blur-sm">
              <Award className="h-3 w-3" />
              Certified
            </span>
          )}
        </div>

        {/* Scale Toggle */}
        <AnimatePresence>
          {isHovered && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowScale(!showScale);
              }}
              className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-alabaster-50/90 px-3 py-2 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-forest-800 backdrop-blur-sm transition-colors hover:bg-alabaster-50"
            >
              <Ruler className="h-3 w-3" />
              {showScale ? "Hide Scale" : "Show Scale"}
            </motion.button>
          )}
        </AnimatePresence>

        {/* Human silhouette scale */}
        <AnimatePresence>
          {showScale && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-4 left-4 flex items-end gap-2"
            >
              <div className="flex flex-col items-center">
                <div className="h-24 w-8 rounded-full bg-alabaster-50/30 backdrop-blur-sm" />
                <span className="mt-1 font-sans text-[9px] uppercase tracking-wider text-alabaster-100/70">
                  1.8m
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-6 bg-brass-400/50 backdrop-blur-sm"
                  style={{
                    height: `${(parseFloat(specimen.height) / 1.8) * 96}px`,
                  }}
                />
                <span className="mt-1 font-sans text-[9px] uppercase tracking-wider text-brass-300/70">
                  {specimen.height}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Eye icon on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-alabaster-50/40 bg-alabaster-50/10 backdrop-blur-sm">
                <Eye className="h-6 w-6 text-alabaster-50" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-serif text-2xl font-light text-forest-900">
              {specimen.name}
            </h3>
            <p className="mt-1 font-sans text-sm italic text-forest-600/70">
              {specimen.botanicalName}
            </p>
          </div>
          <div className="text-right">
            <p className="font-serif text-xl font-semibold text-brass-600">
              {specimen.price}
            </p>
          </div>
        </div>

        <p className="mt-4 font-sans text-sm leading-relaxed text-forest-700/70 line-clamp-2">
          {specimen.description}
        </p>

        {/* Meta Tags */}
        <div className="mt-5 flex flex-wrap gap-3">
          <span className="flex items-center gap-1.5 border border-forest-200 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-wider text-forest-600">
            <TreePine className="h-3 w-3" />
            {specimen.age}
          </span>
          <span className="flex items-center gap-1.5 border border-forest-200 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-wider text-forest-600">
            <Ruler className="h-3 w-3" />
            {specimen.height}
          </span>
          <span className="border border-forest-200 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-wider text-forest-600">
            {specimen.careLevel}
          </span>
        </div>

        {/* CTA */}
        <motion.a
          href="#"
          className="mt-6 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-brass-600 transition-colors duration-300 hover:text-brass-700"
          whileHover={{ x: 4 }}
        >
          Request Private Viewing
          <ChevronRight className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.article>
  );
}

export default function CuratedSpecimens() {
  return (
    <section id="specimens" className="bg-alabaster-50 py-28 px-6 lg:px-16">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-brass-500">
            The Collection
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light text-forest-900 md:text-6xl">
            Curated Specimens
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base font-light leading-relaxed text-forest-600/70">
            Each botanical specimen is hand-selected for its exceptional form,
            rare variegation, or monumental scale. Every plant arrives with a
            certificate of authenticity and a detailed botanical passport.
          </p>
        </motion.div>

        {/* Specimens Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {specimens.map((specimen, index) => (
            <SpecimenCard
              key={specimen.id}
              specimen={specimen}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
