# 🎄 Advent Calendar Website

A beautiful, romantic advent calendar website with door-opening animations and gift reveals.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎁 Adding Your Gifts

To add your gifts, simply edit the file `data/gifts.ts`. Each gift has the following structure:

```typescript
{
  day: 1,                    // Day number (1-24)
  title: "Gift Title",       // The name of the gift
  description: "Description", // What the gift is
  image: "/images/gift.jpg", // Optional: path to an image
  link: "https://...",        // Optional: URL to the gift
  message: "Your message",    // Optional: personal message
  type: "digital"            // Optional: "digital", "physical", "experience", or "message"
}
```

### Quick Guide

1. Open `data/gifts.ts`
2. Find the day you want to edit (they're numbered 1-24)
3. Fill in the fields you want:
   - **Required**: `day`, `title`, `description`
   - **Optional**: `image`, `link`, `message`, `type`
4. Save the file - the changes will appear automatically!

### Adding Images

1. Create a folder `public/images/` in your project
2. Add your images there (e.g., `public/images/gift1.jpg`)
3. Reference them in the gift data: `image: "/images/gift1.jpg"`

### Example Gift Entry

```typescript
{
  day: 1,
  title: "Spotify Playlist",
  description: "A curated playlist of holiday and Christmas songs",
  link: "https://open.spotify.com/playlist/your-playlist-id",
  type: "digital",
  message: "I hope these songs bring you joy this holiday season! ❤️"
}
```

## 🎨 Features

- ✨ Beautiful door-opening animations
- 🎉 Confetti effects when doors open
- 📱 Fully responsive design
- 🔒 Automatic date-based unlocking (doors unlock on their day)
- 💾 Progress saved to browser (localStorage)
- 🎁 Easy gift management system

## 📁 Project Structure

```
adventscalender/
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Main calendar page
│   └── globals.css     # Global styles
├── components/
│   ├── Door.tsx        # Individual door component
│   ├── CalendarGrid.tsx # Grid of all doors
│   ├── GiftModal.tsx   # Gift reveal modal
│   ├── Header.tsx      # Page header
│   └── Footer.tsx      # Page footer
├── data/
│   └── gifts.ts        # Your gift data (edit this!)
├── lib/
│   ├── calendar.ts     # Date/unlock logic
│   └── utils.ts        # Utility functions
└── types/
    └── index.ts        # TypeScript types
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **date-fns** - Date utilities
- **canvas-confetti** - Celebration effects

## 📝 Notes

- Doors automatically unlock based on the current date
- Doors unlock starting December 1st
- Progress is saved in your browser's localStorage
- All doors are accessible after December 24th

## 🎯 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme.

### Fonts

Fonts are loaded in `app/layout.tsx`. You can change them there.

### Advent Start Date

The advent calendar starts on December 1st by default. To change this, edit `lib/calendar.ts`:

```typescript
const ADVENT_START_MONTH = 11; // December (0-indexed)
const ADVENT_START_DAY = 1;
```

## 💝 Enjoy!

Have fun creating something special for your loved one! ❤️

# advent-calendar-2025
