import { Bot, Code2, HeartPulse, ShieldCheck, Umbrella, type LucideIcon } from "lucide-react";

export type Service = {
  key: string;
  title: string;
  tag?: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    key: "medical-alert",
    title: "Medical Alert Systems",
    tag: "My specialty",
    description:
      "Help with choosing the right medical alert device for a parent or loved one: in-home or mobile, fall detection, GPS, monitoring plans and fair monthly pricing.",
    icon: HeartPulse,
    points: ["In-home & mobile GPS", "Fall detection", "24/7 monitoring", "Fair monthly pricing"],
  },
  {
    key: "medicare",
    title: "Medicare",
    description:
      "Plain-language comparisons of Medicare options so seniors and their families understand their choices before they decide.",
    icon: ShieldCheck,
    points: ["Side-by-side options", "Plain language", "No pressure"],
  },
  {
    key: "final-expense",
    title: "Final Expense",
    description:
      "Compare final expense coverage that eases the financial burden on loved ones, with clear explanations of costs and benefits.",
    icon: Umbrella,
    points: ["Clear costs", "Honest benefits", "Family-first"],
  },
  {
    key: "web",
    title: "Web Development",
    description:
      "Fast, professional websites and landing pages that build trust and turn visitors into customers.",
    icon: Code2,
    points: ["Websites", "Landing pages", "Built to convert"],
  },
  {
    key: "ai",
    title: "Advanced AI Tools",
    description:
      "Practical AI for your business, such as chat assistants, lead follow-up and content automation, so you can do more with less effort.",
    icon: Bot,
    points: ["Chat assistants", "Lead follow-up", "Content automation"],
  },
];
