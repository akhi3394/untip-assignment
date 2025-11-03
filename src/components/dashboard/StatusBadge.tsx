import { CheckCircle2, XCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "delivered" | "cancelled" | "pending";
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const config = {
    delivered: {
      icon: CheckCircle2,
      label: "Delivered",
      className: "text-success",
    },
    cancelled: {
      icon: XCircle,
      label: "Cancelled",
      className: "text-destructive",
    },
    pending: {
      icon: Clock,
      label: "Pending",
      className: "text-warning",
    },
  };

  const { icon: Icon, label, className } = config[status];

  return (
    <div className={cn("flex items-center gap-2 text-sm font-medium", className)}>
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </div>
  );
};
