import { Bell, Settings, Search, Menu, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="relative bg-gradient-hero text-white shadow-floating overflow-hidden">
      {/* Animated Metro Train */}
      <div className="absolute top-2 left-0 z-10 animate-train-move opacity-70">
        <div className="flex items-center">
          <div className="w-16 h-8 bg-white/90 rounded-r-full flex items-center justify-center shadow-lg">
            <Train className="h-5 w-5 text-kmrl-orange" />
          </div>
          <div className="w-20 h-6 bg-white/80 ml-1 rounded flex items-center justify-center text-xs font-mono text-kmrl-blue">
            KMRL HUB
          </div>
          <div className="w-12 h-6 bg-white/70 ml-1 rounded-r-lg"></div>
        </div>
      </div>
      
      {/* Railway tracks decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-metro-lines opacity-60"></div>
      <div className="absolute bottom-2 left-0 w-full h-0.5 bg-white/30"></div>
      
      <div className="container mx-auto px-6 py-6 relative z-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 lg:hidden glass-hover">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-4">
              {/* Metro Station-Style Logo */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-metro animate-glow">
                  <span className="font-bold text-xl">K</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-kmrl-green rounded-full border-2 border-white animate-float"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-station-sign">KMRL DocSync</h1>
                <p className="text-sm text-white/90 font-medium">Platform 1 • Multi-Channel Document Hub</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Glass morphism search */}
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/80" />
              <Input 
                placeholder="Search documents..." 
                className="pl-10 w-72 glass-card text-white placeholder:text-white/70 border-white/30 focus:border-white/50"
              />
            </div>
            
            {/* Metro-style notification indicator */}
            <Button variant="ghost" size="sm" className="text-white glass-hover relative group">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-kmrl-orange text-xs animate-glow">
                3
              </Badge>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Next Train: 3 new documents
              </div>
            </Button>
            
            <Button variant="ghost" size="sm" className="text-white glass-hover">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;