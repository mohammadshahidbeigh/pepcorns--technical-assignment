import React from 'react';
import { motion } from 'framer-motion';

const OpportunityHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center md:text-left"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        The Sustainable Battery Built for the Circular Economy
      </h1>
      <h2 className="text-lg md:text-xl text-gray-600">
        Achieving an Equilibrium of Cost-effectiveness, Safety, and No Environmental Impact
      </h2>
    </motion.div>
  );
};

export default OpportunityHeader;