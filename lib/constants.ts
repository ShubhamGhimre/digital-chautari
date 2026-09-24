export const CHIP_COLORS = ["#E7F5EA", "#E7F2F4", "#FDF1DE", "#F4E9F6", "#FDEEF0"] as const;

export const chipColor = (i: number): string => CHIP_COLORS[i % CHIP_COLORS.length];

export const SITE = {
  name: "Digital Chautari",
  tagline: "Creative technology, Kathmandu",
  description:
    "Digital Chautari is a creative technology company in Kathmandu offering digital marketing, content creation, and health-tech software.",
} as const;
