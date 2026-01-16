# Design System

A comprehensive design system for the Real Estate Platform ensuring consistency, accessibility, and visual excellence.

---

## 🎨 Design Principles

### Core Values
1. **Trust & Professionalism** - Design inspires confidence in high-value transactions
2. **Clarity & Simplicity** - Information is easy to find and understand
3. **Visual Excellence** - Premium aesthetics that showcase properties beautifully
4. **Accessibility First** - Usable by everyone, regardless of ability
5. **Performance** - Fast, responsive, and smooth interactions

---

## 🌈 Color Palette

### Primary Colors
```css
/* Primary Blue - Trust, reliability */
--color-primary-50: hsl(211, 100%, 97%);
--color-primary-100: hsl(211, 100%, 93%);
--color-primary-200: hsl(211, 100%, 85%);
--color-primary-300: hsl(211, 100%, 73%);
--color-primary-400: hsl(211, 100%, 61%);
--color-primary-500: hsl(211, 85%, 53%);  /* Main brand color */
--color-primary-600: hsl(211, 85%, 45%);
--color-primary-700: hsl(211, 85%, 37%);
--color-primary-800: hsl(211, 85%, 29%);
--color-primary-900: hsl(211, 85%, 21%);
--color-primary-950: hsl(211, 85%, 13%);
```

### Secondary Colors
```css
/* Emerald Green - Success, available properties */
--color-secondary-50: hsl(152, 76%, 97%);
--color-secondary-100: hsl(152, 76%, 93%);
--color-secondary-200: hsl(152, 76%, 85%);
--color-secondary-300: hsl(152, 76%, 73%);
--color-secondary-400: hsl(152, 76%, 61%);
--color-secondary-500: hsl(152, 61%, 50%);  /* Accent color */
--color-secondary-600: hsl(152, 61%, 42%);
--color-secondary-700: hsl(152, 61%, 34%);
--color-secondary-800: hsl(152, 61%, 26%);
--color-secondary-900: hsl(152, 61%, 18%);
```

### Neutral Colors
```css
/* Slate Gray - Text, backgrounds */
--color-neutral-0: hsl(0, 0%, 100%);      /* Pure white */
--color-neutral-50: hsl(210, 20%, 98%);
--color-neutral-100: hsl(210, 20%, 96%);
--color-neutral-200: hsl(210, 16%, 93%);
--color-neutral-300: hsl(210, 14%, 89%);
--color-neutral-400: hsl(210, 14%, 83%);
--color-neutral-500: hsl(210, 11%, 71%);
--color-neutral-600: hsl(210, 9%, 55%);
--color-neutral-700: hsl(210, 10%, 40%);
--color-neutral-800: hsl(210, 11%, 25%);
--color-neutral-900: hsl(210, 15%, 15%);
--color-neutral-950: hsl(210, 20%, 8%);
--color-neutral-1000: hsl(0, 0%, 0%);     /* Pure black */
```

### Semantic Colors
```css
/* Success */
--color-success-light: hsl(142, 76%, 96%);
--color-success: hsl(142, 71%, 45%);
--color-success-dark: hsl(142, 71%, 35%);

/* Warning */
--color-warning-light: hsl(38, 92%, 95%);
--color-warning: hsl(38, 92%, 50%);
--color-warning-dark: hsl(38, 92%, 40%);

/* Error */
--color-error-light: hsl(0, 86%, 97%);
--color-error: hsl(0, 72%, 51%);
--color-error-dark: hsl(0, 72%, 41%);

/* Info */
--color-info-light: hsl(199, 89%, 95%);
--color-info: hsl(199, 89%, 48%);
--color-info-dark: hsl(199, 89%, 38%);
```

### Property Status Colors
```css
--color-status-for-sale: hsl(211, 85%, 53%);     /* Primary blue */
--color-status-for-rent: hsl(267, 84%, 63%);     /* Purple */
--color-status-sold: hsl(0, 0%, 60%);            /* Gray */
--color-status-pending: hsl(38, 92%, 50%);       /* Amber */
--color-status-new: hsl(152, 61%, 50%);          /* Green */
--color-status-featured: hsl(45, 100%, 51%);     /* Gold */
```

---

## 📝 Typography

