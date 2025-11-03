import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: number;
  impression: number;
  trend: "up" | "down";
  variant: "blue" | "purple" | "orange";
}

export const StatCard = ({ title, value, impression, trend, variant }: StatCardProps) => {
  const bgColors = {
    blue: "bg-stat-blue",
    purple: "bg-stat-purple",
    orange: "bg-stat-orange",
  };
  
  const textColors = {
    blue: "text-stat-blue-text",
    purple: "text-stat-purple-text",
    orange: "text-stat-orange-text",
  };

  return (
    <div className={cn("rounded-xl p-4 sm:p-6", bgColors[variant])}>
      <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3">{title}</h3>
      <div className="flex items-end justify-between flex-wrap gap-2">
        <span className={cn("text-2xl sm:text-3xl lg:text-4xl font-bold", textColors[variant])}>
          {value}
        </span>
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="text-muted-foreground">Impression · {impression}%</span>
          {trend === "up" ? (
            <TrendingUp className="w-4 h-4 text-success" />
          ) : (
            <TrendingDown className="w-4 h-4 text-destructive" />
          )}
        </div>
      </div>
    </div>
  );
};
