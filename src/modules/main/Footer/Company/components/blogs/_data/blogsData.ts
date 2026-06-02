export interface BlogCard {
  id: number;
  image: string;
  title: string;
  description: string;
}

const optimizeImage = (url: string) => {
  const base = url.split("?")[0];
  return `${base}?auto=format&fit=crop&q=75&w=400&h=250`;
};

export const blogStats = [
  { label: "Articles", value: "24+" },
  { label: "Topics Covered", value: "2" },
  { label: "Readers", value: "10K+" },
] as const;

export const buyerBlogs: BlogCard[] = [
  {
    id: 1,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    ),
    title: "How to Write a Perfect RFQ",
    description:
      "Learn the key elements of a strong Request for Quotation that attracts top suppliers quickly.",
  },
  {
    id: 2,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    ),
    title: "Top 5 Mistakes Buyers Make",
    description:
      "Avoid common pitfalls when sourcing apparel internationally to save time and money.",
  },
  {
    id: 3,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    ),
    title: "Understanding MOQ in Apparel",
    description:
      "Minimum Order Quantity explained — how to negotiate and plan your inventory effectively.",
  },
  {
    id: 4,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
    ),
    title: "Comparing Supplier Quotations",
    description:
      "A step-by-step guide to evaluating multiple quotes beyond just the price tag.",
  },
  {
    id: 5,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e",
    ),
    title: "Fabric Selection for Bulk Orders",
    description:
      "Choosing the right fabric type ensures quality consistency across large production runs.",
  },
  {
    id: 6,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1542060748-10c28b62716f",
    ),
    title: "How AI Matches You with Suppliers",
    description:
      "Discover how our AI engine analyzes your RFQ and finds the best-fit suppliers instantly.",
  },
  {
    id: 7,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    ),
    title: "Budget Planning for Apparel Sourcing",
    description:
      "Tips on setting realistic budgets that include hidden costs like shipping and duties.",
  },
  {
    id: 8,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    ),
    title: "Tracking Your Order in Real-Time",
    description:
      "Use our production tracking system to monitor every stage from cutting to packaging.",
  },
  {
    id: 9,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1467043237213-65f2da53396f",
    ),
    title: "Building Long-Term Supplier Relations",
    description:
      "How consistent communication and fair dealings build trust with your supply partners.",
  },
  {
    id: 10,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1560243563-062bfc001d68",
    ),
    title: "Sustainable Apparel Sourcing",
    description:
      "Eco-friendly sourcing practices that help your brand appeal to conscious consumers.",
  },
  {
    id: 11,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc",
    ),
    title: "Deadlines & Lead Times Explained",
    description:
      "Understanding supplier lead times ensures you never miss a product launch date.",
  },
  {
    id: 12,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
    ),
    title: "Quality Control Best Practices",
    description:
      "Implement QC checkpoints during production to ensure every item meets your standards.",
  },
];

export const supplierBlogs: BlogCard[] = [
  {
    id: 13,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    ),
    title: "How to Get Verified on the Platform",
    description:
      "A complete checklist of documents and steps to become a verified trusted supplier.",
  },
  {
    id: 14,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1",
    ),
    title: "Writing Winning Quotations",
    description:
      "Structure your quotes professionally to stand out and win more buyer contracts.",
  },
  {
    id: 15,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492",
    ),
    title: "Managing Multiple Orders Efficiently",
    description:
      "Production planning strategies for suppliers handling several concurrent buyer orders.",
  },
  {
    id: 16,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13",
    ),
    title: "Using Production Stages Effectively",
    description:
      "Keep buyers informed by updating cutting, stitching, QC, and packaging stages on time.",
  },
  {
    id: 17,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62",
    ),
    title: "Pricing Strategy for B2B Apparel",
    description:
      "How to price your quotations competitively without compromising on profit margins.",
  },
  {
    id: 18,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    ),
    title: "Building a Strong Supplier Profile",
    description:
      "Your profile is your storefront — tips on showcasing capabilities to attract buyers.",
  },
  {
    id: 19,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1553413077-190dd305871c",
    ),
    title: "Handling Buyer Disputes Professionally",
    description:
      "Best practices for resolving conflicts calmly and maintaining your reputation.",
  },
  {
    id: 20,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1551434678-e076c223a692",
    ),
    title: "Expanding Your Capacity with Data",
    description:
      "Use platform analytics to understand demand trends and plan production capacity.",
  },
  {
    id: 21,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    ),
    title: "Shipment Updates That Buyers Love",
    description:
      "Timely and accurate shipment tracking updates build buyer confidence and loyalty.",
  },
  {
    id: 22,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    ),
    title: "Responding to RFQs Faster",
    description:
      "Speed matters — suppliers who respond within 24 hours win 60% more contracts.",
  },
  {
    id: 23,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    ),
    title: "Technology Tools for Modern Suppliers",
    description:
      "Digital tools that help suppliers automate workflows and communicate more effectively.",
  },
  {
    id: 24,
    image: optimizeImage(
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
    ),
    title: "Growing Revenue Through the Platform",
    description:
      "How top-rated suppliers consistently grow their monthly revenue using platform features.",
  },
];
