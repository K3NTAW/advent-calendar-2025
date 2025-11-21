export interface Gift {
  day: number;
  title: string;
  description: string;
  image?: string;
  link?: string;
  message?: string;
  type?: "digital" | "physical" | "experience" | "message";
}

export interface DoorState {
  day: number;
  isUnlocked: boolean;
  isUnlockable: boolean;
  isOpened: boolean;
}

