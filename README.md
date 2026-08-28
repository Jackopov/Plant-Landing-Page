# 🌿 Botanique Privé

> **Luksusowa platforma e-commerce** specjalizująca się w sprzedaży rzadkich, dojrzałych roślin tropikalnych do ekskluzywnych rezydencji, hoteli butikowych i penthausów.

## 🎨 Koncepcja wizualna

Botanique Privé toeria inspiracji czerpiąca z estetyki **Architectural Digest** i minimalistycznego, organicznego modernizmu. Strona definiuje rośliny jako **żywe rzeźby** dla wymagających wnętrz — łącząc arystokratyczną typografię z organicznymi formami i subtelnymi metalicznymi akcentami.

## 🛠️ Stos technologiczny

| Technologia | Wersja | Opis |
|---|---|---|
| **Next.js** | 14 (App Router) | Framework full-stack z SSR, RSC i optymalizacją obrazów |
| **React** | 18 | Biblioteka UI z konwencjami Server Components |
| **TypeScript** | 5.x | Typowanie statyczne na poziomie projektu |
| **Tailwind CSS** | 3.x | Utility-first CSS z konfiguracją motywu premium |
| **Framer Motion** | 11.x | Silnik animacji — parallax, mikrointerakcje, przejścia |
| **Lucide React** | Latest | Zestaw ikon SVG o spójnej estetyce |
| **Google Fonts** | — | Cormorant Garamond + Plus Jakarta Sans |

## 📁 Struktura projektu

```
plant-landing-page/
├── app/
│   ├── layout.tsx          # Root layout z fontami i metadata
│   ├── page.tsx            # Strona główna — kompozycja sekcji
│   └── globals.css         # Globalne style i zmienne CSS
├── components/
│   ├── Hero.tsx            # Sekcja Hero z efektem Parallax
│   ├── CuratedSpecimens.tsx# Karty roślin z mikrointerakcjami
│   ├── WhiteGloveConcierge.tsx # Interaktywny konfigurator
│   ├── Gallery.tsx         # Galeria realizacji — Masonry Grid
│   ├── BotanicalPassports.tsx  # Paszporty botaniczne
│   └── Footer.tsx          # Stopka z zapisem do klubu
├── lib/
│   └── types.ts            # Wspólne typy TypeScript
├── public/
│   └── images/             # Optymalizowane obrazy
├── tailwind.config.ts      # Konfiguracja Tailwind z motywem
├── tsconfig.json
└── package.json
```

## 🚀 Start

```bash
# Instalacja zależności
npm install

# Serwer deweloperski
npm run dev

# Build produkcyjny
npm run build
```

## 📄 Licencja

Projekt prywatny — Botanique Privé © 2026
