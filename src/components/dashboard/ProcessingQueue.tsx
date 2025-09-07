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
  MoreVertical
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
    size: '2.4 MB'
  },
  {
    id: '2',
    fileName: 'invoice_scan_img_001.jpg',
    type: 'image',
    source: 'WhatsApp - Operations Group',
    status: 'completed',
    progress: 100,
    timestamp: '5 min ago',
    size: '1.8 MB'
  },
  {
    id: '3',
    fileName: 'work_order_WO_12345.docx',
    type: 'doc',
    source: 'SharePoint - Documents',
    status: 'failed',
    progress: 0,
    timestamp: '8 min ago',
    size: '156 KB'
  },
  {
    id: '4',
    fileName: 'safety_inspection_report.pdf',
    type: 'pdf',
    source: 'Maximo Export',
    status: 'pending',
    progress: 0,
    timestamp: '12 min ago',
    size: '3.1 MB'
  }
];

const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf': return <FileText className="h-4 w-4 text-red-500" />;
    case 'image': return <Image className="h-4 w-4 text-green-500" />;
    case 'doc': return <File className="h-4 w-4 text-blue-500" />;
    default: return <File className="h-4 w-4" />;
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'pending': return <Clock className="h-4 w-4 text-muted-foreground" />;
    case 'processing': return <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />;
    case 'completed': return <CheckCircle className="h-4 w-4 text-success" />;
    case 'failed': return <AlertCircle className="h-4 w-4 text-destructive" />;
    default: return <Clock className="h-4 w-4" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'pending': return <Badge variant="secondary">Pending</Badge>;
    case 'processing': return <Badge className="bg-status-processing text-white">Processing</Badge>;
    case 'completed': return <Badge className="bg-status-online text-white">Completed</Badge>;
    case 'failed': return <Badge variant="destructive">Failed</Badge>;
    default: return <Badge variant="secondary">Unknown</Badge>;
  }
};

const ProcessingQueue = () => {
  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Processing Queue</CardTitle>
          <Badge variant="outline">{mockQueueItems.length} items</Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {mockQueueItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 p-3 border rounded-lg bg-background/50">
              <div className="flex-shrink-0">
                {getFileIcon(item.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium truncate">{item.fileName}</p>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(item.status)}
                    {getStatusBadge(item.status)}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span className="truncate">{item.source}</span>
                  <span>{item.size} • {item.timestamp}</span>
                </div>
                
                {item.status === 'processing' && (
                  <Progress value={item.progress} className="h-1" />
                )}
              </div>
              
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <Button variant="outline" size="sm">
            View All Items
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessingQueue;