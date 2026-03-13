export interface Retailer {
  name: string;
  price?: number;
  originalPrice?: number;
  checkPrice?: boolean;
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
  "batteries": "Batteries & Chargers",
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
    name: "M18 FUEL ONE-KEY SAWZALL Reciprocating Saw (Body Only)",
    modelNumber: "M18 ONEFSZ-0X",
    category: "saws",
    description: "Brushless SAWZALL with ONE-KEY. 32mm stroke length. POWERSTATE motor delivers fast cuts. Tool-free blade change.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
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
    slug: "milwaukee-m18-fuel-sawzall-reciprocating-saw",
    brand: "Milwaukee",
    name: "M18 FUEL SAWZALL Reciprocating Saw (Body Only)",
    modelNumber: "M18 FSZ-0",
    category: "saws",
    description: "Full-size M18 FUEL SAWZALL with POWERSTATE brushless motor. 32mm stroke length. Patented gear protecting clutch.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08XD9MSKL?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
    modelNumber: "M18 FIW2F12-0",
    category: "impact-drivers",
    description: "High torque 1/2\" impact wrench with friction ring delivering up to 1,356Nm nut-busting torque. POWERSTATE brushless motor for heavy-duty automotive work.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
    modelNumber: "M18 ONEFHIWF12-0",
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
    modelNumber: "M18 BLTRC-0X",
    category: "specialist",
    description: "Cordless threaded rod cutter for M6-M12 threaded rod. Clean cuts with no burrs or thread damage. Cuts in under 3 seconds.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
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
        checkPrice: true,
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
    modelNumber: "M18 VC2-0",
    category: "specialist",
    description: "Versatile wet and dry vacuum cleaner with HEPA filter. 7.5L capacity. Integrated hose, crevice and nozzle storage. Runs on M18 batteries.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
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
    modelNumber: "M18 FCHSC-0",
    category: "outdoor",
    description: "Powerful 16\" cordless chainsaw with POWERSTATE brushless motor. Auto chain oiler and tool-free chain tensioning. Low kickback bar.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
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
    modelNumber: "M18 FHET60-0",
    category: "outdoor",
    description: "450mm dual-action blade hedge trimmer with 20mm cutting capacity. Anti-vibration design. Hardened steel blades for clean cuts.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
    modelNumber: "M18 AL-0",
    category: "lighting",
    description: "Compact LED lantern with 360° illumination. TRUEVIEW technology for natural colour rendering. Integrated hanging hook and magnetic base.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
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
    modelNumber: "M18 JSRDAB-0",
    category: "radio",
    description: "Rugged DAB+ and FM jobsite radio with Bluetooth streaming. 10 preset stations. Charges M12 and M18 batteries. IP54 rated.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
    modelNumber: "M18 FPT2-0",
    category: "specialist",
    description: "Cordless pipe threader for 1/2\" to 1-1/4\" pipe. Forged aluminium die head. Self-opening die heads for clean thread completion.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
    slug: "dewalt-18v-xr-circular-saw",
    brand: "DeWalt",
    name: "18V XR Brushless 165mm Circular Saw (Body Only)",
    modelNumber: "DCS391N",
    category: "saws",
    description: "Lightweight brushless circular saw with 55mm cutting depth at 90°. 3,700 RPM no-load speed. Includes 165mm 24T carbide blade.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
    slug: "dewalt-18v-xr-second-fix-nailer",
    brand: "DeWalt",
    name: "18V XR Brushless 16 Gauge Second Fix Nailer (Body Only)",
    modelNumber: "DCN660N",
    category: "nail-guns",
    description: "Brushless second fix nailer for 32-63mm 16 gauge finish nails. Tool-free depth adjustment. Sequential fire mode.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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
        checkPrice: true,
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


  // ============================================================
  // DEWALT 18V XR RANGE - ADDITIONAL TOOLS
  // ============================================================
  {
    slug: "dewalt-18v-xr-drill-driver",
    brand: "DeWalt",
    name: "18V XR Brushless Drill Driver (Body Only)",
    modelNumber: "DCD791N",
    category: "drills",
    description: "Compact brushless drill driver with 2-speed gearbox and 15 torque settings. Lightweight at 1.5kg.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01C85KPKE?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 104.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 97.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 96.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-combi-drill-high-torque",
    brand: "DeWalt",
    name: "18V XR Brushless High Torque Combi Drill (Body Only)",
    modelNumber: "DCD805N",
    category: "drills",
    description: "High torque brushless combi drill with 95Nm and 3-speed transmission. Anti-kickback protection.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0BYW6Y4N5?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 169.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
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
      {
        name: "ITS",
        price: 160.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-brushless-impact-driver-dcf787",
    brand: "DeWalt",
    name: "18V XR Brushless Impact Driver (Body Only)",
    modelNumber: "DCF787N",
    category: "impact-drivers",
    description: "Compact brushless impact driver with 205Nm torque. 3 LED work lights and belt clip included.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08S3RVHT8?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 109.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 99.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-3speed-impact-driver",
    brand: "DeWalt",
    name: "18V XR Brushless 3-Speed Impact Driver (Body Only)",
    modelNumber: "DCF850N",
    category: "impact-drivers",
    description: "3-speed brushless impact driver with 245Nm torque. Features precision drive mode to prevent overdriving screws.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0B1DKZCF5?tag=toolcheckeruk-21",
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
        price: 139.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 129.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-impact-wrench-dcf891",
    brand: "DeWalt",
    name: "18V XR Brushless 1/2\" Impact Wrench (Body Only)",
    modelNumber: "DCF891N",
    category: "impact-drivers",
    description: "Brushless 1/2\" impact wrench with 339Nm max torque. Compact design for access in tight spaces.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0B7GKFKDJ?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 179.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 169.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-compact-impact-wrench-dcf922",
    brand: "DeWalt",
    name: "18V XR Brushless Compact 1/2\" Impact Wrench (Body Only)",
    modelNumber: "DCF922N",
    category: "impact-drivers",
    description: "Compact brushless 1/2\" impact wrench with 542Nm max torque. Short anvil design for tight access.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09YHSF6KP?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 194.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 199.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 191.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 189.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-sds-plus-compact",
    brand: "DeWalt",
    name: "18V XR Brushless SDS Plus Compact Hammer Drill (Body Only)",
    modelNumber: "DCH133N",
    category: "sds-drills",
    description: "Compact SDS Plus rotary hammer with 1.9J impact energy. Brushless motor for maximum runtime.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07C7N2JKH?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 159.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 149.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-54v-flexvolt-sds-max",
    brand: "DeWalt",
    name: "54V XR FlexVolt SDS Max Hammer Drill (Body Only)",
    modelNumber: "DCH481NT",
    category: "sds-drills",
    description: "Powerful FlexVolt SDS Max rotary hammer with 8.6J impact energy. 5-mode operation for heavy demolition and drilling.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B06WGLKKFS?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 419.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 404.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 399.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-circular-saw-165mm-brushless",
    brand: "DeWalt",
    name: "18V XR Brushless 165mm Circular Saw (Body Only)",
    modelNumber: "DCS565N",
    category: "saws",
    description: "165mm brushless circular saw with 57mm cutting depth at 90°. Left-blade design for improved cut line visibility.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B099X7HBQF?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 189.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 179.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 176.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-54v-flexvolt-circular-saw-190mm",
    brand: "DeWalt",
    name: "54V XR FlexVolt 190mm Circular Saw (Body Only)",
    modelNumber: "DCS578N",
    category: "saws",
    description: "FlexVolt 190mm circular saw with 67mm cutting depth at 90°. Equivalent power to a corded saw.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08LNGR2R5?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 294.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 282.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 279.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-reciprocating-saw-dcs382",
    brand: "DeWalt",
    name: "18V XR Brushless Reciprocating Saw (Body Only)",
    modelNumber: "DCS382N",
    category: "saws",
    description: "Brushless reciprocating saw with 32mm stroke length. Variable speed trigger and keyless blade change.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B097ZYM4FP?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 189.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 179.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-mitre-saw-184mm",
    brand: "DeWalt",
    name: "18V XR 184mm Single Bevel Mitre Saw (Body Only)",
    modelNumber: "DCS365N",
    category: "saws",
    description: "184mm cordless mitre saw with single bevel up to 48°. Compact and portable for site use.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01AI1N8T0?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 314.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 302.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 299.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-54v-flexvolt-mitre-saw-305mm",
    brand: "DeWalt",
    name: "54V XR FlexVolt 305mm Double Bevel Mitre Saw (Body Only)",
    modelNumber: "DHS780N",
    category: "saws",
    description: "Large format FlexVolt 305mm double bevel sliding mitre saw. XPS LED cut line indicator and GUARD FLEXVOLT safety system.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0C15R7VCF?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 614.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 604.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 599.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-guide-rail-1500mm",
    brand: "DeWalt",
    name: "1.5m Guide Rail for Plunge Saws",
    modelNumber: "DWS5022",
    category: "saws",
    description: "1.5m aluminium guide rail compatible with DeWalt plunge saws. Anti-slip strips for precise cuts.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0013LLDQK?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 69.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 72.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 67.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 65.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-angle-grinder-dcg409",
    brand: "DeWalt",
    name: "18V XR Brushless 125mm Angle Grinder with Slide Switch (Body Only)",
    modelNumber: "DCG409N",
    category: "grinders",
    description: "125mm brushless angle grinder with slide switch for improved safety. Kickback brake and e-clutch protection.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B096M9CQPN?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 159.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 149.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-54v-flexvolt-angle-grinder-125mm",
    brand: "DeWalt",
    name: "54V XR FlexVolt 125mm Angle Grinder (Body Only)",
    modelNumber: "DCG418N",
    category: "grinders",
    description: "FlexVolt 125mm angle grinder with 9000rpm no-load speed. Electronic brake and kickback detection.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08LLCYK9G?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 214.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 203.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 199.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-54v-flexvolt-angle-grinder-230mm",
    brand: "DeWalt",
    name: "54V XR FlexVolt 230mm Large Angle Grinder (Body Only)",
    modelNumber: "DCG460N",
    category: "grinders",
    description: "Large 230mm FlexVolt angle grinder for heavy-duty grinding tasks. Electronic brake and anti-kickback protection.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0CFXM3RXY?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 364.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 352.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 349.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-router-trimmer",
    brand: "DeWalt",
    name: "18V XR Brushless 1/4\" Router Trimmer (Body Only)",
    modelNumber: "DCW604N",
    category: "routers",
    description: "Compact 1/4\" router trimmer with brushless motor. Depth adjustment ring and LED work light.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07R6TR7X6?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 159.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 149.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-router-dcw600",
    brand: "DeWalt",
    name: "18V XR Brushless Router (Body Only)",
    modelNumber: "DCW600N",
    category: "routers",
    description: "Full-size brushless router with plunge base. 1/4\" and 1/2\" collet included. Variable speed 16,000-24,000rpm.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B083ZM59H3?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 229.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 219.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-random-orbital-sander",
    brand: "DeWalt",
    name: "18V XR Brushless 125mm Random Orbital Sander (Body Only)",
    modelNumber: "DCW210N",
    category: "sanders",
    description: "125mm brushless random orbital sander with dust-sealed power switch and 8-hole pad.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07QX92YBQ?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 119.99,
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
        price: 110.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-belt-sander",
    brand: "DeWalt",
    name: "18V XR Brushless Belt Sander (Body Only)",
    modelNumber: "DCW220N",
    category: "sanders",
    description: "Brushless belt sander using 65 x 394mm belts. Variable speed and automatic belt tracking.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0BZ88XZ4G?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 159.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 149.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-brad-nailer-18ga",
    brand: "DeWalt",
    name: "18V XR Brushless 18 Gauge Brad Nailer (Body Only)",
    modelNumber: "DCN681N",
    category: "nail-guns",
    description: "Brushless 18ga brad nailer for 15-64mm brads. Stall release lever for jam clearing without tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B075V5WX24?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 269.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 274.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 262.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 259.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-concrete-nailer",
    brand: "DeWalt",
    name: "18V XR Cordless Concrete Nailer (Body Only)",
    modelNumber: "DCN890N",
    category: "nail-guns",
    description: "Cordless concrete nailer for fixing into concrete, block and steel. Fires 40-57mm concrete nails.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0767N1ZG3?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 459.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 452.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 449.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-led-torch",
    brand: "DeWalt",
    name: "18V LED Torch/Flashlight",
    modelNumber: "DCL040",
    category: "lighting",
    description: "18V LED torch with 500 lumen output and pivoting head. Hang hook for hands-free use.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0051HEBAW?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 37.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 39.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 35.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 35.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-dab-radio",
    brand: "DeWalt",
    name: "18V/12V DAB Job Site Radio",
    modelNumber: "DCR020",
    category: "radio",
    description: "DAB/FM job site radio compatible with 18V and 12V batteries. Bluetooth connectivity and USB charging port.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00KCU756A?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 89.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 79.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-wet-dry-vacuum",
    brand: "DeWalt",
    name: "18V/14.4V XR Wet and Dry Vacuum (Body Only)",
    modelNumber: "DCV584L",
    category: "specialist",
    description: "Compact wet and dry vacuum with 14L tank. Compatible with 18V and 14.4V batteries.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00NMIAIPE?tag=toolcheckeruk-21",
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
        price: 99.99,
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
      {
        name: "ITS",
        price: 89.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-green-laser-level",
    brand: "DeWalt",
    name: "18V XR 3 x 360° Green Laser Level",
    modelNumber: "DCE089D1G",
    category: "specialist",
    description: "Self-levelling green laser with 3 x 360° planes. Visible up to 30m indoors. IP54 rated.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B016QUEA2G?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 314.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 302.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 299.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-collated-screwgun",
    brand: "DeWalt",
    name: "18V XR Brushless Collated Screwgun (Body Only)",
    modelNumber: "DCF620N",
    category: "specialist",
    description: "Brushless collated screwgun for drywall and decking. Depth-setting nose piece and auto-feed magazine.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00W80ZIOI?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 189.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 179.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-xr-die-grinder",
    brand: "DeWalt",
    name: "18V XR Brushless Die Grinder (Body Only)",
    modelNumber: "DCG200N",
    category: "grinders",
    description: "Brushless die grinder with 1/4\" collet. Variable speed 5,000-25,000rpm for precision grinding.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/s?k=DCG200N+body+only&tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 129.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 119.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },

  // ============================================================
  // MAKITA 18V LXT / 40V XGT RANGE - ADDITIONAL TOOLS
  // ============================================================
  {
    slug: "makita-18v-lxt-drill-driver-ddf486",
    brand: "Makita",
    name: "18V LXT Brushless Drill Driver (Body Only)",
    modelNumber: "DDF486Z",
    category: "drills",
    description: "Compact brushless drill driver with 80Nm torque and 2-speed gearbox. 13mm auto-locking chuck.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0999HKJW2?tag=toolcheckeruk-21",
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
        price: 124.99,
        inStock: true,
        delivery: "£5.00",
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
        price: 115.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-combi-drill-dhp487",
    brand: "Makita",
    name: "18V LXT Brushless Combi Drill (Body Only)",
    modelNumber: "DHP487Z",
    category: "drills",
    description: "Next-generation LXT brushless combi drill with 91Nm torque. Ultra-compact body at only 187mm length.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B099NRHWZ5?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 149.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 139.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-drill-driver-ddf487",
    brand: "Makita",
    name: "18V LXT Brushless Drill Driver Gen2 (Body Only)",
    modelNumber: "DDF487Z",
    category: "drills",
    description: "Second generation LXT brushless drill driver. 80Nm torque in an ultra-compact 187mm body length.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B099NSD35X?tag=toolcheckeruk-21",
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
        price: 139.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 129.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-40v-xgt-combi-drill",
    brand: "Makita",
    name: "40V XGT Brushless Combi Drill (Body Only)",
    modelNumber: "HP001GZ",
    category: "drills",
    description: "40V XGT brushless combi drill with 130Nm torque. Next-generation platform for maximum performance.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B082HV5XG9?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 229.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 219.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-impact-driver-dtd172",
    brand: "Makita",
    name: "18V LXT Brushless Impact Driver (Body Only)",
    modelNumber: "DTD172Z",
    category: "impact-drivers",
    description: "Compact brushless impact driver with 180Nm torque. 4-speed plus auto mode for precise driving.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09X1ZRJY7?tag=toolcheckeruk-21",
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
        price: 139.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 129.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-impact-wrench-dtw300",
    brand: "Makita",
    name: "18V LXT Brushless 1/2\" Impact Wrench (Body Only)",
    modelNumber: "DTW300Z",
    category: "impact-drivers",
    description: "Brushless 1/2\" impact wrench with 330Nm max torque. Compact design for automotive and construction use.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08DHY6CVD?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 159.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 149.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-impact-wrench-34-dtw700",
    brand: "Makita",
    name: "18V LXT Brushless 3/4\" Impact Wrench (Body Only)",
    modelNumber: "DTW700Z",
    category: "impact-drivers",
    description: "High-capacity 3/4\" brushless impact wrench with 700Nm max torque. For heavy-duty fastening tasks.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08HN48666?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 239.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 229.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-impact-wrench-dtw1002",
    brand: "Makita",
    name: "18V LXT Brushless High Torque 1/2\" Impact Wrench (Body Only)",
    modelNumber: "DTW1002Z",
    category: "impact-drivers",
    description: "High torque 1/2\" brushless impact wrench with 1000Nm max torque. 4-speed mode with auto-stop.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01AVXACYO?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 264.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 269.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 261.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 259.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-40v-xgt-impact-wrench",
    brand: "Makita",
    name: "40V XGT Brushless 1/2\" Impact Wrench (Body Only)",
    modelNumber: "TW001GZ",
    category: "impact-drivers",
    description: "40V XGT brushless 1/2\" impact wrench with 1050Nm max torque for the most demanding fastening applications.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08HN55SNF?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 304.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 292.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 289.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-sds-plus-dhr171",
    brand: "Makita",
    name: "18V LXT Brushless SDS Plus Hammer Drill (Body Only)",
    modelNumber: "DHR171Z",
    category: "sds-drills",
    description: "Compact SDS Plus rotary hammer with 1.5J impact energy. 3 operating modes and anti-vibration technology.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0759BCVK9?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 159.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 149.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-sds-plus-dhr243",
    brand: "Makita",
    name: "18V LXT Brushless SDS Plus Hammer Drill 24mm (Body Only)",
    modelNumber: "DHR243Z",
    category: "sds-drills",
    description: "24mm SDS Plus hammer drill with 2.4J impact energy. AVT anti-vibration system for reduced operator fatigue.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00HOD3AJY?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 204.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 201.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 199.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-twin-18v-lxt-sds-plus-dhr283",
    brand: "Makita",
    name: "2x18V LXT Brushless SDS Plus Hammer Drill 28mm (Body Only)",
    modelNumber: "DHR283Z",
    category: "sds-drills",
    description: "Twin 18V LXT 28mm SDS Plus hammer drill with 3.2J impact energy. Equivalent to a 36V machine.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07KWM5GR1?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 294.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 282.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 279.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-twin-18v-lxt-sds-max-dhr400",
    brand: "Makita",
    name: "2x18V LXT Brushless SDS Max Hammer Drill (Body Only)",
    modelNumber: "DHR400Z",
    category: "sds-drills",
    description: "Heavy-duty twin 18V SDS Max rotary hammer with 8.7J impact energy. For the most demanding masonry work.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07C9FVJXZ?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 514.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 519.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 504.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 499.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-40v-xgt-sds-plus",
    brand: "Makita",
    name: "40V XGT Brushless SDS Plus Hammer Drill (Body Only)",
    modelNumber: "HR003GZ",
    category: "sds-drills",
    description: "40V XGT brushless SDS Plus hammer drill with 3.2J impact energy. Next-generation platform for maximum power.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B089NZ9M9V?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 304.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 292.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 289.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-circular-saw-165mm-dss611",
    brand: "Makita",
    name: "18V LXT 165mm Circular Saw (Body Only)",
    modelNumber: "DSS611Z",
    category: "saws",
    description: "165mm LXT circular saw with 57mm max cutting depth at 90°. Lightweight at 2.9kg for reduced operator fatigue.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00ID86YVK?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 109.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 99.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-twin-18v-lxt-mitre-saw-305mm",
    brand: "Makita",
    name: "2x18V LXT Brushless 305mm Sliding Compound Mitre Saw (Body Only)",
    modelNumber: "DLS211Z",
    category: "saws",
    description: "Large format twin 18V LXT 305mm sliding compound mitre saw. Laser cut line guide for precision cutting.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07Y59KK1W?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 714.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 719.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 704.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 699.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-twin-18v-lxt-mitre-saw-260mm",
    brand: "Makita",
    name: "2x18V LXT Brushless 260mm Sliding Mitre Saw (Body Only)",
    modelNumber: "DLS110Z",
    category: "saws",
    description: "Twin 18V LXT 260mm sliding mitre saw with brushless motor. Compact and portable for site work.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B077WHB1N1?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 564.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 569.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 554.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 549.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-twin-18v-lxt-plunge-saw",
    brand: "Makita",
    name: "2x18V LXT Brushless 165mm Plunge Saw (Body Only)",
    modelNumber: "DSP600Z",
    category: "saws",
    description: "Twin 18V LXT brushless 165mm plunge saw compatible with guide rails. 56mm max cutting depth.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0776X1P58?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 414.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 404.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 399.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-angle-grinder-dga513",
    brand: "Makita",
    name: "18V LXT Brushless 125mm Angle Grinder (Body Only)",
    modelNumber: "DGA513Z",
    category: "grinders",
    description: "125mm brushless LXT angle grinder with 8500rpm no-load speed. Electronic current limiter and brake.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B079GWTMC2?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 149.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 139.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-angle-grinder-paddle-dga519",
    brand: "Makita",
    name: "18V LXT Brushless 125mm Paddle Switch Angle Grinder (Body Only)",
    modelNumber: "DGA519Z",
    category: "grinders",
    description: "125mm brushless angle grinder with paddle switch for improved operator safety. Automatic speed control.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B087SCGJQ6?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 159.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 149.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-twin-18v-lxt-angle-grinder-180mm",
    brand: "Makita",
    name: "2x18V LXT Brushless 180mm Angle Grinder (Body Only)",
    modelNumber: "DGA700Z",
    category: "grinders",
    description: "Twin 18V LXT 180mm brushless angle grinder for heavy grinding tasks. Soft start and auto-stop safety features.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B076BVQ8Z1?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 314.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 302.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 299.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-40v-xgt-angle-grinder-125mm",
    brand: "Makita",
    name: "40V XGT Brushless 125mm Angle Grinder (Body Only)",
    modelNumber: "GA023GZ",
    category: "grinders",
    description: "40V XGT brushless 125mm angle grinder with Active Feedback Sensing Technology (AFT). Automatic speed control.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08DL25YPM?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 234.99,
        inStock: true,
        delivery: "£5.00",
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
        price: 219.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-40v-xgt-router",
    brand: "Makita",
    name: "40V XGT Brushless Router (Body Only)",
    modelNumber: "RT001GZ",
    category: "routers",
    description: "40V XGT brushless router with 1/4\" and 1/2\" collets. Variable speed 8,000-24,000rpm with soft start.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0BCPTHW53?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 294.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 282.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 279.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-brushless-orbital-sander-dbo382",
    brand: "Makita",
    name: "18V LXT Brushless 125mm Random Orbital Sander (Body Only)",
    modelNumber: "DBO382Z",
    category: "sanders",
    description: "Brushless 125mm random orbital sander with variable speed and dust bag. Only 1.3kg without battery.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0C2VDFHTJ?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 109.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 99.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-pin-nailer-dpt353",
    brand: "Makita",
    name: "18V LXT 23 Gauge Pin Nailer (Body Only)",
    modelNumber: "DPT353Z",
    category: "nail-guns",
    description: "23 gauge cordless pin nailer for 15-35mm headless pins. Adjustable depth of drive and sequential fire.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0722YW99S?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 194.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 199.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 191.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 189.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-led-torch",
    brand: "Makita",
    name: "18V LXT LED Torch/Flashlight",
    modelNumber: "DML812",
    category: "lighting",
    description: "18V LXT LED torch with 200 lumen output. Pivoting head and magnetic base for hands-free use.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B085VTRG7L?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 31.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 34.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 29.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 29.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-dab-radio",
    brand: "Makita",
    name: "18V LXT DAB+ Job Site Radio",
    modelNumber: "DMR115",
    category: "radio",
    description: "DAB+/FM job site radio with Bluetooth. Compatible with 18V LXT batteries. USB charging and IP54 rated.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07ZJ3TS3C?tag=toolcheckeruk-21",
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
        price: 99.99,
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
      {
        name: "ITS",
        price: 89.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-brushless-vacuum-dvc750",
    brand: "Makita",
    name: "18V LXT Brushless L-Class Vacuum Cleaner (Body Only)",
    modelNumber: "DVC750Z",
    category: "specialist",
    description: "L-class rated 18V brushless vacuum with 0.5L dust container. Suitable for use with dust-producing tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07MK3JRZH?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 159.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 149.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-lxt-inflator-dmp180",
    brand: "Makita",
    name: "18V LXT Digital Inflator (Body Only)",
    modelNumber: "DMP180Z",
    category: "specialist",
    description: "18V LXT digital tyre inflator with auto-stop at preset pressure. Inflates car, bike and ball tyres.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B085M2C6CP?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 89.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 79.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-40v-xgt-green-laser-level",
    brand: "Makita",
    name: "40V XGT Self-Levelling Cross Line Green Laser (Body Only)",
    modelNumber: "SK700GDZ",
    category: "specialist",
    description: "40V XGT self-levelling green cross-line laser with 4 x 360° planes. Visible up to 40m with detector.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B098FJ3G4B?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 364.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 352.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 349.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },

  // ============================================================
  // BOSCH PROFESSIONAL 18V RANGE - ADDITIONAL TOOLS
  // ============================================================
  {
    slug: "bosch-18v-combi-drill-90c",
    brand: "Bosch Professional",
    name: "18V Brushless Combi Drill Connected (Body Only)",
    modelNumber: "GSB 18V-90 C",
    category: "drills",
    description: "Connected brushless combi drill with 90Nm torque. Bluetooth connectivity for tool management via app.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0BC92JY57?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 149.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 139.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-drill-driver-55",
    brand: "Bosch Professional",
    name: "18V Brushless Drill Driver (Body Only)",
    modelNumber: "GSR 18V-55",
    category: "drills",
    description: "Compact brushless drill driver with 55Nm torque. 13mm keyless chuck and 2-speed gearbox.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08221SD6W?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 89.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 79.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-drill-driver-90c",
    brand: "Bosch Professional",
    name: "18V Brushless Drill Driver Connected (Body Only)",
    modelNumber: "GSR 18V-90 C",
    category: "drills",
    description: "Connected brushless drill driver with 90Nm torque. Bluetooth connectivity for professional tool tracking.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0BC99HFWS?tag=toolcheckeruk-21",
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
        price: 139.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 129.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-impact-driver-210c",
    brand: "Bosch Professional",
    name: "18V Brushless Impact Driver Connected (Body Only)",
    modelNumber: "GDR 18V-210 C",
    category: "impact-drivers",
    description: "Brushless impact driver with 210Nm torque and Bluetooth connectivity. Electronic motor protection.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09Q3FYQ64?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 119.99,
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
        price: 110.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-impact-wrench-34",
    brand: "Bosch Professional",
    name: "18V BITURBO Brushless 3/4\" Impact Wrench (Body Only)",
    modelNumber: "GDS 18V-1050 H",
    category: "impact-drivers",
    description: "BITURBO brushless 3/4\" impact wrench with 1050Nm max torque. For the heaviest fastening applications.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08QZ8WDL4?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 314.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 302.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 299.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-impact-wrench-450hc",
    brand: "Bosch Professional",
    name: "18V Brushless 1/2\" Impact Wrench (Body Only)",
    modelNumber: "GDS 18V-450 HC",
    category: "impact-drivers",
    description: "Brushless 1/2\" impact wrench with 450Nm max torque. High-performance for automotive and structural work.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0BGBQSHPK?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 214.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 203.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 199.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-sds-plus-34cf",
    brand: "Bosch Professional",
    name: "18V Brushless SDS Plus Hammer Drill with Forward Control (Body Only)",
    modelNumber: "GBH 18V-34 CF",
    category: "sds-drills",
    description: "SDS Plus hammer drill with 3.4J impact energy and Vibration Control. Forward control for overhead work.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B088P2R5T4?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 294.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 282.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 279.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-sds-max-45c",
    brand: "Bosch Professional",
    name: "18V BITURBO Brushless SDS Max Hammer Drill (Body Only)",
    modelNumber: "GBH 18V-45 C",
    category: "sds-drills",
    description: "BITURBO SDS Max hammer drill with 8.5J impact energy. Equivalent power to corded 45V machine.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08L7LMWB4?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 459.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 452.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 449.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-circular-saw-165mm",
    brand: "Bosch Professional",
    name: "18V 165mm Circular Saw (Body Only)",
    modelNumber: "GKS 18V-57",
    category: "saws",
    description: "165mm cordless circular saw with 57mm cutting depth at 90°. Parallel guide and dust port included.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01KWJMTIO?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 159.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 149.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-jigsaw-155bc",
    brand: "Bosch Professional",
    name: "18V Brushless Jigsaw (Body Only)",
    modelNumber: "GST 18V-155 BC",
    category: "saws",
    description: "Brushless jigsaw with 155mm cutting depth in wood. 4-stage pendulum action and tool-free blade change.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0BC9889JH?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 159.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 149.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-reciprocating-saw-32",
    brand: "Bosch Professional",
    name: "18V Brushless Reciprocating Saw (Body Only)",
    modelNumber: "GSA 18V-32",
    category: "saws",
    description: "Brushless reciprocating saw with 32mm stroke length. Tool-free blade change and variable speed trigger.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07RCXC6PH?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 149.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 139.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-multi-tool-34",
    brand: "Bosch Professional",
    name: "18V Brushless Multi-Tool (Body Only)",
    modelNumber: "GOP 18V-34",
    category: "multi-tools",
    description: "Brushless oscillating multi-tool with 3.4° oscillation angle. StarlockMax accessory system for quick changes.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0CPQ5KNQ3?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 169.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
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
      {
        name: "ITS",
        price: 159.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-mitre-saw-216",
    brand: "Bosch Professional",
    name: "18V BITURBO Brushless 216mm Mitre Saw (Body Only)",
    modelNumber: "GCM 18V-216",
    category: "saws",
    description: "BITURBO 216mm single bevel mitre saw with brushless motor. Equivalent to corded performance.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07WTH5WW2?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 514.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 519.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 504.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 499.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-plunge-saw",
    brand: "Bosch Professional",
    name: "18V Brushless 165mm Plunge Saw with Guide Rail (Body Only)",
    modelNumber: "GKT 18V-52 GC",
    category: "saws",
    description: "Brushless 165mm plunge saw compatible with Bosch guide rails. 55mm max cutting depth with splinter guard.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B087S1K2XB?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 364.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 352.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 349.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-angle-grinder-15c",
    brand: "Bosch Professional",
    name: "18V BITURBO 125mm Angle Grinder Connected (Body Only)",
    modelNumber: "GWS 18V-15 C",
    category: "grinders",
    description: "BITURBO 125mm angle grinder with Bluetooth connectivity. Electronic kickback protection and soft start.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07RN9FNDV?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 214.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 203.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 199.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-angle-grinder-180mm",
    brand: "Bosch Professional",
    name: "18V BITURBO 180mm Large Angle Grinder (Body Only)",
    modelNumber: "GWS 18V-180 PC",
    category: "grinders",
    description: "Large 180mm BITURBO brushless angle grinder for heavy-duty tasks. Electronic protection system.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0BFBN1HQQ?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 314.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 302.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 299.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-router",
    brand: "Bosch Professional",
    name: "18V Brushless Palm Router (Body Only)",
    modelNumber: "GKF 18V-8",
    category: "routers",
    description: "Compact brushless palm router with 1/4\" collet. Micro-adjustable depth setting for precision work.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0DG5L8KXS?tag=toolcheckeruk-21",
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
        price: 139.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 129.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-orbital-sander",
    brand: "Bosch Professional",
    name: "18V Brushless Sheet Orbital Sander (Body Only)",
    modelNumber: "GSS 18V-13",
    category: "sanders",
    description: "Brushless 1/3 sheet orbital sander with micro-filter dust collector. Variable speed 6,000-14,000rpm.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0BS9Q2Z1R?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 109.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 99.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-random-orbital-sander",
    brand: "Bosch Professional",
    name: "18V Brushless 125mm Random Orbital Sander (Body Only)",
    modelNumber: "GEX 18V-125",
    category: "sanders",
    description: "125mm brushless random orbital sander with 8-hole abrasive pad. Eccentric motion for swirl-free results.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B093H12667?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 149.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 139.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-work-light",
    brand: "Bosch Professional",
    name: "18V LED Work Light Connected",
    modelNumber: "GLI 18V-4000 C",
    category: "lighting",
    description: "18V LED work light with 4000 lumen output and Bluetooth connectivity. 180° adjustable head.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08222SJJB?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 89.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 79.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-dab-radio",
    brand: "Bosch Professional",
    name: "18V DAB+ Professional Radio",
    modelNumber: "GML 18V-120",
    category: "radio",
    description: "DAB+/FM job site radio with 120W peak power. Bluetooth streaming and twin USB charging ports.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0913KY24F?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 109.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 99.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-vacuum",
    brand: "Bosch Professional",
    name: "18V Professional Wet/Dry Vacuum (Body Only)",
    modelNumber: "GAS 18V-12 MC",
    category: "specialist",
    description: "Compact 18V wet/dry vacuum with 4L container. Multi-colour filter and tool-triggered start.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0CPQ5JYH8?tag=toolcheckeruk-21",
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
        price: 99.99,
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
      {
        name: "ITS",
        price: 89.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },

  // ============================================================
  // HIKOKI 36V MULTIVOLT RANGE - ADDITIONAL TOOLS
  // ============================================================
  {
    slug: "hikoki-36v-drill-driver-ds3620da",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless Drill Driver (Body Only)",
    modelNumber: "DS3620DA",
    category: "drills",
    description: "36V MultiVolt brushless drill driver with 80Nm torque. Accepts both 36V MultiVolt and 18V batteries.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07HKXSMMD?tag=toolcheckeruk-21",
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
        price: 139.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 129.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-impact-wrench-12",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless 1/2\" Impact Wrench (Body Only)",
    modelNumber: "WR36DC",
    category: "impact-drivers",
    description: "36V MultiVolt brushless 1/2\" impact wrench with 490Nm max torque. 4-speed control with LED indicator.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07HNS44XB?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 204.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 201.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 199.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-impact-wrench-34",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless 3/4\" Impact Wrench (Body Only)",
    modelNumber: "WR36DD",
    category: "impact-drivers",
    description: "36V MultiVolt brushless 3/4\" impact wrench with 1100Nm max torque for heavy-duty applications.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07HNXRJ4K?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 269.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 274.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 262.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 259.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-sds-plus-dh3628da",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless SDS Plus Hammer Drill (Body Only)",
    modelNumber: "DH3628DA",
    category: "sds-drills",
    description: "36V MultiVolt SDS Plus rotary hammer with 3.5J impact energy and 3 operating modes.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07NQLBTF3?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 264.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 252.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 249.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-circular-saw-165mm",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless 165mm Circular Saw (Body Only)",
    modelNumber: "C3606DA",
    category: "saws",
    description: "36V MultiVolt 165mm brushless circular saw with 57mm cutting depth at 90°. Left blade design.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07HL3P3H3?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 189.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 179.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-jigsaw",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless Jigsaw (Body Only)",
    modelNumber: "CJ36DA",
    category: "saws",
    description: "36V MultiVolt brushless jigsaw with 135mm max cutting depth in wood. 4-stage pendulum action.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08WRC7Q92?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 179.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 169.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-reciprocating-saw",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless Reciprocating Saw (Body Only)",
    modelNumber: "CR36DA",
    category: "saws",
    description: "36V MultiVolt brushless reciprocating saw with 32mm stroke length. Tool-free blade clamp.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B086K1QLZ9?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 169.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 159.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-18v-multi-tool",
    brand: "HiKOKI",
    name: "18V Brushless Multi-Tool (Body Only)",
    modelNumber: "CV18DA",
    category: "multi-tools",
    description: "18V brushless oscillating multi-tool with variable speed. Universal accessory adapter for all major brands.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07JHB21XJ?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 129.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 119.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-mitre-saw-255mm",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless 255mm Mitre Saw (Body Only)",
    modelNumber: "C3610DRA",
    category: "saws",
    description: "36V MultiVolt 255mm sliding compound mitre saw. Dual bevel and 0-52° mitre angle range.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07XSB221D?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 564.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 569.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 554.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 549.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-table-saw",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless Table Saw (Body Only)",
    modelNumber: "C3607DRA",
    category: "saws",
    description: "36V MultiVolt brushless table saw with 190mm blade. Rip fence and mitre gauge included.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08HSMGSC9?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 714.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 719.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 704.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 699.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-angle-grinder-230mm",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless 230mm Angle Grinder (Body Only)",
    modelNumber: "G3623DA",
    category: "grinders",
    description: "36V MultiVolt 230mm brushless angle grinder for heavy-duty cutting and grinding. Vibration reducing handle.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/s?k=G3623DA+body+only+hikoki&tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 334.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 322.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 319.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-planer",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless 82mm Planer (Body Only)",
    modelNumber: "P3608DA",
    category: "planers",
    description: "36V MultiVolt 82mm brushless planer with 2mm max cutting depth. Rebate depth up to 9mm.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/s?k=P3608DA+body+only+hikoki&tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 234.99,
        inStock: true,
        delivery: "£5.00",
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
        price: 219.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-router",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless Router (Body Only)",
    modelNumber: "M3612DA",
    category: "routers",
    description: "36V MultiVolt brushless router with 1/4\" and 1/2\" collets. Variable speed 8,000-24,000rpm.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09MZGK58W?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 269.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 274.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 262.50,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 259.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-blower",
    brand: "HiKOKI",
    name: "36V MultiVolt Brushless Blower (Body Only)",
    modelNumber: "RB36DA",
    category: "outdoor",
    description: "36V MultiVolt brushless leaf blower with 3 speed settings. Max airflow of 17m3/min.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07HNRQRSC?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 109.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 99.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-18v-dab-radio",
    brand: "HiKOKI",
    name: "18V DAB/DAB+ Bluetooth Radio",
    modelNumber: "R18DA",
    category: "radio",
    description: "18V DAB+ job site radio with Bluetooth streaming. Compatible with 18V and 36V MultiVolt batteries.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07HNRNR1G?tag=toolcheckeruk-21",
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
        price: 99.99,
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
      {
        name: "ITS",
        price: 89.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },

  // ============================================================
  // BATTERIES & CHARGERS - ALL BRANDS
  // ============================================================
  // ============================================================
  // MILWAUKEE BATTERIES & CHARGERS
  // ============================================================
  {
    slug: "milwaukee-m12-b2-battery",
    brand: "Milwaukee",
    name: "M12 2.0Ah Compact Battery",
    modelNumber: "M12 B2",
    category: "batteries",
    description: "M12 2.0Ah REDLITHIUM-ION compact battery. Lightweight for use with all M12 tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00CFNJMFO?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 37.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 35.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 35.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-b4-battery",
    brand: "Milwaukee",
    name: "M12 4.0Ah Battery",
    modelNumber: "M12 B4",
    category: "batteries",
    description: "M12 4.0Ah REDLITHIUM-ION battery for extended runtime. Compatible with all M12 tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00CFNJ93E?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 51.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 52.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 49.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 49.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-b6-battery",
    brand: "Milwaukee",
    name: "M12 6.0Ah Battery",
    modelNumber: "M12 B6",
    category: "batteries",
    description: "M12 6.0Ah REDLITHIUM-ION high capacity battery for maximum runtime with M12 tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B095NT3RPD?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 67.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 69.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 65.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 65.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-b2-battery",
    brand: "Milwaukee",
    name: "M18 2.0Ah Compact Battery",
    modelNumber: "M18 B2",
    category: "batteries",
    description: "M18 2.0Ah REDLITHIUM-ION compact battery. Lightweight for applications where weight matters.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00CFNIYWQ?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 37.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 35.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 35.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-b5-battery",
    brand: "Milwaukee",
    name: "M18 5.0Ah Battery",
    modelNumber: "M18 B5",
    category: "batteries",
    description: "M18 5.0Ah REDLITHIUM-ION battery with built-in charge level indicator. Works with all M18 tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00TPJMZ2I?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 57.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 56.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 55.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-hb5-battery",
    brand: "Milwaukee",
    name: "M18 REDLITHIUM-ION HIGH OUTPUT 5.0Ah Battery",
    modelNumber: "M18 HB5",
    category: "batteries",
    description: "M18 HIGH OUTPUT 5.0Ah battery with 50% more power and runs cooler than standard. For demanding applications.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/s?k=Milwaukee+M18+HB5+battery&tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 71.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 69.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 69.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-b6-battery",
    brand: "Milwaukee",
    name: "M18 6.0Ah Battery",
    modelNumber: "M18 B6",
    category: "batteries",
    description: "M18 6.0Ah REDLITHIUM-ION battery for extended runtime. Compatible with all M18 and M18 FUEL tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01BKFV84A?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 67.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 69.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 65.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 65.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-hb8-battery",
    brand: "Milwaukee",
    name: "M18 REDLITHIUM-ION HIGH OUTPUT 8.0Ah Battery",
    modelNumber: "M18 HB8",
    category: "batteries",
    description: "M18 HIGH OUTPUT 8.0Ah battery for maximum runtime and power. Ideal for FUEL tools in demanding conditions.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07RX2DV2Z?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 91.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 89.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 89.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-hb12-battery",
    brand: "Milwaukee",
    name: "M18 REDLITHIUM-ION HIGH OUTPUT 12.0Ah Battery",
    modelNumber: "M18 HB12",
    category: "batteries",
    description: "M18 HIGH OUTPUT 12.0Ah battery - the highest capacity M18 battery. For all-day operation with FUEL tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07GBBMGRN?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 149.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 139.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-c-charger",
    brand: "Milwaukee",
    name: "M12 Compact Charger",
    modelNumber: "M12 C",
    category: "batteries",
    description: "M12 compact charger for all M12 batteries. LED charge indicator and overload protection.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B075FCQJCY?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 26.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 27.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 25.49,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 25.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-fc-charger",
    brand: "Milwaukee",
    name: "M18 Fast Charger",
    modelNumber: "M18 FC",
    category: "batteries",
    description: "M18 fast charger charges a 5.0Ah battery in 60 minutes. Charges all M18 batteries.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B019DW4NS0?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 46.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 48.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 45.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 45.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-dfc-charger",
    brand: "Milwaukee",
    name: "M18 Dual Bay Fast Charger",
    modelNumber: "M18 DFC",
    category: "batteries",
    description: "M18 dual bay fast charger with two independent charging ports. Charges two batteries simultaneously.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08H1W99BT?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 81.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 79.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 79.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m12-m18-sc-charger",
    brand: "Milwaukee",
    name: "M12-M18 Super Charger (Rapid Multi-Voltage)",
    modelNumber: "M12-18 SC",
    category: "batteries",
    description: "Super charger compatible with both M12 and M18 batteries. Fastest charge times available for Milwaukee batteries.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B093BGYX85?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 109.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 99.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "milwaukee-m18-starter-pack",
    brand: "Milwaukee",
    name: "M18 Starter Pack (2x5.0Ah Batteries + Fast Charger)",
    modelNumber: "M18 BPP2F-502B",
    category: "batteries",
    description: "M18 starter pack including two 5.0Ah batteries and a fast charger. Excellent value for expanding your M18 system.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07H92LBSG?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 159.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 149.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  // ============================================================
  // DEWALT BATTERIES & CHARGERS
  // ============================================================
  {
    slug: "dewalt-18v-2ah-battery",
    brand: "DeWalt",
    name: "18V XR 2.0Ah Lithium-Ion Battery",
    modelNumber: "DCB183",
    category: "batteries",
    description: "18V XR 2.0Ah compact battery with fuel gauge indicator. Compatible with all DeWalt 18V XR tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00EQCFYWM?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 37.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 35.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 35.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-4ah-battery",
    brand: "DeWalt",
    name: "18V XR 4.0Ah Lithium-Ion Battery",
    modelNumber: "DCB182",
    category: "batteries",
    description: "18V XR 4.0Ah battery with 3-LED fuel gauge. Lightweight at 0.59kg for reduced fatigue.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B008LAFV32?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 51.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 52.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 49.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 49.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-5ah-battery",
    brand: "DeWalt",
    name: "18V XR 5.0Ah Lithium-Ion Battery",
    modelNumber: "DCB184",
    category: "batteries",
    description: "18V XR 5.0Ah battery with 3-LED fuel gauge indicator. The most popular DeWalt 18V battery.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00XEUVS8G?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 62.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 60.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 59.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-5ah-powerstack-battery",
    brand: "DeWalt",
    name: "18V XR 5.0Ah POWERSTACK Lithium-Ion Battery",
    modelNumber: "DCBP518",
    category: "batteries",
    description: "18V XR POWERSTACK 5.0Ah battery using pouch cell technology. 2x more power delivery and faster charging.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0BL6ZQWG7?tag=toolcheckeruk-21",
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
        price: 99.99,
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
      {
        name: "ITS",
        price: 89.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-flexvolt-6ah-battery",
    brand: "DeWalt",
    name: "54V/18V XR FlexVolt 6.0Ah Battery",
    modelNumber: "DCB546",
    category: "batteries",
    description: "FlexVolt 6.0Ah battery that automatically changes voltage when switching between tools. Works as 54V or 18V.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07H3V4QFR?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 129.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 119.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-flexvolt-9ah-battery",
    brand: "DeWalt",
    name: "54V/18V XR FlexVolt 9.0Ah Battery",
    modelNumber: "DCB547",
    category: "batteries",
    description: "FlexVolt 9.0Ah high capacity battery for maximum runtime with FlexVolt tools. Also works as 18V.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B06WWLT1Z7?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 179.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 169.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-flexvolt-12ah-battery",
    brand: "DeWalt",
    name: "54V/18V XR FlexVolt 12.0Ah Battery",
    modelNumber: "DCB548",
    category: "batteries",
    description: "FlexVolt 12.0Ah maximum capacity battery for all-day operation with FlexVolt and 18V tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07F23X428?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 229.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 219.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-single-charger",
    brand: "DeWalt",
    name: "18V XR Single Port Battery Charger",
    modelNumber: "DCB115",
    category: "batteries",
    description: "18V XR single port charger compatible with all DeWalt 18V batteries. LED charge indicator.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01AIOMN8O?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 37.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 35.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 35.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-dual-charger",
    brand: "DeWalt",
    name: "18V XR Dual Port Battery Charger",
    modelNumber: "DCB132",
    category: "batteries",
    description: "18V XR dual port charger for charging two batteries simultaneously. Compatible with all DeWalt 18V batteries.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01I08Z6YI?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 67.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 69.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 65.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 65.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "dewalt-18v-fast-charger",
    brand: "DeWalt",
    name: "18V XR Fast Battery Charger",
    modelNumber: "DCB116",
    category: "batteries",
    description: "18V XR fast charger with active cooling fan. Charges a 5.0Ah battery in under 60 minutes.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0D56BKJ29?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 46.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 48.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 45.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 45.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  // ============================================================
  // MAKITA BATTERIES & CHARGERS
  // ============================================================
  {
    slug: "makita-18v-3ah-battery",
    brand: "Makita",
    name: "18V LXT 3.0Ah Lithium-Ion Battery",
    modelNumber: "BL1830B",
    category: "batteries",
    description: "18V LXT 3.0Ah battery with battery protection circuit and charge level indicator. Compatible with all LXT tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01N0R8UMA?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 41.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 42.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 39.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 39.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-4ah-battery",
    brand: "Makita",
    name: "18V LXT 4.0Ah Lithium-Ion Battery",
    modelNumber: "BL1840B",
    category: "batteries",
    description: "18V LXT 4.0Ah battery with built-in charge level indicator. Star Protection Computer Controls.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00GSMBTJA?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 51.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 52.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 49.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 49.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-5ah-battery",
    brand: "Makita",
    name: "18V LXT 5.0Ah Lithium-Ion Battery",
    modelNumber: "BL1850B",
    category: "batteries",
    description: "18V LXT 5.0Ah battery with charge level indicator and Star Protection Computer Controls for tool protection.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B01JP78596?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 62.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 60.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 59.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-6ah-battery",
    brand: "Makita",
    name: "18V LXT 6.0Ah Lithium-Ion Battery",
    modelNumber: "BL1860B",
    category: "batteries",
    description: "18V LXT 6.0Ah high capacity battery for maximum runtime. Built-in charge level indicator.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B0042CVBLO?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 77.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 75.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 75.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-40v-25ah-battery",
    brand: "Makita",
    name: "40V XGT 2.5Ah Lithium-Ion Battery",
    modelNumber: "BL4025",
    category: "batteries",
    description: "40V XGT 2.5Ah compact battery for the XGT platform. Lightweight option for lighter applications.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08CKSDY2L?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 81.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 79.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 79.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-40v-4ah-battery",
    brand: "Makita",
    name: "40V XGT 4.0Ah Lithium-Ion Battery",
    modelNumber: "BL4040",
    category: "batteries",
    description: "40V XGT 4.0Ah battery for the XGT platform tools. Built-in charge level indicator.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08CKPXQSD?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 129.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 119.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-40v-5ah-battery",
    brand: "Makita",
    name: "40V XGT 5.0Ah Lithium-Ion Battery",
    modelNumber: "BL4050F",
    category: "batteries",
    description: "40V XGT 5.0Ah high capacity battery with fast charging support. For maximum runtime on XGT tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B09N7LHMRX?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 159.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 149.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-single-charger",
    brand: "Makita",
    name: "18V LXT Rapid Battery Charger",
    modelNumber: "DC18RC",
    category: "batteries",
    description: "18V LXT rapid charger with cooling fan. Charges a 3.0Ah battery in 22 minutes. Star Protection.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B008KXATOG?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 37.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 35.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 35.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-18v-dual-charger",
    brand: "Makita",
    name: "18V LXT Dual Port Rapid Charger",
    modelNumber: "DC18RD",
    category: "batteries",
    description: "18V LXT dual port rapid charger. Charges two batteries simultaneously with cooling fans.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00R82KU4O?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 67.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 69.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 65.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 65.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "makita-40v-charger",
    brand: "Makita",
    name: "40V XGT Rapid Battery Charger",
    modelNumber: "DC40RA",
    category: "batteries",
    description: "40V XGT rapid charger with cooling fan. Charges a 2.5Ah battery in 28 minutes.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B08CKVYBZN?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 57.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 55.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 55.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  // ============================================================
  // BOSCH PROFESSIONAL BATTERIES & CHARGERS
  // ============================================================
  {
    slug: "bosch-18v-2ah-battery",
    brand: "Bosch Professional",
    name: "18V 2.0Ah ProCORE Battery",
    modelNumber: "GBA 18V 2.0Ah",
    category: "batteries",
    description: "18V ProCORE 2.0Ah compact battery for all Bosch Professional 18V tools. Charge level indicator.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00FAMADXW?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 31.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 29.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 29.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-4ah-battery",
    brand: "Bosch Professional",
    name: "18V 4.0Ah ProCORE Battery",
    modelNumber: "GBA 18V 4.0Ah",
    category: "batteries",
    description: "18V ProCORE 4.0Ah battery for all Bosch Professional 18V tools. Electronic cell protection.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07FYZFFWW?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 49.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 45.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 45.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-5ah-battery",
    brand: "Bosch Professional",
    name: "18V 5.0Ah ProCORE Battery",
    modelNumber: "GBA 18V 5.0Ah",
    category: "batteries",
    description: "18V ProCORE 5.0Ah battery compatible with all Bosch Professional 18V tools. Electronic cell protection.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00IKI352E?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 62.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 60.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 59.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-8ah-battery",
    brand: "Bosch Professional",
    name: "18V 8.0Ah ProCORE 18V Battery",
    modelNumber: "GBA 18V 8.0Ah",
    category: "batteries",
    description: "18V ProCORE 8.0Ah high capacity battery for maximum runtime. Optimised for BITURBO tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07FYY5WWY?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 109.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 99.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-12ah-battery",
    brand: "Bosch Professional",
    name: "18V 12.0Ah ProCORE 18V Battery",
    modelNumber: "GBA 18V 12.0Ah",
    category: "batteries",
    description: "18V ProCORE 12.0Ah maximum capacity battery. For all-day operation with professional tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07FYXMF4W?tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 159.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 149.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-fast-charger",
    brand: "Bosch Professional",
    name: "18V 4A Fast Charger",
    modelNumber: "GAL 18V-40",
    category: "batteries",
    description: "18V fast charger with 4A charging current. Charges a 2.0Ah battery in 30 minutes.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07M6QQCWM?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 51.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "Toolstation",
        price: 52.99,
        inStock: true,
        delivery: "£5.00",
        clickCollect: true,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "FFX Tools",
        price: 49.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 49.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "bosch-18v-dual-charger",
    brand: "Bosch Professional",
    name: "18V 8A Connected Dual Bay Charger",
    modelNumber: "GAL 18V-160 C",
    category: "batteries",
    description: "18V dual bay connected charger with 8A per bay. Bluetooth connectivity and simultaneous charging.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07FWCLRWB?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 91.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 89.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 89.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  // ============================================================
  // HIKOKI BATTERIES & CHARGERS
  // ============================================================
  {
    slug: "hikoki-36v-25ah-battery",
    brand: "HiKOKI",
    name: "36V MultiVolt 2.5Ah Battery",
    modelNumber: "BSL3625",
    category: "batteries",
    description: "36V MultiVolt 2.5Ah battery compatible with all 36V MultiVolt and 18V HiKOKI tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B00UNN73UO?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 61.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 59.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 59.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-4ah-battery",
    brand: "HiKOKI",
    name: "36V MultiVolt 4.0Ah Battery",
    modelNumber: "BSL3640",
    category: "batteries",
    description: "36V MultiVolt 4.0Ah battery for extended runtime with all MultiVolt tools. Cell voltage monitoring.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/s?k=BSL3640+hikoki+battery&tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 91.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 89.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 89.49,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-8ah-battery",
    brand: "HiKOKI",
    name: "36V MultiVolt 8.0Ah Battery",
    modelNumber: "BSL3680",
    category: "batteries",
    description: "36V MultiVolt 8.0Ah high capacity battery for all-day operation with MultiVolt tools.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/s?k=BSL3680+hikoki+battery&tag=toolcheckeruk-21",
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
        name: "Toolstation",
        price: 159.99,
        inStock: true,
        delivery: "£5.00",
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
        name: "ITS",
        price: 149.99,
        inStock: true,
        delivery: "£4.99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
    ],
  },
  {
    slug: "hikoki-36v-rapid-charger",
    brand: "HiKOKI",
    name: "36V MultiVolt Rapid Charger",
    modelNumber: "UC18YSL3",
    category: "batteries",
    description: "36V MultiVolt rapid charger compatible with all HiKOKI 18V and 36V MultiVolt batteries.",
    retailers: [
      {
        name: "Amazon UK",
        checkPrice: true,
        inStock: true,
        delivery: "Free (Prime)",
        clickCollect: false,
        url: "https://www.amazon.co.uk/dp/B07HRGX318?tag=toolcheckeruk-21",
      },
      {
        name: "Screwfix",
        price: 57.99,
        inStock: true,
        delivery: "Free over £50",
        clickCollect: true,
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
      {
        name: "FFX Tools",
        price: 55.99,
        inStock: true,
        delivery: "Free over £99",
        clickCollect: false,
        url: "#", // TODO: Add Awin deep link
      },
      {
        name: "ITS",
        price: 55.49,
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
