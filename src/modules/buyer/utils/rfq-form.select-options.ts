import { Country } from "country-state-city";

export const popularColorOptions = [
  // Basic Colors
  { label: "Black", value: "#000000" },
  { label: "White", value: "#FFFFFF" },
  { label: "Red", value: "#FF0000" },
  { label: "Lime", value: "#00FF00" },
  { label: "Blue", value: "#0000FF" },
  { label: "Yellow", value: "#FFFF00" },
  { label: "Cyan / Aqua", value: "#00FFFF" },
  { label: "Magenta / Fuchsia", value: "#FF00FF" },
  { label: "Silver", value: "#C0C0C0" },
  { label: "Gray", value: "#808080" },
  { label: "Maroon", value: "#800000" },
  { label: "Olive", value: "#808000" },
  { label: "Green", value: "#008000" },
  { label: "Purple", value: "#800080" },
  { label: "Teal", value: "#008080" },
  { label: "Navy", value: "#000080" },

  // Shades of Red
  { label: "Indian Red", value: "#CD5C5C" },
  { label: "Light Coral", value: "#F08080" },
  { label: "Salmon", value: "#FA8072" },
  { label: "Dark Salmon", value: "#E9967A" },
  { label: "Light Salmon", value: "#FFA07A" },
  { label: "Crimson", value: "#DC143C" },
  { label: "Fire Brick", value: "#B22222" },
  { label: "Dark Red", value: "#8B0000" },

  // Shades of Pink
  { label: "Pink", value: "#FFC0CB" },
  { label: "Light Pink", value: "#FFB6C1" },
  { label: "Hot Pink", value: "#FF69B4" },
  { label: "Deep Pink", value: "#FF1493" },
  { label: "Medium Violet Red", value: "#C71585" },
  { label: "Pale Violet Red", value: "#DB7093" },

  // Shades of Orange
  { label: "Coral", value: "#FF7F50" },
  { label: "Tomato", value: "#FF6347" },
  { label: "Orange Red", value: "#FF4500" },
  { label: "Dark Orange", value: "#FF8C00" },
  { label: "Orange", value: "#FFA500" },

  // Shades of Yellow
  { label: "Gold", value: "#FFD700" },
  { label: "Light Yellow", value: "#FFFFE0" },
  { label: "Lemon Chiffon", value: "#FFFACD" },
  { label: "Papaya Whip", value: "#FFEFD5" },
  { label: "Moccasin", value: "#FFE4B5" },
  { label: "Peach Puff", value: "#FFDAB9" },
  { label: "Pale Goldenrod", value: "#EEE8AA" },
  { label: "Khaki", value: "#F0E68C" },
  { label: "Dark Khaki", value: "#BDB76B" },

  // Shades of Purple/Violet
  { label: "Lavender", value: "#E6E6FA" },
  { label: "Thistle", value: "#D8BFD8" },
  { label: "Plum", value: "#DDA0DD" },
  { label: "Violet", value: "#EE82EE" },
  { label: "Orchid", value: "#DA70D6" },
  { label: "Medium Orchid", value: "#BA55D3" },
  { label: "Medium Purple", value: "#9370DB" },
  { label: "Rebecca Purple", value: "#663399" },
  { label: "Blue Violet", value: "#8A2BE2" },
  { label: "Dark Violet", value: "#9400D3" },
  { label: "Dark Orchid", value: "#9932CC" },
  { label: "Dark Magenta", value: "#8B008B" },
  { label: "Indigo", value: "#4B0082" },
  { label: "Slate Blue", value: "#6A5ACD" },
  { label: "Dark Slate Blue", value: "#483D8B" },

  // Shades of Green
  { label: "Green Yellow", value: "#ADFF2F" },
  { label: "Chartreuse", value: "#7FFF00" },
  { label: "Lawn Green", value: "#7CFC00" },
  { label: "Lime Green", value: "#32CD32" },
  { label: "Pale Green", value: "#98FB98" },
  { label: "Light Green", value: "#90EE90" },
  { label: "Medium Spring Green", value: "#00FA9A" },
  { label: "Spring Green", value: "#00FF7F" },
  { label: "Medium Sea Green", value: "#3CB371" },
  { label: "Sea Green", value: "#2E8B57" },
  { label: "Forest Green", value: "#228B22" },
  { label: "Dark Green", value: "#006400" },
  { label: "Yellow Green", value: "#9ACD32" },
  { label: "Olive Drab", value: "#6B8E23" },
  { label: "Dark Olive Green", value: "#556B2F" },
  { label: "Medium Aquamarine", value: "#66CDAA" },
  { label: "Dark Sea Green", value: "#8FBC8F" },
  { label: "Light Sea Green", value: "#20B2AA" },
  { label: "Dark Cyan", value: "#008B8B" },

  // Shades of Blue
  { label: "Light Cyan", value: "#E0FFFF" },
  { label: "Pale Turquoise", value: "#AFEEEE" },
  { label: "Aquamarine", value: "#7FFFD4" },
  { label: "Turquoise", value: "#40E0D0" },
  { label: "Medium Turquoise", value: "#48D1CC" },
  { label: "Dark Turquoise", value: "#00CED1" },
  { label: "Cadet Blue", value: "#5F9EA0" },
  { label: "Steel Blue", value: "#4682B4" },
  { label: "Light Steel Blue", value: "#B0C4DE" },
  { label: "Powder Blue", value: "#B0E0E6" },
  { label: "Light Blue", value: "#ADD8E6" },
  { label: "Sky Blue", value: "#87CEEB" },
  { label: "Light Sky Blue", value: "#87CEFA" },
  { label: "Deep Sky Blue", value: "#00BFFF" },
  { label: "Dodger Blue", value: "#1E90FF" },
  { label: "Cornflower Blue", value: "#6495ED" },
  { label: "Royal Blue", value: "#4169E1" },
  { label: "Medium Blue", value: "#0000CD" },
  { label: "Dark Blue", value: "#00008B" },
  { label: "Midnight Blue", value: "#191970" },

  // Shades of Brown
  { label: "Cornsilk", value: "#FFF8DC" },
  { label: "Blanched Almond", value: "#FFEBCD" },
  { label: "Bisque", value: "#FFE4C4" },
  { label: "Navajo White", value: "#FFDEAD" },
  { label: "Wheat", value: "#F5DEB3" },
  { label: "Burlywood", value: "#DEB887" },
  { label: "Tan", value: "#D2B48C" },
  { label: "Rosy Brown", value: "#BC8F8F" },
  { label: "Sandy Brown", value: "#F4A460" },
  { label: "Goldenrod", value: "#DAA520" },
  { label: "Dark Goldenrod", value: "#B8860B" },
  { label: "Peru", value: "#CD853F" },
  { label: "Chocolate", value: "#D2691E" },
  { label: "Saddle Brown", value: "#8B4513" },
  { label: "Sienna", value: "#A0522D" },
  { label: "Brown", value: "#A52A2A" },

  // Shades of White / Gray
  { label: "Snow", value: "#FFFAFA" },
  { label: "Honeydew", value: "#F0FFF0" },
  { label: "Mint Cream", value: "#F5FFFA" },
  { label: "Azure", value: "#F0FFFF" },
  { label: "Alice Blue", value: "#F0F8FF" },
  { label: "Ghost White", value: "#F8F8FF" },
  { label: "White Smoke", value: "#F5F5F5" },
  { label: "Seashell", value: "#FFF5EE" },
  { label: "Beige", value: "#F5F5DC" },
  { label: "Old Lace", value: "#FDF5E6" },
  { label: "Floral White", value: "#FFFAF0" },
  { label: "Ivory", value: "#FFFFF0" },
  { label: "Linen", value: "#FAF0E6" },
  { label: "Gainsboro", value: "#DCDCDC" },
  { label: "Light Gray", value: "#D3D3D3" },
  { label: "Dark Gray", value: "#A9A9A9" },
  { label: "Dim Gray", value: "#696969" },
  { label: "Light Slate Gray", value: "#778899" },
  { label: "Slate Gray", value: "#708090" },
  { label: "Dark Slate Gray", value: "#2F4F4F" },
];

