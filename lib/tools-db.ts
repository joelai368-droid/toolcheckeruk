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
// CATEGORY DISPLAY NAMES
// =============================================================

const CATEGORY_NAMES: Record<string, string> = {
  "drills": "Combi Drills & Drill Drivers",
  "impact-drivers": "Impact Drivers & Wrenches",
  "saws": "Saws",
  "grinders": "Angle Grinders",
  "sanders": "Sanders",
  "planers": "Planers",
  "routers": "Routers",
  "multi-tools": "Multi-Tools",
  "sds-drills": "SDS Drills",
  "nail-guns": "Nail Guns",
};

export function getCategoryDisplayName(category: string): string {
  return CATEGORY_NAMES[category] || category;
}

// =============================================================
// SEARCH ABBREVIATIONS
// =============================================================

const ABBREVIATIONS: Record<string, string[]> = {
  "combi": ["combi drill", "combi"],
  "circ saw": ["circular saw"],
  "circ": ["circular"],
  "recip": ["reciprocating"],
  "recip saw": ["reciprocating saw"],
  "multi tool": ["multi-tool", "oscillating multi-tool"],
  "multitool": ["multi-tool", "oscillating multi-tool"],
  "sds": ["sds plus", "sds max", "sds-plus"],
  "grinder": ["angle grinder"],
  "nailer": ["nailer", "nail gun"],
  "brad nailer": ["brad nailer", "18g nailer"],
  "first fix": ["first fix nailer"],
  "second fix": ["second fix nailer"],
  "2nd fix": ["second fix nailer"],
  "1st fix": ["first fix nailer"],
  "orbital": ["orbital sander"],
  "jig saw": ["jigsaw"],
  "sabre saw": ["reciprocating saw"],
  "plunge saw": ["plunge saw"],
  "mitre": ["mitre saw"],
  "miter": ["mitre saw"],
  "impact": ["impact driver", "impact wrench"],
  "drill driver": ["drill driver"],
  "hammer drill": ["hammer drill", "sds plus"],
  "rotary hammer": ["sds plus", "hammer drill"],
  "m12": ["m12"],
  "m18": ["m18"],
  "xr": ["xr"],
  "lxt": ["lxt"],
  "fuel": ["fuel"],
  "multivolt": ["multivolt", "multi volt"],
  "biturbo": ["biturbo"],
};

// =============================================================
// TOOL DATABASE
// =============================================================

