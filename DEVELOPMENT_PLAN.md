# 🚀 Advent Calendar Development Plan

## 📋 Project Overview
Build a beautiful, interactive advent calendar website with door-opening animations, gift reveals, and a romantic design.

---

## 🛠️ Tech Stack

### Core Framework
- **Next.js 14** (App Router) - React framework with SSR, routing, optimization
- **TypeScript** - Type safety and better DX
- **React 18** - UI library

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Framer Motion** - Animation library for smooth interactions
- **Lucide React** - Icon library

### Additional Libraries
- **date-fns** or **dayjs** - Date manipulation for unlock logic
- **react-confetti** or **canvas-confetti** - Celebration effects
- **zod** - Schema validation (if needed for forms/data)

### Deployment
- **Vercel** - Hosting platform (seamless Next.js integration)
- **Supabase** (optional) - If storing user preferences or progress

---

## 📁 Project Structure

```
adventscalender/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (calendar grid)
│   ├── globals.css         # Global styles
│   └── api/                # API routes (if needed)
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── badge.tsx
│   ├── Door.tsx            # Door component
│   ├── CalendarGrid.tsx    # Grid layout component
│   ├── GiftModal.tsx       # Gift reveal modal
│   ├── Header.tsx          # Page header
│   └── Footer.tsx          # Page footer
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── calendar.ts         # Calendar logic (unlock dates, etc.)
│   └── gifts.ts            # Gift data/content
├── data/
│   └── gifts.json          # Gift content for each day
├── public/
│   ├── images/             # Gift images, backgrounds
│   └── fonts/              # Custom fonts (if self-hosting)
├── types/
│   └── index.ts            # TypeScript types
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

---

## 🗓️ Development Steps

### Phase 1: Project Setup & Foundation

#### Step 1.1: Initialize Next.js Project
```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
```

#### Step 1.2: Install Dependencies
```bash
npm install framer-motion lucide-react date-fns
npm install -D @types/node
```

#### Step 1.3: Setup shadcn/ui
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card dialog badge tooltip
```

#### Step 1.4: Configure Tailwind
- Update `tailwind.config.ts` with custom colors from design plan
- Add custom fonts (Google Fonts via `next/font`)
- Configure dark mode (optional)

#### Step 1.5: Setup Project Structure
- Create folder structure as outlined above
- Set up TypeScript types
- Create utility functions file

**Deliverable:** Working Next.js app with Tailwind and shadcn/ui configured

---

### Phase 2: Core Components

#### Step 2.1: Create Calendar Logic (`lib/calendar.ts`)
- Function to get current date
- Function to check if door is unlockable (current day or past)
- Function to get day number from date
- Function to format dates for display

**Key Functions:**
```typescript
- isDoorUnlockable(dayNumber: number): boolean
- getCurrentDay(): number
- getDaysUntilChristmas(): number
- formatDate(dayNumber: number): string
```

#### Step 2.2: Create Gift Data Structure (`data/gifts.json` or `lib/gifts.ts`)
- Define gift structure (title, description, image, link, etc.)
- Populate with gift ideas (see GIFT_IDEAS.md)
- Type-safe with TypeScript interfaces

**Gift Structure:**
```typescript
interface Gift {
  day: number;
  title: string;
  description: string;
  image?: string;
  link?: string;
  message?: string;
}
```

#### Step 2.3: Build Door Component (`components/Door.tsx`)
- Props: `day`, `isUnlocked`, `isUnlockable`, `onClick`
- Closed state: Number badge, lock icon (if locked)
- Open state: Gift content or preview
- Hover effects with Framer Motion
- Click handler with unlock logic

**Features:**
- Conditional rendering (locked/unlocked/open)
- Framer Motion animations (hover, click)
- Accessibility (keyboard navigation, ARIA labels)

#### Step 2.4: Build Calendar Grid (`components/CalendarGrid.tsx`)
- Responsive grid layout (2/3/4/6 columns)
- Map over days 1-24
- Render Door components
- Handle door click events

**Layout:**
- Mobile: 2 columns
- Tablet: 3-4 columns
- Desktop: 4-6 columns

#### Step 2.5: Build Gift Modal (`components/GiftModal.tsx`)
- Uses shadcn Dialog component
- Displays gift content (title, description, image, link)
- Close button
- Smooth animations (Framer Motion)
- Optional: Confetti on open

**Content:**
- Gift title
- Personal message
- Image (if available)
- Link to gift or action button

---

### Phase 3: Animations & Interactions

#### Step 3.1: Door Opening Animation
- Implement 3D rotation or slide animation
- Use Framer Motion `animate` and `variants`
- Add easing for bouncy effect
- Trigger confetti/sparkles on open

**Animation Details:**
- Duration: 600-800ms
- Easing: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Transform: `rotateY(-90deg)` or `translateX(-100%)`

#### Step 3.2: Hover Effects
- Scale up on hover (1.05x)
- Shadow increase
- Glow effect
- Smooth transitions

#### Step 3.3: Page Transitions
- Fade in on page load
- Smooth transitions between states
- Loading states (if needed)

#### Step 3.4: Locked Door Feedback
- Shake animation on click
- Tooltip with unlock date
- Disabled cursor

---

### Phase 4: Styling & Polish

