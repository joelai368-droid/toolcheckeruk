export interface Retailer {
  name: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  delivery: string;
  clickCollect: boolean;
  url: string;
}

export interface Tool {
  slug: string;
  brand: string;
  name: string;
  modelNumber: string;
  category: string;
  description: string;
  image?: string;
  retailers: Retailer[];
}

// =============================================================
// TOOL DATABASE
// =============================================================
// To add a new tool:
//   1. Copy one of the tool objects below
//   2. Update all the fields
//   3. For Amazon URLs, use your affiliate link:
//      https://www.amazon.co.uk/dp/PRODUCT_ID?tag=toolcheckeruk-21
//   4. For Awin URLs (Screwfix, Toolstation, etc.), use your Awin deep links
//      once approved
//   5. Push to GitHub and Vercel will auto-deploy
// =============================================================

const tools: Tool[] = [
  {
    slug: "milwaukee-m12-fuel-impact-driver",
    brand: "Milwaukee",
    name: "M12 FUEL 1/2\" Stubby Impact Wrench (Body Only)",
    modelNumber: "M12 FIWF12-0",
    category: "impact-drivers",
    description: "Compact sub-compact impact wrench delivering up to 339Nm of torque. Brushless POWERSTATE motor for longer life and more runtime.",
    retailers: [
      {
        name: "Amazon UK",
        price: 127.49,
        originalPrice: 149.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        // TODO: Replace with your real Amazon affiliate link
        url: "https://www.amazon.co.uk/dp/B07XXXXX?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 129.99,
        originalPrice: 159.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        // TODO: Replace with your Awin deep link once approved
        url: "#",
      },
      {
        name: "Toolstation",
        price: 134.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#",
      },
      {
        name: "FFX Tools",
        price: 131.99,
        originalPrice: 155.00,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#",
      },
      {
        name: "ITS",
        price: 126.99,
        inStock: false,
        delivery: "£4.99",
        clickCollect: false,
        url: "#",
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-combi-drill",
    brand: "DeWalt",
    name: "18V XR Brushless Combi Drill (Body Only)",
    modelNumber: "DCD796N",
    category: "drills",
    description: "Compact brushless combi drill with 70Nm max torque. Two-speed gearbox, 15-position torque settings, and LED work light.",
    retailers: [
      {
        name: "Amazon UK",
        price: 142.00,
        originalPrice: 169.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07XXXXX?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 149.99,
        originalPrice: 179.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#",
      },
      {
        name: "Toolstation",
        price: 154.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#",
      },
      {
        name: "FFX Tools",
        price: 147.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#",
      },
    ],
  },
  {
    slug: "makita-18v-circular-saw",
    brand: "Makita",
    name: "18V LXT Brushless 165mm Circular Saw (Body Only)",
    modelNumber: "DHS680Z",
    category: "saws",
    description: "Powerful brushless circular saw with 5,000 RPM. Automatic speed control and soft start for smooth cutting. 57mm cutting depth at 90°.",
    retailers: [
      {
        name: "ITS",
        price: 169.99,
        originalPrice: 199.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#",
      },
      {
        name: "Powertool World",
        price: 172.50,
        inStock: true,
        delivery: "Free over £100",
        clickCollect: false,
        url: "#",
      },
      {
        name: "Amazon UK",
        price: 174.99,
        originalPrice: 209.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07XXXXX?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 189.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#",
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-sds-drill",
    brand: "Milwaukee",
    name: "M18 FUEL SDS Plus Hammer Drill (Body Only)",
    modelNumber: "M18 CHX-0",
    category: "drills",
    description: "26mm SDS Plus rotary hammer drill with POWERSTATE brushless motor. 2.5J impact energy, 3 modes: hammer drill, drill only, chisel only.",
    retailers: [
      {
        name: "Amazon UK",
        price: 189.99,
        originalPrice: 219.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07XXXXX?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 199.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#",
      },
      {
        name: "ITS",
        price: 185.99,
        originalPrice: 209.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#",
      },
    ],
  },
  {
    slug: "dewalt-18v-angle-grinder",
    brand: "DeWalt",
    name: "18V XR Brushless 125mm Angle Grinder (Body Only)",
    modelNumber: "DCG405N",
    category: "grinders",
    description: "Compact brushless angle grinder with mesh guard. Electronic brake and clutch for user protection. 9,000 RPM no-load speed.",
    retailers: [
      {
        name: "Amazon UK",
        price: 134.00,
        originalPrice: 159.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07XXXXX?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 139.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#",
      },
      {
        name: "Toolstation",
        price: 142.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#",
      },
      {
        name: "FFX Tools",
        price: 136.50,
        originalPrice: 155.00,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#",
      },
    ],
  },
  {
    slug: "makita-18v-impact-driver",
    brand: "Makita",
    name: "18V LXT Brushless Impact Driver (Body Only)",
    modelNumber: "DTD153Z",
    category: "impact-drivers",
    description: "Compact impact driver with 170Nm max torque. Variable speed trigger with 0-3,400 RPM. Aluminium gear housing for durability.",
    retailers: [
      {
        name: "Amazon UK",
        price: 89.99,
        originalPrice: 109.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07XXXXX?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 94.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#",
      },
      {
        name: "Toolstation",
        price: 92.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#",
      },
      {
        name: "ITS",
        price: 87.99,
        originalPrice: 99.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#",
      },
    ],
  },
  {
    slug: "bosch-18v-sds-hammer-drill",
    brand: "Bosch",
    name: "18V SDS Plus Hammer Drill (Body Only)",
    modelNumber: "GBH 18V-26",
    category: "drills",
    description: "Professional SDS Plus hammer drill with 2.6J impact energy. Kickback control and rotation stop for safety. 3 modes of operation.",
    retailers: [
      {
        name: "Amazon UK",
        price: 199.99,
        originalPrice: 239.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07XXXXX?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 209.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#",
      },
      {
        name: "FFX Tools",
        price: 195.00,
        originalPrice: 229.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#",
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-circular-saw",
    brand: "Milwaukee",
    name: "M18 FUEL 190mm Circular Saw (Body Only)",
    modelNumber: "M18 FCS66-0",
    category: "saws",
    description: "High-performance 190mm circular saw with POWERSTATE brushless motor. 66mm cutting depth at 90°. REDLINK overload protection.",
    retailers: [
      {
        name: "Amazon UK",
        price: 249.99,
        originalPrice: 289.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07XXXXX?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 239.99,
        originalPrice: 269.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#",
      },
      {
        name: "Screwfix",
        price: 259.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#",
      },
      {
        name: "Powertool World",
        price: 244.99,
        inStock: true,
        delivery: "Free over £100",
        clickCollect: false,
        url: "#",
      },
    ],
  },
];

// =============================================================
// HELPER FUNCTIONS
// =============================================================

export function getAllTools(): Tool[] {
  return tools;
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return tools.filter((tool) => {
    const searchable = `${tool.brand} ${tool.name} ${tool.modelNumber} ${tool.category} ${tool.description}`.toLowerCase();
    const words = q.split(" ");
    return words.every((word) => searchable.includes(word));
  });
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(tools.map((t) => t.category))];
}

export function getAllBrands(): string[] {
  return [...new Set(tools.map((t) => t.brand))];
}

export default tools;
