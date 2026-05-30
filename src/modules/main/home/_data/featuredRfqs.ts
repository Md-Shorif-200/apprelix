export type FeaturedRfq = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  quantity: string;
  budget: string;
  material: string;
  deadline: string;
  buyerName: string;
  location: string;
  quotesCount: number;
  status: string;
};

export const rfqsData: FeaturedRfq[] = [
  {
    id: 1,
    title: "Men's Premium Cotton T-Shirts",
    description:
      "Looking for a reliable supplier for high-quality 100% cotton t-shirts with custom branding and embroidery options.",
    category: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=75&w=600",
    quantity: "5,000 pcs",
    budget: "$8,000 - $12,000",
    material: "100% Cotton",
    deadline: "Aug 15, 2026",
    buyerName: "Alex Carter",
    location: "New York, USA",
    quotesCount: 12,
    status: "Open",
  },
  {
    id: 2,
    title: "Women's Slim Fit Denim Jeans",
    description:
      "Seeking experienced manufacturers for slim fit denim jeans with stretch fabric. Multiple sizes and washes required.",
    category: "Denim",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=75&w=600",
    quantity: "3,000 pcs",
    budget: "$15,000 - $20,000",
    material: "Stretch Denim",
    deadline: "Sep 01, 2026",
    buyerName: "Sophie Lane",
    location: "London, UK",
    quotesCount: 8,
    status: "Open",
  },
  {
    id: 3,
    title: "Corporate Formal Dress Shirts",
    description:
      "Bulk order for formal office wear dress shirts in white and light blue. Iron-free fabric preferred with logo embroidery.",
    category: "Formal Wear",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=75&w=600",
    quantity: "10,000 pcs",
    budget: "$25,000 - $35,000",
    material: "Poplin / Oxford",
    deadline: "Jul 30, 2026",
    buyerName: "James Rhon",
    location: "Dubai, UAE",
    quotesCount: 15,
    status: "Urgent",
  },
  {
    id: 4,
    title: "Kids Summer Printed Shorts",
    description:
      "Need colorful and comfortable shorts for kids aged 3-12 years. Fun printed designs, elastic waistband, breathable fabric.",
    category: "Kids Wear",
    image:
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&q=75&w=600",
    quantity: "8,000 pcs",
    budget: "$10,000 - $14,000",
    material: "Cotton Blend",
    deadline: "Aug 20, 2026",
    buyerName: "Emily Chen",
    location: "Toronto, Canada",
    quotesCount: 6,
    status: "Open",
  },
  {
    id: 5,
    title: "Athletic Gym Wear Set (Unisex)",
    description:
      "High-performance gym wear set including leggings and crop tops. Moisture-wicking, 4-way stretch fabric with custom branding.",
    category: "Sportswear",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=75&w=600",
    quantity: "4,500 pcs",
    budget: "$18,000 - $22,000",
    material: "Polyester Spandex",
    deadline: "Sep 10, 2026",
    buyerName: "Marco Silva",
    location: "Milan, Italy",
    quotesCount: 10,
    status: "Open",
  },
  {
    id: 6,
    title: "Winter Hoodies with Zip Closure",
    description:
      "Looking for a manufacturer for heavy-weight fleece hoodies with full zip, kangaroo pockets, and custom color options.",
    category: "Winter Wear",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=75&w=600",
    quantity: "6,000 pcs",
    budget: "$20,000 - $28,000",
    material: "Fleece / Terry",
    deadline: "Oct 05, 2026",
    buyerName: "Lena Müller",
    location: "Berlin, Germany",
    quotesCount: 9,
    status: "Open",
  },
  {
    id: 7,
    title: "Sustainable Bamboo Fiber Socks",
    description:
      "Sourcing premium eco-friendly, antibacterial socks made from pure bamboo yarn fibers. Wholesale packaging required.",
    category: "Eco Apparel",
    image:
      "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&q=75&w=600",
    quantity: "15,000 pairs",
    budget: "$12,000 - $16,000",
    material: "Bamboo Blend",
    deadline: "Nov 12, 2026",
    buyerName: "Aris Thorne",
    location: "Sydney, Australia",
    quotesCount: 4,
    status: "Open",
  },
  {
    id: 8,
    title: "Waterproof Outdoor Hiking Jackets",
    description:
      "High-tier tech-wear outer jackets wanted. Sealed seams, waterproof zippers, wind-resistant coatings for seasonal releases.",
    category: "Outerwear",
    image:
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=75&w=600",
    quantity: "2,500 pcs",
    budget: "$30,000 - $45,000",
    material: "Gore-Tex / Nylon",
    deadline: "Oct 25, 2026",
    buyerName: "Hana Vlk",
    location: "Prague, Czechia",
    quotesCount: 22,
    status: "Urgent",
  },
];
