
import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, CameraOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QRCodeScannerProps {
  onScan: (data: string) => void;
  title: string;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onScan, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef<QrScanner | null>(null);
  const { toast } = useToast();

  const startScanner = async () => {
    if (!videoRef.current) return;
    
    try {
      scannerRef.current = new QrScanner(
        videoRef.current,
        (result) => {
          onScan(result.data);
          toast({
            title: "تم المسح بنجاح",
            description: "تم مسح رمز QR بنجاح",
          });
          // Stop scanner after successful scan
          stopScanner();
        },
        {
          returnDetailedScanResult: true,
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );
      
      await scannerRef.current.start();
      setIsScanning(true);
    } catch (error) {
      console.error("Camera error:", error);
      toast({
        title: "خطأ في الكاميرا",
        description: "تأكد من منح إذن الوصول للكاميرا",
        variant: "destructive",
      });
    }
  };

  const stopScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.stop();
      scannerRef.current.destroy();
      scannerRef.current = null;
      setIsScanning(false);
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup on component unmount
      stopScanner();
    };
  }, []);

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="relative rounded-lg overflow-hidden bg-black aspect-square max-w-xs mx-auto">
          <video 
            ref={videoRef} 
            className="w-full h-full object-cover"
          />
          {!isScanning && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white">
              <Camera className="h-16 w-16 mb-4 opacity-60" />
              <p className="text-center opacity-80">اضغط على زر البدء لمسح رمز QR</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-2 pt-4">
        {!isScanning ? (
          <Button 
            onClick={startScanner}
            className="bg-hrm-blue hover:bg-hrm-blue/90 gap-2"
          >
            <Camera className="h-4 w-4" />
            بدء المسح
          </Button>
        ) : (
          <Button 
            onClick={stopScanner}
            variant="outline"
            className="gap-2"
          >
            <CameraOff className="h-4 w-4" />
            إيقاف المسح
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QRCodeScanner;
