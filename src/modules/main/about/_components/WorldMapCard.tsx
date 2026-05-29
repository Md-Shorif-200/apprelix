// components/GlobalSupplyChain/WorldMapCard.tsx

import React from "react";

// ─── Map Pin Data ──────────────────────────────────────────────────────────────

const mapPins = [
  { country: "USA", top: "30%", left: "15%" },
  { country: "Brazil", top: "62%", left: "28%" },
  { country: "UK", top: "22%", left: "45%" },
  { country: "Germany", top: "24%", left: "49%" },
  { country: "Turkey", top: "30%", left: "55%" },
  { country: "Bangladesh", top: "42%", left: "68%" },
  { country: "India", top: "44%", left: "66%" },
  { country: "China", top: "35%", left: "75%" },
  { country: "Vietnam", top: "46%", left: "76%" },
  { country: "Indonesia", top: "57%", left: "78%" },
  { country: "Australia", top: "68%", left: "82%" },
];

// ─── Types ─────────────────────────────────────────────────────────────────────

type MapPinType = {
  country: string;
  top: string;
  left: string;
};

// ─── Single Pin Component ──────────────────────────────────────────────────────

function MapPin({ country, top, left }: MapPinType) {
  return (
    <div
      className="absolute flex flex-col items-center z-10"
      style={{ top, left, transform: "translate(-50%, -100%)" }}
    >
      {/* Dot */}
      <div className="w-3 h-3 rounded-full bg-teal-500 border-2 border-white shadow-md" />

      {/* Country Label */}
      <span className="mt-1 text-[9px] font-semibold text-teal-700 bg-white border border-teal-200 rounded px-1 shadow-sm whitespace-nowrap">
        {country}
      </span>
    </div>
  );
}

// ─── WorldMapCard Component ────────────────────────────────────────────────────

export default function WorldMapCard() {
  return (
    <div className="relative w-full">
      {/* Card Wrapper */}
      <div className="rounded-3xl border border-teal-100 bg-teal-50 shadow-md overflow-hidden p-4">
        
        {/* Map Label */}
        <p className="text-xs text-teal-600 font-semibold uppercase tracking-widest mb-3 text-center">
          Our Active Supplier Regions
        </p>

        {/* Map Image + Pins Container */}
        <div className="relative w-full aspect-[2/1]">
          
          {/* World Map Background */}
          <div
            className="absolute inset-0 bg-center bg-contain bg-no-repeat opacity-60"
            style={{
              backgroundImage:
                "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
            }}
          />

          {/* Map Pins Overlay */}
          {mapPins.map((pin) => (
            <MapPin
              key={pin.country}
              country={pin.country}
              top={pin.top}
              left={pin.left}
            />
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-3">
          Suppliers actively operating across highlighted regions
        </p>
      </div>
    </div>
  );
}