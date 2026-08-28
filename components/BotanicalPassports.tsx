"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Thermometer,
  Droplets,
  MapPin,
  Calendar,
  FileCheck,
} from "lucide-react";
import type { BotanicalPassport } from "@/lib/types";

const passports: BotanicalPassport[] = [
  {
    id: "passport-1",
    species: "Monstera deliciosa 'Albo Variegata'",
    origin: "Chiapas, Mexico → cultivated in Chiang Mai, Thailand",
    certification: "EU Phytosanitary Certificate",
    expiryDate: "2027-03-15",
    phytosanitaryCode: "TH-2026-BOT-4892",
    temperatureRange: "18°C — 28°C",
    humidityRange: "60% — 80%",
  },
  {
    id: "passport-2",
    species: "Philodendron spiritus-sancti",
    origin: "Espírito Santo, Brazil → cultivated in Bogotá, Colombia",
    certification: "CITES Appendix II",
    expiryDate: "2027-06-30",
    phytosanitaryCode: "CO-2026-BOT-1127",
    temperatureRange: "16°C — 24°C",
    humidityRange: "70% — 90%",
  },
  {
    id: "passport-3",
    species: "Ficus lyrata (Giant Specimen)",
    origin: "Western Africa → cultivated in Algarve, Portugal",
    certification: "EU Plant Passport",
    expiryDate: "2027-01-20",
    phytosanitaryCode: "PT-2026-BOT-7834",
    temperatureRange: "15°C — 30°C",
    humidityRange: "40% — 70%",
  },
];

function PassportCard({
  passport,
  index,
}: {
  passport: BotanicalPassport;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group border border-forest-200 bg-white p-8 transition-all duration-500 hover:shadow-xl hover:shadow-forest-900/5"
    >
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center border border-forest-200 bg-forest-50">
          <Shield className="h-5 w-5 text-forest-700" />
        </div>
        <div className="flex items-center gap-1.5 border border-forest-200 bg-forest-50 px-3 py-1.5">
          <FileCheck className="h-3 w-3 text-forest-600" />
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-forest-700">
            Verified
          </span>
        </div>
      </div>

      {/* Species */}
      <h3 className="font-serif text-xl font-medium text-forest-900">
        {passport.species}
      </h3>

      {/* Code */}
      <div className="mt-3 inline-block bg-forest-900 px-3 py-1.5">
        <span className="font-mono text-[10px] font-bold tracking-wider text-brass-400">
          {passport.phytosanitaryCode}
        </span>
      </div>

      {/* Details Grid */}
      <div className="mt-8 space-y-4 border-t border-forest-100 pt-6">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forest-400" />
          <div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-forest-400">
              Origin
            </span>
            <p className="mt-0.5 font-sans text-sm text-forest-700">
              {passport.origin}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FileCheck className="mt-0.5 h-4 w-4 shrink-0 text-forest-400" />
          <div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-forest-400">
              Certification
            </span>
            <p className="mt-0.5 font-sans text-sm text-forest-700">
              {passport.certification}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-forest-400" />
          <div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-forest-400">
              Valid Until
            </span>
            <p className="mt-0.5 font-sans text-sm text-forest-700">
              {new Date(passport.expiryDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Thermometer className="mt-0.5 h-4 w-4 shrink-0 text-forest-400" />
          <div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-forest-400">
              Temperature Range
            </span>
            <p className="mt-0.5 font-sans text-sm text-forest-700">
              {passport.temperatureRange}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Droplets className="mt-0.5 h-4 w-4 shrink-0 text-forest-400" />
          <div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-forest-400">
              Humidity Range
            </span>
            <p className="mt-0.5 font-sans text-sm text-forest-700">
              {passport.humidityRange}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function BotanicalPassports() {
  return (
    <section className="bg-white py-28 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-brass-500">
            Documentation
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light text-forest-900 md:text-6xl">
            Botanical Passports
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base font-light leading-relaxed text-forest-600/70">
            Every specimen is accompanied by comprehensive phytosanitary
            documentation, verifying its origin, cultivation history, and
            compliance with international plant trade regulations.
          </p>
        </motion.div>

        {/* Passports Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {passports.map((passport, index) => (
            <PassportCard
              key={passport.id}
              passport={passport}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