export const allClothingSizesOptions = [
  // General Sizes
  { value: "free_size", label: "Free Size / One Size" },
  { value: "xxs", label: "XXS (Extra Extra Small)" },
  { value: "xs", label: "XS (Extra Small)" },
  { value: "s", label: "S (Small)" },
  { value: "m", label: "M (Medium)" },
  { value: "l", label: "L (Large)" },
  { value: "xl", label: "XL (Extra Large)" },
  { value: "xxl", label: "XXL (Extra Extra Large)" },
  { value: "3xl", label: "3XL" },
  { value: "4xl", label: "4XL" },
  { value: "5xl", label: "5XL" },

  // Waist Sizes (in Inches)
  { value: "w_26", label: 'Waist 26"' },
  { value: "w_27", label: 'Waist 27"' },
  { value: "w_28", label: 'Waist 28"' },
  { value: "w_29", label: 'Waist 29"' },
  { value: "w_30", label: 'Waist 30"' },
  { value: "w_31", label: 'Waist 31"' },
  { value: "w_32", label: 'Waist 32"' },
  { value: "w_33", label: 'Waist 33"' },
  { value: "w_34", label: 'Waist 34"' },
  { value: "w_35", label: 'Waist 35"' },
  { value: "w_36", label: 'Waist 36"' },
  { value: "w_38", label: 'Waist 38"' },
  { value: "w_40", label: 'Waist 40"' },
  { value: "w_42", label: 'Waist 42"' },
  { value: "w_44", label: 'Waist 44"' },

  // US Numeric Sizes
  { value: "us_0", label: "US 0" },
  { value: "us_2", label: "US 2" },
  { value: "us_4", label: "US 4" },
  { value: "us_6", label: "US 6" },
  { value: "us_8", label: "US 8" },
  { value: "us_10", label: "US 10" },
  { value: "us_12", label: "US 12" },
  { value: "us_14", label: "US 14" },

  // EU Numeric Sizes
  { value: "eu_34", label: "EU 34" },
  { value: "eu_36", label: "EU 36" },
  { value: "eu_38", label: "EU 38" },
  { value: "eu_40", label: "EU 40" },
  { value: "eu_42", label: "EU 42" },
  { value: "eu_44", label: "EU 44" },
  { value: "eu_46", label: "EU 46" },

  // Kids & Baby Sizes
  { value: "newborn", label: "Newborn (0–3 Months)" },
  { value: "3-6m", label: "3–6 Months" },
  { value: "6-9m", label: "6–9 Months" },
  { value: "9-12m", label: "9–12 Months" },
  { value: "12-18m", label: "12–18 Months" },
  { value: "18-24m", label: "18–24 Months" },
  { value: "2y", label: "2 Years (2T)" },
  { value: "3y", label: "3 Years (3T)" },
  { value: "4y", label: "4 Years (4T)" },
  { value: "5y", label: "5 Years" },
  { value: "6y", label: "6 Years" },
  { value: "7y", label: "7 Years" },
  { value: "8y", label: "8 Years" },
  { value: "10y", label: "10 Years" },
  { value: "12y", label: "12 Years" },
  { value: "14y", label: "14 Years" },
];

