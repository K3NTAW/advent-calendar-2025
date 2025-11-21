export interface GiftLink {
  label: string;
  url: string;
}

export interface Gift {
  day: number;
  title: string;
  description: string;
  image?: string;
  link?: string; // Single link (for backward compatibility)
  links?: GiftLink[]; // Multiple links (website, playlist, etc.)
  message?: string;
  type?: "digital" | "physical" | "experience" | "message";
}

export interface DoorState {
  day: number;
  isUnlocked: boolean;
  isUnlockable: boolean;
  isOpened: boolean;
}

