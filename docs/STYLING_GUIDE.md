# 🎨 Styling & Design Guide

## 1. Color Palette

### Primary Colors
| Color | Hex | Usage | Tailwind |
|-------|-----|-------|----------|
| Rose | `#ec4899` | Main accent, headings, buttons | `pink-500` |
| Rose Light | `#fce7f3` | Background tints | `pink-100` |
| Rose Muted | `#f472b6` | Hover states, secondary | `pink-400` |

### Neutral Colors
| Color | Hex | Usage | Tailwind |
|-------|-----|-------|----------|
| Gray Dark | `#1f2937` | Body text | `gray-800` |
| Gray | `#6b7280` | Secondary text | `gray-500` |
| Gray Light | `#f3f4f6` | Background | `gray-100` |
| White | `#ffffff` | Card backgrounds | `white` |

### Accent Colors
| Color | Hex | Usage | Tailwind |
|-------|-----|-------|----------|
| Warm Gold | `#fbbf24` | Highlights, surprise | `amber-400` |
| Green | `#10b981` | Success, confirmation | `emerald-500` |

### Gradients
```css
/* Rose Gradient (Hero) */
background: linear-gradient(135deg, #fce7f3 0%, #ec4899 100%);

/* Warm Gradient (Success) */
background: linear-gradient(135deg, #fef3c7 0%, #fbbf24 100%);

/* Neutral Gradient (Background) */
background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
```

---

## 2. Typography

### Font Stack
```css
/* Headings (Elegant, Modern) */
font-family: 'Poppins', 'Segoe UI', sans-serif;
font-weight: 600-700;

/* Body (Readable, Friendly) */
font-family: 'Inter', 'Segoe UI', sans-serif;
font-weight: 400-500;

/* Quote/Letter (Serif, Elegant) */
font-family: 'Georgia', 'Times New Roman', serif;
font-weight: 400;
font-style: italic;
```

### Size Scale
```
Hierarchy (Mobile → Desktop):

H1: 32px → 48px  (font-bold, tracking-tight)
H2: 28px → 40px  (font-bold, tracking-tight)
H3: 24px → 32px  (font-semibold, tracking-tight)
H4: 20px → 24px  (font-semibold)
Body: 16px → 16px (font-normal)
Small: 14px → 14px (font-normal, text-gray-600)
Tiny: 12px → 12px (font-normal, text-gray-500)
```

### Line Height
```
Headings: 1.2 (tight)
Body: 1.6 (comfortable)
Letter: 1.8 (airy)
```

### Letter Spacing
```
Headings: -0.02em (tight, professional)
Body: 0 (normal)
Uppercase: 0.1em (expanded)
```

### Tailwind Classes
```typescript
// Headings
'text-4xl md:text-5xl font-bold leading-tight tracking-tight'

// Body
'text-base md:text-lg font-normal leading-relaxed text-gray-700'

// Small text
'text-sm text-gray-600 leading-snug'

// Letter
'text-lg leading-loose font-serif text-gray-800 italic'
```

---

## 3. Spacing System (4px base)

```
xs: 4px   (0.25rem)
sm: 8px   (0.5rem)
md: 12px  (0.75rem)
lg: 16px  (1rem)
xl: 24px  (1.5rem)
2xl: 32px (2rem)
3xl: 40px (2.5rem)
4xl: 48px (3rem)
5xl: 64px (4rem)
```

### Section Spacing
```typescript
// Mobile
<section className="py-12 px-4">
  {/* 48px vertical, 16px horizontal */}

// Desktop
<section className="py-20 px-8">
  {/* 80px vertical, 32px horizontal */}

// Alternative
<section className="py-16 md:py-24 px-6 md:px-12">
```

### Component Spacing
```
Container max-width: 1024px (lg breakpoint)
Padding: 16px mobile, 24px desktop
Gap between items: 12-16px
Margin bottom between sections: 40-60px
```

---

## 4. Rounded Corners & Borders

```
Sharp: 0px
Tiny: 4px  (rounded-sm)
Small: 6px (rounded)
Medium: 8px (rounded-md)
Large: 12px (rounded-lg)
XL: 16px (rounded-xl)
Full: 9999px (rounded-full)
```

### Usage
```
Images: rounded-lg (12px)
Buttons: rounded-lg (12px)
Cards: rounded-xl (16px)
Gallery items: rounded-lg (12px)
Input fields: rounded-md (6px)
```

### Borders
```
Default: 1px solid #e5e7eb (gray-200)
Divider: 1px solid #f3f4f6 (gray-100)
Focus: 2px solid #ec4899 (rose)
Highlight: 2px solid #fbbf24 (amber)
```

---

