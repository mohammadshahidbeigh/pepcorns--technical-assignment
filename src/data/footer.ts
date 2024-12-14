interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerLinks: FooterSection[] = [
  {
    title: 'For investors',
    links: [
      { text: 'Why invest', href: '#' },
      { text: 'How it works', href: '#' },
      { text: 'FAQ', href: '#' },
      { text: 'Risks', href: '#' }
    ]
  },
  {
    title: 'For startups',
    links: [
      { text: 'Why raise', href: '#' },
      { text: 'Learn', href: '#' },
      { text: 'FAQ', href: '#' },
      { text: 'Instruments', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { text: 'About', href: '#' },
      { text: 'Journal', href: '#' },
      { text: 'Events', href: '#' },
      { text: 'Contact', href: '#' }
    ]
  }
];