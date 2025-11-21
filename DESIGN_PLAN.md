# 🎄 Advent Calendar Design Plan

## 🎨 Design Vision
A romantic, enchanting advent calendar website with a warm, cozy aesthetic that feels personal and magical. The design should evoke feelings of love, anticipation, and joy.

---

## 🎯 Design Principles

### Color Palette
- **Primary Colors:**
  - Deep burgundy/rose: `#B91C1C` or `#DC2626` (love & warmth)
  - Soft pink: `#FCE7F3` or `#FDF2F8` (gentleness)
  - Cream/ivory: `#FFF7ED` or `#FEF9F3` (coziness)
  - Gold accents: `#F59E0B` or `#D97706` (magic & sparkle)
  
- **Secondary Colors:**
  - Forest green: `#166534` (Christmas trees)
  - Deep navy: `#1E3A8A` (winter nights)
  - Soft lavender: `#E9D5FF` (dreaminess)

- **Dark Mode:**
  - Dark background: `#0F172A` or `#1E293B`
  - Warm accent lights: `#FBBF24`
  - Soft glows for doors

### Typography
- **Headings:** Playfair Display, Cormorant Garamond, or Dancing Script (elegant, romantic)
- **Body:** Inter, Poppins, or Nunito (readable, friendly)
- **Accent Text:** Handwriting-style fonts for special messages

### Visual Style
- **Aesthetic:** Cozy, romantic, whimsical
- **Mood:** Warm, intimate, magical
- **Texture:** Subtle paper/canvas textures, soft shadows, gentle gradients
- **Icons:** Hand-drawn style or soft, rounded icons

---

## 🏗️ Layout Structure

### Home Page / Calendar Grid
```
┌─────────────────────────────────────────┐
│         Header: "Advent Calendar 2024"  │
│         Subtitle: Personal message      │
├─────────────────────────────────────────┤
│                                         │
│    [1]  [2]  [3]  [4]  [5]  [6]        │
│    [7]  [8]  [9]  [10] [11] [12]       │
│    [13] [14] [15] [16] [17] [18]       │
│    [19] [20] [21] [22] [23] [24]       │
│                                         │
│         (4x6 grid or 3x8 grid)         │
└─────────────────────────────────────────┘
```

### Door Design
- **Closed State:**
  - Door number (1-24) prominently displayed
  - Decorative border/ornamentation
  - Subtle shadow for depth
  - Lock icon or ribbon (if locked)
  - Hover effect: slight lift/shadow increase
  
- **Open State:**
  - Door opens with animation (hinge effect or slide)
  - Reveals gift content inside
  - Soft glow or sparkle effect
  - Message/gift displayed beautifully

---

## ✨ Animations & Interactions

### Door Opening Animation
1. **Hover Effect (Closed Doors):**
   - Slight scale up (1.05x)
   - Shadow intensifies
   - Gentle glow around edges
   - Cursor changes to pointer