#### Step 4.1: Apply Design System
- Implement color palette from design plan
- Add custom fonts (Google Fonts)
- Create design tokens (spacing, shadows, etc.)
- Style all components consistently

#### Step 4.2: Header Component
- Title and subtitle
- Optional: Countdown timer
- Decorative elements (snowflakes, stars)

#### Step 4.3: Footer Component
- Minimal design
- Personal touch or date indicator

#### Step 4.4: Responsive Design
- Test all breakpoints
- Adjust grid layouts
- Optimize touch interactions
- Ensure readability on all devices

#### Step 4.5: Dark Mode (Optional)
- Implement dark mode toggle
- Adjust colors for dark theme
- Test contrast and readability

---

### Phase 5: Data & State Management

#### Step 5.1: Local Storage (Optional)
- Store which doors have been opened
- Persist user progress
- Load state on page refresh

**Implementation:**
```typescript
- saveOpenedDoor(day: number)
- getOpenedDoors(): number[]
- isDoorOpened(day: number): boolean
```

#### Step 5.2: Gift Content Management
- Load gift data from JSON or TypeScript file
- Handle missing gifts gracefully
- Add fallback content

---

### Phase 6: Special Features

#### Step 6.1: Background Effects (Optional)
- Snowflakes animation (CSS or library)
- Particle effects
- Subtle parallax scrolling

#### Step 6.2: Sound Effects (Optional)
- Door open sound
- Background music toggle
- Respect user preferences (muted by default)

#### Step 6.3: Progress Indicator
- Visual progress bar
- Days remaining counter
- Encouragement messages

---

### Phase 7: Testing & Optimization

#### Step 7.1: Functionality Testing
- Test door unlocking logic
- Verify date-based restrictions
- Test all animations
- Check responsive layouts

#### Step 7.2: Performance Optimization
- Lazy load images
- Optimize animations (use `will-change` sparingly)
- Code splitting
- Image optimization (Next.js Image component)

#### Step 7.3: Accessibility Audit
- Keyboard navigation
- Screen reader compatibility
- Color contrast
- Focus indicators
- ARIA labels

#### Step 7.4: Browser Testing
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

---

### Phase 8: Deployment

#### Step 8.1: Prepare for Production
- Environment variables (if needed)
- Build optimization
- Error handling
- 404 pages

#### Step 8.2: Deploy to Vercel
- Connect GitHub repository
- Configure build settings
- Set environment variables
- Deploy and test

#### Step 8.3: Final Checks
- Test on production URL
- Verify all features work
- Check performance (Lighthouse)
- Mobile testing on real devices

---

## 🎯 Implementation Priority

### Must Have (MVP)
1. ✅ Project setup
2. ✅ Door component with basic animations
3. ✅ Calendar grid layout
4. ✅ Unlock logic (date-based)
5. ✅ Gift modal/reveal
6. ✅ Basic styling

### Should Have
7. ✅ Smooth animations (Framer Motion)
8. ✅ Responsive design
9. ✅ Hover effects
10. ✅ Confetti/sparkles on open

### Nice to Have
11. ⭐ Background effects (snowflakes)
12. ⭐ Sound effects
13. ⭐ Dark mode
14. ⭐ Progress indicator
15. ⭐ Local storage persistence

---

## 🐛 Potential Challenges & Solutions

### Challenge 1: Date/Time Zone Issues
**Solution:** Use UTC dates or user's local timezone consistently. Consider using a date library like `date-fns-tz`.

### Challenge 2: Animation Performance
**Solution:** Use `transform` and `opacity` for animations (GPU-accelerated). Avoid animating `width`, `height`, `top`, `left`.

### Challenge 3: Mobile Touch Interactions
**Solution:** Test on real devices. Use touch-friendly sizes (min 44x44px). Consider swipe gestures.

### Challenge 4: Gift Content Management
**Solution:** Use a JSON file or TypeScript object. Consider a CMS if content changes frequently.

---

## 📝 Development Checklist

### Setup
- [ ] Initialize Next.js project
- [ ] Install dependencies
- [ ] Setup shadcn/ui
- [ ] Configure Tailwind
- [ ] Create folder structure

### Core Features
- [ ] Calendar logic (unlock dates)
- [ ] Gift data structure
- [ ] Door component
- [ ] Calendar grid
- [ ] Gift modal

### Animations
- [ ] Door opening animation
- [ ] Hover effects
- [ ] Page transitions
- [ ] Locked door feedback

### Styling
- [ ] Design system implementation
- [ ] Header component
- [ ] Footer component
- [ ] Responsive design
- [ ] Dark mode (optional)

### Polish
- [ ] Background effects
- [ ] Sound effects (optional)
- [ ] Progress indicator
- [ ] Local storage

### Testing & Deployment
- [ ] Functionality testing
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Browser testing
- [ ] Deploy to Vercel

---

## 🎉 Success Criteria

- ✅ All 24 doors are functional
- ✅ Doors unlock based on current date
- ✅ Smooth, delightful animations
- ✅ Responsive on all devices
- ✅ Accessible and keyboard-navigable
- ✅ Beautiful, romantic design
- ✅ Fast loading and performant
- ✅ Deployed and accessible

---

## 📚 Resources & Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [shadcn/ui Docs](https://ui.shadcn.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

**Happy coding! Build something beautiful and full of love! ❤️🎄**

