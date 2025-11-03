// src/components/dashboard/MobileMenu.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SidebarContent } from "./SidebarContent";
import { cn } from "@/lib/utils";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card rounded-lg shadow-lg border border-border"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "lg:hidden fixed inset-y-0 left-0 z-40 w-[220px] bg-sidebar border-r border-border flex flex-col transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">U</span>
            </div>
            <span className="font-semibold text-foreground text-lg">untiip</span>
          </div>
        </div>

        {/* Menu Items */}
        <SidebarContent />

        {/* Upgrade Card */}
        <div className="p-4">
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl p-4 text-center">
            <div className="mb-3">
              <img 
                src="https://api.iconify.design/twemoji:woman-technologist.svg?color=%23f97316&width=80" 
                alt="Upgrade" 
                className="w-20 h-20 mx-auto"
              />
            </div>
            <p className="text-sm font-semibold text-foreground mb-1">Upgrade</p>
            <p className="text-sm font-semibold text-foreground">your plan →</p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};