import { Bell, Settings, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="bg-gradient-hero text-white shadow-floating">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">K</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">KMRL DocSync</h1>
                <p className="text-xs text-white/80">Multi-Channel Document Ingestion</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
              <Input 
                placeholder="Search documents..." 
                className="pl-10 w-64 bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
            </div>
            
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-warning text-xs">
                3
              </Badge>
            </Button>
            
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;