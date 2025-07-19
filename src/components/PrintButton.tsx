'use client';

import { Download } from "lucide-react";

export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button 
      onClick={handlePrint}
      className="w-full bg-white text-orange-600 px-4 py-2 rounded-xl font-semibold hover:bg-orange-50 transition-colors"
    >
      Print Page
    </button>
  );
} 