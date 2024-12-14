import React from 'react';

interface Tab {
  label: string;
  count?: number;
  isActive?: boolean;
}

const TabNavigation: React.FC = () => {
  const tabs: Tab[] = [
    { label: 'Pitch', isActive: true },
    { label: 'Updates', count: 16 },
    { label: 'Reviews', count: 56 }
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              tab.isActive
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.label}
            {tab.count && <span className="ml-2 text-gray-400">{tab.count}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;