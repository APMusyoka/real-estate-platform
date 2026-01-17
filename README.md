# EstateHub - Real Estate Platform

**EstateHub** is a premium, high-performance real estate listing application built for the modern web. It combines a visually stunning "rich aesthetics" design with a robust, mobile-first architecture.

Built with **Next.js 16 (App Router)** and **Tailwind CSS v4**, EstateHub demonstrates how to build scalable, responsive, and interactive web applications with a focus on code quality and user experience.

## 🚀 Key Features

*   **� Advanced Property Listings**:
    *   Dynamic grid and list views with seamless layout transitions.
    *   Client-side filtering and sorting for instant results.
    *   Responsive design that adapts perfectly from mobile to 4K desktops.
*   **❤️ Global Favorites System**:
    *   Persist favorite properties across the session using a custom `FavoritesContext`.
    *   Instant state synchronization across all components.
*   **🗺️ Interactive Maps**:
    *   Integrated **Leaflet** maps for property locations and contact pages.
    *   Lazy-loaded for optimal performance (Zero SSR errors).
*   **� Immersive Media**:
    *   Custom-built **Lightbox Gallery** for high-resolution property image viewing.
    *   Smooth entry/exit animations.
*   **💰 Mortgage Calculator**:
    *   Real-time monthly payment estimation tool.
    *   Interactive sliders and immediate visual feedback.
*   **🎨 Premium UI Kit**:
    *   Custom, accessible `Select` dropdowns and `Input` fields.
    *   Toast notification system for user feedback (e.g., "Added to Favorites").
    *   Modern glassmorphism, gradients, and micro-interactions.

## 🛠️ Tech Stack

*   **Core Framework**: [Next.js 16.1](https://nextjs.org/) (App Router, Server Components)
*   **UI Library**: [React 19](https://react.dev/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
    *   *Highlights*: using new v4 engine, `bg-linear`, and CSS variables.
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Mapping**: React Leaflet + Leaflet.js
*   **Typography**: Geist Sans & Geist Mono (Next.js defaults)
*   **State Management**: React Context API + LocalStorage

## 📂 Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── about/            # About page
│   ├── agents/           # Real estate agents directory
│   ├── contact/          # Contact page with Map integration
│   ├── favorites/        # User favorites page
│   ├── properties/       # Listing & detail (dynamic [id]) pages
│   ├── layout.tsx        # Root layout (Providers + Global UI)
│   └── page.tsx          # Landing page
├── components/           # Reusable UI Components
│   ├── Lightbox.tsx      # Full-screen image gallery
│   ├── MortgageCalculator.tsx
│   ├── PropertyCard.tsx  # Dual-mode (Grid/List) listing card
│   ├── PropertyMap.tsx   # Leaflet map wrapper
│   ├── Select.tsx        # Custom accessible dropdown
│   ├── Toast.tsx         # Notification component
│   └── ... (Button, Input, Footer, Navigation)
├── context/              # Global State
│   ├── FavoritesContext.tsx
│   └── ToastContext.tsx
├── data/                 # Mock Data
│   └── properties.ts     # Static property data for prototype
├── hooks/                # Custom Hooks
│   ├── useFavorites.ts
│   └── useToast.ts
└── styles/               # Global styles (if any extraneous CSS)
```

## 📋 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/estatehub.git
    cd estatehub
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Documentation

For deeper dives into the codebase, check the `docs/` directory:

*   [**Developer Notes**](./docs/05-developer-thoughts.md): Analysis of recent architectural decisions (Tailwind v4 migration, hydration fixes).
*   [**Design System**](./docs/03-design-system.md): Guidelines on the "Rich Aesthetics" visual style.
*   [**Features**](./docs/02-key-features.md): Expanded breakdown of functionality.

## 💼 Project Status

*   **Current Phase**: **Beta / Polished Prototype**
*   **Ready For**: Backend integration (connecting to a CMS like Strapi or Supabase).
*   **Recent Updates**:
    *   Migrated to Tailwind CSS v4.
    *   Fixed hydration mismatches in deeply nested components.
    *   Implemented global `ToastContext` for user feedback.

---

*Built by [Your Name] for the modern web.*
