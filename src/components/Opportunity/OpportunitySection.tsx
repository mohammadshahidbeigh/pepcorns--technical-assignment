import React from 'react';
import { motion } from 'framer-motion';
import OpportunityHeader from './OpportunityHeader';
import OpportunityStats from './OpportunityStats';
import OpportunityDocuments from './OpportunityDocuments';
import OpportunityBonusPerks from './OpportunityBonusPerks';

const OpportunitySection: React.FC = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8 md:space-y-12"
        >
          <OpportunityHeader />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <OpportunityStats />
            <OpportunityDocuments />
          </div>
          <OpportunityBonusPerks />
        </motion.div>
      </div>
    </section>
  );
};

export default OpportunitySection;