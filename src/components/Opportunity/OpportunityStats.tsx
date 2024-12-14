import React from 'react';
import { motion } from 'framer-motion';

const OpportunityStats: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-amber-50 p-6 md:p-8 rounded-lg"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
        <div>
          <h3 className="text-gray-600 text-sm md:text-base mb-2">
            Clean energy production loses up to
          </h3>
          <div className="text-4xl md:text-6xl font-bold text-amber-500">30%</div>
        </div>
        <p className="text-sm md:text-base text-gray-700">
          of the electricity generated due to a lack of energy storage.
          <br />
          <span className="text-xs md:text-sm italic mt-2 block">
            Source: California Independent System Operator
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default OpportunityStats;