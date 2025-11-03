import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { StatCard } from "@/components/dashboard/StatCard";
import { TabNavigation } from "@/components/dashboard/TabNavigation";
import { OrdersTable } from "@/components/dashboard/OrdersTable";
import { MobileMenu } from "@/components/dashboard/MobileMenu";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileMenu />
      
      <div className="lg:ml-[220px]">
        <Header />
        
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6 pt-12 lg:pt-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Orders</h1>
              <span className="text-2xl sm:text-3xl">😍</span>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <button className="px-4 sm:px-6 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                Daily
              </button>
              <button className="px-4 sm:px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Monthly
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <StatCard
                title="New Orders"
                value={245}
                impression={20}
                trend="up"
                variant="blue"
              />
              <StatCard
                title="Pending Orders"
                value={123}
                impression={11}
                trend="up"
                variant="purple"
              />
              <StatCard
                title="Delivered Orders"
                value={150}
                impression={18}
                trend="up"
                variant="orange"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <TabNavigation />
            <OrdersTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
