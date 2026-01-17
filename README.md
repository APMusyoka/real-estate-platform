# EstateHub - Real Estate Platform

**EstateHub** is a clean, modern, and high-performance real estate listing application. It allows users to browse properties, filter by criteria, view detailed galleries, and contact agents. Built with a focus on code quality, responsiveness, and premium aesthetics using **Next.js 16** and **Tailwind CSS v4**.

## 🚀 Key Features

*   **🏠 Advanced Listings**: Dynamic property catalog with grid/list view toggles, sorting, and responsive layouts.
*   **❤️ Smart Favorites**: Global state management (Context API) allows users to persist favorite properties across sessions.
*   **🗺️ Interactive Maps**: Features fully functional **Leaflet** maps for property locations and contact pages, dynamically loaded for performance.
*   **📱 Mobile-First Design**: Meticulously crafted for all devices, featuring stackable headers, touch-friendly touch targets, and adaptive grids.
*   **📸 Rich Media**: Immersive property galleries with lightbox support and smooth transitions.
*   **💰 Mortgage Calculator**: Built-in financial tool for real-time payment estimation.
*   **🎨 Custom UI Kit**: Includes accessible custom `Select` dropdowns, badges, and notification toasts.

## 🛠️ Tech Stack & Tools

*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using `bg-linear-to-r`, `shrink-0`, etc.)
*   **Language**: TypeScript
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Maps**: Leaflet / React Leaflet
*   **State Management**: React Context + LocalStorage
*   **Font**: Geist Sans & Mono

## 📂 Project Structure

A quick guide to navigating the codebase:

```
src/
├── app/                  # Next.js App Router pages
│   ├── properties/       # Property listing & id-based detail pages
│   ├── favorites/        # User favorites page
│   ├── contact/          # Contact page with Map integration
│   ├── not-found.tsx     # Custom 404 page
│   └── layout.tsx        # Root layout with Context Providers
├── components/           # Reusable UI components
│   ├── PropertyCard.tsx  # Main listing card (Grid/List variants)
│   ├── PropertyMap.tsx   # Leaflet map wrapper
│   ├── Select.tsx        # Custom accessible dropdown
│   └── ...
├── context/              # Global state management
│   ├── FavoritesContext  # Logic for saving/persisting favorites
│   └── ToastContext      # Notification system
├── data/                 # Mock data (Properties, Agents)
└── hooks/                # Custom React hooks
```

## 📋 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/estatehub.git
    cd estatehub
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Explore:**
    Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📚 Documentation

Detailed documentation is available in the [`docs/`](./docs/) directory:

*   [**Developer Notes**](./docs/05-developer-thoughts.md): Analysis of architecture, recent refactors, and future recommendations.
*   [**Features**](./docs/02-key-features.md): Breakdown of functionality.
*   [**Design System**](./docs/03-design-system.md): UI/UX guidelines.

## 💼 Project Status

*   **Current State**: Polished Prototype / Beta.
*   **Ready For**: Backend integration (e.g., Strapi, Sanity, or Supabase).
*   **Recent Updates**: Migrated to Tailwind v4, fixed hydration issues, and implemented global favorites state.

---

*Built with ❤️ for the Modern Web.*
