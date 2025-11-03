import { Menu, Calendar, Package as PackageIcon, DollarSign, Activity } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

interface Order {
  id: string;
  date: string;
  product: string;
  price: number;
  status: "delivered" | "cancelled" | "pending";
}

const orders: Order[] = [
  { id: "#123245", date: "14-12-2020", product: "Decorative box", price: 125, status: "delivered" },
  { id: "#678457", date: "13-12-2020", product: "Plantation box", price: 120, status: "cancelled" },
  { id: "#123245", date: "12-12-2020", product: "Camera film", price: 156, status: "delivered" },
  { id: "#123245", date: "12-12-2020", product: "Camera film", price: 156, status: "delivered" },
  { id: "#87245", date: "10-12-2020", product: "Visual lace", price: 125, status: "delivered" },
  { id: "#273245", date: "11-11-2020", product: "Decorative box", price: 180, status: "pending" },
  { id: "#789245", date: "10-11-2020", product: "Decorative box", price: 190, status: "delivered" },
];

export const OrdersTable = () => {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 text-sm font-semibold text-foreground">
                <div className="flex items-center gap-2">
                  <Menu className="w-4 h-4 text-muted-foreground" />
                  Order ID
                </div>
              </th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  Ordered Date
                </div>
              </th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">
                <div className="flex items-center gap-2">
                  <PackageIcon className="w-4 h-4 text-blue-500" />
                  Product Name
                </div>
              </th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  Product Price
                </div>
              </th>
              <th className="text-left p-4 text-sm font-semibold text-foreground">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-purple-500" />
                  Status
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={`${order.id}-${index}`}
                className="border-b border-border last:border-b-0 hover:bg-secondary/50 transition-colors"
              >
                <td className="p-4 text-sm font-medium text-foreground">{order.id}</td>
                <td className="p-4 text-sm text-muted-foreground">{order.date}</td>
                <td className="p-4 text-sm text-foreground">{order.product}</td>
                <td className="p-4 text-sm font-medium text-foreground">{order.price} USD</td>
                <td className="p-4">
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
