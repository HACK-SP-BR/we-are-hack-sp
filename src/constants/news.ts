export interface NewsItem {
  id: string;
  date: string;
  translations: {
    pt: {
      title: string;
      description: string;
      category: string;
    };
    en: {
      title: string;
      description: string;
      category: string;
    };
  };
  image?: string;
  link?: string;
}

export const news: NewsItem[] = [
];
