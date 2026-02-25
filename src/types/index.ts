export type AITool = {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  tags: string[];
  url: string;
  isFree: boolean;
  isFeatured: boolean;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  count: number;
};

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  url: string;
};
