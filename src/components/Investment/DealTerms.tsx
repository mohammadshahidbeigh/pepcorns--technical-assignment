import React from "react";
import {Info} from "lucide-react";

interface DealTerm {
  label: string;
  value: string;
}

const DealTerms: React.FC = () => {
  const terms: DealTerm[] = [
    {label: "Security type", value: "SAFE"},
    {label: "Valuation cap", value: "$20M"},
    {label: "Funding goal", value: "$50K / $618K"},
    {label: "Minimum investment", value: "$100"},
    {label: "Maximum investment", value: "$300K"},
    {label: "Deadline", value: "December 10, 2024"},
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Deal terms</h2>
      <div className="space-y-4">
        {terms.map((term) => (
          <div key={term.label} className="flex justify-between items-center">
            <span className="text-gray-600">{term.label}</span>
            <div className="flex items-center space-x-2">
              <span className="font-medium">{term.value}</span>
              <Info className="h-4 w-4 text-gray-400 cursor-help" />
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-6 py-3 bg-blue-100 text-gray-700 rounded-lg hover:bg-gray-100">
        How it works
      </button>
    </div>
  );
};

export default DealTerms;
