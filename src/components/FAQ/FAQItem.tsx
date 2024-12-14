import React from 'react';
import { motion } from 'framer-motion';
import type { FAQ } from '../../types';

interface FAQItemProps extends FAQ {
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h3 className="text-xl font-semibold mb-3">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </motion.div>
  );
};

export default FAQItem;