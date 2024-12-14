export interface Investment {
  id: string;
  title: string;
  description: string;
  raised: number;
  target: number;
  investors: number;
  daysLeft: number;
  imageUrl: string;
}

export interface FAQ {
  question: string;
  answer: string;
}