### Font Families
```css
/* Primary Font - Clean, modern, professional */
--font-primary: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", 
                Roboto, "Helvetica Neue", Arial, sans-serif;

/* Display Font - For headlines and hero text */
--font-display: "Outfit", "Inter", sans-serif;

/* Monospace - For numbers, prices, specifications */
--font-mono: "JetBrains Mono", "SF Mono", Monaco, "Cascadia Code", 
             "Courier New", monospace;
```

### Font Sizes
```css
/* Mobile-first with responsive scaling */
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);      /* 12-14px */
--text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);        /* 14-16px */
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);        /* 16-18px */
--text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);       /* 18-20px */
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);        /* 20-24px */
--text-2xl: clamp(1.5rem, 1.3rem + 1vw, 1.875rem);         /* 24-30px */
--text-3xl: clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem);    /* 30-36px */
--text-4xl: clamp(2.25rem, 1.9rem + 1.75vw, 3rem);         /* 36-48px */
--text-5xl: clamp(3rem, 2.5rem + 2.5vw, 3.75rem);          /* 48-60px */
--text-6xl: clamp(3.75rem, 3rem + 3.75vw, 4.5rem);         /* 60-72px */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
--font-black: 900;
```

### Line Heights
```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### Typography Scale
```css
/* Headings */
h1: var(--text-4xl) / var(--leading-tight) / var(--font-bold)
h2: var(--text-3xl) / var(--leading-tight) / var(--font-bold)
h3: var(--text-2xl) / var(--leading-snug) / var(--font-semibold)
h4: var(--text-xl) / var(--leading-snug) / var(--font-semibold)
h5: var(--text-lg) / var(--leading-normal) / var(--font-medium)
h6: var(--text-base) / var(--leading-normal) / var(--font-medium)

/* Body */
body: var(--text-base) / var(--leading-relaxed) / var(--font-normal)
small: var(--text-sm) / var(--leading-normal) / var(--font-normal)
caption: var(--text-xs) / var(--leading-normal) / var(--font-normal)
```

---

## 📏 Spacing System

### Base Unit
```css
--spacing-unit: 0.25rem; /* 4px base unit */
```

### Spacing Scale
```css
--spacing-0: 0;
--spacing-1: 0.25rem;    /* 4px */
--spacing-2: 0.5rem;     /* 8px */
--spacing-3: 0.75rem;    /* 12px */
--spacing-4: 1rem;       /* 16px */
--spacing-5: 1.25rem;    /* 20px */
--spacing-6: 1.5rem;     /* 24px */
--spacing-8: 2rem;       /* 32px */
--spacing-10: 2.5rem;    /* 40px */
--spacing-12: 3rem;      /* 48px */
--spacing-16: 4rem;      /* 64px */
--spacing-20: 5rem;      /* 80px */
--spacing-24: 6rem;      /* 96px */
--spacing-32: 8rem;      /* 128px */
--spacing-40: 10rem;     /* 160px */
--spacing-48: 12rem;     /* 192px */
--spacing-64: 16rem;     /* 256px */
```

### Container Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

---

## 🔲 Border & Radius

### Border Widths
```css
--border-0: 0;
--border-1: 1px;
--border-2: 2px;
--border-4: 4px;
--border-8: 8px;
```

### Border Radius
```css
--radius-none: 0;
--radius-sm: 0.25rem;    /* 4px */
--radius-base: 0.375rem; /* 6px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-3xl: 2rem;      /* 32px */
--radius-full: 9999px;   /* Pill shape */
```

---

## 🌑 Shadows & Elevation

### Box Shadows
```css
/* Soft shadows for a premium feel */
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 
             0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
             0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
             0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
             0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Colored shadows for interactive elements */
--shadow-primary: 0 4px 14px 0 rgba(59, 130, 246, 0.25);
--shadow-success: 0 4px 14px 0 rgba(16, 185, 129, 0.25);
--shadow-error: 0 4px 14px 0 rgba(239, 68, 68, 0.25);
```

### Elevation Layers
```css
--z-base: 0;           /* Default layer */
--z-dropdown: 10;      /* Dropdowns, tooltips */
--z-sticky: 20;        /* Sticky headers */
--z-fixed: 30;         /* Fixed elements */
--z-modal-backdrop: 40; /* Modal backgrounds */
--z-modal: 50;         /* Modal dialogs */
--z-popover: 60;       /* Popovers, notifications */
--z-toast: 70;         /* Toast messages */
--z-tooltip: 80;       /* Tooltips */
```

---

## 🎭 Animations & Transitions

### Timing Functions
```css
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-smooth: cubic-bezier(0.45, 0, 0.15, 1);
```

### Durations
```css
--duration-instant: 75ms;
--duration-fast: 150ms;
--duration-base: 200ms;
--duration-medium: 300ms;
--duration-slow: 500ms;
--duration-slower: 700ms;
```

### Common Transitions
```css
--transition-colors: color var(--duration-base) var(--ease-in-out),
                     background-color var(--duration-base) var(--ease-in-out),
                     border-color var(--duration-base) var(--ease-in-out);