const tools: Tool[] = [
  // ============================================================
  // MILWAUKEE M12 RANGE
  // ============================================================
  {
    slug: "milwaukee-m12-fuel-impact-wrench",
    brand: "Milwaukee",
    name: "M12 FUEL 1/2\" Stubby Impact Wrench (Body Only)",
    modelNumber: "M12 FIWF12-0",
    category: "impact-drivers",
    description: "Compact sub-compact impact wrench delivering up to 339Nm of torque. Brushless POWERSTATE motor for longer life and more runtime.",
    retailers: [
      {
        name: "ITS",
        price: 126.99,
        inStock: false,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Amazon UK",
        price: 127.49,
        originalPrice: 149.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08L5JQ3CH?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 129.99,
        originalPrice: 159.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 131.99,
        originalPrice: 155.00,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 134.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-fuel-combi-drill",
    brand: "Milwaukee",
    name: "M12 FUEL Combi Drill (Body Only)",
    modelNumber: "M12 FPD2-0",
    category: "drills",
    description: "Compact 12V brushless combi drill delivering 44Nm torque in a sub-compact form factor. POWERSTATE motor and REDLINK intelligence.",
    retailers: [
      {
        name: "Amazon UK",
        price: 99.99,
        originalPrice: 119.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09BFTGVBN?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 104.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 97.99,
        originalPrice: 109.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 101.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },

  // ============================================================
  // MILWAUKEE M18 RANGE
  // ============================================================
  {
    slug: "milwaukee-m18-fuel-combi-drill",
    brand: "Milwaukee",
    name: "M18 FUEL Combi Drill (Body Only)",
    modelNumber: "M18 FPD3-0",
    category: "drills",
    description: "Latest generation M18 FUEL combi drill with 135Nm max torque. POWERSTATE brushless motor, REDLINK PLUS intelligence for optimised performance.",
    retailers: [
      {
        name: "Amazon UK",
        price: 159.99,
        originalPrice: 189.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0BN21QHSG?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 169.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 155.99,
        originalPrice: 179.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 157.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Powertool World",
        price: 162.00,
        inStock: true,
        delivery: "Free over £100",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-impact-driver",
    brand: "Milwaukee",
    name: "M18 FUEL Impact Driver (Body Only)",
    modelNumber: "M18 FID3-0",
    category: "impact-drivers",
    description: "Latest generation M18 FUEL impact driver with 226Nm max torque. 4-mode DRIVE CONTROL for precision fastening. Compact 117mm head length.",
    retailers: [
      {
        name: "ITS",
        price: 139.99,
        originalPrice: 159.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Amazon UK",
        price: 144.99,
        originalPrice: 169.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0BN1Z4BGQ?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 149.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 142.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 152.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-sds-plus-drill",
    brand: "Milwaukee",
    name: "M18 FUEL SDS Plus Hammer Drill (Body Only)",
    modelNumber: "M18 CHX-0",
    category: "sds-drills",
    description: "26mm SDS Plus rotary hammer drill with POWERSTATE brushless motor. 2.5J impact energy, 3 modes: hammer drill, drill only, chisel only.",
    retailers: [
      {
        name: "ITS",
        price: 185.99,
        originalPrice: 209.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Amazon UK",
        price: 189.99,
        originalPrice: 219.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01LZJ6IMH?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 199.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
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
        name: "ITS",
        price: 239.99,
        originalPrice: 269.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Powertool World",
        price: 244.99,
        inStock: true,
        delivery: "Free over £100",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Amazon UK",
        price: 249.99,
        originalPrice: 289.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09BFPX13Z?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 259.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-reciprocating-saw",
    brand: "Milwaukee",
    name: "M18 FUEL SAWZALL Reciprocating Saw (Body Only)",
    modelNumber: "M18 FSZ-0",
    category: "saws",
    description: "Powerful brushless reciprocating saw with 32mm stroke length. POWERSTATE motor delivers faster cuts. Tool-free blade change.",
    retailers: [
      {
        name: "Amazon UK",
        price: 179.99,
        originalPrice: 209.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0797MR2MN?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 189.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 175.99,
        originalPrice: 199.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 177.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-jigsaw",
    brand: "Milwaukee",
    name: "M18 FUEL Top Handle Jigsaw (Body Only)",
    modelNumber: "M18 FJS-0",
    category: "saws",
    description: "Brushless jigsaw with 5-stage orbital action and 25mm stroke length. 0-3,500 SPM for precise cutting. Fixtec blade clamp.",
    retailers: [
      {
        name: "Amazon UK",
        price: 194.99,
        originalPrice: 229.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09BFQ2FPW?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 199.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 189.99,
        originalPrice: 219.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Powertool World",
        price: 192.99,
        inStock: true,
        delivery: "Free over £100",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-angle-grinder",
    brand: "Milwaukee",
    name: "M18 FUEL 125mm Angle Grinder with Paddle Switch (Body Only)",
    modelNumber: "M18 FHSAG125XPDB-0",
    category: "grinders",
    description: "High-performance 125mm angle grinder with paddle switch and dead man switch. 8,500 RPM no-load speed. FIXTEC guard for tool-free adjustment.",
    retailers: [
      {
        name: "Amazon UK",
        price: 189.99,
        originalPrice: 219.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09BFPXLG2?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 199.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 185.99,
        originalPrice: 209.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Powertool World",
        price: 187.99,
        inStock: true,
        delivery: "Free over £100",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-multi-tool",
    brand: "Milwaukee",
    name: "M18 FUEL Multi-Tool (Body Only)",
    modelNumber: "M18 FMT-0",
    category: "multi-tools",
    description: "Brushless oscillating multi-tool with POWERSTATE motor for up to 70% more power. 18,000 OPM. Tool-free accessory change.",
    retailers: [
      {
        name: "Amazon UK",
        price: 164.99,
        originalPrice: 189.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0797N3KR5?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 169.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 159.99,
        originalPrice: 179.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 162.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-planer",
    brand: "Milwaukee",
    name: "M18 FUEL 82mm Planer (Body Only)",
    modelNumber: "M18 FBL-0",
    category: "planers",
    description: "Brushless 82mm planer with 0-2mm cutting depth. 14,000 RPM for smooth finish. Dual-mount guide fence included.",
    retailers: [
      {
        name: "Amazon UK",
        price: 274.99,
        originalPrice: 319.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09BFQ81WK?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 279.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 269.99,
        originalPrice: 299.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-orbital-sander",
    brand: "Milwaukee",
    name: "M18 FUEL 125mm Random Orbital Sander (Body Only)",
    modelNumber: "M18 FROS125-0",
    category: "sanders",
    description: "Brushless 125mm random orbital sander with variable speed 7,000-12,000 OPM. 2.5mm orbit diameter for aggressive material removal.",
    retailers: [
      {
        name: "Amazon UK",
        price: 154.99,
        originalPrice: 179.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09BFQ5WXG?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 159.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 149.99,
        originalPrice: 169.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 157.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-brad-nailer",
    brand: "Milwaukee",
    name: "M18 FUEL 18 Gauge Brad Nailer (Body Only)",
    modelNumber: "M18 FN18GS-0",
    category: "nail-guns",
    description: "Cordless 18 gauge brad nailer firing 16-54mm brads. Clean air technology eliminates gas cartridges. Dry fire lockout protects work surface.",
    retailers: [
      {
        name: "Amazon UK",
        price: 299.99,
        originalPrice: 349.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07JN4PJNV?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 309.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 289.99,
        originalPrice: 329.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Powertool World",
        price: 294.99,
        inStock: true,
        delivery: "Free over £100",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-first-fix-nailer",
    brand: "Milwaukee",
    name: "M18 FUEL First Fix Framing Nailer (Body Only)",
    modelNumber: "M18 FFN-0",
    category: "nail-guns",
    description: "Cordless first fix framing nailer for 50-90mm nails. POWERSTATE motor fires up to 3 nails per second. Sequential and bump fire modes.",
    retailers: [
      {
        name: "Amazon UK",
        price: 399.99,
        originalPrice: 459.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08L5JSZZR?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 419.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 389.99,
        originalPrice: 439.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Powertool World",
        price: 394.99,
        inStock: true,
        delivery: "Free over £100",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },

  // ============================================================
  // DEWALT 18V XR RANGE
  // ============================================================
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
        url: "https://www.amazon.co.uk/dp/B01N9JG7GY?tag=toolcheckeruk-21",
      },
      {
        name: "FFX Tools",
        price: 147.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 149.99,
        originalPrice: 179.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 154.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-impact-driver",
    brand: "DeWalt",
    name: "18V XR Brushless Impact Driver (Body Only)",
    modelNumber: "DCF887N",
    category: "impact-drivers",
    description: "Brushless impact driver with 205Nm max torque. 3-speed settings for precision control. Compact 100mm head length.",
    retailers: [
      {
        name: "Amazon UK",
        price: 109.00,
        originalPrice: 139.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01N5NHC91?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 119.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 114.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 112.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 107.99,
        originalPrice: 129.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-impact-wrench",
    brand: "DeWalt",
    name: "18V XR Brushless High Torque Impact Wrench (Body Only)",
    modelNumber: "DCF899N",
    category: "impact-drivers",
    description: "Heavy-duty 1/2\" impact wrench delivering 950Nm max breakaway torque. 3-speed selector switch. Die-cast aluminium gear case.",
    retailers: [
      {
        name: "Amazon UK",
        price: 209.99,
        originalPrice: 249.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B074DP36DD?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 219.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 214.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 204.99,
        originalPrice: 239.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-circular-saw",
    brand: "DeWalt",
    name: "18V XR Brushless 165mm Circular Saw (Body Only)",
    modelNumber: "DCS391N",
    category: "saws",
    description: "Lightweight brushless circular saw with 55mm cutting depth at 90°. 3,700 RPM no-load speed. Includes 165mm 24T carbide blade.",
    retailers: [
      {
        name: "Amazon UK",
        price: 159.99,
        originalPrice: 189.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00Q1AVWW6?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 169.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 164.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 157.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-angle-grinder",
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
        url: "https://www.amazon.co.uk/dp/B074DPF8WP?tag=toolcheckeruk-21",
      },
      {
        name: "FFX Tools",
        price: 136.50,
        originalPrice: 155.00,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 139.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 142.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-multi-tool",
    brand: "DeWalt",
    name: "18V XR Brushless Oscillating Multi-Tool (Body Only)",
    modelNumber: "DCS355N",
    category: "multi-tools",
    description: "Brushless oscillating multi-tool with Quick-Change accessory system. 0-20,000 OPM variable speed. Dual-grip trigger for comfort.",
    retailers: [
      {
        name: "Amazon UK",
        price: 129.99,
        originalPrice: 159.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01ERQIFGE?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 139.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 134.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 132.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 127.99,
        originalPrice: 149.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-reciprocating-saw",
    brand: "DeWalt",
    name: "18V XR Brushless Reciprocating Saw (Body Only)",
    modelNumber: "DCS367N",
    category: "saws",
    description: "Compact brushless reciprocating saw with 28.6mm stroke length. 0-2,900 SPM variable speed. Tool-free blade change.",
    retailers: [
      {
        name: "Amazon UK",
        price: 164.99,
        originalPrice: 199.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B074DPXBST?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 174.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 167.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 159.99,
        originalPrice: 189.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-jigsaw",
    brand: "DeWalt",
    name: "18V XR Brushless Jigsaw (Body Only)",
    modelNumber: "DCS334N",
    category: "saws",
    description: "Brushless top-handle jigsaw with 26mm stroke length. 4-position orbital action. 0-3,200 SPM variable speed. Tool-free blade change.",
    retailers: [
      {
        name: "Amazon UK",
        price: 174.99,
        originalPrice: 209.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07BFHF8TL?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 184.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 177.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 169.99,
        originalPrice: 199.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-sds-plus-drill",
    brand: "DeWalt",
    name: "18V XR Brushless SDS Plus Hammer Drill (Body Only)",
    modelNumber: "DCH273N",
    category: "sds-drills",
    description: "Brushless SDS Plus rotary hammer with 2.1J impact energy. 3 modes of operation. 24mm max drilling capacity in concrete.",
    retailers: [
      {
        name: "Amazon UK",
        price: 179.99,
        originalPrice: 214.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B074DPYPX5?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 189.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 184.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 177.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 174.99,
        originalPrice: 204.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-planer",
    brand: "DeWalt",
    name: "18V XR Brushless 82mm Planer (Body Only)",
    modelNumber: "DCP580N",
    category: "planers",
    description: "Brushless 82mm planer with 0-2mm cutting depth. 15,000 RPM no-load speed. Reversible TCT blades for long life.",
    retailers: [
      {
        name: "Amazon UK",
        price: 219.99,
        originalPrice: 259.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01ERQIGAK?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 229.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 222.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 214.99,
        originalPrice: 249.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-first-fix-nailer",
    brand: "DeWalt",
    name: "18V XR Brushless First Fix Framing Nailer (Body Only)",
    modelNumber: "DCN692N",
    category: "nail-guns",
    description: "Brushless first fix nailer firing 50-90mm nails. Dual speed switch for use with framing and decking nails. Sequential and bump fire modes.",
    retailers: [
      {
        name: "Amazon UK",
        price: 389.99,
        originalPrice: 449.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01ETEQPEM?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 399.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 384.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 379.99,
        originalPrice: 429.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-second-fix-nailer",
    brand: "DeWalt",
    name: "18V XR Brushless 16 Gauge Second Fix Nailer (Body Only)",
    modelNumber: "DCN660N",
    category: "nail-guns",
    description: "Brushless second fix nailer for 32-63mm 16 gauge finish nails. Tool-free depth adjustment. Sequential fire mode.",
    retailers: [
      {
        name: "Amazon UK",
        price: 299.99,
        originalPrice: 349.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01ERQIHCG?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 309.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 294.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 289.99,
        originalPrice: 339.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },

  // ============================================================
  // MAKITA 18V LXT RANGE
  // ============================================================
  {
    slug: "makita-18v-lxt-combi-drill",
    brand: "Makita",
    name: "18V LXT Brushless Combi Drill (Body Only)",
    modelNumber: "DHP486Z",
    category: "drills",
    description: "Brushless combi drill with 130Nm max torque. Two-speed gearbox (0-2,100 RPM). 21-stage torque settings plus drill mode.",
    retailers: [
      {
        name: "Amazon UK",
        price: 139.99,
        originalPrice: 169.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09C2GKKWD?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 149.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 144.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 135.99,
        originalPrice: 159.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 137.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
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
        name: "ITS",
        price: 87.99,
        originalPrice: 99.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Amazon UK",
        price: 89.99,
        originalPrice: 109.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B076WXSW9F?tag=toolcheckeruk-21",
      },
      {
        name: "Toolstation",
        price: 92.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 94.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
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
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Powertool World",
        price: 172.50,
        inStock: true,
        delivery: "Free over £100",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Amazon UK",
        price: 174.99,
        originalPrice: 209.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01LEDRR6Y?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 189.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-angle-grinder",
    brand: "Makita",
    name: "18V LXT Brushless 125mm Angle Grinder (Body Only)",
    modelNumber: "DGA504Z",
    category: "grinders",
    description: "Brushless 125mm angle grinder with 8,500 RPM. Electronic current limiter and soft start. Anti-restart function for safety.",
    retailers: [
      {
        name: "Amazon UK",
        price: 119.99,
        originalPrice: 149.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01LEDRRHG?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 129.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 124.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 117.99,
        originalPrice: 139.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 121.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-multi-tool",
    brand: "Makita",
    name: "18V LXT Brushless Multi-Tool (Body Only)",
    modelNumber: "DTM52Z",
    category: "multi-tools",
    description: "Brushless oscillating multi-tool with 20,000 OPM. OIS and Starlock compatible. Variable speed dial and soft start.",
    retailers: [
      {
        name: "Amazon UK",
        price: 154.99,
        originalPrice: 184.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09C2H3VKT?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 159.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 149.99,
        originalPrice: 174.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 152.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-reciprocating-saw",
    brand: "Makita",
    name: "18V LXT Reciprocating Saw (Body Only)",
    modelNumber: "DJR186Z",
    category: "saws",
    description: "Reciprocating saw with 32mm stroke length. 0-2,800 SPM variable speed. Tool-less blade change and shoe adjustment.",
    retailers: [
      {
        name: "Amazon UK",
        price: 124.99,
        originalPrice: 149.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00G4EGKLA?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 134.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 129.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 119.99,
        originalPrice: 139.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-jigsaw",
    brand: "Makita",
    name: "18V LXT Brushless Jigsaw (Body Only)",
    modelNumber: "DJV182Z",
    category: "saws",
    description: "Brushless jigsaw with 26mm stroke length. 3-stage orbital action. 0-3,500 SPM variable speed. Tool-less blade change.",
    retailers: [
      {
        name: "Amazon UK",
        price: 154.99,
        originalPrice: 189.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01LEDRR3Q?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 164.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 149.99,
        originalPrice: 179.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 152.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-sds-plus-drill",
    brand: "Makita",
    name: "18V LXT Brushless SDS Plus Hammer Drill (Body Only)",
    modelNumber: "DHR242Z",
    category: "sds-drills",
    description: "Brushless SDS Plus rotary hammer with 2.0J impact energy. 3 modes of operation. 24mm max drilling in concrete. Anti-vibration technology.",
    retailers: [
      {
        name: "Amazon UK",
        price: 179.99,
        originalPrice: 214.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B014GIQY6I?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 189.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 184.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 174.99,
        originalPrice: 199.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 177.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-planer",
    brand: "Makita",
    name: "18V LXT Brushless 82mm Planer (Body Only)",
    modelNumber: "DKP181Z",
    category: "planers",
    description: "Brushless 82mm planer with 0-2mm cutting depth. 12,000 RPM no-load speed. Reversible TCT blades. Parallel guide fence included.",
    retailers: [
      {
        name: "Amazon UK",
        price: 209.99,
        originalPrice: 249.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01LEDRQSE?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 219.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 204.99,
        originalPrice: 239.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 207.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-brad-nailer",
    brand: "Makita",
    name: "18V LXT 18 Gauge Brad Nailer (Body Only)",
    modelNumber: "DBN600Z",
    category: "nail-guns",
    description: "Cordless 18 gauge brad nailer firing 19-50mm brads. No gas cartridges required. Depth adjustment dial and sequential fire mode.",
    retailers: [
      {
        name: "Amazon UK",
        price: 269.99,
        originalPrice: 319.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0797N57NX?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 279.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 264.99,
        originalPrice: 299.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 267.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-orbital-sander",
    brand: "Makita",
    name: "18V LXT 125mm Random Orbital Sander (Body Only)",
    modelNumber: "DBO180Z",
    category: "sanders",
    description: "125mm random orbital sander with variable speed 7,000-11,000 OPM. Hook and loop pad for quick paper change. Dust collection bag included.",
    retailers: [
      {
        name: "Amazon UK",
        price: 84.99,
        originalPrice: 99.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00G4EGKIC?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 89.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 87.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 82.99,
        originalPrice: 94.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-router",
    brand: "Makita",
    name: "18V LXT Brushless Router Trimmer (Body Only)",
    modelNumber: "DRT50Z",
    category: "routers",
    description: "Brushless 1/4\" router trimmer with variable speed 10,000-30,000 RPM. Plunge base and tilt base included. Dust extraction port.",
    retailers: [
      {
        name: "Amazon UK",
        price: 189.99,
        originalPrice: 224.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07DR17QGK?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 199.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 184.99,
        originalPrice: 214.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 187.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Powertool World",
        price: 192.99,
        inStock: true,
        delivery: "Free over £100",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },

  // ============================================================
  // BOSCH PROFESSIONAL 18V RANGE
  // ============================================================
  {
    slug: "bosch-18v-combi-drill",
    brand: "Bosch Professional",
    name: "18V Brushless Combi Drill (Body Only)",
    modelNumber: "GSB 18V-55",
    category: "drills",
    description: "Compact brushless combi drill with 55Nm max torque. Kickback control for user protection. 20+1 torque settings. LED light.",
    retailers: [
      {
        name: "Amazon UK",
        price: 84.99,
        originalPrice: 109.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B085RV1MLJ?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 89.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 87.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 86.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-impact-driver",
    brand: "Bosch Professional",
    name: "18V Brushless Impact Driver (Body Only)",
    modelNumber: "GDR 18V-200",
    category: "impact-drivers",
    description: "Brushless impact driver with 200Nm max torque. Compact 148mm length. 3-speed pre-selection for optimised fastening.",
    retailers: [
      {
        name: "Amazon UK",
        price: 89.99,
        originalPrice: 114.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B085RWXCPZ?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 94.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 92.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 91.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-circular-saw",
    brand: "Bosch Professional",
    name: "18V BITURBO 190mm Circular Saw (Body Only)",
    modelNumber: "GKS 18V-68 GC",
    category: "saws",
    description: "BITURBO brushless circular saw with 68mm cutting depth. Connected via Bluetooth to GCY 42 module. 5,000 RPM for fast cutting.",
    retailers: [
      {
        name: "Amazon UK",
        price: 249.99,
        originalPrice: 299.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09MRG1WXP?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 259.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 247.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 244.99,
        originalPrice: 279.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-sds-hammer-drill",
    brand: "Bosch Professional",
    name: "18V SDS Plus Hammer Drill (Body Only)",
    modelNumber: "GBH 18V-26",
    category: "sds-drills",
    description: "Professional SDS Plus hammer drill with 2.6J impact energy. Kickback control and rotation stop for safety. 3 modes of operation.",
    retailers: [
      {
        name: "FFX Tools",
        price: 195.00,
        originalPrice: 229.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Amazon UK",
        price: 199.99,
        originalPrice: 239.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01MY75LR1?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 209.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-angle-grinder",
    brand: "Bosch Professional",
    name: "18V BITURBO 125mm Angle Grinder (Body Only)",
    modelNumber: "GWS 18V-10 C",
    category: "grinders",
    description: "BITURBO brushless angle grinder with 10,000 RPM. KickBack Control, restart protection, and soft start. Bluetooth connectivity.",
    retailers: [
      {
        name: "Amazon UK",
        price: 169.99,
        originalPrice: 199.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08FB5MTKR?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 179.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 167.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 164.99,
        originalPrice: 189.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-multi-tool",
    brand: "Bosch Professional",
    name: "18V Brushless Multi-Tool (Body Only)",
    modelNumber: "GOP 18V-28",
    category: "multi-tools",
    description: "Brushless oscillating multi-tool with Starlock Plus interface. 20,000 OPM. Variable speed for precise material-specific work.",
    retailers: [
      {
        name: "Amazon UK",
        price: 134.99,
        originalPrice: 164.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B085RVDCMC?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 139.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 137.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 132.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-planer",
    brand: "Bosch Professional",
    name: "18V 82mm Planer (Body Only)",
    modelNumber: "GHO 18V-LI",
    category: "planers",
    description: "Cordless 82mm planer with 0-1.6mm cutting depth. 14,000 RPM for smooth finish. Reversible HM/CT blades.",
    retailers: [
      {
        name: "Amazon UK",
        price: 169.99,
        originalPrice: 199.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00M3URXK0?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 179.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 167.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 164.99,
        originalPrice: 189.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },

  // ============================================================
  // HIKOKI 36V MULTIVOLT RANGE
  // ============================================================
  {
    slug: "hikoki-36v-combi-drill",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless Combi Drill (Body Only)",
    modelNumber: "DV36DA",
    category: "drills",
    description: "MultiVolt brushless combi drill delivering 138Nm max torque. Compatible with both 36V and 18V batteries. 22-stage torque settings.",
    retailers: [
      {
        name: "Amazon UK",
        price: 149.99,
        originalPrice: 179.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08LZFBL3C?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 159.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 154.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 147.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-impact-driver",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless Impact Driver (Body Only)",
    modelNumber: "WH36DC",
    category: "impact-drivers",
    description: "MultiVolt brushless impact driver with 200Nm max torque. 4-speed electronic switch. Triple hammer mechanism for reduced vibration.",
    retailers: [
      {
        name: "Amazon UK",
        price: 119.99,
        originalPrice: 149.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08LZFCR5M?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 129.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 117.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 114.99,
        originalPrice: 139.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-circular-saw",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless 185mm Circular Saw (Body Only)",
    modelNumber: "C3607DA",
    category: "saws",
    description: "MultiVolt brushless circular saw with 66mm cutting depth. 5,000 RPM. Soft start and electric brake. Lightweight 3.6kg body.",
    retailers: [
      {
        name: "Amazon UK",
        price: 199.99,
        originalPrice: 239.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08LZFH6XF?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 209.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 197.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 194.99,
        originalPrice: 229.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-angle-grinder",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless 125mm Angle Grinder (Body Only)",
    modelNumber: "G3613DA",
    category: "grinders",
    description: "MultiVolt brushless angle grinder with 10,000 RPM. Kickback reduction, soft start, and auto-stop. Paddle switch design.",
    retailers: [
      {
        name: "Amazon UK",
        price: 154.99,
        originalPrice: 184.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08LZFF45J?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 164.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 152.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 149.99,
        originalPrice: 174.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-sds-plus-drill",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless SDS Plus Hammer Drill (Body Only)",
    modelNumber: "DH36DPA",
    category: "sds-drills",
    description: "MultiVolt SDS Plus rotary hammer with 3.2J impact energy. 3 modes of operation. 30mm max drilling in concrete. Anti-vibration handle.",
    retailers: [
      {
        name: "Amazon UK",
        price: 219.99,
        originalPrice: 259.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07VFR8PQR?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 229.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 217.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 214.99,
        originalPrice: 249.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
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

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(tools.map((t) => t.category))];
}

export function getAllBrands(): string[] {
  return [...new Set(tools.map((t) => t.brand))];
}

// =============================================================
// IMPROVED SEARCH
// =============================================================

function expandQuery(query: string): string[] {
  const q = query.toLowerCase().trim();
  const expanded: string[] = [q];

  for (const [abbrev, expansions] of Object.entries(ABBREVIATIONS)) {
    if (q.includes(abbrev)) {
      for (const expansion of expansions) {
        expanded.push(q.replace(abbrev, expansion));
      }
    }
  }

  return expanded;
}

function scoreMatch(tool: Tool, query: string): number {
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/);

  const modelLower = tool.modelNumber.toLowerCase().replace(/\s+/g, "");
  const queryNoSpaces = q.replace(/\s+/g, "");

  // Exact model number match — highest score
  if (modelLower === queryNoSpaces || modelLower.includes(queryNoSpaces)) {
    return 100;
  }

  // Partial model number match (e.g. "DCD796" matches "DCD796N")
  if (queryNoSpaces.length >= 4 && modelLower.includes(queryNoSpaces)) {
    return 90;
  }
  if (queryNoSpaces.length >= 4 && modelLower.replace(/-/g, "").includes(queryNoSpaces.replace(/-/g, ""))) {
    return 85;
  }

  const searchable = `${tool.brand} ${tool.name} ${tool.modelNumber} ${tool.category} ${tool.description}`.toLowerCase();

  // All words match
  const allMatch = words.every((word) => searchable.includes(word));
  if (!allMatch) return 0;

  let score = 10;

  // Brand match bonus
  if (words.some((w) => tool.brand.toLowerCase().includes(w))) {
    score += 20;
  }

  // Category match bonus
  const categoryWords = tool.category.replace(/-/g, " ");
  if (words.some((w) => categoryWords.includes(w))) {
    score += 15;
  }

  // Name match bonus
  const nameLower = tool.name.toLowerCase();
  if (words.some((w) => nameLower.includes(w))) {
    score += 10;
  }

  // Exact phrase in name
  if (nameLower.includes(q)) {
    score += 25;
  }

  return score;
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const queries = expandQuery(q);
  const scored = new Map<string, { tool: Tool; score: number }>();

  for (const expandedQuery of queries) {
    for (const tool of tools) {
      const score = scoreMatch(tool, expandedQuery);
      if (score > 0) {
        const existing = scored.get(tool.slug);
        if (!existing || score > existing.score) {
          scored.set(tool.slug, { tool, score });
        }
      }
    }
  }

  return [...scored.values()]
    .sort((a, b) => b.score - a.score)
    .map(({ tool }) => tool);
}

export default tools;
