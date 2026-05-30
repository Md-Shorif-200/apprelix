export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Lee",
    role: "Procurement Lead",
    company: "Urban Stitch",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=75&w=128&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Michael Carter",
    role: "Sourcing Manager",
    company: "Texon Apparel",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=75&w=128&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Brand Owner",
    company: "Veloura",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=75&w=128&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "David Miller",
    role: "Production Director",
    company: "NorthWear",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=75&w=128&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Olivia Brown",
    role: "Fashion Buyer",
    company: "ModeCraft",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=75&w=128&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Daniel Kim",
    role: "Supply Chain Lead",
    company: "NovaWear",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=75&w=128&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Ava Johnson",
    role: "Operations Head",
    company: "Threadline",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=75&w=128&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Ethan Clark",
    role: "Apparel Consultant",
    company: "WearFlow",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=75&w=128&auto=format&fit=crop",
  },
];
