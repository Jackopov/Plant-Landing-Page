"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Sun,
  Thermometer,
  Truck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Home,
  Building2,
  Warehouse,
  GlassWater,
} from "lucide-react";
import { useState } from "react";
import type { SpaceConfig } from "@/lib/types";

const processSteps = [
  {
    step: 1,
    title: "Private Consultation",
    description:
      "We begin with an intimate understanding of your vision, space, and lifestyle to curate the perfect botanical narrative.",
    icon: Search,
  },
  {
    step: 2,
    title: "Light & Space Audit",
    description:
      "Our specialists conduct a thorough environmental analysis — measuring light, humidity, temperature, and airflow in your residence.",
    icon: Sun,
  },
  {
    step: 3,
    title: "Specimen Selection",
    description:
      "Based on the audit, we present a bespoke shortlist of specimens perfectly suited to thrive in your specific conditions.",
    icon: Thermometer,
  },
  {
    step: 4,
    title: "White Glove Delivery",
    description:
      "Climate-controlled transport with real-time monitoring. Our installation team places each specimen with architectural precision.",
    icon: Truck,
  },
];

const roomTypes = [
  { id: "living", label: "Living Room", icon: Home },
  { id: "penthouse", label: "Penthouse", icon: Building2 },
  { id: "atrium", label: "Atrium", icon: Warehouse },
  { id: "bathroom", label: "Spa / Bathroom", icon: GlassWater },
];

const windowExposures = ["north", "south", "east", "west", "none"];

export default function WhiteGloveConcierge() {
  const [currentStep, setCurrentStep] = useState(0);
  const [config, setConfig] = useState<SpaceConfig>({
    roomType: "",
    windowExposure: "south",
    squareMeters: 50,
    ceilingHeight: 3,
    lightLevel: "moderate",
    temperature: 22,
  });

  const [recommendations, setRecommendations] = useState(false);

  const generateRecommendations = () => {
    setRecommendations(true);
  };

  return (
    <section
      id="concierge"
      className="relative overflow-hidden bg-forest-950 py-28 px-6 lg:px-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(217,158,43,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-brass-400">
            Our Service
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light text-alabaster-50 md:text-6xl">
            White Glove Concierge
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base font-light leading-relaxed text-alabaster-300/60">
            From consultation to installation, our dedicated team ensures every
            botanical element is perfectly integrated into your living space.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative border border-alabaster-300/10 bg-alabaster-50/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-brass-400/30 hover:bg-alabaster-50/[0.05]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-brass-400/20 bg-brass-500/10">
                  <Icon className="h-5 w-5 text-brass-400" />
                </div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-brass-400/60">
                  Step {step.step}
                </span>
                <h3 className="mt-2 font-serif text-xl font-light text-alabaster-100">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-alabaster-300/50">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Configurator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl border border-alabaster-300/10 bg-alabaster-50/[0.03] p-8 md:p-12"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-brass-400" />
            <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-alabaster-200">
              Space Configurator
            </h3>
          </div>

          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mb-6 font-sans text-sm text-alabaster-300/50">
                  Select your room type:
                </p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {roomTypes.map((room) => {
                    const Icon = room.icon;
                    return (
                      <button
                        key={room.id}
                        onClick={() =>
                          setConfig({ ...config, roomType: room.id })
                        }
                        className={`flex flex-col items-center gap-3 border p-6 transition-all duration-300 ${
                          config.roomType === room.id
                            ? "border-brass-400/50 bg-brass-500/10"
                            : "border-alabaster-300/10 hover:border-alabaster-300/20"
                        }`}
                      >
                        <Icon
                          className={`h-6 w-6 ${
                            config.roomType === room.id
                              ? "text-brass-400"
                              : "text-alabaster-300/40"
                          }`}
                        />
                        <span className="font-sans text-xs font-medium text-alabaster-200">
                          {room.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mb-6 font-sans text-sm text-alabaster-300/50">
                  Which direction does your primary window face?
                </p>
                <div className="flex flex-wrap gap-3">
                  {windowExposures.map((exp) => (
                    <button
                      key={exp}
                      onClick={() =>
                        setConfig({
                          ...config,
                          windowExposure: exp as SpaceConfig["windowExposure"],
                        })
                      }
                      className={`border px-6 py-3 font-sans text-sm capitalize transition-all duration-300 ${
                        config.windowExposure === exp
                          ? "border-brass-400/50 bg-brass-500/10 text-brass-300"
                          : "border-alabaster-300/10 text-alabaster-300/50 hover:border-alabaster-300/20"
                      }`}
                    >
                      {exp === "none" ? "No Windows" : exp}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-8">
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <label className="font-sans text-sm text-alabaster-300/50">
                        Floor area
                      </label>
                      <span className="font-sans text-sm text-brass-400">
                        {config.squareMeters}m²
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="200"
                      value={config.squareMeters}
                      onChange={(e) =>
                        setConfig({
                          ...config,
                          squareMeters: parseInt(e.target.value),
                        })
                      }
                      className="w-full accent-brass-500"
                    />
                  </div>
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <label className="font-sans text-sm text-alabaster-300/50">
                        Ceiling height
                      </label>
                      <span className="font-sans text-sm text-brass-400">
                        {config.ceilingHeight}m
                      </span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="8"
                      step="0.5"
                      value={config.ceilingHeight}
                      onChange={(e) =>
                        setConfig({
                          ...config,
                          ceilingHeight: parseFloat(e.target.value),
                        })
                      }
                      className="w-full accent-brass-500"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {!recommendations ? (
                  <div className="text-center">
                    <p className="mb-6 font-sans text-sm text-alabaster-300/50">
                      Ready to receive your personalized botanical
                      recommendations.
                    </p>
                    <button
                      onClick={generateRecommendations}
                      className="bg-brass-500 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-forest-950 transition-all duration-500 hover:bg-brass-400"
                    >
                      Generate Recommendations
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-brass-400">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-sans text-sm font-medium">
                        Your personalized selection is ready
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      {[
                        {
                          name: "Monstera Deliciosa",
                          reason: "Thrives in bright indirect light",
                          match: "94%",
                        },
                        {
                          name: "Ficus Audrey",
                          reason: "Compact form, elegant silhouette",
                          match: "87%",
                        },
                        {
                          name: "Strelitzia nicolai",
                          reason: "Dramatic scale for your ceiling height",
                          match: "91%",
                        },
                      ].map((rec) => (
                        <div
                          key={rec.name}
                          className="border border-alabaster-300/10 p-5"
                        >
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-serif text-lg text-alabaster-100">
                              {rec.name}
                            </span>
                            <span className="font-sans text-xs font-bold text-brass-400">
                              {rec.match}
                            </span>
                          </div>
                          <p className="font-sans text-xs text-alabaster-300/50">
                            {rec.reason}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-between border-t border-alabaster-300/10 pt-6">
            <button
              onClick={() =>
                setCurrentStep(Math.max(0, currentStep - 1))
              }
              disabled={currentStep === 0}
              className="flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.15em] text-alabaster-300/50 transition-colors hover:text-alabaster-200 disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </button>
            <div className="flex gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-300 ${
                    i === currentStep
                      ? "w-8 bg-brass-400"
                      : i < currentStep
                      ? "w-4 bg-brass-400/40"
                      : "w-4 bg-alabaster-300/10"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrentStep(Math.min(3, currentStep + 1))
              }
              disabled={currentStep === 3}
              className="flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.15em] text-alabaster-300/50 transition-colors hover:text-alabaster-200 disabled:opacity-30"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
