export interface NavigationItem {
  title: string;
  description?: string;
  href: string;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export interface NavigationProps {
  isOpen?: boolean;
  onClose?: () => void;
}