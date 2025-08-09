export type Product = {
  slug: string;
  name: string;
  description: string;
  image?: string;
  benefits: string[];
};

export const products: Product[] = [
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    description:
      "Dual GIP/GLP-1 agonist clinically shown to accelerate medical weight loss, improve glycemic control, and support sustainable body recomposition.",
    image: "/images/tirzepatide.jpg",
    benefits: [
      "Rapid, clinically proven weight loss",
      "Appetite regulation and satiety support",
      "Improved insulin sensitivity and metabolic health",
    ],
  },
  {
    slug: "semaglutide",
    name: "Semaglutide",
    description:
      "GLP-1 therapy trusted for significant, sustained weight reduction and improved cardiometabolic markers.",
    image: "/images/semaglutide.jpg",
    benefits: [
      "Reduced cravings and stabilized hunger",
      "Steady, sustainable fat loss",
      "Evidence-based safety and efficacy",
    ],
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    description:
      "Cellular energy cofactor that supports mitochondrial performance, cognitive clarity, and healthy aging.",
    image: "/images/nad.jpg",
    benefits: [
      "Enhanced energy and focus",
      "Cellular repair and longevity support",
      "Improved recovery and resilience",
    ],
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    description:
      "Growth hormone secretagogue to optimize sleep, recovery, and lean body composition.",
    image: "/images/sermorelin.jpg",
    benefits: [
      "Deeper sleep and recovery",
      "Lean muscle preservation",
      "Overall vitality and performance",
    ],
  },
  {
    slug: "glutathione",
    name: "Glutathione",
    description:
      "Master antioxidant for detoxification, immune support, and radiant skin health.",
    image: "/images/glutathione.jpg",
    benefits: [
      "Detox and immune support",
      "Brighter, clearer skin",
      "Cellular antioxidant protection",
    ],
  },
];
