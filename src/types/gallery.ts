export interface Artwork {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
  created_at: string;
}

export interface GalleryFilter {
  category: string | null;
  sortBy: "latest" | "oldest";
}
