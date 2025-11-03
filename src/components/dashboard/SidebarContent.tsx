// src/components/dashboard/SidebarContent.tsx
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  BarChart3, 
  Wallet, 
  HelpCircle, 
  MessageSquare, 
  LogOut 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Package, label: "Orders", path: "/" },
  { icon: Users, label: "Clients", path: "/clients" },
  { icon: BarChart3, label: "Statistics", path: "/stats" },
  { icon: Wallet, label: "Finance", path: "/finance" },
  { icon: HelpCircle, label: "FAQ", path: "/faq" },
  { icon: MessageSquare, label: "Support", path: "/support" },
  { icon: LogOut, label: "Log Out", path: "/logout" },
];

interface SidebarContentProps {
  className?: string;
}

export const SidebarContent = ({ className }: SidebarContentProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={cn("flex-1 p-4", className)}>
      <ul className="space-y-1">
        {menuItems.map((item) => {
          const isActive = currentPath === item.path || (currentPath === "/" && item.path === "/");

          return (
            <li key={item.label}>
              <button
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium group",
                  isActive
                    ? "bg-[#9510d3] text-white shadow-sm"
                    : "text-sidebar-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive && "text-sidebar-active")} />
                <span>{item.label}</span>
                {/* Optional: Add a visual indicator */}
                {isActive && <div className="ml-auto w-1 h-8 bg-sidebar-active rounded-full" />}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};