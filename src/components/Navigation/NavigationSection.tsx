import React from 'react';
import { NavigationSection as NavSectionType } from '../../types/navigation';
import NavigationLink from './NavigationLink';

const NavigationSection: React.FC<NavSectionType> = ({ title, items }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <NavigationLink key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default NavigationSection;