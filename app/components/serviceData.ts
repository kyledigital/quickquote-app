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
    description: "Launch sharper campaigns that reach ready-to-buy customers on Search, Display, and YouTube.",
    benefit: "Starting at J$500",
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    price: 450,
    description: "Reach your audience on Facebook and Instagram with targeted paid social campaigns built for real results.",
    benefit: "Starting at J$450",
  },
  {
    id: "video-editing",
    name: "Video Editing",
    price: 350,
    description: "Turn raw footage into polished content built for attention across social media and paid placements.",
    benefit: "Starting at J$350",
  },
  {
    id: "content-strategy",
    name: "Content Strategy",
    price: 400,
    description: "Campaign ideas, content direction, and performance-focused execution that gives your brand a consistent voice.",
    benefit: "Starting at J$400",
  },
  {
    id: "social-media-mgmt",
    name: "Social Media Management",
    price: 750,
    description: "Consistent presence, strategic posting, and audience growth across your social channels — handled for you.",
    benefit: "Starting at J$750",
  },
  {
    id: "campaign-audit",
    name: "Campaign Audit",
    price: 650,
    description: "A clear breakdown of what's working, what's wasting budget, and exactly where your campaigns can improve.",
    benefit: "Starting at J$650",
  },
  {
    id: "website-setup",
    name: "Website Setup",
    price: 800,
    description: "Get a professional web presence that looks credible from day one and is built to convert.",
    benefit: "Starting at J$800",
  },
];
