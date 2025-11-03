// src/components/dashboard/Sidebar.tsx
import { SidebarContent } from "./SidebarContent";

export const Sidebar = () => {
  return (
    <aside className="w-[220px] bg-sidebar border-r border-border flex flex-col h-screen fixed left-0 top-0 hidden lg:flex">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
            <span className="text-background font-bold text-sm">U</span>
          </div>
          <span className="font-semibold text-foreground text-lg">untiip</span>
        </div>
      </div>

      <SidebarContent />

      <div className="p-4">
        <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl p-4 text-center">
          <div className="mb-3">
            <img 
              src="https://illustrations.popsy.co/amber/woman-holding-a-card.svg" 
              alt="Upgrade" 
              className="w-24 h-24 mx-auto"
            />
          </div>
          <p className="text-sm font-semibold text-foreground mb-1">Upgrade</p>
          <p className="text-sm font-semibold text-foreground">your plan →</p>
        </div>
      </div>
    </aside>
  );
};