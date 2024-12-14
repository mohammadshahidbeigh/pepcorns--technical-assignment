import React from 'react';
import { NavigationItem } from '../../types/navigation';

const NavigationLink: React.FC<NavigationItem> = ({ title, description, href }) => {
  return (
    <a href={href} className="block group">
      <div className="text-base font-medium text-gray-900 group-hover:text-blue-600">
        {title}
      </div>
      {description && (
        <div className="mt-1 text-sm text-gray-500">{description}</div>
      )}
    </a>
  );
};

export default NavigationLink;