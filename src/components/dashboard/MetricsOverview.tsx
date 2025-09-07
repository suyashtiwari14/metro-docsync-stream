import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  FileText, 
  Clock, 
  CheckCircle,
  Download,
  AlertTriangle,
  Train,
  Zap,
  Activity,
  Target
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
  gradient: string;
  delay: string;
}

const MetricCard = ({ title, value, change, trend, icon, gradient, delay }: MetricCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card className={`metro-station-card hover-lift animate-float ${gradient}`} style={{animationDelay: delay}}>
      {/* Glass overlay with glow effect */}
      <div className="absolute inset-0 bg-gradient-glass rounded-2xl opacity-50"></div>
      
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative z-10">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-1 h-4 bg-white/60 rounded-full"></div>
            <CardTitle className="text-xs font-medium text-white/90 uppercase tracking-wider">
              {title}
            </CardTitle>
          </div>
          <div className="led-display bg-black/20 text-white text-xs px-2 py-1 rounded border border-white/20">
            LIVE FEED
          </div>
        </div>
        <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-white animate-glow">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="text-4xl font-bold text-white mb-2 font-mono">{value}</div>
        {change && (
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 glass-panel px-2 py-1 rounded-full">
              <div className={`w-2 h-2 rounded-full ${trend === 'up' ? 'bg-kmrl-green' : trend === 'down' ? 'bg-status-offline' : 'bg-status-warning'} animate-pulse`}></div>
              <TrendingUp className={`h-3 w-3 ${getTrendColor()}`} />
              <span className={`text-xs font-medium font-mono ${getTrendColor()}`}>
                {change}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const MetricsOverview = () => {
  return (
    <div className="space-y-6">
      {/* Metro line header */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Activity className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold text-metro-heading">System Performance</h3>
        </div>
        <div className="flex-1 h-0.5 bg-gradient-metro-lines rounded-full"></div>
        <div className="led-display text-xs px-3 py-1">
          ALL PLATFORMS REPORTING
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Daily Passengers"
          value="1,247"
          change="+12.5% vs yesterday"
          trend="up"
          icon={<FileText className="h-6 w-6" />}
          gradient="bg-gradient-primary"
          delay="0s"
        />
        
        <MetricCard
          title="Platform Speed"
          value="2.3s"
          change="-0.8s improvement"
          trend="up"
          icon={<Zap className="h-6 w-6" />}
          gradient="bg-gradient-secondary"
          delay="0.2s"
        />
        
        <MetricCard
          title="Service Reliability"
          value="99.2%"
          change="+0.3% this week"
          trend="up"
          icon={<Target className="h-6 w-6" />}
          gradient="bg-gradient-success"
          delay="0.4s"
        />
        
        <MetricCard
          title="Service Alerts"
          value="8"
          change="-4 vs yesterday"
          trend="up"
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="bg-gradient-to-br from-orange-500 to-red-500"
          delay="0.6s"
        />
      </div>

      {/* Real-time system status bar */}
      <div className="glass-card p-4 rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Train className="h-5 w-5 text-primary animate-document-flow" />
            <span className="text-sm font-medium">Live System Status</span>
          </div>
          <div className="flex items-center space-x-6 text-xs font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-status-online rounded-full animate-pulse"></div>
              <span>Email: ACTIVE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-status-processing rounded-full animate-pulse"></div>
              <span>WhatsApp: SYNC</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-status-online rounded-full animate-pulse"></div>
              <span>SharePoint: ACTIVE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-status-warning rounded-full animate-pulse"></div>
              <span>Maximo: WARNING</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsOverview;