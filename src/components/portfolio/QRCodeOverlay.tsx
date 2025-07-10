
import { useState } from 'react';
import { X, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QRCodeOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const QRCodeOverlay = ({ isOpen, onClose }: QRCodeOverlayProps) => {
  const currentUrl = window.location.href;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Scan QR Code</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="text-center">
          <img 
            src={qrCodeUrl} 
            alt="QR Code for mobile version" 
            className="mx-auto mb-4 border rounded-lg"
          />
          <p className="text-sm text-gray-600 mb-4">
            Scan this QR code with your mobile device to view the website on your phone
          </p>
          <Button onClick={onClose} className="w-full">
            OK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeOverlay;
