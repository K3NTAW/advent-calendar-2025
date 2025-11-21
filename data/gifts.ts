import { Gift } from "@/types";

/**
 * GIFT DATA TEMPLATE
 * 
 * To add your gifts, simply fill in the data below for each day (1-24).
 * 
 * Required fields:
 * - day: The day number (1-24)
 * - title: The gift title/name
 * - description: A description of the gift
 * 
 * Optional fields:
 * - image: URL or path to an image (e.g., "/images/gift1.jpg")
 * - link: Single URL to the gift (for backward compatibility)
 * - links: Array of links with labels (for multiple links like website + playlist)
 *   Example: [{ label: "Spotify Playlist", url: "https://..." }, { label: "Visit Website", url: "https://..." }]
 * - message: A personal message to go with the gift
 * - type: "digital", "physical", "experience", or "message"
 * 
 * Example with single link:
 * {
 *   day: 1,
 *   title: "Spotify Playlist",
 *   description: "A curated playlist of holiday and Christmas songs",
 *   link: "https://open.spotify.com/playlist/...",
 *   type: "digital",
 *   message: "I hope these songs bring you joy this holiday season! ❤️"
 * }
 * 
 * Example with multiple links:
 * {
 *   day: 1,
 *   title: "Spotify Playlist & Website",
 *   description: "Holiday songs and a special website",
 *   links: [
 *     { label: "Spotify Playlist", url: "https://open.spotify.com/playlist/..." },
 *     { label: "Visit Website", url: "https://yourwebsite.com" }
 *   ],
 *   type: "digital"
 * }
 */

export const gifts: Gift[] = [
  // Day 1
  {
    day: 1,
    title: "Spotify Playlist & Website",
    description: "Holiday and Christmas songs, plus a special website",
    type: "digital",
    links: [
      {
        label: "Spotify Playlist",
        url: "https://open.spotify.com/playlist/6gAQX62U6nlwayBJk46j8e?si=01ff8ea7b7be4e34&pt=c3bf0203a80ce8f6fca0165cb8c00ea1"
      },
      {
        label: "Visit Website",
        url: "garden.iluvu.ch" // TODO: Add your website URL here
      }
    ],
    message: "I hope these songs bring you joy this holiday season! ❤️"
  },
  // Day 2
  {
    day: 2,
    title: "Unravel Steam Game",
    description: "A beautiful puzzle-platformer game",
    type: "digital",
    // TODO: Add Steam gift link or code
    // link: "https://store.steampowered.com/...",
  },
  // Day 3
  {
    day: 3,
    title: "Love Letter",
    description: "A heartfelt letter from the heart",
    type: "message",
    // TODO: Add your message
    // message: "Your love letter text here..."
  },
  // Day 4
  {
    day: 4,
    title: "League of Legends Battle Pass",
    description: "Battle pass for League of Legends",
    type: "digital",
    // TODO: Add purchase link or code
  },
  // Day 5
  {
    day: 5,
    title: "Picture Collage",
    description: "A collage of special moments",
    type: "digital",
    // TODO: Add image path
    // image: "/images/collage-day5.jpg",
  },
  // Day 6
  {
    day: 6,
    title: "Reasons I Love You",
    description: "A list of reasons why I love you",
    type: "message",
    // TODO: Add your list
    // message: "1. Your smile...\n2. Your kindness...\n..."
  },
  // Day 7
  {
    day: 7,
    title: "One Wish Coupon",
    description: "A coupon for one wish",
    type: "experience",
    // TODO: Add details
    // message: "This coupon entitles you to one wish of your choice!"
  },
  // Day 8
  {
    day: 8,
    title: "Pokemon Card Picture",
    description: "A custom Pokemon card with our picture",
    type: "digital",
    // TODO: Add image
    // image: "/images/pokemon-card.jpg",
  },
  // Day 9
  {
    day: 9,
    title: "Snack Delivery",
    description: "A delivery of your favorite snacks",
    type: "physical",
    // TODO: Add delivery details or tracking
    // message: "Your snacks are on the way! Tracking: ..."
  },
  // Day 10
  {
    day: 10,
    title: "Unravel 2 Steam Game",
    description: "The sequel to Unravel",
    type: "digital",
    // TODO: Add Steam link
  },
  // Day 11
  {
    day: 11,
    title: "Plush Picture",
    description: "A picture of your plush (waiting for you!)",
    type: "digital",
    // TODO: Add image
    // image: "/images/plush-day11.jpg",
  },
  // Day 12
  {
    day: 12,
    title: "Spotify Playlist",
    description: "Songs that remind me of you",
    type: "digital",
    // TODO: Add playlist link
  },
  // Day 13
  {
    day: 13,
    title: "Personalized Video Message",
    description: "A special video message just for you",
    type: "digital",
    // TODO: Add video link (YouTube, Vimeo, or file)
    // link: "https://...",
  },
  // Day 14
  {
    day: 14,
    title: "TFT Battle Pass",
    description: "Teamfight Tactics battle pass",
    type: "digital",
    // TODO: Add purchase link
  },
  // Day 15
  {
    day: 15,
    title: "First Date Pictures",
    description: "Pictures from our first date and special places",
    type: "digital",
    // TODO: Add images
    // image: "/images/first-date.jpg",
  },
  // Day 16
  {
    day: 16,
    title: "Snack Basket Delivery",
    description: "A basket full of delicious snacks",
    type: "physical",
    // TODO: Add delivery details
  },
  // Day 17
  {
    day: 17,
    title: "One Wish Coupon",
    description: "Another wish coupon for you",
    type: "experience",
    // TODO: Add details
  },
  // Day 18
  {
    day: 18,
    title: "Plush Picture",
    description: "Another picture of your plush",
    type: "digital",
    // TODO: Add image
  },
  // Day 19
  {
    day: 19,
    title: "Personalized Video Message",
    description: "Another special video message",
    type: "digital",
    // TODO: Add video link
  },
  // Day 20
  {
    day: 20,
    title: "Flower Delivery",
    description: "Beautiful flowers delivered to your door",
    type: "physical",
    // TODO: Add delivery details
    // message: "I hope these flowers brighten your day!"
  },
  // Day 21
  {
    day: 21,
    title: "Handwritten Letter",
    description: "A handwritten letter (picture of the real one)",
    type: "message",
    // TODO: Add image of letter
    // image: "/images/letter-day21.jpg",
  },
  // Day 22
  {
    day: 22,
    title: "Kenta Christmas Pictures Collage",
    description: "A collage of Christmas pictures",
    type: "digital",
    // TODO: Add image
    // image: "/images/christmas-collage.jpg",
  },
  // Day 23
  {
    day: 23,
    title: "Spotify Playlist for Flight",
    description: "A playlist for your flight to me",
    type: "digital",
    // TODO: Add playlist link
  },
  // Day 24
  {
    day: 24,
    title: "Christmas Love Letter",
    description: "A special Christmas love letter",
    type: "message",
    // TODO: Add your message
    // message: "Your Christmas love letter here..."
  },
];

/**
 * Helper function to get a gift by day number
 */
export function getGiftByDay(day: number): Gift | undefined {
  return gifts.find((gift) => gift.day === day);
}

/**
 * Helper function to get all gifts
 */
export function getAllGifts(): Gift[] {
  return gifts;
}

