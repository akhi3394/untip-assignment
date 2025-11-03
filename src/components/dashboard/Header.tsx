import { Calendar, Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="bg-card border-b border-border px-4 sm:px-8 py-4 flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Calendar className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium">October 19, 2021</span>
      </div>
      
      <div className="flex-1 max-w-md mx-0 sm:mx-8 order-3 sm:order-2 w-full sm:w-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by date, name or ID..."
            className="pl-10 bg-secondary border-none"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4 order-2 sm:order-3">
        <button className="relative p-2 hover:bg-secondary rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-semibold">
          JD
        </div>
      </div>
    </header>
  );
};
