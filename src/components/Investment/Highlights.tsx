import React from 'react';
import { TrendingUp } from 'lucide-react';

const highlights = [
  'Sustainable, safe, cost-effective battery with zero environmental impact',
  'Support and funding from the US Department of State, Google, Brite & more',
  'Batteries designed for 5,000+ charge/discharge cycles',
  'Founding team with a strong background in clean energy',
  'Accepted into the Plug and Play accelerateAZ Sustainability program',
  'Signed 9 NDAs with energy companies totaling $14 billion in annual revenue',
  'Ranked among the top 3 US battery companies by F6S.com\'s AI, August 2024'
];

const Highlights: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Highlights</h2>
      
      <div className="bg-amber-100 rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <TrendingUp className="h-5 w-5 text-amber-700" />
          <span className="font-semibold text-amber-900">$1M+ raised</span>
        </div>
        <p className="text-sm text-amber-800">
          Company has previously raised over $1M in capital
        </p>
      </div>

      <ul className="space-y-4">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start">
            <span className="h-2 w-2 mt-2 rounded-full bg-gray-400 mr-3" />
            <span className="text-gray-700">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Highlights;