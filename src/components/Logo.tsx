import React from 'react';
import { ScissorsLineDashed } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <ScissorsLineDashed className="h-8 w-8 text-rose-500 -rotate-45" />
      <span className="ml-2 text-2xl font-great-vibes text-yellow-100">
        Valli's <span className="ml-2 text-2xl font-great-vibes text-rose-600"> Tailoring </span>
      </span>
    </div>
  );
}