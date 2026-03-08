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
  "lighting": "Torches & Site Lights",
  "outdoor": "Outdoor & Garden",
  "radio": "Radios & Speakers",
  "specialist": "Specialist Trade Tools",
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
  "torch": ["torch", "led torch"],
  "light": ["light", "area light", "site light"],
  "blower": ["blower", "leaf blower"],
  "chainsaw": ["chainsaw", "chain saw"],
  "hedge trimmer": ["hedge trimmer"],
  "strimmer": ["string trimmer", "line trimmer"],
  "radio": ["radio", "dab radio"],
  "speaker": ["bluetooth speaker"],
  "ratchet": ["impact ratchet"],
  "hackzall": ["hackzall", "reciprocating saw"],
  "bandsaw": ["bandsaw", "band saw"],
  "mitre saw": ["mitre saw", "miter saw"],
  "table saw": ["table saw"],
  "soldering": ["soldering iron"],
  "rivet": ["rivet tool", "rivet gun"],
  "pipe cutter": ["pipe cutter"],
  "inflator": ["inflator", "tyre inflator"],
  "caulk gun": ["caulking gun", "caulk gun"],
  "grease gun": ["grease gun"],
  "die grinder": ["die grinder"],
  "surge": ["surge", "hydraulic impact"],
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
        url: "https://www.amazon.co.uk/dp/B07GQJHXMT?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B0BDF5BHTF?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B0C5XWC12N?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B0BTXCYRLD?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B00QMAP1GK?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B07GDPMCHC?tag=toolcheckeruk-21",
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
    modelNumber: "M18 ONEFSZ-0X",
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
        url: "https://www.amazon.co.uk/dp/B08Z79RWMR?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B07HGY636Z?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B07ZRW4C3N?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B08WBYTMH7?tag=toolcheckeruk-21",
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
    modelNumber: "M18 BP-0",
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
        url: "https://www.amazon.co.uk/dp/B013XCFSYY?tag=toolcheckeruk-21",
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
    modelNumber: "M18 BOS125-0",
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
        url: "https://www.amazon.co.uk/dp/B07GQ11768?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B07ZRR8N1H?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B0859DLGZ8?tag=toolcheckeruk-21",
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
  // MILWAUKEE M12 — Additional Tools
  // ============================================================
  {
    slug: "milwaukee-m12-fuel-drill-driver",
    brand: "Milwaukee",
    name: "M12 FUEL Sub Compact Drill Driver (Body Only)",
    modelNumber: "M12 FDD-0",
    category: "drills",
    description: "Sub-compact brushless drill driver measuring only 168mm in length. POWERSTATE motor for longer life and more runtime. 13mm metal keyless chuck.",
    retailers: [
      {
        name: "ITS",
        price: 89.99,
        originalPrice: 109.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Amazon UK",
        price: 94.99,
        originalPrice: 119.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07F3Y1RZT?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 99.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 96.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 99.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-fuel-installation-drill",
    brand: "Milwaukee",
    name: "M12 FUEL Installation Drill/Driver 4-in-1 (Body Only)",
    modelNumber: "M12 FDDXKIT-0",
    category: "drills",
    description: "4-in-1 installation drill/driver with removable chuck system and 4 different heads for multiple applications. POWERSTATE brushless motor.",
    retailers: [
      {
        name: "Amazon UK",
        price: 199.99,
        originalPrice: 239.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B087ZR1RPC?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 204.99,
        originalPrice: 229.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
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
        price: 206.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 214.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-sub-compact-drill-driver",
    brand: "Milwaukee",
    name: "M12 Sub Compact Drill Driver (Body Only)",
    modelNumber: "M12 BDD-0",
    category: "drills",
    description: "Entry-level 12V sub-compact drill driver at just 187mm length. Ideal for working in confined spaces. 10mm keyless chuck.",
    retailers: [
      {
        name: "Amazon UK",
        price: 54.99,
        originalPrice: 69.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00L14CTAS?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 52.99,
        originalPrice: 64.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 59.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 56.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 59.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-fuel-impact-driver",
    brand: "Milwaukee",
    name: "M12 FUEL 1/4\" Hex Impact Driver (Body Only)",
    modelNumber: "M12 FID2-0",
    category: "impact-drivers",
    description: "Sub-compact brushless impact driver with 155Nm max torque. POWERSTATE motor delivers 0-3,300 RPM. Measures just 130mm in length.",
    retailers: [
      {
        name: "Amazon UK",
        price: 109.99,
        originalPrice: 129.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0BDF8NCJF?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 104.99,
        originalPrice: 124.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 114.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 111.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
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
    ],
  },
  {
    slug: "milwaukee-m12-fuel-surge-impact-driver",
    brand: "Milwaukee",
    name: "M12 FUEL Surge Hydraulic Impact Driver (Body Only)",
    modelNumber: "M12 FQID-0",
    category: "impact-drivers",
    description: "FLUID-DRIVE hydraulic powertrain delivers quieter operation and smoother performance. 4-mode DRIVE CONTROL. POWERSTATE brushless motor.",
    retailers: [
      {
        name: "Amazon UK",
        price: 139.99,
        originalPrice: 169.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0C5HPFPZV?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 134.99,
        originalPrice: 159.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 144.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 141.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 146.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-fuel-38-stubby-impact-wrench",
    brand: "Milwaukee",
    name: "M12 FUEL 3/8\" Stubby Impact Wrench (Body Only)",
    modelNumber: "M12 FIW38-0",
    category: "impact-drivers",
    description: "Compact 3/8\" square drive impact wrench delivering up to 250Nm of torque. Ideal for under-bonnet automotive work in tight engine bays.",
    retailers: [
      {
        name: "ITS",
        price: 94.99,
        originalPrice: 114.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Amazon UK",
        price: 99.99,
        originalPrice: 119.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07H65MP5M?tag=toolcheckeruk-21",
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
        name: "FFX Tools",
        price: 101.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 104.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-fuel-14-ratchet",
    brand: "Milwaukee",
    name: "M12 FUEL 1/4\" High Speed Ratchet (Body Only)",
    modelNumber: "M12 FHIR14-0",
    category: "impact-drivers",
    description: "Compact high speed 1/4\" ratchet with brushless motor. Low profile head design for access in tight spaces. Up to 40ft-lbs torque.",
    retailers: [
      {
        name: "Amazon UK",
        price: 119.99,
        originalPrice: 144.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0995Y1P8W?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 114.99,
        originalPrice: 134.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 124.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "Toolstation",
        price: 124.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-fuel-38-ratchet",
    brand: "Milwaukee",
    name: "M12 FUEL Sub Compact 3/8\" Impact Ratchet (Body Only)",
    modelNumber: "M12 FIR38-0",
    category: "impact-drivers",
    description: "Sub-compact 3/8\" impact ratchet ideal for tight spaces and small engine bays. 68Nm max torque with FUEL brushless motor.",
    retailers: [
      {
        name: "Amazon UK",
        price: 118.99,
        originalPrice: 139.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07F48RP29?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 112.99,
        originalPrice: 129.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 124.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 119.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
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
    ],
  },
  {
    slug: "milwaukee-m12-fuel-12-ratchet",
    brand: "Milwaukee",
    name: "M12 FUEL Sub Compact 1/2\" Impact Ratchet (Body Only)",
    modelNumber: "M12 FIR12-0",
    category: "impact-drivers",
    description: "Sub-compact 1/2\" impact ratchet delivering 81Nm max torque at 175 RPM. Low profile head for tight spaces. Includes 3/8\" adaptor.",
    retailers: [
      {
        name: "Amazon UK",
        price: 129.99,
        originalPrice: 154.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07BBQRN99?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 124.99,
        originalPrice: 144.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
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
        name: "FFX Tools",
        price: 131.50,
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
    slug: "milwaukee-m12-fuel-hackzall",
    brand: "Milwaukee",
    name: "M12 FUEL Hackzall Reciprocating Saw (Body Only)",
    modelNumber: "M12 CHZ-0",
    category: "saws",
    description: "Compact FUEL hackzall perfect for tight spaces and overhead work. Lightweight design with impressive cutting capability. Tool-free blade change.",
    retailers: [
      {
        name: "Amazon UK",
        price: 109.99,
        originalPrice: 134.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00QMB2WHU?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 104.99,
        originalPrice: 124.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 114.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 111.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
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
    ],
  },
  {
    slug: "milwaukee-m12-fuel-cut-off-tool",
    brand: "Milwaukee",
    name: "M12 FUEL Cut Off Tool (Body Only)",
    modelNumber: "M12 FCOT-0",
    category: "grinders",
    description: "Compact 76mm cut off tool with forward and reverse rotation to direct debris away from user. 20,000 RPM for fast cutting.",
    retailers: [
      {
        name: "Amazon UK",
        price: 109.99,
        originalPrice: 129.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07GPXR69Z?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 104.99,
        originalPrice: 119.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 114.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 111.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 112.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-fuel-jigsaw",
    brand: "Milwaukee",
    name: "M12 FUEL Jigsaw (Body Only)",
    modelNumber: "M12 FJS-0",
    category: "saws",
    description: "FUEL brushless jigsaw with 6 speed levels up to 3,500 SPM. FIXTEC tool-free blade change. Built-in dust blower and LED work light.",
    retailers: [
      {
        name: "Amazon UK",
        price: 154.99,
        originalPrice: 184.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0CLHJLZY2?tag=toolcheckeruk-21",
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
        name: "Screwfix",
        price: 159.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 156.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 159.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-fuel-bandsaw",
    brand: "Milwaukee",
    name: "M12 FUEL 64mm Bandsaw (Body Only)",
    modelNumber: "M12 FBS64-0",
    category: "saws",
    description: "Compact cordless bandsaw with 64mm cutting capacity. Brushless motor for efficient cutting of pipe and conduit. LED work light.",
    retailers: [
      {
        name: "Amazon UK",
        price: 229.99,
        originalPrice: 269.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09HV4951D?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 219.99,
        originalPrice: 249.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 234.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 226.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 234.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-fuel-multi-tool",
    brand: "Milwaukee",
    name: "M12 FUEL Multi-Tool (Body Only)",
    modelNumber: "M12 FMT-0",
    category: "multi-tools",
    description: "FUEL brushless oscillating multi-tool with fast cutting speed. FIXTEC tool-free blade change. Universal blade adaptor for cross-brand compatibility.",
    retailers: [
      {
        name: "Amazon UK",
        price: 119.99,
        originalPrice: 144.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08M3Y1RK4?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 114.99,
        originalPrice: 134.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 124.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "Toolstation",
        price: 124.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-fuel-sds-plus-drill",
    brand: "Milwaukee",
    name: "M12 FUEL SDS Plus Hammer Drill (Body Only)",
    modelNumber: "M12 CH-0",
    category: "sds-drills",
    description: "Compact 12V SDS Plus hammer drill with 1.1J blow energy. 2-mode operation: rotary hammer and rotation only. 13mm max in concrete.",
    retailers: [
      {
        name: "Amazon UK",
        price: 129.99,
        originalPrice: 154.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00HZRBF14?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 124.99,
        originalPrice: 144.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
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
        name: "FFX Tools",
        price: 131.50,
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
    slug: "milwaukee-m12-soldering-iron",
    brand: "Milwaukee",
    name: "M12 Cordless Soldering Iron (Body Only)",
    modelNumber: "M12 SI-0",
    category: "specialist",
    description: "Cordless soldering iron ready to use in under 30 seconds. 90W heater, 400°C temperature. 3 locking head positions: 0°, 45° and 90°.",
    retailers: [
      {
        name: "Amazon UK",
        price: 69.99,
        originalPrice: 89.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07F3T8VHV?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 64.99,
        originalPrice: 79.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 74.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 71.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 74.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-fuel-die-grinder",
    brand: "Milwaukee",
    name: "M12 FUEL Straight Die Grinder (Body Only)",
    modelNumber: "M12 FDGS-0",
    category: "grinders",
    description: "Compact straight die grinder with brushless motor. Variable speed for grinding, polishing and deburring. 6mm and 8mm collet included.",
    retailers: [
      {
        name: "Amazon UK",
        price: 114.99,
        originalPrice: 139.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B085HJ7SG3?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 109.99,
        originalPrice: 129.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
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
        name: "FFX Tools",
        price: 116.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 119.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-rivet-tool",
    brand: "Milwaukee",
    name: "M12 Pop Rivet Tool (Body Only)",
    modelNumber: "M12 BPRT-0",
    category: "specialist",
    description: "Cordless pop rivet tool for aluminium, steel, stainless steel and copper rivets up to 4.8mm. 9,000N max pulling force. 20.32mm stroke.",
    retailers: [
      {
        name: "Amazon UK",
        price: 149.99,
        originalPrice: 179.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07GFQVDZB?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 144.99,
        originalPrice: 169.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 154.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 151.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
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
    slug: "milwaukee-m12-pipe-cutter",
    brand: "Milwaukee",
    name: "M12 Raptor Stainless Steel Pipe Cutter (Body Only)",
    modelNumber: "M12 PCSS-0",
    category: "specialist",
    description: "Cordless stainless steel pipe cutter with auto-adjusting jaws. All-metal front end. Cuts 28mm stainless steel pipe in under 20 seconds.",
    retailers: [
      {
        name: "Amazon UK",
        price: 219.99,
        originalPrice: 259.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09ZPJ5SYG?tag=toolcheckeruk-21",
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
      {
        name: "Screwfix",
        price: 224.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 221.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 227.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-led-torch",
    brand: "Milwaukee",
    name: "M12 LED Torch (Body Only)",
    modelNumber: "M12 TLED-0",
    category: "lighting",
    description: "Compact 12V LED torch powered by M12 REDLITHIUM batteries. Durable construction for site use. Lightweight and pocket-friendly design.",
    retailers: [
      {
        name: "Amazon UK",
        price: 29.99,
        originalPrice: 39.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00IQ7KYYQ?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 27.99,
        originalPrice: 34.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 32.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 31.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 32.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-underbody-light",
    brand: "Milwaukee",
    name: "M12 Underbody Light 1200 Lumens (Body Only)",
    modelNumber: "M12 UCL-0",
    category: "lighting",
    description: "1200 lumen automotive undercarriage light. Magnetic mounting for hands-free operation under vehicles. Adjustable beam angle.",
    retailers: [
      {
        name: "Amazon UK",
        price: 139.99,
        originalPrice: 164.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09N1Y5DQQ?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 134.99,
        originalPrice: 154.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 144.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 141.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
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
    ],
  },
  {
    slug: "milwaukee-m12-inflator",
    brand: "Milwaukee",
    name: "M12 Sub-Compact Tyre Inflator (Body Only)",
    modelNumber: "M12 BI-0",
    category: "specialist",
    description: "Compact cordless tyre inflator with digital pressure gauge. Auto shut-off at desired pressure. Includes Schrader, Presta and sports ball adaptors.",
    retailers: [
      {
        name: "Amazon UK",
        price: 59.99,
        originalPrice: 79.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07DGGGHSZ?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 54.99,
        originalPrice: 69.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 64.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 61.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 64.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },

  // ============================================================
  // MILWAUKEE M18 — Additional Tools
  // ============================================================
  {
    slug: "milwaukee-m18-compact-combi-drill",
    brand: "Milwaukee",
    name: "M18 Compact Combi Drill (Body Only)",
    modelNumber: "M18 BPD-0",
    category: "drills",
    description: "Entry-level 18V compact percussion drill with 50Nm max torque. Two-speed metal gearbox, 13mm keyless chuck, and LED work light.",
    retailers: [
      {
        name: "Amazon UK",
        price: 74.99,
        originalPrice: 94.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00VWQA3TY?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 69.99,
        originalPrice: 84.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 79.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 76.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 79.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-surge-impact-driver",
    brand: "Milwaukee",
    name: "M18 FUEL Surge Hydraulic Impact Driver (Body Only)",
    modelNumber: "M18 FQID-0",
    category: "impact-drivers",
    description: "FLUID-DRIVE hydraulic powertrain for quieter, smoother operation — up to 50% quieter than standard impact drivers. 4-mode DRIVE CONTROL.",
    retailers: [
      {
        name: "Amazon UK",
        price: 169.99,
        originalPrice: 199.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B073P2X8DD?tag=toolcheckeruk-21",
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
        price: 171.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 176.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-12-impact-wrench",
    brand: "Milwaukee",
    name: "M18 FUEL 1/2\" High Torque Impact Wrench with Friction Ring (Body Only)",
    modelNumber: "M18 FHIWF12-0",
    category: "impact-drivers",
    description: "High torque 1/2\" impact wrench with friction ring delivering up to 1,356Nm nut-busting torque. POWERSTATE brushless motor for heavy-duty automotive work.",
    retailers: [
      {
        name: "Amazon UK",
        price: 279.99,
        originalPrice: 329.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07HGL5JQY?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 269.99,
        originalPrice: 309.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 289.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 281.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 289.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-onekey-12-impact-wrench",
    brand: "Milwaukee",
    name: "M18 FUEL ONE-KEY 1/2\" High Torque Impact Wrench (Body Only)",
    modelNumber: "M18 ONEFHIWF12-0",
    category: "impact-drivers",
    description: "ONE-KEY enabled 1/2\" high torque impact wrench. Customise, track and manage via ONE-KEY app. 1,898Nm nut-busting torque.",
    retailers: [
      {
        name: "Amazon UK",
        price: 329.99,
        originalPrice: 389.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07F3WYGQX?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 319.99,
        originalPrice: 369.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 339.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 331.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 339.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-hackzall",
    brand: "Milwaukee",
    name: "M18 FUEL Hackzall Compact Reciprocating Saw (Body Only)",
    modelNumber: "M18 FHZ-0",
    category: "saws",
    description: "Compact one-handed hackzall with POWERSTATE brushless motor. Ideal for overhead and tight-space cutting. Tool-free blade clamp.",
    retailers: [
      {
        name: "Amazon UK",
        price: 149.99,
        originalPrice: 179.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07F3QCNDC?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 144.99,
        originalPrice: 169.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 154.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 151.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
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
    slug: "milwaukee-m18-fuel-115mm-angle-grinder",
    brand: "Milwaukee",
    name: "M18 FUEL 115mm Angle Grinder with Paddle Switch (Body Only)",
    modelNumber: "M18 FSAGV115XPDB-0",
    category: "grinders",
    description: "115mm angle grinder with non-lockable safety paddle switch. RAPIDSTOP disc brake in under 2 seconds. POWERSTATE brushless motor.",
    retailers: [
      {
        name: "Amazon UK",
        price: 174.99,
        originalPrice: 209.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B097H4Q9LV?tag=toolcheckeruk-21",
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
        price: 176.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 181.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-125mm-braking-grinder",
    brand: "Milwaukee",
    name: "M18 FUEL 125mm Angle Grinder with Paddle & Brake (Body Only)",
    modelNumber: "M18 FSAGF125XPDB-0",
    category: "grinders",
    description: "125mm flathead angle grinder with RAPIDSTOP brake and paddle switch. Delivers power equivalent to an 1800W corded grinder. Dead man switch.",
    retailers: [
      {
        name: "Amazon UK",
        price: 199.99,
        originalPrice: 239.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09F6G6BS7?tag=toolcheckeruk-21",
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
        price: 206.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 209.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-230mm-angle-grinder",
    brand: "Milwaukee",
    name: "M18 FUEL 230mm Angle Grinder with Paddle Switch (Body Only)",
    modelNumber: "M18 FLAG230XPDB-0",
    category: "grinders",
    description: "Powerful 230mm cordless angle grinder replacing corded 2,200W class. RAPIDSTOP and dead man paddle switch. Runs on M18 HIGH OUTPUT batteries.",
    retailers: [
      {
        name: "Amazon UK",
        price: 289.99,
        originalPrice: 349.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07P3RTHTM?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 279.99,
        originalPrice: 329.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 299.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 291.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 299.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-compact-router",
    brand: "Milwaukee",
    name: "M18 FUEL Compact Router / Trimmer (Body Only)",
    modelNumber: "M18 FTR-0",
    category: "routers",
    description: "Compact brushless laminate trimmer with variable speed 10,000-31,000 RPM. 6mm and 8mm collet included. Sub-base with clear visibility.",
    retailers: [
      {
        name: "Amazon UK",
        price: 159.99,
        originalPrice: 189.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0859D87KV?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 154.99,
        originalPrice: 179.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
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
        price: 161.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
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
    ],
  },
  {
    slug: "milwaukee-m18-fuel-sds-plus-4-mode",
    brand: "Milwaukee",
    name: "M18 FUEL SDS Plus 4-Mode Rotary Hammer (Body Only)",
    modelNumber: "M18 FH-0",
    category: "sds-drills",
    description: "26mm 4-mode SDS Plus rotary hammer with 2.5J impact energy. Modes: hammer drill, drill only, chisel only, chisel vario-lock. Anti-vibration system.",
    retailers: [
      {
        name: "Amazon UK",
        price: 239.99,
        originalPrice: 279.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09W9TSDHR?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 229.99,
        originalPrice: 269.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 249.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 241.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 249.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-super-sawzall",
    brand: "Milwaukee",
    name: "M18 FUEL Super SAWZALL Reciprocating Saw (Body Only)",
    modelNumber: "M18 FSX-0",
    category: "saws",
    description: "Full-size super SAWZALL with POWERSTATE brushless motor delivering fastest cutting speed. 32mm stroke length. FIXTEC blade clamp.",
    retailers: [
      {
        name: "Amazon UK",
        price: 249.99,
        originalPrice: 299.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07NZCWQTM?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 239.99,
        originalPrice: 279.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
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
        price: 251.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 259.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-led-torch",
    brand: "Milwaukee",
    name: "M18 LED Torch (Body Only)",
    modelNumber: "M18 TLED-0",
    category: "lighting",
    description: "Powerful 18V LED torch with TRUEVIEW high-definition output. Long runtime on M18 batteries. Durable construction for site conditions.",
    retailers: [
      {
        name: "Amazon UK",
        price: 34.99,
        originalPrice: 44.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B092TR6BGF?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 31.99,
        originalPrice: 39.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 36.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 35.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 36.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-blower",
    brand: "Milwaukee",
    name: "M18 FUEL Blower (Body Only)",
    modelNumber: "M18 FBLG3-0",
    category: "outdoor",
    description: "Powerful cordless blower delivering up to 207km/h air speed. Variable speed trigger with BOOST mode. Lightweight design at 2.2kg.",
    retailers: [
      {
        name: "Amazon UK",
        price: 149.99,
        originalPrice: 179.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0DQ2NBMKZ?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 139.99,
        originalPrice: 169.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 154.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 151.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
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
    slug: "milwaukee-m18-inflator",
    brand: "Milwaukee",
    name: "M18 Compact Tyre Inflator (Body Only)",
    modelNumber: "M18 BI-0",
    category: "specialist",
    description: "18V cordless tyre inflator with digital pressure gauge and auto shut-off. Faster inflation than M12 model. Schrader, Presta and sports adaptors.",
    retailers: [
      {
        name: "Amazon UK",
        price: 79.99,
        originalPrice: 99.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0B523WGBW?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 74.99,
        originalPrice: 89.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 84.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 81.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 84.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-bandsaw-85mm",
    brand: "Milwaukee",
    name: "M18 FUEL 85mm Compact Bandsaw (Body Only)",
    modelNumber: "M18 FBS85-0",
    category: "saws",
    description: "Compact brushless bandsaw with 85mm cutting capacity. Up to 20% faster cutting than previous models. LED work light and toolless blade change.",
    retailers: [
      {
        name: "Amazon UK",
        price: 309.99,
        originalPrice: 359.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B085943PL5?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 299.99,
        originalPrice: 339.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 319.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 311.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 319.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-deep-cut-bandsaw",
    brand: "Milwaukee",
    name: "M18 FUEL 125mm Deep Cut Bandsaw (Body Only)",
    modelNumber: "M18 CBS125-0",
    category: "saws",
    description: "Heavy-duty deep cut bandsaw with 125mm cutting capacity. Ideal for large diameter pipes and structural steel. LED cut line light.",
    retailers: [
      {
        name: "Amazon UK",
        price: 349.99,
        originalPrice: 409.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00QMAOYX6?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 339.99,
        originalPrice: 389.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 359.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 351.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 359.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-mitre-saw-254mm",
    brand: "Milwaukee",
    name: "M18 FUEL 254mm Mitre Saw (Body Only)",
    modelNumber: "M18 FMS254-0",
    category: "saws",
    description: "Cordless 254mm sliding mitre saw with POWERSTATE brushless motor. 305 x 65mm cross-cut capacity at 90°. Shadow cut line indicator.",
    retailers: [
      {
        name: "Amazon UK",
        price: 649.99,
        originalPrice: 749.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B06VWGV9V3?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 629.99,
        originalPrice: 719.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 669.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 651.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 669.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-mitre-saw-305mm",
    brand: "Milwaukee",
    name: "M18 FUEL ONE-KEY 305mm Mitre Saw (Body Only)",
    modelNumber: "M18 FMS305-0",
    category: "saws",
    description: "Top-of-range 305mm cordless mitre saw with ONE-KEY compatibility. 365 x 110mm cross-cut capacity at 90°. Replaces corded 15A saws.",
    retailers: [
      {
        name: "Amazon UK",
        price: 799.99,
        originalPrice: 929.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08591DW7V?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 779.99,
        originalPrice: 899.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 819.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 801.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 819.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-table-saw",
    brand: "Milwaukee",
    name: "M18 FUEL ONE-KEY 210mm Table Saw (Body Only)",
    modelNumber: "M18 FTS210-0",
    category: "saws",
    description: "Portable 210mm cordless table saw with 635mm rip capacity. ONE-KEY enabled for tool tracking. 24.5\" rip fence for accurate cuts.",
    retailers: [
      {
        name: "Amazon UK",
        price: 599.99,
        originalPrice: 699.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07PXSFVTR?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 579.99,
        originalPrice: 679.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 619.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 601.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 619.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-16ga-finish-nailer",
    brand: "Milwaukee",
    name: "M18 FUEL 16 Gauge Angled Finish Nailer (Body Only)",
    modelNumber: "M18 FN16GA-0",
    category: "nail-guns",
    description: "Cordless 16 gauge angled finish nailer firing 32-63mm nails. Clean air technology. Dry fire lockout and tool-free depth adjustment.",
    retailers: [
      {
        name: "Amazon UK",
        price: 349.99,
        originalPrice: 409.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09T6Z3LN4?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 339.99,
        originalPrice: 389.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 359.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 351.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 359.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-grease-gun",
    brand: "Milwaukee",
    name: "M18 Cordless Grease Gun (Body Only)",
    modelNumber: "M18 GG-0",
    category: "specialist",
    description: "Powerful cordless grease gun delivering up to 10,000 PSI max operating pressure. High-volume output for quick lubrication. Lock-on/lock-off trigger.",
    retailers: [
      {
        name: "Amazon UK",
        price: 159.99,
        originalPrice: 189.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00DDQDF50?tag=toolcheckeruk-21",
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
        name: "Screwfix",
        price: 164.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 161.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
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
    ],
  },
  {
    slug: "milwaukee-m18-caulking-gun",
    brand: "Milwaukee",
    name: "M18 310ml Caulking Gun (Body Only)",
    modelNumber: "M18 PCG/310C-0",
    category: "specialist",
    description: "Cordless 310ml caulking gun with variable speed trigger for precise bead control. Anti-drip function. Compatible with standard cartridges.",
    retailers: [
      {
        name: "Amazon UK",
        price: 179.99,
        originalPrice: 219.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07F3VJN86?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 174.99,
        originalPrice: 209.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
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
        price: 181.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 187.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-mitre-saw-216mm",
    brand: "Milwaukee",
    name: "M18 216mm Sliding Mitre Saw (Body Only)",
    modelNumber: "M18 SMS216-0",
    category: "saws",
    description: "Cordless 216mm sliding compound mitre saw. Heavy-duty cast base and fence for durability. Positive bevel stops at common angles.",
    retailers: [
      {
        name: "Amazon UK",
        price: 459.99,
        originalPrice: 539.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00QMAOPLC?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 449.99,
        originalPrice: 519.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 479.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 466.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 479.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-onekey-34-impact-wrench",
    brand: "Milwaukee",
    name: "M18 FUEL ONE-KEY 3/4\" High Torque Impact Wrench (Body Only)",
    modelNumber: "M18 ONEFHIWF34-0",
    category: "impact-drivers",
    description: "ONE-KEY enabled 3/4\" high torque impact wrench for heavy plant and HGV work. Customisable torque settings via ONE-KEY app. Bolt removal mode.",
    retailers: [
      {
        name: "ITS",
        price: 389.99,
        originalPrice: 449.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Amazon UK",
        price: 399.99,
        originalPrice: 469.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07HHFMNQG?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 409.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 401.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 409.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-onekey-1-impact-wrench",
    brand: "Milwaukee",
    name: "M18 FUEL ONE-KEY 1\" High Torque Impact Wrench (Body Only)",
    modelNumber: "M18 ONEFHIWP12-0",
    category: "impact-drivers",
    description: "Most powerful cordless 1\" impact wrench. ONE-KEY enabled with 2,576Nm nut-busting torque. For large-scale industrial and plant applications.",
    retailers: [
      {
        name: "ITS",
        price: 549.99,
        originalPrice: 639.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Amazon UK",
        price: 559.99,
        originalPrice: 649.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07F3T2NNP?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 579.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 561.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 579.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-sds-max-hammer",
    brand: "Milwaukee",
    name: "M18 FUEL SDS Max Drilling & Breaking Hammer (Body Only)",
    modelNumber: "M18 CHM-0",
    category: "sds-drills",
    description: "Powerful SDS Max combi hammer with 8J impact energy. 3 modes: hammer drill, chisel, vario-lock chisel. For heavy concrete and masonry work.",
    retailers: [
      {
        name: "Amazon UK",
        price: 449.99,
        originalPrice: 529.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01BKF2FVK?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 439.99,
        originalPrice: 509.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 469.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 451.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 469.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-165mm-circular-saw",
    brand: "Milwaukee",
    name: "M18 FUEL 165mm Circular Saw (Body Only)",
    modelNumber: "M18 FCSG66-0",
    category: "saws",
    description: "Compact 165mm circular saw with POWERSTATE brushless motor. 55mm cutting depth at 90°. Ideal for ripping sheet materials and cross-cutting timber.",
    retailers: [
      {
        name: "Amazon UK",
        price: 219.99,
        originalPrice: 259.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08HS2JB5N?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 209.99,
        originalPrice: 249.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
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
        price: 221.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 229.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-125mm-slide-grinder",
    brand: "Milwaukee",
    name: "M18 FUEL 125mm Angle Grinder with Slide Switch (Body Only)",
    modelNumber: "M18 FSAG125X-0",
    category: "grinders",
    description: "125mm angle grinder with slide switch. POWERSTATE brushless motor delivers corded-equivalent power. Electronic clutch and overload protection.",
    retailers: [
      {
        name: "Amazon UK",
        price: 154.99,
        originalPrice: 189.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B095412VFS?tag=toolcheckeruk-21",
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
        name: "Screwfix",
        price: 164.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 156.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
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
    ],
  },
  {
    slug: "milwaukee-m18-fuel-orbital-polisher",
    brand: "Milwaukee",
    name: "M18 FUEL Random Orbital Polisher 150mm (Body Only)",
    modelNumber: "M18 FROP15-0",
    category: "sanders",
    description: "150mm random orbital polisher with variable speed 1,200-6,800 OPM. 15mm orbit for fast paint correction. Soft start and constant speed control.",
    retailers: [
      {
        name: "Amazon UK",
        price: 214.99,
        originalPrice: 249.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0B24V1W7L?tag=toolcheckeruk-21",
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
        name: "Screwfix",
        price: 219.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 216.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 219.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-belt-sander",
    brand: "Milwaukee",
    name: "M18 FUEL 75mm Belt Sander (Body Only)",
    modelNumber: "M18 FBTS75-0",
    category: "sanders",
    description: "Cordless 75 x 533mm belt sander with variable speed and soft start. POWERSTATE motor matches corded performance. On-board dust bag.",
    retailers: [
      {
        name: "Amazon UK",
        price: 229.99,
        originalPrice: 269.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0B7WZKXZR?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 219.99,
        originalPrice: 259.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 239.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 231.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 239.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-narrow-crown-stapler",
    brand: "Milwaukee",
    name: "M18 FUEL 18 Gauge Narrow Crown Stapler (Body Only)",
    modelNumber: "M18 FNCS18GS-0",
    category: "nail-guns",
    description: "Cordless 18 gauge narrow crown stapler for 12-38mm staples. Clean air technology eliminates gas cartridges. Dry fire lockout protection.",
    retailers: [
      {
        name: "Amazon UK",
        price: 319.99,
        originalPrice: 379.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08595R5XZ?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 309.99,
        originalPrice: 359.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 329.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 321.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 329.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-magnetic-drill",
    brand: "Milwaukee",
    name: "M18 FUEL Magnetic Drill Press (Body Only)",
    modelNumber: "M18 FMDP-0",
    category: "specialist",
    description: "Cordless magnetic drill press for steel fabrication. Permanent magnet base with 11,575N holding force. Accepts up to 38mm annular cutters.",
    retailers: [
      {
        name: "Amazon UK",
        price: 689.99,
        originalPrice: 799.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B06XQ6THLV?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 669.99,
        originalPrice: 779.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 709.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 691.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 709.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-threaded-rod-cutter",
    brand: "Milwaukee",
    name: "M18 Brushless Threaded Rod Cutter (Body Only)",
    modelNumber: "M18 BLTRC-0",
    category: "specialist",
    description: "Cordless threaded rod cutter for M6-M12 threaded rod. Clean cuts with no burrs or thread damage. Cuts in under 3 seconds.",
    retailers: [
      {
        name: "Amazon UK",
        price: 289.99,
        originalPrice: 339.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B082FPN9TB?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 279.99,
        originalPrice: 329.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 299.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 291.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 299.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-packout-vacuum",
    brand: "Milwaukee",
    name: "M18 FUEL PACKOUT Vacuum Cleaner (Body Only)",
    modelNumber: "M18 FPOVCL-0",
    category: "specialist",
    description: "PACKOUT compatible wet/dry vacuum with HEPA filter. 11L capacity. Stacks with PACKOUT modular storage system. Low profile design.",
    retailers: [
      {
        name: "Amazon UK",
        price: 199.99,
        originalPrice: 239.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08WHG8X6K?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 189.99,
        originalPrice: 229.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
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
        price: 201.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 209.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-wet-dry-vacuum",
    brand: "Milwaukee",
    name: "M18 FUEL Wet/Dry Vacuum (Body Only)",
    modelNumber: "M18 FVC2-0",
    category: "specialist",
    description: "Versatile wet and dry vacuum cleaner with HEPA filter. 7.5L capacity. Integrated hose, crevice and nozzle storage. Runs on M18 batteries.",
    retailers: [
      {
        name: "Amazon UK",
        price: 149.99,
        originalPrice: 179.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07F3RLNZQ?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 139.99,
        originalPrice: 169.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 154.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 151.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
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
    slug: "milwaukee-m18-fuel-chainsaw",
    brand: "Milwaukee",
    name: "M18 FUEL 16\" Chainsaw (Body Only)",
    modelNumber: "M18 FCHS-0",
    category: "outdoor",
    description: "Powerful 16\" cordless chainsaw with POWERSTATE brushless motor. Auto chain oiler and tool-free chain tensioning. Low kickback bar.",
    retailers: [
      {
        name: "Amazon UK",
        price: 299.99,
        originalPrice: 359.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07NS84WS3?tag=toolcheckeruk-21",
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
        price: 301.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 309.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fuel-hedge-trimmer",
    brand: "Milwaukee",
    name: "M18 FUEL 450mm Hedge Trimmer (Body Only)",
    modelNumber: "M18 FHT45-0",
    category: "outdoor",
    description: "450mm dual-action blade hedge trimmer with 20mm cutting capacity. Anti-vibration design. Hardened steel blades for clean cuts.",
    retailers: [
      {
        name: "Amazon UK",
        price: 179.99,
        originalPrice: 214.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09VL5THS4?tag=toolcheckeruk-21",
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
        price: 181.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
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
    ],
  },
  {
    slug: "milwaukee-m18-fuel-string-trimmer",
    brand: "Milwaukee",
    name: "M18 FUEL Line Trimmer / Strimmer (Body Only)",
    modelNumber: "M18 FOPHLTKIT-0",
    category: "outdoor",
    description: "Powerful cordless line trimmer with QUIK-LOK attachment system. Variable speed trigger and EASY LOAD trimmer head. Runs on M18 batteries.",
    retailers: [
      {
        name: "Amazon UK",
        price: 179.99,
        originalPrice: 219.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07NZD42VN?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 174.99,
        originalPrice: 209.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
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
        name: "FFX Tools",
        price: 181.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 189.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-area-light",
    brand: "Milwaukee",
    name: "M18 TRUEVIEW Area Light (Body Only)",
    modelNumber: "M18 TAL-0",
    category: "lighting",
    description: "High output area light with TRUEVIEW technology for accurate colour rendering. 3 brightness modes and adjustable light head. 360° hanger.",
    retailers: [
      {
        name: "Amazon UK",
        price: 79.99,
        originalPrice: 99.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07K8BFZRK?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 74.99,
        originalPrice: 89.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 84.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 81.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 84.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-lantern",
    brand: "Milwaukee",
    name: "M18 LED Lantern / Area Light (Body Only)",
    modelNumber: "M18 LL-0",
    category: "lighting",
    description: "Compact LED lantern with 360° illumination. TRUEVIEW technology for natural colour rendering. Integrated hanging hook and magnetic base.",
    retailers: [
      {
        name: "Amazon UK",
        price: 44.99,
        originalPrice: 59.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00TNGJUEE?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 39.99,
        originalPrice: 49.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 47.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 46.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 47.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-dab-radio",
    brand: "Milwaukee",
    name: "M18 DAB+ Jobsite Radio (Body Only)",
    modelNumber: "M18 JSRDAB+-0",
    category: "radio",
    description: "Rugged DAB+ and FM jobsite radio with Bluetooth streaming. 10 preset stations. Charges M12 and M18 batteries. IP54 rated.",
    retailers: [
      {
        name: "Amazon UK",
        price: 149.99,
        originalPrice: 179.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01BKFJ4NM?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 139.99,
        originalPrice: 169.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 154.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 151.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
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
    slug: "milwaukee-m12-m18-bluetooth-speaker",
    brand: "Milwaukee",
    name: "M12/M18 Bluetooth Jobsite Speaker (Body Only)",
    modelNumber: "M12-18 JSSP-0",
    category: "radio",
    description: "Rugged Bluetooth speaker compatible with both M12 and M18 batteries. 40W output with passive bass radiator. IP54 water and dust resistant.",
    retailers: [
      {
        name: "Amazon UK",
        price: 89.99,
        originalPrice: 109.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B06WGT8BWT?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 84.99,
        originalPrice: 99.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
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
      {
        name: "FFX Tools",
        price: 91.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 94.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-transfer-pump",
    brand: "Milwaukee",
    name: "M18 Transfer Pump (Body Only)",
    modelNumber: "M18 BTP-0",
    category: "specialist",
    description: "Cordless transfer pump for water, diesel and other non-corrosive fluids. Self-priming up to 3m. Flow rate up to 32L/min.",
    retailers: [
      {
        name: "Amazon UK",
        price: 109.99,
        originalPrice: 134.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0854JJH6G?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 104.99,
        originalPrice: 124.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 114.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 111.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
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
    ],
  },
  {
    slug: "milwaukee-m18-fuel-pipe-threader",
    brand: "Milwaukee",
    name: "M18 FUEL Pipe Threader (Body Only)",
    modelNumber: "M18 FPT114-0",
    category: "specialist",
    description: "Cordless pipe threader for 1/2\" to 1-1/4\" pipe. Forged aluminium die head. Self-opening die heads for clean thread completion.",
    retailers: [
      {
        name: "Amazon UK",
        price: 1299.99,
        originalPrice: 1499.99,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0BNQH8GDG?tag=toolcheckeruk-21",
      },
      {
        name: "ITS",
        price: 1259.99,
        originalPrice: 1449.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 1279.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Screwfix",
        price: 1349.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 1349.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },

  // ============================================================
  // DEWALT 18V XR RANGE
  // ============================================================
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
        url: "https://www.amazon.co.uk/dp/B099624362?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B01D4J5JMC?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B00VXN7TUW?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B006XBSXAE?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B074V6QSNH?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B00HER8E5A?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B06XYTJJLX?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B07JQ6S5SB?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B00V166X9O?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B01AI0X2OW?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B00KAFRDKK?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B0120YMP4M?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B099NSX8MN?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B01LQUIGL2?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B00WW83F4Q?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B00S6OMGY0?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B096S524M2?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B01H5TAXFU?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B00M215F6E?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B00GIIBAE8?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B0848LHJKV?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B07MNH7XKG?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B00H7ET42M?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B07NXZBJKG?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B0822295DF?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B093ZSKXZM?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B088P38QN4?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B01MZ12T44?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B086B7XW3C?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B018YP97DI?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B008RN09MG?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B07HL1D62M?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B0BB2Q3JK8?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B0869PFZ7T?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B07LGT326C?tag=toolcheckeruk-21",
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
        url: "https://www.amazon.co.uk/dp/B07TMPQCV6?tag=toolcheckeruk-21",
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
