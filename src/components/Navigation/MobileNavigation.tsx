import React from "react";
import {navigationItems} from "../../data/navigation";
import {Search} from "lucide-react";

const MobileNavigation: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white md:hidden h-screen overflow-y-auto">
      {/* Container for all content */}
      <div className="p-4">
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="space-y-6">
          {navigationItems.map((section) => (
            <div key={section.title} className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <a key={item.title} href={item.href} className="block">
                    <div className="text-base font-medium text-gray-900">
                      {item.title}
                    </div>
                    {item.description && (
                      <div className="mt-1 text-sm text-gray-500">
                        {item.description}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-4">
          <button className="w-full py-2 text-center text-gray-700 hover:text-gray-900">
            Log in
          </button>
          <button className="w-full py-2 text-center bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
