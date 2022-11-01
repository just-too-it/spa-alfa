export type BookProps = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    averageRating: number;
  };
  liked?: boolean;
};
