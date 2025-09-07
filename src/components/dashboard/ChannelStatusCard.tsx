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
  AlertTriangle,
  Radio
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

const getPlatformNumber = (type: string) => {
  switch (type) {
    case 'email': return '1';
    case 'whatsapp': return '2';
    case 'sharepoint': return '3';
    case 'maximo': return '4';
    default: return '0';
  }
};

const getMetroLineColor = (type: string) => {
  switch (type) {
    case 'email': return 'metro-line-orange';
    case 'whatsapp': return 'metro-line-green';
    case 'sharepoint': return 'metro-line-blue';
    case 'maximo': return 'bg-gradient-secondary';
    default: return 'bg-muted';
  }
};

const ChannelStatusCard = ({ channel }: ChannelStatusCardProps) => {
  return (
    <Card className="metro-station-card hover-lift glass-hover group transition-all duration-500">
      {/* Platform number indicator */}
      <div className="absolute -top-3 -left-3 z-10">
        <div className={`metro-platform-number ${getMetroLineColor(channel.type)} shadow-metro`}>
          {getPlatformNumber(channel.type)}
        </div>
      </div>
      
      {/* Glass overlay with status glow */}
      <div className={`absolute inset-0 rounded-2xl ${channel.status === 'online' ? 'bg-gradient-success/5' : channel.status === 'warning' ? 'bg-gradient-primary/5' : 'bg-muted/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      <CardHeader className="pb-3 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-xl glass-card ${getMetroLineColor(channel.type)} shadow-glass`}>
              {getChannelIcon(channel.type)}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-metro-heading">{channel.name}</CardTitle>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                Platform {getPlatformNumber(channel.type)} • {channel.type} Line
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 glass-hover">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 relative z-10">
        {/* Status indicator with LED styling */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className={`status-indicator ${getStatusColor(channel.status)}`}>
                <div className={`absolute inset-0 rounded-full ${getStatusColor(channel.status)} animate-ping`}></div>
              </div>
              <Radio className="h-3 w-3 text-muted-foreground animate-pulse" />
            </div>
            <div className="led-display text-xs px-2 py-1">
              NEXT TRAIN: {getStatusText(channel.status).toUpperCase()}
            </div>
          </div>
          <Badge variant="secondary" className="glass-card text-xs font-mono animate-document-flow">
            {channel.documentsToday} today
          </Badge>
        </div>
        
        {/* Sync status with railway terminology */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span className="font-mono">Last arrival: {channel.lastSync}</span>
          </div>
          {channel.status === 'warning' && (
            <div className="flex items-center space-x-1 text-warning animate-glow">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-xs font-medium">SIGNAL ISSUE</span>
            </div>
          )}
        </div>
        
        {/* Railway track separator */}
        <div className="railway-separator">
          <div className="relative w-full h-2 bg-gradient-metro-lines/20 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-document-flow"></div>
          </div>
        </div>
        
        {/* Metro-style control buttons */}
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 h-10 glass-card hover-lift group font-medium"
          >
            {channel.isActive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
            <span className="text-xs uppercase tracking-wider">
              {channel.isActive ? 'Stop Service' : 'Start Service'}
            </span>
          </Button>
          <Button variant="outline" size="sm" className="h-10 px-4 glass-card hover-lift">
            <TrendingUp className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChannelStatusCard;