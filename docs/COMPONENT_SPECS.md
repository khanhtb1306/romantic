# 🧩 Component Specifications

## Overview
Mục tiêu: Chi tiết hóa 7 components chính + data structure/props

---

## 1. Hero Component

### Purpose
Lời chúc 8/3 đầy áp lực, tạo ấn tượng đầu tiên

### Props
```typescript
interface HeroProps {
  recipientName: string;      // Tên người yêu
  greeting?: string;          // Lời chúc (optional)
  subtext?: string;           // Dòng phụ
}
```

### Content
```
━━━━━━━━━━━━━━━━━━━━━━━━━━
        [Decoration]
      Chúc mừng 8/3
        [Em Name]
    Từ một anh yêu cô ❤️
        [Decoration]
━━━━━━━━━━━━━━━━━━━━━━━━━━
[Subtle scroll indicator or "Scroll down" text]
```

### Styling
- Full viewport (min-h-screen)
- Gradient background (rose → warm)
- Center-aligned
- Font size: 48px heading mobile, 64px desktop
- Animation: Fade-in + subtle bounce

### Data
```typescript
const heroData = {
  recipientName: "Em",
  greeting: "Chúc mừng 8/3",
  year: new Date().getFullYear()
};
```

---

## 2. DaysTogether Component

### Purpose
Hiển thị thành công chung - số ngày yêu nhau

### Props
```typescript
interface DaysTogetherProps {
  startDate: Date;  // Ngày bắt đầu yêu nhau
}
```

### Calculation Logic
```typescript
const daysTogether = Math.floor(
  (new Date() - startDate) / (1000 * 60 * 60 * 24)
);
```

### Display
```
━━━━━━━━━━━━━━━━━━━━━━━━━
  Chúng ta đã bên nhau
        
       [BIG NUMBER]
              ngày
               
  Và mỗi ngày đều tuyệt vời ❤️
━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Styling
- BIG number: 72px, bold, rose color
- Text: 20px, gray
- Background: Light rose gradient
- Counter animation: Tăng dần từ 0

### Data
```typescript
const config = {
  startDate: new Date('2023-05-15')  // Ngày bắt đầu
};
```

---

## 3. Countdown Component

### Purpose
Kỳ vọng cho ngày gặp lại

### Props
```typescript
interface CountdownProps {
  reunionDate: Date;
}
```

### Calculation
```typescript
const timeRemaining = reunionDate - new Date();
const days = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));
```

### Display
```
━━━━━━━━━━━━━━━━━━━━━━━━━
   Còn bao lâu nữa
  mới được gặp em?
        
  [DD]  [HH]  [MM]  [SS]
  Ngày  Giờ   Phút  Giây
        
  Chờ em ở ______
━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Styling
- Timer digits: 48px, monospace, rose
- Cards layout (DD/HH/MM/SS)
- Live update (every 1 second)
- Animation: Pulse / glow effect

### Data
```typescript
const config = {
  reunionDate: new Date('2025-03-15'),
  location: "airport / coffee shop / ..."
};
```

---

## 4. Timeline Component

### Purpose
Các cột mốc quan trọng trong mối quan hệ

### Props
```typescript
interface TimelineProps {
  milestones: MilestoneItem[];
}

interface MilestoneItem {
  date: Date;
  title: string;
  description: string;
  emoji?: string;
  image?: string;
}
```

### Display
```
━━━━━━━━━━━━━━━━━━━━━━━━━
    ⬤  📅 2023-05-15
    │  Ngày đầu tiên gặp em
    │  [Optional image]
    │
    ⬤  💑 2023-08-20
    │  Em chấp nhận lời tỏ tình
    │  [Optional image]
    │
    ⬤  ✈️ 2024-12-25
    │  First trip together
    │  [Optional image]
━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Styling
- Vertical line (desktop) / stacked (mobile)
- Circles: 16px, rose
- Images: 200px width, rounded
- Fade-in on scroll

### Data
```typescript
const milestones: MilestoneItem[] = [
  {
    date: new Date('2023-05-15'),
    title: 'First Date',
    description: 'Ngày em bitten em nà 😄',
    emoji: '🎉',
    image: '/images/first-date.jpg'
  },
  // ... more items
];
```

---

## 5. Gallery Component

### Purpose
Hình ảnh kỷ niệm đẹp nhất

### Props
```typescript
interface GalleryProps {
  images: GalleryImage[];
  columns?: number;  // Default: auto-fit
}

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}
```

### Display
```
━━━━━━━━━━━━━━━━━━━━━━━━━
   Những khoảnh khắc
   của chúng ta
   
   [Grid] [of] [photos]
   
   "Cảm ơn em vì những
   khoảnh khắc này ❤️"
━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Styling
- Responsive grid: 2 columns mobile, 3 desktop
- Images: Object-cover (crop not stretch)
- Aspect ratio: 1:1 (square)
- Hover: Scale 1.05 + shadow
- Lazy loading

### Data
```typescript
const images: GalleryImage[] = [
  {
    src: '/images/photo1.jpg',
    alt: 'Us in spring',
    caption: 'Mùa xuân tươi tắn'
  },
  // ... more
];
```

---

## 6. LoveLetter Component

### Purpose
Lá thư cá nhân viết tay (text long-form)

### Props
```typescript
interface LoveLetterProps {
  letterContent: string;
  recipientName: string;
  senderName: string;
}
```

### Display
```
━━━━━━━━━━━━━━━━━━━━━━━━━
  [Handwriting style bg]
  
  " Em yêu quý,
  
  Hôm nay 8/3, anh muốn
  nói với em rằng...
  
  [Long heartfelt message]
  
  Anh yêu em ❤️
  
  Yêu anh,
  Khánh "
  
━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Styling
- Serif font (elegant, handwriting-like)
- Beige/cream background (paper texture)
- Padding: generous (20px+)
- Line height: 1.8 (air, easy to read)
- Text color: dark brown/gray
- Border: subtle frame

### Data
```typescript
const letterContent = `
Em yêu quý,

Hôm nay 8/3, anh muốn...
[Full content]

Yêu anh,
Khánh
`;
```

---

## 7. Surprise Component

### Purpose
Bất ngờ cuối cùng - interactive fun element

### Props
```typescript
interface SurpriseProps {
  onRevealed?: () => void;
}
```

### Mechanics (Choose one or combine)

#### Option A: Confetti Burst
```
Button: [🎉 Bấm đi!]
  → Click → Confetti falls
  → Message: "Em là người đặc biệt nhất! 💝"
```

#### Option B: Interactive Quiz/Choice
```
Button: [?? Trò chơi nhí]
  → Q: "Em yêu anh không?"
  → A: [Có] [Không]
  → Both lead to: "Sai! Anh yêu em thôi!" 💕
```

#### Option C: Love Counter
```
Button: [💕 Đếm tình yêu]
  → Click multiple times
  → Each click: +1 heart counter
  → Milestone: "100 hearts! 🚀"
```

#### Option D: Message Reveal (Recommended)
```
Button: [✨ Bấm cho bất ngờ]
  → Blur effect removed
  → Message: "Anh sắp xin em lên kế hoạch
              cho cuộc gặp mặt tháng 3 này.
              Em sẽ vui chứ? 💍"
```

### Styling
- Button: Bold, rose, shadow
- Animation: Pop/shake on click
- State change: Obvious visual feedback
- Size: Large enough (48px+ height on mobile)

### Data
```typescript
const surpriseData = {
  buttonText: "✨ Bấm cho bất ngờ",
  hiddenMessage: "Anh sắp xin em...",
  celebrationEmoji: "💍"
};
```

---

## 8. Footer/End Section

### Purpose
Penutup dengan call-to-action

### Display
```
━━━━━━━━━━━━━━━━━━━━━━━━━
  Anh yêu em! ❤️
  
  [Button: Gọi em]
  [Button: Chat em]
  
  Made with ❤️ by Khánh
  © 2025
━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 9. Root Data Structure (App.tsx)

```typescript
interface AppConfig {
  recipientName: string;
  startDate: Date;
  reunionDate: Date;
  milestones: MilestoneItem[];
  images: GalleryImage[];
  letterContent: string;
  senderName: string;
  contacts: {
    phone?: string;
    email?: string;
    messenger?: string;
  };
}

const config: AppConfig = {
  recipientName: "Em",
  startDate: new Date('2023-05-15'),
  reunionDate: new Date('2025-03-15'),
  milestones: [...],
  images: [...],
  letterContent: "...",
  senderName: "Khánh",
  contacts: {
    phone: "+84...",
    messenger: "https://..."
  }
};
```

---

## 10. Component Tree

```
App.tsx
├── Hero (config.recipientName)
├── DaysTogether (config.startDate)
├── Countdown (config.reunionDate, config.contacts)
├── Timeline (config.milestones)
├── Gallery (config.images)
├── LoveLetter (config.letterContent, config.senderName)
├── Surprise (hidden message)
└── Footer (config.contacts)
```
