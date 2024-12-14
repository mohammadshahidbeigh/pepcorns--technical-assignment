import React from "react";
import {navigationItems} from "../../data/navigation";
import NavigationSection from "./NavigationSection";

const NavigationMenu: React.FC = () => {
  return (
    <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {navigationItems.map((section) => (
            <NavigationSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
