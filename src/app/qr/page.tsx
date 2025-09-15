"use client";

import { useEffect, useRef } from "react";
import QRCode from "qrcode";

export default function QRCodePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const websiteUrl = "https://supplant.vercel.app";

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, websiteUrl, {
        width: 300,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF"
        }
      }, (error) => {
        if (error) console.error(error);
      });
    }
  }, []);

  const downloadQR = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'supplant-qr-code.png';
      link.href = canvasRef.current.toDataURL();
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          QR Code
        </h1>
        
        <div className="bg-white p-4 rounded-xl mb-6 inline-block">
          <canvas ref={canvasRef} />
        </div>
        
        <p className="text-white/80 mb-4">
          Scansiona questo QR code per visitare il sito della band
        </p>
        
        <p className="text-purple-300 text-sm mb-6 font-mono">
          {websiteUrl}
        </p>
        
        <button
          onClick={downloadQR}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Scarica QR Code
        </button>
        
        <div className="mt-6">
          <a
            href="/"
            className="text-white/60 hover:text-white transition-colors text-sm"
          >
            ← Torna alla homepage
          </a>
        </div>
      </div>
    </div>
  );
}
