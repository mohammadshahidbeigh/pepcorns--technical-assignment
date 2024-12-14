import React from 'react';
import { FileText } from 'lucide-react';

const OpportunityDocuments: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Company documents</h3>
      <div className="space-y-4">
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
          <FileText className="h-5 w-5" />
          <span>SorbiForce SAFE</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
          <FileText className="h-5 w-5" />
          <span>Sorbiforce Form C.pdf</span>
        </a>
      </div>
    </div>
  );
};

export default OpportunityDocuments;