2. **Click/Open Animation:**
   - Door rotates on hinge (3D transform) or slides open
   - Duration: 600-800ms
   - Easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` (bouncy, playful)
   - Reveal content with fade-in + slide-up
   - Confetti or sparkle particles on open

3. **Locked Doors:**
   - Shake animation on click (subtle, playful)
   - Tooltip: "Come back on [date]"
   - Disabled cursor

### Page Transitions
- Smooth fade transitions between views
- Parallax scrolling for background elements
- Snowflakes or stars floating in background (subtle)

### Gift Reveal
- Content slides in from bottom
- Fade in with opacity animation
- Optional: Heart emoji or sparkle particles
- Smooth scroll to content if needed

---

## 🎁 Component Design

### Door Component
- **Size:** Responsive grid (mobile: 2 columns, tablet: 3, desktop: 4-6)
- **Aspect Ratio:** Square (1:1) or slightly rectangular
- **Border:** Rounded corners (8-12px)
- **Background:** Gradient or textured paper effect
- **Number Badge:** Circular or decorative badge with day number

### Gift Content Modal/Card
- **Layout:** Centered modal or full-screen overlay
- **Background:** Frosted glass effect or soft gradient
- **Content Area:**
  - Gift title/name
  - Description or message
  - Image (if applicable)
  - Link or action button
- **Close Button:** Elegant X or "Close" button

### Header Component
- **Title:** Large, elegant typography
- **Subtitle:** Personal message or countdown
- **Optional:** Snowflakes, stars, or decorative elements

### Footer
- Minimal, with personal touch or date indicator

---

## 📱 Responsive Design

### Breakpoints
- **Mobile:** < 640px (2 columns, stacked layout)
- **Tablet:** 640px - 1024px (3-4 columns)
- **Desktop:** > 1024px (4-6 columns)

### Mobile Considerations
- Touch-friendly door sizes (min 120px)
- Swipe gestures for navigation
- Simplified animations for performance

---

## 🎭 Special Features

### Daily Unlock Logic
- Only current day and past days are unlockable
- Future days show countdown or lock icon
- Visual distinction: locked (grayed out) vs. unlocked (vibrant)

### Progress Indicator
- Optional: Progress bar or visual indicator
- Shows how many days have passed
- Encourages daily visits

### Personalization
- Custom messages for each day
- Photos or memories (if applicable)
- Personalized gift descriptions

### Sound Effects (Optional)
- Gentle chime or bell sound on door open
- Subtle background music (toggleable)
- Snow/winter ambient sounds

---

## 🛠️ Design Libraries & Tools

### UI Components
- **shadcn/ui:** Button, Card, Dialog, Badge, Tooltip
- **Radix UI:** Accessible primitives (Dialog, Tooltip)
- **Tailwind CSS:** Styling, spacing, colors, responsive utilities

### Animations
- **Framer Motion:** Door animations, page transitions, gestures
- **React Spring:** Alternative for physics-based animations
- **Lottie:** Optional decorative animations (hearts, sparkles)

### Icons
- **Lucide React:** Clean, consistent icons
- **React Icons:** Additional icon sets if needed

### Typography
- **Google Fonts:** Playfair Display, Inter, Dancing Script
- **Font Loading:** Optimize with `next/font` (if using Next.js)

### Visual Effects
- **Particle Effects:** `react-tsparticles` or `particles.js` for snow/sparkles
- **Gradients:** CSS gradients or `tailwindcss-gradients`
- **Glassmorphism:** Frosted glass effects for modals

---

## 🎨 Design Tokens

### Spacing
- Base unit: 4px
- Common: 8px, 12px, 16px, 24px, 32px, 48px, 64px

### Border Radius
- Small: 4px
- Medium: 8px
- Large: 12px
- Extra Large: 16px

### Shadows
- Small: `0 1px 2px rgba(0,0,0,0.1)`
- Medium: `0 4px 6px rgba(0,0,0,0.1)`
- Large: `0 10px 15px rgba(0,0,0,0.15)`
- Glow: `0 0 20px rgba(251, 191, 36, 0.3)`

### Transitions
- Fast: 150ms
- Medium: 300ms
- Slow: 600ms
- Door open: 800ms (with bounce)

---

## 🌟 Accessibility Considerations

- **Keyboard Navigation:** All doors accessible via keyboard
- **Screen Readers:** ARIA labels for doors, states (locked/unlocked)
- **Color Contrast:** WCAG AA compliant
- **Focus States:** Clear focus indicators
- **Reduced Motion:** Respect `prefers-reduced-motion`

---

## 🎬 User Experience Flow

1. **Landing:** User sees beautiful calendar grid
2. **Exploration:** Hover over doors to see interactions
3. **Unlocking:** Click available door → animation → reveal
4. **Enjoyment:** Read message, view gift, feel loved ❤️
5. **Return:** Daily visits to unlock new doors

---

## 💡 Inspiration Sources

- Vintage advent calendars (paper, wooden)
- Romantic greeting cards
- Cozy winter aesthetics
- Love letter designs
- Magical/fantasy themes

---

## 📝 Design Checklist

- [ ] Color palette finalized
- [ ] Typography selected and loaded
- [ ] Door component designed (closed/open states)
- [ ] Animation timing and easing defined
- [ ] Responsive breakpoints tested
- [ ] Dark mode support (optional but nice)
- [ ] Accessibility audit
- [ ] Performance optimization (lazy loading, image optimization)
- [ ] Cross-browser testing
- [ ] Mobile touch interactions tested

