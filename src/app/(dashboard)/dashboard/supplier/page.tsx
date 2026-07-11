import { Package, ShoppingCart, TrendingUp, AlertCircle } from "lucide-react";

function StatCard({
  label,
  value,
  icon: Icon,
  sub,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
  sub: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-slate-500">{label}</span>
        <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
          <Icon size={18} />
        </div>
      </div>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
      <p className="text-xs text-slate-400 mt-1">{sub}</p>
    </div>
  );
}

export default function SupplierDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Supplier Overview</h2>
        <p className="text-sm text-slate-500 mt-0.5">
          Manage your products and incoming orders.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          label="My Products"
          value="48"
          icon={Package}
          sub="Active listings"
        />
        <StatCard
          label="New Orders"
          value="12"
          icon={ShoppingCart}
          sub="Awaiting fulfilment"
        />
        <StatCard
          label="Monthly Sales"
          value="$8,400"
          icon={TrendingUp}
          sub="This month"
        />
        <StatCard
          label="Low Stock"
          value="5"
          icon={AlertCircle}
          sub="Need restock"
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
        <h3 className="font-semibold text-slate-700 mb-4">
          Product Stock Status
        </h3>
        <div className="space-y-1">
          {[
            {
              name: "Widget Pro",
              stock: 120,
              status: "In Stock",
              color: "bg-green-100 text-green-700",
            },
            {
              name: "Gadget Mini",
              stock: 8,
              status: "Low Stock",
              color: "bg-yellow-100 text-yellow-700",
            },
            {
              name: "Cable Pack",
              stock: 0,
              status: "Out",
              color: "bg-red-100 text-red-600",
            },
          ].map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-between py-2.5 border-b border-slate-50 last:border-0"
            >
              <div>
                <p className="text-sm font-medium text-slate-700">{p.name}</p>
                <p className="text-xs text-slate-400">Qty: {p.stock}</p>
              </div>
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${p.color}`}
              >
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
