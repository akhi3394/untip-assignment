import { cn } from "@/lib/utils";

const tabs = [
  "All Orders",
  "Pending Orders",
  "Delivered Orders",
  "Booked Orders",
  "Cancelled Orders",
];

export const TabNavigation = () => {
  return (
    <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 border-b border-border overflow-x-auto scrollbar-hide">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={cn(
            "pb-4 text-xs sm:text-sm font-medium transition-colors relative whitespace-nowrap",
            index === 0
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {tab}
          {index === 0 && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground rounded-t-full" />
          )}
        </button>
      ))}
    </div>
  );
};
