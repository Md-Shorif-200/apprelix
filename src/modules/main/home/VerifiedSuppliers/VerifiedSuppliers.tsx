// components/home/VerifiedSuppliers.tsx

"use client";

import Container from "@/components/common/Container";
import SupplierSlider from "./SupplierSlider";

export interface Supplier {
  id: string;
  name: string;
  logo: string;
  bannerImage: string;
  category: string[];
  rating: number;
  reviewsCount: number;
  certifications: string[];
  country: string;
  capacity: string;
  experience: string;
}

const TOP_SUPPLIERS: Supplier[] = [
  {
    id: "sup_1",
    name: "Apex Textile Mills",
    logo: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?q=80&w=200&auto=format&fit=crop",
    bannerImage:
      "https://images.unsplash.com/photo-1558441719-ff34b0524a24?q=80&w=800&auto=format&fit=crop",
    category: ["Denim", "Knitwear"],
    rating: 4.9,
    reviewsCount: 124,
    certifications: ["WRAP", "SEDEX", "OEKO-TEX"],
    country: "Bangladesh",
    capacity: "500,000 pcs/mo",
    experience: "18+ Years",
  },
  {
    id: "sup_2",
    name: "Pacific Apparels Ltd",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=200&auto=format&fit=crop",
    bannerImage:
      "https://images.unsplash.com/photo-1542060748-10c28b629f6f?q=80&w=800&auto=format&fit=crop",
    category: ["Woven", "Outerwear"],
    rating: 4.8,
    reviewsCount: 98,
    certifications: ["BSCI", "ISO 9001"],
    country: "Vietnam",
    capacity: "350,000 pcs/mo",
    experience: "12+ Years",
  },
  {
    id: "sup_3",
    name: "Vanguard Fashion",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200&auto=format&fit=crop",
    bannerImage:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
    category: ["Activewear", "Sportswear"],
    rating: 4.7,
    reviewsCount: 86,
    certifications: ["GOTS", "OEKO-TEX"],
    country: "Turkey",
    capacity: "280,000 pcs/mo",
    experience: "10+ Years",
  },
  {
    id: "sup_4",
    name: "Zenith Garments Ltd",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=200&auto=format&fit=crop",
    bannerImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    category: ["Formal Shirts", "Suits"],
    rating: 4.8,
    reviewsCount: 110,
    certifications: ["WRAP", "SEDEX"],
    country: "India",
    capacity: "400,000 pcs/mo",
    experience: "15+ Years",
  },
  {
    id: "sup_5",
    name: "Horizon Knitwear",
    logo: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=200&auto=format&fit=crop",
    bannerImage:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    category: ["Sweaters", "Cardigans"],
    rating: 4.6,
    reviewsCount: 74,
    certifications: ["BSCI", "OEKO-TEX"],
    country: "Cambodia",
    capacity: "200,000 pcs/mo",
    experience: "8+ Years",
  },
  {
    id: "sup_6",
    name: "StitchCraft Apparels",
    logo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=200&auto=format&fit=crop",
    bannerImage:
      "https://images.unsplash.com/photo-1605289355680-75cf41299154?q=80&w=800&auto=format&fit=crop",
    category: ["T-Shirts", "Polo Shirts"],
    rating: 4.9,
    reviewsCount: 142,
    certifications: ["WRAP", "GOTS", "SEDEX"],
    country: "Bangladesh",
    capacity: "650,000 pcs/mo",
    experience: "20+ Years",
  },
  {
    id: "sup_7",
    name: "Matrix Denim Corp",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aac4?q=80&w=200&auto=format&fit=crop",
    bannerImage:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    category: ["Premium Denim", "Jackets"],
    rating: 4.8,
    reviewsCount: 105,
    certifications: ["ISO 14001", "SEDEX"],
    country: "Pakistan",
    capacity: "300,000 pcs/mo",
    experience: "14+ Years",
  },
  {
    id: "sup_8",
    name: "Elite Sportswear Mfg",
    logo: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=200&auto=format&fit=crop",
    bannerImage:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800&auto=format&fit=crop",
    category: ["Athletic Wear", "Leggings"],
    rating: 4.7,
    reviewsCount: 63,
    certifications: ["OEKO-TEX", "WRAP"],
    country: "Indonesia",
    capacity: "250,000 pcs/mo",
    experience: "9+ Years",
  },
];

const VerifiedSuppliers = () => {
  return (
    <section className="py-16 bg-gray-50/50">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Trust & Quality
          </span>

          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            Top Verified Suppliers
          </h2>

          <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-xl mx-auto">
            Partner with globally certified manufacturers ensuring premium
            quality and compliance standards.
          </p>
        </div>

        {/* Slider */}
        <SupplierSlider suppliers={TOP_SUPPLIERS} />
      </Container>
    </section>
  );
};

export default VerifiedSuppliers;
