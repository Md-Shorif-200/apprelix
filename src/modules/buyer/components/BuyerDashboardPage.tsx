import { ShoppingCart, Clock, CheckCircle, Package } from "lucide-react";

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

export default function BuyerDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-800">
          My Dashboard Analytics
        </h2>
        <p className="text-sm text-slate-500 mt-0.5">
          Track your orders and purchases.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          label="Total Orders"
          value="24"
          icon={ShoppingCart}
          sub="All time"
        />
        <StatCard
          label="Pending"
          value="3"
          icon={Clock}
          sub="Awaiting shipment"
        />
        <StatCard
          label="Delivered"
          value="18"
          icon={CheckCircle}
          sub="Completed"
        />
        <StatCard
          label="Items Browsed"
          value="130"
          icon={Package}
          sub="This week"
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
        <h3 className="font-semibold text-slate-700 mb-4">Recent Orders</h3>
        <div className="space-y-1">
          {[
            {
              id: "#ORD-301",
              item: "Laptop Stand",
              status: "Delivered",
              color: "bg-green-100 text-green-700",
            },
            {
              id: "#ORD-302",
              item: "USB Hub",
              status: "Shipped",
              color: "bg-blue-100 text-blue-700",
            },
            {
              id: "#ORD-303",
              item: "Keyboard",
              status: "Processing",
              color: "bg-yellow-100 text-yellow-700",
            },
          ].map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between py-2.5 border-b border-slate-50 last:border-0"
            >
              <div>
                <p className="text-sm font-medium text-slate-700">
                  {order.item}
                </p>
                <p className="text-xs text-slate-400">{order.id}</p>
              </div>
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${order.color}`}
              >
                {order.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
