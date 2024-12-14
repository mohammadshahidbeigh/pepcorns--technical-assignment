import React from 'react';
import { Globe } from 'lucide-react';

const UserMenu: React.FC = () => {
  return (
    <div className="flex items-center space-x-6">
      <button className="flex items-center space-x-1 text-gray-700">
        <Globe className="h-5 w-5" />
        <span>US</span>
      </button>
      <button className="text-gray-700 hover:text-gray-900">Log in</button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
        Sign up
      </button>
    </div>
  );
};

export default UserMenu;