--transition-transform: transform var(--duration-base) var(--ease-smooth);
--transition-all: all var(--duration-base) var(--ease-in-out);
--transition-opacity: opacity var(--duration-base) var(--ease-in-out);
--transition-shadow: box-shadow var(--duration-base) var(--ease-in-out);
```

### Keyframe Animations
```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { transform: translateY(10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slide-down {
  from { transform: translateY(-10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes scale-in {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
```

---

## 🎯 Component Styles

### Buttons

#### Primary Button
```css
background: var(--color-primary-500);
color: var(--color-neutral-0);
padding: var(--spacing-3) var(--spacing-6);
border-radius: var(--radius-lg);
font-weight: var(--font-semibold);
transition: var(--transition-all);

hover: {
  background: var(--color-primary-600);
  transform: translateY(-1px);
  box-shadow: var(--shadow-primary);
}

active: {
  transform: translateY(0);
}
```

#### Secondary Button
```css
background: transparent;
color: var(--color-primary-500);
border: var(--border-2) solid var(--color-primary-500);
padding: var(--spacing-3) var(--spacing-6);
border-radius: var(--radius-lg);
font-weight: var(--font-semibold);
transition: var(--transition-all);

hover: {
  background: var(--color-primary-50);
  transform: translateY(-1px);
}
```

#### Ghost Button
```css
background: transparent;
color: var(--color-neutral-700);
padding: var(--spacing-3) var(--spacing-6);
border-radius: var(--radius-lg);
transition: var(--transition-colors);

hover: {
  background: var(--color-neutral-100);
}
```

### Input Fields
```css
background: var(--color-neutral-0);
border: var(--border-1) solid var(--color-neutral-300);
padding: var(--spacing-3) var(--spacing-4);
border-radius: var(--radius-md);
font-size: var(--text-base);
transition: var(--transition-all);

focus: {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

error: {
  border-color: var(--color-error);
}
```

### Cards
```css
background: var(--color-neutral-0);
border: var(--border-1) solid var(--color-neutral-200);
border-radius: var(--radius-xl);
padding: var(--spacing-6);
box-shadow: var(--shadow-sm);
transition: var(--transition-all);

hover: {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
  border-color: var(--color-primary-200);
}
```

### Badges
```css
/* Status Badge */
padding: var(--spacing-2) var(--spacing-3);
border-radius: var(--radius-full);
font-size: var(--text-xs);
font-weight: var(--font-semibold);
text-transform: uppercase;
letter-spacing: 0.05em;

/* Price Badge */
font-family: var(--font-mono);
font-size: var(--text-2xl);
font-weight: var(--font-bold);
color: var(--color-primary-700);
```

---

## 🖼️ Image Guidelines

### Property Images
- **Aspect Ratios**: 
  - Thumbnail: 4:3 (1200x900px)
  - Hero: 16:9 (1920x1080px)
  - Portrait: 3:4 (900x1200px)
- **Format**: WebP with JPEG fallback
- **Optimization**: Next.js Image component
- **Lazy Loading**: Below the fold
- **Placeholder**: Low-quality blur placeholder

### Avatar Images
- **Size**: 40px, 64px, 96px, 128px
- **Shape**: Circle (border-radius: 50%)
- **Fallback**: Initials with gradient background

---

## 🎨 Gradients

### Brand Gradients
```css
--gradient-primary: linear-gradient(135deg, 
  hsl(211, 85%, 53%) 0%, 
  hsl(211, 85%, 45%) 100%);

--gradient-sunset: linear-gradient(135deg, 
  hsl(45, 100%, 65%) 0%, 
  hsl(25, 100%, 60%) 50%, 
  hsl(0, 80%, 55%) 100%);

--gradient-ocean: linear-gradient(135deg, 
  hsl(199, 89%, 48%) 0%, 
  hsl(211, 85%, 53%) 100%);

--gradient-forest: linear-gradient(135deg, 
  hsl(152, 61%, 50%) 0%, 
  hsl(142, 71%, 45%) 100%);
```

### Background Gradients
```css
--gradient-light: linear-gradient(180deg, 
  var(--color-neutral-0) 0%, 
  var(--color-neutral-50) 100%);

--gradient-mesh: radial-gradient(at 0% 0%, 
  hsla(211, 85%, 97%, 1) 0%, 
  transparent 50%),
  radial-gradient(at 100% 100%, 
  hsla(152, 76%, 97%, 1) 0%, 
  transparent 50%);
```

---

## 📱 Breakpoints

### Responsive Design
```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Tablet */
--breakpoint-md: 768px;   /* Tablet landscape */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
--breakpoint-2xl: 1536px; /* Extra large desktop */
```

### Grid System
```css
/* 12-column grid */
--grid-columns: 12;
--grid-gap: var(--spacing-6);

/* Mobile: 1 column */
/* Tablet: 2-3 columns */
/* Desktop: 3-4 columns */
```

---

## ♿ Accessibility

### Focus States
```css
--focus-ring: 0 0 0 3px rgba(59, 130, 246, 0.5);
--focus-ring-offset: 2px;
```

### Color Contrast
- **WCAG AA**: Minimum 4.5:1 for normal text
- **WCAG AAA**: Minimum 7:1 for normal text
- **Large Text**: Minimum 3:1

### Interactive Elements
- Minimum touch target: 44x44px
- Clear hover/focus states
- Keyboard navigation support
- Screen reader labels

---

## 🎪 Micro-interactions

### Hover Effects
- **Property Cards**: Lift + shadow increase
- **Buttons**: Subtle lift + color change
- **Links**: Underline animation
- **Images**: Subtle zoom (1.05x scale)

### Loading States
- **Skeleton screens**: For content loading
- **Shimmer effect**: For image loading
- **Spinners**: For action feedback
- **Progress bars**: For multi-step processes

### Success/Error States
- **Success**: Green checkmark animation
- **Error**: Red shake animation
- **Warning**: Yellow pulse animation

---

## 📐 Layout Patterns

### Page Layouts
1. **Full Width Hero** + Content Grid
2. **Sidebar** + Main Content
3. **Two-Column** Layout
4. **Three-Column** Grid
5. **Masonry** Grid (for property listings)

### Section Spacing
```css
--section-padding-mobile: var(--spacing-12);
--section-padding-tablet: var(--spacing-16);
--section-padding-desktop: var(--spacing-24);
```

---

## 🎨 Icon System

### Icon Library
- **Primary**: Heroicons (outline & solid)
- **Alternative**: Lucide Icons
- **Size Scale**: 16px, 20px, 24px, 32px, 48px

### Icon Usage
- **Navigation**: 20px outline
- **Buttons**: 20px (left-aligned with text)
- **Feature blocks**: 32px or 48px
- **Status indicators**: 16px

---

## 🌓 Dark Mode (Optional)

### Dark Color Palette
```css
--dark-bg-primary: hsl(210, 20%, 8%);
--dark-bg-secondary: hsl(210, 15%, 12%);
--dark-bg-elevated: hsl(210, 15%, 15%);
--dark-text-primary: hsl(210, 20%, 98%);
--dark-text-secondary: hsl(210, 11%, 71%);
--dark-border: hsl(210, 15%, 20%);
```

---

## 📋 Design Checklist

### Before Implementation
- [ ] Review all color combinations for accessibility
- [ ] Test responsive breakpoints
- [ ] Validate font loading performance
- [ ] Create component library in Figma/design tool
- [ ] Document component variations

### During Development
- [ ] Use CSS variables for all design tokens
- [ ] Implement consistent spacing
- [ ] Add smooth transitions
- [ ] Test keyboard navigation
- [ ] Verify mobile responsiveness

### Quality Assurance
- [ ] Cross-browser testing
- [ ] Screen reader testing
- [ ] Performance audit (Lighthouse)
- [ ] Visual regression testing
- [ ] User testing

---

*This design system ensures visual consistency, accessibility, and a premium user experience across the entire Real Estate Platform.*
