import Header from "@/components/dashboard/Header";
import ChannelStatusCard from "@/components/dashboard/ChannelStatusCard";
import ProcessingQueue from "@/components/dashboard/ProcessingQueue";
import MetricsOverview from "@/components/dashboard/MetricsOverview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, Plus, Settings } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground">System Dashboard</h2>
            <p className="text-muted-foreground">Monitor and manage document ingestion channels</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Channel
            </Button>
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="mb-8">
          <MetricsOverview />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Channel Status Cards */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Integration Channels</h3>
              <Badge variant="outline">
                {mockChannels.filter(c => c.status === 'online').length} / {mockChannels.length} online
              </Badge>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              {mockChannels.map((channel) => (
                <ChannelStatusCard key={channel.id} channel={channel} />
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="mt-6 bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-auto py-4 flex-col">
                    <RefreshCw className="h-6 w-6 mb-2" />
                    <span className="text-xs">Sync All</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex-col">
                    <Settings className="h-6 w-6 mb-2" />
                    <span className="text-xs">Settings</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex-col">
                    <Plus className="h-6 w-6 mb-2" />
                    <span className="text-xs">Add Source</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex-col">
                    <Badge className="h-6 w-6 mb-2 rounded-full p-0 flex items-center justify-center">
                      ?
                    </Badge>
                    <span className="text-xs">Help</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Processing Queue */}
          <div>
            <ProcessingQueue />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;