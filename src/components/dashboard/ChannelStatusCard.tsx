import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MessageSquare, 
  FolderOpen, 
  Database,
  Pause,
  Play,
  MoreHorizontal,
  TrendingUp,
  AlertTriangle
} from "lucide-react";

interface ChannelStatusCardProps {
  channel: {
    id: string;
    name: string;
    type: 'email' | 'whatsapp' | 'sharepoint' | 'maximo';
    status: 'online' | 'offline' | 'warning' | 'processing';
    documentsToday: number;
    lastSync: string;
    isActive: boolean;
  };
}

const getChannelIcon = (type: string) => {
  switch (type) {
    case 'email': return <Mail className="h-5 w-5" />;
    case 'whatsapp': return <MessageSquare className="h-5 w-5" />;
    case 'sharepoint': return <FolderOpen className="h-5 w-5" />;
    case 'maximo': return <Database className="h-5 w-5" />;
    default: return <FolderOpen className="h-5 w-5" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'online': return 'bg-status-online';
    case 'offline': return 'bg-status-offline';
    case 'warning': return 'bg-status-warning';
    case 'processing': return 'bg-status-processing';
    default: return 'bg-muted';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'online': return 'Online';
    case 'offline': return 'Offline';
    case 'warning': return 'Warning';
    case 'processing': return 'Processing';
    default: return 'Unknown';
  }
};

const ChannelStatusCard = ({ channel }: ChannelStatusCardProps) => {
  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              {getChannelIcon(channel.type)}
            </div>
            <div>
              <CardTitle className="text-sm font-medium">{channel.name}</CardTitle>
              <p className="text-xs text-muted-foreground capitalize">{channel.type} Integration</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${getStatusColor(channel.status)}`}></div>
            <span className="text-sm font-medium">{getStatusText(channel.status)}</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {channel.documentsToday} today
          </Badge>
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Last sync: {channel.lastSync}</span>
          {channel.status === 'warning' && (
            <AlertTriangle className="h-4 w-4 text-warning" />
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 h-8"
          >
            {channel.isActive ? <Pause className="h-3 w-3 mr-2" /> : <Play className="h-3 w-3 mr-2" />}
            {channel.isActive ? 'Pause' : 'Resume'}
          </Button>
          <Button variant="outline" size="sm" className="h-8 px-3">
            <TrendingUp className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChannelStatusCard;