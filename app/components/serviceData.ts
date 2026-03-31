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
    description: "Launch sharper campaigns that reach ready-to-buy customers.",
    benefit: "Starting at J$500",
  },
  {
    id: "video-editing",
    name: "Video Editing",
    price: 350,
    description: "Turn raw footage into polished content built for attention.",
    benefit: "Starting at J$350",
  },
  {
    id: "website-setup",
    name: "Website Setup",
    price: 800,
    description: "Get a professional web presence that looks credible from day one.",
    benefit: "Starting at J$800",
  },
];