export const materialFabricOptions = [
  { label: "100% Cotton", value: "100_cotton" },
  { label: "Organic Cotton", value: "organic_cotton" },
  { label: "Cotton Blend", value: "cotton_blend" },

  { label: "Polyester", value: "polyester" },
  { label: "Polyester Blend", value: "polyester_blend" },

  { label: "Linen", value: "linen" },
  { label: "Silk", value: "silk" },
  { label: "Wool", value: "wool" },
  { label: "Cashmere", value: "cashmere" },

  { label: "Denim", value: "denim" },
  { label: "Corduroy", value: "corduroy" },
  { label: "Canvas", value: "canvas" },
  { label: "Twill", value: "twill" },
  { label: "Flannel", value: "flannel" },
  { label: "Fleece", value: "fleece" },
  { label: "Velvet", value: "velvet" },
  { label: "Suede", value: "suede" },

  { label: "Leather", value: "leather" },
  { label: "Faux Leather", value: "faux_leather" },

  { label: "Rayon", value: "rayon" },
  { label: "Viscose", value: "viscose" },
  { label: "Modal", value: "modal" },
  { label: "Lyocell (TENCEL™)", value: "lyocell" },

  { label: "Nylon", value: "nylon" },
  { label: "Spandex / Elastane", value: "spandex" },
  { label: "Acrylic", value: "acrylic" },

  { label: "Jersey Knit", value: "jersey_knit" },
  { label: "Rib Knit", value: "rib_knit" },
  { label: "French Terry", value: "french_terry" },
  { label: "Interlock Knit", value: "interlock_knit" },

  { label: "Chiffon", value: "chiffon" },
  { label: "Georgette", value: "georgette" },
  { label: "Satin", value: "satin" },
  { label: "Organza", value: "organza" },
  { label: "Lace", value: "lace" },
  { label: "Mesh", value: "mesh" },

  { label: "Bamboo Fabric", value: "bamboo" },
  { label: "Hemp", value: "hemp" },

  { label: "Microfiber", value: "microfiber" },
  { label: "Neoprene", value: "neoprene" },

  { label: "Recycled Polyester", value: "recycled_polyester" },
  { label: "Recycled Cotton", value: "recycled_cotton" },
];

