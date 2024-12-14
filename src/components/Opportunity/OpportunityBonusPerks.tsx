import React from 'react';
import { motion } from 'framer-motion';

const OpportunityBonusPerks: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 md:p-8 rounded-lg shadow-sm"
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-4">Bonus perks</h3>
      <p className="text-sm md:text-base text-gray-600 mb-6">
        In addition to your SAFE, you'll receive perks for investing in SorbiForce.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Invest</span>
            <span className="text-blue-600 font-semibold">157 investors</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-blue-600">$500</div>
        </div>
        
        <div>
          <span className="font-medium">Receive</span>
          <ul className="mt-2 space-y-2 text-sm md:text-base text-gray-600">
            <li className="flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></span>
              Recognition as one of the first investors
            </li>
            <li className="flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></span>
              Early access to product updates
            </li>
            <li className="flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></span>
              Exclusive investor newsletter
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default OpportunityBonusPerks;