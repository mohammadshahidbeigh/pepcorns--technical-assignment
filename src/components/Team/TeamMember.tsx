import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  bio,
  image,
  socialLinks
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-600 mb-4">{title}</p>
        <p className="text-gray-700 mb-6">{bio}</p>
        
        <div className="flex space-x-4">
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} className="text-gray-400 hover:text-blue-600">
              <Facebook className="h-5 w-5" />
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} className="text-gray-400 hover:text-blue-400">
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} className="text-gray-400 hover:text-blue-700">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;