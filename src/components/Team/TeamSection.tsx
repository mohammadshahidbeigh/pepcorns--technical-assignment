import React from 'react';
import TeamMember from './TeamMember';
import { teamMembers } from '../../data/team';

const TeamSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">SorbiForce Team</h2>
        <p className="text-center text-gray-600 mb-12">
          Everyone helping build SorbiForce, not limited to employees
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;