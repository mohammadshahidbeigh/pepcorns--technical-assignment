import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const socialIcons = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' }
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4 mt-6">
      {socialIcons.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;