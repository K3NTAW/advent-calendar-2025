# 🎁 How to Add Your Gifts

This guide will help you easily add all your gifts to the advent calendar!

## 📝 Quick Steps

1. Open the file: `data/gifts.ts`
2. Find the day you want to edit (they're numbered 1-24)
3. Fill in the information
4. Save the file - done! ✨

## 📋 Gift Data Structure

Each gift has these fields:

### Required Fields
- **`day`**: The day number (1-24) - already set, don't change this!
- **`title`**: The name of your gift (e.g., "Spotify Playlist", "Love Letter")
- **`description`**: A short description of what the gift is

### Optional Fields (add if you have them)
- **`image`**: Path to an image file (e.g., `"/images/gift1.jpg"`)
- **`link`**: URL to the gift (Spotify playlist, Steam game, etc.)
- **`message`**: A personal message to go with the gift
- **`type`**: One of: `"digital"`, `"physical"`, `"experience"`, or `"message"`

## 💡 Examples

### Example 1: Spotify Playlist
```typescript
{
  day: 1,
  title: "Spotify Playlist",
  description: "Holiday and Christmas songs",
  type: "digital",
  link: "https://open.spotify.com/playlist/your-playlist-id-here",
  message: "I hope these songs bring you joy this holiday season! ❤️"
}
```

### Example 2: Love Letter (Text Only)
```typescript
{
  day: 3,
  title: "Love Letter",
  description: "A heartfelt letter from the heart",
  type: "message",
  message: "My dearest love,\n\nI wanted to tell you how much you mean to me...\n\nWith all my love,\n[Your name]"
}
```

### Example 3: Gift with Image
```typescript
{
  day: 5,
  title: "Picture Collage",
  description: "A collage of special moments",
  type: "digital",
  image: "/images/collage-day5.jpg",
  message: "These are some of my favorite memories with you!"
}
```

### Example 4: Physical Gift (Delivery)
```typescript
{
  day: 9,
  title: "Snack Delivery",
  description: "A delivery of your favorite snacks",
  type: "physical",
  message: "Your snacks are on the way! They should arrive on [date]. Tracking: [tracking-number]"
}
```

## 🖼️ Adding Images

1. **Place your images** in the `public/images/` folder
   - Example: `public/images/gift1.jpg`
   - Example: `public/images/collage-day5.png`

2. **Reference them** in the gift data:
   ```typescript
   image: "/images/gift1.jpg"
   ```
   (Note: Start with `/images/` not `public/images/`)

3. **Supported formats**: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`

## 🔗 Adding Links

For digital gifts, you can add links to:
- Spotify playlists: `https://open.spotify.com/playlist/...`
- Steam games: `https://store.steampowered.com/...`
- YouTube videos: `https://www.youtube.com/watch?v=...`
- Any website!

Just paste the full URL in the `link` field.

## ✍️ Writing Messages

Messages can be multiple lines! Use `\n` for line breaks:

```typescript
message: "Line 1\n\nLine 2 (with blank line)\n\nLine 3"
```

Or just write naturally - the modal will display it nicely.

## 🎯 Tips

- **Don't worry about perfect formatting** - the website will make it look beautiful!
- **You can always come back and edit** - just save the file and refresh the page
- **Test as you go** - run `npm run dev` and check how it looks
- **Images are optional** - your gifts will look great even without them
- **Messages are optional too** - but they make gifts more personal! ❤️

## 📅 Your Gift List

Based on your `DEFINITE_GIFT_IDEAS.md`, here's a quick reference:

- Day 1: Spotify Playlist (holiday/christmas)
- Day 2: Unravel Steam Game
- Day 3: Love Letter
- Day 4: League of Legends Battle Pass
- Day 5: Picture Collage of you
- Day 6: Reasons I love you list
- Day 7: One Wish Coupon
- Day 8: Pokemon Card Picture
- Day 9: Snack Delivery
- Day 10: Unravel 2 Steam Game
- Day 11: Plush Picture
- Day 12: Spotify Playlist (songs that remind me of you)
- Day 13: Personalized Video Message
- Day 14: TFT Battle Pass
- Day 15: 1st Date Pictures
- Day 16: Snack Basket Delivery
- Day 17: One Wish Coupon
- Day 18: Plush Picture
- Day 19: Personalized Video Message
- Day 20: Flower Delivery
- Day 21: Handwritten Letter Picture
- Day 22: Kenta Christmas Pictures Collage
- Day 23: Spotify Playlist for flight
- Day 24: Christmas Love Letter

## 🚀 Ready to Start?

1. Open `data/gifts.ts`
2. Start with Day 1 and work your way through
3. Save frequently
4. Test in the browser to see how it looks!

Have fun! This is going to be amazing! 🎄❤️

