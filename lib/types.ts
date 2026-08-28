// ─── Botanical Specimen ───────────────────────────────────────
export interface Specimen {
  id: string;
  name: string;
  botanicalName: string;
  description: string;
  age: string;
  height: string;
  price: string;
  priceValue: number;
  image: string;
  isRare: boolean;
  certificate: boolean;
  scaleReference: "human" | "room";
  lightExposure: "bright-indirect" | "low-light" | "direct" | "shaded";
  careLevel: "expert" | "moderate" | "low";
}

// ─── Gallery Project ──────────────────────────────────────────
export interface GalleryProject {
  id: string;
  title: string;
  studio: string;
  location: string;
  image: string;
  description: string;
}

// ─── Botanical Passport ───────────────────────────────────────
export interface BotanicalPassport {
  id: string;
  species: string;
  origin: string;
  certification: string;
  expiryDate: string;
  phytosanitaryCode: string;
  temperatureRange: string;
  humidityRange: string;
}

// ─── Concierge Configurator ───────────────────────────────────
export interface SpaceConfig {
  roomType: string;
  windowExposure: "north" | "south" | "east" | "west" | "none";
  squareMeters: number;
  ceilingHeight: number;
  lightLevel: "bright" | "moderate" | "dim";
  temperature: number;
}

// ─── Navigation ───────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}

// ─── Process Step ─────────────────────────────────────────────
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}
