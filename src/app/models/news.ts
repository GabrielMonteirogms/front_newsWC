export interface News {
  id: number;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  featured: boolean;
  views: number;
  createdAt: string;
  videoUrl: string;
  categoryId: number;
  journalistId: number;
  stadiumId: number;
}
