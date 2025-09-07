import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  FileText, 
  Clock, 
  CheckCircle,
  Download,
  AlertTriangle 
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}

const MetricCard = ({ title, value, change, trend, icon }: MetricCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={`text-xs ${getTrendColor()} flex items-center mt-1`}>
            <TrendingUp className="h-3 w-3 mr-1" />
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

const MetricsOverview = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Documents Today"
        value="1,247"
        change="+12.5% from yesterday"
        trend="up"
        icon={<FileText className="h-4 w-4" />}
      />
      
      <MetricCard
        title="Processing Time"
        value="2.3s"
        change="-0.8s from avg"
        trend="up"
        icon={<Clock className="h-4 w-4" />}
      />
      
      <MetricCard
        title="Success Rate"
        value="99.2%"
        change="+0.3% from last week"
        trend="up"
        icon={<CheckCircle className="h-4 w-4" />}
      />
      
      <MetricCard
        title="Failed Ingestions"
        value="8"
        change="-4 from yesterday"
        trend="up"
        icon={<AlertTriangle className="h-4 w-4" />}
      />
    </div>
  );
};

export default MetricsOverview;