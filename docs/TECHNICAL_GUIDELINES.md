# ⚙️ Hướng dẫn kỹ thuật (Technical Guidelines)

## 1. Stack công nghệ (Tech Stack)

```
Frontend:
├── React 19.2.0
├── TypeScript 5.9.3
├── Vite 7.3.1
├── TailwindCSS
├── Framer Motion (animation)
└── date-fns (date utilities)

Styling:
├── TailwindCSS
├── CSS Modules (nếu cần)
└── Gradient/custom CSS

Build & Deploy:
├── Vite (dev server & builder)
├── ESLint (code quality)
└── GitHub Pages (hosting)
```

---

## 2. Quy ước code (Code Conventions)

### File Structure
```
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   ├── Hero.module.css (nếu cần)
│   │   └── types.ts (nếu có props phức tạp)
│   ├── DaysTogether/
│   ├── Countdown/
│   ├── Timeline/
│   ├── Gallery/
│   ├── LoveLetter/
│   └── Surprise/
├── hooks/
│   └── useCountdown.ts
├── utils/
│   ├── dateUtils.ts
│   ├── constants.ts
│   └── animations.ts
├── types/
│   └── index.ts
├── App.tsx
├── App.css
├── main.tsx
└── index.css
```

### Naming Conventions
- **Components**: PascalCase (Hero.tsx, DaysTogether.tsx)
- **Hooks**: camelCase với prefix `use` (useCountdown, useScrollAnimation)
- **Utils**: camelCase (dateUtils.ts, constants.ts)
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE

### Component Template
```typescript
import { FC } from 'react';
import './ComponentName.css'; // nếu cần

interface ComponentNameProps {
  title?: string;
  onAction?: () => void;
}

const ComponentName: FC<ComponentNameProps> = ({ 
  title = 'Default',
  onAction 
}) => {
  return (
    <section className="py-12 px-4">
      {/* Content */}
    </section>
  );
};

export default ComponentName;
```

---

## 3. Styling Guidelines

### TailwindCSS Usage
- Dùng Tailwind utilities trước, custom CSS khi cần
- Breakpoints:
  - `sm`: 640px (tablet mỏng)
  - `md`: 768px (tablet)
  - `lg`: 1024px (desktop nhỏ)
  - `xl`: 1280px (desktop)

### Mobile-First Approach
```typescript
// ✅ Đúng: Mobile trước, rồi scale up
<div className="p-4 md:p-8 lg:p-12">
  <h1 className="text-2xl md:text-3xl lg:text-4xl">
    Title
  </h1>
</div>

// ❌ Sai: Để max-width constraint quá nhỏ
<div className="max-w-xs md:max-w-full">
```

### Color Usage
```typescript
// Primary (Rose)
className="text-pink-600 bg-pink-50"

// Neutral
className="text-gray-700 bg-gray-100"

// Accent (Warm)
className="text-amber-500 bg-amber-50"
```

### Animation Classes (Framer Motion)
- Animations nên reusable, định nghĩa trong `utils/animations.ts`
- Dùng duration 0.3-1s
- Use `ease: "easeInOut"` default

---

## 4. Performance Optimization

### Image Optimization
```typescript
// ✅ Dùng lazy loading
<img 
  src={image} 
  alt="description"
  loading="lazy"
  className="w-full h-64 object-cover rounded"
/>

// Tối ưu image size:
// - JPG cho photos
// - PNG cho graphics
// - WebP với fallback
```

### Code Splitting
- Framer Motion động import nếu cần
- Lazy load Gallery images
- Chunking tự động với Vite

### CSS Optimization
- Tailwind tự động purge unused styles
- Không duplicate CSS rules
- Consolidate media queries

---

## 5. Testing Checklist (khi hoàn thành)

### Desktop Testing
- [ ] Chrome: Latest
- [ ] Firefox: Latest
- [ ] Safari: Latest
- [ ] Edge: Latest

### Mobile Testing
- [ ] iPhone SE (375px)
- [ ] iPhone 12/13 (390px)
- [ ] Samsung S21 (360px)
- [ ] iPad (768px)

### Performance
- [ ] Lighthouse score > 85
- [ ] Load time < 3s (4G)
- [ ] No console errors

### Functionality
- [ ] Scroll smooth trên tất cả devices
- [ ] Animation không giật lag
- [ ] Buttons clickable (min 44px touch target)
- [ ] Forms accessible

---

## 6. Deployment Checklist

### Pre-deployment
- [ ] Set `homepage` đúng trong package.json
- [ ] Test production build: `yarn build && yarn preview`
- [ ] Check no hardcoded paths
- [ ] minify/optimize hoàn tất

### GitHub Pages Setup
```json
{
  "homepage": "https://username.github.io/romantic",
  "scripts": {
    "deploy": "yarn build && gh-pages -d dist"
  }
}
```

### Deployment Steps
```bash
# 1. Cài gh-pages
yarn add --dev gh-pages

# 2. Setup GitHub Pages (Settings > Pages > GitHub Actions)

# 3. Deploy
yarn deploy

# 4. Verify: https://username.github.io/romantic
```

---

## 7. SEO & Metadata

```html
<!-- index.html -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="A romantic landing page for March 8" />
<meta name="theme-color" content="#ec4899" />
<title>8/3 - Tặng em ❤️</title>
```

---

## 8. Accessibility (A11y)

- [ ] Semantic HTML (`<section>`, `<article>`, `<header>`, etc.)
- [ ] Alt text cho all images
- [ ] Color contrast ratio > 4.5:1
- [ ] Focus states cho interactive elements
- [ ] Keyboard navigation hoạt động
