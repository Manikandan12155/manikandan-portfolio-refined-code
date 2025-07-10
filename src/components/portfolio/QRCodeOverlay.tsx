
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QRCodeOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const QRCodeOverlay = ({ isOpen, onClose }: QRCodeOverlayProps) => {
  const currentUrl = window.location.href;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}`;

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 10000); // Auto close after 10 seconds

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-16 right-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl border p-4 max-w-xs animate-fade-in">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-semibold text-gray-900">Mobile View</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6">
            <X className="h-3 w-3" />
          </Button>
        </div>
        
        <div className="text-center">
          <img 
            src={qrCodeUrl} 
            alt="QR Code for mobile version" 
            className="mx-auto mb-3 border rounded"
          />
          <p className="text-xs text-gray-600 mb-3">
            Scan to view on mobile
          </p>
          <Button onClick={onClose} size="sm" className="w-full text-xs">
            OK
          </Button>
        </div>
        
        {/* Tooltip arrow */}
        <div className="absolute -top-2 right-8 w-4 h-4 bg-white border-l border-t transform rotate-45"></div>
      </div>
    </div>
  );
};

export default QRCodeOverlay;
