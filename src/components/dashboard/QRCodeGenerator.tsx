
import React from "react";
import QRCode from "react-qr-code";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QRCodeGeneratorProps {
  value: string;
  title: string;
  size?: number;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  value,
  title,
  size = 200,
}) => {
  const { toast } = useToast();
  
  const downloadQRCode = () => {
    const svg = document.getElementById("qr-code-svg");
    if (!svg) return;
    
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    
    img.onload = () => {
      canvas.width = size;
      canvas.height = size;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      
      const downloadLink = document.createElement("a");
      downloadLink.download = `${title.replace(/\s+/g, '-')}-qr-code`;
      downloadLink.href = pngFile;
      downloadLink.click();
      
      toast({
        title: "تم التحميل بنجاح",
        description: "تم تحميل رمز QR بنجاح",
      });
    };
    
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };
  
  return (
    <Card className="w-full max-w-xs mx-auto">
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center pb-0">
        <div className="bg-white p-3 rounded-lg">
          <QRCode
            id="qr-code-svg"
            value={value}
            size={size}
            level="H"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pt-4">
        <Button 
          onClick={downloadQRCode}
          className="bg-hrm-blue hover:bg-hrm-blue/90 gap-2"
        >
          <Download className="h-4 w-4" />
          تحميل رمز QR
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QRCodeGenerator;
