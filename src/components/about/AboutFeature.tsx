import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AboutFeatureProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function AboutFeature({ title, description, Icon }: AboutFeatureProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <Icon className="h-6 w-6 text-rose-600" />
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-500">{description}</p>
      </div>
    </div>
  );
}