## 5. Shadow System
```typescript
// No shadow (flat)
box-shadow: none

// Light elevation
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)

// Medium elevation (cards, buttons hover)
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)

// Strong elevation (modals, dropdowns)
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1)

// Rose glow (special elements)
box-shadow: 0 0 30px rgba(236, 72, 153, 0.3)

// Amber glow (surprise element)
box-shadow: 0 0 20px rgba(251, 191, 36, 0.4)
```

### Tailwind Shadows
```
shadow-sm      Light
shadow-md      Medium (default cards)
shadow-lg      Strong
shadow-xl      Extra strong
shadow-2xl     Very strong (hero)
```

---

## 6. Buttons

### Primary Button (Rose)
```html
<button className="
  px-6 py-3
  bg-pink-500 hover:bg-pink-600 active:bg-pink-700
  text-white font-semibold text-base
  rounded-lg
  shadow-md hover:shadow-lg
  transition-all duration-300
  cursor-pointer
  min-h-12 min-w-12  /* Touch target: 48px */
">
  Click me
</button>
```

### Secondary Button (Outline)
```html
<button className="
  px-6 py-3
  border-2 border-pink-500
  text-pink-600 hover:bg-pink-50
  font-semibold text-base
  rounded-lg
  transition-all duration-300
  cursor-pointer
  min-h-12
">
  Secondary
</button>
```

### Surprise Button (Gold + Animation)
```html
<button className="
  px-8 py-4
  bg-gradient-to-r from-amber-400 to-amber-500
  hover:from-amber-500 hover:to-amber-600
  text-white font-bold text-lg
  rounded-lg
  shadow-lg hover:shadow-xl
  animate-pulse
  transition-all duration-300
  cursor-pointer
  min-h-14
">
  ✨ Bấm đi!
</button>
```

---

## 7. Cards & Containers

### Standard Card
```html
<div className="
  bg-white
  rounded-lg
  shadow-md
  p-6
  border border-gray-100
">
  {/* Content */}
</div>
```

### Gradient Card (Rose)
```html
<div className="
  bg-gradient-to-br from-pink-50 to-pink-100
  rounded-lg
  p-8
  border border-pink-200
">
  {/* Content */}
</div>
```

### Hero Container (Full viewport)
```html
<section className="
  min-h-screen
  w-full
  bg-gradient-to-b from-pink-50 to-white
  flex items-center justify-center
  px-4 py-20
">
  {/* Content centered */}
</section>
```

---

## 8. Input Fields & Forms

```html
<input 
  type="text"
  placeholder="Your name"
  className="
    w-full
    px-4 py-2
    border border-gray-300
    rounded-md
    focus:outline-none
    focus:ring-2
    focus:ring-pink-400
    focus:border-transparent
    text-base
    transition-all duration-300
  "
/>
```

---

## 9. Animations & Transitions

### Fade In
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Slide Up
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  Content
</motion.div>
```

### Hover Scale (Button)
```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  Hover me
</motion.button>
```

### Pulse (Continuous)
```html
<div className="animate-pulse">
  {/* Subtle pulsing effect */}
</div>
```

### Bounce (Attention)
```html
<div className="animate-bounce">
  {/* Bouncing effect */}
</div>
```

---

## 10. Responsive Breakpoints

```typescript
// Mobile first approach

// Default (Mobile): 0px - 639px
display: 'block'

// Tablet (sm): 640px - 767px
sm: display-block md:hidden

// Tablet+ (md): 768px - 1023px
md: display-block lg:hidden

// Desktop (lg): 1024px - 1279px
lg: display-block

// Large Desktop (xl): 1280px+
xl: display-block

// Example:
<div className="
  grid
  grid-cols-2       /* Mobile: 2 columns */
  md:grid-cols-3    /* Tablet: 3 columns */
  lg:grid-cols-4    /* Desktop: 4 columns */
  gap-4
">
```

---

## 11. Dark Mode (Optional)

If implementing dark mode:

```html
<!-- Light -->
<body className="bg-white text-gray-900">

<!-- Dark -->
<body className="dark:bg-gray-900 dark:text-gray-100">
```

---

## 12. Accessibility (A11y)

### Colors
- Contrast ratio: ≥ 4.5:1 for body text
- Test with: webaim.org/resources/contrastchecker

### Focus States
```css
/* Always visible when tabbing */
:focus-visible {
  outline: 2px solid #ec4899;
  outline-offset: 2px;
}
```

### ARIA Labels
```html
<button aria-label="Close modal">
  ✕
</button>

<img alt="Description for screen readers" src="..." />
```

---

## 13. Print Friendly (If needed)

```css
@media print {
  body {
    color: #000;
    background: #fff;
  }
  
  a::after {
    content: ' (' attr(href) ')';
  }
}
```
