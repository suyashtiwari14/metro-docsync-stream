import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Image, 
  File,
  Clock,
  CheckCircle,
  AlertCircle,
  MoreVertical,
  Train,
  Zap,
  PlayCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface QueueItem {
  id: string;
  fileName: string;
  type: 'pdf' | 'image' | 'doc';
  source: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  timestamp: string;
  size: string;
  platform: string;
}

const mockQueueItems: QueueItem[] = [
  {
    id: '1',
    fileName: 'maintenance_report_001.pdf',
    type: 'pdf',
    source: 'Email - maintenance@kmrl.com',
    status: 'processing',
    progress: 75,
    timestamp: '2 min ago',
    size: '2.4 MB',
    platform: 'Platform 1'
  },
  {
    id: '2',
    fileName: 'invoice_scan_img_001.jpg',
    type: 'image',
    source: 'WhatsApp - Operations Group',
    status: 'completed',
    progress: 100,
    timestamp: '5 min ago',
    size: '1.8 MB',
    platform: 'Platform 2'
  },
  {
    id: '3',
    fileName: 'work_order_WO_12345.docx',
    type: 'doc',
    source: 'SharePoint - Documents',
    status: 'failed',
    progress: 0,
    timestamp: '8 min ago',
    size: '156 KB',
    platform: 'Platform 3'
  },
  {
    id: '4',
    fileName: 'safety_inspection_report.pdf',
    type: 'pdf',
    source: 'Maximo Export',
    status: 'pending',
    progress: 0,
    timestamp: '12 min ago',
    size: '3.1 MB',
    platform: 'Platform 4'
  }
];

const getFileIcon = (type: string) => {
  const iconClass = "h-5 w-5";
  switch (type) {
    case 'pdf': return <FileText className={`${iconClass} text-red-400`} />;
    case 'image': return <Image className={`${iconClass} text-kmrl-green`} />;
    case 'doc': return <File className={`${iconClass} text-kmrl-blue`} />;
    default: return <File className={iconClass} />;
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'pending': return <Clock className="h-4 w-4 text-warning animate-pulse" />;
    case 'processing': return <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />;
    case 'completed': return <CheckCircle className="h-4 w-4 text-success animate-glow" />;
    case 'failed': return <AlertCircle className="h-4 w-4 text-destructive animate-pulse" />;
    default: return <Clock className="h-4 w-4" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'pending': return <Badge className="glass-panel text-xs font-mono">BOARDING</Badge>;
    case 'processing': return <Badge className="bg-status-processing text-white animate-glow">IN TRANSIT</Badge>;
    case 'completed': return <Badge className="bg-status-online text-white">ARRIVED</Badge>;
    case 'failed': return <Badge variant="destructive" className="animate-pulse">DELAYED</Badge>;
    default: return <Badge variant="secondary">UNKNOWN</Badge>;
  }
};

const getProgressBarColor = (status: string) => {
  switch (status) {
    case 'processing': return 'bg-gradient-primary';
    case 'completed': return 'bg-gradient-success';
    case 'failed': return 'bg-gradient-to-r from-red-500 to-red-600';
    default: return 'bg-muted';
  }
};

const ProcessingQueue = () => {
  return (
    <Card className="metro-station-card h-fit">
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-gradient-primary text-white">
              <Train className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-metro-heading">Processing Queue</CardTitle>
              <p className="text-sm text-muted-foreground">Live Departure Board</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="led-display text-xs px-2 py-1">
              REAL-TIME
            </div>
            <Badge variant="outline" className="glass-card font-mono">
              {mockQueueItems.length} TRAINS
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {mockQueueItems.map((item, index) => (
            <div 
              key={item.id} 
              className="metro-station-card p-4 hover-lift group transition-all duration-300 animate-float"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Platform indicator */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    {getFileIcon(item.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {item.platform}
                      </span>
                      <div className="w-1 h-1 bg-muted-foreground/40 rounded-full"></div>
                      <span className="text-xs font-mono text-muted-foreground">
                        {item.source.split(' - ')[0]}
                      </span>
                    </div>
                    <p className="text-sm font-semibold truncate group-hover:text-primary transition-colors">
                      {item.fileName}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(item.status)}
                  {getStatusBadge(item.status)}
                </div>
              </div>
              
              {/* Train route line */}
              <div className="relative mb-3">
                <div className="h-0.5 bg-gradient-metro-lines/30 rounded-full"></div>
                <div className="absolute top-0 left-0 h-0.5 bg-gradient-metro-lines rounded-full animate-document-flow" style={{width: `${item.progress}%`}}></div>
              </div>
              
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-4 text-muted-foreground font-mono">
                  <span>{item.size}</span>
                  <span>•</span>
                  <span>Departure: {item.timestamp}</span>
                </div>
                {item.status === 'processing' && (
                  <div className="flex items-center space-x-2">
                    <Zap className="h-3 w-3 text-primary animate-pulse" />
                    <span className="font-mono text-xs text-primary">
                      {item.progress}% complete
                    </span>
                  </div>
                )}
              </div>
              
              {item.status === 'processing' && (
                <Progress 
                  value={item.progress} 
                  className="h-2 mt-2 bg-white/10" 
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" className="glass-card hover-lift">
              <PlayCircle className="h-4 w-4 mr-2" />
              View All Departures
            </Button>
            <div className="text-xs text-muted-foreground font-mono">
              Next update in 30s
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessingQueue;