import Header from "@/components/dashboard/Header";
import ChannelStatusCard from "@/components/dashboard/ChannelStatusCard";
import ProcessingQueue from "@/components/dashboard/ProcessingQueue";
import MetricsOverview from "@/components/dashboard/MetricsOverview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, Plus, Settings, MapPin, Navigation } from "lucide-react";

const mockChannels = [
  {
    id: '1',
    name: 'Operations Email',
    type: 'email' as const,
    status: 'online' as const,
    documentsToday: 45,
    lastSync: '2 min ago',
    isActive: true
  },
  {
    id: '2',
    name: 'Maintenance WhatsApp',
    type: 'whatsapp' as const,
    status: 'processing' as const,
    documentsToday: 23,
    lastSync: '5 min ago',
    isActive: true
  },
  {
    id: '3',
    name: 'Document Library',
    type: 'sharepoint' as const,
    status: 'online' as const,
    documentsToday: 67,
    lastSync: '1 min ago',
    isActive: true
  },
  {
    id: '4',
    name: 'Maximo Exports',
    type: 'maximo' as const,
    status: 'warning' as const,
    documentsToday: 12,
    lastSync: '15 min ago',
    isActive: false
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-background relative overflow-hidden">
      {/* Background metro network pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-0.5 bg-gradient-metro-lines rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-0.5 bg-gradient-metro-lines -rotate-12 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-0.5 bg-gradient-metro-lines rotate-12 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <Header />
      
      <main className="container mx-auto px-6 py-8 relative z-10">
        {/* Metro-style page header with route map aesthetics */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative">
            <div className="flex items-center space-x-4 mb-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-primary" />
                <div className="w-8 h-0.5 bg-gradient-metro-lines"></div>
                <Navigation className="h-5 w-5 text-kmrl-blue" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-display bg-gradient-hero bg-clip-text text-transparent">
              Control Center
            </h2>
            <p className="text-muted-foreground text-lg font-medium mt-1">
              Central Hub • All Lines Operational • Real-time Monitoring
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="glass-card hover-lift">
              <RefreshCw className="h-4 w-4 mr-2" />
              Sync All Lines
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:shadow-metro hover-lift">
              <Plus className="h-4 w-4 mr-2" />
              Add Platform
            </Button>
          </div>
        </div>

        {/* Enhanced metrics with glassmorphism */}
        <div className="mb-8">
          <MetricsOverview />
        </div>

        {/* Main dashboard grid with metro station layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Metro platforms section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <h3 className="text-2xl font-semibold text-metro-heading">Metro Platforms</h3>
                <div className="w-12 h-0.5 bg-gradient-metro-lines"></div>
              </div>
              <Badge variant="outline" className="glass-card text-sm font-mono">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-status-online rounded-full animate-pulse"></div>
                  <span>{mockChannels.filter(c => c.status === 'online').length} / {mockChannels.length} Lines Active</span>
                </div>
              </Badge>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {mockChannels.map((channel, index) => (
                <div key={channel.id} className="animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                  <ChannelStatusCard channel={channel} />
                </div>
              ))}
            </div>

            {/* Metro Control Center */}
            <Card className="mt-8 metro-station-card animate-float" style={{animationDelay: '0.8s'}}>
              <CardHeader>
                <CardTitle className="flex items-center text-metro-heading">
                  <Settings className="h-6 w-6 mr-3 text-primary" />
                  Operations Control Center
                  <div className="ml-auto led-display text-xs px-3 py-1">
                    ALL SYSTEMS OPERATIONAL
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-auto py-6 flex-col glass-card hover-lift group">
                    <RefreshCw className="h-8 w-8 mb-3 group-hover:animate-spin" />
                    <span className="text-sm font-medium uppercase tracking-wider">Emergency Sync</span>
                    <span className="text-xs text-muted-foreground mt-1">All Platforms</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-6 flex-col glass-card hover-lift">
                    <Settings className="h-8 w-8 mb-3" />
                    <span className="text-sm font-medium uppercase tracking-wider">System Config</span>
                    <span className="text-xs text-muted-foreground mt-1">Admin Panel</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-6 flex-col glass-card hover-lift">
                    <Plus className="h-8 w-8 mb-3" />
                    <span className="text-sm font-medium uppercase tracking-wider">New Platform</span>
                    <span className="text-xs text-muted-foreground mt-1">Add Source</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-6 flex-col glass-card hover-lift">
                    <div className="w-8 h-8 mb-3 rounded-full bg-kmrl-orange flex items-center justify-center text-white font-bold text-lg">
                      ?
                    </div>
                    <span className="text-sm font-medium uppercase tracking-wider">Help Desk</span>
                    <span className="text-xs text-muted-foreground mt-1">24/7 Support</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Processing queue with metro timing display */}
          <div className="animate-float" style={{animationDelay: '1s'}}>
            <ProcessingQueue />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;