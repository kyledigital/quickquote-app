export interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  benefit: string;
}

export const services: Service[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    price: 500,
    description:
      "Launch sharper campaigns that reach ready-to-buy customers on Search, Display, and YouTube.",
    benefit: "High-intent demand",
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    price: 450,
    description:
      "Reach your audience on Facebook and Instagram with targeted paid social campaigns built for real results.",
    benefit: "Paid social leads",
  },
  {
    id: "video-editing",
    name: "Video Editing",
    price: 350,
    description:
      "Turn raw footage into polished content built for attention across social media and paid placements.",
    benefit: "Creative that converts",
  },
  {
    id: "content-strategy",
    name: "Content Strategy",
    price: 400,
    description:
      "Campaign ideas, content direction, and performance-focused execution that gives your brand a consistent voice.",
    benefit: "Sharper messaging",
  },
  {
    id: "social-media-mgmt",
    name: "Social Media Management",
    price: 750,
    description:
      "Consistent presence, strategic posting, and audience growth across your social channels - handled for you.",
    benefit: "Ongoing visibility",
  },
  {
    id: "campaign-audit",
    name: "Campaign Audit",
    price: 650,
    description:
      "A clear breakdown of what is working, what is wasting budget, and exactly where your campaigns can improve.",
    benefit: "Find wasted spend",
  },
  {
    id: "website-setup",
    name: "Website Setup",
    price: 800,
    description:
      "Get a professional web presence that looks credible from day one and is built to convert.",
    benefit: "Launch-ready foundation",
  },
];