export const INCOTERMS_OPTIONS = [
  { label: "EXW — Ex Works", value: "exw" },
  { label: "FCA — Free Carrier", value: "fca" },
  { label: "FAS — Free Alongside Ship", value: "fas" },
  { label: "FOB — Free on Board", value: "fob" },
  { label: "CFR — Cost and Freight", value: "cfr" },
  { label: "CIF — Cost, Insurance and Freight", value: "cif" },
  { label: "CPT — Carriage Paid To", value: "cpt" },
  { label: "CIP — Carriage and Insurance Paid To", value: "cip" },
  { label: "DAP — Delivered at Place", value: "dap" },
  { label: "DPU — Delivered at Place Unloaded", value: "dpu" },
  { label: "DDP — Delivered Duty Paid", value: "ddp" },
];

// ─── Options ──────────────────────────────────────────────────────────────────
export const GENDER_OPTIONS = [
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "Kids", value: "kids" },
  { label: "Unisex", value: "unisex" },
];

export const PRINTING_OPTIONS = [
  { label: "Screen Printing", value: "screen_printing" },
  { label: "Digital Printing (DTG)", value: "dtg" },
  { label: "Direct-to-Film (DTF)", value: "dtf" },
  { label: "Heat Transfer Printing", value: "heat_transfer" },
  { label: "Sublimation Printing", value: "sublimation" },
  { label: "Embroidery", value: "embroidery" },
  { label: "Puff Printing", value: "puff_printing" },
  { label: "Foil Printing", value: "foil_printing" },
  { label: "Reflective Printing", value: "reflective_printing" },
  { label: "Silicone Print", value: "silicone_print" },
  { label: "High-Density Print", value: "high_density_print" },
  { label: "Rubber Print", value: "rubber_print" },
  { label: "Water-Based Print", value: "water_based_print" },
  { label: "Discharge Printing", value: "discharge_printing" },
  { label: "No Printing / Plain", value: "none" },
];

export const PACKAGING_OPTIONS = [
  { label: "Individual Polybag", value: "individual_polybag" },
  { label: "Polybag with Barcode Sticker", value: "polybag_barcode" },
  { label: "Hang Tag + Polybag", value: "hangtag_polybag" },
  { label: "Printed Polybag", value: "printed_polybag" },
  { label: "Gift Box", value: "gift_box" },
  { label: "Retail Box Packaging", value: "retail_box" },
  { label: "Carton Box", value: "carton_box" },
  { label: "Bulk Packing", value: "bulk_packing" },
  { label: "Vacuum Packaging", value: "vacuum_packaging" },
  { label: "Eco-Friendly Packaging", value: "eco_friendly" },
  { label: "Custom Packaging", value: "custom_packaging" },
];

export const SAMPLE_OPTIONS = [
  { label: "Yes, need sample", value: true },
  { label: "No, not required", value: false },
];

export const COUNTRY_OPTIONS = Country.getAllCountries().map((c) => ({
  label: c.name,
  value: c.isoCode,
}));

export const PAYMENT_OPTIONS = [
  { label: "100% Advance Payment", value: "100_advance" },
  {
    label: "50% Advance + 50% Before Shipment",
    value: "50_50_before_shipment",
  },
  {
    label: "30% Advance + 70% Before Shipment",
    value: "30_70_before_shipment",
  },
  { label: "30% Advance + 70% Against BL Copy", value: "30_70_against_bl" },
  { label: "100% Letter of Credit (L/C) at Sight", value: "lc_at_sight" },
  { label: "Usance Letter of Credit (Usance L/C)", value: "usance_lc" },
  { label: "Documents Against Payment (D/P)", value: "dp" },
  { label: "Documents Against Acceptance (D/A)", value: "da" },
  { label: "Telegraphic Transfer (T/T)", value: "tt" },
  { label: "Net 30 Days", value: "net30" },
  { label: "Net 60 Days", value: "net60" },
];
