import { NavigationSection } from '../types/navigation';

export const navigationItems: NavigationSection[] = [
  {
    title: 'All investors',
    items: [
      {
        title: 'Primary market',
        description: 'Live deals',
        href: '#'
      },
      {
        title: 'Secondary market',
        description: 'Buy and sell',
        href: '#'
      },
      {
        title: 'Republic Note',
        description: "Own a piece of Republic's upside",
        href: '#'
      },
      {
        title: 'Investor Network Membership',
        description: 'Receive exclusive discounts and benefits',
        href: '#'
      }
    ]
  },
  {
    title: 'Accredited only',
    items: [
      {
        title: 'Republic Venture',
        description: 'Opportunities for accredited investors',
        href: '#'
      },
      {
        title: 'Republic Capital',
        description: 'Multi-stage venture firm',
        href: '#'
      },
      {
        title: 'Republic Digital',
        description: 'Crypto hedge fund',
        href: '#'
      }
    ]
  },
  {
    title: 'More',
    items: [
      {
        title: 'Wallet',
        description: 'Manage your digital assets',
        href: '#'
      },
      {
        title: 'Mobile app',
        description: 'Available on iOS or Android',
        href: '#'
      },
      {
        title: 'Learning center',
        description: 'Explore investor resources',
        href: '#'
      },
      {
        title: 'FAQ',
        description: 'Get your questions answered',
        href: '#'
      }
    ]
  }
];