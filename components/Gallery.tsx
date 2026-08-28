"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import type { GalleryProject } from "@/lib/types";

const projects: GalleryProject[] = [
  {
    id: "proj-1",
    title: "Kensington Residence",
    studio: "Studio Ashby",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    description: "Botanical installation for a Georgian townhouse restoration.",
  },
  {
    id: "proj-2",
    title: "Maison de Fleurs",
    studio: "Rodolphe Parente",
    location: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description: "Living wall concept for a Haussmannian apartment.",
  },
  {
    id: "proj-3",
    title: "Penthouse Noir",
    studio: "Kelly Hoppen",
    location: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "Statement specimens for a 400m² penthouse collection.",
  },
  {
    id: "proj-4",
    title: "Botanical Atrium",
    studio: "Vincent Van Duysen",
    location: "Antwerp, Belgium",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    description: "Grand atrium transformation with tropical canopy.",
  },
  {
    id: "proj-5",
    title: "Villa Verde",
    studio: "Patricia Urquiola",
    location: "Lake Como, Italy",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    description: "Mediterranean villa with curated botanical programme.",
  },
  {
    id: "proj-6",
    title: "The Glass House",
    studio: "John Pawson",
    location: "Kent, England",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    description: "Minimalist greenhouse integration with modernist architecture.",
  },
];

export default function Gallery() {
  return (
    <section className="bg-alabaster-50 py-28 px-6 lg:px-16">
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
            Portfolio
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light text-forest-900 md:text-6xl">
            Realisations
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base font-light leading-relaxed text-forest-600/70">
            A curated selection of our collaborations with leading architectural
            and interior design studios across Europe and the Middle East.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mb-6 break-inside-avoid"
            >
              <div className="group relative overflow-hidden bg-forest-100">
                <div
                  className={`w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 ${
                    index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-square" : "aspect-[3/4]"
                  }`}
                  style={{ backgroundImage: `url('${project.image}')` }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-forest-950/0 transition-all duration-500 group-hover:bg-forest-950/70">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <ExternalLink className="mb-3 h-6 w-6 text-brass-400" />
                    <h3 className="font-serif text-2xl font-light text-alabaster-50">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-sans text-xs text-alabaster-300/60">
                      {project.studio}
                    </p>
                    <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-alabaster-200/70">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-alabaster-50/90 px-3 py-1.5 backdrop-blur-sm">
                  <MapPin className="h-3 w-3 text-forest-700" />
                  <span className="font-sans text-[10px] font-medium uppercase tracking-wider text-forest-700">
                    {project.location}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
